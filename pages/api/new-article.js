import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const newData = req.body;
    const { title, image, address, description } = newData;
    const client = await MongoClient.connect(
      "mongodb+srv://root:Ohp554tts@cluster0.y8lxx.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("articles");
    const result = await meetupsCollection.insertOne(newData);
    client.close();
    res.status(201).json({ message: result });
  }
}

export default handler;
