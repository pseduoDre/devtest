import React from 'react';
import styled from 'styled-components';
import FontAwesome from	'react-fontawesome';
import LogoImg from '../Utils/Norva24_Birkeland.png';

const Header = () => {
    return(
        <HeaderWrapper>
			<Logo src={LogoImg} />
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.div`
	display: inline-flex;
	justify-content: center;
	width: 100%;
 	height: 50px;
	color: white;
  	border-bottom: 1px solid black;
`;

const ProfileWrapper = styled.div`
	display: flex;
	color: white;
	justify-content: space-around;

	p {
	margin: 20px;
	}
`;

const Logo = styled.img`
	display: flex;
	justify-content: center;
	margin: 20px;
	width: 120px;
	height: 20px;
`;

export default Header;