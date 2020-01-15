import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../img/logo.png';
import '../../css/Mobile.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faMapMarkerAlt,
  faStore,
  faBell
} from '@fortawesome/free-solid-svg-icons';
// Redux
import { connect } from 'react-redux';
const MobileNav = ({ isAuth, loading, user }) => {
  const { Name } = user;
  const AuthLinks = () => (
    <Fragment>
      <Link to='/Home' id='a-Padding'>
        <FontAwesomeIcon icon={faHome} /> עמוד הבית
      </Link>
      <Link to='/Nclients' id='a-Padding'>
        <FontAwesomeIcon icon={faUser} /> אזור אישי
      </Link>
      <Link to='/HealthP' id='a-Padding'>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> LIVE
      </Link>
      <Link to='/AllClients' id='a-Padding'>
        <FontAwesomeIcon icon={faStore} /> חנות
      </Link>
      <Link to='/Statistics' id='a-Padding'>
        <FontAwesomeIcon icon={faBell} /> עדכונים
      </Link>
    </Fragment>
  );
  const GuestLinks = () => <Fragment></Fragment>;
  return (
    <div className='MobileNav'>
      <Navbar expand='lg' bg='light'>
        <Navbar.Brand>
          {!loading && isAuth ? (
            <Link to='/Home'>
              <img src={logo} alt='Mobile logo' id='MobileNav-img' />
            </Link>
          ) : (
            <Link to='/'>
              <img src={logo} alt='Mobile logo' id='MobileNav-img' />
            </Link>
          )}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            {!loading && isAuth ? (
              <span>
                <span className='Nav-account-name '>שלום {Name}</span>
              </span>
            ) : null}

            {!loading && isAuth ? <AuthLinks /> : <GuestLinks />}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  loading: state.authReducer.loading,
  user: state.authReducer.user
});
export default connect(mapStateToProps)(MobileNav);
