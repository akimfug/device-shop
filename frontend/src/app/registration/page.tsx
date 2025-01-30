'use client'
import React from 'react'
import styles from './page.module.scss'
import { Container, Form, Button} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import clsx from 'clsx'
import { Header } from '@/components/header/header'
const Registration = () => {
  return (
    // <Header></Header>
    <Container style={{height: '60vh'}}className={clsx(styles.auth, "d-flex justify-content-center align-items-center")}>
      <Card style={{ width: 600 }} className='p-5'>
        <h2 className='m-auto'>Регистрация</h2>
        <Form action="POST" className='auth-form d-flex flex-column'>
          <Form.Control className='auth-input mt-3' placeholder='Введите почту'></Form.Control>
          <Form.Control className='auth-input mt-3' placeholder='Введите пароль' name='password'></Form.Control>
          <div className="d-flex align-items-center justify-content-between mt-3">
            <p>Есть Аккаунт? <a href="/login" className=''>Войти</a></p>
            <Button className='m-b-0' variant={'outline-success'}>Зарегистрироваться</Button>
          </div>
          
        </Form>
      </Card>
    </Container>

    // <div className='auth'>
    //     <form action="POST" className='auth-form'>
    //         <label className='auth-label' htmlFor="email">Авторизация</label>
    //         <input className='auth-input' type="email" placeholder='Введите почту' name='email' id='email'/>
    //         <input className='auth-input' type="password" placeholder='
    //             <a className='auth-register-butto'>Регистрация</a>
    //             <button className='auth-button'>Войти</button>
    //         </div>
            
    //     </form>
    // </div>

  )
}

export default Registration