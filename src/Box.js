import React from 'react';

function Box({id, width, height, color, handleRemove}) {
  const remove = () => handleRemove(id)
  return(
    <div>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: color
        }}
      >
      </div>
      <button onClick={remove}>Remove</button>
    </div>
  )
}

export default Box;