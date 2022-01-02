//get the library

const mongoose=require('mongoose');

//connect database

mongoose.connect('mongodb://localhost/contacts_list_db');

//acquire connection

const db=mongoose.connection;

//error verification

db.on('error',console.error.bind(console,'connection error:'));

//working perfectly
db.once('open',function()
{
	console.log("chill bro");
});