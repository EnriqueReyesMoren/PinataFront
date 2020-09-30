import React , { useState, useEffect, useContext } from 'react';
import { getAsset } from "../services/assets"
import { MyContext } from "../context"
import { Link } from "react-router-dom"
import {
  Image,
  Row,
  Col,
  Typography } from "antd"
  const { Title, Text } = Typography

function CourseDetails  (prop) {

    const [asset, setAsset] = useState(null)
    const { user } = useContext(MyContext)

    console.log(prop.match.params.assetId)

    useEffect(() => {
        async function fetchAsset() {
          const {
            data: { asset }
          } = await getAsset(prop.match.params.assetId)
          setAsset(asset)
        }
        fetchAsset()
        
      }, [asset])

    return ( 
        <section className="course-details">
            <div className="container">
                <div className="row">
                {asset ? (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Image src={asset.photo} style={{ width: "100%" }} />
      </Col>
      <Col span={24}>
        <Title level={1}>{asset.name}</Title>
      </Col>
      <Col span={24}>
        <Text type='secondary'>{asset.description}</Text>
      </Col>

    </Row>
  ) : (
    <div style={{ backgroundColor: "white", padding: "1rem" }}>
      <p> No hay nada cargado</p>
    </div>
  )}
                    
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;
