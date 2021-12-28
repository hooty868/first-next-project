import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const data = await meetupsCollection.find().toArray();
    client.close();
    // console.log(data);
    return {
      meetups: {
        meetups: data.map((item) => {
          return { ...item, _id: item._id.toString(), id: item._id.toString() };
        }),
      },
    };
  }
}

export default handler;
