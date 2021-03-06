import React from 'react';
import MediaQuery from 'react-responsive';

const breakpoints = {
    desktop: '(min-width: 1550px)',
    tablet: '(min-width: 1024px) and (max-width: 1550px)',
    mobile: '(max-width: 1024px)',
};
export default function Breakpoint(props) {
    const breakpoint = breakpoints[props.name] || breakpoints.desktop;
    return (
        <MediaQuery {...props} query={breakpoint}>
            {props.children}
        </MediaQuery>
    );
}