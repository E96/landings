import React from 'react'
import { render } from 'react-dom'

import 'components/banner/banner.css'
import 'components/creeping_line/creeping_line.css'
import 'components/header/header.css'
import 'components/layout/layout'
import 'components/button/button.css'
import 'components/form/form.css'
import 'components/link/link.css'
import 'components/marquee/marquee.css'
import 'components/sign_up/sign_up.css'
import 'components/stripe/stripe.css'
import 'components/text/text.css'
import 'components/tile/tile.css'
import 'components/triangle/triangle.css'

import Countdown from 'components/countdown/countdown'

import { START_DATE } from 'constants'

// Countdown.
const countdownNode = document.querySelector('._countdown')
render(<Countdown bang={START_DATE} />, countdownNode)
