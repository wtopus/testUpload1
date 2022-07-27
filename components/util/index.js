import crypto  from 'crypto';
import hash from 'hash.js';

export const utilAes256 = async (text) => {
  const algorithm = 'aes-256-cbc';
  const key = 'pgSettle30y739r82jtd709yOfZ2yK5K';
  const iv = Buffer.alloc(16, 0);
  let cipher = crypto.createCipheriv(
    algorithm,
    Buffer.from(key),
    iv
  );
  let encrypted = cipher.update(text,"utf8","base64");
  encrypted += cipher.final("base64");
  //encrypted = Buffer.concat([encrypted, cipher.final("base64")]);
  //console.log(iv.toString('hex'))
  console.log(encrypted.toString('hex'))
  return encrypted.toString('hex');
}

export const utilSha256 = async (text) => {
  let encrypted =  hash.sha256().update(text).digest('hex').toUpperCase();
  return encrypted;
}

export const randomMchtTrdNo = () => {
  let mchtTrdNo = 'ORDER';
  let randomNumber = ''
  for (let i = 0; i < 14; i++) randomNumber += Math.floor(Math.random() * 10)
  return mchtTrdNo + randomNumber
  
}

export const goSubmit = async (inputText) => {
  console.log("test");
  let url = "https://tbnpg.settlebank.co.kr/card/main.do";
  //let option = 'resizable=yes';
  let myForm = document.openForm;
  const mchtTrdNo = randomMchtTrdNo();
  //window.open(url, "openForm", option);
  myForm.target = "frAttachFiles";
  myForm.mchtId.value = inputText["mchtId"];
  myForm.method.value = inputText["method"];
  myForm.trdDt.value = inputText["trdDt"];
  myForm.trdTm.value = inputText["trdTm"];
  myForm.mchtTrdNo.value = inputText["mchtTrdNo"];
  myForm.mchtName.value = inputText["mchtName"];
  myForm.mchtEName.value = inputText["mchtEName"];
  myForm.pmtPrdtNm.value = inputText["pmtPrdtNm"];
  
  myForm.trdAmt.value = await utilAes256('1000');

  myForm.notiUrl.value = inputText["notiUrl"];
  myForm.nextUrl.value = inputText["nextUrl"];
  myForm.cancUrl.value = inputText["cancUrl"];
  console.log(inputText["mchtId"]+
  inputText["method"]+
  inputText["mchtTrdNo"]+
  inputText["trdDt"]+
  inputText["trdTm"]+
  inputText["trdAmt"]+
  "ST1009281328226982205")
  myForm.pktHash.value = await utilSha256(
    inputText["mchtId"]+
    inputText["method"]+
    inputText["mchtTrdNo"]+
    inputText["trdDt"]+
    inputText["trdTm"]+
    inputText["trdAmt"]+
    "ST1009281328226982205"
  );
  
  //myForm.pktHash.value = "265587C5C8AAE5A881FB0C9279925977BF96B3B191ABF32CF4BE39372F45DABC";
  //myForm.pktHash.value = await utilSha256('edu00005cardORDER62211231100000202112311000001000ST1009281328226982205');
  
  console.log(myForm.mchtId.value)
  myForm.action = url;
  //SettlePay.execute(myForm);
  myForm.submit();

}