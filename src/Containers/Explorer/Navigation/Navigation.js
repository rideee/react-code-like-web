import React, {Component} from 'react';

import './Navigation.css';
import NavItem from './partials/NavItem';

class Navigation extends Component {

  state = {
    isBlogOpen: true,
    isCoursesOpen: false,
    isInfoOpen: false
  }

  toggleBlogHandler = () => {
    this.setState({isBlogOpen: !this.state.isBlogOpen});
  }

  toggleCoursesHandler = () => {
    this.setState({isCoursesOpen: !this.state.isCoursesOpen});
  }

  toggleInfoHandler = () => {
    this.setState({isInfoOpen: !this.state.isInfoOpen});
  }

  render = () => {
    return (
      <nav className="Navigation">
        <NavItem name="Blog"
          icon="fas fa-book-reader"
          isOpen={this.state.isBlogOpen}
          click={this.toggleBlogHandler}
        >
          <NavItem name="Wszystkie wpisy" />
        </NavItem>

        <NavItem name="Kursy"
        icon="fas fa-graduation-cap"
        isOpen={this.state.isCoursesOpen}
        click={this.toggleCoursesHandler}
        >
          <NavItem name="dummy_content" />
          <NavItem name="dummy_content" />
          <NavItem name="dummy_content" />
          <NavItem name="dummy_content" />
        </NavItem>

        <NavItem name="Informacje"
        icon="fas fa-info"
        isOpen={this.state.isInfoOpen}
        click={this.toggleInfoHandler}
        >
          <NavItem name="O mnie" />
          <NavItem name="O witrynie" />
        </NavItem>
      </nav>
    );
  }

}

export default Navigation;
