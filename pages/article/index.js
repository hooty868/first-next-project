import Head from "next/head";
import styles from "../../styles/Home.module.css";
import HomeBody from "../../components/homePage/homeBody";
import { MongoClient } from "mongodb";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>聚好玩</title>
        <meta
          name="description"
          content="聚好玩網站集結論壇、展覽、講座、免費體驗及各式有趣活動資訊；無論您想要找什麼樣的活動，方便的您查詢喜愛的活動聚好玩都是您事半功倍的好幫手。"
        ></meta>
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
