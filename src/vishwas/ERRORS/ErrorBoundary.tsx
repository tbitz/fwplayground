/* Error Boundary is a component that either implements 
getDerivedStateFromError or componentDidCatch.

Goal: Remaining component should be unaffected of errors.
*/

// getDerivedStateFromError: Render Fallback after error
// componentDidCatch: Log Error information

// do not catch errors inside eventhandler
// use try catch for this

import React, { Component } from 'react';

interface IState {
    hasError: boolean;
}

class ErrorBoundary extends Component<{}, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error: any) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        console.log(errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;