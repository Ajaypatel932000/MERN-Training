import React,{useState} from 'react';

function Calculator(){
 const [rate,setRate]=useState(0)
 const [amount,setAmount]=useState(0)
 const [year,setYear]=useState(1)
 const [intrest,setIntrest]=useState(0)
 
     
  const submitValue=(event)=>{
      event.preventDefault()
      //let result=(amount*rate/100)*year;
      setIntrest((amount*rate/100)*year)
        //  const formData={
        //      'amount':amount,
        //      'rate':rate,
        //      'year':year,
        //      'intrest':intrest
        //  }  
        //    console.log(formData);
        // 
          console.log("Intrest  :",(amount*rate/100)*year);
  }
 
    return(
        <div>
        {intrest}    
  <form>
  <div className="form-group">

    <label htmlFor="amount">Amount</label>
    <input type="]text" className="form-control"   placeholder="Enter Amount" onChange={(e)=>setAmount(e.target.value)} />
  
    <label htmlFor="rate">Rate</label>
    <input type="text" className="form-control" placeholder='Enter Rate' onChange={(e)=>setRate(e.target.value)} />
    <label htmlFor="rate">Year</label>

    <select className='form-control' placeholder='Select Year' onChange={(e)=>setYear(e.target.value)} >
                <option value="0" defaultValue={0}>Select Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select> <br/>

    <button type="submit" className="btn btn-primary" onClick={submitValue}>Submit</button>

  </div>
  
</form>
            
        
        </div>
    )
}

export default Calculator;