import React, {useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color : 'white',
        backgroundColor : 'black',
        border : "1px solid white"
    })

    const [btn, changeBtn] = useState("Enable Dark Mode")

    const changeStyle = ()=> {
        if (myStyle.color == 'white') {
            setMyStyle({color : 'black',
            backgroundColor : 'white'
        })
            changeBtn("Enable Dark Mode")
        } else {
            setMyStyle({color : 'white',
            backgroundColor : 'black'
        })
        changeBtn("Enable Light Mode")
        }
    }
  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'> About Us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Main Aim
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Fast, reliable, and easy! <strong>Text-Utils</strong> brings several free online tools to assist developers in daily tasks.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                About TextUtils
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            We provide free tools to help you with your daily tasks. You will find tools for formatting source code, converters, tools for handling text, such as remove duplicate characters, empty lines, text sorter and many others. Check the current features below and feel free to recommend a new feature by contacting us.
            </div>
            </div>
        </div>
        </div>
        <div className='container my-3'> 
            <button type="button" onClick={changeStyle} className="btn btn-success"> {btn} </button>
        </div>
    </div>
  )
}
