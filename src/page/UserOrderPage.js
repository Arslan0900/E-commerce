import React from 'react'
import Navbar from '../features/navbar/Navbar'
import { UserOrders } from '../features/user/components/Userorders'

const UserOrderPage = () => {
  return (
    <>
    <Navbar>
        <h1 className='text-2xl my-2 font-bold'>My Orders</h1>
        <UserOrders></UserOrders>
    </Navbar>
    </>
  )
}

export default UserOrderPage;