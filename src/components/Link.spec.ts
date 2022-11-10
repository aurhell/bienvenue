import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Link from './Link.vue'

describe('Link', () => {
  it('renders properly', () => {
    const wrapper = mount(Link, {
      props: { url: 'https://github.com/aurhell' },
      slots: {
        default: 'Aurhell github',
      },
    })
    expect(wrapper.props('url')).toBe('https://github.com/aurhell')
    expect(wrapper.text()).toContain('Aurhell github')
  })
})
