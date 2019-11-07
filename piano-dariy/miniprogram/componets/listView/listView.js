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
      {id:0, expand:true, title:"2011-10", kids:["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "12"]},
      {id:1, expand:false, title:"2011-09", kids:["2", "23"]} ,
      {id:2, expand:false, title:"2011-08", kids:["2", "23"]} ,
      {id:3, expand:false, title:"2011-06", kids:["2", "23"]} ,
      {id:4, expand:false, title:"2011-03", kids:["2", "23"]} ,
      {id:5, expand:false, title:"2011-02", kids:["2", "23"]} ,
      {id:6, expand:false, title:"2011-01", kids:["2", "23"]} 
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
