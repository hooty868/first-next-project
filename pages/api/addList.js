import { MongoClient } from "mongodb";

async function handler(req, res) {
  let client;
  let clientPromise;
  const Paginator = Object.keys(req.query)[0]

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }

  const clientClass = await clientPromise;

  const db = clientClass.db();

  const data = await db.collection("articles").find({
    writeTime:{
      $gt: new Date().getTime()-((Paginator)*24*3600*1000),
      $lt: new Date().getTime()-((Paginator-5)*24*3600*1000)
    }}).toArray();
  res.status(201).json({ data }) ;
}

export default handler;
