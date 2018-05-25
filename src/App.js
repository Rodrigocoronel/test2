import React, { Component } from 'react';

// components
import Map from './components/maps';

import { Layout, Menu, Breadcrumb, Row, Col, Card, Badge, List, Avatar } from 'antd';

import './App.css'


const { Header, Content, Footer } = Layout;

const comments = [
  'Realizo un comentario',
  'Dio Me gusta a una publicación',
  'Dio Me encanta a una publicación',
  'Dio Me asombra a una publicación',
  'Dio Me enoja a una publicación',
  'Dio Me entristece a una publicación',
  'Dio Me divierte a una publicación',
  'Compartio una publicación',
];

class App extends Component {

  constructor(props) {

    super(props)

    this.state = {
      data: [],
      megusta: 0,
      meencanta: 0,
      measombra: 0,
      meenoja: 0,
      meentristece: 0,
      medivierte: 0
    }

  }


  componentDidMount() {

    this.akaka();

  }


  akaka() {

    let self = this;

    fetch('http://faker.hook.io/?property=name.findName&locale=es')
    .then( result => {
      return result.json();
    })
    .then( data => {


      let index = (Math.floor((Math.random() * 8) + 1)) - 1;

      if(index == 1) {

        let valor = self.state.megusta;

        console.log(valor++);

        self.setState({megusta: valor});

      }

      if(index == 6) {

        let valor = self.state.medivierte;

        console.log(valor++);

        self.setState({medivierte: valor});

      }

      if(index == 2) {

        let valor = self.state.meencanta;

        console.log(valor++);

        self.setState({meencanta: valor});

      }

      if(index == 4) {

        let valor = self.state.meenoja;

        console.log(valor++);

        self.setState({meenoja: valor});

      }

      if(index == 5) {

        let valor = self.state.meentristece;

        console.log(valor++);

        self.setState({meentristece: valor});

      }

       if(index == 3) {

        let valor = self.state.measombra;

        console.log(valor++);

        self.setState({measombra: valor});

      }


      let description = comments[index];

      self.setState({
        data: [...self.state.data, {title: data, description: description}]
      });

      setTimeout(() => {

        self.akaka();

      }, 4000);

    });


  }

  render() {
    return(
      <Layout>
        <Header style={{ position: 'fixed', width: '100%', zIndex: 99 }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">App</Menu.Item>
            <Menu.Item key="2">Notifications</Menu.Item>
            <Menu.Item key="3">Configs</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>App</Breadcrumb.Item>
            <Breadcrumb.Item>Facebook</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>

            <Row gutter={16}>
              <Col span={6}>
                <Card>
                  
                  <div style={{ overflowY: 'scroll', 'maxHeight': 500}}>
                    <List
                      itemLayout="horizontal"
                      dataSource={this.state.data}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.description}
                          />
                        </List.Item>
                      )}
                    />
                  </div>

                </Card>
              </Col>
              <Col span={18}>
                <Card>
                  <Map />
                </Card>
              </Col>
            </Row>
            <br/>
            <Row gutter={16}>
              <Col span={4}>
                <Card>
                  <Badge count={this.state.megusta}>
                    <img className="img" src="https://i.imgur.com/wVAJS8Tr.png" />
                  </Badge>
                </Card>
              </Col>
              <Col span={4}>
                <Card>
                  <Badge count={this.state.meencanta}>
                    <img className="img" src="https://i.imgur.com/y7qZQS3r.png" />
                  </Badge>
                </Card>
              </Col>
              <Col span={4}>
                <Card>
                  <Badge count={this.state.medivierte}>
                    <img className="img" src="https://i.imgur.com/eq69HEzr.png" />
                  </Badge>
                </Card>
              </Col>
              <Col span={4}>
                <Card>
                  <Badge count={this.state.measombra}>
                    <img className="img" src="https://i.imgur.com/XQSbgpwr.png" />
                  </Badge>
                </Card>
              </Col>
              <Col span={4}>
                <Card>
                  <Badge count={this.state.meentristece}>
                    <img className="img" src="https://i.imgur.com/JlQiyAur.png" />
                  </Badge>
                </Card>
              </Col>
              <Col span={4}>
                <Card>
                  <Badge count={this.state.meenoja}>
                    <img className="img" src="https://i.imgur.com/P4Xm6Dsr.png" />
                  </Badge>
                </Card>
              </Col>
            </Row>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2018 Created by WeNatives
        </Footer>
      </Layout>
    )
  }

}

export default App;
