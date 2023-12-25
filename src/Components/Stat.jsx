import React from 'react'

const Stat = ({items}) => {
  if(!items.length){
    return <p className='stats'>you have No or 0 items</p>
  }
  else
  return (
    <div className='stats'>
  you have {items.length} in your list
    </div>
  )
}

export default Stat