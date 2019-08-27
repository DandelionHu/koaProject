const Router =require('koa-router')

const router=new Router()

router.get('/',(ctx)=>{
    ctx.body="轮播图列表"
})

router.get('/add',(ctx)=>{
    ctx.body="增加轮播图"
})

router.get('/edit',(ctx)=>{
    ctx.body="编辑轮播图"
})

router.get('/delete',(ctx)=>{
    ctx.body="删除轮播图"
})

module.exports=router.routes()
