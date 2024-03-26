const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const logger = require('./logger');

//middleware
app.use(cors())
app.use(express.json())

// Logger middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//mongodb config

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://bookstreet:POcLnKNdqF7RBXGn@cluster0.7t6fl3g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // new collection for data
    const bookCollection = client.db("bookInventory").collection("books");

    // insert data using post
    app.post("/uploadBook", async(req,res)=>{
      try{
        const data = req.body;
        const result = await bookCollection.insertOne(data);
        res.send(result)
    }catch(error){
      res.status(500).json({ error: 'Internal server error' });
    }
    })

    // get all books & find by a category from db
    app.get("/allBooks", async (req, res) => {
      try{
      let query = {};
      if (req.query?.category) {
          query = { category: req.query.category }
      }
      const result = await bookCollection.find(query).toArray();
      res.send(result)
    }catch(error){
      res.status(500).json({ error: 'Internal server error' });
    }
    }
    )

    // update a books method
    app.patch("/book/:id", async (req, res) => {
      try{
      const id = req.params.id;
      // console.log(id);
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
          $set: {
              ...updateBookData
          }
      }
      const options = { upsert: true };

      // update now
      const result = await bookCollection.updateOne(filter, updatedDoc, options);
      res.send(result);
    }catch(error){
      res.status(500).json({ error: 'Internal server error' });
    }
    })

     // delete a item from db
     app.delete("/book/:id", async (req, res) => {
      try{
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollection.deleteOne(filter);
      res.send(result);
    }catch(error){
      res.status(500).json({ error: 'Internal server error' });
    }
    })

    // get a single book data
    app.get("/book/:id", async (req, res) => {
      try{
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollection.findOne(filter);
      res.send(result)
      }catch(error){
        res.status(500).json({ error: 'Internal server error' });
      }
    })
    

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})