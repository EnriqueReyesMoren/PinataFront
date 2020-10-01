import React, { useContext , useState }from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/29914-flys-and-a-lemon';
import { Link, withRouter } from "react-router-dom"
import { signup } from "../services"
import { Form, Input, Button } from "antd"
import { MyContext } from "../context"



const BecomeBusiness = ({ history }) => {

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

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
      };

      const notificationError = (message) =>{
        setError(true)
        setErrorMesagge(message)
      }
      

    return (
        <section className="become-teacher">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="become-teacher__content">
                        <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
                        <a href="/auth/google" class="btn btn-danger btn-block"><i class="fa fa-google"></i> Registrate con <b>Google</b></a>
                        <a href="/auth/facebook" class="btn btn-primary btn-block"><i class="fa fa-facebook"></i> Registrate con <b>Facebook</b></a>
                        <br/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="become-teacher__form">
                            <div className="become-teacher__form-top">
                                <h2 className="become-teacher__form-title">
                                    Registrate hoy
                                </h2>
                            </div>
                            {/* <form action="#"
                                  className="become-teacher__form-content contact-form-validated"
                                  noValidate="novalidate">
                                <input type="text" placeholder="Your Name" name="name" />
                                <input type="text" placeholder="Email Address" name="email" />
                                <input type="text" placeholder="Phone Number" name="phone" />
                                <input type="text" placeholder="Comment" name="message" />
                                <button type="submit" className="thm-btn become-teacher__form-btn">Iniciar
                                </button>
                            </form> */}
                             <div>
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
    </div>
                            <div className="result text-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withRouter( BecomeBusiness);
