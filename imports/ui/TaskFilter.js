import React from 'react'

export const TaskFilter = ({hideDone, setHideDone}) => {
  return (
    <div>
        <button onClick={()=> setHideDone(!hideDone)}>
            {hideDone ? "Show All Tasks" : "Hide Completed Tasks"}
        </button>
    </div>
  )
}
