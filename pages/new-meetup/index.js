import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

const newMeetupPage = () => {
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
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </div>
    </>
  );
};

export default newMeetupPage;
