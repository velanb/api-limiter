const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let secret = 'password';

class Utils {
  static async hashPassword(password) {
    let saltRounds = 6;
    let hash = await bcrypt.hash(password, saltRounds);
    return hash;
  }

  static async verifyPassord(password, hash) {
    let status = await bcrypt.compare(password, hash);
    return status;
  }

  static async generateJWT(payload) {
    try {
      let token = await jwt.sign(payload, secret);
      return token;
    } catch (error) {
      throw error
    }
  }

  static async verifyJWT(token) {
    try {
      let status = await jwt.verify(token, secret);
      return status;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Utils