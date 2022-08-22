import { isEmpty } from '@/helpers/utils'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
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
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button className="inline-flex justify-center gap-[0.8rem] bg-transparent">
            {!isEmpty(languages) && (
              <Label labelText={activeLanguage.toUpperCase()} fontSize="sm" />
            )}
            <ToggleButton open={open}>
              <ChevronDownIcon className="h-5 w-5 text-black" />
            </ToggleButton>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
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
