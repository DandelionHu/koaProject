const Router=require('koa-router')

const router=new Router()

router.get('/',(ctx)=>{
    ctx.body={
        'titel':'新闻列表'
    }
})

router.get('/add',(ctx)=>{
    ctx.body="增加新闻"
})

router.get('/edit',(ctx)=>{
    ctx.body="编辑新闻"
})

router.get('/delete',(ctx)=>{
    ctx.body="删除新闻"
})

module.exports=router.routes()