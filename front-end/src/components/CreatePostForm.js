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
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Post Categories
      </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">COVID-19</a>
          <a class="dropdown-item" href="#">General</a>
          <a class="dropdown-item" href="#">Health</a>
          <a class="dropdown-item" href="#">Weather</a>
          <a class="dropdown-item" href="#">Stress</a>
          <a class="dropdown-item" href="#">Safety</a>
        </div>
        </div>
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