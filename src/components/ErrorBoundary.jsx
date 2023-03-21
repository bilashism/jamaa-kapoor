import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      info: null
    };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    this.setState({
      error,
      info
    });
  }

  render() {
    const {
      state: { info, error },
      props: { children }
    } = this;

    if (info) {
      return (
        <details style={{ whiteSpace: 'pre-wrap' }}>
          <summary>Something went wrong! Click to learn more.</summary>
          <div className="">
            <p className="">{error && error.toString()}</p>
            <br />
            <p className="">{info.componentStack}</p>
          </div>
        </details>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
