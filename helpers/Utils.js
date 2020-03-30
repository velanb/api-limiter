const bcrypt = require('bcrypt');

class Utils {
  static async hashPassword(password) {
    let hash = await bcrypt.hash(password, 16);
    return hash;
  }

  static async verifyPassord(hash, password) {
    let status = await bcrypt.compare(hash, password);
    return status;
  }
}

module.exports = Utils