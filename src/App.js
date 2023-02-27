import React from 'react';
import ReactDOM from 'react-dom';


class Header extends React.Component {
  render() {
    return <p>{this.props.title}</p>;
  }
}

class Action extends React.Component{

  render(){
    return (
    <div>
      <button>What should I do?</button>
    </div>
    )
  }
}
class AddOption extends React.Component{
  render(){
    return (
      <div>
        <input type={'datetime-local'}></input>
      </div>
    )
  }
}
class Options extends React.Component{
  render(){
    return(
      <select defaultValue={props.defaultValue}>
      {props.options.map((option, index) => (
        <Option key={index} value={option.value} label={option.label} />
      ))}
    </select>
    )
  }
}
class Option extends React.Component{
  render(){
    return <option value={props.value}>{props.key}</option>;
  }
}

class App extends React.Component {
  render() {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];
    return (
      <div>
        <h1>Title</h1>
        <Action/>
        <Header title = "No hope interview !!" />
        <Header />
        <AddOption></AddOption>
        <AddOption></AddOption>
        <Options options={options} defaultValue={options[0].value}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


export default App;
