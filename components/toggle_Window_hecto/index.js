{/* <div className='animate-bounce flex justify-center items-center'>
  <div class="border-l-2 border-b-2 border-black right inline-block p-2 rotate-[-45deg]"></div>
</div> */}
              
const Toggle_Window_hecto = ({ togglediv1, togglediv2, toggleFuc}) => {

  return(
    <>
     <div className='bg-zinc-300 p-5 mb-52'>
        <div className='bg-green-300 p-2 h-1/5 relative'>
          <div ref = {togglediv1} className=' bg-slate-50 absolute top-[50%] left-[10%] p-1' onClick={ (e)=>{ toggleFuc(togglediv1); }} >
            <div className="grid grid-cols-6 grid-rows-6 p-3">
              <div className="col-start-1 col-span-2 rounded-md flex justify-center items-center text-orange-500 font-['Jalnan']  text-md animate-pulse mr-2 ml-2">가맹점</div>
              <div className="col-start-2 row-start-2 col-span-3 row-span-2 border-l-8 opacity-70 border-orange-200 mt-1 flex items-end justify-center font-bold text-base after:content-['----->'] before:content-['-----'] ">test</div>
              <div className="col-start-5 col-span-2 row-start-4 rounded-md flex justify-center text-orange-500 items-center font-['Jalnan'] text-sm mr-2 ml-2">Hecto</div>
              <div className="col-start-3 col-span-3 row-span-2 border-r-8 opacity-70 border-orange-200 mt-1 flex items-end justify-center text-base font-bold after:content-['-----'] before:content-['<-----'] ">test</div>
              <div className="col-start-1 col-span-2 row-start-7 rounded-md flex justify-center text-orange-500 items-center font-['Jalnan'] text-sm mr-2 ml-2">가맹점</div>
            </div>
            
        
          </div>
          <div ref = {togglediv2} className='bg-blue-300 absolute top-[550%] left-[30%] z-1 space-y-3 p-3' onClick={ (e)=>{ toggleFuc(togglediv2); }} >
              <div className='text-white animate-pulse'><span className='text-white font-["Jalnan"]'>1.</span> 결제 창 실행 준비하기</div>
              <div>2. 결체 창 띄우기</div>
              <div>3. 결제 완료</div>
          </div>   
        </div>
      </div>
    </>
  )
}

export default Toggle_Window_hecto;