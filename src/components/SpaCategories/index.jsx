import PropTypes from 'prop-types'
//components
import Paragraph from '@/components/Paragraph'
import FilterBar from '@/components/FilterBar'
import RoomCard from '@/components/Cards/RoomCard'
import Header from '@/components/Header'
import Button from '@/components/Button'
import Swiper from '@/components/Swipers/Swiper'
import { SwiperSlide } from 'swiper/react'
//styles
import { Container } from './SpaCategories.styles'
//helpers
import { isEmpty } from '@/helpers/utils'
import { useState } from 'react'

function SpaCategories({
  headerProps,
  categories,
  bgColor,
  actionProps,
  link,
}) {
  //handle active category
  const [active, setActive] = useState('All')
  const handleActive = (category) => {
    setActive(category)
  }
  //function to get all types and how many rooms they have
  const getTypes = (categories) => {
    categories.length
    const types = []
    categories.forEach((category) => {
      let index = types.findIndex(
        (_category) => _category.type === category.type
      )
      if (index === -1) {
        //add the category if doesn't exist
        types.push({ type: category.type, quantity: 1 })
      } else {
        //increase the quantity if it does exist
        types[index].quantity = types[index].quantity + 1
      }
    })
    types.unshift({ type: 'All', quantity: categories.length })
    return types
  }

  //filter
  const filteredCategories = categories.filter((category) =>
    active === 'All' ? true : category.type === active
  )
  return (
    <Container>
      <Header {...headerProps} />
      <FilterBar
        active={active}
        handleActive={handleActive}
        categories={getTypes(categories)}
        variant="v1"
      />
      <Swiper type="card">
        {!isEmpty(filteredCategories) &&
          filteredCategories.map((category, index) => (
            <SwiperSlide key={index} className="md:w-[25rem]">
              <RoomCard
                actionProps={actionProps}
                title={category.name}
                subtitle={category.subtitle}
                href={category.href}
                link={link}
                variant="v1"
                bgColor={bgColor}
              >
                <Paragraph fontSize="sm" description={category.description} />
              </RoomCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}

SpaCategories.propTypes = {
  headerProps: PropTypes.shape(Header.propTypes),
  actionProps: PropTypes.shape(Button.prototype),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      subtitle: PropTypes.string,
    })
  ),
}

export default SpaCategories
