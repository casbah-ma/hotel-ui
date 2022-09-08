import PropTypes from 'prop-types'
//component
import Service from './Service'
//styles
import { Grid, variants } from './ServicesGrid.styles'
//helpers
import { isEmpty } from '@/helpers/utils'

function ServicesGrid({ services, iconColor, bgColor, variant = 'v1' }) {
  return (
    <Grid variant={variant}>
      {!isEmpty(services) &&
        services.map((service) => (
          <Service
            key={service.serviceName}
            serviceName={service.serviceName}
            bgColor={bgColor}
            iconColor={iconColor}
            Icon={service.Icon}
            variant={variant}
          />
        ))}
    </Grid>
  )
}

ServicesGrid.propTypes = {
  services: PropTypes.array.isRequired,
  bgColor: PropTypes.string,
  iconColor: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(variants)),
}

export default ServicesGrid
