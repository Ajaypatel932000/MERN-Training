import React, { Component } from 'react'

export class Crud extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Ctype:false,
      Customer:
      {
        ccode: '',
        cname: '',
        status: '',
        custType: ''
      },
      CustomerData: []

    }
  }

  onChangeHandler = (e) => {
    let { name, value, checked } = e.target;
    //console.log(checked);
    if (name === 'status') {
      value = checked;
    }
    let { Customer } = this.state;
    this.setState({ Customer: { ...Customer, [name]: value } })
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let { CustomerData, Customer } = this.state;
    // Customer.ccode='';
    // Customer.cname='';
    CustomerData.push(Customer);
    this.setState({CustomerData})

  }
  onDelete=(deleteIndex)=>
  {
    let{Customer,CustomerData}=this.state;
    //let Cdata=CustomerData
    //console.log(Cdata);
    CustomerData.splice(deleteIndex,1);
    //console.log("-> ",Cdata);

    this.setState({CustomerData})

  }
  onEdit=(item,index)=>{
      let{ Customer}=this.state;
      Customer.ccode=item.ccode;
      Customer.cname=item.cname;
      Customer.status=item.state;
      Customer.custType=item.custType;
      this.setState({Customer});

  }
  render() {

    let { Customer,CustomerData } = this.state;

    return (
      <div>
        <div className='row'>
          <div className='col-md-4'>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Code</label>
                <input type='text' name="ccode" className='form-control' value={Customer.ccode} onChange={this.onChangeHandler} />
              </div>
              <div className="form-group">
                <label>Name</label>
                <input type='text' name="cname" value={Customer.cname} onChange={this.onChangeHandler} className='form-control' />
              </div>
              <div className="form-group">
                <label>Status</label>
                <input type='checkbox' name="status" value={Customer.status} onChange={this.onChangeHandler} className='ml-4' />
              </div>
              <div className="form-group">
                <label>Type</label>
                Local:  <input type='radio' name="custType" value="local" onChange={this.onChangeHandler} className='ml-3 pr-3' />
                Center : <input type='radio' name="custType" value="center" onChange={this.onChangeHandler} className='ml-3 pr-3' />

              </div>

              <button className='btn btn-primary' >Click</button>



            </form>


          </div>
          <div className='col-md-8'>

              <table className='table table-striped'>
                          <tbody>
                            <tr>
                              <td>Code</td>

                              <td>Name</td>

                              <td>Status</td>

                              <td>Type</td>
                            </tr>
                            {
                              CustomerData.map((item,idx)=>{
                                return(
                                  <tr key={idx}>
                                      <td>{item.ccode}</td>
                                      <td>{item.cname}</td>
                                      <td><input type="checkbox" checked={item.status} onChange={()=>{}} /></td>
                                      <td>{item.custType}</td>
                                      <td><button className='btn btn-danger' onClick={()=>this.onDelete(idx)}>Delete</button></td>
                                  </tr>
                                )
                              })
                            }
                          </tbody>
              </table>
          </div>

        </div>


      </div>
    )
  }
}

export default Crud
