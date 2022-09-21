import { isValid, format } from 'date-fns'
const validYoutubeUrl = /^.*\.(mp4)$/

export const isEmpty = (any) => {
  if (!any) return true
  if (any === undefined) return true
  if (any === 'undefined') return true
  if (typeof any === 'undefined') return true
  if (any.length === 0) return true
  if (JSON.stringify(any) === '{}') return true
  return false
}

export const isEmail = (email) => {
  if (isEmpty(email)) return false
  if (
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    ) === false
  )
    return false // eslint-disable-line
  if (email.length > 50) return false
  return true
}

export const bookingUrl = (filters, baseUrl) => {
  return (
    baseUrl +
    'bv3/search?search=' +
    encodeURIComponent(
      JSON.stringify({
        ...filters,
        checkin_date:
          isValid(filters?.checkin_date?._d) &&
          format(filters?.checkin_date?._d, 'yyyy-MM-dd'),
        checkout_date:
          isValid(filters?.checkout_date?._d) &&
          format(filters?.checkout_date?._d, 'yyyy-MM-dd'),

        rooms: [
          {
            adult_count: filters.adult_count,
            guest_count: filters.adult_count + filters.child_count,
            child_count: filters.child_count,
            child_ages: new Array(filters.child_count),
          },
        ],
        guest_rooms: {
          0: {
            adult_count: filters.adult_count,
            guest_count: filters.adult_count + filters.child_count,
            child_count: filters.child_count,
            child_ages: new Array(filters.child_count),
          },
        },
      })
    )
  )
}

export const isYoutubeUrl = (url) => {
  if (isEmpty(url)) return false
  if (url.match(validYoutubeUrl)) return true
  return false
}

export const isVideoUrl = (url) => {
  if (isEmpty(url)) return false
  if (url.match(validYoutubeUrl)) return true
  return false
}

export const bookNow = (baseUrl) => {
  window.open(baseUrl, '_blank')
}
