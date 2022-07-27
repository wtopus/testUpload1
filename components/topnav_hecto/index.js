import Image from 'next/image';

const Topnav_hecto = () => {
  return (
    <>
      <div className='flex justify-between m-5'>
        <div className='flex'>
          <div className='mt-1 w-[30px] h-[30px]'>
              <Image src="/hecto_logo.svg" width="100%" height="100%" />
          </div>
          <span className='text-2xl font-bold'>HectoFinancial</span>
        </div>
        <div className='flex text-2xl space-x-5' > 
            <span>체험하기</span>
            <span>서비스</span>
            <span>개발가이드</span>
            <span>개발자 포럼</span>
            <img className='mt-1 w-[30px] h-[30px]' src="/hecto_logo.svg" />
            <input placeholder='Search'/>
        </div>  
        
      </div>    
      <div class="border-b-2 bg-slate-300"></div>
    </>
  )
}

export default Topnav_hecto;