import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "GET") {
    const newData = req.body;
    // const { title, image, address, description } = newData;
    const client = await MongoClient.connect(
      "mongodb+srv://root:Ohp554tts@cluster0.y8lxx.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(newData);
    console.log(result);
    client.close();
    res.status(201).json({ message: "MeetUp inserted!" });
  }
}

export default handler;
