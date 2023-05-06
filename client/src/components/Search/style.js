import styled from 'styled-components'

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

  svg.headerIcon {
    color: lightgray;
  }

  input.headerSearchInput {
    border: none;
    outline: none;
  }

  span.headerSearchText {
    color: lightgray;
    cursor: pointer;
  }

  .date {
    position: absolute;
    top: 55px;
    right: 385px;
    z-index: 2;
  }
`

export const Options = styled.div`
  z-index: 2;
  position: absolute;
  top: 50px;
  background-color: white;
  color: gray;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
`

export const OptionItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`

export const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
`

export const OptionCounterButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #0071c2;
  color: #0071c2;
  cursor: pointer;
  background-color: white;

  &.optionCounterButton:disabled {
    cursor: not-allowed;
  }
`

export const ButtonBuscar = styled.button`
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
