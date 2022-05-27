import React from "react";

class App extends React.Component
{
  constructor(props) {
    super(props);
    console.log('construct');
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentDidUpdate() {
    console.log('updated');
  }

  tick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return <input type="button" onClick={() => this.tick()} value="Render" />
  }
}

export default App;