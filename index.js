const express = require('express')
const app = express()
const cors =require('cors')
require('dotenv').config()

const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT||5000

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_EMON_AHMED}:${process.env.DB_PASS}@cluster0.1uacied.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri)

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

try{
  
  const loanCollection = client.db("loan-sheet").collection("loan-deatail");
  
  await client.connect();
  app.post('/deatail',async(req,res)=>{
   const document=req.body;
   const result =await loanCollection.insertOne(document) 
   
    res.send(result)
  })
    // cheak

}
finally{

}


}

run().catch(console.dir);







app.get('/', (req, res) => {
  res.send('Hello Emon')
})

app.listen(port, () => {
  console.log(`Example app emon ${port}`)
})