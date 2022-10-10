
import Link from 'next/link'
import { Card, FlexContainer } from './Cards.css'

const Cards = () => {
  return (
    <FlexContainer>
      <Link href="/expanding-cards">
        <Card>
          Expanding Cards
        </Card>
      </Link>
    </FlexContainer>
  );
}

export default Cards
