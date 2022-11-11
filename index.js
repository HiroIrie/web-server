const express=require("express");
const path=require("path");
const app=express();

console.log(__dirname);


app.use(express.static(path.join(__dirname,"public")))

/* app.get('/',(req,res)=>{
  res.send("<h1>topページです<h1>");
}); */

app.use(express.urlencoded({extended:false}));


app.post('/api/v1/quiz',(req,res)=>{
  const answer=req.body.answer;
  if(answer==="2"){
    res.send("<h1>正解</h1>")
    res.redirect("/colect.html");
  }else{
    res.send("不正解");
    res.redirect("/wrong.html")
  }

  });
app.listen(3000,()=>{
    console.log("サーバーが起動しました")
});


