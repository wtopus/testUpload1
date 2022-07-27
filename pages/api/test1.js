// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default function handler(req, res) {
  
  console.log(req)
  var someHTML =
   `
    <div style=\"  \"> mchtId : ${req.body.mchtId}</div>
    <div style=\"  \"> outStatCd : ${req.body.outStatCd}</div>
    <div style=\"  \"> outRsltCd : ${req.body.outRsltCd}</div>
    <div style=\"  \"> outRsltMsg : ${req.body.outRsltMsg}</div>
    <div style=\"  \"> method : ${req.body.method}</div>
    <div style=\"  \"> mchtTrdNo : ${req.body.mchtTrdNo}</div>
    <div style=\"  \"> mchtCustId : ${req.body.mchtCustId}</div>
    <div style=\"  \"> trdNo : ${req.body.trdNo}</div>
    <div style=\"  \"> trdAmt : ${req.body.trdAmt}</div>
    <div style=\"  \"> mchtParam : ${req.body.mchtParam}</div>
    <div style=\"  \"> authDt : ${req.body.authDt}</div>
    <div style=\"  \"> authNo : ${req.body.authNo}</div>
    <div style=\"  \"> intMon : ${req.body.intMon}</div>
    <div style=\"  \"> fnNm : ${req.body.fnNm}</div>
    <div style=\"  \"> fnCd : ${req.body.fnCd}</div>
    <div style=\"  \"> cardTrdAmt : ${req.body.cardTrdAmt}</div>
  `
  res.end(someHTML);

}

