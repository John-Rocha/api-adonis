'use strict'
const Databse = use('Database')
const User = use('App/Models/User')

class UserController {
  async store ({ request, view, response, auth }){
    const data = request.only(['username', 'email', 'password'])
    const addresses = request.input('addresses')

    const trx = await Databse.beginTransaction()

    const user = await User.create(data, trx)

    await user.addresses().createMany(addresses, trx)

    await trx.commit()
    return user
  }

  async update ({ request, params }) {
    const user = await User.findOrFail(params.id)
    const data = request.only(['username', 'email'])

    user.merge(data)
    await user.save()

    return user
  }
}

module.exports = UserController
