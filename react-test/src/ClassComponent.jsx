import React, {Component, useState} from 'react';

function ErrorComponent() {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error('Error throwed');
  }

  return <button onClick={() => setError(true)}>Error</button>;
}

class ClassComponent extends Component {
  state = {
    count: 0,
    hasError: false
  }

  componentDidMount() {
    console.log('componentDidMount', this.props)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
    if (this.state.hasError) {
      throw new Error('error')
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch', error, errorInfo);
  }

  render() {
    const {count} = this.state

    if (this.state.hasError) {
      return <div>Ошибочка</div>
    }

    return (
      <div>
        счётчик: {count}
        <button onClick={() => this.setState({count: count + 1})}>increment</button>
        <ErrorComponent />
      </div>
    );
  }
}

export default ClassComponent;