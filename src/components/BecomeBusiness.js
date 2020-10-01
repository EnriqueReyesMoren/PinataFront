import React , { useContext , useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/21303-pineapple';
import { Link , withRouter} from "react-router-dom"
import { login } from "../services"
import { Form, Input, Button } from "antd"
import { MyContext } from "../context"

const BecomeBusiness = ({history}) => {

    const { setCtxUser } = useContext(MyContext)
    const [error, setError] = useState(false)
    const [errorMesagge, setErrorMesagge] = useState("")
  

        const [form] = Form.useForm()
        
        async function loginProcess(values) {
            const user  = await login(values).catch(err => {
            console.dir(err.response.data.message)
            notificationError(err.response.data.message)})
            if (error) console.log("Hay un error")
            else {history.push("/assets")}
            delete user.password
            delete user.hash
            delete user.salt
            setCtxUser(user)
         }

        

         const notificationError = (message) =>{
            setError(true)
            setErrorMesagge(message)
          }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

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
                        <Link to="#" class="btn btn-danger btn-block"><i class="fa fa-google"></i> Sign in with <b>Google</b></Link>
                        <Link to="#" class="btn btn-primary btn-block"><i class="fa fa-facebook"></i> Sign in with <b>Facebook</b></Link>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="become-teacher__form">
                            <div className="become-teacher__form-top">
                                <h2 className="become-teacher__form-title">
                                    Inicia sesión
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
};

export default withRouter(BecomeBusiness);