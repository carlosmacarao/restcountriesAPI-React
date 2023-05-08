import React, { useState } from 'react';

function DownloadPdf () {
  
  
  return (
    <>
     <a href='carlos-macarao-cv-pt.pdf' download="carlos-macarao-cv-pt.pdf">
      
      <input
        type="button"
        value="Download PDF"
        
        className='down_button'
      />
     </a> 
    </>
  );
};

export default DownloadPdf;
