import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../client";
import { getSession } from "next-auth/client";
import aws from "aws-sdk";

export default async function (req, res) {
  const session = await getSession({ req });

  const spacesEndpoint = new aws.Endpoint("sgp1.digitaloceanspaces.com");
  const s3Bucket = "aticle-image-gmbook";

  const s3 = new aws.S3({
    endpoint: spacesEndpoint,
    accessKeyId: "O535TGK6XCRMDV66PYW6",
    secretAccessKey: "48cmmkmQYZo/4CeGkpX5DTO2sW/YrSe7MV2uEQQjBR0",
  });

  const fileName = req.body.fileName;
  const fileType = req.body.fileType;

  console.log(fileName);
  console.log(fileType);

  const s3Params = {
    Bucket: s3Bucket,
    Key: `businesslogos/${fileName}`,
    ContentType: fileType,
    ACL: "public-read",
  };

  try {
    s3.getSignedUrl("putObject", s3Params, async (err, data) => {
      if (err) {
        return res.json({ success: false, error: err });
      }
      const returnData = {
        signedRequest: data,
        url: `https://${s3Bucket}.s3.amazonaws.com/businesslogos/${fileName}`,
      };

      return res.status(200).json(returnData);
    });
  } catch (err) {
    return res.status(500).json(err);
  }
}
