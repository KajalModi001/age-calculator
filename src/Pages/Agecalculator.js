import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Agecalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdate: '',
      anydate: '',
      age: '',
      months: '',
      days: ''
    };

    this.handlebirthdatechange = this.handlebirthdatechange.bind(this);
    this.handleanydate = this.handleanydate.bind(this);
    this.calculateAge = this.calculateAge.bind(this);
  }

  handlebirthdatechange(event) {
    this.setState({ birthdate: event.target.value });
  }

  handleanydate(event) {
    this.setState({ anydate: event.target.value });
  }

  calculateAge() {
    const birthdate = new Date(this.state.birthdate);
    const anydate = new Date(this.state.anydate);

   
    let age = anydate.getFullYear() - birthdate.getFullYear();

    
    let months = anydate.getMonth() - birthdate.getMonth();
    if (months < 0 || (months === 0 && anydate.getDate() < birthdate.getDate())) {
      age--;
      months += 12;
    }

    
    let days = anydate.getDate() - birthdate.getDate();
    if (days < 0) {
      months--;
      const tempDate = new Date(anydate.getFullYear(), anydate.getMonth(), 0);
      days += tempDate.getDate();
    }

    this.setState({ age: age, months: months, days: days });
  }

  render() {
    return (
      <>
        <div className='maincontainer'>
          <p className='agetitle'>Age Calculator</p>
        </div>

        <hr />
        <hr />
        <hr />
        <hr />

        <hr />
        <div className='divforbirthdate'>
          <p className='birthdate'>Enter Your Birth Date:</p>
          <Form.Control type="date" id="birthdate" className="datebox" value={this.state.birthdate} onChange={this.handlebirthdatechange} />
          <p className='birthdate'>Enter Your choice Date:</p>
          <Form.Control type="date" id="birthdate" className="datebox" value={this.state.anydate} onChange={this.handleanydate} />
          <Button onClick={this.calculateAge} className='buttonfinal'>Calculate Age</Button>
        </div>

        {this.state.age !== '' && <p className='result'>Your age is: {this.state.age} years, {this.state.months} months, and {this.state.days} days</p>}
      </>
    );
  }
}



