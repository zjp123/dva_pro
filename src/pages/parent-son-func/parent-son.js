import React, {useRef} from 'react'
import Child from './son1'


export default () => {
  const parentRef = useRef();
  function focusHander() {
    console.log(parentRef);
    parentRef.current.focus();
    parentRef.current.value = '哈哈';
  }
  return (
    <>
      <Child son-func={99} ref={parentRef} />
      <button onClick={focusHander}>获取焦点</button>
    </>
  )
}
