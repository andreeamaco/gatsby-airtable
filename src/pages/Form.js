import React from 'react';
import axios from 'axios';

const FormButton = ({ buttonText, buttonLink }) => (
  <button to={buttonLink}>{buttonText}</button>
)

class AirtableForm extends React.Component { 

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

  var Airtable = require('airtable');
  
  // Airtable.configure({
  //   endpointUrl: 'https://api.airtable.com',
  //   apiKey: `${process.env.AIRTABLE_API_KEY}`
  // });

  // var base = Airtable.base('appWZOog67McA97vM');

  var base = new Airtable({apiKey: `${process.env.AIRTABLE_API_KEY}`}).base('appWZOog67McA97vM');
  
  base('Main').create([
    {
      "fields": {
        "First name": this.state.firstname,
        "Last name": this.state.lastname,
        "Email": this.state.email,
        "Form name": this.props.formName,
        "Agree": this.state.agree
      }
    }
  ], 
  { 
    typecast: true
  }, 
  function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });
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

export default AirtableForm;