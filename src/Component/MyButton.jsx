import React from 'react'

export default function MyButton(props) {
    return (
        <div>
            <button className='btn btn-primary fs-4'>{props.btnName} </button>
        </div>
    )
}
