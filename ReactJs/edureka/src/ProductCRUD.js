import React, { Component } from 'react'

class ProductCRUD extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          count:0,
         product:
         {
             pid:0  ,
             pname:''
         
        },
        productData:[]

      }
    }

    changeHandler=(e)=>{
        let {name,value}=e.target;
        console.log(name,"  : ",value);
        let {product}=this.state;
        this.setState({product:{...product,[name]:value}});
        console.log(product);

    }
    onSubmit=(e)=>{
        e.preventDefault();
         
        let {productData,product,count}=this.state;
//        product.pid=this.state.product.pid+1

        productData.push(product);
        console.log("product Data On onSubmit ",productData);
        this.setState({productData});

    }
    onDelete=(index)=>
    {
        let {productData}=this.state;
        productData.splice(index,1);
        this.setState({productData});

    }
    onEdit=(index,item)=>{
       let {product}=this.state;
       console.log(index,item);
    //    product.id=item.pid;
    //    product.pname=item.pname
        product = item;
       this.setState({product})

    }
  render() {
      let{product,productData}=this.state;
    return (
      <div className='row'>
          <div className='col-md-4'>
              <form onSubmit={this.onSubmit}>
                   <div className='form-group'>
                       <label>Product ID</label>
                       <input type="text" name="pid" className='form-control-plaintext' value={product.pid} onChange={this.changeHandler} />
                     
                   </div>
                   <div className='form-group'>
                       <label>Product Name</label>
                       <input type="text" name="pname" className='form-control' value={product.pname} onChange={this.changeHandler} />
                     
                   </div>

                   <button className='btn btn-primary' >Submit</button>

              </form>

          </div>
          <div className='col-md-8'>
          <table className='table table-striped'>
                          <tbody>
                            <tr>
                              <td>ProductId</td>

                              <td>ProductName</td>

                            </tr>
                            {
                              productData.map((item,idx)=>{
                                return(
                                  <tr key={idx}>
                                      <td>{product.pid}</td>
                                      
                                      <td>{item.pname}</td>
                                      <td><button className='btn btn-danger' onClick={()=>this.onDelete(idx)}>Delete</button></td>
                                      <td><button className='btn btn-warning' onClick={()=>this.onEdit(idx,item)}>Edit</button></td> 
                                  </tr>
                                )
                              })
                            }
                          </tbody>
              </table>

          </div>
           
      </div>
    )
  }
}

export default ProductCRUD
