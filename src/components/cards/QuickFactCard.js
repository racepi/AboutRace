import React from "react"
import styled from 'styled-components';
  
import Card from '../Card';

import Description from './Description';

const Container = styled(Card)`
`

const Title = styled.h4`
`

export class QuickFactCard extends React.Component {
  render() {
    const { data } = this.props
    const quickfact = data
    const description = quickfact.field_quickfact.processed

    return (
      <Container
        type="QuickFact" 
        slug="quickfact"
        title={quickfact.title} 
        changed={quickfact.changed} 
      >
        <Title>{quickfact.title}</Title>
        <Description>{description}</Description>
      </Container>
    )
  }
}

export default QuickFactCard;
