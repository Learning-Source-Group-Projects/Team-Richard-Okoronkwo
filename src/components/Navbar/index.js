import React,  {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle}) => {
    const [ScrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
  return (
  <>
  <IconContext.Provider value={{ color: '#fff'}}>
    <Nav ScrollNav={ScrollNav}>
        <NavbarContainer>
            <NavLogo to="/">dolla</NavLogo>
            <MobileIcon onClick={toggle}>
               <FaBars /> 
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='about'>About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='Discover'>Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='services'>services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='signup'>Sign Up</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
  </>
  );
}

export default Navbar;