import React from "react";
import './App.css';
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.formChange = this.formChange.bind(this);
    this.rform = this.rform.bind(this);

  };

  formChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  rform(e) {
    console.log(this.validation());
    
    e.preventDefault();
    if (this.validation()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Form submitted");
    }

  }

  validation() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

   

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "Enter your Password";
      }
  
      if (typeof fields["password"] !== "undefined") {
        if (
          !(fields["password"].match(/([a-z].[A-Z])|([A-Z].[a-z])/)) &&
          !(fields["password"].match(/([!,%,&,@,#,$,^,*,?,_,~])/)) &&
          !(fields["password"].match(/([0-9])/)) 
        ) {
          formIsValid = false;
          errors["password"] = "*Weak";
        }
        else if (
            !(fields["password"].match(/([a-z].[A-Z])|([A-Z].[a-z])/)) &&
            !(fields["password"].match(/([!,%,&,@,#,$,^,*,?,_,~])/)) 
          ) {
            formIsValid = false;
            errors["password"] = "*Medium";
          }
         else if (
            !(fields["password"].match(/([a-z].[A-Z])|([A-Z].[a-z])/)) 
          ) {
            formIsValid = false;
            errors["password"] = "*Strong";
          }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }



render() {
  return (
    <div id="head">
    <h1>DYNAMIC FORM</h1>
  <div id="body">
   <div id="input">
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.rform} >
      <label>ENTER YOUR USERNAME</label><br/>
      <input type="text" name="username" value={this.state.fields.username} onChange={this.formChange} /><br/>
      <div className="errorMsg">{this.state.errors.username}</div>
      <label>ENTER YOUR E-MAIL</label><br/>
      <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.formChange}  /><br/>
      <div className="errorMsg">{this.state.errors.emailid}</div>
      <label>PASSWORD</label><br/>
      <input type="password" name="password" value={this.state.fields.password} onChange={this.formChange} /><br/><br/>
      <div className="errorMsg">{this.state.errors.password}</div>
      <input type="submit" className="button"  value="Register"/>
      </form>
  </div>
</div>
</div>

    );
}


}

export default RegisterForm