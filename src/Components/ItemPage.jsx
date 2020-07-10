import React from 'react'

function ItemPage(props) {
  return (
    <div>
      {/* <div className="items">
        <div className="name"> */}
          {props.name}
        {/* </div> */}
        <button onClick={()=> props.function}>+</button>
        {/* <div className="quantity"> */}
          {props.quantity}
        {/* </div> */}
        <button onClick={()=> this.function}>-</button>
        {/* <div className="cost"> */}
          ${props.price}
        {/* </div> */}
      {/* </div> */}
    </div>
  )
}

export default ItemPage
