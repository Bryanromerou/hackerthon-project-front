import React from 'react';
import { Container, Button, Link } from 'react-floating-action-button'


const CommunityFeed = (props) => {

  const discussionList = props.listTwo.map((itemTwo, index) => {
    return <li key={index}>{itemTwo}</li>
  }) 

    return (
      <div>
        <h2>Top Discussions</h2>
        {discussionList}
        <Container>
          <Button
          tooltip="Create new discussion"
          icon="far fa-edit" 
          styles={{backgroundColor:darkColors.lighterRed}}
          />
        </Container>
      </div>
    )
}

export default CommunityFeed;