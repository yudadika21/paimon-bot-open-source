/*


NGNETOL

HAI NAMAKU AQULLL
YAH DISINI AKU SEBAGAI PEMULA MAU MENCOBA MEMBUAT BOT KU SENDIRI
YANG PASTINYA BANYAK COPY PASTE
OKE TERIMA KASIH
*/
const { WAConnection, MessageType } = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const fs = require('fs')
const { color } = require('../lib/color')
const CFonts = require('cfonts')

const anto = new WAConnection()
exports.anto = anto

exports.connect = async() => {
	CFonts.say('PAIMON BOT', {
		font: '3d',
		align: 'top',
		gradient: ['blue', 'magenta']
	    })
	    
    let authofile = './anto.json'
	anto.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(`CONVERT A SESSION TO CODE QR WAIT PLEASE  :) @hardianto02_`)
    })
    /*
	anto.on('credentials-updated', () => {
		fs.writeFileSync(authofile, JSON.stringify(anto.base64EncodedAuthInfo(), null, '\t'))
		console.log(color('Wait....'))
	})
    */
	fs.existsSync(authofile) && anto.loadAuthInfo(authofile)
	anto.on('connecting', () => {
		CFonts.say('BY HARDIANTO'), {
			font: 'pallet',
			align: 'center',
			gradient: ['green', 'magenta']
		}
		CFonts.say('DEV MY SELF', {
			 font: 'chrome',
			 align: 'top',
			gradient: ['blue', 'green']
		}
			  
		)
		console.log(color('Connecting...'))
	})
	anto.on('open', () => {
		console.log(color('Welcome Anto'))
	})
	await anto.connect({timeoutMs: 30*1000})
    fs.writeFileSync(authofile, JSON.stringify(anto.base64EncodedAuthInfo(), null, '\t'))
    return anto
}