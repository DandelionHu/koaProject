const Router=require('koa-router')
const passport=require('koa-passport')

const router=new Router()

/**
 * @route GET wechat/user/userInfo
 * @desc 用户信息接口  返回用户信息
 * @access 接口是私有的（登录之后才能看到）
 * 要验证token
 */
router.get('/userInfo',passport.authenticate('jwt', { session: false }),async (ctx)=>{
    //获取用户信息
    const user=ctx.state.user;
    ctx.body={
        id:user.id,
        account:user.account,
        email:user.email
    }
})

router.get('/getDetail',(ctx)=>{
    ctx.body="获取用户详情"
})


module.exports=router.routes()