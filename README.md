# 聚好玩

#### 使用 Next.js(React)打造全端 WEB 應用程式部署在 Vercel 搭配 mongodb 做資料庫存儲。可以讓使用者自由輸入自己喜愛的活動詳細資訊與圖片，並可隨時後台管理自己的活動並作儲存修改。

![首頁](https://upload.cc/i1/2022/01/31/av3Xz7.png)

## 引入套件

[![Next.js](https://img.shields.io/badge/Next.js-12-brightgreen)](https://nextjs.org/)
[![AWS-SDK](https://img.shields.io/badge/AWS--SDK-3.x-green)](https://aws.amazon.com/tw/sdk-for-javascript/)

## 主要呈現內容分類

- [首頁](#homepage)
- [新增頁面](#addMeetUp)
- [管理頁面](#admin)

## homepage

利用`next`本身 SSR/SSG 染機制，在 build 時候把資料打包，使其能快速渲染，並針對不同的頁面使用 SSR 渲染，保持頁面實時更新

```js
export async function getStaticProps() {
  const uri = "資料庫位址";
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
```

## addMeetUp

利用`aws -sdk`套件去上傳頁面封面圖

```js
// create S3 instance with credentials
const s3 = new AWS.S3({
  endpoint: new AWS.Endpoint("sgp1.digitaloceanspaces.com"),
  accessKeyId: "主要KeyId",
  secretAccessKey: "私人密鑰",
  region: "sgp1",
});

// parse request to readable form
const form = new formidable.IncomingForm();
form.parse(req, async (err, fields, files) => {
  // Account for parsing errors
  if (err) return res.status(500);
  // Read file
  const file = fs.readFileSync(files.file.path);
  // Upload the file
  s3.upload({
    // params
    Bucket: "Bucket名稱",
    ACL: "public-read",
    Key: uuidv4(),
    Body: file,
    ContentType: "image/jpeg",
  }).send((err, data) => {
    if (err) {
      console.log("err", err);
      return res.status(500);
    }
    if (data) {
      return res.json({
        url: data.Location,
      });
    }
  });
});
```

## admin

結合 MongoDb 去管理所有頁面，並實現 CRUD 方式處理資料.

```js
export async function getServerSideProps() {
  const uri = "資料庫位址";
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
```

## 心得

在使用 React 開發網頁後，享受到 react 在整體專案上的結構優化，以及搭配 js 原生語法的多變性與直覺，令人愛不釋手，但因為是 SPA 網頁，在搜尋引擎 SEO 上會呈現劣勢，
以及 bundle 的 js 太大，早成頁面空白，所以來嘗試 next 框架去優化上面提到的缺點，在理解整體框架後，會發現 next.js，在對前端開發方面特別的有優化，可以非常快速的
開發出自己想要的網站，之後會再了解如何優化以及後端優化的部分，敬請期胎 v2 版本
