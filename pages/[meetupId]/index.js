import MeetUpDetail from "../../components/meetups/MeetUpDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

const MeetUpDetails = ({ meetupData }) => {
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

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://root:Ohp554tts@cluster0.y8lxx.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const data = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: true,
    paths: data.map((meet) => ({ params: { meetupId: meet._id.toString() } })),
  };
}

export async function getStaticProps(context) {
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
