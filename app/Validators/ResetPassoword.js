'use strict'

const Antl = use('Antl')

class ResetPassoword {
  get rules () {
    return {
      token: 'required',
      'password': 'required|confirmed'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = ResetPassoword
