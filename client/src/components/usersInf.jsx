import React from 'react'

const usersInf = () => {
  return (
    <div>
      <div className="loginForm">
    <Row justify="center" align="middle">
      
      <Col span={6} offset={9} >
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <h1 className="welcome">WELCOME BACK !</h1>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Full Name"/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </Col>
    </Row>
    </div>

    </div>
  )
}

export default usersInf
