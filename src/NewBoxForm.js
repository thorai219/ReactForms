import React, { useState } from 'react';
import uuid from 'uuid/v4';
import './NewBoxForm.css'

const NewBoxForm = () => {
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
    createBox({...formData, id: uuid()})
    setFormData(initial_state)
  }
  return(
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <lable className="label" htmlFor="color">Enter a color</lable>
          <input 
            type="text"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>
        <div>
          <lable className="label" htmlFor="width">Enter a width</lable>
          <input 
            type="text"
            id="width"
            name="width"
            value={formData.width}
            onChange={handleChange}
          />
        </div>
        <div>
        <lable className="label" htmlFor="height">Enter a height</lable>
        <input 
          type="text"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        </div>
      </form>
    </div>
  )
}

export default NewBoxForm