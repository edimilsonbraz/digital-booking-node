import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/SearchItem'
import './listHotels.css'

export function ListHotels() {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Buscar</h1>
          <div className="lsItem">
            <label>Destino</label>
            <input placeholder={destination} type="text" />
          </div>
          <div className="lsItem">
            <label>Check-in em:</label>
            <span onClick={() => setOpenDate(!openDate)}>{`${format(
              date[0].startDate,
              'MM/dd/yyyy'
            )} à ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
            {openDate && (
              <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />
            )}
          </div>
          <div className="lsItem">
            <label>Opções</label>
            <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Preço min <small>por noite</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Preço max <small>por noite</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adulto</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.adult}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Criança</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder={options.children}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Quarto</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.room}
                />
              </div>
            </div>
          </div>
          <button>Buscar</button>
        </div>
        <div className="listResult">
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </div>
      </div>
    </div>
  )
}
