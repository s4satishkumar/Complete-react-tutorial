import logo from '../../logo.svg';
import './Header.css';

const Header =() =>{
    return (
        <div className="header"> 
        <img src={logo} className="logo" alt="logo" />
        <h1> React dev</h1>
         <p> Functional compont created </p>
        </div>
    )
}


export default Header;