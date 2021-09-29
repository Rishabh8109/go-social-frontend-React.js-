import React from 'react';
import '../styles/Story.css';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {MdEventAvailable} from 'react-icons/md';
import {AiOutlineGift} from 'react-icons/ai';


function Events() {
    return (
        <div className="card">
            <div className="cardHeader">
            <p>
            <strong>Events</strong>
            </p>
            <BiDotsHorizontalRounded />
          </div>
          <div className="eventBody">
             <div>
               <MdEventAvailable className="icon"/>
               <p>10 Events invites</p>
             </div>
              <div>
               <AiOutlineGift className="icon"/>
               <p>Prads's invites birthday</p>
             </div>
          </div>
        </div>
    )
}

export default Events;
