
import React, {useState, useEffect} from 'react';
import ModalCreateUser from './ModalCreateUser';
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';
import { getAllUsers } from '../../services/apiService';
import ModalUpdateUser from './ModalUpdateUser';
import ModalDeleteUser from './ModalDeleteUser';
const ManageUser = () => {

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [dataDelete, setDataDelete] = useState({});

    const [listUsers, setListUsers] = useState([]); 
    useEffect(() => {
        // console.log('run useEffect'); 
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers(); 
        console.log(res); 
        if(res.EC === 0){
            setListUsers(res.DT);
        }
    }

    const handleClickBtnUpdate = (user) =>{
        setShowModalUpdateUser(true);
        setDataUpdate(user);
        console.log('update user: ', user);
    }
    // ModalUpdateUser: Xu ly khi click vao mot item 2 lan(lan 1 thi data hien ra, lan 2 thi data lai ko hien ra)
    const resetUpdateData = () => {
        setDataUpdate({}); 
    }

    const handleClickBtnDelete = (user) => {
        // console.log('data delete: ', user);
        setShowModalDeleteUser(true);
        setDataDelete(user);
    }
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
                    {/* Table users */}
                    <TableUser 
                    listUsers={listUsers} 
                    handleClickBtnUpdate={handleClickBtnUpdate}
                    handleClickBtnDelete={handleClickBtnDelete}
                    />
                </div>
                    <ModalCreateUser 
                        show ={showModalCreateUser} 
                        setShow={setShowModalCreateUser} 
                        fetchListUsers={fetchListUsers} />

                    <ModalUpdateUser
                        show ={showModalUpdateUser} 
                        setShow={setShowModalUpdateUser} 
                        dataUpdate={dataUpdate}
                        fetchListUsers={fetchListUsers}
                        resetUpdateData={resetUpdateData}
                    />
                    <ModalDeleteUser
                        show={showModalDeleteUser}
                        setShow={setShowModalDeleteUser}
                        dataDelete={dataDelete}
                        fetchListUsers={fetchListUsers}
                    />
            </div>
        </div>
    );
}

export default ManageUser;
