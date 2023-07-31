import React from 'react';
import "../style/Display.css";
function Display({closeModal}) {
  return (
    <div className='display'>
        <div className='container-display'>
        <h1>Details</h1>
        <form action="">
            <label>Name : </label>
            <input type="text" />
            <label>Age : </label>
            <input type="number" />
            <div className="gender">  
            <label>Gender : </label>
            <input type="radio" value="M" id='m'/>
            <label for="m">M</label>
            <input type="radio" value="F" id='f'/>
            <label for="f">F</label>
            </div>
            <label>Father's Name : </label>
            <input type="text" />
            <label>Mother's Name : </label>
            <input type="text" />
            <label>Address : </label>
            <input type="text" />
            <label>12th Percentage : </label>
            <input type="percentage" />

        </form>
        <div className="btns">
        <button className='btn' onClick={()=>{
            closeModal(false);
        }}>Close</button>
        <button>Save</button>
        </div>
        </div>
    </div>
  )
}

export default Display