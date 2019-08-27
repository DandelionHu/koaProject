const Router=require('koa-router')

const router=new Router()

router.get('/',(ctx)=>{
    ctx.body="获取轮播图列表"
})

router.get('/getDetail',(ctx)=>{
    ctx.body="获取轮播图详情"
})


module.exports=router.routes()