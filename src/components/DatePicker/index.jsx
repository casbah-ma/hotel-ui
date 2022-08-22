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
      numberOfMonths={2}
      orientation={bp === 'sm' ? 'vertical' : 'horizontal'}
      verticalHeight={280}
    />
  )
}

export default DatePicker
