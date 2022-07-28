
const line = ({ zNumber1})=>{
  return (
    <>
      <div className='bg-white'>
        <div className='bg-white'>
          <div className='mb-5 '></div><br/>
          <div className='flex mt-7'>
            <div className='font-bold text-xl  w-7'>
              <div className=' border-2 border-l-white border-t-white border-r-white h-[10px]  border-b-black '></div>
              <div className=' border-2 border-l-white border-b-white border-r-white h-[10px] border-t-black'></div>
            </div>
            <div className='text-xs flex justify-center tems-center  rounded-md'>결제창 호출</div>
            <div className='font-bold text-xl  w-5'>
              <div className=' border-2 border-l-white border-t-white border-r-white h-[10px]  border-b-black '></div>
              <div className=' border-2 border-l-white border-b-white border-r-white h-[10px] border-t-black'></div>
            </div>
            <div className='bg-white'>
              <div className='font-bold text-xl '>
                <div className='flex justify-start items-center h-[20px]'>
                  <div class="border-l-2 border-b-2 border-black right inline-block p-1 rotate-[-135deg] mr-2"></div>
                </div>
              </div>
              <div className='text-xs flex items-start bg-white '>&#32;</div>
            </div>
          </div>
        </div>
        {/* === */}

        <div className='bg-white'>
          <div className='flex mt-32'>
            <div className='bg-white'>
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
            <div className='text-xs flex justify-center tems-center  rounded-md'>Noti Url</div>
            <div className='font-bold text-xl  w-7'>
              <div className=' border-2 border-l-white border-t-white border-r-white h-[10px]  border-b-black '></div>
              <div className=' border-2 border-l-white border-b-white border-r-white h-[10px] border-t-black'></div>
            </div>
          </div>
        </div>
        {/* === */}


        { zNumber1 == 7 || zNumber1 == 8?
        <div className='bg-white animate-bounce'>
          <div className='flex mt-14'>
            <div className='bg-white'>
              <div className='font-bold text-xl '>
                <div className='flex justify-start items-center h-[20px]'>
                  <div class="border-l-2 border-b-2 border-[#F7A319] right inline-block p-1 rotate-[45deg] ml-2"></div>
                </div>
              </div>
              <div className='text-xs flex items-start bg-slate-400'>&#32;</div>
            </div>
            <div className='font-bold text-xl  w-5'>
              <div className=' border-2 border-l-white border-t-white border-r-white h-[10px]  border-b-[#F7A319] '></div>
              <div className=' border-2 border-l-white border-b-white border-r-white h-[10px] border-t-[#F7A319]'></div>
            </div>
            <div className='text-xs flex justify-center tems-center  rounded-md text-[#F7A319]'>Next Url</div>
            <div className='font-bold text-xl  w-7'>
              <div className=' border-2 border-l-white border-t-white border-r-white h-[10px]  border-b-[#F7A319] '></div>
              <div className=' border-2 border-l-white border-b-white border-r-white h-[10px] border-t-[#F7A319]'></div>
            </div>
          </div>
        </div> : 
        <div className='bg-white'>
          <div className='flex mt-14'>
            <div className='bg-white'>
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
            <div className='text-xs flex justify-center tems-center  rounded-md'>Next Url</div>
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

export default line;