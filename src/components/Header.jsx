import React from 'react'

const Header = ({todos}) => {
  return (
    <h1>📝<span className='headerSpan'>{todos.length>0&&todos.length}</span>{todos.length===1?"Task":"Tasks"} to do...</h1>
  )
}

export default Header