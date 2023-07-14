import React from 'react'

const avatar = ({Children,backgroundcolor,px,py,padding,color,boderRadius,fontSize,cursor}) => {
  const style ={
    backgroundcolor,
    padding:`${py} ${px}`,
    color:color || 'black',
    boderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration : "none"
    
  }
  return (
    <div style={ style }> 
      {Children}
    </div>
  )
}

export default avatar
