import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal/Modal';


function App() {
  return (
    <div className="App">
        <Modal >
          Đây là phần sử dụng props.children
        </Modal>
    </div>
  );
}

export default App;
