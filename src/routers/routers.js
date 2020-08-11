const Router = require('koa-router')
const CardsModel = require('../models/card')

const router = new Router()

const log = console.log

router
    .get('/search/', async (ctx, next) => {
        try{
            const result = await CardsModel.find({name:name})
            ctx.body={status:"sucess", name: name};
        } catch (err){
            log(err)
            ctx.throw(412, {err})
        }
    })
