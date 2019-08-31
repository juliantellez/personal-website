import * as React from 'react';

const Anchor = props => (
    <a
        className={props.className}
        style={props.style}
        href={props.href}
        target="_blank"
    >
        {props.children}
    </a>
);

export default Anchor;
