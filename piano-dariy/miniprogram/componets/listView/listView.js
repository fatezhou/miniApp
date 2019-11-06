// componets/listCtrl/listView.js
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
    expand:false,
    list:[
      {id:0, expand:false, title:"title", kids:["kid1", "kid2"]},
      {id:1, expand:false, title:"title2", kids:["kid3", "kid4"]} 
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapTitle: function(e){
      this.data.list[e.currentTarget.dataset.id].expand = !this.data.list[e.currentTarget.dataset.id].expand
      this.setData(this.data)
    },
    Init:function(obj){

    },
  }
})
