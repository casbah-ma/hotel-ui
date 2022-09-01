import { useBreakpoint } from '@/hooks'
import { useState } from 'react'
import { DayPickerRangeController } from 'react-dates'

// DatePicker component
const DatePicker = function ({ dates, onDatesChange }) {
  const defaultFocusedInput = 'startDate'
  const [focusedInput, setFocusedInput] = useState(null)
  const bp = useBreakpoint()

  const onFocusChange = (focusedInput) => {
    setFocusedInput(focusedInput)
  }
  return (
    <DayPickerRangeController
      startDate={dates.startDate}
      endDate={dates.endDate}
      onDatesChange={onDatesChange}
      focusedInput={focusedInput || defaultFocusedInput}
      onFocusChange={onFocusChange}
      numberOfMonths={bp === 'sm' || bp === 'xs' ? 1 : 2}
      verticalHeight={bp === 'sm' || bp === 'xs' ? 190 : 300}
    />
  )
}

export default DatePicker
