const express = require('express')
const app = express()
const port = 3001
const sqlite3=require(sqlite3).verbose();
var db= new sqlite3.Database('Pallet');
db.serialize(function(){
  db.run("CREATE TABLE Pallet_Data(id INT , Layer INT, Size INT)");
  var stmt=db.prepare("INSERT into Pallet_Data(?,?)");
  for(var i=0;i<10;i++)
  {
    var d=new Date;
    var n=d.toLocaleTimeString();
  }
  stmt.finalize();
  db.each("SELECT * from Pallet_Data",function(err,row)
  
  {
    console.log("Pallet id:"+row.id,row.Layer,row.Size);
  });

  db.close();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})