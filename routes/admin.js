const Router=require('koa-router')

const router=new Router()

//引入子路由
const user=require('./admin/user.js')
const focus=require('./admin/focus.js')
const news=require('./admin/news.js')
/**
 * @route GET admin/login
 * @desc 登录接口
 * @access 接口是公开的
 */
router.get('/login',async (ctx)=>{
    ctx.body="登录接口"
})
//配置子路由
router.use('/user',user)
router.use('/focus',focus)
router.use('/news',news)

module.exports=router.routes()