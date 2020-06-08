import React, {useRef} from 'react'
import Child from './son1'


export default () => {
  const parentRef = useRef();
  function focusHander() {
    // 子组件返回的对象会挂载到 parentRef 上面
    console.log(parentRef, parentRef.current.value);
    parentRef.current.focus();
    // parentRef.current.value = '哈哈';
  }
  return (
    <>
      <Child name={99} ref={parentRef} />
      <button onClick={focusHander}>获取焦点</button>
    </>
  )
}
