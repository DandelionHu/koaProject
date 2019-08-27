const Router =require('koa-router')

const router =new Router()

//引入子路由
const user=require('./wechat/user.js')
const focus=require('./wechat/focus.js')
const news=require('./wechat/news.js')

router.get('/',(ctx)=>{
    ctx.body="微信端"
})

//配置子路由
router.use('/user',user)
router.use('/focus',focus)
router.use('/news',news)

module.exports=router.routes()