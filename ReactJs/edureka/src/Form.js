import React, { useState } from 'react';

function Form() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [style, setStyle] = useState("");
    const [flag,setFlag]=useState(false);
    
    const submitHandler = event => {
        event.preventDefault();

        console.log("id : ", id);
        console.log("Name : ", name);
        console.log("status : ", status);
        console.log("style : ", style);
        console.log("flag",flag)
        
        setFlag(!flag);

    }
    return (
        <>
           


            <div className="card" style={{ "width": "50%" }}>
            <h1 >   Employee Form </h1>

                <form onSubmit={submitHandler} className="form-inline">
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="inputPassword2" className="sr-only">EmployeeID</label>

                        <input type="text" className='form-control' name="id" onChange={(e) => setId(e.target.value)} />
                        <label htmlFor="d" className="sr-only">Name</label>

                        <input type="text" className='form-control' name="name" onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="b" className="sr-only">Status</label>

                        <select onChange={e => setStatus(e.target.value)} className='form-control'>
                            <option value="">Select</option>
                            <option value="Active">Active</option>
                            <option value="Disable">Disable</option>
                        </select>
                        <label htmlFor="a" className="sr-only">Style</label>

                        <select onChange={e => setStyle(e.target.value)} className='form-control'>
                            <option value="">Select</option>
                            <option value='class'>Style</option>
                            <option value="style">Class</option>
                        </select>
                        <button className='btn btn-success'>Submit</button>
                    </div>
                </form>

            </div>
            <div  style={{ "width": "48%;" }, { "float": "right" }}>
                <div className={flag&&'body-color'}> 
                    <table className='table table-striped' >
                        <thead>
                             <tr>
                                 <th>ID</th>
                                 <th>Name</th>
                                 <th>Status</th>
                                 <th>Style</th>
                             </tr>
                             </thead>
                             <tbody>
                             <tr>
                                 <td>{id}</td>
                                 <td>{name}</td>
                                 <td>{status}</td>
                                 <td >{style}</td>
                             </tr>
                             </tbody>
                    </table>
                    
                </div>
            </div>
        </>

    )
}
export default Form;