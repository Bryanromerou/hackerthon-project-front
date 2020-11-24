import React from 'react';
import PostModel from '../models/Post';
import ReplyModel from '../models/Reply';
import CreatePostForm from '../components/CreatePostForm';
import { formValueSelector } from 'redux-form';

class PostsContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      replies: [],
      // limitTo = 5
    };
  };

  componentDidMount() {
    this.fetchData()
  };

  fetchData = () => {
    PostModel.all().then((res) => {
      this.setState ({
        posts: res.data.posts
      })
    })
    ReplyModel.all().then((res) => {
      this.setState ({
        posts: res.data.replies
      });
    });
  };

  // onLoadMore() {
  //   this.setState({
  //     limitTo: this.state.limitTo + 5
  //   });
  // };

  createPost = (post) => {

    const selector = formValueSelector('post');

    const values = selector(state, 'title', 'text');

    let newPost = {
      body: values
    };

    PostModel.create(newPost).then((res) => {
      let posts = this.state.posts;
      posts.push(res.data)
      this.setState({posts: posts})
    });
  };

  createReply = (reply) => {
    let newReply = {
      body: reply
    };

    ReplyModel.create(newReply).then((res) => {
      let replies = this.state.replies;
      replies.push(res.data)
      this.setState({replies: replies})
    });
  };
  
  deletePost = (post) => {
    PostModel.delete(post).then((res) => {
      let posts = this.state.posts.filter((post) => {
        return post._id !== res.data._id;
      });
      this.setState({posts})
    });
  };

  deleteReply = (reply) => {
    ReplyModel.delete(reply).then((res) => {
      let replies = this.state.replies.filter((post) => {
        return reply._id !== res.data._id;
      });
      this.setState({replies})
    });
  };

  updatePost = (post) => {
    const updatedPost = (item) => {
      return item._id ===  post._id
    };

    PostModel.update(post) 
    .then((res) => {
      let posts = this.state.posts;
      posts.find(updatedPost).body = post.body;
      this.setState({posts: posts})
    })
  };

  updateReply = (reply) => {
    const updatedReply = (item) => {
      return item._id ===  reply._id
    };

    PostModel.update(reply) 
    .then((res) => {
      let replies = this.state.replies;
      replies.find(updatedReply).body = reply.body;
      this.setState({replies: replies})
    })
  };

  render() {

    return (
      <div>
        <CreatePostForm onSubmit={this.submit} />
      </div>
    )
  } 
}

export default PostsContainer;