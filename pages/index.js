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

  const toggleFuc = (togglediv) => {
    if(togglediv == togglediv1){
      togglediv1.current.className = 'bg-slate-200 absolute top-[50%] left-[10%] z-10';
      togglediv2.current.className = 'bg-blue-300 absolute top-[550%] left-[30%] z-1 space-y-3 p-3'
    }else{
      togglediv1.current.className = 'bg-slate-200 absolute top-[50%] left-[10%] z-1';
      togglediv2.current.className = 'bg-blue-300 absolute top-[550%] left-[30%] z-10 space-y-3 p-3'
    }
  }

  return (
    <>
    {/* <div>
      <button onClick={(e)=>{
        axios.get("/api/hello")
        .then((res)=>{
          goSubmit();
        })
        .then((res)=>{
          console.log("!!!!!!!")
          console.log(res)
        });
      }}>axios</button>
    </div> */}
      <Topnav_hecto />

      <div className='flex p-2 mt-12 bg-orange-300'>
        
        <div className='bg-purple-300 w-1/2 p-2'>
          
          <Toggle_Window_hecto  togglediv1={togglediv1} togglediv2={togglediv2} toggleFuc={toggleFuc} />
          <Parameter_window_hecto inputText={inputText} setInputText={setInputText}/>
        
        </div>

        <div className='bg-slate-400 w-1/2'>
          
          <Item_hecto />
          
          <div className='bg-orange-300 ml-5 mr-5 h-[700px] flex justify-center'>
            <iframe className='w-1/2 h-full flex justify-center ' name="frAttachFiles" id='iframe' ></iframe>
          </div>
          
          <div className='flex justify-center'>
            <button className=' border-1 bg-orange-300 ml-3' onClick={(e)=>{goSubmit(inputText);}}>결제하기</button>
          </div>
        
        </div>  

      </div>
    </>
  )
}

