export const formatDial = (num, pad = '00') => {
  const numStr = String(Math.floor(num))
  const dial = pad.substring(0, pad.length - numStr.length) + numStr
  return dial
}

export const parseMillis = (ms) => {
  let x = ms / 1000
  const second = x % 60
  x /= 60
  const minute = x % 60
  x /= 60
  const hour = x % 24
  x /= 24
  const day = x

  return { day, hour, minute, second }
}
