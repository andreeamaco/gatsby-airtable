import React from 'react';
import axios from 'axios';

const FormButton = ({ buttonText, buttonLink }) => (
  <button to={buttonLink}>{buttonText}</button>
)

class FormFetch extends React.Component { 

constructor(props) {
  super(props);
  this.state = {
    firstname: ' ', 
    lastname: ' ', 
    email: ' ', 
    agree: false, 
  };
  
  this.updateFirstName = this.updateFirstName.bind(this);
  this.updateLastName = this.updateLastName.bind(this);
  this.updateEmail = this.updateEmail.bind(this);
  this.updateAgreement = this.updateAgreement.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

updateFirstName(event) {
  console.log(this.state.firstname);
  this.setState({
    firstname: event.target.value
  })
} 

updateLastName(event) {
  console.log(this.state.lastname);
  this.setState({
    lastname: event.target.value
  })
} 

updateEmail(event) {
  console.log(this.state.email);
  this.setState({
    email: event.target.value
  })
} 

updateAgreement(event) {
  console.log('Checkbox clicked');
  this.setState({
    agree: event.target.checked
  })
}

handleSubmit(event) {
  event.preventDefault();

  let data = {
    "records": [
      {
        "fields": {
          "First name": this.state.firstname,
          "Last name": this.state.lastname,
          "Email": this.state.email,
          "Form name": this.props.formName,
          "Agree": this.state.agree       
        },
      },
    ],
    typecast: true 
  }

  let final_data = JSON.stringify(data);
  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  
  fetch(`https://api.airtable.com/v0/appWZOog67McA97vM/Main`, {
    method: "POST",
    body: final_data,
    credentials: 'include',
    headers: {
      "Authorization": `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json"
    },
  })
  .then( 
    result => {
      console.log(result);
      // window.location = "https://www.schoolofcontent.net/download-success/";
    }
  )
  .catch(error => console.log(error))


// Option 3



  // axios.post('https://api.airtable.com/v0/appWZOog67McA97vM/Main/', 
  // final_data, 
  // {
  //   headers: {
  //   'Authorization': `Bearer ${AIRTABLE_API}`,
  //   'Accept': 'application/json', 
  //   'Content-Type': 'application/json'
  // }
  // })
  // .then(response => {
  //   console.log(response);
  //   // window.location = "https://www.schoolofcontent.net/download-success/";
  // })
  // .catch(error => {
  //   console.log(error);
  // })


}

render() {

  return (
    <div >
      <form
        onSubmit={this.handleSubmit} 
        method="POST" 
        name={this.props.formName}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        redirect={this.props.redirectPage} 
      > 
        <div>       
          <label for="firstname">First name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={this.state.firstname} 
            onChange={this.updateFirstName} 
          />
          <label for="lastname">Last name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={this.state.lastname} 
            onChange={this.updateLastName} 
          />
          <label for="email">Email address</label>
          <input 
            type="email" 
            id="email"
            name="email"
            value={this.state.email} 
            onChange={this.updateEmail} 
          />
          <div>
            <input type="checkbox" name="agree" checked={this.state.agree} onChange={this.updateAgreement} />
            <label>{this.props.checkboxText}</label>
          </div>
          <div>
            <FormButton type="submit" buttonText={this.props.buttonText} buttonLink={this.props.buttonLink} />
          </div>
        </div>
      </form>
    </div>
  );
}
}

export default FormFetch;