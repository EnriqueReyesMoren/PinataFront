import React, {Component, useState} from 'react';

import { signup } from "../services"
import {  withRouter } from "react-router-dom"
import { Form, Input, Button } from "antd"


const CountdownPina = ({ history }) => {

    const [error, setError] = useState(false)
    const [errorMesagge, setErrorMesagge] = useState("")
    
  
          const [form] = Form.useForm()
          
          async function signupProcess(values) {
            await signup(values).catch(err => {
              console.dir(err.response.data.message)
              notificationError(err.response.data.message)})
              if (error) console.log("Hay un error")
              else {history.push("/login")}
           
        
  
          }

          const notificationError = (message) =>{
            setError(true)
            setErrorMesagge(message)
          }
  
    return (
        <section className="countdown-one">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="countdown-one__content">
                            <h2 className="countdown-one__title">Empieza a colaborar</h2>
                            <p className="countdown-one__tag-line">Consigue trabajar con proyectos reales!</p>
                            <p className="countdown-one__text">Queremos que puedas crear propuestas de trabajo a cambio
                            de retribución monetaria, profesional o sustancial y conectes con creativos en busqueda 
                            de oportunidades.</p>
                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="become-teacher__form">
                            <div className="become-teacher__form-top">
                                <h2 className="become-teacher__form-title">
                                    Registrate para empezar
                                </h2>
                            </div>
                            <Form layout='vertical' name='basic' form={form} onFinish={signupProcess}>
                         <Form.Item
                             label='Email'
                             name='email'
                             rules={[{ required: true, message: "Please input your email!" }]}
                         >
                          <Input />
                          </Form.Item>

                         <Form.Item
                           label='Password'
                           name='password'
                           rules={[{ required: true, message: "Please input your password!" }]}
                         >
                           <Input.Password />
                         </Form.Item>

                         {error && <p>{errorMesagge}</p>}

                        <Form.Item>
                          <Button type='primary' htmlType='submit' className="thm-btn become-teacher__form-btn">
                            Submit
                          </Button>
                         </Form.Item>
                         </Form>
                         <br/>
                            <div className="result text-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default withRouter (CountdownPina);