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
          <label className="label" htmlFor="color">Enter a color</label>
          <input 
            type="text"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="label" htmlFor="width">Enter a width</label>
          <input 
            type="text"
            id="width"
            name="width"
            value={formData.width}
            onChange={handleChange}
          />
        </div>
        <div>
        <label className="label" htmlFor="height">Enter a height</label>
        <input 
          type="text"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        </div>
        <button>Create Box</button>
      </form>
    </div>
  )
}

export default NewBoxForm