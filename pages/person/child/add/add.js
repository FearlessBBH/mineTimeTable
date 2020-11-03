// pages/person/child/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    relationship:[
      {
        name:'爸爸',
        bgColor:'none',
        txtColor:'#000'
      },
      {
        name:'妈妈',
        bgColor:'#ff8200',
        txtColor:'#fff'
      },
      {
        name:'爷爷',
        bgColor:'none',
        txtColor:'#000'
      },
      {
        name:'奶奶',
        bgColor:'none',
        txtColor:'#000'
      },
      {
        name:'外公',
        bgColor:'none',
        txtColor:'#000'
      },
      {
        name:'外婆',
        bgColor:'none',
        txtColor:'#000'
      }
    ],
  },

  // 关系选择
  bindChose:function(e){
    let idx = e.currentTarget.dataset.idx;
    let choses = this.data.relationship;
    choses.forEach(item=>{
        item.bgColor = 'none';
        item.txtColor = '#000';
    });
    choses[idx].bgColor = '#ff8200';
    choses[idx].txtColor = '#fff';
    this.setData({
      relationship:choses
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