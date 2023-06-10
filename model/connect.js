//引入mongoose模块
const mongoose = require('mongoose')
//关闭提醒
mongoose.set('strictQuery', false);
//导入配置
const config = require('config')
//连接数据库
mongoose.connect(`mongodb://localhost:27017/blog`)
    .then(()=>{console.log('数据库连接成功')})
    .catch(()=>{console.log('数据库连接失败')})
    


