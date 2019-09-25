import { useRef } from 'preact/hooks'

// @from https://github.com/donavon/use-instance
export default (value = {}) => {
  const ref = useRef(null)

  if (!ref.current) {
    ref.current = typeof value === 'function' ? value() : value
  }

  return ref.current
}
