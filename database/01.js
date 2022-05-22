const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true})
    .then(()=>console.log('success'))//连接成功
    .catch(err=> console.log(err,'数据库连接失败'))//连接失败

//建立集合规则，即数据库对应的表
const courseSchema = new mongoose.Schema({
    name: String,
    author:String,
    isPublished:Boolean
})

const Course = mongoose.model('Course', courseSchema) // courses

// 创建文档
// const course = new Course({
//     name: 'node.js基础',
//     author: '黑马讲师',
//     isPublished: true
// });
// // 将文档插入到数据库中
// course.save();

// // 向集合中插入文档
// Course.create({name: 'Javascript', author: '黑马讲师', isPublished: false}, (err, result) => {
//     console.log(err)
//     console.log(result)
// })
//3.
Course.create({name: 'Javascript123', author: '黑马讲师', isPublished: false})
    .then(result => {
        console.log(result)
    })