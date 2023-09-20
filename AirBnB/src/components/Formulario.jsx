import React from "react";

const Formulario = () => {
  return (
   <div className="formulario-1 encima">
    <p className="formulario-parrafo1">
        Find places to stay in the {''}
        <span className="colorcolombia">Colombia</span>
    </p>

    <form htmlfor="place" className="container-form">
        <div className="margintop">
            <label className="container-form-location">Location</label>
            <input
            id="place"
             type="text"
             placeholder="Enter place"
             className="container-form-input1"
             />
        </div>
        <div className="margintop">
            <label className="container-form-location">Location</label>
            <input
            id="place"
             type="text"
             placeholder="Enter place"
             className="container-form-input1"
             />
        </div>
        <div className="margintop">
            <label className="container-form-location">Location</label>
            <input
            id="place"
             type="text"
             placeholder="Enter place"
             className="container-form-input1"
             />
        </div>
        <div className="margintop">
            <label className="container-form-location">Location</label>
            <input
            id="place"
             type="text"
             placeholder="Enter place"
             className="container-form-input1"
             />
        </div>
        <div className="margintop">
            <label className="container-form-location">CheckIn</label>
            <input
            id="place"
             type="text"
             placeholder="Enter place"
             className="container-form-input1"
             />
        </div>
    </form>
      <img
          src="https://img.freepik.com/free-photo/real-estate-agent-handing-house-key-client_53876-20466.jpg?w=740&t=st=1695154884~exp=1695155484~hmac=4292efb4bd54e5de9cfbbf0ee91711ac6da7affc0430d5b9bb9d0aa4df81f80a"
          alt="imagpagina1"
        />
   </div>
  );
};

export default Formulario;
