const Router=require('koa-router')

const router=new Router()

//引入子路由
const user=require('./admin/user.js')
const focus=require('./admin/focus.js')
const news=require('./admin/news.js')

router.get('/',(ctx)=>{
    ctx.body="后台管理系统"
})
//配置子路由
router.use('/user',user)
router.use('/focus',focus)
router.use('/news',news)

module.exports=router.routes()