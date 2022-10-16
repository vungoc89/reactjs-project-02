
import React from 'react';
import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';

const ManageUser = () => {
    return (

        <div classNameName='manage-user-container'>
            <div classNameName='title'>
                Manange user
            </div>
            <div classNameName='users-content'>
                <div>
                    <button>Add new users</button>
                </div>
                <div>
                    Table users
                </div>
                    <ModalCreateUser/>
            </div>
        </div>
    );
}

export default ManageUser;
