import React, {useState} from 'react'

export default function TextForm(props) {
    const [textchange,SetText]=useState("")   //it is state initial value is null string

    const UpperCaseFun=()=>{
        console.log('click on uppercase bu');
        let newtxt=textchange.toUpperCase();

        SetText(newtxt);
        props.alertmessag('Text converted in Uppercase','success')

    }

    const handlerOnchangefun=(event)=>{
        SetText(event.target.value)
        console.log('this is onchanege')
        
    }

    const LowerCaseFun=()=>{
        let newtexts=textchange.toLowerCase()
        SetText(newtexts)
        props.alertmessag('Text converted in Lower case','success')
    }
    const ClearTextFun=()=>{
        SetText('')
        props.alertmessag('Text Clear','success')
    }
    const CopyTextFun=()=>{
        let vl=document.getElementById('textbox');
        vl.select();
        navigator.clipboard.writeText(vl.value);
        props.alertmessag('Text Copy','success')


    }

  return (
    <>
    <div className='container my-4'>
        <h3 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h3>
  
  <div className="form-group">
   
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={textchange} onChange={handlerOnchangefun} id='textbox' aria-label="With textarea"  rows={10}></textarea>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  
  <button type="button" className="btn btn-primary mr-3" onClick={UpperCaseFun} >Change uppercase</button>
  <button type='button' className='btn btn-danger mr-3' onClick={LowerCaseFun}>ChangetoLower</button>
  <button className="btn btn-primary  mr-3" type='button' onClick={ClearTextFun}>Clear Text</button>
  <button className="btn btn-primary  " type='button ' onClick={CopyTextFun}>Copy Text</button>

    </div>
    <div className='container my-3'>
        <h2 style={{color:props.mode==='dark'?'white':'black'}}>Your Text Summary </h2>
        <p style={{color:props.mode==='dark'?'white':'black'}}>Total Word {(textchange.split(' ').length)-1} and Total character {(textchange.length)}</p>
        <p6 style={{color:props.mode==='dark'?'white':'black'}}>Read time {0.008 * textchange.split('').length} Minutes</p6>
        <h5 style={{color:props.mode==='dark'?'white':'black'}}>Perview</h5>
        <p1 style={{color:props.mode==='dark'?'white':'black'}}>{textchange.length>0?textchange:'Please Enter text for previe'}</p1>

    </div>
    </>
  )
}
