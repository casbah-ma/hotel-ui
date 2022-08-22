import PropTypes from 'prop-types'
//component
import Service from './Service'
//styles
import { Grid } from './ServicesGrid.styles'
//helpers
import { isEmpty } from '@/helpers/utils'

//icons
import { PlusIcon } from '@heroicons/react/solid'

function ServicesGrid({ services, circleBg }) {
  return (
    <Grid>
      {!isEmpty(services) &&
        services.map((service) => (
          <Service
            key={service.serviceName}
            serviceName={service.serviceName}
            circleBg={circleBg}
            Icon={service.Icon}
          />
        ))}
    </Grid>
  )
}

ServicesGrid.propTypes = {
  services: PropTypes.array.isRequired,
  circleBg: PropTypes.string,
}

export default ServicesGrid
