import React from "react";

export default class Form extends React.Component {
    state = {
        firstName: "",
        lastName:"",
        userName:"",
        email:"",
        password:"",
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName:"",
            userName:"",
            email:"",
            password:"",
        });
    }


    render () {
       return (
           <div className="contactForm" style={{
                "border":"5px",
                "padding": "1.5em",
                "border-radius": "1em",
               "display" : "flex", 
               "justify-content" : "center",
               "align-items" : "center",
               "width" : "100%",
               "height" : "100vh", 
               }}>
                <form>
                    <input
                    name="firstName" 
                    placeholder="First Name" 
                    value={this.state.firstName} 
                    onChange={e => this.change(e)}
                    // onChange={e => this.setState({ firstName: e.target.value })}
                    />
                    <br />
                    <input
                    name="lastName" 
                    placeholder="Last Name" 
                    value={this.state.lastName} 
                    onChange={e => this.change(e)}
                    // onChange={e => this.setState({ lastName: e.target.value })}
                    />
                    <br />
                    <input
                    name="userName" 
                    placeholder="User Name" 
                    value={this.state.userName} 
                    onChange={e => this.change(e)}
                    // onChange={e => this.setState({ userName: e.target.value })}
                    />
                    <br />
                    <input 
                    name="email" 
                    placeholder="Email" 
                    value={this.state.email} 
                    onChange={e => this.change(e)}
                    // onChange={e => this.setState({ email: e.target.value })}
                    />
                    <br />
                    <input 
                    name="password" 
                    placeholder="Password"
                    type="password"
                    value={this.state.password} 
                    onChange={e => this.change(e)}
                    // onChange={e => this.setState({ password: e.target.value })}
                    />
                    <button onClick={e => this.onSubmit(e)}>Submit</button>
                </form>
            </div>    
       );
    }
}