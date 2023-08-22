import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  padding: 2rem 10rem;

  h2{
    color: ${props => props.theme['base-subtitle']};

    margin-bottom: 3.375rem;

    font-family: 'Baloo 2';
    font-size: 2rem;
  }
`

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  border-radius: 6px 36px;

  background-color: ${props => props.theme['base-card']};

  > span:first-child{
    position: relative;
    bottom: 10px;
  }
`