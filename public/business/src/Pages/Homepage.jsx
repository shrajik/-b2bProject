import React, { useState } from 'react'
import Menu from "./cardApi.js";
import MenuCard from "./CardDescription.js";
import styled from"styled-components";
import { Link } from 'react-router-dom';
const Restaurant = () => {
    const[menuData, setManuData] = useState(Menu);  
    const filterItem = (category) =>{
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setManuData(updatedList);
    };

    return (
        <>
        <Formcontainer>    
        <nav className='navbar'>
            <div className='btn-group'>
                <button className='btn-group__item' onClick={() => filterItem("Textile")}>Textile</button>
                <button className='btn-group__item' onClick={() => filterItem("Food")}>Food</button>
                <button className='btn-group__item' onClick={() => filterItem("Machine")}>Machines</button>
                <button className='btn-group__item' onClick={() => filterItem("Healthcare")}>Healthcare</button>
                <button className='btn-group__item' onClick={() => setManuData(Menu)}>All</button>

                <button className='register'>
                   <span>
                       <Link to="/register" className='R'>Register</Link>
                   </span>
                </button>

                <button className='login'>
                   <span>
                       <Link to="/login" className='L'>login</Link>
                   </span>
                </button>


                

                </div>

        </nav>




        <MenuCard menuData={menuData}/>
        </Formcontainer>
        </>
    );
};

export default Restaurant;

const Formcontainer = styled.div`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
  }
  html {
    background: whitesmoke;
    background-image: url(https://s3.postimg.org/s1n3ji1ur/paper_fibers_2_X.png);
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  .subtle {
    font-size: large;
    font-weight: 500;
    color: rgb(70, 69, 69);
  }

  /* ---------- HOMEPAGE BAACKGOUND BIG IMAGE  styles ------------------ */
  .container{
    background-color: white;
    position:relative;
    text-align: center;
    color: white;
     font-size: 5px;   
  }
  .background-image{
    background-image: url('8294.jpg');
    background-size:cover;
    object-fit:fill;
    background-repeat: no-repeat;
    height: 90vh;
  }
  @media(max-width: 499px){
    .background-image{
      width: 100%;
    }
  }
  .bottom-left{
    position: absolute;
    bottom: 50%;
    left: 4px;
    font-size: 2.6rem;
    font-family: "Cormorant Garamond", serif;
    font-weight: 700;
    line-height: 50px;
    margin: 10px 0;
    text-transform: capitalize;
    color: #4285F4;
  }


  /* ----------NAVBAR (AFTER THE HOMEPAGE BACKGROUND IMAGE)  Button styles ------------------ */
  .navbar {
    background-color:  #00000076;
    padding-top: 10px;
    text-align: left;
  }
  
  .navbar h1 {
    padding-bottom: 20px;
    text-transform: capitalize;
  }
  .register {
    text-align: right;
    padding-right: 2px;
    padding-left: 2px;
    font-size: 2rem;
    margin: 0px 50px 0px;
    margin-top: 0px;
    border: none;
    cursor: pointer;
    border-radius: 0.4rem;
    text-transform:  capitalize;
    
  }
  .R{
    color: black;
  }


  .login {
    text-align: right;
    padding-right: 2px;
    padding-left: 1px;
    font-size: 2rem;
    margin: 50px 0px;
    margin-top: 0px;
    border: none;
    cursor: pointer;
    border-radius: 0.4rem;
    text-transform:  capitalize;
    
  }
  .L{
    color: black;
  }


  .btn-group {
    border-radius: 1rem;
    text-transform: capitalize;
  }
  .btn-group__item {
    border: none;
    min-width: 10rem; 
    padding: 1.5rem 3rem;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    margin: 0;
    font-size: 17px;
    box-shadow: inset 0px 0px 0px -15px #4285F4;
    transition: all 300ms ease-out;
    text-transform: capitalize;
  }
  @media(max-width: 499px){
    .btn-group__item{
      margin-top: 5px;
    }
  }
  .btn-group__item:last-child {
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  .btn-group__item:first-child {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  .btn-group__item:hover,
  .btn-group__item:focus {
    color: #4285F4;
    box-shadow: inset 0px -20px 0px -15px #4285F4;
  }
  .btn-group__item:focus {
    outline: none;
  }
  .btn-group__item:after {
    content: "✔️";
    margin-left: 0.5rem;
    display: inline-block;
    color: #4285F4;
    position: absolute;
    transform: translatey(10px);
    opacity: 0;
    transition: all 200ms ease-out;
  }
  .btn-group__item--active:after {
    opacity: 1;
    transform: translatey(-2px);
  }


  /* ---------- CARD CONTAINER AND CARD styles ------------------ */ 
  .main-card--container {
    padding: 0 10px 10px 10px;
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color:  #00000076;
  }
  .card-container {
    margin: 25px 25px 20px 25px;
    position: relative;
    grid-template-columns: 60px;
    width: 20%;
    align-items:center;
    box-sizing: border-box;
    text-align: center;
    min-height: 40px;
  }
  .card-container img {
    border-top-right-radius:20px ;
    border-top-left-radius:20px ;
    max-width: 100%;
    height: 250px;
    margin: 0 auto;
  }
  .card {
    border-radius: 20px;
    background-color:#fff;
    padding:0 1px 0 1px;
    display: flex;
    cursor: pointer;
    flex-wrap: wrap;
    position: relative;
    box-shadow: 0 14px 28px rgba(42, 79, 150, 0.25), 0 10px 10px rgba(42, 79, 150, 0.25);
    z-index: 1;
    transition: 0.4s;
  }
  .card-body {
    display: inline-block;
    padding: 5px 5px 50 5px;
  }
  .card:hover{
    transform: scale(1.1); 
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
     opacity: 90%; 
  }
  .card-author {
    padding: 3px 15px 3px 15px;
    display: block;
    font-size: 12px;
    letter-spacing: 0.5px;
    margin: 2px;
    text-transform: uppercase;
    text-align: left;
  }
  .card-title {
    padding: 4px;
    font-size: 26px;
    text-align: center;
    color: #222f3e;
    margin: 0;
    font-weight: 600;
    line-height: 30px;
    text-transform: capitalize;
  }
  .card-description {
    padding: 0 5px 0 5px;
    color: #3d3e3f;
    font-weight: 100;
    font-size: 13px;
    line-height: 20px;
    margin: 2px 0;
    text-align: center;
  }
  .card-button{
    text-align: center;
    font-size: 20px;
    color: #fff;
    width: 100%;
    background-color:#4285F4 ;
    padding: 10px;
    border: 0;
    outline: none;
    cursor: pointer;
    margin-top: 5px;
    border-bottom-right-radius:20px ;
    border-bottom-left-radius:20px ;
  }
  .card-media {
    max-width: 100%;
    height: auto;
  }
  @media(max-width:499px){
    .card-container{
    width: 100%;
    }
  }
  @media(max-width: 499px){
    .card-media{
      width: 100%;
      height: 100%;
    }
  }
 
  
  

`