import React, { useState } from 'react';

const Sellconfirm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenPopup = () => {
        const windowFeatures = "left=500,top=100,width=420,height=320";
        const handle = window.open(
            
          `https://65fb0034291f01008418cf5b--forsa-e-commerce.netlify.app/Message`,
          "popupWindow",
          windowFeatures,
        );
    
        // Close the window after 5 seconds (for demonstration purposes)
        setTimeout(() => {
          handle.close();
        }, 10000);
    
        setIsOpen(true);
      };
return(
<div>
    
      
    {!isOpen && (
        <button onClick={handleOpenPopup}>
          Open Popup
        </button>
      )}
      {isOpen && (
        <p>Popup window is open.</p>
      )}
      
   
</div>
        
    );
}

export default Sellconfirm;






