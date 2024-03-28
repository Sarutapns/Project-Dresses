import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const Modal = ({ onClose, dress, handleRentClick,handleClick }) => (
  <dialog id="my_modal_1" className="modal" open>
    <div className="modal-box">
      <div className="modal-action">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
        </form>

        <h1 style={{ marginLeft: '', marginTop: '5px', padding: '2px', width: '50px', textAlign: 'center' }}>{dress && dress.dressesName}</h1>
        <img src={dress && dress.image} alt={dress && dress.dressesName} style={{ width: '100px', marginTop: '5px', marginRight: '' }} />
        <p className="color" style={{ marginRight: '20px', marginTop: '60px' }}>Color: {dress && dress.color}</p>
        <p className="price" style={{ marginRight: '60px', marginTop: '60px' }}>Price: {dress && dress.price}</p>

        <button onClick={handleRentClick} style={{ marginLeft: '10px', marginTop: '120px',  backgroundColor: 'green', color: 'white', border: 'none',width:'90px',height:'40px' }}>Rent</button>
        <button onClick={handleClick} style={{ marginLeft: '10px', marginTop: '120px',  backgroundColor: 'red', color: 'white', border: 'none',width:'90px',height:'40px' }}>address</button>

      </div>
    </div>
  </dialog>
);

export default Modal;
