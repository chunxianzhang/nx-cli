const express=require('express');
var router=express.Router();
const pool=require('../pool.js');
const cors=require('cors')
router.use(cors({
    origin:["http://localhost:8080"],
    credentials:true
}))
router.get('/getBannerImg',(req,res)=>{
    var sql=`SELECT banner_id,img_url,skip_url FROM banner ORDER BY banner_id`
    pool.query(sql,(err,result)=>{
        if(err)throw err
        res.send(result)
    })
})


module.exports=router