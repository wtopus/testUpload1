// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { callback1 } from '../../pages/index';

export default function handler(req, res) {
  callback1("newtest1");
  console.log("test")
  // console.log(req)
  // console.log(req.body)
  res.status(200).json(req.body)
  return req.body;
}

