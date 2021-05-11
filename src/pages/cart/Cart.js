import React from 'react'
import CartButton from '../../components/CartButton'
import { useSelector, useDispatch } from 'react-redux'
import { setCart } from '../../stores/cart/cart.action'
import axios from 'axios';




function Cart() {




    return (
        <div>
            <CartButton></CartButton>
        </div>
    )
}

export default Cart
