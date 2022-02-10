import React from 'react'

function NameList() {
    const names = ["Ajay", "Vijay", "Karan"]
    return (
        <div>
            {  //1. way 
                // names.map(item=><h2>{item}</h2>)
                //2. way
                // names.map((name,idx)=>{
                //   return  <h3 key={idx}>{name}</h3>
                // })
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            names.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{item}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </table>


            }

        </div>
    )
}

export default NameList
