import React, {useState, useEffect} from 'react';
import PostModel from '../models/post';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';


const Profile = () => {
  const [post, setPost] = useState([])
  const [reply, setReply] = useState([])

  useEffect(() => {
    fetchData()

  });

  const fetchData = () => {
    PostModel.all().then((res) => {
      setPost ({
        posts: res.data.posts
      })
    })
    // ReplyModel.all().then((res) => {
    //   this.setState ({
    //     posts: res.data.replies
    //   });
    // });
  };

  const onLoadMore = () => {
    setPost ({
      limitTo: this.state.limitTo + 5
    });
  };

  const createPost = (post) => {
    let newPost = {
      body: post
    };

    PostModel.create(newPost).then((res) => {
      let posts = this.state.posts;
      posts.push(res.data)
      setPost({posts: posts})
    });
  };

  const deletePost = (post) => {
    PostModel.delete(post).then((res) => {
      let posts = this.state.posts.filter((post) => {
        return post._id !== res.data._id;
      });
      setPost({posts})
    });
  };

  const updatePost = (post) => {
    const updatedPost = (item) => {
      return item._id ===  post._id
    };

    PostModel.update(post) 
    .then((res) => {
      let posts = this.state.posts;
      posts.find(updatedPost).body = post.body;
      setPost({posts: posts})
    })
  };

    const { user, isAuthenticated } = useAuth0();

    const postCount = post.length;
    const repliesCount = reply.length;

    const postsList = post.map((item, index) => {
      return <li key={index}>{item}</li>
    })

    return (
      isAuthenticated && ( 
       <div className="container-fluid">
         <section className="profile-details">
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <JSONPretty data={user} />
         </section>
         <section className="profile-activity">
          <h2>Recent Activities</h2>
          <div>
              <h5>{postCount} Posts</h5>
            </div>
            <div>
            <h5>{repliesCount} Comments</h5>
          </div>
          <ul>
          {postsList}
          </ul>
          <h5>Customize Feed</h5>
          <span><p>Coronavirus</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </span>
          <span><p>General</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </span>
         </section>
          {/* {JSON.stringify(user, null, 2)} */}
        </div>
      )
    )
}

export default Profile