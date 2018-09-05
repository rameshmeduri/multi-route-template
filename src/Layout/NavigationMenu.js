import React from 'react';
import { List } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import NavItem from './NavItem';

const navItems = [
  {
    title: 'group1',
    children: [
      { title: 'page1', href: '/page1' },
      { title: 'page2', href: '/page2' }
    ]
  },
  {
    title: 'group2',
    children: [
      { title: 'page3', href: '/page3' },
      { title: 'page4', href: '/page4' }
    ]
  }
];

class NavigationMenu extends React.Component {
  mapNavigation(depth) {
    return ({ title, children, href }) => {
      const { location } = this.props;
      const open = children && children.length > 0
        ? children.some(item => item.href === location.pathname)
        : false;
      return (
        <NavItem
          key={href || title}
          title={title}
          depth={depth}
          href={href}
          open={open}
        >
          {children && children.length > 0 && children.map(this.mapNavigation(depth + 1))}
        </NavItem>
      );
    };
  }
  render() {
    return (
      <List component="nav">
        {navItems.map(this.mapNavigation(0))}
      </List>
    );
  }
}

export default withRouter(NavigationMenu);

