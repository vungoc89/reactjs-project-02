
import React, {useState} from 'react';
import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';

const ManageUser = () => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    return (

        <div classNameName='manage-user-container'>
            <div classNameName='title'>
                Manange user
            </div>
            <div classNameName='users-content'>
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
