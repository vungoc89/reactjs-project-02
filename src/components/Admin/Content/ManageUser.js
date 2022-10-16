
import React, {useState} from 'react';
import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';

const ManageUser = () => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    return (

        <div className='manage-user-container'>
            <div className='title'>
                Manange user
            </div>
            <div className='users-content'>
                <div className='btn-add-new'>
                    <button className='btn btn-primary' onClick={()=> setShowModalCreateUser(true)}>
                        <FcPlus/> Add new users
                    </button>
                </div>
                <div className='table-users-container'>
                    Table users
                </div>
                    <ModalCreateUser show ={showModalCreateUser} setShow={setShowModalCreateUser} />
            </div>
        </div>
    );
}

export default ManageUser;
