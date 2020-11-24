import React from 'react';

const CommunityFeed = (props) => {

  const discussionList = props.list.map((item, index) => {
    return <li key={index}>{item}</li>
  }) 

    return (
      <div>
        <h2>Trending Discussions in </h2>
        <ol>
          {discussionList}
        </ol>
        <h2>Top Discussions</h2>
      </div>
    )
}

export default CommunityFeed;