import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import UserProfile from 'material-ui/svg-icons/social/person';
import Registrer from 'material-ui/svg-icons/maps/local-shipping';
import Receipt from 'material-ui/svg-icons/action/receipt';
import Badge from 'material-ui/Badge';
import { Link } from 'react-router-dom';


const user = <UserProfile />;
const registrer = <Registrer />;
const receipt = <Receipt />;

class Navbar extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({ selectedIndex: index });

  render() {
    return (
      <Paper zDepth={1} style={{ position: 'absolute', bottom: '0' }}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
        <Link to="/test">
          <BottomNavigationItem
            label="Profil"
            icon={user}
            onClick={() => this.select(0)}
          />
          </Link>
          <Link to="/">
            <BottomNavigationItem
              label="Registrer arbeid"
              icon={registrer}
              onClick={() => this.select(1)}
            />
          </Link>
          <Link to="/recite">
            <BottomNavigationItem
              label="Utført arbeid"
              icon={receipt}
              onClick={() => this.select(2)}
            />
          </Link>
          {this.props.handleCount === 0 ? null :
            <Badge
              style={{ padding: 0, flex: 0 }}
              badgeContent={this.props.handleCount}
              primary={true}
              badgeStyle={{ top: 0, right: 0, }}
            />}

        </BottomNavigation>
      </Paper>
    );
  }
}

export default Navbar;

