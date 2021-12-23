import React, { Component } from 'react';


class Login extends Component {
    Login(){
        console.warn("state", this.state)
        fetch('https://cloud-wallet-api.prod.affinity-project.org/api/v1/users/login',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Api-Key" : "bd73b4f583d65fea16b2c3b013071e1cc03f2386a9d52796b101a20fdbe14e7c"
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp.success.token);
                localStorage.setItem("Login",JSON.stringify(resp.success.token))
            })
        })
    }
    render() {
        return(
            <div align ="center">
                <div>
                    <p><b>Login Form</b></p>
                    <label htmlFor = "username"> UserName     </label>
                    <input type="text"onChange={(e)=>{this.setState({username:e.target.value})}}/>
                    <label htmlFor = "password"> Password </label>
                    <input type="text"onChange={(e)=>{this.setState({password:e.target.value})}}/><br></br>
                    <button onClick={()=>this.Login()}>Submit</button><br></br>
                    <p>create an account ? <a href="Signup.js">Signup </a></p>
                </div>
            </div>
        )
    }
}

export default Login