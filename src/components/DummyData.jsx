import React, { Component } from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';


const style = {
  height: '60px',
  width: '90%',
	margin: 10,
	textAlign: 'center',
  display: 'inline-block',
};

class DummyData extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
				<Wrapper>
					<WrapperPaper>
						<Paper style={style} zDepth={2} />
					</WrapperPaper>
					<WrapperPaper>
						<Paper style={style} zDepth={2} />
					</WrapperPaper>
					<WrapperPaper>
						<Paper style={style} zDepth={2} />
					</WrapperPaper>
					<WrapperPaper>
						<Paper style={style} zDepth={2} />
					</WrapperPaper>
					<WrapperPaper>
						<Paper style={style} zDepth={2} />
					</WrapperPaper>
					<Navbar />
				</Wrapper>
    );
	}
}

const WrapperPaper = styled.div`

`;

const Wrapper = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	margin-bottom: 10px;
`;


export default DummyData;
