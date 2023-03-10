import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button} from 'react-bootstrap';
import '../App.css';
import { useState } from 'react';

function Btn() {
    const [className, setClassName] = useState('myBtn');

    function handleClick() {
      if (className === 'spinner') {
        setClassName('');
      } else {
        setClassName('spinner');
      }
    }
    

  return (
    <div>


    <Button className={className} onClick={handleClick}>
  ?????
</Button>

    
    </div>
  );
}

export default Btn;