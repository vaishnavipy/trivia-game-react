import React from "react"

function CategoryPicker(props){

    const color ={color:"white"}

    function handleClick(event){ console.log(event.target.nodeName)
        if(event.target.nodeName === "DIV" ){
            if(event.target.id !== "mainDiv"){
            props.chooseCategory(event.target.textContent)
            }
           
        }else{
            event.preventDefault()
        }

    }


    return(
    <div className="category-picker" onClick={handleClick} id="mainDiv">
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