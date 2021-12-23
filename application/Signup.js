import React, { Component } from 'react';


class Signup extends Component {
    Signup(){
        console.warn("state", this.state)
        fetch('https://cloud-wallet-api.prod.affinity-project.org/api/v1/users/signup',{
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
                localStorage.setItem("Signup",JSON.stringify(resp.success.token))
            })
        })
    }
    render() {
        return(
            <div align ="center">
                <div>
                    <p><b>Signup Form</b></p>
                    <label htmlFor = "username"> UserName     </label>
                    <input type="text"onChange={(e)=>{this.setState({username:e.target.value})}}/>
                    <label htmlFor = "password"> Password </label>
                    <input type="text"onChange={(e)=>{this.setState({password:e.target.value})}}/><br></br>
                    <button onClick={()=>this.Signup()}>Submit</button><br></br>
                    <p>Had an account ? <a href="Login.js">Login</a></p>
                </div>
            </div>
        )
    }
}

export default Signup