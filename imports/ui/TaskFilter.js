import React from 'react'

export const TaskFilter = ({hideDone, setHideDone}) => {
  return (
    <div>
        <button 
            className="filterButton"
            onClick={()=> setHideDone(!hideDone)}
        >
            {hideDone ? "Show All Tasks" : "Hide Completed Tasks"}
        </button>
    </div>
  )
}
