import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Button,Input,Row,Col } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';





const signUp = () => {
  const [fullName,setFullName]= useState('')
  const [adresseMail,setAdresseMail] = useState('')
  const [passeword,setPasseword] = useState('')
  const [checkPasseword,setCheckPasseword] = useState('')
  return (
    
    <Row justify="center" align="middle">
      
      <Col span={6} offset={9} >
     
        <h1 className="welcome">WELCOME!</h1>
        <Input 
        onChange={(event)=> fullName = event.target.value}
        prefix={<UserOutlined className="site-form-item-icon" />} 
        placeholder="Full Name" />
        <Input
          onChange={(event)=> adresseMail = event.target.value}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="addresseMail"
          placeholder="Adresse Mail"
        />
     
        
        <Input
        onChange={(event)=> password = event.target.value}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
        <Input
        onChange={(event)=> checkPasseword = event.target.value}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="tap again your Password"
        />
     
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      
    </Col>
    </Row>
  
  );
};


export default signUp