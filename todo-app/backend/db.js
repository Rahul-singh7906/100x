const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://rahulraghav312:IIXqS1Y3avfCw5bx@my-mongo.iwcde.mongodb.net/todo-app');

const TodoSchema=new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo=mongoose.model('Todo',TodoSchema);

module.exports = {
    Todo
}