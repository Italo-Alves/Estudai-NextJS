import { useEffect, useState } from 'react'

import * as FaIcons from 'react-icons/fa'

import { Button } from './styles'

const ButtonTop: React.FC = () => {
  useEffect(() => {
    const button = document.getElementById('buttonTop')
    const rootElement = document.documentElement
    const target = document.querySelector('footer')

    function callback(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          button?.classList.add('show')
        } else {
          button?.classList.remove('show')
        }
      })
    }

    function scrollToTop() {
      rootElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    button?.addEventListener('click', scrollToTop)

    let observer = new IntersectionObserver(callback)

    target && observer.observe(target)
  }, [])

  return (
    <Button id="buttonTop">
      <FaIcons.FaAngleUp />
    </Button>
  )
}

export default ButtonTop
