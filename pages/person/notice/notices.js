// pages/person/notice/notices.js
// import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:[
      {
        'title':'奥数上课提醒',
        'tag':'提醒',
        'content':'奥数课程编辑的提醒内容奥数课程编辑的提醒内容',
        'time':'2020-06-02 17：30',
        'status':'确认收到',
        'checked':false
      },
      {
        'title':'新概念英语上课提醒',
        'tag':'提醒',
        'content':'奥数课程编辑的提醒内容奥数课程编辑的提醒内容',
        'time':'2020-06-02 17：35',
        'status':'已确认',
        'checked':true
      },
      {
        'title':'你有新的亲友申请',
        'tag':'通知',
        'content':'奥数课程编辑的提醒内容奥数课程编辑的提醒内容',
        'time':'2020-06-02 17：30',
        'status':'已确认',
        'checked':true
      }

    ]
  },

  // 点击确认
  bindChecked:function(e){
    var idx = e.currentTarget.dataset.idx;
    if(this.data.msg[idx].checked) return;
    this.data.msg[idx].checked = true;
    this.data.msg[idx].status = '已确认';
    this.setData({ msg:this.data.msg });
    wx.showToast({
      title: '已确认',
      icon: 'success',
      duration: 2000
    })
    // Toast.success('已确认');
    // Toast.fail('失败文案');
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