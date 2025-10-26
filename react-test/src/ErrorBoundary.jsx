import {Component} from "react";

export class ErrorBoundary extends Component {
  state = {
    /**
     * @type {import('react').ErrorInfo | null}
     * */
    errorInfo: null
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);

    this.setState({errorInfo: errorInfo});
  }

  render() {
    const { errorInfo } = this.state;

    if (errorInfo) {
      return <>
        <div>ОШИБКА</div>
        <div>{errorInfo.componentStack}</div>
        <button onClick={() => this.setState({errorInfo: null})}>Перерендерить страницу</button>
      </>
    }

    return this.props.children;
  }
}