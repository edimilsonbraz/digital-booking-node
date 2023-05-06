import {
  faBed,
  faCalendarDays,
  faPerson
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DateRange } from 'react-date-range'
import { useState } from 'react'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { ButtonBuscar, HeaderSearch, HeaderSearchItem, OptionCounter, OptionCounterButton, OptionItem, Options, SearchContainer, SearchContent } from './style'

export const Search = ({ cities }) => {
  const [destination, setDestination] = useState('')
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  })

  const navigate = useNavigate()

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
      }
    })
  }

  const handleSearch = () => {
    navigate('/hotels', { state: { destination, date, options } })
  }

  return (
    <SearchContainer className="containerGlobal">
      <SearchContent>
        <HeaderSearch>
          <HeaderSearchItem>
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Para onde está indo?"
              className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value)}
            />
          </HeaderSearchItem>
          <HeaderSearchItem>
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              {`${format(date[0].startDate, 'dd/MM/yyyy')} até ${format(
                date[0].endDate,
                'dd/MM/yyyy'
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </HeaderSearchItem>
          <HeaderSearchItem>
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >
              {`${options.adult} adulto · ${options.children} criança · ${options.room} quarto`}
            </span>
            {openOptions && (
              <Options>
                <OptionItem>
                  <span className="optionText">Adulto</span>
                  <OptionCounter>
                    <OptionCounterButton
                      disabled={options.adult <= 1}
                      onClick={() => handleOption('adult', 'd')}
                    >
                      -
                    </OptionCounterButton>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <OptionCounterButton 
                      onClick={() => handleOption('adult', 'i')}
                    >
                      +
                    </OptionCounterButton>
                  </OptionCounter>
                </OptionItem>
                <OptionItem>
                  <span className="optionText">Criança</span>
                  <OptionCounter>
                    <OptionCounterButton
                      disabled={options.children <= 0}
                      onClick={() => handleOption('children', 'd')}
                    >
                      -
                    </OptionCounterButton>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <OptionCounterButton
                      onClick={() => handleOption('children', 'i')}
                    >
                      +
                    </OptionCounterButton>
                  </OptionCounter>
                </OptionItem>
                <OptionItem>
                  <span className="optionText">Quarto</span>
                  <OptionCounter>
                    <OptionCounterButton                      
                      disabled={options.room <= 1}
                      onClick={() => handleOption('room', 'd')}
                    >
                      -
                    </OptionCounterButton>
                    <span className="optionCounterNumber">{options.room}</span>
                    <OptionCounterButton
                      onClick={() => handleOption('room', 'i')}
                    >
                      +
                    </OptionCounterButton>
                  </OptionCounter>
                </OptionItem>
              </Options>
            )}
          </HeaderSearchItem>
          <HeaderSearchItem>
            <ButtonBuscar onClick={handleSearch}>
              Buscar
            </ButtonBuscar>
          </HeaderSearchItem>
        </HeaderSearch>
      </SearchContent>
    </SearchContainer>
  )
}
