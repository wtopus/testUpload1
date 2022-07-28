
const arrow = ({ zNumber1 }) => {
  return (
    <>
      <div className=''>
        <div className=''>
          <div className='mb-5 mt-8'></div><br/>
          <div className='flex '>
            <div className='font-bold text-xl  w-7'>
              <div className=' border-2 border-l-white border-t-white border-r-white h-[10px]  border-b-black '></div>
              <div className=' border-2 border-l-white border-b-white border-r-white h-[10px] border-t-black'></div>
            </div>
            <div className='text-xs flex justify-center tems-center  rounded-md'>구매 버튼</div>
            <div className='font-bold text-xl  w-5'>
              <div className=' border-2 border-l-white border-t-white border-r-white h-[10px]  border-b-black '></div>
              <div className=' border-2 border-l-white border-b-white border-r-white h-[10px] border-t-black'></div>
            </div>
            <div className=''>
              <div className='font-bold text-xl '>
                <div className='flex justify-start items-center h-[20px]'>
                  <div class="border-l-2 border-b-2 border-black right inline-block p-1 rotate-[-135deg] mr-2"></div>
                </div>
              </div>
              <div className='text-xs flex items-start '>&#32;</div>
            </div>
          </div>
        </div>
        {/* === */}

        { zNumber1 == 9 || zNumber1 == 10 ?
          <div className='animate-bounce'>
            <div className='flex mt-64'>
              <div className=''>
                <div className='font-bold text-xl '>
                  <div className='flex justify-start items-center h-[20px]'>
                    <div class="border-l-2 border-b-2 border-black right inline-block p-1 rotate-[45deg] ml-2"></div>
                  </div>
                </div>
                <div className='text-xs flex items-start bg-slate-400'>&#32;</div>
              </div>
              <div className='font-bold text-xl  w-5'>
                <div className=' border-2 border-l-white border-t-white border-r-white h-[10px]  border-b-black '></div>
                <div className=' border-2 border-l-white border-b-white border-r-white h-[10px] border-t-black'></div>
              </div>
              <div className='text-xs flex justify-center tems-center rounded-md text-black'>서비스 제공</div>
              <div className='font-bold text-xl  w-7'>
                <div className=' border-2 border-l-white border-t-white border-r-white h-[10px]  border-b-black '></div>
                <div className=' border-2 border-l-white border-b-white border-r-white h-[10px] border-t-black'></div>
              </div>
            </div>
          </div> :
          <div className=''>
          <div className='flex mt-64'>
            <div className=''>
              <div className='font-bold text-xl '>
                <div className='flex justify-start items-center h-[20px]'>
                  <div class="border-l-2 border-b-2 border-black right inline-block p-1 rotate-[45deg] ml-2"></div>
                </div>
              </div>
              <div className='text-xs flex items-start bg-slate-400'>&#32;</div>
            </div>
            <div className='font-bold text-xl  w-5'>
              <div className=' border-2 border-l-white border-t-white border-r-white h-[10px]  border-b-black '></div>
              <div className=' border-2 border-l-white border-b-white border-r-white h-[10px] border-t-black'></div>
            </div>
            <div className='text-xs flex justify-center tems-center  rounded-md'>서비스 제공</div>
            <div className='font-bold text-xl  w-7'>
              <div className=' border-2 border-l-white border-t-white border-r-white h-[10px]  border-b-black '></div>
              <div className=' border-2 border-l-white border-b-white border-r-white h-[10px] border-t-black'></div>
            </div>
          </div>
        </div>
        }
        {/* === */}
      </div>
    </>
  )
}

export default arrow;