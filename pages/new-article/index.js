import React, { useState } from "react";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import Link from "next/link";

const NewMeetupPage = (props) => {
  const [pageItem, setPageItem] = useState(0);
  const router = useRouter();
  const backRouter = () => {
    router.push(`/new-article/edit`);
  };
  const addPaginatorHandler = () => {
    setPageItem((v) => v + 10);
  };
  const minusPaginatorHandler = () => {
    setPageItem((v) => v - 10);
  };
  const deleteHandler = async (id) => {
    const response = await fetch("/api/deleteArticle", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
    });
    const data = response.json({ message: "delete article" });
    router.push(`/new-article`);
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 150,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pageItem !== 0 && (
          <div
            onClick={minusPaginatorHandler}
            style={{
              width: "100%",
              height: 50,
              margin: "50px 0",
              fontSize: 25,
              textAlign: "center",
              lineHeight: "50px",
              color: "#000",
              borderRadius: 10,
              border: "1px solid #000",
            }}
          >
            上一頁
          </div>
        )}
        <div
          style={{
            width: "100%",
            height: 50,
            margin: "50px 0",
            fontSize: 25,
            textAlign: "center",
            lineHeight: "50px",
            color: "#000",
            borderRadius: 10,
            border: "1px solid #000",
          }}
        >
          表格
        </div>
        <div
          style={{
            width: "100%",
            height: 50,
            margin: "50px 0",
            fontSize: 25,
            textAlign: "center",
            lineHeight: "50px",
            color: "#000",
            borderRadius: 10,
            border: "1px solid #000",
          }}
        >
          分析
        </div>
        <div
          onClick={backRouter}
          style={{
            width: "100%",
            height: 50,
            margin: "50px 0",
            fontSize: 25,
            textAlign: "center",
            lineHeight: "50px",
            color: "#000",
            borderRadius: 10,
            border: "1px solid #000",
          }}
        >
          插入新文章
        </div>
        <div
          onClick={addPaginatorHandler}
          style={{
            width: "100%",
            height: 50,
            margin: "50px 0",
            fontSize: 25,
            textAlign: "center",
            lineHeight: "50px",
            color: "#000",
            borderRadius: 10,
            border: "1px solid #000",
          }}
        >
          下一頁
        </div>
      </div>
      <div
        style={{
          width: "90%",
          height: "100%",
          padding: "20px 20px",
        }}
      >
        <h1
          style={{
            color: "#000",
            fontSize: 30,
            width: "100%",
            marginBottom: 30,
          }}
        >
          文章列表
        </h1>
        <table
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <thead
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              color: "#000",
            }}
          >
            <tr
              style={{
                width: "100%",
                height: 50,
                display: "flex",
              }}
            >
              <th
                style={{
                  width: "7.5%",
                  border: "1.5px solid #000",
                  textAlign: "center",
                  lineHeight: "50px",
                }}
              >
                時間
              </th>
              <th
                style={{
                  width: "2.5%",
                  border: "1.5px solid #000",
                  textAlign: "center",
                  lineHeight: "50px",
                }}
              >
                狀態
              </th>
              <th
                style={{
                  width: "5%",
                  border: "1.5px solid #000",
                  textAlign: "center",
                  lineHeight: "50px",
                }}
              >
                分類
              </th>
              <th
                style={{
                  width: "5%",
                  border: "1.5px solid #000",
                  textAlign: "center",
                  lineHeight: "50px",
                }}
              >
                作者姓名
              </th>
              <th
                style={{
                  width: "5%",
                  border: "1.5px solid #000",
                  textAlign: "center",
                  lineHeight: "50px",
                }}
              >
                作者圖片
              </th>
              <th
                style={{
                  width: "2.5%",
                  border: "1.5px solid #000",
                  textAlign: "center",
                  lineHeight: "50px",
                }}
              >
                閱讀
              </th>
              <th
                style={{
                  width: "25%",
                  border: "1.5px solid #000",
                  textAlign: "center",
                  lineHeight: "50px",
                }}
              >
                標題
              </th>
              <th
                style={{
                  width: "40%",
                  border: "1.5px solid #000",
                  textAlign: "center",
                  lineHeight: "50px",
                }}
              >
                摘要
              </th>
              <th
                style={{
                  width: "2.5%",
                  border: "1.5px solid #000",
                  textAlign: "center",
                  lineHeight: "50px",
                }}
              >
                預覽
              </th>
              <th
                style={{
                  width: "2.5%",
                  border: "1.5px solid #000",
                  textAlign: "center",
                  lineHeight: "50px",
                }}
              >
                修改
              </th>
              <th
                style={{
                  width: "2.5%",
                  border: "1.5px solid #000",
                  textAlign: "center",
                  lineHeight: "50px",
                }}
              >
                刪除
              </th>
            </tr>
            {props.articles.map((e) => {
              return (
                <tr
                  key={e.id.toString()}
                  style={{
                    width: "100%",
                    height: 50,
                    display: "flex",
                  }}
                >
                  <th
                    style={{
                      width: "7.5%",
                      border: "1.5px solid #000",
                      textAlign: "center",
                      lineHeight: "50px",
                      overflow: "scroll",
                    }}
                  >
                    {new Date(e.writeTime).toLocaleString().slice(5, 20)}
                  </th>
                  <th
                    style={{
                      width: "2.5%",
                      border: "1.5px solid #000",
                      textAlign: "center",
                      lineHeight: "50px",
                    }}
                  >
                    {e.status === 1 ? "發布" : "待審"}
                  </th>
                  <th
                    style={{
                      width: "5%",
                      border: "1.5px solid #000",
                      textAlign: "center",
                      lineHeight: "50px",
                    }}
                  >
                    {e.category}
                  </th>
                  <th
                    style={{
                      width: "5%",
                      border: "1.5px solid #000",
                      textAlign: "center",
                      lineHeight: "50px",
                    }}
                  >
                    {e.author.name}
                  </th>
                  <th
                    style={{
                      width: "5%",
                      border: "1.5px solid #000",
                      textAlign: "center",
                      lineHeight: "50px",
                    }}
                  >
                    <img
                      src={e.author.avatar}
                      alt="Edit"
                      style={{ width: 35, height: 35 }}
                    />
                  </th>
                  <th
                    style={{
                      width: "2.5%",
                      border: "1.5px solid #000",
                      textAlign: "center",
                      lineHeight: "50px",
                    }}
                  >
                    {e.read}
                  </th>
                  <th
                    style={{
                      width: "25%",
                      border: "1.5px solid #000",
                      textAlign: "center",
                      lineHeight: "50px",
                      overflow: "scroll",
                    }}
                  >
                    {e.title}
                  </th>
                  <th
                    style={{
                      width: "40%",
                      border: "1.5px solid #000",
                      textAlign: "center",
                      lineHeight: "50px",
                      overflow: "scroll",
                    }}
                  >
                    {e.abstract}
                  </th>
                  <th
                    style={{
                      width: "2.5%",
                      border: "1.5px solid #000",
                      textAlign: "center",
                      lineHeight: "50px",
                    }}
                  >
                    <a
                      href={`https://www.gmbook.tw/${e.id}`}
                      target={"_blank"}
                      rel={"noreferrer"}
                    >
                      <img
                        src="/icon/edit.png"
                        alt="Edit"
                        style={{ width: 25, height: 25 }}
                      />
                    </a>
                  </th>
                  <th
                    style={{
                      width: "2.5%",
                      border: "1.5px solid #000",
                      textAlign: "center",
                      lineHeight: "50px",
                    }}
                  >
                    <Link href={`/new-article/${e.id}`}>
                      <a>
                        <img
                          src="/icon/writing.png"
                          alt="Edit"
                          style={{ width: 25, height: 25 }}
                        />
                      </a>
                    </Link>
                  </th>
                  <th
                    style={{
                      width: "2.5%",
                      border: "1.5px solid #000",
                      textAlign: "center",
                      lineHeight: "50px",
                    }}
                    onClick={deleteHandler.bind(null, e.id)}
                  >
                    <img
                      src="/icon/remove.png"
                      alt="Edit"
                      style={{ width: 25, height: 25 }}
                    />
                  </th>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    </div>
  );
};

export default NewMeetupPage;

export async function getStaticProps() {
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

  let data = await db.collection("articles").find({}).toArray();
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
