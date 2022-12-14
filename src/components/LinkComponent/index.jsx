import Link from 'next/link'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

function LinkComponent(props) {
  let { children, locale, languages, defaultLanguage, isLogo, ...rest } = props
  const router = useRouter()
  const { pathname, query, asPath } = router
  // Detect current language
  const slug = asPath.split('/')[1]
  const langSlug = languages.includes(slug) && slug
  const language = query.lang || langSlug || defaultLanguage
  //Detect page slug
  const langlocal = asPath.split('/')[1]

  let href = props.href || pathname

  if (locale) {
    if (props.href) {
      href = `/${locale}${href}`
    } else {
      if (pathname.startsWith('/404')) {
        href = `/${locale}`
      } else {
        href = asPath.replace(langlocal, locale)
      }
    }
  } else {
    if (language) {
      href = `/${language}${href}`
    } else {
      href = `/${href}`
    }
  }

  // Fix double slashes
  href = href.replace(/([^:]\/)\/+/g, '$1').replace('//', '/')
  return (
    <Link href={href} passHref>
      <a className={isLogo ? 'logo' : ''} {...rest}>
        {children}
      </a>
    </Link>
  )
}

LinkComponent.propTypes = {
  href: PropTypes.string,
  locale: PropTypes.string,
  defaultLanguage: PropTypes.string,
  languages: PropTypes.array,
}

export default LinkComponent
