// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true})
    // 连接成功
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));

// 用户集合规则
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
// 文章集合规则
const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    //使用 ID 将文章集合与作者集合进行关联 ObjectId为ID的数据类型
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' //关联
    }
});
// 用户集合
const User = mongoose.model('User', userSchema);
// 文章集合
const Post = mongoose.model('Post', postSchema);

// 创建用户
// User.create({name: 'itheima'}).then(result => console.log(result));
// 创建文章
// Post.create({titile: '123', author: '628c314f77c4ac15b151e421'}).then(result => console.log(result));

//不关联的查询 ==》输出为ID
// Post.find().then(result=>console.log(result));
//关联查询 ==》输出为对应集合的汉字
Post.find()
    .populate('author')
    .then(result => console.log(result))