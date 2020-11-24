import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

class Profile extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      replies: [],
      limitTo = 5
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    Post.all().then((res) => {
      this.setState ({
        posts: res.data.posts
      })
    })
    Reply.all().then((res) => {
      this.setState ({
        posts: res.data.replies
      })
    })
  }

  onLoadMore() {
    this.setState({
      limitTo: this.state.limitTo + 5
    })
  }
  

  render() {

    const { user, isAuthenticated } = useAuth0();

    const postCount = this.state.posts.length;
    const repliesCount = this.state.replies.length;

    const postsList = posts.slice(0, this.state.limitTo).map((post, index) => {
      return <li key={index}>{post}</li>
    })


    return (
      isAuthenticated && ( 
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button type="submit">Edit Profile</button>
          <JSONPretty data={user} />
          {/* {JSON.stringify(user, null, 2)} */}
          <h2>Recent Activities</h2>
          <div>
            <h5>{postCount} Posts</h5>
          </div>
          <div>
            <h5>{repliesCount} Replies</h5>
          </div>
          <ul>
          {postsList}
          </ul>
          <h2 onClick={this.onLoadMore}>See All</h2>
          <h5>Customize Feed</h5>
          <span><h5>General</h5>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </span>
        </div>
      )
    )
  } 
}

export default Profile