import React from 'react';
import styled from 'styled-components'
//import './App.css';

const Card = styled.div`
    background: whitesmoke;
    background: linear-gradient(to right bottom, rgba(255,255, 255, 0.7),rgba(255,255, 255, 0.4));
    width: 24%;
    height: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    margin: 10px;
    padding: 2%;
    box-shadow: 5px 7px;
`;
 const Img = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 284px;   
    height: 407px;
    margin-top: -25px;
    border-radius: 15px;
    opacity: 1.00000005;
 `;

 const Paragraph = styled.p`
    display: flex;
    align-items: center;
    text-align: center;
    height: 10px;
    margin-top: 120px;
    font-family: 'Handlee', cursive;
    font-size: 17px;
    font-style: italic;
    font-weight: 600;
    font-family: 'Handlee', cursive;
 `;

 const Nickname = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10px;
    margin-top: 150px;
    font-family: 'Handlee', cursive;
    font-weight: 900;
 `;


function GiftCard({ img, message, name }) {
  return (
    <Card className='card-container'>
      <div className= 'card-front'>
        <Img src={ img } alt='umage'/>
      </div>
      <div className = 'card-back'>
        <Paragraph> { message }</Paragraph>
        <Nickname> { name }</Nickname>
      </div>
    </Card>
  );
}

export default GiftCard;
