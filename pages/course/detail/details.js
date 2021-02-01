// pages/course/detail/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    spreaded: false, // 是否展开
    show: false,
    columns: ['正常', '不正常', '非常正常', '随你说'],
    col_Index: 0,
    statusPopup: false,
    remindPopup: false,
    issuePopup: false,
    relationship: [
      {
        name: '爸爸',
        onoff: false
      },
      {
        name: '妈妈',
        onoff: false
      },
      {
        name: '爷爷',
        onoff: false
      },
      {
        name: '奶奶',
        onoff: false
      },
      {
        name: '外公',
        onoff: false
      },
      {
        name: '外婆',
        onoff: false
      }
    ],
    fileList: [], // 图片上传列表
  },
  afterRead(event) {
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.path,
      name: 'file',
      formData: { user: 'test' },
      success(res) {
        // 上传完成需要更新 fileList
        const { fileList = [] } = this.data;
        fileList.push({ ...file, url: res.data });
        this.setData({ fileList });
      },
    });
  },
  // 展开收起
  bindFlex: function () {
    var spreaded = !this.data.spreaded;
    // console.log(spreaded)
    this.setData({ spreaded: spreaded })
  },
  onOpenStatus: function () {
    this.setData({
      show: true,
      statusPopup: true,
      remindPopup: false,
      issuePopup: false
    });
  },
  onOpenRemind: function () {
    this.setData({
      show: true,
      remindPopup: true,
      statusPopup: false,
      issuePopup: false
    });
  },
  onOpenIssue: function () {
    this.setData({
      show: true, 
      issuePopup: true, 
      remindPopup: false,
      statusPopup: false
    });
  },
  onClose() {
    this.setData({
      show: false,
      statusPopup: false,
      remindPopup: false,
      issuePopup: false
    });
  },

  // 页面跳转
  bindViewCourseAll: function () {
    wx.navigateTo({
      url: '../all/all',
    })
  },

  // picker
  bindPickerChange: function (e) {
    this.setData({
      col_Index: e.detail.value
    })
  },

  // 关系选择
  bindChose: function (e) {
    var idx = e.currentTarget.dataset.idx;
    var choses = this.data.relationship;
    choses[idx].onoff = !choses[idx].onoff;
    this.setData({
      relationship: choses
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