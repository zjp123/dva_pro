import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react'

function Child(props, parentRef) {
  const inputRef = useRef();
  useImperativeHandle(parentRef, () => {
    // return返回的值就可以被父组件获取到,没返回的值就获取不到
    console.log(parentRef, 'parentRefparentRefparentRef');
    return { // 返回的对象会挂载到 parentRef
      focus() {
        inputRef.current.focus();
        inputRef.current.value = 'llll'
      },
      value: 'kkkk'
    }
  })
  return (
    <>
      <p>{props.name}</p>
      <input type="text" ref={inputRef} />
    </>
  )
}

const ForwardChild = forwardRef(Child);

export default ForwardChild