import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import MyOrder from './MyOrder';
import myUserID from '../LoginObject';

class UserDashoard extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        productData:[],
        cartArray:[],
        pid:[],
        singleData:{},
        search:''
      }
       this.placeHandler=this.placeHandler.bind(this);
    // this.addHandler=this.addHandler.bind(this);
       this.searchHandler=this.searchHandler.bind(this);
    }
    componentDidMount()
    {
       // console.log("User ID ",myUserID.email);
        this.getProductDetails();

    }
    placeHandler()
    {
        if(this.state.cartArray.length>0)
        {
         axios.post("http://localhost:8282/orders/addOrder",
         {
            "userId":myUserID.email,
            "product":this.state.cartArray,
            "status":false,
            "total_price":0
         }).then(res=>{
             console.log(res);

         }).catch(err=>console.log(err));
        }
       
    }
    getProductDetails = () => {
        axios.get("http://localhost:8282/product")
            .then(response => {
                console.log(response);
                console.log("data :", response.data);
                this.setState({productData:response.data})
                //setProductDetails(response.data);

            }).catch(err => {
                console.log("error in show product", err);
            })
    }
    addHandler=(id)=>{

        this.getProductById(id);
        
     }
     searchHandler(event){
         console.log("OnChange");
        this.setState({search: event.target.value});
        console.log("onChange :",this.state.search);

     }
   getProductById(id)
   {
     axios.get('http://localhost:8282/product/productById/'+id)
        .then((r) => {
             console.log("getProductById :",r.data);
            let {cartArray,singleData,pid}=this.state;
                 this.setState({singleData:r.data});
                cartArray.push({"_id":r.data._id,"pname":r.data.pname,"desc":r.data.desc,"price":r.data.price})
                 pid.push(r.data._id);
                 this.setState({...cartArray})
                 this.setState({...pid});

             console.log("Cart Data : ",cartArray); 
        })
        .catch((error) => {
            console.log(error);
        }); 
   }
    
  render() {
    const  {productData}=this.state;
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
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>

                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" onChange={this.searchHandler} />
                                    {/* <button className="btn btn-success me-3" type="submit" >Search</button> */}
                                    <h5 className="text-warning me-3"><span>{myUserID.email}</span></h5>

                                </form>
                                <div className="nav navbar-header navbar-right ">
                                    <Link to="/order" ><span className="glyphicon glyphicon-log-in"></span>
                                      <button className="btn btn-success me-3" onClick={this.placeHandler}>View Cart </button>
                                    </Link>
                                    <Link to="/login" ><span className="glyphicon glyphicon-log-in"></span><button className="btn btn-success me-3">Logout</button> </Link>
                                </div>

                            </div>
                        </div>
                    </nav>
                    {/* <MyOrder /> */}



                </div>

            </div>
            <div className="row" >

                {
                    this.state.productData.filter(val=>{
                        console.log("data",val);
                        if(this.state.search=="")
                           return val;
                        else if(val.pname.toLowerCase().includes(this.state.search.toLowerCase()))
                        {
                            return val;
                            
                        }else if(val.desc.toLowerCase().includes(this.state.search.toLowerCase()))
                        {
                            return val;
                        }
                        //else if(val.price.toLowerCase().includes(this.state.search.toLowerCase()))
                        //{
                         //   return  val;
                       // }
                    }).map((item, idx) => {
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
                                        <button className="btn btn-primary" onClick={()=>this.addHandler(item._id)}>Add to Cart</button>
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
}

export default UserDashoard
