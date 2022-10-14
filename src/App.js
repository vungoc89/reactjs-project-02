// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import {Outlet} from "react-router-dom";
// import MyComponent from './components/MyComponent';
// import MyForm01 from './components/MyForm01';
// function App() {
//   return (
    // <div>
      {/* <MyComponent></MyComponent> */}
      {/* <MyForm01></MyForm01> */}
    {/* </div>
  );
} */}

const App = () => {
  return(
    <div className='app-container'>
      {/* Hello world */}
      {/* <button className='btn btn-success' >Test</button> */}
      <div className='header-container'>
        <Header>
        </Header>
      </div>

      <div className='main-container'>
        <div className='sidenav-container'>

        </div>
        <div className='app-content'>
          {/* Outlet la tin hieu chi dinh cho cac link user va admin duoc hien thi(here) khi cac link do click*/}
          <Outlet></Outlet>
          {/* <Outlet/> */}
        </div>
      </div>
      
    
        {/* <div>
          test link
          <div>
            <button> <Link to="/users">go to user page</Link> |{" "}</button>
            <button><Link to="/admin">go to admin page</Link></button>
          </div>
        </div> */}
    </div>
  );
}
export default App;
