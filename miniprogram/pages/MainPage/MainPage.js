// miniprogram/pages/MainPage/MainPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexList: [
      {
        title: '表情包制作',
        name: 'maker',
        color: 'cyan',
        icon: 'colorlens'
      },
      {
        title: 'やぷらす是谁',
        name: 'profile',
        color: 'olive',
        icon: 'myfill'
      },
      {
        title: '相关作品简介',
        name: 'anime',
        color: 'mauve',
        icon: 'album'
      },
      /*{
        title: '联系作者',
        name: 'contact',
        color: 'pink',
        icon: 'friend'
      },*/
    ]
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

  },

  contactMe: function(e) {
    console.log("233")
    wx.previewImage({
      urls: ["https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/qrcode.jpg?sign=924dd6d56939ec9e1bd1c1a52b6db394&t=1577431317"],
    })
  }
})