import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const newData = req.body;
    const { title, image, address, description, category } = newData;
    const client = await MongoClient.connect(
      "mongodb+srv://root:Ohp554tts@cluster0.y8lxx.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("articles");
    const tagArticleCollection = db.collection("tagArticle");
    const result = await meetupsCollection.insertOne(newData);
    const countArray = await tagArticleCollection.find({}).toArray();
    const counts = countArray[0];
    delete counts._id;
    await tagArticleCollection.updateOne(
      {
        id: "gmbookTag",
      },
      {
        $set: { all: counts.all + 1 },
      }
    );
    if (category === "科技") {
      await tagArticleCollection.updateOne(
        {
          id: "gmbookTag",
        },
        {
          $set: { tech: counts.tech + 1 },
        }
      );
    } else if (category === "工作") {
      await tagArticleCollection.updateOne(
        {
          id: "gmbookTag",
        },
        {
          $set: { work: counts.work + 1 },
        }
      );
    } else if (category === "人生") {
      await tagArticleCollection.updateOne(
        {
          id: "gmbookTag",
        },
        {
          $set: { life: counts.life + 1 },
        }
      );
    } else if (category === "娛樂") {
      await tagArticleCollection.updateOne(
        {
          id: "gmbookTag",
        },
        {
          $set: { fun: counts.fun + 1 },
        }
      );
    } else if (category === "知識") {
      await tagArticleCollection.updateOne(
        {
          id: "gmbookTag",
        },
        {
          $set: { info: counts.info + 1 },
        }
      );
    } else if (category === "時事") {
      await tagArticleCollection.updateOne(
        {
          id: "gmbookTag",
        },
        {
          $set: { news: counts.news + 1 },
        }
      );
    }
    client.close();
    res.status(201).json({ message: result });
  }
}

export default handler;
