import React, { Component } from 'react';
import './DisplayInfo01.scss';
import logo from './../logo.svg';

// props se tu dong truyen tu cha xuong con
class DisplayInfo01 extends Component {

    // handleChangeName = (e) => {
    //     this.props.onChangeName(e.target.value); 
    // }

    // handleChangeAge = (e) => {
    //     this.props.onChangeAge(e.target.value); 
    // }

    state = {
        isShowListUser: true,
    }

    handleShowTitle = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        })
    }
    render() {
        // console.log('props: ', this.props);
        // console.log('props DisplayInfo01: ', this.props); 
        // const {age, name} = this.props;

         // const listUsers = this.props.listUsers;
         const {listUsers} = this.props;
         
        //  let nameClass = ''; 
        return (
            <div className='display__info-container'>
                <img src={logo} alt='img' ></img>
                <div>
                    <span onClick={() => {this.handleShowTitle()}}> {this.state.isShowListUser ? "Hide list users:" : "Show list users: "}  </span>
                </div>

                { this.state.isShowListUser && 
                <div>
                    {listUsers.map((item, index) => {
                        
                        // nameClass = item.age > 18 ? 'red' : 'green'; 
                        
                        return(
                            // <div key={item.id} className={nameClass} >{item.name} is {item.age} years old</div>
                            <div key={item.id} className={item.age > 18 ? 'green' : 'red'}>
                            {item.name} is {item.age} years old</div>
                        )
                    })}
                </div>}
            </div>
        );
    }
}

export default DisplayInfo01;
