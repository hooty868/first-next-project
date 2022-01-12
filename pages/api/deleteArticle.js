import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const newData = req.body;
    const { id } = newData;
    const client = await MongoClient.connect(
      "mongodb+srv://root:Ohp554tts@cluster0.y8lxx.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("articles");
    const result = await meetupsCollection.deleteOne({ id: id });
    client.close();
    res.status(200).json({ message: "delete" });
  }
}

export default handler;
