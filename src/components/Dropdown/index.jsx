import { isEmpty } from '@/helpers/utils'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'
import { Fragment, useState } from 'react'
import Label from '@/components/Label'
import { List, ListItem, ToggleButton } from './Dropdown.styles'
import Link from '@/components/Link'
import { useRouter } from 'next/router'

function Dropdown({ languages, defaultLanguage }) {
  const router = useRouter()
  const { query, asPath } = router
  // Detect current language
  const slug = asPath.split('/')[1]
  const langSlug = languages.includes(slug) && slug
  const language = query.lang || langSlug || defaultLanguage
  const [activeLanguage, setActiveLanguage] = useState(language)

  return (
    <Menu as="div" className="menu">
      {({ open }) => (
        <>
          <Menu.Button>
            {!isEmpty(languages) && (
              <Label labelText={activeLanguage.toUpperCase()} fontSize="sm" />
            )}
            <ToggleButton open={open}>
              <ChevronDownIcon />
            </ToggleButton>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="enter"
            enterFrom="enter-from"
            enterTo="enter-to"
            leave="leave"
            leaveFrom="leave-from"
            leaveTo="leave-to"
          >
            <Menu.Items>
              <List>
                {!isEmpty(languages) &&
                  languages.map((item) => (
                    <Link
                      locale={item.toLowerCase()}
                      languages={languages}
                      defaultLanguage={defaultLanguage}
                      key={item}
                    >
                      <Menu.Item>
                        {({ active }) => (
                          <ListItem
                            active={active}
                            onClick={() => setActiveLanguage(item)}
                          >
                            <Label
                              labelText={item.toUpperCase()}
                              fontSize="sm"
                            />
                          </ListItem>
                        )}
                      </Menu.Item>
                    </Link>
                  ))}
              </List>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

Dropdown.propTypes = {
  languages: PropTypes.array.isRequired,
}

export default Dropdown
