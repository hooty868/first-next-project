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
    accessKeyId: "O535TGK6XCRMDV66PYW6",
    secretAccessKey: "48cmmkmQYZo/4CeGkpX5DTO2sW/YrSe7MV2uEQQjBR0",
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
};
