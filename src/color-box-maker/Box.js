import React from 'react';

function Box({id, width=10, height=10, color='limegreen', handleRemove}) {
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
      <button onClick={remove} data-testid="delete-btn">Remove</button>
    </div>
  )
}

export default Box;