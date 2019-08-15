// pages/recommendation/recommendation.js
import regeneratorRuntime from '../../regenerator-runtime/runtime.js';
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    valueNo: '',
    valueGra: '',
    valueNum:'',
    // 信息填写框值
    items: [
      { name: '文科', value: '文科' },
      { name: '理科', value: '理科' }],
    array: [
      { name: '男', value: '男' },
      { name: '女', value: '女'}]
  },

  // 单选按钮组
  radioChangek: function (e) {
    //console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      radio: e.detail.value
    })
  },
  inputChange1: function (e) {
    //console.log('input发生change事件，携带value值为：', e.detail.value)
    this.setData({
      inputValue:e.detail.value
    })
  },
  inputChange2: function (e) {
    //console.log('input发生change事件，携带value值为：', e.detail.value)
    this.setData({
      score: e.detail.value
    })
  },
  // 查询高考推荐结果函数接口
  resultInquire:function(){

  },
  //根据查出的学校再查出选这个学校的有哪些人
  async dorecommend(school) {
    var rank = this.data.inputValue;
    const db = wx.cloud.database();
    const _ = db.command;
    const sco = new Array();
    const sss = [];
    let sum = 0;
    let temp = 0;
    const promise = await db.collection('weici').orderBy('wc', 'asc').where({
      xx: _.eq(school)
    }).get();
    for (let i = 0; i < promise.data.length; i++) {
      // sss.push(this.datad(promise.data[i]._id, promise.data[i].xx, promise.data[i].wc));
      temp = await promise.data[i].wc;
      sum = sum + temp;
    }
    return sum / promise.data.length
  },
  // 高考信息提交按钮函数
  async buttonsubmit() {
    wx.showLoading({
      title: '网络加载中',
    });
    //获取输入的考生位次
    var rank = this.data.inputValue;
    //获取考生类别，理科或文科
    var radiolb = this.data.radio;
    //获取考生分数
    var score=this.data.score;
    //连接云数据库
    const db = wx.cloud.database();
    const _ = db.command;

    var that = this;
    var finarank = '';
    //查询位次，查出比输入位次大的最近的位次
    const rankmax = await db.collection('weici').orderBy('wc', 'asc').where({
      wc: _.gte(parseInt(rank)),
      lb: _.eq(radiolb)
    }).limit(1).get();

    //查询小的值
    const rankmin = await db.collection('weici').orderBy('wc', 'desc').where({
      wc: _.lte(parseInt(rank)),
      lb: _.eq(radiolb)
    }).limit(1).get()
    const maxResult = rankmax.data[0].wc;
    const minResult = rankmin.data[0].wc;
    //console.log(maxResult);
    //console.log(minResult);

    //判断位次，判断查出的两个位次与输入位次之间的距离，取离得最近的那一个数据
    if ((parseInt(maxResult) - parseInt(rank)) >= (parseInt(rank) - parseInt(minResult))) {
      finarank = minResult
    } else {
      finarank = maxResult
    }
    
    const ra = [];
    const grade = [];
    let result = [];
    let schoolloge = [];
    const school = await db.collection('weici').orderBy('wc', 'asc').where({
      wc: _.eq(parseInt(finarank)),
      lb: _.eq(radiolb)
    }).field({
      wc: true,
      xx: true,
    }).get();
    for (let i = 0; i < school.data.length; i++) {
      if (ra.indexOf(school.data[i].xx) == -1) {
        ra.push(school.data[i].xx);
        await this.dorecommend(ra[i]).then(res => {
          result.push(res)
        })
      }
    }
    const nologo = "../img/no.png";
    //查学校logo
    for (let x = 0; x < ra.length; x++) {
      const url = await db.collection('logo').where({
        name: _.eq(ra[x].trim()),
      }).get();
      if(url.data[0] == undefined){
        schoolloge.push(nologo)
      }else{
      schoolloge.push(url.data[0].url)
      }
    }
    //查专业
    const major = await db.collection('major').orderBy('var_score', 'desc').where({
      var_score:_.lte(parseInt(score)),
      studenttype: _.eq(radiolb)
    }).limit(1).get();
    console.log(major.data[0].var_score);
    app.major = major.data[0].specialtyname;
    //判断推荐院校录取概率等级
    for (let n = 0; n < result.length; n++) {
      let temp = result[n] / rank;
      if (temp >= 2) {
        grade.push('很稳')
      } else if (temp >= 1) {
        grade.push('稳')
      } else if (temp >= 0.7) {
        grade.push('中')
      } else if (temp >= 0.5) {
        grade.push('风险')
      } else {
        grade.push('高风险')
      }
    }
    //推荐院校赋值全局变量
    app.schoolData = ra;
    //推荐院校录取概率等级赋值全局变量
    app.grade = grade;
    //院校logo赋值全局变量
    console.log(app.grade);
    app.logo = schoolloge;
    console.log(app.major);
    //页面跳转
    wx.navigateTo({
      url: '../result/result?'
    })
    wx.hideLoading();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})