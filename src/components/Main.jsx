import React, { Component } from 'react';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import Navbar from './Navbar';
import Badge from 'material-ui/Badge';
import Header from './Header';
import Recite from './Recite';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      valueDestination: 0,
      valueQubic: 0,
      allQubic: [],
      allDestination: [],
      sum: 0,
      open: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  shouldComponentUpdate(nextState) {
    const { count, valueDestination, valueQubic, allQubic, allDestination } = this.state;

    if (count.nextState !== count ||
      valueDestination.nextState !== valueDestination ||
      valueQubic.nextState !== valueQubic ||
      allDestination.nextState !== allDestination ||
      allQubic.nextState !== allQubic
    ) {
      return true;
    }
    return false;
  }

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };


  setValue = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  arrayValues() {
    const { valueQubic, allQubic, valueDestination, allDestination } = this.state;
    allQubic.push(parseInt(valueQubic));
    allDestination.push(valueDestination);
  }

  handleSubmit(event) {
    this.setState({
      count: this.state.count + 1,
    });

    this.handleClick();
    this.arrayValues();
    this.handleSum();
  }

  handleSum() {
    const { allQubic } = this.state;

    const total = allQubic.reduce((prev, next) => prev + next, 0);

    this.setState({ sum: total });
  }

  render() {
    const { allDestination, allQubic, sum } = this.state;
    return (
      <div className="App">
        <h1>Registrer arbeid</h1>
        <Wrapper>
          <div>
            <CardWrapper>
              <TextField
                name="valueDestination"
                type="number"
                hintText="Seddelnummer"
                floatingLabelText="Skriv inn seddelnummer"
                style={{ width: '200px' }}
                onChange={this.setValue}
              />
              <TextField
                name="valueQubic"
                type="number"
                hintText="Kubikk"
                floatingLabelText="Kubikk"
                style={{ width: '200px' }}
                onChange={this.setValue}
              />
              <br />
              <Button onClick={this.handleSubmit}>Registrer</Button>
            </CardWrapper>
          </div>
        </Wrapper>
        <Recite sum={sum} allDestination={allDestination} allQubic={allQubic} handleCount={this.state.count} />
        <Snackbar
          open={this.state.open}
          message="Registrert arbeid"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
        <Navbar handleCount={this.state.count} />
      </div>
    );
  }
}

const CardWrapper = styled.div`
		width: 260px;
		height: 300px;
		margin: 20px;
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
		background-color: white;
		font-size: 0.4em;
		float: left;
		&:hover {
				box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
		}
  `;

const Button = styled.button`
    border: 1px solid #337fed;
    border-radius: 6px;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family:Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #1570cd;
    background-color: #5DB5A4;
    margin: 10px;
    margin-top: 50px;
  `;


const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
  `;

export default Register;