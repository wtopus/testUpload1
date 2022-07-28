// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import resultPage from '../../components/resultPage_hecto';

export default function handler(req, res) {
  
  console.log(req)
  let styleWhite = 'display : flex; justify-content: space-between; margin-left: 10%; margin-right: 10%; background-color: white;';
  let styleGray = 'display : flex; justify-content: space-between; margin-left: 10%; margin-right: 10%; background-color: #F2F2F7;';
  var someHTML =
   `
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset="UTF-8">
  </head>
  <body>
    <div id="payResult" style=\" padding: 5% 5%; border-radius: 20px; background-color: #F2F2F7;\">
      <div style=\" display : flex; justify-content: center; background-color: #F2F2F7; font-size: x-large; margin-top: 50px; margin-bottom: 50px; margin-left: 10%; margin-right: 10%; font-weight-900px; color: black;\"> 결제 완료 응답 파라미터 </div>
      <div style=\" ${styleWhite}\">
        <span>mchtId : </span>
        <span>${req.body.mchtId}</span>
      </div>
      <div style=\" ${styleGray} \">
        <span>outStatCd : </span>
        <span>${req.body.outStatCd}</span>
      </div>
      <div style=\" ${styleWhite} \">
        <span>outRsltCd : </span>
        <span>${req.body.outRsltCd}</span>
      </div>
      <div style=\" ${styleGray} \">
        <span>outRsltMsg : </span>
        <span>${req.body.outRsltMsg}</span>
      </div>
      <div style=\" ${styleWhite} \">
        <span>method : </span>
        <span>${req.body.method}</span>
      </div>
      <div style=\" ${styleGray} \">
        <span>mchtTrdNo : </span>
        <span>${req.body.mchtTrdNo}</span>
      </div>
      <div style=\" ${styleWhite} overflow: auto\">
        <div>trdNo&nbsp;:&nbsp;</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;${req.body.trdNo}</div>
      </div>
      <div style=\" ${styleGray} \">
        <span>trdAmt : </span>
        <span>${req.body.trdAmt}</span>
      </div>
      <div style=\" ${styleWhite} \">
        <span>authDt : </span>
        <span>${req.body.authDt}</span>
      </div>
      <div style=\" ${styleGray} \">
        <span>authNo : </span>
        <span>${req.body.authNo}</span>
      </div>
      <div style=\" ${styleWhite} \">
        <span>intMon : </span>
        <span>${req.body.intMon}</span>
      </div>
      <div style=\" ${styleGray} \">
        <span>fnNm : </span>
        <span>${req.body.fnNm}</span>
      </div>
      <div style=\" ${styleWhite} \">
        <span>fnCd : </span>
        <span>${req.body.fnCd}</span>
      </div>
      <div style=\" ${styleGray} \">
        <span>cardTrdAmt : </span>
        <span>${req.body.cardTrdAmt}</span>
      </div>
    </div>
  </body>
  </html>
    
    
  `
  res.end(someHTML);
  
}

