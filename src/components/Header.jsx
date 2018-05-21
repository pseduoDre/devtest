import React from 'react';
import styled from 'styled-components';
import FontAwesome from	'react-fontawesome';
import LogoImg from '../Utils/logo.png';

const Header = () => {
    return(
        <HeaderWrapper>
					<Logo src={LogoImg} />
							<ProfileWrapper>
									<p>Tore Scania</p>
									<FontAwesome
									name='cog'
									size='lg'
									style={{ display: 'inline', marginTop: '20px' }}
									/>
									<p>Logg ut</p>
							</ProfileWrapper>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.div`
	display: inline-flex;
	justify-content: space-between;
	width: 100%;
  height: 50px;
	color: white;
	background-color: #565656;
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
	margin: 20px;
	width: 130px;
	height: 20px;
`;

export default Header;