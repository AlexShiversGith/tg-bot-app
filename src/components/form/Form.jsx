import React from "react";
import './Form.css';

const Form = () => {
    return (
        <div className="form">
            <h3>Enter your data</h3>
            <input className="input" type="text" placeholder={'Country'} />
            <input className="input" type="text" placeholder={'Street'} />
            <select className="select">
                <option value={'physical'}>Physical face</option>
                <option value={'legal'}>Legal face</option>
            </select>
        </div>
    )
}

export default Form;