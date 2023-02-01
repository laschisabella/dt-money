import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.form`

  display: flex;
  flex-direction: column;

  button.closeModal {
    border: 0;
    align-self: flex-end;
    background: transparent;

    transition: all 0.2s;

    &:hover{
      filter: brightness(0.5);
    }
  }

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
      color: var(--text-body);
    }

    & + input { // every input excluding first one
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width:100%;
    padding: 0 1.5rem;
    height: 4rem;

    background: var(--green);
    color: #fff;

    border-radius: 0.25rem;
    border: 0;

    font-size: 1rem;
    margin-top: 1.5rem;

    transition: all 0.2s;
    
    &:hover{
      filter:brightness(1.1);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  display: flex;
  padding: 1rem 0;
  gap:10px;
`

interface RadioBoxProps {
  isActive: boolean
  activeColor: string
}

const colors = {
  green: '#33CC95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 100%;
  padding: 1rem;
  font-size: 1rem;

  background: ${({ isActive, activeColor }) => isActive ? lighten(0.38, activeColor) : 'transparent'};
  
  border: ${({ isActive }) => isActive ? '0' : '1px solid #d7d7d7'};
  border-radius: 0.25rem;

  transition: all 0.2s;

  &:hover{
    border-color: ${darken(0.2, '#d7d7d7')} ;
  }

  img{
    width: 25px;
  }

`