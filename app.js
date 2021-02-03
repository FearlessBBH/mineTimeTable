//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      })
      // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            },
            fail: res => {
              console.log(res);
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    openId: '',
    session_key: '',
    navImg: [{
        imgsrc: '/images/icon/icon_index.png',
        activeImgsrc: '/images/icon/icon_index_active.png',
        title: '首页',
        viewTo: '../index/index',
        onoff: false
      },
      {
        imgsrc: '/images/icon/icon_course.png',
        activeImgsrc: '/images/icon/icon_course_active.png',
        title: '课程',
        viewTo: '../course/course',
        onoff: false
      },
      {
        imgsrc: '/images/icon/icon_interact.png',
        activeImgsrc: '/images/icon/icon_interact_active.png',
        title: '互动',
        viewTo: '../interact/interact',
        onoff: false
      },
      {
        imgsrc: '/images/icon/icon_person.png',
        activeImgsrc: '/images/icon/icon_person_active.png',
        title: '我的',
        viewTo: '../person/person',
        onoff: false
      }
    ],

  }
})