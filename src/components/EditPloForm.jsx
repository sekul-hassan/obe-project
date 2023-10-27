import React, {useState} from 'react'

export const EditPloForm = ({editPlo, description}) => {
    const [value, setValue] = useState(description.description)

    const handleSubmit = (e) => {
        e.preventDefault();
        editPlo(value,description.id);
        setValue("")
    }

  return (
    <form className='PloForm' onSubmit={handleSubmit}>
      <div className='form-group'>
        <input type="text" className='form-input form-control' placeholder='Update Plo' value={value} onChange={(e) => setValue(e.target.value)} required/>
        <button type='submit' className='form-btn btn'>Update</button>
      </div>
        
    </form>
  )
}