import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 80px;
`

export const ListWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
`

export const ListSearch = styled.div`
  flex: 1;
  background-color: var(--light);
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
  height: max-content;
`

export const LsTitle = styled.div`
  font-size: 20px;
  color: var(--primary);
  margin-bottom: 10px;
`

export const LsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;

  input {
    height: 30px;
    border: none;
    padding: 5px;
  }
`

export const LabelSearched = styled.label`
  font-size: 12px;
`

export const SpanSearched = styled.span`
  height: 30px;
  padding: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const SpanOption = styled.span`
  display: block;
  color: var(--primary);
  font-size: 1.1rem;
  margin-top: 0.5rem;
`

export const LsOptions = styled.div`
  padding: 10px;
`

export const LsOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #555;
  font-size: 12px;
`

export const ListOptionText = styled.span`
  font-size: 0.875rem;
`

export const LsOptionInput = styled.input`
  width: 50px;
`
export const ListResult = styled.div` 
  flex: 3;
`