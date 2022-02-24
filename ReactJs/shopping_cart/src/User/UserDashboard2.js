// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios';

// class UserDashoard2 extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         productData:[],
//         cartArray:[],
//         singleData:{}
//       }
//      this.placeHandler=this.placeHandler.bind(this);
//      this.addHandler=this.addHandler.bind(this);
//     }
//     getProductDetails = () => {
//         axios.get("http://localhost:8282/product")
//             .then(response => {
//                 console.log(response);
//                 console.log("data :", response.data);
//                 this.setState({productData:response.data})
//                 //setProductDetails(response.data);

//             }).catch(err => {
//                 console.log("error in show product", err);
//             })
//     }
//     addHandler=(id)=>{

//         getProductById(id);
        
//      }
//    getProductById(id)
//    {
//      axios.get('http://localhost:8282/product/productById/'+id)
//         .then((r) => {
//              console.log("getProductById :",r.data);
//             let {cartArray,singleData}=this.state;
//                   this.setState({singleData:r.data});
//                let curValue={"_id":r.data._id,"pname":r.data.pname,"desc":r.data.desc,"price":r.data.price};
//                 cartArray.push({"_id":r.data._id,"pname":r.data.pname,"desc":r.data.desc,"price":r.data.price})
//                //  this.state.cartArray.push({"_id":r.data._id,"pname":r.data.pname,"desc":r.data.desc,"price":r.data.price});
//             //   this.setState({...cartArray})

//              console.log("Single Data : ",singleData); 
//         })
//         .catch((error) => {
//             console.log(error);
//         }); 
//    }
    
//   render() {
//     return (
//         <div>
//         <div className="container">
//             <div className="row">
//                 <div className="col">
//                     <nav className="navbar navbar-expand  navbar-dark bg-dark">
//                         <div className="container-fluid">

//                             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                                 <ul className="navbar-nav me-auto mb-1 mb-lg-0">
//                                     <li className="nav-item">
//                                         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                                     </li>

//                                 </ul>
//                                 <form className="d-flex">
//                                     <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
//                                     <button className="btn btn-success me-3" type="submit">Search</button>
//                                 </form>
//                                 <div className="nav navbar-header navbar-right ">
//                                     {/* <Link to="/order" ><span className="glyphicon glyphicon-log-in"></span> */}
//                                     <button className="btn btn-success me-3" onClick={this.placeHandler}>Place Order </button>
//                                     {/* </Link> */}
//                                     <Link to="/login" ><span className="glyphicon glyphicon-log-in"></span><button className="btn btn-success me-3">Login</button> </Link>
//                                 </div>

//                             </div>
//                         </div>
//                     </nav>




//                 </div>

//             </div>
//             <div className="row" >

//                 {
//                     this.state.productData.map((item, idx) => {
//                         return (
//                             <div className="col mt-3" key={idx}>
//                                 <div className="card" style={{ width: "18rem" }}>
//                                     <img src="../myimg/download.jpeg" className="card-img-top" alt="..." />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{item.pname}</h5>
//                                     </div>
//                                     <ul className="list-group list-group-flush">
//                                         <li className="list-group-item">{item.desc}</li>
//                                         <li className="list-group-item">{item.price}</li>
//                                     </ul>
//                                     <div className="card-body">
//                                         <button className="btn btn-primary" onClick={()=>this.addHandler(item._id)}>Add to Cart</button>
//                                     </div>

//                                 </div>

//                             </div>

//                         )
//                     })

//                 }
//             </div>


//         </div>
           
//     </div>
//     )
//   }
// }

// export default UserDashoard2








import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import MyOrder from './MyOrder';

function UserDashboard2() {
    const [productData, setProductDetails] = useState([]);
    const [cartArray,setCart]=useState([]);
    const [flag,setOrder]=useState(false);
    
    useEffect(() => {
        getProductDetails();                
    },[])

    const getProductDetails = () => {
        axios.get("http://localhost:8282/product")
            .then(response => {
                console.log(response);
                console.log("data :", response.data);
                setProductDetails(response.data);

            }).catch(err => {
                console.log("error in show product", err);
            })
    }

    
    
    const addHandler=(id)=>{

       getProductById(id);
       
    }
  function getProductById(id)
   {
     axios.get('http://localhost:8282/product/productById/'+id)
        .then((r) => {
             console.log("getProductById :",r);
             let curValue={"_id":r.data._id,"pname":r.data.pname,"desc":r.data.desc,"price":r.data.price};
             cartArray.push(curValue);
             setCart(cartArray);

             console.log("setCart ---",cartArray); 
        })
        .catch((error) => {
            console.log(error);
        }); 
   }

   const placeHandler=()=>{

       setOrder(true);
       console.log(flag);

   }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand  navbar-dark bg-dark">
                            <div className="container-fluid">

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                                        <li className="nav-item">
                                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                                        </li>

                                    </ul>
                                    <form className="d-flex">
                                        <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-success me-3" type="submit">Search</button>
                                    </form>
                                    <div className="nav navbar-header navbar-right ">
                                        {/* <Link to="/order" ><span className="glyphicon glyphicon-log-in"></span> */}
                                        <button className="btn btn-success me-3" onClick={placeHandler}>Place Order </button>
                                        {/* </Link> */}
                                        {/* <Link to="/login" ><span className="glyphicon glyphicon-log-in"></span><button className="btn btn-success me-3">Login</button> </Link> */}
                                    </div>

                                </div>
                            </div>
                        </nav>




                    </div>

                </div>
                <div className="row" >

                    {
                        productData.map((item, idx) => {
                            return (
                                <div className="col mt-3" key={idx}>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src="../myimg/download.jpeg" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.pname}</h5>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">{item.desc}</li>
                                            <li className="list-group-item">{item.price}</li>
                                        </ul>
                                        <div className="card-body">
                                            <button className="btn btn-primary" onClick={()=>addHandler(item._id)}>Add to Cart</button>
                                        </div>

                                    </div>

                                </div>

                            )
                        })

                    }
                </div>


            </div>
               
        </div>
    )
}

export default UserDashboard2
