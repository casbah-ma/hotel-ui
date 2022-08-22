const { useState, useEffect } = require('react')

const useScrollDirection = () => {
  const [y, setY] = useState(null)
  const [scrollDirection, setScrollDirection] = useState('')

  useEffect(() => {
    setY(window.scrollY)
    const handleScroll = () => {
      if (y > window.scrollY) {
        setScrollDirection('up')
      } else if (y < window.scrollY) {
        setScrollDirection('down')
      }
      setY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [y])
  return scrollDirection
}

export default useScrollDirection
