import React, { useState } from 'react';
import BedIcon from '@mui/icons-material/Bed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import './Herosearch.css';
import { Button } from '@mui/material';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

export const HeroSearch = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openPersonOptions, setOpenPersonOptions] = useState(false);
  const [personOptions, setPersonOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setPersonOptions(prev => {
      return {
        ...prev, [name]: operation === "i" ? personOptions[name] + 1 : personOptions[name] - 1
      }
    })
  };

  return (
    <div className='heroSearch'>
      <div className="heroSearchItem">
        <BedIcon />
        <input type="text"
          placeholder='Where are you going?'
          className='headerSearchInput' />
      </div>
      <div className="heroSearchItem">
        <CalendarMonthIcon />
        <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "dd/mm/yyyy")}-${format(date[0].endDate, "dd/mm/yyyy")}`}</span>
        {openDate && <DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className='date'
        />}
      </div>
      <div className="heroSearchItem">
        <PersonIcon />
        <span className='headerSearchText' onClick={() => setOpenPersonOptions(!openPersonOptions)}>{`${personOptions.adult} adults . ${personOptions.children} chidlren . ${personOptions.room} rooms`}</span>
        {openPersonOptions && <div className="options">
          <div className="optionItem">
            <span className="optionText">Adult</span>
            <div className="optionContainer">
              <Button disabled={personOptions.adult <=1} variant="text" onClick={() => handleOption("adult", "d")}>-</Button>
              <span className='counterNumber'>{`${personOptions.adult}`}</span>
              <Button variant="text" onClick={() => handleOption("adult", "i")}>+</Button>
            </div>
          </div>
          <div className="optionItem">
            <span className="optionText">Children</span>
            <div className="optionContainer">
              <Button disabled={personOptions.children <=0} variant="text" onClick={() => handleOption("children", "d")}>-</Button>
              <span className='counterNumber'>{`${personOptions.children}`}</span>
              <Button variant="text" onClick={() => handleOption("children", "i")}>+</Button>
            </div>
          </div>
          <div className="optionItem">
            <span className="optionText">Room</span>
            <div className="optionContainer">
              <Button disabled={personOptions.room <=1} variant="text" onClick={() => handleOption("room", "d")}>-</Button>
              <span className='counterNumber'>{`${personOptions.room}`}</span>
              <Button variant="text" onClick={() => handleOption("room", "i")}>+</Button>
            </div>
          </div>
        </div>}
      </div>
      <div className="heroSearchItem">
        <Button variant="contained">Search</Button>
      </div>
    </div>
  )
}
