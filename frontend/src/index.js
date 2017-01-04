import React from 'react'
import { render } from 'react-dom'

import 'components/creeping_line/creeping_line.css'
import 'components/layout/layout'
import 'components/button/button.css'
import 'components/form/form.css'
import 'components/link/link.css'
import 'components/marquee/marquee.css'
import 'components/stripe/stripe.css'
import 'components/text/text.css'
import 'components/tile/tile.css'

import 'components/header_piece'
import 'components/countdown_piece/countdown_piece.css'
import 'components/sign_up_piece'
import 'components/banner_piece'
import 'components/desc_piece'
import 'components/parties_piece'
import 'components/take_part_piece'
import 'components/footer_piece'

import Countdown from 'components/countdown/countdown'
import TrianglesLayer from 'components/triangles_layer/triangles_layer'

import { START_DATE, TOP_LAYER_TRIANGLES } from 'constants'

// Disable hover on scroll.
let timer
const body = document.body
const noHoverClassName = 'root--body-no_hover'
window.addEventListener('scroll', () => {
  clearTimeout(timer)
  if (!body.classList.contains(noHoverClassName)) {
    body.classList.add(noHoverClassName)
  }
  timer = setTimeout(() => {
    body.classList.remove(noHoverClassName)
  }, 200)
}, false)

// Countdown.
const countdownNode = document.querySelector('._countdown')
render(<Countdown bang={START_DATE} />, countdownNode)
