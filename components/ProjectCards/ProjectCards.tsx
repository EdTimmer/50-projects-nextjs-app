import Link from 'next/link';
import { Card, FlexContainer } from './ProjectCards.css';

const ProjectCards = () => {
  return (
    <FlexContainer>
      <Link href="/expanding-cards">
        <Card>Expanding Cards</Card>
      </Link>
      <Link href="/progress-steps">
        <Card>Progress Steps</Card>
      </Link>
    </FlexContainer>
  );
};

export default ProjectCards;
