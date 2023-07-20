import React from 'react';



const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    
    console.log('Button clicked!');
  };

  return (
   
      <div className="floating-button" onClick={handleClick}>
        <span className="btn-name">Ask?</span>
      </div>
    
 
  );
};

export default FloatingButton;
