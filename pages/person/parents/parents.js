// pages/person/parents/parents.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    person:[
      {
        'imgUrl':'',
        'name':'张姓名',
        'relationship':'小姨',
        'tel':15875645874,
        checked:true
      },
      {
        'imgUrl':'',
        'name':'赵姓名',
        'relationship':'爸爸',
        'tel':13549872652,
        checked:false
      },
      {
        'imgUrl':'',
        'name':'王姓名',
        'relationship':'妈妈',
        'tel':13546234562,
        checked:false
      }
    ]
  },
  bindViewParentCheck:function(){
    wx.navigateTo({
      url: 'check/check'
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