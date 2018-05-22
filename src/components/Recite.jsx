import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './Navbar';

class Recite extends Component {
	constructor(props) {
		super(props);
		this.state = { visible: false, sum: 0 }
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.setState(prevState => ({
			visible: !prevState.visible
		}));
	}

	render() {
		return (
			<div>
				{this.state.visible ? <ReciteCard sum={this.props.sum} allQubic={this.props.allQubic} allDestination={this.props.allDestination} /> : null}
				<Button onClick={this.handleChange}>
					{this.props.handleCount}
				</Button>
				<Navbar handleCount={this.props.handleCount} />
			</div>
		);
	}
}

export class ReciteCard extends Component {
	render() {
		const { allDestination, allQubic, sum } = this.props;
		return (
			<div>
				<CardWrapper>
					<ValuesWrapper>
						<Destination>Seddelnummer
						{allDestination.map(dest => {
								return (
									<DestinationNumber>{dest}</DestinationNumber>
								)
							})}
						</Destination>
						<Values>Kubikk
							{allQubic.map(qubic => {
								return (
									<QubicSum>{qubic}</QubicSum>
								)
							})}
						</Values>
					</ValuesWrapper>
					<Total>Total antall kubikk: {sum}</Total>
				</CardWrapper>
			</div>
		);
	}
}

const QubicSum = styled.div`
	text-align: left;
`;

const DestinationNumber = styled.div`
	text-align: left;
`;

const ValuesWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
`;

const Destination = styled.div`
	display: flex; 
	flex-direction: column;
	margin: 0 1rem;
`;

const Values = styled.div`
	display: flex; 
	flex-direction: column;
	margin: 0 1rem;
`;

const Button = styled.button`
	position: fixed;
	bottom: 30px;
	right: 10px;
	width: 50px;
	height:	50px;
	padding-bottom: 40px;
	border-radius: 50%;
	border: none;
	overflow:hidden;
	background: #5DB5A4; 
	box-shadow: 0 0 3px gray;
`;

const CardWrapper = styled.div`
	overflow: hidden;
	z-index: 1;
	position: fixed;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	bottom: 70px;
	width: 200px;
	height: 300px;
	margin: 20px;
	right: 10px;
	background-color: white;
	&:hover{
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}
`;

const Total = styled.p`
	text-align: left;
	width: 100%;
	border-top: 1px solid black;
	position: absolute;
	bottom: 20px;
`;

export default Recite;