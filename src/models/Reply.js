import axios from 'axios';

const endPoint = 'https://localhost:3001/posts';

class ReplyModel {
  static all = () => {
    let request = axios.get(endPoint)
    return request;
  }

  static create = (post) => {
    let request = axios.get(endPoint, post)
    return request;
  }

  static delete = (post) => {
    let request = axios.get(`${endPoint}/${post._id}`)
    return request;
  }

  static update = (post) => {
    let request = axios.get(`${endPoint}/${post._id}`, post)
    return request;
  }
}

export default ReplyModel;