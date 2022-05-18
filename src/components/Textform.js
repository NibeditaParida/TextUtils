import React, { useState } from 'react'

function Textform(props) {
    const handleChange = (e) => {
        setText(e.target.value);
        
    }
    const handleupClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert('converted to uppercase','success')
    }
  
    const handleClear = (e) => {
        setText('');
        props.showAlert('cleared words','success')

    }
    const handleExtaSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('cleared extra space','success')
    }

    const handleCopy = () => {
        var text = document.getElementById('copying')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert('copied','success')
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1 >{props.heading}</h1>
                <div className="mb-4">
                    <textarea className="form-control" cols="30" value={text} id='copying' style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white' ,
                        color: props.mode === 'dark' ? 'white' : 'black'}}
                        onChange={handleChange} rows="8"></textarea>
                </div>
                <button disabled = {text.length ===0} className="btn btn-primary mx-2 my-1" onClick={handleupClick}  >Convert to uppercase</button>
                <button  disabled = {text.length ===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
                <button  disabled = {text.length ===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled = {text.length ===0} className="btn btn-primary mx-2 my-1" onClick={handleExtaSpace}>Remove space</button>
            </div>
            <div className="container  my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and{text.length} character</p>
                <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ?text :'Nothing to preview'}</p>
            </div>
        </>
    )
}

export default Textform