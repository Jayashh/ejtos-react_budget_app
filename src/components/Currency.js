// Currency.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHANGE_CURRENCY',
            payload: event.target.value,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span> Currency: </span>
            <select
                className="custom-select"
                id="inputGroupSelect03"
                value={currency}
                onChange={handleCurrencyChange}
                style={{
                    backgroundColor: 'green',
                    color: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    padding: '5px 10px',
                    fontSize: '16px',
                    width: '200px',
                    cursor: 'pointer',
                }}
            >
                <option value="$"> $ Dollar </option>
                <option value="£"> £ Pound </option>
                <option value="€"> € Euro </option>
                <option value="₹"> ₹ Ruppee </option>
            </select>
        </div>
    );
};

export default Currency;
