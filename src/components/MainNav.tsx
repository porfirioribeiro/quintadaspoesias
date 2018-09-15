import React from 'react';
import { Link, GatsbyLinkProps } from 'gatsby';
import styled from '../utils/theme';
import { css, cx } from 'emotion';
import { LinkGetProps } from 'reach__router';

const Header = styled.header<{ floating: boolean }>(({ floating, theme }) => ({
  position: 'fixed',
  zIndex: 1,
  width: '100%',
  height: 72,
  padding: '0 32px',
  display: 'flex',
  alignItems: 'center',
  transition: 'all 300ms ease',
  backgroundColor: floating ? 'white' : 'transparent',
  boxShadow: floating ? '0px 3px 45px rgba(0, 0, 0, 0.15);' : undefined,
  '& > nav': {
    justifySelf: 'flex-end',
  },
}));

const Title = styled(Link)(({ theme }) => ({
  flex: 1,
  color: theme.colors.primary,
  fontFamily: theme.fonts.special,
  fontSize: 32,
  textDecoration: 'none',
}));

export const NavLink = styled(Link)<GatsbyLinkProps<any>>(({ theme }) => ({
  color: theme.colors.textSecondary,
  fontSize: 14,
  fontWeight: 500,
  textDecoration: 'none',
  margin: 16,
  '&[data-active]': {
    color: theme.colors.primary,
  },
}));

NavLink.defaultProps = {
  getProps: ({ isCurrent, location, href }: LinkGetProps) =>
    isCurrent || location.pathname + location.hash === href ? { 'data-active': true } : {},
  onClick: e => {
    const href = e.currentTarget.getAttribute('href')!.replace(location.pathname, '');
    console.log('href', href);
    if (href.startsWith('#')) {
      // e.preventDefault();
      const element = document.getElementById(href.substr(1));
      console.log('click', element);
      if (element !== null) element.scrollIntoView({ behavior: 'smooth' });
    }
  },
};

interface MainNavProps {
  className?: string;
  titleTo: string;
}

interface MainNavState {
  floating: boolean;
}

const scrollHeight = 50;
export default class MainNav extends React.Component<MainNavProps, MainNavState> {
  state = {
    floating: (document.scrollingElement || document.body).scrollTop > scrollHeight,
  };

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll, false);
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll, false);
  }

  handleScroll = () => {
    if ((document.scrollingElement || document.body).scrollTop > scrollHeight) {
      if (!this.state.floating) this.setState({ floating: true });
    } else if (this.state.floating) this.setState({ floating: false });

    // console.log('scroll', (document.scrollingElement || document.body).scrollTop);
  };
  render() {
    console.log('floating', this.state.floating);
    return (
      <Header floating={this.state.floating}>
        <Title to={this.props.titleTo}>Quinta das Poesias</Title>
        <nav>{this.props.children}</nav>
      </Header>
    );
  }
}
