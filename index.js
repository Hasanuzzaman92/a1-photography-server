const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.eli8ngd.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const servicesCollection = client.db('a1Photography').collection('services')
    }
    finally{

    }
}

run().catch(error => console.error(error))



app.get('/', (req, res)=>{
    res.send('a1 photography server is running')
})


app.listen(port, ()=>{
    console.log(`a1 photography server is running on port: ${port}`)
})