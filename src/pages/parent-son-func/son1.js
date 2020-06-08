import React, {Component, forwardRef} from 'react'

function Child(props, parentRef) {
  console.log(props);
  return (
    <>
      <input type="text" ref={parentRef} />
    </>
  )
}
/**
 * 使用forwardRef将ref直接传递进去
 */
let ForwardChild = forwardRef(Child);

export default ForwardChild
