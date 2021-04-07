'use strict'

class ResetPassoword {
  get rules () {
    return {
      token: 'required',
      'password': 'required|confirmed'
    }
  }
}

module.exports = ResetPassoword
