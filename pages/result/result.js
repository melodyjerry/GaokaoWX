// pages/result/result.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    low: []
  },
  // 单击按钮返回首页
  returnMain: function() {
    wx.switchTab({
      url: '../index/index'
    })
  },

  //logo、学校、概率、专业
  dataPush: function(logourl, xx, gl, zy) {
    return {
      'logourl': logourl,
      'name': xx,
      'extra': gl,
      'content': zy,
    };
  },
  //调用datapush()赋值
  mysetdata: function() {
    var datas = [];
    for (let i = 0; i < app.schoolData.length; i++) {
      datas.push(this.dataPush(app.logo[i], app.schoolData[i], app.grade[i], app.major));
      // datas.push(this.dataPush(app.schoolData[index + 1].xx, ((Math.random() / 2 * (100 - (index + 1) * 10)) + 50).toFixed(2) + '%', '物联网'));
    }
    return datas;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;
    //调用mydataset()给页面初始值赋值
    this.setData({
      // high: that.mysetdata(4),
      // middle: that.mysetdata(2),
      low: that.mysetdata()
    });
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
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})