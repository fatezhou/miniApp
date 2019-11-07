// miniprogram/pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    this.starHand = this.selectComponent("#star-hand")
    this.starBreath = this.selectComponent("#star-breath")
    this.starNote = this.selectComponent("#star-note")
    this.starRhythm = this.selectComponent("#star-rhythm")
    this.starSing = this.selectComponent("#star-sing")
    this.starHand.Init({ star: 0, action: "手型" })
    this.starBreath.Init({ star: 0, action: "呼吸" })
    this.starNote.Init({ star: 0, action: "音符" })
    this.starRhythm.Init({ star: 0, action: "节奏" })
    this.starSing.Init({ star: 0, action: "唱谱" })
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