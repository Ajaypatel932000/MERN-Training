import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
import Product from './Admin/Product'
import ProductInsert from './Admin/ProductInsert'
import ShowProduct from './Admin/ShowProduct'
import MyOrder from './User/MyOrder'
import UserDashoard from './User/UserDashoard';
import PangeNotFound from './PangeNotFound'

export class MyRoute extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <ul>
                    </ul>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/userDashboard" element={<UserDashoard/>} />
                        <Route path="/insert" element={<ProductInsert/>}/>
                        <Route path="/showproduct" element={<ShowProduct/>}/>
                        <Route path="/order" element={<MyOrder/>}/>
                        <Route path="/*" element={<PangeNotFound/>}/>


                    </Routes>
                </BrowserRouter>

            </div>
        )
    }
}

export default MyRoute
