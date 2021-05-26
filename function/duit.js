const fs = require('fs');
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'));
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
/**
 * AADC DUIT
 * @param {string} serial

 **/
 const addATM = (serial) => {
            const obj = {id: serial, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        const addDuit = (serial, amount) => {
            var position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount;
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        /**
         * Ngurang Duit
         * @param {string} serial
         * @param {number} amount
         **/
        const removeDuit = (serial, amount) => {
            var position = false
            Object.keys(uang).forEach((i) => {
              if (uang[i].id === serial) {
                position = i
              }
            })
            if (position !== false) {
              uang[position].uang -= amount
              fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang));
            }
          }
                  /**
                   * asd Duit
         * @param {string} serial
         * @param {number} amount
         **/
        const addKoinUser = (serial, amount) => {
            var position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount;
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang));
            }
        }
        /**
         * check duit
         * @param {string} serial
         * @returns {string}
         **/
        const checkATMuser = (serial) => {
            var position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
         /**
          * Bayar Limit
         * @param {string} serial
         * @param {number} amount
         **/
        const bayarLimit = (serial, amount) => {
            var position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit));
            }
        }
        /**
         * Bauar Limit
         * @param {string} serial
         * @param {number} amount
         **/
        const confirmATM = (serial, amount) => {
            var position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount;
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang));
            }
        }
            
    module.exports = {
      addATM, //Format Duit Bang
      addDuit, // nambah duit
      addKoinUser, // nambah duit
      removeDuit, // nagih duit
      checkATMuser, // liat duit
      bayarLimit, // limitp boss
      confirmATM // ngurang duit sih
    }