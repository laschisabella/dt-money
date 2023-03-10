import styled from 'styled-components';

export const Container = styled.header`
  background: var(--purple);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color:#fff;
    background: var(--purple-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.1s;

    &:hover{
      filter: brightness(1.3)
    }
  }

  @media (max-width: 400px){
    button {
      padding: 0 0.8rem;
      height: 2rem;
    }
  }
`