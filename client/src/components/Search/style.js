import styled from "styled-components";

export const SearchContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  position: relative;

`

export const SearchContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px 50px 0px;
`

export const HeaderSearch = styled.div`
  height: 30px;
  background-color: white;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 25px 0px;
  border-radius: 5px;
  position: absolute;
  bottom: -60px;
  width: 100%;
  max-width: 1024px;
`

export const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ButtonLogin = styled.button` 
  display: block;
  background-color: var(--primary);
  color: var(--white);
  font-weight: 500;
  border: 1px solid transparent;
  padding: 15px;
  width: 150px;
  /* margin: 15px auto 0; */
  cursor: pointer;
`