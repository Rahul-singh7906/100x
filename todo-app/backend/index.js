const express=require('express');
const {createTodo}=require('./types');
const {Todo} = require('./db');
const app=express();
app.use(express.json());

app.post('/todo',async (req,res)=>{
    const createPayload=req.body;
    try{
        const parsedPayload=createTodo.parse(createPayload);
        await Todo.create({
            title:parsedPayload.title,
            description:parsedPayload.description,
            completed:false
        });
        res.status(201).json({message:'Todo created successfully'});
    }catch(err){
        res.status(411).json({message:err.errors});
        return;
    }
})

app.get('/todos',async (req,res)=>{
    const todos=await Todo.find({});
    res.json(todos);
})

app.put('/todo/:id',async(req,res)=>{
    const id=req.params.id;
    if(!id) res.status(400).json({message:'Id is required'});
    await Todo.findByIdAndUpdate(id,{completed:!Todo.completed});
    res.status(200).json({message:'Todo updated successfully'});
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})