import React from 'react'


const CoolButton=(props)=>{
    return(
        <div className="buttons">
  <button className={props.className}>{props.title}</button>
</div>

    )
}

export default CoolButton;