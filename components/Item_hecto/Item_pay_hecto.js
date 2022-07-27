import { useState } from 'react'
import Item_pay_card_hecto from './pay/Item_pay_card_hecto';

const Item_pay_hecto = () => {

  const [paySelect, setPaySelect] = useState('');
  const handleClickRadioButton = (e) => {
    setPaySelect(e.target.value);
    
  }

  return(
    <div className='mt-10 ml-5 mr-5 p-2'>
      <div className='flex justify-between bg-slate-200'>
        <div className='font-["Jalnan"]'>결제 수단</div>
        <div className='text-sm'>
          선택 하신&nbsp;
          <span className='underline decoration-solid'>카드/계좌정보 변경</span>
          은 메뉴에서 하실 수 있습니다.
        </div>
      </div>

      <div className='bg-slate-300 mt-5 p-3'>
        <div className='flex justify-start'>
          <div>
              <input type="radio" name="card" value="card" checked={paySelect==="card"} onChange={handleClickRadioButton} />
          </div>
          <div className='ml-2 bg-purple-300 w-full'>
            <p>카드 결제 !가격표시</p>
            { paySelect==="card" ? <Item_pay_card_hecto /> : <div></div> }
          </div>
        </div>

        <div className='flex justify-start'>
          <div>
            <input type="radio" name="phone" value="phone" checked={paySelect==="phone"} onChange={handleClickRadioButton} />
          </div>
          <div className='ml-2'>
            <p>휴대폰 결제 </p>
          </div>
        </div>

        <div className='flex justify-start'>
          <div>
          <input type="radio" name="bank" value="bank" checked={paySelect==="bank"} onChange={handleClickRadioButton} />
        
          </div>
          <div className='ml-2'>
            <p>내통장 결제</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item_pay_hecto;