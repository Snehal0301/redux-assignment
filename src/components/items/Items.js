import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { removeUser } from '../../slice/detailSlice';
import './Items.css'

const Items = () => {
    // const users = JSON.parse(localStorage.getItem('users')||'[]');
    const users = useSelector((state) => state.users.value)
    const dispatch = useDispatch()
    return (
        <>
            {
                users.map((user, id) => (

                    <div key={id} className='items'>
                        <div className="item">
                            <div className="item-name">{user.name}</div>
                            {/* <div className="item-name">{user.id}</div>   */}
                        </div>
                        <button onClick={() => dispatch(removeUser({ id: user.id }))}>REMOVE</button>
                    </div>

                ))
            }
        </>
    )
}

export default Items