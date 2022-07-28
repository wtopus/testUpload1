import Image from 'next/image';


const Item_pay_card_hecto = () => {
  
  return (

  <>  
    <div className='flex justify-between items-center bg-orange-50  p-2'>
      <div className='w-1/2 text-xs '>
        <span>&#91;한정 이벤트&#93;</span>
        <span className='text-[#F7A319] font-extrabold'>&nbsp;2만원 캐시백&nbsp;</span>
        <span>받고 결제하기</span>
      </div>
      <div className='w-1/2 flex justify-end '>
        <span className='text-slate-500 font-["Jalnan"] opacity-20'>&gt;</span>
        <span className='text-slate-600 font-["Jalnan"] opacity-40'>&gt;</span>
        <span className='text-slate-700 font-["Jalnan"] opacity-60'>&gt;</span>
        <span className='text-slate-800 font-["Jalnan"] opacity-80'>&gt;</span>
        <span className='text-slate-900 font-["Jalnan"] opacity-900'>&gt;</span>
      </div>
    </div>
    
    <div className='p-2 flex justify-center items-center'>
      <Image  src="/card.svg" width="100%" height="100% " />
    </div>
  </>  
    
      
  )
}

export default Item_pay_card_hecto;