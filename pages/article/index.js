import Head from "next/head";
import styles from "../../styles/Home.module.css";
import HomeBody from "../../components/homePage/homeBody";
import { MongoClient } from "mongodb";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>解密之書</title>
        <meta
          name="description"
          content="你最喜歡的數字媒體雜誌，包含人工智能,科技,工作和生活中最快樂的時刻，與你分享和創造"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeBody
        articles={props.articles}
        hotArticles={props.hotArticles}
        latestArticles={props.latestArticles}
        TagArticles={props.TagArticles}
      />
    </div>
  );
}

export async function getStaticProps() {
  const uri = process.env.MONGODB_URL;
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

  let client;
  let clientPromise;

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

  const ArticleCollection = db.collection("articles");
  const data = await ArticleCollection.find({}).limit(6).toArray();
  const hotArticles = await ArticleCollection.find({})
    .limit(6)
    .sort({ read: -1 })
    .toArray();
  const latestArticles = await ArticleCollection.find({})
    .limit(6)
    .sort({ writeTime: -1 })
    .toArray();
  const TagArticles = await ArticleCollection.find({}).toArray();

  return {
    props: {
      articles: data.map((item) => {
        delete item._id;
        return {
          ...item,
        };
      }),
      hotArticles: hotArticles.map((item) => {
        delete item._id;
        return {
          ...item,
        };
      }),
      latestArticles: latestArticles.map((item) => {
        delete item._id;
        return {
          ...item,
        };
      }),
      TagArticles: TagArticles.map((item) => {
        delete item._id;
        return item.category;
      }),
    },
    revalidate: 36000,
  };
}
