import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const newData = req.body;
    // const { title, image, address, description } = newData;
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    const db = client.db();
    const meetupsCollection = db.collection("articles");
    await meetupsCollection.deleteOne({ id: newData.id });
    const result = await meetupsCollection.insertOne(newData);
    client.close();
    res.status(201).json({ message: result });
  }
}

export default handler;
