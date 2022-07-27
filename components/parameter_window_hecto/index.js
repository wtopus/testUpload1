
import { useState } from 'react';
import Input_hecto from '../input_hecto';
import { Space } from '../specialSimbol_hecto'

const Parameter_window_hecto = ({ inputText, setInputText }) => {

  const [inputCSS, setInputCSS] = useState('mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  rounded-md sm:text-sm focus:ring-1');

  const onChange = (e) => { 
    //etInputText(e.target.value); 
    let name = e.target.name;
    console.log(name)
    if( name == "mchtId"){
      setInputText({ ...inputText, mchtId : e.target.value });
    }else if( name == "method"){
      setInputText({ ...inputText, method : e.target.value });
    }else if( name == "trdDt"){
      setInputText({ ...inputText, trdDt : e.target.value });
    }else if( name == "trdTm"){
      setInputText({ ...inputText, trdTm : e.target.value });
    }else if( name == "mchtTrdNo"){
      setInputText({ ...inputText, mchtTrdNo : e.target.value });
    }else if( name == "mchtName"){
      setInputText({ ...inputText, mchtName : e.target.value });
    }else if( name == "mchtEName"){
      setInputText({ ...inputText, mchtEName : e.target.value });
    }else if( name == "pmtPrdtNm"){
      setInputText({ ...inputText, pmtPrdtNm : e.target.value });
    }else if( name == "trdAmt"){
      setInputText({ ...inputText, trdAmt : e.target.value });
    }else if( name == "notiUrl"){
      setInputText({ ...inputText, notiUrl : e.target.value });
    }else if( name == "nextUrl"){
      setInputText({ ...inputText, nextUrl : e.target.value });
    }else if( name == "cancUrl"){
      setInputText({ ...inputText, cancUrl : e.target.value });
    }else if( name == "pktHash"){
      setInputText({ ...inputText, pktHash : e.target.value });
    }
    
  }

  return(
    <>
      <div className='bg-slate-500 rounded-md '>
        <div className='flex justify-end mr-5'>
          접기
        </div>

        <div className='flex'>
          <div className='w-1/2 p-2 bg-orange-300 space-y-1'>
            
            <form id="openForm"name ="openForm" method='post'>
              <div className='flex items-center justify-between'>
                상점 아이디 : 
                <input type="text" name="mchtId" placeholder={inputText["mchtId"]}  onChange={onChange} className={inputCSS}/>
              </div>
              <div className='flex items-center justify-between'>
                결제 수단 : 
                <input type="text" name="method" placeholder={inputText["method"]} onChange={onChange} className={inputCSS}/>
                </div>
              <div className='flex items-center justify-between'> 
                요청 일자 : 
                <input type="text" name="trdDt" placeholder={inputText["trdDt"]} onChange={onChange} className={inputCSS}/>
              </div>
              <div className='flex items-center justify-between'> 
                요청 시간 : 
                <input type="text" name="trdTm" placeholder={inputText["trdTm"]} onChange={onChange} className={inputCSS}/>
              </div>
              <div className='flex items-center justify-between'> 
                상점 주문 번호 :
                <input type="text" name="mchtTrdNo" placeholder={inputText["mchtTrdNo"]} onChange={onChange} className={inputCSS}/>
              </div>
              <div className='flex items-center justify-between'> 
                상점 한글명 :
                <input type="text" name="mchtName" placeholder={inputText["mchtName"]} onChange={onChange} className={inputCSS}/>
              </div>
              <div className='flex items-center justify-between'> 
                성점 영문명 :
                <input type="text" name="mchtEName" placeholder={inputText["mchtEName"]} onChange={onChange} className={inputCSS}/>
              </div>
              <div className='flex items-center justify-between'> 
                결제 상품명 :
                <input type="text" name="pmtPrdtNm" placeholder={inputText["pmtPrdtNm"]} onChange={onChange} className={inputCSS}/>
              </div>
              <div className='flex items-center justify-between'> 
                거래금액 :
                <input type="text" name="trdAmt" placeholder={inputText["trdAmt"]} onChange={onChange} className={inputCSS}/>
              </div>
              <div className='flex items-center justify-between'> 
                결과 처리 URL :
                <input type="text" name="notiUrl" placeholder={inputText["notiUrl"]} onChange={onChange} className={inputCSS}/>
              </div>
              <div className='flex items-center justify-between'> 
                결과 화면 URL :
                <input type="text" name="nextUrl" placeholder={inputText["nextUrl"]} onChange={onChange} className={inputCSS}/>
              </div>
              <div className='flex items-center justify-between'> 
                결제 취소 URL :
                <input type="text" name="cancUrl" placeholder={inputText["cancUrl"]} onChange={onChange} className={inputCSS}/>
              </div>
              <div className='flex items-center justify-between'> 
                hash 데이터 :
                <input type="text" name="pktHash" placeholder={inputText["pktHash"]} onChange={onChange} className={inputCSS}/>
              </div>
            </form>
          </div>
          
          <div className='w-1/2 p-2 bg-slate-300 overflow-hidden'>
            <p>&nbsp;</p>
            <p>&nbsp;SETTLE_PG.pay&#40;&#123;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;env : "https://tbnpg.settlebank.co.kr"</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mchtId : {inputText["mchtId"]}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method : {inputText["method"]}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trdDt : {inputText["trdDt"]}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trdTm : {inputText["trdTm"]}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mchtTrdNo : {inputText["mchtTrdNo"]}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mchtName : {inputText["mchtName"]}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mchtEName : {inputText["mchtEName"]}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pmtPrdtNm : {inputText["pmtPrdtNm"]}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trdAmt : {inputText["trdAmt"]}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;notiUrl : {inputText["notiUrl"]}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nextUrl : {inputText["nextUrl"]}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cancUrl : {inputText["cancUrl"]}</p>
            <p className='flex'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pktHash : {inputText["pktHash"]}</p>
            <p>&nbsp;&#41;&#125;</p>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Parameter_window_hecto;