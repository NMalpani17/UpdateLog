import express from 'express'

const app=express()

app.get('/',(req,res)=>{
console.log("Successful request")
res.status(200)
res.json({message:'Json message'})
})

export default app