import { useState } from 'react'
import PropTypes from 'prop-types'
//components
import AccordionItem from './AccordionItem'
import Paragraph from '@/components/Paragraph'
//styles
import { AccordionSection } from './Accordion.styles'

function Accordion({ items }) {
  const [isOpened, setIsOpened] = useState('')

  const toggle = (id) => {
    id === isOpened ? setIsOpened('') : setIsOpened(id)
  }

  return (
    <AccordionSection>
      {items &&
        items.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            handleClick={toggle}
            isOpened={isOpened}
          >
            <Paragraph description={item.content} />
          </AccordionItem>
        ))}
    </AccordionSection>
  )
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(AccordionItem.propTypes.item),
}

export default Accordion
