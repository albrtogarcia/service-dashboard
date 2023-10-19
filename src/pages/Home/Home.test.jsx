import { describe, expect, it } from 'vitest'
import { Home } from './Home'

describe('Home', () => {
  it('matches snapshot', () => {
    const element = Home()
    expect(element).toMatchSnapshot()
  })
})
