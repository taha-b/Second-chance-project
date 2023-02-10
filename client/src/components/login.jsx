import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Button, Input,Row,Col } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';


const login = () => {
  // const [view,setView] = useState(false)
  const [adresseMail,setAdresseMail] = useState('')
  const [passeword,setPasseword] = useState('')
 

  // const myLoginClick = () =>{
  //   axios.get('http://127.0.0.1:3000/api/users')
  //   .then((result)=>result.data[0].forEach(element => {
  //     if(element.adresseMail === users && element.passeword === passeword){
  //       return{}
  //     }
  //     else if ( element.addresseMail === users && element.passeword !== passeword){
  //       document.getElementById('msg').style.cssText('display : block')
  //     }
      
  //     }))
  //   setView()
  //   }
    
 

  
  
  return (
    
    <Row justify="center" align="middle">
      
      <Col span={6} offset={9} >
    
        <h1 className="welcome">WELCOME Back !</h1>
       
        <Input 
        onChange={(event)=> adresseMail = event.target.value}
        prefix={<UserOutlined className="site-form-item-icon" />}
         placeholder="Adresse Mail" />
      
        <Input
          onChange={(event)=> checkPasseword = event.target.value}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      
        <Button type="primary" htmlType="submit" className="login-form-button">
Login        </Button>
       
      
    </Col>
    </Row>
    
  );
};

export default login
