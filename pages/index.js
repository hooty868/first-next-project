import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

// const DUMMY_data = [
//   {
//     id: "1",
//     title: "a first meetup",
//     image:
//       "https://images.unsplash.com/photo-1633119446564-877e2c2ae501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//     address: "123:ghj:acdfee",
//     description: "this is something good",
//   },
//   {
//     id: "2",
//     title: "a second meetup",
//     image:
//       "https://images.unsplash.com/photo-1638398921635-031fc290c29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
//     address: "456:qweqwe:acdfee",
//     description: "this is something wrong",
//   },
// ];

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="a example for next project,and very useful"
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getServerSideProps(context) {
  const client = await MongoClient.connect(
    "mongodb+srv://root:Ohp554tts@cluster0.y8lxx.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const data = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: data.map((item) => {
        return { ...item, _id: item._id.toString(), id: item._id.toString() };
      }),
    },
  };
}

// export async function getStaticProps() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://root:Ohp554tts@cluster0.y8lxx.mongodb.net/meetups?retryWrites=true&w=majority"
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

export default HomePage;
