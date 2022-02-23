import React from 'react'
import { Link } from 'react-router-dom'

function Product() {
    return (

        <div class="container">
            Admin Page.  <Link to="/login" ><button className='btn btn-primary'>Logout</button> </Link>

            <div class="row">
                <div class="col"><Link to="/insert" className="btn btn-primary">Insert</Link></div>
                <div class="col"><Link to="/showproduct" className="btn btn-primary">Show Product</Link></div>
                <div class="col">col</div>
                <div class="col">col</div>
            </div>

            <div class="row">
                <div class="col-sm-4">col-sm-4</div>
                <div class="col-sm-8">col-sm-8</div>

            </div>
            <div class="row">
                <div class="col-sm">col-sm</div>
                <div class="col-md-auto">col-sm</div>
                <div class="col-sm">col-sm</div>
            </div>
            
        </div>
         

    )
}

export default Product
