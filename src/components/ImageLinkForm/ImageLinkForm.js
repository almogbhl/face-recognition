import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({ on_input_change, on_button_click }) => {
  return (
    <div>
      <p className="">
        {'This Magic Brain will detect faces in your pictures. give it a try'}
      </p>
      <div className=''>
          <div className=''>
            <input onChange={on_input_change} className='' type='tex' />
            <button onClick={on_button_click} className=''>Detect</button>
            
          </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
