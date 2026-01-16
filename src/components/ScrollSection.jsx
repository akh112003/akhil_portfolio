import React from 'react';

const ScrollSection = ({ children, id }) => {
    return (
        <div id={id} className="min-h-screen snap-start relative">
            {children}
        </div>
    );
};

export default ScrollSection;
