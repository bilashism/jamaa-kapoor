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
    console.log({ error, info });
  }

  render() {
    if (this.state.info) {
      return (
        <details style={{ whiteSpace: 'pre-wrap' }}>
          <summary>Something went wrong! Click to learn more.</summary>
          <div className="">
            <p className="">
              {this.state.error && this.state.error.toString()}
            </p>
            <br />
            <p className="">{this.state.info.componentStack}</p>
          </div>
        </details>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
