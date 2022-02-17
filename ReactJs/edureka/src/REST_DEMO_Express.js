import React, { Component } from 'react'
import axios from 'axios'

export class REST_DEMO_Express extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: []

        }
        console.log("constructor");
    }

    componentDidMount() {
        console.log("DidMount");
        axios.get("http://localhost:8083/user")
            .then(response => {
                console.log(response);
                console.log("data :", response.data.user);
                this.setState({ user: response.data.user });
            })

    }
    render() {
        let { user } = this.state;
        //   console.log("Render");
        //  console.log(users);
        return (
            <div>
                {user.name}
                <h1>REST Example.</h1>
                <table className='table table-striped'>
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
                </table>
            </div>
        )
    }
}

export default REST_DEMO_Express
