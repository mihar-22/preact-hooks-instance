/** @jsx h */

import { h } from 'preact'
import { render } from '@testing-library/preact'

import useInstance from '..'

// @from https://github.com/donavon/use-instance/blob/master/__tests__/index.test.js
describe('useInstance', () => {
  it('should default to an empty object given no parameters', () => {
    let self

    function Comp () {
      self = useInstance()
    }

    render(<Comp />)

    expect(self).toEqual({})
  })

  it('should return optional object given one', () => {
    let self

    function Comp () {
      self = useInstance({ foo: 'foo' })
    }

    render(<Comp />)

    expect(self).toEqual({ foo: 'foo' })
  })

  it('should return object given a "lazy" initialization function`', () => {
    let self

    function Comp () {
      self = useInstance(() => ({ foo: 'foo' }))
    }

    render(<Comp />)

    expect(self).toEqual({ foo: 'foo' })
  })

  it('should return the same instance object for every render`', () => {
    let self

    function Comp () {
      self = useInstance()
    }

    const { rerender } = render(<Comp />)

    const symbol = Symbol('')
    self.symbol = symbol

    rerender()

    expect(self).toEqual({ symbol })
  })

  it('should return the same instance object for every render given a function`', () => {
    let self

    const symbol = Symbol('')

    function Comp () {
      self = useInstance(() => ({
        symbol
      }))
    }

    const { rerender } = render(<Comp />)

    rerender()

    expect(self).toEqual({ symbol })
  })
})
