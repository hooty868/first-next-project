import MeetUpDetail from "../../components/meetups/MeetUpDetail";
import classes from "./pageStyle.module.css";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import NavList from "../../components/ui/NavList";
import Link from "next/link";
import RecommandCard from "../../components/ui/RecommandCard";

let cachedDb = null;

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
      <div className={classes.container}>
        <div className={classes.containerContent}>
          <MeetUpDetail
            articleId={meetupData._id}
            image={meetupData.image}
            title={meetupData.title}
            address={meetupData.address}
            description={meetupData.description}
          />
          <aside className={classes.containerAside}>
            {/* <NavList articleId={meetupData._id} />
            <div className={classes.cardContainer}>
              <div
                style={{
                  width: "100%",
                  height: 64,
                  background: "#000",
                  borderRadius: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2
                  style={{
                    color: "#fff",
                    fontSize: 24,
                  }}
                >
                  推薦閱讀
                </h2>
              </div>
              {["1", "2", "3", "4", "5"].map((e) => {
                return <RecommandCard key={e} imageSrc={meetupData.image} />;
              })}
            </div> */}
          </aside>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { res } = context;
  res.setHeader("Cache-Control", "s-maxage=86400", "stale-while-revalidate");
  const meetUpId = context.params.meetupId;
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

  let meetups = await db
    .collection("meetups")
    .findOne({ _id: ObjectId(meetUpId) });

  let data = JSON.parse(JSON.stringify(meetups));

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
