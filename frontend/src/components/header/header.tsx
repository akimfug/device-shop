'use client'

import { Context } from '@/app/page'
import styles from './header.module.scss'
import { useContext } from 'react';
import { Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

export const Header = observer(() => {
    const context = useContext(Context);

    const user = context ? context.user : null;
    console.log(user)


    const dropdown = user?.isAuth ? String(user._user) : 'Войти'
    const loggedIn = user?.isAuth
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Fullstack-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between px-4'>
            <Nav className={styles.nav}>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Корзина</Nav.Link>
              {loggedIn && <Nav.Link href="#admin">Админ-панель</Nav.Link>}
              
            </Nav>
            {/* Правое меню */}
            <Nav className="ms-auto">
              {loggedIn ? (
                  <NavDropdown title={dropdown} id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Профиль</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Выйти</NavDropdown.Item>
                  </NavDropdown>
                  ) : (
                    //onClick={() => user?.setIsAuth(true)}
                      <Nav.Link href="/registration">Авторизация</Nav.Link>
                      // <Nav.Link href="#registration">Зарегистрироваться</Nav.Link>
                  )
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );  
})