import React,{ Fragment }from 'react';
import mealsImage from '../../assets/bliuda-assorti-spetsii.jpg';
import clas from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) =>
{
 return(
     <Fragment>
         <header className={clas.header}>
            <h1>DeliciousMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={clas['main-image']}>
           <img src={mealsImage} alt='hii'/>
        </div>
     </Fragment>
         
 );
};

export default Header;