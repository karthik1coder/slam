const express=require('express');

 const path=require('path');

const db=require('./config/mongoose');

const Dost=require('./model/contact.js');

const port=8000;

const app=express();

app.set('view engine','ejs');

 app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded()); // this will take form data as a request data

app.use(express.static('assets'));

 let friends=[];

app.get('/',function(req,res) // this method will search and result the page(similar to switch in node.js)
{

    Dost.find({},function(err,Dost)
    {

if(err)
{
    console.log("error");
}



return res.render('home',
    {title:"hello guys",

friends_list:Dost});

});





});
app.get('/adder',function(req,res)
{
    return res.render('adder',{title:"EUUUU",friends_list:friends});

});

app.post('/adding',function(req,res)
{
//friends.push(req.body);


 Dost.create(
{
name:req.body.name,
 birthdate:req.body.birthdate,
 address:req.body.address,
 Email:req.body.Email,
 zodiac:req.body.zodiac,
 hobbies:req.body.hobbies,
 movie:req.body.movie,
 food:req.body.food
},function(err,newfriend)
{

    console.log("hmmm",newfriend);
    return res.redirect('/');
    
});




 // return res.redirect('/');
});


 app.get('/delete/:name',function(req,res)
{
     let x=req.query.name;

console.log(req.params); //print params passed to link 

let index=friends.findIndex(friend => friend.name == x);

    

console.log(index);
    friends.splice(index,1);

console.log(req.query);

return res.redirect('/');

}); 


app.get('/delete_details/',function(req,res)
{
    let x=req.query.name;
    let y=req.query.birthdate
    let index=friends.findIndex(friend => friend.name == x);

    

console.log(index);
    friends.splice(index,1);

console.log(req.query);

return res.redirect('/');




});

app.get('/delete_db',function(req,res)
{
let id=req.query.id;

Dost.findByIdAndDelete(id,function(err)
{
    if(err)
    {
        console.log("error");
    }

return res.redirect('/');

});

});

app.listen(port,function(err)
{
	

console.log("running",port);

});


