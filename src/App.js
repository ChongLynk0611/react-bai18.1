import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal/Modal';


function App() {
  return (
    <div className="App">
        <Modal >
          <h2>Đây là đoạn truyền vào h2 chứ k chỉ là đoạn text</h2>
        </Modal>
    </div>
  );
}

export default App;
