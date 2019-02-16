var app=require('express')();
var http=require('http').Server(app);
var sql=require('mssql');
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded(extended:false));
app.use(bodyparser.json());
var data1;
var include=require('../include');

app.post('/data',function(req,res){
var memberid=req.param('memberid')	;

var fulladd=req.protocol+"://"+req.host+req.originalUrl;

if(memberid!==" ")
{
	var conn=new sql.connectionPool(conn);
	conn.connect().then(function(conn){
		
		
		
	
	var request=new sql.Request(conn);
	request.query("insert into table(id,name)values('"+req.memberid+"',)",function(err,recordset){
	if(err)	
	{
			console.log(err);
	}
	else
	{
			res.json(json.stringify(recordset));
	}
	
		
		
	})
	}).catch(function(err){
		
		console.log(err);
	
	
})
}
else
{
res.json("'status:'=>'0','message'=>'not access'");
	
}


	
	
	
	
});

app.get('/data',function(req,res){
res.json("'status:'=>'0','message:'=>'this method is not acessiable'")	;
	
});

app.listen(7000,function(){
console.log('port 70000')	;
	
});
