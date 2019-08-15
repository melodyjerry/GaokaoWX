// pages/school/school.js
import regeneratorRuntime from '../../regenerator-runtime/runtime.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showsearch: false, //显示搜索按钮
    searchtext: '', //搜索文字 院校
    input: '', //文本框清空 院校
    school: [], //院校
    searchtext1: '', //搜索文字 专业
    input1: '', //文本框清空 专业
    major: [
      {name:"物联网工程",type:"工科",introduce:"兵哥教你吹壳子"},
      {name:"物联网工程",type:"工科",introduce:"兵哥教你吹壳子"}
    ], //专业
    page: 1,
    //院校查询切换
    schoolColor:"#05867C",
    schoolIf:1,
    //专业查询切换
    majorColor:"",
    majorIf:0
  },

  //分类出所要数据
  schoolmessage: function(schoolname, schooltype, schoolcity, logo) {
    return {
      name: schoolname,
      type: schooltype,
      city: schoolcity,
      img: logo
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //输入搜索文字 院校
  inputSearch: function(e) {
    this.setData({
      showsearch: e.detail.cursor > 0,
      searchtext: e.detail.value
    })
  },
  //输入搜索文字 专业
  inputSearch: function(e) {
    this.setData({
      showsearch: e.detail.cursor > 0,
      searchtext1: e.detail.value
    })
  },
  //提交搜索，查询 院校
  async submitSearch() {
    wx.showLoading({
      title: '网络加载中',
    })
    const db = wx.cloud.database();
    const _ = db.command;
    const area = this.data.searchtext;
    console.log(area);
    //设置输出最大条数
    const MAX_LIST = 20;
    //定义一个输出信息数组message
    const message = [];
    //定义一个图片路径，用于未查到logo
    const nologo = "../img/no.png";
    //根据输入地区信息查找学校
    const schoolmes = await db.collection('college').where({
      //使用正则表达式实现模糊查找
      area: db.RegExp({
        //从搜索栏中获取的value作为规则进行匹配。
        regexp: area,
        //不区分大小写
        options: 'i'
      })
    }).limit(MAX_LIST).get();
    //查询每个学校的logo的url，并将有效信息放入信息数组message中
    for (let i = 0; i < schoolmes.data.length; i++) {
      const collegelogo = await db.collection('logo').where({
        name: _.eq(schoolmes.data[i].schoolname)
      }).get();
      if (collegelogo.data[0] == undefined) {
        message.push(this.schoolmessage(schoolmes.data[i].schoolname, schoolmes.data[i].school_type, schoolmes.data[i].area, nologo))
      } else {
        message.push(this.schoolmessage(schoolmes.data[i].schoolname, schoolmes.data[i].school_type, schoolmes.data[i].area, collegelogo.data[0].url))
      }
    }
    this.setData({
      school: message
    })
    wx.hideLoading()
  },
  /**
   * 专业查询函数
   */
  submitSearch1:function(){

  },
 /**
  * 点击专业查询函数
  */
  major: function() {
    this.setData({
      //院校查询切换
      schoolColor:"",
      schoolIf:0,
      //专业查询切换
      majorColor:"#05867C",
      majorIf:1
    })
  },
  /**
   * 点击院校查询函数
   */
  schoolFind: function() {
    this.setData({
      //院校查询切换
      schoolColor:"#05867C",
      schoolIf:1,
      //专业查询切换
      majorColor:"",
      majorIf:0
    })
  },
  //清空文本框
  zero: function() {
    this.setData({
      input: ''
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  async onReachBottom() {
    wx.showLoading({
      title: '网络加载中',
    })
    const db = wx.cloud.database();
    const _ = db.command;
    const area = this.data.searchtext;
    //设置输出最大条数
    const MAX_LIST = 20;
    //定义一个输出信息数组message
    const addmessage = [];
    //定义一个图片路径，用于未查到logo
    const nologo = "../img/no.png";
    //根据输入地区信息查找学校
    const addschoolmes = await db.collection('college').where({
      //使用正则表达式实现模糊查找
      area: db.RegExp({
        //从搜索栏中获取的value作为规则进行匹配。
        regexp: area,
        //不区分大小写
        options: 'i'
      })
    }).skip(this.data.page * 20).limit(MAX_LIST).get();
    console.log(addschoolmes);
    //查询每个学校的logo的url，并将有效信息放入信息数组message中
    for (let i = 0; i < addschoolmes.data.length; i++) {
      const addcollegelogo = await db.collection('logo').where({
        name: _.eq(addschoolmes.data[i].schoolname)
      }).get();
      if (addcollegelogo.data[0] == undefined) {
        addmessage.push(this.schoolmessage(addschoolmes.data[i].schoolname, addschoolmes.data[i].school_type, addschoolmes.data[i].area, nologo))
      } else {
        addmessage.push(this.schoolmessage(addschoolmes.data[i].schoolname, addschoolmes.data[i].school_type, addschoolmes.data[i].area, addcollegelogo.data[0].url))
      }
    }
    console.log(addmessage)
    this.setData({
      school: this.data.school.concat(addmessage),
      page: this.data.page + 1
    })
    wx.hideLoading()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})