// pages/course/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    columns: ['请选择学生', '赵11', '赵22'],
    colIndex: 0,
    isDayed: true,
    Once_date: '2020-10-14',
    startTime: '09:00',
    endTime: '16:00',
    startDate: '2020-10-14',
    endDate: '2020-12-12',
    spreaded: false, //自选列表是否展开
    optionalClass:[
      {
        "date":"2020-07-02",
        "time":"09：30-11：00"
      },
      {
        "date":"2020-07-04",
        "time":"09：30-16：00"
      },
      {
        "date":"2020-07-08",
        "time":"09：35-11：00"
      },
      {
        "date":"2020-07-02",
        "time":"09：30-11：00"
      },
    ]
  },
  bindViewCourseEdit:function(){
    wx.navigateTo({
      url: '../edit/edit'
    })
  },

  // 选择单次/周期
  bindIsDayed: function () {
    this.setData({ isDayed: true })
  },
  bindIsWeekend: function () {
    this.setData({ isDayed: false })
  },

  // 选择学生
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      colIndex: e.detail.value
    })
  },

  // 选择日期
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      Once_date: e.detail.value
    })
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

  // 选择起始/结束日期
  bindChangeStartDate: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      startDate: e.detail.value
    })
  },
  bindChangeEndDate: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      endDate: e.detail.value
    })
  },

  // 自选课表的展开收缩
  bindFlex: function () {
    var onoff = this.data.spreaded;
    onoff = !onoff;
    this.setData({ spreaded: onoff })
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