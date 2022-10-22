import { useState } from 'react';
import {
  Container,
  ProgressContainer,
  Progress,
  Circle,
  StyledButton,
  ButtonsRow,
} from '../styles/projectStyles/progressSteps.css';

const ProgressSteps = () => {
  const [currentActive, setCurrentActive] = useState(1)
  
  const handleNextButtonClick = () => {
    if (currentActive < 4) {
      setCurrentActive(currentActive + 1)
    }
  }
  
  const handlePrevButtonClick = () => {
    if (currentActive > 1) {
      setCurrentActive(currentActive - 1);
    }
  };
  
  const calculateWidthPercent = () => {
    if (currentActive === 1) {
      return '0'
    } else if (currentActive === 2) {
      return '33%'
    } else if (currentActive === 3) {
      return '66%'
    } else if (currentActive === 4) {
      return '100%'
    }
  }

  return (
    <Container>
      <ProgressContainer>
        <Progress id="progress" widthPercent={calculateWidthPercent()} />
        <Circle isActive={currentActive > 0}>1</Circle>
        <Circle isActive={currentActive > 1}>2</Circle>
        <Circle isActive={currentActive > 2}>3</Circle>
        <Circle isActive={currentActive > 3}>4</Circle>
      </ProgressContainer>
      <ButtonsRow>
        <StyledButton id="pref" isActive={true} onClick={handlePrevButtonClick} disabled={currentActive === 1}>
          Prev
        </StyledButton>
        <StyledButton id="next" isActive onClick={handleNextButtonClick} disabled={currentActive === 4}>
          Next
        </StyledButton>
      </ButtonsRow>
    </Container>
  );
};

export default ProgressSteps;
