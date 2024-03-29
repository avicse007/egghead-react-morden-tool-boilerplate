import { hot } from 'react-hot-loader';
import React from 'react';
//import Warning from './warning';

const Warning = React.lazy(() => import('./warning'));

class App extends React.Component {
  state = {
      count: 0,
  };

  componentDidMount() {
      console.log('It Mount');
  }

  increment = () => {
      this.setState((state) => ({ count: state.count + 1 }));
  };

  decrement = () => {
      this.setState((state) => ({ count: state.count - 1 }));
  };

  render() {
      const { count } = this.state;
      //  debugger
      return (
          <div>
              <h1> Hello world </h1>
              <h3 className={count > 3 ? 'warning' : null}>
                  {' '}
          Count : {this.state.count}{' '}
              </h3>
              {count > 3 ? (
                  <React.Suspense fallback={null}>
                      <Warning />
                  </React.Suspense>
              ) : null}
              <button onClick={this.increment}>Add (+)</button>
              <button onClick={this.decrement}>Subtract (-)</button>
          </div>
      );
  }
}

export default hot(module)(App);
