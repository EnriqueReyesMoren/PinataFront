import React, { useState, useEffect, useContext } from "react"
import {
  Image,
  Row,
  Col,
  Skeleton,
  Typography
} from "antd"
import { getAsset } from "../services/assets"
import { MyContext } from "../context"
import { Link } from "react-router-dom"
const { Title, Text } = Typography



const Dummie = ({
  match: {
    params: { assetsId }
  }
}) => {
  const [asset, setAsset] = useState(null)
  const { user } = useContext(MyContext)

  useEffect(() => {
    async function fetchAsset() {
      const {
        data: { asset }
      } = await getAsset(assetsId)
      setAsset(asset)
    }
    fetchAsset()
  
  }, [assetsId])

  return asset ? (
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
      <Col span={24}>
        <Title level={3}>Menu:</Title>
      </Col>
    </Row>
  ) : (
    <div style={{ backgroundColor: "white", padding: "1rem" }}>
      <Skeleton active />
    </div>
  )
}

export default Dummie