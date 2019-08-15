// pages/scoreLine/scoreLine.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    'year':'2019',
  },
  changeFour:function(){
    this.setData({
      year:2014
    })
  },
  changeFive: function () {
    this.setData({
      year: 2015
    })
  },
  changeSix: function () {
    this.setData({
      year: 2016
    })
  },
  changeSeven: function () {
    this.setData({
      year: 2017
    })
  },
  changeEight: function () {
    this.setData({
      year: 2018
    })
  },
  changeNine: function () {
    this.setData({
      year: 2019
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: false
    })
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