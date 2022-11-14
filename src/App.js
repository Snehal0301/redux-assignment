import React, { useState } from 'react'
import './App.css'
import Items from './components/items/Items'
import { useDispatch } from 'react-redux'
import { addUser } from './slice/detailSlice'
const App = () => {

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
    id: ''
  })

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(addUser(form))
    setForm({ name: "", id: '' })
  }

  const handleChange = (e) => {
    setForm({ name: e.target.value, id: new Date().getTime().toString() })
  }

  return (
    <div className='app'>
      <form onSubmit={handleForm} className="form">
        <input type="text" placeholder='Name' name='name' value={form.name} onChange={handleChange} />
        {/* <input type="text" placeholder='Phone number' name='phone' value={form.phone} onChange={handleChange} />
        <input type="text" placeholder='Address' name='address' value={form.address} onChange={handleChange} /> */}
        <button>Add</button>
        <div className="line"></div>
      </form>
      <Items />

    </div>
  )
}

export default App