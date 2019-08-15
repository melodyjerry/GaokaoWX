// pages/schoolRank/schoolRank.js
import regeneratorRuntime from '../../regenerator-runtime/runtime.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    school: [],
    page: 1,
  },

  schoolr: function(rank, name) {
    return {
      'rank': rank,
      'name': name,
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //console.log(this.school)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  async onReady() {
    wx.showLoading({
      title: '网络加载中',
    });
    var that = this;
    const db = wx.cloud.database();
    const _ = db.command;

    const MAX_LIMIT = 20;
    const arraypro = [];
    //const countResult = await db.collection('college').count();
    //const total = countResult.total;
    //const batchTimes = Math.ceil(total / MAX_LIMIT);

    //for (let i = 0; i < 25; i++) {
    const promise = await db.collection('college').limit(MAX_LIMIT).get();
    for (let j = 0; j < promise.data.length; j++) {
      arraypro.push(that.schoolr(promise.data[j].rank, promise.data[j].schoolname))
    }
    // }

    this.setData({
      school: arraypro,
    })

    wx.hideLoading();
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
    });
    const db = wx.cloud.database();
    const _ = db.command;
    const that = this;
    const array = [];
    const promise =await db.collection('college').skip(this.data.page * 20).limit(20).get();
    for (let j = 0; j < promise.data.length; j++) {
      array.push(that.schoolr(promise.data[j].rank, promise.data[j].schoolname))
    }
    this.setData({
      school: this.data.school.concat(array),
      page:this.data.page+1
    });
    wx.hideLoading();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})