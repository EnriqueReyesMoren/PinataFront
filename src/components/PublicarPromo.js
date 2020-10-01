import React, {useState} from 'react';
import { Form, Input, InputNumber, Button, Upload, Row, Col } from 'antd';
import { Link, withRouter } from "react-router-dom"
import axios from "axios"
import { createPromo } from "../services/promos"



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

  
 

const PublicarPromo = ({history}) => {

     
    const [form] = Form.useForm()
    const [imageUrl, setImageUrl] = useState(null)

    async function SendPromo(values) {
      await createPromo({ ...values, photo: imageUrl })
      history.push("/promociones-activas")
    }
    async function uploadPhoto({ target: { files } }) {
      const data = new FormData()
      data.append("file", files[0])
      data.append("upload_preset", "Pinata-Stock")
  
      const {
        data: { secure_url }
      } = await axios.post(
        "https://api.cloudinary.com/v1_1/hito-negro/image/upload",
        data
      )
      setImageUrl(secure_url)
    }

    return (
        <div>
        

            <section className="contact-one">
                <div className="container">
                    <h2 className="contact-one__title text-center">Publica tu <br />
                        propuesta</h2>

      <Form layout='vertical' form={form} onFinish={SendPromo}>
      <Form.Item name='name' label='Nombra tu propuesta'>
        <Input />
      </Form.Item>
      <Form.Item name='description' label='Describe tu promocion'>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name='price' label='Asigna un precio justo'>
        <Input />
      </Form.Item>
      
      <input type='file' onChange={uploadPhoto} />
      <Button type='primary' htmlType='submit' disabled={!imageUrl}>
        Publicar Contenido
      </Button>
    </Form>
                   <div className="result text-center"></div>
                </div>
            </section>
        </div>
    );
};

export default withRouter( PublicarPromo);
