import Head from "next/head";
import styles from "../../../styles/Page.module.css";
import PageBody from "../../../components/page/PageBody";
import Link from "next/link";
import { MongoClient } from "mongodb";
import Moment from "moment";

export default function Page(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>聚好玩</title>
        <meta
          name="description"
          content="聚好玩網站集結論壇、展覽、講座、免費體驗及各式有趣活動資訊；無論您想要找什麼樣的活動，方便的您查詢喜愛的活動聚好玩都是您事半功倍的好幫手。"
        ></meta>
      </Head>
      <PageBody
        article={props.meetupData}
        hotArticles={props.hotArticles}
        latestArticles={props.latestArticles}
      />
      <div className={styles.relatedPostContainer}>
        <div className={styles.relatedPostTitle}>
          <h3>相關閱讀</h3>
        </div>
        <div className={styles.relatedPostList}>
          {props.hotArticles.slice(3, 7).map((item) => {
            return (
              <article key={item.id} className={styles.postCard}>
                <img
                  className={styles.postCardCoverImage}
                  src={item.sectionOne.image}
                  alt="description for image"
                />
                <div className={styles.postContent}>
                  <h4>
                    <Link href="/">{item.title}</Link>
                  </h4>
                  <div className={styles.postMeta}>
                    <p>{`BY: ${item.author.name}`}</p>
                    <span />
                    <p>{Moment(item.writeTime).format("MMM DD, YYYY")}</p>
                    <span />
                    <p>{` 觀看數2031`}</p>
                  </div>
                  <div className={styles.postShortDes}>
                    <p>{item.abstract.slice(0, 168)}</p>
                  </div>
                </div>
                <div className={styles.postFooter}>
                  <Link href="/" passHref={true}>
                    {`閱讀更多`}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { res } = context;
  res.setHeader("Cache-Control", "s-maxage=18000", "stale-while-revalidate");
  const articleId = context.params.articleId;
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
  const meetupsCollection = db.collection("articles");
  const data = await meetupsCollection.findOne({ id: articleId });
  const hotArticles = await meetupsCollection
    .find({})
    .limit(6)
    .sort({ read: -1 })
    .toArray();
  const latestArticles = await meetupsCollection
    .find({})
    .limit(6)
    .sort({ writeTime: -1 })
    .toArray();

  delete data._id;

  return {
    props: {
      meetupData: data,
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
    },
  };
}
