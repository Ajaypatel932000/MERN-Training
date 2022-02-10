import React, { useState } from 'react';

function MyStyle() {
    const [cssStyle, setStyle] = useState({});
    const [btnStyle,setButtonStyle]=useState();
    const onColorChange = () => {
        setStyle({"color":"red"});
        setButtonStyle('btn btn-primary')
    }
    return (
        <div>
            <h1 style={{ "color": "green" }}>Hello Css</h1>
            
            <h1 style={cssStyle}>Hello Ajay</h1>
            <button onClick={onColorChange} className={btnStyle}>Change Color</button>
        </div>
    )
}

export default MyStyle;