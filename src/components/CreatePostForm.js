import React from 'react';
import { reduxForm, Field } from 'redux-form';

const CreatePostForm = ({handleSubmit}) => {
  
    const { handleSubmit } = props;

    return (
      <div>
          <h1>Add Post</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Post Title</label>
            <Field name="title" placeholder="Title" component="input" 
            type="text" />
            <label htmlFor="text">Post Text</label>
            <Field name="text" placeholder="Text" component="input" 
            type="text" />
            
            <input type="submit" value="Add Post" />
          </form>
        </div>
    )
  
}

CreatePostForm = reduxForm ({
  form: 'post',
  destroyOnUnmount: false,
}) (CreatePostForm)

export default CreatePostForm;

