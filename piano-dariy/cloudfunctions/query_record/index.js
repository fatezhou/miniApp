// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

const max_limit = 20
const dataBaseName = "piano-record"

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()

  if (event.orderBy != null) {
    return await db.collection(dataBaseName).where(event.query).orderBy(event.orderBy, "desc").limit(max_limit).get()
  } else {
    return await db.collection(dataBaseName).where(event.query).limit(max_limit).get()
  }



  const count = await db.collection(dataBaseName).count()
  const total = count.total
  const batch = Math.ceil(total / max_limit)

  //event.query = {}
  //event.orderBy
  const tasks = []
  if (total < max_limit){
    if (event.orderBy != null) {
      promise = db.collection(dataBaseName).orderBy(event.orderBy, "asc").where(event.query).skip(i * max_limit).limit(max_limit).get()
    } else {
      promise = db.collection(dataBaseName).where(event.query).skip(i * max_limit).limit(max_limit).get()
    }
    tasks.push(promise)
  }else{
    for (let i = 0; i < batch; i++) {
      const promise = null
      if (event.orderBy != null) {
        promise = db.collection(dataBaseName).where(event.query).orderBy(event.orderBy, "desc").skip(i * max_limit).limit(max_limit).get()
      } else {
        promise = db.collection(dataBaseName).where(event.query).skip(i * max_limit).limit(max_limit).get()
      }
      tasks.push(promise)
    }
  }

  return (await Promise.all(tasks)).reduce((acc, cur) =>{
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg
    }
  })
}