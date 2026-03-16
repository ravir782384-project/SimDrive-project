import React from 'react'

function Events() {
        function Popupname() {
        alert("you clicked man");
    }
  return (
    <div style={{textAlign:"center"}}>
      <button className='btn btn-success' onClick={Popupname}>click me
      </button>
    </div>
  );
}
 export default Events;
