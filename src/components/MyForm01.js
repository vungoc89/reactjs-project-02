import React, { Component } from 'react';
import DisplayInfo01 from './DisplayInfo01';
import AddUserInfo01 from './AddUserInfo01';
// import UserInfo01 from './UserInfo01';

class MyForm01 extends Component {

    
    // state = {
    //     name: 'Ngoc', 
    //     address: 'Bac Ninh', 
    //     age: 30, 
    // }; 

    // handleClick(event){
    //     // console.log("Click me my button"); 

    //     // console.log('event: ', event); 
    //     // console.log('event-target: ', event.target); 

    //     //Merge state (use for react-class)
    //     this.setState({
    //         name: 'Quoc Ngoc',
    //         age: Math.floor((Math.random() * 100) + 1)
    //     })
    // }

    // handleChangeName = (event) => {
    //     // console.log(event.target.value);
    //     this.setState({
    //         name: onNameChange(event), 

    //     })
    // }

    // handleChangeAge = (event) => {
    //     // console.log(event.target.value);
    //     this.setState({
    //         age: onAgeChange(event), 

    //     })
    // }

    state = {
        listUsers: [
            {id: 1, name: "User 01", age: "10"}, 
            {id: 2, name: "User 02", age: "60"}, 
            {id: 3, name: "User 03", age: "90"}, 
        ]
    }

    handleAddNewUser = (userObject) => {
        // console.log('test data: ', userObject);
        // alert('me');

        this.setState({
                listUsers: [userObject, ...this.state.listUsers] 
        });
    }

    render() {
        // console.log('props MyForm01: ', this.state); 
       
        return (
            <div>
                {/* <UserInfo01></UserInfo01> */}
                <br></br>
                {/* <DisplayInfo01 name={"Quoc ngoc"} age={30}></DisplayInfo01> */}
                {/* <DisplayInfo01 name={(e) =>{this.handleChangeName(e)}}  age={(e) => {this.handleChangeAge(e)}}></DisplayInfo01> */}

                <AddUserInfo01 handleAddNewUser = {this.handleAddNewUser}></AddUserInfo01>
                <br></br>

                <DisplayInfo01 listUsers = {this.state.listUsers}></DisplayInfo01>
            </div>
        );
    }
}

export default MyForm01;
