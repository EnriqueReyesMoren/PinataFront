import React, {useState, useContext, useEffect} from 'react';
import { Form, Input, InputNumber, Button, Upload, Row, Col } from 'antd';
import { Link, withRouter } from "react-router-dom"
import { updateUserCreative, login } from "../services"
import { MyContext } from "../context"
import Lottie from 'react-lottie';
import animationData from '../lotties/28115-plant-with-moving-leafs';


import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const normFile = (e) => {
    console.log('Upload event:', e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

const BecomeCreative = ({history}) => {

    const { user } = useContext(MyContext)

    const [form] = Form.useForm()
    const [imageUrl, setImageUrl] = useState(null)
    const [loginForm, setloginForm] = useState(true)
    const { setCtxUser } = useContext(MyContext)
    const [error, setError] = useState(false)
    const [errorMesagge, setErrorMesagge] = useState("")
    
    async function loginProcess(values) {
      const user  = await login(values).catch(err => {
      console.dir(err.response.data.message)
      notificationError(err.response.data.message)})
      if (error) console.log("Hay un error")
      else {setloginForm(false)}
      delete user.password
      delete user.hash
      delete user.salt
      setCtxUser(user)
   }
   console.log(user)
   const notificationError = (message) =>{
    setError(true)
    setErrorMesagge(message)
  }

    async function updateProfile(values) {
      if(user){
        console.log(user)
        const {role, _id}=user
        const parametro=_id
        console.log(_id)
        
      await updateUserCreative(parametro,{ ...values })
      history.push("/")
    }
    }

    function changeLogin(){
      if (loginForm) setloginForm(false)
      else setloginForm(true)
    }
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    
    
   
    return (  user ? (
        <>
        <section className="become-teacher">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <div className="become-teacher__content">
                    <h2 className="become-teacher__title">Publica contenido a cambio de oportunidades laborales </h2>
                            <p className="become-teacher__text">Conecta con gente creativa y lanza propuestas de colaboración a cambio 
                            de dinero, reconocimiento o articulos en negocios reales.</p>
                            <h2 className="become-teacher__subtitle">Aplica a retos de negocios</h2>
                            <p className="become-teacher__text">Encuentra promociones lanzadas por negocios reale, participa en la 
                            contienda colocando tu portafolio y gana contratos reales.</p>
                
                        </div>
                    
                        </div>
                    <div className="col-lg-6">
                      
                    {user?.role==="user" && (
                        <div className="become-teacher__form">
                            <div className="become-teacher__form-top">
                              
                                <h2 className="become-teacher__form-title">
                                    Conviertete en Creador de contenido
                                </h2>
                                
                            </div>
                            <Form layout='vertical' form={form} onFinish={updateProfile}>
                               <Form.Item name='name' label='Nombre profesional'>
                                 <Input />
                               </Form.Item>
                               <Form.Item name='description' label='Describe tu negocio'>
                                 <Input.TextArea />
                               </Form.Item>
                               
                               <Form.Item name='portfolio' label='Comparte tu portafolio o website'>
                                 <Input />
                               </Form.Item>
                               <Button type='primary' htmlType='submit'>
                                 Conviertete en creador de contenido
                               </Button>
                             </Form>
                            <div className="result text-center"></div>
                        </div>
                         )}

                        {user?.role==="creator" && (
                        <div className="become-teacher__form">
                            <div className="become-teacher__form-top">
                              
                                <h2 className="become-teacher__form-title">
                                    { user.name} tu ya eres creador
                                </h2>
                                
                            </div>
                            <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
                            <div className="result text-center"></div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
        </>
        ):

        
        
        <section className="become-teacher">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <div className="become-teacher__content">
                            <h2 className="become-teacher__title">Publica contenido a cambio de oportunidades laborales </h2>
                            <p className="become-teacher__text">Conecta con gente creativa y lanza propuestas de colaboración a cambio 
                            de dinero, reconocimiento o articulos en negocios reales.</p>
                            <h2 className="become-teacher__subtitle">Aplica a generar contenido totalmente personalizado</h2>
                            <p className="become-teacher__text">Puedes ofertar con empresas y crear publcidad y contenido a cambio de contratos monetarios,
                            consumo temporal en tu negocio o reconocimiento en tus redes con nuestros partners.</p>
                
                        </div>
                    
                        </div>
                    <div className="col-lg-6">
                        <div className="become-teacher__form">
                            <div className="become-teacher__form-top">
                                <h2 className="become-teacher__form-title">
                                    Inicia primero 
                                </h2>
                            </div>
                            <Form layout='vertical' name='basic' form={form} onFinish={loginProcess}>
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
          <Button type='primary' htmlType='submit' className="thm-btn become-teacher__form-btn" onClick={changeLogin}>
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
};

export default withRouter (BecomeCreative);
