import React, { useState } from 'react'
import Logo from './Components/Logo'
import Form from './Components/Form'
import PackagingList from './Components/PackagingList'
import Stat from './Components/Stat'

const App = () => {
  const [items,setItems]=useState([]);
  return (
    <div className='app'>
      <Logo/>
      <Form setItems={setItems}/>
      <PackagingList items={items} setItems={setItems}/>
      <Stat items={items}/>
    </div>
  )
}

export default App