// pages/course/course.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // navImg:app.globalData.navImg,
    navImg: [],
    tabIndex: 1 // 当前页面
  },
  // 导航跳转页面
  bindViewTo: function (e) {
    if (this.data.tabIndex == e.currentTarget.dataset.idx) return;
    var idx = e.currentTarget.dataset.idx;
    app.globalData.navImg.forEach(item => item.onoff = false);
    app.globalData.navImg[idx].onoff = true;
    wx.reLaunch({
      url: app.globalData.navImg[idx].viewTo
    })
  },
  bindViewCourseAdd: function () {
    wx.navigateTo({
      url: '../course/add/add'
    })
  },
  bindViewCourseDetail: function () {
    wx.navigateTo({
      url: 'detail/details',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app.)
    if (app.globalData.navImg) {
      var idx = this.data.tabIndex;
      app.globalData.navImg.forEach(item => item.onoff = false);
      app.globalData.navImg[idx].onoff = true;
      this.setData({
        navImg: app.globalData.navImg
      })
    }
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