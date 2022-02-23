import React, { Component } from 'react'
import axios from 'axios';
export class GetStudents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: []

        }
        console.log("constructor");
    }

    componentDidMount() {
        console.log("DidMount");
        axios.get("http://localhost:8183/getStudents")
            .then(response => {
                console.log(response);
                console.log("data :", response.data);
                this.setState({ user: response.data });
            })

    }
    render() {
        let { user } = this.state;
        //   console.log("Render");
        //  console.log(users);
        return (
            <div>
                Id:  {user._id}<br/>
            User Name:  {user.name}<br/>

            add :{ user.add}
                <h1>REST Example.</h1>
                {/* <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{item.name}</td>

                                        <td>{item.id}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> */}
            </div>
        )
    }
}


export default GetStudents
