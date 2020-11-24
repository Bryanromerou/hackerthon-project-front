import axios from 'axios';

const endPoint = 'https://localhost:3001/posts';

class PostModel {
  static all = () => {
    let request = axios.get(endPoint)
    return request;
  }

  static create = (post) => {
    let request = axios.post(endPoint, post)
    return request;
  }

  static delete = (post) => {
    let request = axios.delete(`${endPoint}/${post._id}`)
    return request;
  }

  static update = (post) => {
    let request = axios.put(`${endPoint}/${post._id}`, post)
    return request;
  }
}

export default PostModel;