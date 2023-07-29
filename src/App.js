import './App.css';
import { Layout, Menu } from 'antd';
import { Col, Row, Card, Image } from 'antd';
const { Meta } = Card;
const { Header, Content, Footer } = Layout;

function App() {

  const rowStyle = {
    backgroundColor: 'rgb(72 98 151)',
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Products</Menu.Item>
          <Menu.Item key="3">About Us</Menu.Item>
          <Menu.Item key="4">Contact Us</Menu.Item>
          <Menu.Item key="5" style={{ marginLeft: 'auto' }}>Support Email: nelkuba@nelkuba.com</Menu.Item>
        </Menu>

      </Header>

      <Row style={rowStyle}>
        <Col span={24}>
          <Content style={{ padding: '70px 50px' }}>
            <div className="site-layout-content">
              <h1>WE CAN HELP YOU GROW!</h1>
              <h1>INCREASE BUSINESS.</h1>
              <h1>DECREASE WORRIES.
              </h1>
            </div>
          </Content></Col>
      </Row>
      <Row>
        <Col xs={{ span: 8, offset: 5 }}>
          <Card
            hoverable
            style={{ width: 240, marginTop: "-35px" }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww&w=1000&q=80" />}
          >
            <Meta title="Nelson" description="Position: Co-Founder" />
            <p>Mr. Nelson has all expertise to get a job done perfectly. He has advanced skills in keeping others happy and playful.</p>
          </Card>
        </Col>
        <Col xs={{ span: 8, offset: 2 }} >
          <Card
            hoverable
            style={{ width: 240, marginTop: "-35px" }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww&w=1000&q=80" />}
          >
            <Meta title="Alba Nieto" description="Position: Co-Founder and CEO" />
            <p>A young passionate entrepreneur with variety of experience in different domains. </p>
          </Card>
        </Col>
      </Row >
      <Row style={rowStyle}>
        <Col span={24}>
          <Content style={{ padding: '100px 50px' }}>
            <div className="site-layout-content">
              <h1>OUR MISSION </h1>
              <h1> TO IMPROVE YOUR BUSINESS' PERFORMANCE AND PROVIDE A SUCCESSFUL BUSINESS STRATEGY.</h1>
              <p>We strive to help business owners develop a solid foundation and business strategy so they can be successful. We will work to improve sales, productivity, organization, company culture, and employee relations.</p>
            </div>
          </Content></Col>
      </Row>

      <Row style={{ backgroundColor: 'grey' }}>

        <Col span={24}>
          <Content style={{ padding: '100px 50px' }}>
            <div className="site-layout-content">
              <Image
                width={200}
                src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?`}
                placeholder={
                  <Image
                    preview={false}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                    width={200}
                  />
                }
              />
              <h2> “Our service and customer satisfaction levels are at an all-time high!”</h2>
              <h3>Alba CEO</h3>
            </div>
          </Content></Col>
      </Row>
      <Footer style={{ textAlign: 'center' }}>Copyright ©2023 Nelkuba. All right reserved</Footer>
    </Layout >
  );
}

export default App;
