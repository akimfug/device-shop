'use client'
import React from 'react'
import styles from './page.module.scss'
import { Container, Form, Button} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import clsx from 'clsx'

const Login = () => {
  return (
    <Container style={{height: '60vh'}}className={clsx(styles.auth, "d-flex justify-content-center align-items-center")}>
      <Card style={{ width: 600 }} className='p-5'>
        <h2 className='m-auto'>Вход</h2>
        <Form action="POST" className='auth-form d-flex flex-column'>
          <Form.Control className='auth-input mt-3' placeholder='Введите почту'></Form.Control>
          <Form.Control className='auth-input mt-3' placeholder='Введите пароль' name='password'></Form.Control>
          <div className="d-flex align-items-center justify-content-between mt-3">
            <p>Нет аккаунта? <a href="/registration">Регистрация</a></p>
            <Button className='m-b-0' variant={'outline-success'}>Войти</Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
}

export default Login