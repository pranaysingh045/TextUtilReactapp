import './App.css';
import Alert from './components/Alert';
import Abouts from './components/Abouts';
import Navbars from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from './context/NoteState';
import TextEditor from './components/TextEditor';
import TestuseRef from './components/TestuseRef';
function App(props) {
  const [mode,setMode]=useState('light');
  const [textformode,setTextforMode]=useState('Enable light mode');
  const [alertmsg,setAlertmasg]=useState(null)

  const Alertmassaged=(masg,type)=>{
    setAlertmasg({'msg':masg,'type':type})

    setTimeout(() => {
      setAlertmasg('')
    },2000);

  }

  const ChangeMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setTextforMode('Enable light mode');
      document.body.style.backgroundColor='grey';
      document.title='Text utill it is dark mode'
      Alertmassaged('Your Dark Mode is Enabled Now','success')
    }
    else{
      setMode('light');
      setTextforMode('Enable Dark mode');
      document.body.style.backgroundColor='white';
      Alertmassaged('Your light Mode is Enabled Now','success')
      document.title='Text utill it is light mode'
    }
  }
  return (
    <>
    {/* if you want see default props then remove title value completely here i have not passing about value it takes from bydefault value which is decliear in component navbar   */}
    <NoteState>
    <BrowserRouter>
    <Navbars mode={mode} toggle={ChangeMode} textformode={textformode} title="Textutile test pass as a props" hometext="Home" ></Navbars>
    <Alert almssage={alertmsg} />
    <Routes>
      <Route exact path='/about' element={<Abouts heading='Abouts' />} />
      <Route exact path='/texteditor' element={<TextEditor />} />
      <Route exact path='/' element={<TextForm mode={mode} alertmessag={Alertmassaged} heading="Text Analyzers" />} />
      <Route exact path='/usereftest' element={<TestuseRef/>} />
    </Routes>
    {/* in previous i have used exact becaut react router match partial so in this condition it will match exact path */}
    
    </BrowserRouter>
    
    </NoteState>
    {/* <Abouts heading='Abouts' /> */}
    </>
    
  );
}

export default App;
