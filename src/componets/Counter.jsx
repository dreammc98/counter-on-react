import React from 'react';
import '../componets/counter.css'
import { useState } from 'react';




const Counter = () => {
  const [count, setCount] = useState(0)

  const onClickPlus = () => {
    setCount(count + 1)
  }

  const onClickMinus = () => {
    setCount(count - 1)
  }


  return (
    <div className='counter'>
      <h2 className='counter__title'>Счетчик</h2>
      <h1 className='counter__number'>{count}</h1>

      <div className="counter__btns">
        <button onClick={onClickMinus} className='counter__btn btn-blue'>- Минус</button>
        <button onClick={onClickPlus} className='counter__btn btn-red'>Плюс +</button>
      </div>

    </div>
  );
};
export default Counter;