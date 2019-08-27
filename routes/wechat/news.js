const Router=require('koa-router')

const router=new Router()

router.get('/',(ctx)=>{
    ctx.body="获取新闻列表"
})

router.get('/getDetail',(ctx)=>{
    ctx.body="获取新闻详情"
})


module.exports=router.routes()