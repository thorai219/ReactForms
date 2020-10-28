import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewBoxForm = ({ createBox }) => {
  const initial_state = {
    color: "",
    width: "",
    height: ""
  }
  const [formData, setFormData] = useState(initial_state)
  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }
  const handleSubmit = e => {
    e.preventDefault();
    createBox({...formData, id: uuidv4()})
    setFormData(initial_state)
  }
  return(
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label 
            className="label" 
            htmlFor="color"
          >Color</label>
          <input 
            type="text"
            id="color"
            name="color"
            data-testid="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="label" 
            htmlFor="width"
          >Width</label>
          <input 
            type="text"
            id="width"
            data-testid="width"
            name="width"
            value={formData.width}
            onChange={handleChange}
          />
        </div>
        <div>
        <label 
          className="label" 
          htmlFor="height"
        >Height</label>
        <input 
          type="text"
          id="height"
          name="height"
          data-testid="height"
          value={formData.height}
          onChange={handleChange}
        />
        </div>
        <button data-testid="create-btn">Create Box</button>
      </form>
    </div>
  )
}

export default NewBoxForm