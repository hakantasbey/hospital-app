import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Addmodal from "../components/Addmodal"



const CardDoctor = ({data}) => {

  const[selectedDoctor, setSelectedDoctor] = useState(null)

  // console.log(data);
  const{id,name,dep,img} = data

  const handleModal = (data) => {
    setSelectedDoctor(data)
    // console.log(data);
  }
  console.log(selectedDoctor);

  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} onClick={()=>handleModal(data)}/>
    <Card.Body className='text-center'>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {dep}
      </Card.Text>
    </Card.Body>
  </Card>
  {selectedDoctor && <Addmodal/>}
  </div>
  )
}

export default CardDoctor