import { useRef, useState, useEffect } from 'react';

export const Space = ({ number }) => {
  
  const spaceRef = useRef(null);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(number)
    for(let i=0; i<number; i++){ setText(text+"&nbsp;"); }
    console.log(text);
  }, []);
  
  return(
    <span ref={spaceRef}>
      {text}
    </span>
    
  )
}