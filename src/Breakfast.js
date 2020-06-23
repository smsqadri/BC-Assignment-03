import React from 'react';

function Breakfast (props){
    return (
        <div>
            <h1>Today's Breakfast we are serving {props.DishName}</h1>
            <h2>We also Serve Sweet {props.Sweet}</h2>
            
        </div>
    )
}

export default Breakfast;