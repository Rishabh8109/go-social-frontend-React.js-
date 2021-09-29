import React , {useState , useContext} from 'react';
import {FiSun} from 'react-icons/fi';
import {BiMoon} from 'react-icons/bi';
import {StateContext} from '../StateProvider';

function Toggle() {
   
    const {toggle , settoggle} = useContext(StateContext)
 
    const lightToggle = {
        width: "70px",
        height: "30px",
        padding : '.5rem 0',
        border: "1px solid lightgrey",
        borderRadius:" 50px",
        float : "right",
        position:  'relative',
        cursor : 'pointer',
        background: toggle ? 'rgb(248, 248, 248)' : '#141414',
        transition : 'all .5s linear',
    }

    const toggleButton = {
        width: "20px",
        height: "20px",
        border: toggle ? "2px solid rgb(255, 196, 0)" : "2px solid whitesmoke",
        background : toggle ? 'rgba(255, 196, 0, 0.479)' : 'grey',
        borderRadius : "50%",
        position : 'absolute',
        right : toggle ? "3px" : '42px',
        top : '3px',
        transition : 'all .2s ease-in-out'
    }
   
    const sunIcon = {
        position : 'absolute',
        left : '6px',
        top : '5px',
        fontSize :'1.1rem',
        color :'rgb(255, 196, 0)',
        cursor : 'pointer',
    }

    const moonIcon = {
        position : 'absolute',
        right : '3px',
        top : '4px',
        fontSize :'1.1rem',
        color :'#fff',
        display : toggle ? 'none' : 'block',
        cursor : 'pointer',
    }
    return (
        <div style={{...lightToggle}} className="toggle" onClick={() => settoggle(!toggle)}>
           <FiSun style={{...sunIcon}}/>
            <input type="checkbox" />     
            <div style={{...toggleButton}}></div>
           <BiMoon style={{...moonIcon}}/>
         </div>
    )
}

export default Toggle;
