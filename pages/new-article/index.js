import React, { useState } from "react";
import { useRouter } from "next/router";

const newMeetupPage = () => {
  const [pageItem, setPageItem] = useState(0);
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
  const addPaginatorHandler = () => {
    setPageItem((v) => v + 10);
  };
  const minusPaginatorHandler = () => {
    setPageItem((v) => v - 10);
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
              background: "#000",
              color: "#fff",
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
            background: "#000",
            color: "#fff",
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
            background: "#000",
            color: "#fff",
          }}
        >
          分析
        </div>
        <div
          style={{
            width: "100%",
            height: 50,
            margin: "50px 0",
            fontSize: 25,
            textAlign: "center",
            lineHeight: "50px",
            background: "#000",
            color: "#fff",
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
            background: "#000",
            color: "#fff",
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
                width: "5%",
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
                width: "37.5%",
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((e) => {
            return (
              <tr
                key={e.toString()}
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
                    width: "5%",
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
                  <img
                    src="/icon/edit.png"
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
                  閱讀
                </th>
                <th
                  style={{
                    width: "25%",
                    border: "1.5px solid #000",
                    textAlign: "center",
                    lineHeight: "50px",
                    overflow: "hidden",
                  }}
                >
                  標題
                </th>
                <th
                  style={{
                    width: "37.5%",
                    border: "1.5px solid #000",
                    textAlign: "center",
                    lineHeight: "50px",
                    overflow: "hidden",
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
                  <img
                    src="/icon/edit.png"
                    alt="Edit"
                    style={{ width: 25, height: 25 }}
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
                  <img
                    src="/icon/writing.png"
                    alt="Edit"
                    style={{ width: 25, height: 25 }}
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
      </div>
    </div>
  );
};

export default newMeetupPage;
