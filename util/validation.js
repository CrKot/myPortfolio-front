import { isLength } from 'validator'
import regexMap from './regexMap'

export const name = {
  validateLength(name) {
    return isLength(name, { min: 3, max: 10 })
  },
}

export const password = {
  validateLength(password) {
    return isLength(password, { min: 5, max: 16 })
  },
}

export const email = {
  validateFormat(email) {
    return regexMap.email.test(email)
  },
}

export const phoneNumber = {
  validateFormat(phoneNumber) {
    return regexMap.phoneNumber.test(phoneNumber)
  },
}
