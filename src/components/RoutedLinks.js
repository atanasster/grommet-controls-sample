import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Button } from 'grommet';

class RoutedLink extends React.Component {
  render() {
    const {
      path, 'aria-label': ariaLabel, children, className,
      disabled, href, onBlur, onClick, onFocus,
    } = this.props;
    return (
      <Link
        to={path}
        aria-label={ariaLabel}
        className={className}
        disabled={disabled}
        href={href}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
      >
        {children}
      </Link>
    );
  }
}
export const RoutedAnchor = props => (
  <Anchor
    {...props}
    as={RoutedLink}
  />
);

export const RoutedButton = ({ path, ...props }) => (
  <Button
    path={path}
    {...props}
    as={RoutedLink}
  />
);
