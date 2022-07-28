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
let test = 0;
export default function Home() {
  
  const [zNumber1, setZNumber1] = useState();
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

  const iframeUseEffect = useEffect(() => {
    
    rfrf.current.addEventListener('load', function(event){
      test = test + 1;
      console.log(test)
      if(test==1){
        setZNumber1(1);
      }else if(test==3){
        setZNumber1(3);
      }else if(test==5){
        setZNumber1(5);
      }else if(test==7){
        setZNumber1(7);
      }
    });

    return ()=>{
      rfrf.current.addEventListener('load', function(event){});
    }
    
  }, [rfrf.current]);

  useEffect(() => {
    
    console.log("testssss")
    if(test==0)setZNumber1(0);
  }, [zNumber1]);

  return (
    <>
      
      <Topnav_hecto />

      <div className='flex mt-12 bg-white'>
        
        <div className=' w-1/2 '>
          
          <Toggle_Window_hecto  zNumber1={zNumber1} />
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
              setZNumber1(2);
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

