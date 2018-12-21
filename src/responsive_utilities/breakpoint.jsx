import React from 'react';
import MediaQuery from 'react-responsive';

const breakpoints = {
 desktop: '(min-width: 1550px)',
 tablet: '(min-width: 1024px) and (max-width: 1550px)',
 phone: '(max-width: 1024px)',
};
// const { string, object } = React.PropTypes;
export default function Breakpoint(props) {
 const breakpoint = breakpoints[props.name] || breakpoints.desktop;
return (
 <MediaQuery {...props } query={breakpoint}>
 {props.children}
 </MediaQuery>
 );
}
// React.propTypes = {
//  name: string,
//  children: object,
// }