import Head from "next/head";
import styles from "../../../styles/Page.module.css";
import PageBody from "../../../components/page/PageBody";
import Link from "next/link";
import { MongoClient } from "mongodb";
import Moment from "moment";

export default function Page(props) {
  const arr = [1, 2, 3, 4];

  return (
    <div className={styles.container}>
      <Head>
        <title>解密之書</title>
        <meta
          name="description"
          content="Your favorite digital media magazine, which contains the artificial intelligence of science and technology work and the happiest moments in life, to share and create with you"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageBody article={props.meetupData} />
      <div className={styles.relatedPostContainer}>
        <div className={styles.relatedPostTitle}>
          <h3>相關閱讀</h3>
        </div>
        <div className={styles.relatedPostList}>
          {arr.map((item) => {
            return (
              <article key={item.toString()} className={styles.postCard}>
                <img
                  className={styles.postCardCoverImage}
                  src="https://upload.cc/i1/2021/05/02/iWRNDl.png"
                  alt="description for image"
                />
                <div className={styles.postContent}>
                  <h4>
                    <Link href="/">更好地發掘您的內在天才</Link>
                  </h4>
                  <div className={styles.postMeta}>
                    <p>{`BY: EWRIN JONSON`}</p>
                    <span />
                    <p>{Moment(item.writeTime).format("MMM DD, YYYY")}</p>
                    <span />
                    <p>{` 觀看數2031`}</p>
                  </div>
                  <div className={styles.postShortDes}>
                    <p>{`而是為了讓您可以感知所有這些錯誤是從哪裡誕生的,而是為了讓您可以感知所有這些錯誤是從哪裡誕生的。`}</p>
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
  const uri =
    "mongodb+srv://root:Ohp554tts@cluster0.y8lxx.mongodb.net/meetups?retryWrites=true&w=majority";
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

  delete data._id;
  return {
    props: {
      meetupData: data,
    },
  };
}
