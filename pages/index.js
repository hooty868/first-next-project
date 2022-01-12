import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>解密之書</title>
        <meta
          name="description"
          content="a example for next project,and very useful"
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

// export async function getServerSideProps() {
//   const client = await MongoClient.connect(
//    process.env.MONGODB_URL
//   );
//   const db = client.db();
//   const meetupsCollection = db.collection("meetups");
//   const data = await meetupsCollection.find().toArray();
//   client.close();
//   return {
//     props: {
//       meetups: data.map((item) => {
//         return { ...item, _id: item._id.toString(), id: item._id.toString() };
//       }),
//     },
//   };
// }

export async function getStaticProps() {
  let cachedDb = null;

  async function connectToDatabase(uri) {
    if (cachedDb) {
      return cachedDb; // Prefer cached connection
    }
    const client = await MongoClient.connect(uri);
    const db = client.db();
    cachedDb = db; // Cache the database connection
    return db;
  }

  const db = await connectToDatabase(
    "mongodb+srv://root:Ohp554tts@cluster0.y8lxx.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const meetupsCollection = db.collection("meetups");
  const data = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: data.map((item) => {
        return { ...item, _id: item._id.toString(), id: item._id.toString() };
      }),
    },
  };
}

export default HomePage;
