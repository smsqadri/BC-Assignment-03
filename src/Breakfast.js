import React from 'react';

function Breakfast (props){
    return (
        <div>
            <h1>Today's Breakfast we are serving {props.DishName}</h1>
            <h1>We also Serve Sweet {props.Sweet}</h1>
            
        </div>
    )
}

export default Breakfast;