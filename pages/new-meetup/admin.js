import "antd/dist/antd.css";
import { Table, Tag, Space } from "antd";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
import Head from "next/head";

const newMeetupPage = (props) => {
  const { Column } = Table;
  const router = useRouter();
  const addMeetupHandler = async (meetUp) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetUp),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    router.push("/");
  };
  const data = props.meetups.map((item, i) => {
    return {
      key: i.toString(),
      title: item.title,
      image: item.image,
      address: item.address,
      description: item.description,
    };
  });
  return (
    <>
      <Head>
        <title>Add new Meetups</title>
        <meta name="description" content="add meetup"></meta>
      </Head>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Table dataSource={data}>
          <Column title="活動名稱" dataIndex="title" key="title" />
          <Column title="活動圖片網址" dataIndex="image" key="image" />
          <Column title="活動地點" dataIndex="address" key="address" />
          <Column
            title="活動詳細描述"
            dataIndex="description"
            key="description"
          />
        </Table>
      </div>
    </>
  );
};

export default newMeetupPage;

export async function getServerSideProps() {
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
