import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
  const [boxes, setBoxes] = useState([])
  const create = boxObj => {
    setBoxes(boxes => [...boxes, boxObj])
  }
  const remove = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id))
  }

  const boxComponents = boxes.map(box => (
    <Box 
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      handleRemove={remove}
      color={box.color}
    />
  ))

  return (
    <div className='box-container'>
      <NewBoxForm createBox={create}/>
      {boxComponents}
    </div>
  )
}

export default BoxList;