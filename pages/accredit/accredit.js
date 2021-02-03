// pages/accredit/accredit.js
var appInst = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHide: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo') //判断小程序的API，回调，参数，组件等是否在当前版本可用
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    // 同步版本
    wx.clearStorageSync();
    if (appInst.globalData.openId === '') {
      // 显示授权
      this.setData({
        isHide: true
      })
    } else {
      wx.reLaunch({
        url: '/pages/index/index',
      });
    }
  },

  // 点击授权
  bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      console.log(e.detail)
      this.setData({ isHide: true });
      wx.login({
        success: res => {
          // console.log(res);
          if (res.code) {
            wx.request({
              url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx3877286d9b2e693e&secret=1d0d0924f6632005632202c97617f167&js_code=${res.code}&grant_type=authorization_code`,
              success(res) {
                console.log(res.data)
                  // 把数据储存到globalData
                appInst.globalData.userInfo = e.detail.userInfo;
                appInst.globalData.openId = res.data.openid;
                appInst.globalData.session_key = res.data.session_key;
              }

            });
          }
        }
      });
    } else {
      wx.showModal({
        title: '提示',
        content: '拒绝授权',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
  },
})