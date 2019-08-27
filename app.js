const Koa=require('koa')
const Router=require('koa-router')
//引入子路由
const admin=require('./routes/admin.js')
const wechat=require('./routes/wechat.js')

var app=new Koa()
var router=new Router()

router.get('/',(ctx)=>{
    ctx.body='这是一个首页'
})
//配置子路由
router.use('/admin',admin)
router.use('/wechat',wechat)


//启动路由
app.use(router.routes()).use(router.allowedMethods())
//监听端口
app.listen(8008)

