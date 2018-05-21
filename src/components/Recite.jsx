import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Recite extends Component {
    constructor(props){
				super(props);
				this.state = {	visible: false, sum: 0	}
				this.handleChange = this.handleChange.bind(this);
		}

		handleChange(){
			this.setState(prevState => ({
				visible: !prevState.visible
			}));
		}

    render(){
        return(
            <div>
							{this.state.visible ? <ReciteCard sum={this.props.sum} allQubic={this.props.allQubic} allDestination={this.props.allDestination} /> : null}
							<Button onClick={this.handleChange}>
								{this.props.handleCount}
							</Button>
            </div>
        );
    }
}

export class ReciteCard extends Component {
	render(){
		const {allDestination, allQubic, sum} = this.props;

	return (
		<div>
			<CardWrapper>
				<ValuesWrapper>
				<Destination>Seddelnummer
					
					{allDestination.map(dest => {
						return (
							<div>{dest}</div>
						)
					})}
					</Destination>

					<Values>Kubikk
						{allQubic.map(qubic => {
							return(
								<div>{qubic}</div>
							)
						})}
					</Values>
					</ValuesWrapper>
					{console.log('sumtest: ', sum)}
				<Total>Total antall kubikk: {sum}</Total>
			</CardWrapper>
		</div>
	);
}
}

const ValuesWrapper = styled.div`
display: flex;
justify-content: space-between;
`;

const Destination = styled.div`
display: flex; 
flex-direction: column;
margin: 0 1rem;`;

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
  height:	0;
  padding-bottom: 40px;
  border-radius: 50%;
  border:2px solid #cfdcec;
  overflow:hidden;
  background: #4679BD; 
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