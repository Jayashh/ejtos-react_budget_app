import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}>
            <img alt="increase" width="30px" height="30px" src="https://st3.depositphotos.com/1688079/14959/i/1600/depositphotos_149597008-stock-photo-plus-icon-glassy-soft-green.jpg"></img>
            </button>
        </td>
        <td><button onClick={event=> decreaseAllocation(props.name)}>
            <img alt="minus" width="30px" height="30px" src="https://as1.ftcdn.net/v2/jpg/01/45/20/26/1000_F_145202679_oT6Hqu8j7PxkTdxIeQ82UuXKs113uuyZ.jpg"></img>
            </button>
        </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
