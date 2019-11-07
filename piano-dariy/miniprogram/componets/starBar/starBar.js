// componets/starBar/starBar.js
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
    stars:[], //[{i:1, star:true},{i:2, star:true},{i:3, star:true},{i:4, star:false},{i:5, star:false}]
    n:0,
    action:"Action",
    editable:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    OnTap: function(e){
      console.info(e)
      if(this.data.editable == false){
        return
      }
      this.MakeStar(e.currentTarget.dataset.i)
    },
    Init: function(obj){
      this.data.action = obj.action
      this.MakeStar(obj.star)
      if(obj.editable){
        this.data.editable = obj.editable
      }
    },
    MakeStar: function(n){
      if(n > 5){
        n = 5
      }
      if(n < 0){
        n = 0
      }

      var array = [{id:1, star:false}, {id:2, star:false}, {id:3, star:false}, {id:4, star:false}, {id:5, star:false}]
      if(n > 0){
        for(var i = 0; i < n; i++){
          array[i].star = true
        }
      }
      this.data.stars = array
      this.data.n = n
      this.setData(this.data)
      return array
    },
    GetScore:function(){
      return this.data.n
    }
  }, 
  ready: function(){
    this.data.stars = this.MakeStar(0)
  }
})
