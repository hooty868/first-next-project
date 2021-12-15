import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import TestForm from "../../components/meetups/utile-transfer";
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
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
      <TestForm />
    </>
  );
};

export default newMeetupPage;
