import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>聚好玩</title>
        <meta
          name="description"
          content="聚好玩網站集結論壇、展覽、講座、免費體驗及各式有趣活動資訊；無論您想要找什麼樣的活動，方便的您查詢喜愛的活動聚好玩都是您事半功倍的好幫手。"
        ></meta>
      </Head>
      <article
        style={{ height: "100%", display: "flex", justifyContent: "center" }}
      >
        <MeetupList meetups={props.meetups} />
      </article>
      <aside></aside>
    </>
  );
};

export async function getServerSideProps() {
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

  let meetups = await db.collection("meetups").find({}).toArray();
  let result = JSON.parse(JSON.stringify(meetups));

  return {
    props: {
      meetups: result.map((item) => {
        return { ...item, _id: item._id.toString(), id: item._id.toString() };
      }),
    },
  };
}

export default HomePage;
