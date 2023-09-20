

const Formulario = () => {
    return (


        <form htmlFor="place" className="container-form">
            <h1 className="formulario-parrafo1">
                Find places to stay in the {''}
                <span className="colorcolombia">Colombia</span>
            </h1>
            <div className="location">
                <label className="container-form-location l">LOCATION</label>
                <input
                    id="place"
                    type="text"
                    placeholder="Enter place"
                    className="in"
                    
                   
                />
            </div>
            <div className="check">

                <div className="margintop">
                    <label className="container-form-location">CHECK IN</label>
                    <input
                        id="place"
                        type="date"
                        placeholder="Add Date"
                        
                    />
                </div>
                <div className="margintop">
                    <label className="container-form-location">CHECK OUT</label>
                    <input
                        id="place"
                        type="date"
                        placeholder="Add Date"
                        
                    />
                </div>
            </div>
            <div className="adultChil">

                <div>
                    <label htmlFor="place">ADULT</label>
                    <select id="place" className="container-form-input1">
                        <optgroup>

                            <option value="1">0</option>
                            <option value="2">1</option>
                            <option value="3">2</option>
                            <option value="4">3</option>
                            <option value="4">4</option>
                            <option value="4">5</option>
                        </optgroup>



                    </select>
                </div>
                <div>
                    <label htmlFor="Addchildren">CHILDREN</label>
                    <select id="place" className="container-form-input1">
                        <optgroup>

                            <option value="1">0</option>
                            <option value="2">1</option>
                            <option value="3">2</option>
                            <option value="4">3</option>
                            <option value="4">4</option>
                            <option value="4">5</option>
                        </optgroup>



                    </select>
                </div>
            </div>
            <button className="btn">
                Search
            </button>
        </form>


    );
};

export default Formulario;
