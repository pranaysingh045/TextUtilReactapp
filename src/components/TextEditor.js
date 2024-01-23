import React,{useState,useRef} from 'react'
import JoditEditor from 'jodit-react';
export default function TextEditor() {
    const editor = useRef(null);
	const [content, setContent] = useState('');
  return (
    <>

    
    <div className='container my-4'>
    <h2 className='my-3'>This is Text Editor</h2>
    <JoditEditor
			ref={editor}
			value={content}
			// config={config}
			tabIndex={1} // tabIndex of textarea
			//onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => setContent(newContent)}
		/>

    </div>
    <div className='container'>
        <textarea name="" id="" cols="150" rows="10" value={content}></textarea>

    </div>
    
    </>
    
  )
}
