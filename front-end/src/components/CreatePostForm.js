import React from 'react';
// import { reduxForm, Field } from 'redux-form';

class CreatePostForm extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      text: ''
    }
  }
  
  handleFormSubmit = (e) => {
    e.preventDefault()

    

    let post = {
      text: this.state.text
    }

    this.props.createPost(post);

    this.setState({ text: '' });

    // this.props.history.push('/feed');

  }
    // const { handleSubmit } = props;
    render() {
      return (
        <div>
            
            <select name="topics" id="topics">
              <option value="covid-19">COVID-19</option>
              <option value="general">General</option>
              <option value="health">Health</option>
              <option value="weather">Weather</option>
              <option value="stress">Stress</option>
              <option value="safety">Safety</option>
            </select>
            <h5>What's on your mind?</h5>
  
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="text">Post Text</label>
              <input name="text" placeholder="Text" component="input" 
              type="text" />
              <input type="submit" value="Add Post" />
            </form>
          </div>
      )
    }
}

export default CreatePostForm;