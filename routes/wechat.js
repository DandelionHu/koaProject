const Router =require('koa-router')
const jwt=require('jsonwebtoken')  //生成token包
const tools=require('../module/tools')
const config=require('../module/config')
const validatorTools=require('../module/validator') //验证
const router =new Router()

//引入子路由
const user=require('./wechat/user.js')
const focus=require('./wechat/focus.js')
const news=require('./wechat/news.js')
/**
 * @route POST wechat/register
 * @desc 注册接口
 * @access 接口是公开的
 */
router.post('/register',async(ctx)=>{
    console.log(ctx.request.body)
    const account=ctx.request.body.account=ctx.request.body.account || '';//用户名
    const email=ctx.request.body.email=ctx.request.body.email || '';//邮箱
    const password=ctx.request.body.password=ctx.request.body.password || '';//密码

    const errors=validatorTools.registerInput(ctx.request.body);//验证 账号 邮箱 密码
    if(!validatorTools.isEmpty(errors)){
        //返回值为空 代表验证通过 取反代表验证不通过
        ctx.status=405;
        ctx.body=errors;
        return
    }

    //查询数据库有没有account的账号
    //如果有account账号已被占用
    //如果没有存储数据库加密密码
    const passwordHash=tools.enbcrypt(password)
})

/**
 * @route POST wechat/login
 * @desc 登录接口  返回token
 * @access 接口是公开的
 */
router.post('/login',async(ctx)=>{
    console.log(ctx.request.body)
    const account=ctx.request.body.account=ctx.request.body.account || '';//用户名
    const password=ctx.request.body.password=ctx.request.body.password || '';//密码

    const errors=validatorTools.loginInput(ctx.request.body);//验证 账号 密码
    if(!validatorTools.isEmpty(errors)){
        //返回值为空 代表验证通过 取反代表验证不通过
        ctx.status=405;
        ctx.body=errors;
        return
    }

    // 查询 account 是否在数据库中
    const findResult=[]
    //没查到
    if(findResult.length==0){
        ctx.status=405;
        ctx.body={msg:'用户不存在'}
    }else{
        //查到后验证密码
        const result=await tools.chbcrypt(password,findResult.password);
        //验证通过
        if(result){
            //返回token
            const playload={
                account:findResult.account,
                email:findResult.email,
                id:findResult.id,
            }
            const token=jwt.sign(playload,config.secretOrkey,{expiresIn:3600}) //设置了过期时间
            ctx.status=200;
            ctx.body={success: true,token:'Bearer '+token}
        }else{
            ctx.status=405;
            ctx.body={msg: '密码错误'}
        }
    }
})

//配置子路由
router.use('/user',user)
router.use('/focus',focus)
router.use('/news',news)

module.exports=router.routes()