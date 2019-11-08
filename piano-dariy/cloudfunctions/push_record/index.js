// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

function GetDate(){
  var date = new Date()
  return "" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDay()
}

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  event.time = new Date().getTime()
  event.timeStr = GetDate()
  var res = await db.collection("piano-record").add({data:event})
  console.info(res)
  return res.data
}