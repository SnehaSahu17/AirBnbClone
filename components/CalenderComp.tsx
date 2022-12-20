import React, { use, useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

function CalenderComp() {
    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());

    const handleSelect = (ranges) => {
        setstartDate(ranges.Selection.startDate);
        setendDate(ranges.Selection.endDate);
    }

    const selectionRange = {
        startDate : startDate,
        endDate : endDate,
        key:'Selection'
    }
  return (
    <div>
        <DateRangePicker ranges={[selectionRange]} minDate={new Date()} rangeColors={["#f56565"]} onChange={handleSelect}/>
    </div>
  )
}

export default CalenderComp