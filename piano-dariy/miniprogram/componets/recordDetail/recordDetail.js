// componets/recordDetail/recordDetail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    height:0,
    logs:[
      {id:0, title:"hello1", content:"Content", time:"2010/10/10", score:80},
      {id:1, title:"hello2", content:"Content", time:"2010/10/11", score:81},
      {id:2, title:"hello3", content:"Content", time:"2010/10/12", score:82},
      {id:3, title:"hello4", content:"Content", time:"2010/10/13", score:83},
      {id:4, title:"hello5", content:"Content", time:"2010/10/14", score:84}
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    Init: function(obj){
      this.setData({height:obj.height})
    },
    OnTap:function(e){
      console.info(e.currentTarget.dataset.id)
      /*
      wx.showToast({
        title: ""+e.currentTarget.dataset.id
      })
      */
      this.triggerEvent('OnRecordDetailTap', e.currentTarget.dataset.id, null)
    }
  },
  ready: function(opt){
  }
})
