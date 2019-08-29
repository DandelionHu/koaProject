const Koa=require('koa')
const Router=require('koa-router') //路由包
const bodyParser=require('koa-bodyparser')  //post 请求获取数据包
const passport=require('koa-passport') //验证token包
//引入子路由
const admin=require('./routes/admin.js')
const wechat=require('./routes/wechat.js')

var app=new Koa()
var router=new Router()
//使用bodyParser
app.use(bodyParser())

app.use(passport.initialize())
app.use(passport.session())

//加载验证token文件
require('./module/passport')(passport)


router.get('/',async(ctx)=>{
    ctx.body='欢迎进入node服务端'
})
//配置子路由
router.use('/admin',admin) //后台接口路由
router.use('/wechat',wechat) //用户端接口路由


//启动路由
app.use(router.routes()).use(router.allowedMethods())
//监听端口
const port=process.env.PORT || 8008

app.listen(port,()=>{
    console.log(`server started on ${port}`)
})

