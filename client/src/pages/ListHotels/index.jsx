import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/SearchItem'
import { Button } from '../../components/Button'
import {
  LabelSearched,
  ListContainer,
  ListOptionText,
  ListResult,
  ListSearch,
  ListWrapper,
  LsItem,
  LsOptionInput,
  LsOptionItem,
  LsOptions,
  LsTitle,
  SpanOption,
  SpanSearched
} from './style'

export function ListHotels() {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <ListContainer>
      <ListWrapper>
        <ListSearch>
          <LsTitle>Buscar</LsTitle>
          <LsItem>
            <LabelSearched>Destino</LabelSearched>
            <input placeholder={destination} type="text" />
          </LsItem>
          <lsItem>
            <LabelSearched>Check-in em:</LabelSearched>
            <SpanSearched onClick={() => setOpenDate(!openDate)}>
              {`${format(date[0].startDate, 'dd/MM/yyyy')} à ${format(
                date[0].endDate,
                'dd/MM/yyyy'
              )}`}
            </SpanSearched>
            {openDate && (
              <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />
            )}
          </lsItem>
          <lsItem>
            <SpanOption>Opções</SpanOption>
            <LsOptions>
              <LsOptionItem>
                <ListOptionText>Adulto</ListOptionText>
                <LsOptionInput
                  type="number"
                  min={1}
                  placeholder={options.adult}
                />
              </LsOptionItem>
              <LsOptionItem>
                <ListOptionText>Criança</ListOptionText>
                <LsOptionInput
                  type="number"
                  min={0}
                  placeholder={options.children}
                />
              </LsOptionItem>
              <LsOptionItem>
                <ListOptionText>Quarto</ListOptionText>
                <LsOptionInput
                  type="number"
                  min={1}
                  placeholder={options.room}
                />
              </LsOptionItem>
            </LsOptions>
          </lsItem>
          <Button>Buscar</Button>
          
        </ListSearch>
        <ListResult>
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </ListResult>
      </ListWrapper>
    </ListContainer>
  )
}
