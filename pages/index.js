import { useRouter } from "next/router";
import Topnav_hecto from '../components/topnav_hecto';
import Input_hecto from '../components/input_hecto';
import Toggle_Window_hecto from '../components/toggle_Window_hecto';
import Parameter_window_hecto from '../components/parameter_window_hecto';
import Item_hecto from '../components/Item_hecto';
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import crypto  from 'crypto';
import hash, { sha256 } from 'hash.js';
import { utilAes256, utilSha256, goSubmit, randomMchtTrdNo} from '../components/util';
//import cryptoJs from 'crypto-js';

//import "./index1.css";
// !! useState 로 값 바꾸면 바로 안된다 + 값은 바뀌는데 왜 적용 안됨? + 배경색은 된다.
//setZNumber1(zNumber1+1);
//e.target.className = `bg-yellow-100 absolute top-[50%] left-[10%] ` + zNumber1;
//console.log(e.target.className)

export default function Home() {
  
  const [zNumber1, setZNumber1] = useState('z-3');
  const [zNumber2, setZNumber2] = useState('0');
  const iframeUseRef = useRef(null);
  const payItemUseRef = useRef(null);
  const rfrf = useRef(null);

  const [inputText, setInputText] = useState({
    mchtId :  ["edu00005"],
    method :  ["card"],
    trdDt :  ["20211231"],
    trdTm :  ["100000"],
    mchtTrdNo :  randomMchtTrdNo(),
    mchtName :  ["헥토파이낸셜"],
    mchtEName :  ["Financial"],
    pmtPrdtNm :  ["테스트상품"],
    trdAmt :  ["1000"],
    notiUrl :  ["https://example.com/notiUrl"],
    nextUrl :  ["http://localhost:3000/api/test1"],
    cancUrl :  ["https://example.com/cancUrl"],
    pktHash : ["f395b6725a9a18f2563ce34f8bc76698051d27c05e5ba815f463f00429061c0c"]
  });
  const togglediv1 = useRef(null);
  const togglediv2 = useRef(null);
  
  useEffect(()=>{

    console.log(rfrf);
    //const iframeEvent = iframeUseRef;
    // console.log("eerereree")
    // document.addEventListener("DOMContentLoaded",  () => {
    //   console.log("tsetset")
    //   alert("DOM이 준비되었습니다!");
    // });
    //console.log(iframeEvent);
    
    // iframeEvent.item(0).setAttribute('DOMContentLoaded', ()=>{
    //   console.log("event!!!")
    // })
  },[]);

  const toggleFuc = (togglediv) => {
    if(togglediv == togglediv1){
      togglediv1.current.className = 'bg-slate-200 absolute top-[50%] left-[10%] z-10';
      togglediv2.current.className = 'bg-blue-300 absolute top-[550%] left-[30%] z-1 space-y-3 p-3'
    }else{
      togglediv1.current.className = 'bg-slate-200 absolute top-[50%] left-[10%] z-1';
      togglediv2.current.className = 'bg-blue-300 absolute top-[550%] left-[30%] z-10 space-y-3 p-3'
    }
  }

  const iframeUseEffect = useEffect(() => {
    
    console.log("test111")
  }, [iframeUseRef]);

  return (
    <>

      <Topnav_hecto />

      <div className='flex mt-12 bg-white'>
        
        <div className=' w-1/2 '>
          
          <Toggle_Window_hecto  togglediv1={togglediv1} togglediv2={togglediv2} toggleFuc={toggleFuc} />
          <div className="h-7"></div>
          <Parameter_window_hecto inputText={inputText} setInputText={setInputText}/>
        
        </div>

        <div className='bg-[#F2F2F7] w-1/2'>
          
          <Item_hecto payItemUseRef={payItemUseRef}/>
          
          <div ref={iframeUseRef} className=' ml-5 mr-5 h-[700px] justify-center hidden'>
            <iframe ref={rfrf} className='w-full h-full flex justify-center ' name="frAttachFiles" id='iframe' ></iframe>
          </div>
          
          <div className='flex justify-center'>
            <button className=' border-1 bg-[#F2F2F7] ml-3' onClick={(e)=>{
              //console.log(iframeUseRef.current.className);
              payItemUseRef.current.className = 'hidden';
              iframeUseRef.current.className = ' ml-5 mr-5 h-[700px] justify-center flex p-2 mt-5';
              goSubmit(inputText);
            }}>
              <p className="bg-[#F7A319] text-white rounded-full w-32 h-9 flex items-center justify-center">결제하기</p>
            </button>
          </div>
        
        </div>  

      </div>
    </>
  )
}

