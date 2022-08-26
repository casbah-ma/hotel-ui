import PropTypes from 'prop-types'
//components
import Paragraph from '@/components/Paragraph'
//styles
import { FlexWrapper, IconCircle } from './Service.styles'
//hooks
import { useBreakpoint } from '@/hooks'
import { useEffect, useState } from 'react'

function Service({ serviceName, circleBg, Icon }) {
  const [width, setWidth] = useState('3.5rem')
  const bp = useBreakpoint()

  useEffect(() => {
    if (bp === 'lg') setWidth('3.5rem')
    if (bp === 'md') setWidth('2rem')
  }, [bp])
  return (
    <FlexWrapper data-testid="service">
      <IconCircle circleBg={circleBg}>
        <Icon width={width} />
      </IconCircle>
      <Paragraph description={serviceName} />
    </FlexWrapper>
  )
}

Service.propTypes = {
  serviceName: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  circleBg: PropTypes.string,
}

export default Service
