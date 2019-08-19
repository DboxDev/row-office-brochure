import React, { Component } from 'react';
import Context from '../config/Context';

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowDimensions: {
        height: null,
        width: null
      }
    };
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    const height = window.innerHeight || Math.max(document.documentElement.clientHeight, document.body.clientHeight);
    const width = window.innerWidth || Math.max(document.documentElement.clientWidth, document.body.clientWidth);

    this.setState({
      windowDimensions: {
        height,
        width
      }
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
