import styled from 'styled-components'

export const SectionIntroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  > div{
    display: flex;
    flex-direction: column;
    gap: 4.12rem;

    max-width: 36.75rem; 
    > div:first-child{
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h1{
        color: ${(props) => props.theme['base-title']};

        font-size: 3rem;
        font-family: 'Baloo 2';
        font-weight: 800;
        line-height: 130%;
      }

      p{
        color: ${(props) => props.theme['base-subtitle']};

        font-size: 1.25rem;
        line-height: 130%;
      }
    }

    > div:last-child{
      display: flex;
      flex-wrap: wrap;
      gap: 1.25rem 2rem;

      width: 100%;

      > span{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;

        span{
          display: flex;
          justify-content: center;
          align-items: center;

          background-color: red;

          padding: 0.5rem;
          border-radius: 100%;
        }
      }
    }
  }
`