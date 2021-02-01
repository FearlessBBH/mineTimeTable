// pages/course/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    onoff: true, // true规律 false自选
    weekend: [
      { "day": '每周一', "checked": false },
      { "day": '每周二', "checked": false },
      { "day": '每周三', "checked": false },
      { "day": '每周四', "checked": false },
      { "day": '每周五', "checked": false },
      { "day": '每周六', "checked": false },
      { "day": '每周日', "checked": false },
    ],
    startTime: '09:00',
    endTime: '16:00',
    text: ''
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      date: `选择了 ${event.detail.length} 个日期`,
    });
  },

  // 选择时间
  bindChangeStartTime: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      startTime: e.detail.value
    })
  },
  bindChangeEndTime: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      endTime: e.detail.value
    })
  },

  // 日期选择
  bindChecked: function (e) {
    var idx = e.currentTarget.dataset.idx;
    var items = this.data.weekend;
    items[idx].checked = !items[idx].checked;
    this.setData({ weekend: items })
  },

  // 规律or自选
  bindTabRegular: function () {
    this.setData({ onoff: true })
  },
  bindTabOption: function () {
    this.setData({ onoff: false })
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