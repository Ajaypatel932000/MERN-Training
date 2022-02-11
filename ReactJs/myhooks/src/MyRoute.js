import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function MyRoute() {
    return (
        <div>
            <h3>Routing ...</h3>
            <BrowserRouter>
                 <Link to="/test">Test</Link> <hr/>

                 <Link to="/service">Service</Link>
                 <hr/>
                 <Link to="/about">About</Link>
                <Routes>
                    <Route path="/test" element={<Test />} />
                    <Route path="/service" element={<Service/>}/>
                    <Route path="/about/:eid" element={<About/>}/>
                
                </Routes>
            </BrowserRouter>
        </div>
    )
}

const Test = () => { return <h1>Test Component called.</h1> }
const Service = () => { return <h1>Service Component called.</h1> }
const About = () => { return <h1>About Component called.</h1> }

export default MyRoute
