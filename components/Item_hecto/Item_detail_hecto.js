import Image from 'next/image';

const Item_detail_hecto = () => {
  return (
    <div className='flex justify-center items-center mt-4 ml-5 mr-5 bg-white p-2 min-h-[90px]'>
      
      <div className='w-1/12 flex justify-center ml-5 mr-5'>
        <Image  src="/hecto_logo.svg" width="100%" height="100% " />
      </div>
      <div className='w-2/6 ml-5 mr-5 text-xs'>
        <p className='overflow-hidden'>&#91;스마트스토어&#93;</p>
        <p className='overflow-hidden'>맞춤형 커피 테이블 다리 식탁 스탠드, 대리석 </p>
      </div>
      <div className='w-1/12 flex justify-center  ml-5 mr-5 '>
        Hecto
      </div>
      <div className='w-1/12 flex justify-center ml-5 mr-5'>
        1ea
      </div>
      <div className='w-1/12 flex justify-center  ml-5 mr-5'>
        3,000
      </div>
      <div className='w-1/12 flex justify-center ml-5 mr-5'>
        159,000
      </div>
    </div>
  )
}

export default Item_detail_hecto;