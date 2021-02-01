// pages/person/person.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navImg:[],
    listData:[
      {
        imgUrl:'/images/icon/icon_menber.png',
        title:'成员管理',
        viewTo:'parents/parents'
      },
      {
        imgUrl:'/images/icon/icon_child.png',
        title:'学生管理',
        viewTo:'child/child'
      },
      {
        imgUrl:'/images/icon/icon_course_color.png',
        title:'课程管理',
        viewTo:'../course/course'
      },
      {
        imgUrl:'/images/icon/icon_mine.png',
        title:'个人信息',
        viewTo:'information/information'
      }
    ],
    bigListData:[
      {
        imgUrl:'/images/icon/icon_notice.png',
        title:'消息管理',
        viewTo:'notice/notices'
      },
      {
        imgUrl:'/images/icon/icon_invite_color.png',
        title:'邀请好友'
      },
      {
        imgUrl:'/images/icon/icon_changefamily.png',
        title:'切换家庭',
        viewTo:'../login/index'
      }
    ],
    tabIndex:3 //当前页面
  },
  // 导航跳转页面
  bindViewTo: function(e) {
    if (this.data.tabIndex == e.currentTarget.dataset.idx) return;
    var idx = e.currentTarget.dataset.idx;
    app.globalData.navImg.forEach(item=>item.onoff=false);
    app.globalData.navImg[idx].onoff=true;
    wx.reLaunch({
      url: app.globalData.navImg[idx].viewTo
    })
  },
  bindViewCourseAdd:function(){
    wx.navigateTo({
      url: '../course/add/add'
    })
  },
  bindViewToPage:function(e){
    var idx = e.currentTarget.dataset.idx;
    // console.log(idx);
    wx.navigateTo({
      url: this.data.listData[idx].viewTo
    })
  },
  bindViewToPage2:function(e){
    var idx = e.currentTarget.dataset.idx;
    // console.log(idx);
    wx.navigateTo({
      url: this.data.bigListData[idx].viewTo
    })
  },
  // bindViewToLogin(){
  //   wx.navigateTo({
  //     url: '../login/index',
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.navImg) {
      var idx = this.data.tabIndex;
      app.globalData.navImg.forEach(item => item.onoff = false);
      app.globalData.navImg[idx].onoff = true;
      this.setData({
        navImg: app.globalData.navImg
      })
    }
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