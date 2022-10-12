import React, { Component } from 'react';

class MyComponent extends Component {

    state = {
        name: 'Ngoc', 
        address: 'Bac Ninh', 
        age: 30, 
    }; 

    handleClick(event){
        // console.log("Click me my button"); 

        // console.log('event: ', event); 
        // console.log('event-target: ', event.target); 

        //Merge state (use for react-class)
        this.setState({
            name: 'Quoc Ngoc',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    // handleOnMouseOver(event){
    //     console.log("Onmouse my button");

    //     console.log('event: ', event); 
    //     console.log(event.pageX); 
    // }
    render() {
        return (
            <div>
                My first Component
                <br></br>
                My name is {this.state.name}. I'm from {this.state.address}. I'm {this.state.age} years old;

                {/* <button onClick={this.handleClick} >Click me</button> */}
                <button onClick={(event) => {this.handleClick(event)}} >Click me</button>
                <button onMouseOver={this.handleOnMouseOver} >Mouse over</button>
            </div>
        );
    }
}

export default MyComponent;
