import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Addmodal from "../components/Addmodal"



const CardDoctor = ({data}) => {

  const [show, setShow] = useState(false);
  const{id,name,dep,img} = data;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} onClick={handleShow}/>
    <Card.Body className='text-center'>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {dep}
      </Card.Text>
    </Card.Body>
  </Card>
  {show && <Addmodal handleClose={handleClose} handleShow={handleShow} show={show} name={name}/>}
  </div>
  )
}

export default CardDoctor