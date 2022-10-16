import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';
// backdrop: use for only click inside area of modal so modal can close
// Modal must add className because default display on website so modal will putted out of index root
import {FcPlus} from "react-icons/fc";

import axios from 'axios';

const ModalCreateUser = (props) => {


    // const [show, setShow] = useState(false);
    const {show, setShow} = props;

    const handleClose = () => {
      setShow(false);
      setEmail("");
      setPassword("");
      setUsername("USER");
      setRole("");
      setImage("");
      setPreviewImage("");
    }
    // const handleShow = () => setShow(true);
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole]  = useState("USER"); 
    const [image, setImage] = useState("");

    const [previewImage, setPreviewImage] = useState(""); 
    const handleUploadImage = (event) => {
        if(event.target && event.target.files && event.target.files[0]){
            setPreviewImage(URL.createObjectURL(event.target.files[0])); 
            // console.log('upload file: ', event.target.files[0]); 
            setImage(event.target.value);

        }else{
            setPreviewImage("");
        }
    }

    const handleSubmitCreateUser = async () => {
      alert('saved'); 
      // let data = {
      //   email:  email,
      //   password: password,
      //   username: username,
      //   role: role,
      //   userImage: image, 
      // }
      // console.log(data); 
      const data = new FormData();
      data.append('email', email); 
      data.append('password', password); 
      data.append('username', username); 
      data.append('role', role); 
      data.append('userImage', image); 

      let res = await axios.post('http://localhost:8081/api/v1/participant', data);
      console.log('>>> check res: ', res); 
    }
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
  
        <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className='modal-add-user'>
          <Modal.Header closeButton>
            <Modal.Title>Add new user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="row g-3">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label" value={email}
                    onChange={(event) => setEmail(event.target.value)}>Email</label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label" value={password}
                    onChange={(event) => setPassword(event.target.value)}>Password</label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label" value={username}
                    onChange={(event) => setUsername(event.target.value)}>Username</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">Role</label>
                    <select id="inputState" className="form-select" 
                    onChange={(event) => setRole(event.target.value)}
                    value={role}>
                    <option  value="USER" >USER</option>
                    <option value="ADMIN">ADMIN</option>
                    </select>
                </div>

                <div classNameName='col-md-12' >
                    <label className='form-label label-upload' htmlFor='labelUpload'>
                        <FcPlus/> Upload file Image
                    </label>
                    <input type="file" id='labelUpload' hidden
                    onChange={(event) => handleUploadImage(event)}></input>
                </div>
               
               <div className='col-md-12 img-preview'>
                    {
                        previewImage ? <img src={previewImage}></img>
                        :
                       <span>Preview image</span> 

                    }
                    
               </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>handleSubmitCreateUser()}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ModalCreateUser;