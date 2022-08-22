import PropTypes from 'prop-types'
//styles
import { ArrowIcon, ItemContent, Item, ItemName } from './AccordionItem.styles'
//icons
import { ChevronDownIcon } from '@heroicons/react/solid'

function AccordionItem({ item, isOpened, handleClick, children }) {
  const { name, id } = item
  const expanded = !!(isOpened === id)
  return (
    <Item data-testid="accordion-item">
      <ItemName
        isOpened={expanded}
        aria-label="toggle-button"
        aria-expanded={expanded}
        aria-controls={`content-${id}`}
        onClick={() => handleClick(id)}
      >
        <p>{name}</p>
        <ArrowIcon>
          <ChevronDownIcon />
        </ArrowIcon>
      </ItemName>
      <ItemContent
        id={`content-${id}`}
        data-testid="accordion-item-content"
        isOpened={expanded}
      >
        {children}
      </ItemContent>
    </Item>
  )
}

AccordionItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  handleClick: PropTypes.func,
  isOpened: PropTypes.string.isRequired,
}

export default AccordionItem
