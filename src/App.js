import React, { Component } from 'react';
import Header from './components/Header';
import Recite from './components/Recite';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= { 
      count: 0,
      valueDestination: 0,
      valueQubic: 0,
      allQubic: [],
      allDestination: [],
      sum: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  shouldComponentUpdate( nextState){
    const { count, valueDestination, valueQubic, allQubic, allDestination} = this.state;

    if(count.nextState !== count || 
      valueDestination.nextState !== valueDestination || 
      valueQubic.nextState !== valueQubic || 
      allDestination.nextState !== allDestination || 
      allQubic.nextState !== allQubic
    ){
      return true;
    }
    return false;
  }

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

   this.arrayValues();
   this.handleSum();
   console.log('basjd',this.state.valueDestination);
  }

  handleSum(){
    const { allQubic } = this.state;

    const total = allQubic.reduce(( prev, next ) => prev + next, 0 );

    console.log('total: ', total);

    this.setState({sum: total});
    console.log('sum: ',this.state.sum)
    console.log('allqubic: ', allQubic);
  }

  render() {
    const {   allDestination, allQubic, sum  } = this.state;
    return (
      <div className="App">
        <MuiThemeProvider>
          <Header />
          <h1>Registrer arbeid</h1>
          <Wrapper>
            <div>
             <CardWrapper>
                <TextField
                  name="valueDestination"
                  type="number"
                  hintText="Seddelnummer"
                  floatingLabelText="Skriv inn seddelnummer"
                  style={{	width: '200px'	}}
                  onChange={this.setValue}
                />
                <TextField
                  name="valueQubic"
                  type="number"
                  hintText="Kubikk"
                  floatingLabelText="Kubikk"
                  style={{	width: '200px'	}}
                  onChange={this.setValue}
                />
                <br/>
                <Button onClick={this.handleSubmit}>Submit</Button>
                <button >a</button>
              </CardWrapper>
            </div>
          </Wrapper>
          
          <Recite sum={sum} allDestination={allDestination} allQubic={allQubic} handleCount={this.state.count} />
        </MuiThemeProvider>
      </div>
    );
  }
}

const CardWrapper = styled.div`
	width: 260px;
	height: 200px;
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
	border-radius:6px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #1570cd;
	background-color:#1e62d0;
	margin: 10px;
`;


const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`;

export default App;
