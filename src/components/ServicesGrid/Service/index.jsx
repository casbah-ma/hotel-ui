import PropTypes from 'prop-types'
//components
import Paragraph from '@/components/Paragraph'
//styles
import { FlexWrapper, IconWrapper, variants } from './Service.styles'
//hooks
import { useBreakpoint } from '@/hooks'
import { useEffect, useState } from 'react'

function Service({
  variant = 'v1',
  serviceName,
  bgColor = '#FDFDFD',
  iconColor,
  Icon,
}) {
  const [width, setWidth] = useState('3.5rem')
  const bp = useBreakpoint()

  useEffect(() => {
    if (bp === 'lg') setWidth('2rem')
    if (bp !== 'lg') setWidth('1.5rem')
  }, [bp])
  return (
    <FlexWrapper bgColor={bgColor} variant={variant} data-testid="service">
      {variant !== 'v2' && (
        <IconWrapper variant={variant} bgColor={bgColor}>
          <Icon color={iconColor} width={width}  />
        </IconWrapper>
      )}
      {variant === 'v2' && <Icon color={iconColor} width={width} />}
      <Paragraph description={serviceName} />
    </FlexWrapper>
  )
}

Service.propTypes = {
  serviceName: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  bgColor: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(variants)),
}

export default Service
