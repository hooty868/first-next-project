import MeetUpDetail from "../../components/meetups/MeetUpDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

const MeetUpDetails = ({
  meetupData = {
    _id: "61b0e002066ad37feed85fc1",
    title: "桃園之旅",
    image:
      "https://images.unsplash.com/photo-1638569763060-32073547bbe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    address: "台北市中山區",
    description: "到底有沒有成功",
    id: "61b0e002066ad37feed85fc1",
  },
}) => {
  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description}></meta>
      </Head>
      <MeetUpDetail
        image={meetupData.image}
        title={meetupData.title}
        address={meetupData.address}
        description={meetupData.description}
      />
    </>
  );
};

// export async function getStaticPaths() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://root:Ohp554tts@cluster0.y8lxx.mongodb.net/meetups?retryWrites=true&w=majority"
//   );
//   const db = client.db();
//   const meetupsCollection = db.collection("meetups");
//   const data = await meetupsCollection.find({}, { _id: 1 }).toArray();

//   client.close();
//   return {
//     fallback: "blocking",
//     paths: data.map((meet) => ({ params: { meetupId: meet._id.toString() } })),
//   };
// }

// export async function getStaticProps(context) {
//   const meetUpId = context.params.meetupId;
//   const client = await MongoClient.connect(
//     "mongodb+srv://root:Ohp554tts@cluster0.y8lxx.mongodb.net/meetups?retryWrites=true&w=majority"
//   );
//   const db = client.db();
//   const meetupsCollection = db.collection("meetups");
//   const data = await meetupsCollection.findOne({ _id: ObjectId(meetUpId) });

//   client.close();
//   return {
//     props: {
//       meetupData: {
//         ...data,
//         _id: data._id.toString(),
//         id: data._id.toString(),
//       },
//     },
//   };
// }

export async function getServerSideProps(context) {
  const { res } = context;
  res.setHeader("Cache-Control", `s-maxage=60, stale-while-revalidate`);
  const meetUpId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://root:Ohp554tts@cluster0.y8lxx.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const data = await meetupsCollection.findOne({ _id: ObjectId(meetUpId) });
  client.close();
  return {
    props: {
      meetupData: {
        ...data,
        _id: data._id.toString(),
        id: data._id.toString(),
      },
    },
  };
}

export default MeetUpDetails;
