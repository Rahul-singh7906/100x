const express=require('express')
const {createTodo,updateTodo}=require('./types')
const {Todo}=require('./db')
const app=express()
const port=3000
app.use(express.json())

app.post('/todo',async (req,res)=>{
    const createPayload=req.body;
    try{
        const parsePayload=createTodo.parse(createPayload)
        await Todo.create({
            title:parsePayload.title,
            description:parsePayload.description,
            completed:false
        })
        res.status(201).json({message:'Todo created successfully'})
    }
    catch(e){
        res.status.json({e})
    }
})


app.listen(port,()=>{
    console.log('server is listerning to port 3000');
})