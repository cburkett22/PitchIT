import React from "react";
import axios from "axios";
import "./ContactForm.css";

export default class Form extends React.Component {
    state = {
        firstName: "",
        lastName:"",
        email:"",
        textMessage:"",
        sent:false
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        let data = {
            name:this.state.firstName,
            lastname:this.state.lastName,
            email:this.state.email,
            message:this.state.textMessage    
        }
        console.log("my data: " , data);
        axios.post("/api/forma", data)
        .then(res=>{
            console.log(res);
            this.setState({
                sent:true,
            },this.resetForm())
        }).catch((err)=>{
            console.log("message not sent", err);
        });
    }

    resetForm=()=>{
        this.setState({
            firstName: "",
            lastName:"",
            email:"",
            textMessage:""
        })

        setTimeout(()=>{
            this.setState({
            sent:false,
            })
        },5000)
    }


    render () {
       return (
           <div className="container contact-container">
                <form>
                    <div className="singleItem">
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        name="firstName" 
                        placeholder="your name" 
                        className="name"
                        value={this.state.firstName} 
                        onChange={e => this.change(e)}
                        />
                    </div>
                    <div className="singleItem">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            type="text"
                            name="lastName" 
                            placeholder="your last name" 
                            className="lastname"
                            value={this.state.lastName} 
                            onChange={e => this.change(e)}
                            />
                        </div>
                    <div className="singleItem">
                        <label htmlFor="email">Email</label>                        
                        <input 
                            type="text"
                            name="email" 
                            placeholder="your email" 
                            className="email"
                            value={this.state.email} 
                            onChange={e => this.change(e)}
                            />
                        </div>
                    <div className={this.state.sent ? `msgtxt mssgShow`:`msgtxt` }>Message has been sent</div>
                    <div className="textArea singleItem">
                        <label htmlFor="message">Message</label>
                        <textArea    
                            name="textMessage" 
                            placeholder="Message ..." 
                            className="textMessage"
                            value={this.state.textMessage} 
                            onChange={e => this.change(e)} cols={30} rows={10}>
                        </textArea>
                    </div>
                    <div className="btnMessage">
                    <button onClick={e => this.onSubmit(e)} className="btnMessage">Submit</button>
                    </div>
                </form>
            </div>    
       );
    }
}