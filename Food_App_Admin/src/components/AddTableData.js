import React from 'react'
import './AddTableData.css'


const AddTableData = () => {

  return (
    <div className='form-outer'>
        <h1>Add Table Data</h1>
        <form className='form-inner'>
            <label>Table Name</label>
            <input type="text" name="table_name"/>
            <label>Table Image</label>
            <input type = "file" name='table_image'/>
            <label>Table Booking Cost</label>
            <input type = "text" name="table_price"/>
            <button>Add Table</button>
        </form>
    </div>
  )
}

export default AddTableData