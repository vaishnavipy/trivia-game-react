import React from "react"

function CategoryPicker(props){

    const color ={color:"white"}

    function handleClick(event){ console.log(event.target.nodeName)
        if(event.target.nodeName !== "H1"){

            props.chooseCategory(event.target.textContent)
           
        }

    }


    return(
    <div className="category-picker" onClick={handleClick}>
        <h1 style={color}>Pick A Category</h1>
        
        <div className="category">Science And Nature</div>

        <div className="category">Celebrities</div>

        <div className="category">Sports</div>

        <div className="category">Animals</div>

        <div className="category">Mythology</div>

        <div className="category">Genral Knowledge</div>

    </div>)
}

export default CategoryPicker;