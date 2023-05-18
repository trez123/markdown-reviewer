import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faPager } from '@fortawesome/free-solid-svg-icons';
import { marked } from 'marked';

class App extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        input: '',
        htmlOutput: ''
      }
      this.change = this.change.bind(this);
  }

  change(event){
    
    this.setState({
      input: event.target.value,
      htmlOutput: marked(event.target.value)
    })
  }
  render(){
    return (
        <div className="App">
          <div className="App-header">
            <div className='editor-container'>
              <div className='toolbar'>
                <div className='editor-title'>
                <FontAwesomeIcon icon={faPager} />
                <h1>Editor</h1> 
                </div>
                <FontAwesomeIcon className='arrows-icon' icon={faArrowsAlt} />
              </div>
              <textarea className='editor' value={this.state.input} onChange={this.change}></textarea>
            </div>
            <div className='previewer-container editor-container'>
            <div className='toolbar'>
            <div className='editor-title'>
            <FontAwesomeIcon icon={faPager} />
                <h1>Previewer</h1> 
            </div>
            <FontAwesomeIcon className='arrows-icon' icon={faArrowsAlt} />
            </div>
            <div className='previewer editor' dangerouslySetInnerHTML={{__html: this.state.htmlOutput}}>
            </div>
            </div>
          </div>
        </div>
      );
  }

}

export default App;
