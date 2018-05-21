import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import MapImg from '../Utils/map-placeholder.jpg';

class Card extends Component {
    constructor(props){
				super(props);
				this.state = {	destination: 0,	}
				this.handleValue = this.handleValue.bind(this);
				this.handleDestination = this.handleDestination.bind(this);
		}

		handleValue() {
			const {	valueDestination, valueQubic} = this.props;
			
			console.log(this.props);
		}

		componentDidMount(){
			console.log(this.props.valueDestination);
		}


		handleDestination()	{
			const {	valueDestination	} = this.props;
			const {	destination	} = this.state;
			console.log('dest',this.props);	
		}

    render(){
        return(
            <div>
                <CardWrapper>
										<TextField
											name="destination"
											type="number"
											hintText="Seddelnummer"
											floatingLabelText="Skriv inn seddelnummer"
											style={{	width: '200px'	}}
											onChange={this.props.setValue}
										/>
										<TextField
											name="valueQubic"
											type="number"
											hintText="Kubikk"
											floatingLabelText="Kubikk"
											style={{	width: '200px'	}}
											onChange={this.props.setValue}
										/>
										<br/>
										<Button onClick={this.handleDestination}>Submit</Button>
                </CardWrapper>
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

export default Card;