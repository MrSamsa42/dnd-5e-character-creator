import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'pink', 'orange', 'blue', 'green', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const className = randomColor + '-text';

    return (props) => {
        //the props came from the WrappedComponent -- need to make sure returned component has same props
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow