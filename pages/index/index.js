//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    navImg: app.globalData.navImg,
    timed: 'day', // 显示日or月历
    dayCircle: 120,
    dayList: ['7/09周二', '7/10周三', '7/11周四', '7/12周五', '7/13周六', '7/13周六', '7/13周六', '7/13周六'],
    currentTab: 0,
    navImg: [],
    tabIndex: 0,  // 当前页面
    show: false
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
      url: '../course/detail/details'
    })
  },
  // 点击切换日历
  changeDay: function () {
    this.setData({ timed: 'day' })
  },
  // 点击切换月历
  changeMonth: function () {
    this.setData({ timed: 'month' })
  },
  // 点击切换日期并移动背景圆
  changeDate: function (e) {
    if (this.data.currentTab == e.currentTarget.dataset.idx) {
      return;
    }
    this.setData({
      currentTab: e.currentTarget.dataset.idx,
    })
  },
  showPerson() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  onLoad: function () {
    if (app.globalData.navImg) {
      var idx = this.data.tabIndex;
      app.globalData.navImg.forEach(item => item.onoff = false);
      app.globalData.navImg[idx].onoff = true;
      this.setData({
        navImg: app.globalData.navImg
        // userInfo: app.globalData.userInfo,
        // hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          // userInfo: res.userInfo,
          // hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            // userInfo: res.userInfo,
            // hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      // userInfo: e.detail.userInfo,
      // hasUserInfo: true
    })
  }
})
