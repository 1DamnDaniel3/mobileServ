const { Users } = require('../db');

class UserServices{

    async getUserByEmail(email){

        return await Users.findOne({
            where: {email}
        })

    }

}

module.exports = new UserServices;
