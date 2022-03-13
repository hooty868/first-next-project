import AWS from "aws-sdk";
import formidable from "formidable-serverless";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  // create S3 instance with credentials
  const s3 = new AWS.S3({
    endpoint: new AWS.Endpoint("sgp1.digitaloceanspaces.com"),
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
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
      Bucket: "aticle-image-gmbook",
      ACL: "public-read",
      Key: new Date().getTime()+new Date().toLocaleString(),
      Body: file,
      ContentType: "image/jpeg",
    }).send((err, data) => {
      if (err) {
        console.log("err", err);
        return res.status(500);
      }
      if (data) {
        console.log('success upload',data)
        return res.json({
          url: data.Location,
        });
      }
    });
  });
};
