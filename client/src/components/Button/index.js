import styled from "styled-components";

export const Button = styled.button`
  width: 50%;
  height: 40px;
  margin: 20px 0 10px 0;
  background-color: var(--primary);
  border: var(--primary) 1px solid;
  border-radius: 6px;
  color: var(--white);
  font-size: 1rem;
  transition: all ease-in-out .2s;

  &:hover {
    background-color: var(--white);
    border: var(--primary) 1px solid;
    border-radius: 6px;
    color: var(--primary);
  }
`