import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react'




class App extends Component {


  async componentWillMount() {


    this.props.orbitStore.connect();

  }
  render() {
    const { identity, getItems } = this.props.orbitStore;
    return (
      <div className="App">

        <div className="App-header">
          {Object.keys(identity).map((key, id) => <div className="Key-Text" key={key}>{key}: {JSON.stringify(identity[key])}</div>)}
        </div>

        <div>
          {getItems.map((item, id) => <div key={id}>{'Message ' + id + ' :'}{JSON.stringify(item)}</div>)}
        </div>
        <div>
        </div>
      </div>);
  }
}

export default (inject("orbitStore")(observer(App)));
