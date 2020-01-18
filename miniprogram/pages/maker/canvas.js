// miniprogram/pages/maker/canvas.js
import CanvasDrag from '../../components/canvas-drag/canvas-drag';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: '',
    pixelRatio: 0,
    windowWidth: 0,
    windowHeight: 0,
    fileid: '',
    graph: {},
    peizi: '',
    color: 'black',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      fileid: options.fileid
    })
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          pixelRatio: res.pixelRatio,
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight
        });
      },
    })
    wx.cloud.downloadFile({
      fileID: that.data.fileid,
      success: res => {
        // get temp file path
        /*that.setData({
          url: res.tempFilePath,
        })
        const ctx = wx.createCanvasContext('mymeme')
        ctx.drawImage(that.data.url, 0, 0, 256, 256, that.data.windowWidth * 0.2, that.data.windowHeight * 0.03, that.data.windowWidth * 0.6, that.data.windowWidth * 0.6)
        ctx.draw();*/
        CanvasDrag.changeBgColor('white');
        that.setData({
          graph: {
            w: 120,
            h: 120,
            type: 'image',
            url: res.tempFilePath,
          }
        });
      },
      fail: err => {
        // handle error
        console.log(that.data.fileid)
      }
    })
  },

  addpeizi: function() {
    var that = this;
    this.setData({
      graph: {
        type: 'text',
        text: that.data.peizi,
        color: that.data.color,
      }
    });
  },

  changepeizi: function(e) {
    this.setData({
      peizi: e.detail.value
    });
  },

  getpicture: function() {
    CanvasDrag.export()
      .then((filePath) => {
        /*console.log(filePath);
        wx.previewImage({
          urls: [filePath]
        })*/
        wx.navigateTo({
          url: '/pages/maker/cropper?src=' + filePath,
        })
      })
      .catch((e) => {
        console.error(e);
      })
  },

  changecolor: function (e) {
    this.setData({
      color: e.detail.value
    });
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