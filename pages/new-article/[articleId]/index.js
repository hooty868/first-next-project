import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import Unsplash, { toJson } from "unsplash-js";
import { saveAs } from "file-saver";
import { MongoClient } from "mongodb";

const unsplash = new Unsplash({
  accessKey: "HEoGdIgyY17NjcjylHQMh-1Z7hmdTTV8lZ10r02hPcA",
});

const authors = [
  {
    name: "Addison",
    avatar: "https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/author1",
  },
  {
    name: "Bartholomew",
    avatar: "https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/author10",
  },
  {
    name: "Conrad",
    avatar: "https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/author11",
  },
  {
    name: "Jack",
    avatar: "https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/author2",
  },
  {
    name: "Aaliyah",
    avatar: "https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/author3",
  },
  {
    name: "Cathy",
    avatar:
      "https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/author4.jpeg",
  },
  {
    name: "Ernest",
    avatar:
      "https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/author5.jpeg",
  },
  {
    name: "Jodie",
    avatar:
      "https://aticle-image-gmbook.sgp1.digitaloceanspaces.com/author9.jpeg",
  },
];

const NewMeetupPage = (props) => {
  const modifiedArticle = props.articles[0];
  const [articleTitle, setArticleTitle] = useState(modifiedArticle.title);
  const [articleAbstract, setArticleAbstract] = useState(
    modifiedArticle.abstract
  );
  const [coverImage, setCoverImage] = useState(
    modifiedArticle.sectionOne.image
  );
  const [author, setAuthor] = useState({
    name: modifiedArticle.author.name,
    avatar: modifiedArticle.author.avatar,
  });
  const [read, setRead] = useState(modifiedArticle.read);
  const [secondImage, setSecondImage] = useState(
    modifiedArticle.sectionTwo.image
  );
  const [thirdImage, setThirdImage] = useState(
    modifiedArticle.sectionThree.image
  );
  const [searchImage, setSearchImage] = useState("");
  const [searchImageTwo, setSearchImageTwo] = useState("");
  const [searchImageThree, setSearchImageThree] = useState("");
  const [photos, setPhotos] = useState([]);
  const [photosSecond, setPhotosSecond] = useState([]);
  const [photosThird, setPhotosThird] = useState([]);
  const [category, setCategory] = useState(modifiedArticle.category);
  const [secTitleOne, setSecTitleOne] = useState(
    modifiedArticle.sectionOne.title
  );
  const [sectionOne, setSectionOne] = useState(
    modifiedArticle.sectionOne.content
  );
  const [secTitleTwo, setSecTitleTwo] = useState(
    modifiedArticle.sectionTwo.title
  );
  const [sectionTwo, setSectionTwo] = useState(
    modifiedArticle.sectionTwo.content
  );
  const [secTitleThird, setSecTitleThird] = useState(
    modifiedArticle.sectionThree.title
  );
  const [sectionThird, setSectionThird] = useState(
    modifiedArticle.sectionThree.content
  );
  const [secTitleFour, setSecTitleFour] = useState(
    modifiedArticle.sectionFour.title
  );
  const [sectionFour, setSectionFour] = useState(
    modifiedArticle.sectionFour.content
  );
  const [secTitleFive, setSecTitleFive] = useState(
    modifiedArticle.sectionFive.title
  );
  const [sectionFive, setSectionFive] = useState(
    modifiedArticle.sectionFive.content
  );
  const [secTitleSix, setSecTitleSix] = useState(
    modifiedArticle.sectionSix.title
  );
  const [sectionSix, setSectionSix] = useState(
    modifiedArticle.sectionSix.content
  );
  const [secTitleSeven, setSecTitleSeven] = useState(
    modifiedArticle.sectionSeven.title
  );
  const [sectionSeven, setSectionSeven] = useState(
    modifiedArticle.sectionSeven.content
  );
  const [recommandOne, setRecommandOne] = useState({ id: "", title: "" });
  const [recommandTwo, setRecommandTwo] = useState({ id: "", title: "" });
  const [recommandThree, setRecommandThree] = useState({ id: "", title: "" });
  const router = useRouter();
  const backRouter = () => {
    router.push(`/new-article`);
  };
  const getPhotos = (searchText, index) => {
    if (!searchText) {
      return;
    }
    unsplash.search
      .photos(searchText, 1, 20)
      .then(toJson)
      .then((json) => {
        if (index === 1) {
          setPhotos(json.results);
        } else if (index === 2) {
          setPhotosSecond(json.results);
        } else {
          setPhotosThird(json.results);
        }
      });
  };
  const addMeetupHandler = async () => {
    // if (!articleTitle || !coverImage) {
    //   alert("?????????????????????????????????????????????????????????");
    //   return;
    // }
    const response = await fetch("/api/editArticle", {
      method: "POST",
      body: JSON.stringify({
        id: modifiedArticle.id,
        category: category,
        status: 1,
        writeTime: modifiedArticle.writeTime,
        author: author,
        read: 0,
        title: articleTitle,
        abstract: articleAbstract,
        sectionOne: {
          image: coverImage,
          title: secTitleOne,
          content: sectionOne,
        },
        sectionTwo: {
          image: secondImage,
          title: secTitleTwo,
          content: sectionTwo,
        },
        sectionThree: {
          image: thirdImage,
          title: secTitleThird,
          content: sectionThird,
        },
        sectionFour: {
          title: secTitleFour,
          content: sectionFour,
        },
        sectionFive: {
          title: secTitleFive,
          content: sectionFive,
        },
        sectionSix: {
          title: secTitleSix,
          content: sectionSix,
        },
        sectionSeven: {
          title: secTitleSeven,
          content: sectionSeven,
        },
        recommandOne,
        recommandTwo,
        recommandThree,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = response.json();
    router.push(`/new-article`);
  };

  const Upload = ({ index }) => {
    async function handleProfileImageUpload(e) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);

      // Check that file is in proper format before making request
      const data = await fetch(`/api/upload-url`, {
        method: "POST",
        body: formData,
        "Content-Type": "image/jpg",
      });
      const { url } = await data.json();
      if (index === 1) {
        setCoverImage(url);
      } else if (index === 2) {
        setSecondImage(url);
      } else if (index === 3) {
        setThirdImage(url);
      }
    }
    return (
      <>
        <input
          onChange={handleProfileImageUpload}
          type="file"
          accept="image/png, image/jpeg"
        />
      </>
    );
  };
  const saveFile = (url, index) => {
    saveAs(
      url,
      index === 1 ? "cover.jpg" : index === 2 ? "second.jpg" : "third.jpg"
    );
    setPhotos([]);
    setPhotosSecond([]);
    setPhotosThird([]);
  };

  const randomAuthors = () => {
    const index = Math.floor(Math.random() * authors.length);
    setAuthor({ name: authors[index].name, avatar: authors[index].avatar });
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: 35,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          onClick={backRouter}
          style={{
            color: "#000",
            fontSize: 16,
            marginRight: 50,
            border: "1px solid #999",
            padding: 5,
            borderRadius: 5,
          }}
        >
          ????????????
        </div>
        <h1
          style={{
            color: "#000",
            fontSize: 25,
            margin: "10px 50px",
          }}
        >
          ????????????
        </h1>
        <div
          onClick={addMeetupHandler}
          style={{
            color: "#000",
            fontSize: 16,
            marginRight: 50,
            border: "1px solid #999",
            padding: 5,
            borderRadius: 5,
          }}
        >
          ????????????
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            padding: "20px 20px",
          }}
        >
          <div style={{ width: "100%" }}>
            <label
              style={{ display: "block", margin: "10px 0" }}
              htmlFor="title"
            >
              ????????????
            </label>
            <input
              style={{ width: "100%", height: 30 }}
              type="text"
              required
              id="title"
              onChange={(e) => setArticleTitle(e.target.value)}
              value={articleTitle}
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <p style={{ marginTop: 10 }}>??????</p>
            <div
              style={{
                display: "flex",
              }}
            >
              <label
                style={{ display: "block", margin: "10px 0" }}
                htmlFor="tech"
              >
                ??????
              </label>
              <input
                id="tech"
                type="checkbox"
                value="??????"
                style={{ marginTop: 10 }}
                onChange={(e) => {
                  const key = e.target.value;
                  setCategory(key);
                }}
                checked={category === "??????"}
              />
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <label
                style={{ display: "block", margin: "10px 0" }}
                htmlFor="work"
              >
                ??????
              </label>
              <input
                id="work"
                type="checkbox"
                value="??????"
                onChange={(e) => {
                  const key = e.target.value;
                  setCategory(key);
                }}
                checked={category === "??????"}
              />
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <label
                style={{ display: "block", margin: "10px 0" }}
                htmlFor="live"
              >
                ??????
              </label>
              <input
                id="live"
                type="checkbox"
                value="??????"
                onChange={(e) => {
                  const key = e.target.value;
                  setCategory(key);
                }}
                checked={category === "??????"}
              />
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <label
                style={{ display: "block", margin: "10px 0" }}
                htmlFor="entertainment"
              >
                ??????
              </label>
              <input
                id="entertainment"
                type="checkbox"
                value="??????"
                style={{ marginTop: 10 }}
                onChange={(e) => {
                  const key = e.target.value;
                  setCategory(key);
                }}
                checked={category === "??????"}
              />
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <label
                style={{ display: "block", margin: "10px 0" }}
                htmlFor="info"
              >
                ??????
              </label>
              <input
                id="info"
                type="checkbox"
                value="??????"
                style={{ marginTop: 10 }}
                onChange={(e) => {
                  const key = e.target.value;
                  setCategory(key);
                }}
                checked={category === "??????"}
              />
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <label
                style={{ display: "block", margin: "10px 0" }}
                htmlFor="news"
              >
                ??????
              </label>
              <input
                id="news"
                type="checkbox"
                value="??????"
                style={{ marginTop: 10 }}
                onChange={(e) => {
                  const key = e.target.value;
                  setCategory(key);
                }}
                checked={category === "??????"}
              />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
            }}
          >
            <p
              style={{
                margin: "10px 50px 0 0 ",
                padding: "5px 10px",
                width: 100,
                height: 30,
                border: "1px solid black",
              }}
              onClick={randomAuthors}
            >
              ??????
            </p>
            {author.name && (
              <p style={{ margin: "15px 50px 0 0" }}>
                {!!author.name ? author.name : "????????????"}
              </p>
            )}
            {author.avatar && (
              <img
                style={{ width: 100, height: 100 }}
                src={author.avatar}
                alt="1"
              />
            )}
            <p
              style={{
                margin: "10px 10px 0 10px",
                padding: "5px 10px",
                width: 100,
                height: 30,
                border: "1px solid black",
              }}
            >
              ?????????
            </p>
            <input
              style={{ marginTop: 10, width: "30%", height: 30 }}
              type="text"
              required
              id="title"
              onChange={(e) => setRead(e.target.value)}
              value={read}
            />
          </div>
          <div style={{ width: "100%", margin: "10px 0" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                marginRight: 20,
              }}
            >
              <section
                style={{ display: "block", width: "10%" }}
                htmlFor="title"
              >
                ????????????
              </section>
              <input
                style={{ width: "50%", height: 30 }}
                type="text"
                required
                id="title"
                onChange={(e) => setSearchImage(e.target.value)}
                value={searchImage}
              />
              <p
                onClick={getPhotos.bind(null, searchImage, 1)}
                style={{
                  display: "block",
                  marginBottom: 10,
                  border: "1px solid black",
                  width: 80,
                  textAlign: "center",
                  padding: "5px 2.5px",
                }}
              >
                ????????????(unsplash)
              </p>
              <Upload index={1} />
              {coverImage && (
                <img
                  style={{ width: 200, height: 100 }}
                  src={coverImage}
                  alt="1"
                />
              )}
            </div>
            <div style={{ display: "flex" }}>
              <input
                style={{ width: "50%", height: 30 }}
                type="text"
                required
                id="title"
                onChange={(e) => setCoverImage(e.target.value)}
                value={coverImage}
              />
              <p>{`??????????????????:${coverImage}`}</p>
            </div>
            <div style={{ display: "flex" }}>
              {photos.map((item, i) => {
                const { urls, alt_description } = item;
                return (
                  <div key={item.id}>
                    <label htmlFor="first">{alt_description}</label>
                    <img
                      style={{ width: 600, height: 400 }}
                      src={urls.small}
                      alt="1"
                    />
                    <button
                      className="cv"
                      onClick={saveFile.bind(null, urls.small, 1)}
                    >
                      Download File
                    </button>
                  </div>
                );
              })}
            </div>
            <div style={{ width: "100%" }}>
              <label
                style={{ display: "block", margin: "10px 0" }}
                htmlFor="abstract"
              >
                ????????????
              </label>
              <textarea
                style={{ width: "100%", height: 160 }}
                type="text"
                required
                id="abstract"
                onChange={(e) => setArticleAbstract(e.target.value)}
                value={articleAbstract}
              />
            </div>
            <div style={{ width: "100%" }}>
              <label
                style={{ display: "block", margin: "10px 0" }}
                htmlFor="title"
              >
                ????????????1
              </label>
              <input
                style={{ width: "100%", height: 30 }}
                type="text"
                required
                id="title"
                onChange={(e) => setSecTitleOne(e.target.value)}
                value={secTitleOne}
              />
              <label
                style={{ display: "block", margin: "10px 0" }}
                htmlFor="section1"
              >
                ????????????1
              </label>
              <textarea
                style={{ width: "100%", height: 160 }}
                type="text"
                required
                id="section1"
                onChange={(e) => setSectionOne(e.target.value)}
                value={sectionOne}
              />
            </div>
            <div style={{ width: "100%" }}>
              <label
                style={{ display: "block", margin: "10px 0" }}
                htmlFor="title"
              >
                ????????????2
              </label>
              <input
                style={{ width: "100%", height: 30 }}
                type="text"
                required
                id="title"
                onChange={(e) => setSecTitleTwo(e.target.value)}
                value={secTitleTwo}
              />
              <label
                style={{ display: "block", margin: "10px 0" }}
                htmlFor="section2"
              >
                ????????????2
              </label>
              <textarea
                style={{ width: "100%", height: 160 }}
                type="text"
                required
                id="section2"
                onChange={(e) => setSectionTwo(e.target.value)}
                value={sectionTwo}
              />
            </div>
            <div style={{ width: "100%" }}>
              <label
                style={{ display: "block", margin: "10px 0" }}
                htmlFor="title"
              >
                ????????????3
              </label>
              <input
                style={{ width: "100%", height: 30 }}
                type="text"
                required
                id="title"
                onChange={(e) => setSecTitleThird(e.target.value)}
                value={secTitleThird}
              />
              <label
                style={{ display: "block", margin: "10px 0" }}
                htmlFor="section1"
              >
                ????????????3
              </label>
              <textarea
                style={{ width: "100%", height: 100 }}
                type="text"
                required
                id="section1"
                onChange={(e) => setSectionThird(e.target.value)}
                value={sectionThird}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "100%", margin: "10px 0" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                marginRight: 20,
              }}
            >
              <section style={{ display: "block" }} htmlFor="image2">
                ????????????2
              </section>
              <input
                style={{ width: "50%", height: 30 }}
                type="text"
                required
                id="image2"
                onChange={(e) => setSearchImageTwo(e.target.value)}
                value={searchImageTwo}
              />
              <p
                onClick={getPhotos.bind(null, searchImageTwo, 2)}
                style={{
                  display: "block",
                  marginBottom: 10,
                  border: "1px solid black",
                  width: 80,
                  textAlign: "center",
                  padding: "5px 2.5px",
                }}
              >
                ????????????(unsplash)
              </p>
              <Upload index={2} />
              {secondImage && (
                <img
                  style={{ width: 200, height: 100 }}
                  src={secondImage}
                  alt="3"
                />
              )}
            </div>
            <div style={{ display: "flex" }}>
              <input
                style={{ width: "50%", height: 30 }}
                type="text"
                required
                id="title"
                onChange={(e) => setSecondImage(e.target.value)}
                value={secondImage}
              />
              <p>{`??????????????????:${secondImage}`}</p>
            </div>
            <div style={{ display: "flex" }}>
              {photosSecond.map((item) => {
                const { urls, alt_description } = item;
                return (
                  <div key={item.id}>
                    <label htmlFor="first">{alt_description}</label>
                    <img
                      style={{ width: 600, height: 400 }}
                      src={urls.small}
                      alt="1"
                    />
                    <button
                      className="cv"
                      onClick={saveFile.bind(null, urls.small, 2)}
                    >
                      Download File
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <label
              style={{ display: "block", margin: "10px 0" }}
              htmlFor="title"
            >
              ????????????4
            </label>
            <input
              style={{ width: "100%", height: 30 }}
              type="text"
              required
              id="title"
              onChange={(e) => setSecTitleFour(e.target.value)}
              value={secTitleFour}
            />
            <label
              style={{ display: "block", margin: "10px 0" }}
              htmlFor="section2"
            >
              ????????????4
            </label>
            <textarea
              style={{ width: "100%", height: 100 }}
              type="text"
              required
              id="section2"
              onChange={(e) => setSectionFour(e.target.value)}
              value={sectionFour}
            />
          </div>
          <div style={{ width: "100%", margin: "10px 0" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                marginRight: 20,
              }}
            >
              <section style={{ display: "block" }} htmlFor="image3">
                ????????????3
              </section>
              <input
                style={{ width: "50%", height: 30 }}
                type="text"
                required
                id="image3"
                onChange={(e) => setSearchImageThree(e.target.value)}
                value={searchImageThree}
              />
              <p
                onClick={getPhotos.bind(null, searchImageThree, 3)}
                style={{
                  display: "block",
                  marginBottom: 10,
                  border: "1px solid black",
                  width: 80,
                  textAlign: "center",
                  padding: "5px 2.5px",
                }}
              >
                ????????????(unsplash)
              </p>
              <Upload index={3} />
              {thirdImage && (
                <img
                  style={{ width: 200, height: 100 }}
                  src={thirdImage}
                  alt="3"
                />
              )}
            </div>
            <div style={{ display: "flex" }}>
              <input
                style={{ width: "50%", height: 30 }}
                type="text"
                required
                id="title"
                onChange={(e) => setThirdImage(e.target.value)}
                value={thirdImage}
              />
              <p>{`??????????????????:${thirdImage}`}</p>
            </div>
            <div style={{ display: "flex" }}>
              {photosThird.map((item) => {
                const { urls, alt_description } = item;
                return (
                  <div key={item.id}>
                    <label htmlFor="first">{alt_description}</label>
                    <img
                      style={{ width: 600, height: 400 }}
                      src={urls.small}
                      alt="1"
                    />
                    <input
                      id="first"
                      type="checkbox"
                      value="first"
                      onChange={(e) => {
                        setThirdImage(item);
                      }}
                    />
                    <button
                      className="cv"
                      onClick={saveFile.bind(null, urls.small, 3)}
                    >
                      Download File
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <label
              style={{ display: "block", margin: "10px 0" }}
              htmlFor="title"
            >
              ????????????5
            </label>
            <input
              style={{ width: "100%", height: 30 }}
              type="text"
              required
              id="title"
              onChange={(e) => setSecTitleFive(e.target.value)}
              value={secTitleFive}
            />
            <label
              style={{ display: "block", margin: "10px 0" }}
              htmlFor="section2"
            >
              ????????????5
            </label>
            <textarea
              style={{ width: "100%", height: 100 }}
              type="text"
              required
              id="section2"
              onChange={(e) => setSectionFive(e.target.value)}
              value={sectionFive}
            />
          </div>
          <div style={{ width: "100%" }}>
            <label
              style={{ display: "block", margin: "10px 0" }}
              htmlFor="title"
            >
              ????????????6
            </label>
            <input
              style={{ width: "100%", height: 30 }}
              type="text"
              required
              id="title"
              onChange={(e) => setSecTitleSix(e.target.value)}
              value={secTitleSix}
            />
            <label
              style={{ display: "block", margin: "10px 0" }}
              htmlFor="section2"
            >
              ????????????6
            </label>
            <textarea
              style={{ width: "100%", height: 90 }}
              type="text"
              required
              id="section2"
              onChange={(e) => setSectionSix(e.target.value)}
              value={sectionSix}
            />
          </div>
          <div style={{ width: "100%" }}>
            <label
              style={{ display: "block", margin: "10px 0" }}
              htmlFor="title"
            >
              ????????????7
            </label>
            <input
              style={{ width: "100%", height: 30 }}
              type="text"
              required
              id="title"
              onChange={(e) => setSecTitleSeven(e.target.value)}
              value={secTitleSeven}
            />
            <label
              style={{ display: "block", margin: "10px 0" }}
              htmlFor="section2"
            >
              ????????????7
            </label>
            <textarea
              style={{ width: "100%", height: 100 }}
              type="text"
              required
              id="section2"
              onChange={(e) => setSectionSeven(e.target.value)}
              value={sectionSeven}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMeetupPage;

export async function getServerSideProps(context) {
  const articleId = context.params.articleId;
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

  let data = await db.collection("articles").find({ id: articleId }).toArray();
  return {
    props: {
      articles: data.map((item) => {
        delete item._id;
        return {
          ...item,
        };
      }),
    },
  };
}
