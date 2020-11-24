import React from 'react';
import { getFormValues } from 'redux-form';
import feedData from '../data/feedData';
import FeedCard from '../components/FeedCard';
import { Container, Button, Link } from 'react-floating-action-button'

const Feed = (props) => {

  const feedList = feedData.map((item,index) => {
    <FeedCard key={index} feed={item} />
  })

  return (
    <div>
      <h2>Your Feed</h2>
      {feedList}
      <Container>
            <Link href="/posts"
                icon="fas fa-pencil-alt" />
            <Button
                tooltip="Add new post"
                icon="fas fa-plus"
                rotate={true}
                onClick={() => alert('Add New Post')} />
        </Container>
    </div>
  )
}

export default Feed;