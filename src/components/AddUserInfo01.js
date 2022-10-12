import React, { Component } from 'react';

class AddUserInfo01 extends Component {


    state = {
        name: 'Ngoc', 
        address: 'Bac Ninh', 
        age: 30, 
    }; 

    handleOnChangeName = (e) => {
        this.setState({
            name: e.target.value, 
            
        })
    }

    handleOnChangeAge = (e) => {
        this.setState({
            age: e.target.value, 

        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault(); 
       this.props.handleAddNewUser({
            id: Math.floor((Math.random()*100) + 1), 
            name: this.state.name, 
            age: this.state.age,
        });
    }
    render() {
        return (
            <div>
                 My name is {this.state.name}. I'm from {this.state.address}. I'm {this.state.age} years old;
                 {/* My name is {this.props.name}. I'm from {this.props.address}. I'm {this.props.age} years old; */}

                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <label>Your name: </label>
                    <input value={this.state.name} type="text" onChange={(event)=> {this.handleOnChangeName(event)}} ></input>

                    <label>Your age: </label>
                    <input value={this.state.age} type="text" onChange={(event)=> {this.handleOnChangeAge(event)}} ></input>
                    
                    <button >Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfo01;
