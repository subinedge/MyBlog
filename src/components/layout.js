import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'
import Footer from './footer'
import SideDrawer from '../components/SideDrawer/SideDrawer'
import Backdrop from '../components/Backdrop/backdrop'
import '../baseStyles/index.scss'

import layoutStyles from './styles/scss/layout.module.scss'
import drawerToggleButton from './SideDrawer/DrawerToggleButton'

class Layout extends React.Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {

    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className={layoutStyles.container}>

        <div className={layoutStyles.content}>
          <Header drawClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <div style={{ marginTop: "94px" }}>
            {this.props.children}
          </div>
        </div>

        <Footer />
      </div>
    )
  };

}

export default Layout;