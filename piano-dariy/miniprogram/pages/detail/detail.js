// miniprogram/pages/detail/detail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "",
    name: "Kid",
    title:"",
    editable:true,
    content:"",
    star:[3,4,5,2,1]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var opt= options
    if(options.editable == true){
      this.data.editable = true
    }else{
      this.data.editable = false
    }

    if (opt.name){
      this.data.name = opt.name
    }

    if (opt.title){
      this.data.title = opt.title
    }

    if (opt.content){
      this.data.content = opt.content
    }
    
    this.data.editable = true
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
    this.starHand.Init({ star: this.data.star[0], action: "手型", editable: this.data.editable, color: "#f89a1e"})
    this.starBreath.Init({ star: this.data.star[1], action: "呼吸", editable: this.data.editable, color: "#f89a1e"})
    this.starNote.Init({ star: this.data.star[2], action: "音符", editable: this.data.editable, color: "#f89a1e"})
    this.starRhythm.Init({ star: this.data.star[3], action: "节奏", editable: this.data.editable, color: "#f89a1e"})
    this.starSing.Init({ star: this.data.star[4], action: "唱谱", editable: this.data.editable, color: "#f89a1e"})
    var date = new Date()
    this.data.date = "" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    this.setData({ date:this.data.date})
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

  onClickOK: function(){
    var comfirmData = {}
    comfirmData.score = [
      this.starHand.GetScore(),
      this.starBreath.GetScore(),
      this.starNote.GetScore(),
      this.starRhythm.GetScore(),
      this.starSing.GetScore()
    ]
    comfirmData.name = this.data.name
    comfirmData.time = this.data.time
    comfirmData.content = this.data.content
    comfirmData.title = this.data.title
    console.info("onClickOK")
    wx.cloud.callFunction({
      name: "push_record",
      data: comfirmData,
      success: res => {
        console.info(res)
      }
    })
    console.info("onClickOK-end")
    /*
    wx.cloud.callFunction({
      name:"push_record",
      data: {
        a:1
      },
      success: res => {
        console.info(res)
      },
      fail: res =>{
        console.info(res)
      }
    })
    */
  },
  onClickCancel: function(){
    console.info("onClickCancel")
    wx.cloud.callFunction({
      name: "query_record",
      data: {name:"Kid"},
      success: res => {
        console.info(res)
      }
    })
    console.info("onClickCancel-end")
  },
  onTimeChanged: function(e){
    if (this.data.editable == false){
      return
    }
    this.data.date = e.detail.value
    this.setData({ date: this.data.date})
  }
})