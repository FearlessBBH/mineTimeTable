// pages/person/parents/check/check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    control: [{
      "name": '管理',
      "detail": '拥有最高权限：学生管理，家长管理，课程添加，提醒设计，信息沟通等。',
      "left": 88,
      "check": true
    }, {
      "name": '参与',
      "detail": '拥有一般权限：课程添加，提醒设计，信息沟通等。',
      "left": 330,
      "check": false
    }, {
      "name": '浏览',
      "detail": '拥有最低权限：信息沟通。',
      "left": 570,
      "check": false
    }
    ],
    curIdx: 0
  },
  // 权限设置
  bindChoose: function (e) {
    let idx = e.currentTarget.dataset.idx;
    let ctl = this.data.control;
    ctl.forEach(item => {
      item.check = false
    })
    ctl[idx].check = true;

    this.setData({
      curIdx: idx,
      control: ctl
    })
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