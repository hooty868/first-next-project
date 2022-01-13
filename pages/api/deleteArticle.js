import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const newData = req.body;
    const { id } = newData;
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    const db = client.db();
    const meetupsCollection = db.collection("articles");
    const result = await meetupsCollection.deleteOne({ id: id });
    client.close();
    res.status(200).json({ message: "delete" });
  }
}

export default handler;
