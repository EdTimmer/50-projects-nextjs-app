import { useState } from 'react';
import styled from 'styled-components';
import Panel from '../components/ExpandingCardsComponents/Panel';

export const ExpandingCardsContainer = styled.div`
  display: flex;
  width: 90vw;
`;

const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const panels = [
    {
      img: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      title: 'Explore The World',
    },
    {
      img: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      title: 'Wild Forest',
    },
    {
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
      title: 'Sunny Beach',
    },
    {
      img: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      title: 'City on Winter',
    },
    {
      img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      title: 'Mountains - Clouds',
    },
  ];

  return (
    <ExpandingCardsContainer>
      {panels.map((panel, index) => {
        return (
          <Panel
            background={panel.img}
            title={panel.title}
            key={index}
            isActive={activeIndex === index}
            handleClick={handleClick}
            index={index}
          />
        );
      })}
    </ExpandingCardsContainer>
  );
};

export default ExpandingCards;
