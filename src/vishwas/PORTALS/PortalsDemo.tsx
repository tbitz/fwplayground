import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// set portal-html-id on index.html to not fall under the root element with a portal
// used for modals to not have CSS impact of root
// used for modals to still change state on the app
function PortalsDemo() {
    const domNode = document.getElementById("portal-root");

    if (domNode) {
        return ReactDOM.createPortal(
            <h1>Portals Demo</h1>,
            domNode
        )
    } else {
        return (<h1>Portal not working</h1>)
    }

}

export default PortalsDemo;