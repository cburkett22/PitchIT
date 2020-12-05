import React, { Component } from "react";
import "../MainProfile/style.css";
import classNames from 'classnames';
import placeHolder from "../../img/placeholder.heic";
import axios from 'axios';

class ProfilePicture extends Component {

  constructor(props){
    super(props)
    this.state = {
      file: placeHolder
    }
    this.handleChange = this.handleChange.bind(this)
    console.log(props)
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
    
    //const formData = new FormData();
    //formData.append("img", this.state.file[0]);

    console.log(this.props.user);
    console.log(this.state);

    let userId = this.props.user.id;
    let file = this.state;

    // fetch("/api/user/:id", {
    //   method: "PUT",
    //   id: userId,
    //   body: file
    // }).then(res => {
    //   console.log(res);
    // });

    axios({
      url: `/api/user/${userId}`,
      method: 'PUT',
      data: file
    })
    .then(() => {
      console.log('Data has been Posted!');
      this.resetUserInputs();
    })
    .catch((err) => {
      console.log('Internal server error :(', err);
    });

  }
  // Post = event => {
  //   event.preventDefault();
  //   const file = document.getElementById("myInput").files;
  //   const formData = new FormData();
  //   formData.append("profileImage", file[0]);
  //   fetch("http://localhost:5000/", {
  //     method: "POST",
  //     body: formData
  //   }).then(res => {
  //     console.log(res);
  //   });
  //   document.getElementById("profileImage").setAttribute("src", `http://localhost:5000/${file[0].name}`);
  //   console.log(file[0]);
  // };


  render() {
    if(this.state.file != null){
      console.log(Buffer.from(this.state.file).toString('base64') )
    }
   
    return (<>
      <label htmlFor="myInput"> <img src={ this.state.file ? this.state.file :placeHolder } type="camera" id="profileImage" className={classNames('profilePicStyle', 'add-image-label')} htmlFor="add-image-input" aria-describedby="add-image-input" alt="profile" /></label>
      <input
        id="myInput"
        style={{ display: 'none' }}
        type={"file"}
        onChange={this.handleChange}
      />
    </>
    );
  }
}

export default ProfilePicture;