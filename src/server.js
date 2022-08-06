const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));;

mongoose.connect("mongodb+srv://ajaypal2224:Ajay1103@cluster0.xjgqtvt.mongodb.net/EcommerceApp?retryWrites=true&w=majority").then(function(){
    console.log('dfdf');
       app.get("/",function(req,res){
        res.send("Ecormmerce Site")
});


        const userRoutes = require('./routes/user_routes');
        app.use("/api/user", userRoutes);

        const productRoutes = require('./routes/product_route');
        app.use("/api/product", productRoutes);
});

const PORT = 5000;
app.listen(PORT, function(){
    console.log('Server stared at Port : ${PORT}');
});