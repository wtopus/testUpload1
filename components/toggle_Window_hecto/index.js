{/* <div className='animate-bounce flex justify-center items-center'>
  <div class="border-l-2 border-b-2 border-black right inline-block p-2 rotate-[-45deg]"></div>
</div> */}

import Arrow from './arrow';
import Arrow2 from './arrow2';
import Line from './line';

const Toggle_Window_hecto = ({ togglediv1, togglediv2, toggleFuc, zNumber1}) => {


  return(
    <div className='justify-center flex'>
      <div className=' flex justify-self-stretch'>
      
      { zNumber1 == 0 || zNumber1 == 7 || zNumber1 == 8? 
      <div className=' '>
        <div className='animate-bounce mb-5 font-["Jalnan"] text-[#F7A319]'>사용자</div>
          <div className='flex justify-center'>
          <div className='flex justify-center rounded-full bg-black h-80 w-1'></div>
        </div>
      </div> :
      <div className=''>
        <div className='mb-5 font-["Jalnan"] '>사용자</div>
          <div className='flex justify-center'>
          <div className='flex justify-center rounded-full bg-black h-80 w-1'></div>
        </div>
      </div>
      }
      <Arrow />
      { zNumber1 == 1 ? 
      <div className=''>
        <div className='animate-bounce mb-5 font-["Jalnan"] text-[#F7A319]'>가맹점</div>
          <div className='flex justify-center'>
          <div className='flex justify-center rounded-full bg-black h-80 w-1'></div>
        </div>
      </div> :
      <div className=''>
        <div className='mb-5 font-["Jalnan"]'>가맹점</div>
          <div className='flex justify-center'>
          <div className='flex justify-center rounded-full bg-black h-80 w-1'></div>
        </div>
      </div>
      }
      <Line />
      { zNumber1 == 1 || zNumber1 == 3 ? 
      <div className=' font-["Jalnan"] text-[#F7A319]'>
        <div className='animate-bounce mb-5'>결제창 UI</div>
          <div className='flex justify-center'>
          <div className='flex justify-center rounded-full bg-black h-80 w-1'></div>
        </div>
      </div> :
      <div className='font-["Jalnan"] '>
        <div className='mb-5'>결제창 UI</div>
          <div className='flex justify-center'>
          <div className='flex justify-center rounded-full bg-black h-80 w-1'></div>
        </div>
      </div>
      }
      
      <Arrow2 />
      { zNumber1 == 5 || zNumber1 == 6 ? 
      <div className='font-["Jalnan"] text-[#F7A319]'>
        <div className='animate-bounce mb-5'>서버 CORE</div>
          <div className='flex justify-center'>
          <div className='flex justify-center rounded-full bg-black h-80 w-1'></div>
        </div>
      </div> :
      <div className='font-["Jalnan"]'>
        <div className='mb-5'>서버 CORE</div>
          <div className='flex justify-center'>
          <div className='flex justify-center rounded-full bg-black h-80 w-1'></div>
        </div>
      </div>
      }
      

    </div>
    </div>
  )
}

export default Toggle_Window_hecto;