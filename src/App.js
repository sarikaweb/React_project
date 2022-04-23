import './App.css';
//import Todolist, {useState} from './todolist';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './Home';
import { Row } from 'react-bootstrap';
import Sidebar from './common/sidebar';


function App() {
  return (
    // <div className="todo-app">
    //   <div className="todolist">
    //   <Todolist />
    //   </div>
    // </div>
    <>

     <Header/>
     <Row>
       <div className='col-md-4'>
         <Sidebar />
       </div>
       
       <div className='col-md-8'>
         <Home />
     </div>
     </Row>
     <Footer />

    </>
  );
}

export default App;
