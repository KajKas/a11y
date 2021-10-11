import React from "react";
import styled from "styled-components";

import {TopicCard} from "./TopicCard/TopicCard";

import travel4 from '../../../assets/travel4.jpg'
import travel5 from '../../../assets/travel5.jpg'
import travel6 from '../../../assets/travel6.jpg'
import travel7 from '../../../assets/travel7.jpg'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Content = styled.div`
  display: flex;
`;

export const Topics = () => {
  const topicsList = [
    {image: travel4, alt: 'a house', title: 'Renting Vacation Homes'},
    {image: travel5, alt: 'some chart', title: 'Trends & Predictions'},
    {image: travel6, alt: 'eiffel tower or something', title: 'Popular Travel Destinations for 2021'},
    {image: travel7, alt: 'a backpack', title: 'Travel Gear for Safe Travels in 2021'}
  ];

  return (
    <Wrapper>
      <Content>
        {topicsList.map(({image, alt, title}) => (
          <TopicCard image={image} alt={alt} title={title}/>
        ))}
      </Content>
    </Wrapper>
  )
}