const {
	MessageType,
	Mimetype,
    WAConnection
} = require("@adiwajshing/baileys");
const fs = require('fs');
const conn = require('./connect');
const axios = require('axios');
const request = require('request');
const ms = require('parse-ms')
const { AnimeWallpaper } = require("anime-wallpaper");
const wall = new AnimeWallpaper();
let limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
let limitCount = 35
const anto = conn.anto


exports.sleep = async (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}
    
exports.sendText = (from, text) => {
    anto.sendMessage(from, text, MessageType.text)
}
exports.reply = (from, text, hardi) => {
    anto.sendMessage(from, text, MessageType.text, {quoted: hardi})
}
exports.sendSticker = (from, filename, hardi) => {
	anto.sendMessage(from, filename, MessageType.sticker, {quoted: hardi})
}
exports.sendKontak = (from, nomor, nama) => {
	const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	anto.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact)
}
exports.sendFakeStatus = (from, teks, faketeks) => {
	anto.sendMessage(from, teks, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)} } } })
}
exports.sendFakeStatusWithImg = (from, image, caption, faketeks) => {
	anto.sendMessage(from, image, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)} } }, caption: caption, thumbnail: fs.readFileSync('./sticker/thumb.jpeg') })
}
exports.sendMention = (from, text, orangnya, hardi) => {
	anto.sendMessage(from, text, MessageType.extendedText, {contextInfo: {mentionedJid: orangnya}, quoted: hardi})
}
exports.hideTag = async function(from, text){
	let anu = await anto.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	anto.sendMessage(from, text, MessageType.text, {contextInfo: {"mentionedJid": ane}})
}

exports.hideTagImg = async function(from, image, pe){
	let buff = fs.readFileSync(image)
	let anu = await anto.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	anto.sendMessage(from, buff, MessageType.image, {quoted: { 
		key: { 
		  fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { 
		    remoteJid: from, } : {}) }, message: {
		      "videoMessage": {
			"mimetype": "video/mp4", 
			"caption": pe,
			"jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)}}}, contextInfo: {"mentionedJid": ane}, thumbnail: fs.readFileSync('./media/paimon.jpeg'), caption: pe})
}
exports.hideTagSticker = async function(from, sticker){
	let buff = fs.readFileSync(sticker)
	let anu = await anto.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	anto.sendMessage(from, buff, MessageType.sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) }, message: { "videoMessage": { "mimetype": "video/mp4", "caption": "*STICKER NGAB*", "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)}}}, contextInfo: {"mentionedJid": ane}})
}
exports.hideTagKontak = async function(from, nomor, nama){
	let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	let anu = await anto.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	anto.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
exports.sendFakeToko = (from, teks, fake) => {
	anu = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)
					},
					"title": fake,
					"description": "ANTO nih Boss",
					"currencyCode": "IDR",
					"priceAmount1000": "50000000",
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	anto.sendMessage(from, teks, MessageType.text, {quoted: anu})
}
exports.sendFitnah = (from, mentioned, targets, textnye) => {
	anto.sendMessage(from, textnye, MessageType.text, { quoted: { 
		key: { 
		  fromMe: false, 
		  participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${targets}` }}})
			
}
exports.sendFakeThumb = async function(from, url, title, desc, Linknya, fotonya){
	var anoim = {
		detectLinks: false
	}
	var hardi = await anto.generateLinkPreview(url)
	hardi.title = title
	hardi.description = desc
	hardi.jpegThumbnail = fotonya ? fotonya : fs.readFileSync(`./media/paimon.jpeg`)
	hardi.canonicaUrl = `${Linknya}`;
	anto.sendMessage(from, hardi, MessageType.extendedText, anoim)
}
exports.sendMediaURL = async(to, url, text="", hardi, mids=[]) =>{
	if(mids.length > 0){
		text = normalizeMention(to, text, mids)
	}
	const fn = Date.now() / 10000;
	const filename = fn.toString()
	let mime = ""
	var download = function (uri, filename, callback) {
		request.head(uri, function (err, res, body) {
			mime = res.headers['content-type']
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
	};
	download(url, filename, async function () {
		console.log('done');
		let media = fs.readFileSync(filename)
		let type = mime.split("/")[0]+"Message"
		if(mime === "image/gif"){
			type = MessageType.video
			mime = Mimetype.gif
		}
		if(mime.split("/")[0] === "audio"){
			mime = Mimetype.mp4Audio
		}
		anto.sendMessage(to, media, type, { quoted: hardi, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
		
		fs.unlinkSync(filename)
	});
}
exports.getGroupAdmins = function(participants){
    admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
const getBuffer = async (url, options) => {
  try {
    options ? options : {}
    const res = await axios({
      method: "get",
      url,
      headers: {
        'DNT': 1,
        'Upgrade-Insecure-Request': 1
      },
      ...options,
      responseType: 'arraybuffer'
    })
    return res.data
  } catch (e) {
    console.log(`Error : ${e}`)
  }
}
exports.setName = async function(query){
    const response = await anto.updateProfileName(query)
    return response
}
exports.setBio = async function(query){
    const response = await anto.setStatus(query)
    return response
}
exports.isLimit = function(id, from){
	let found = false;
	for (let i of limit){
	    if(i.id === id){
		let limits = i.limit;
		if (limits >= limitCount) {
		    found = true;
		    const anue = '*Limit Kamu Sudah Habis Kah Datang Di lain Waktu*'
		    anto.sendMessage(from, anue, MessageType.text)
		    return true;
		}else{
		    limit
		    found = true;
		    return false;
		}
	    }
	}
	if (found === false){
	    let obj = {id: `${id}`, limit:0};
	    limit.push(obj);
	    fs.writeFileSync('./database/user/limit.json',JSON.stringify(limit));
	    return false;
	}  
    }
	exports.cekUserLimit = function(id){
		let found = false
				Object.keys(limit).forEach((i) => {
				 if (limit[i].id === id) {
				   found = i
				 }
				})
				if (found !== false) {
				  return 35 - limit[found].limit
				}
			  }
exports.limitAdd = function(id) {
	var found = false;
	Object.keys(limit).forEach((i) => {
	    if(limit[i].id == id){
		found = i
	    }
	})
	if (found !== false) {
	    limit[found].limit += 1;
	    fs.writeFileSync('./database/user/limit.json',JSON.stringify(limit));
	}
    }
exports.cekLimit = function(id){
	let found = false
            Object.keys(limit).forEach((i) => {
             if (limit[i].id === id) {
               found = i
             }
            })
            if (found !== false) {
              return limit[found].limit
            }
          }
	  exports.addLimit = function(serial, amount) {
		var position = false
		Object.keys(limit).forEach((i) => {
		  if (limit[i].id === serial) {
		    position = i
		  }
		})
		if (position !== false) {
		  limit[position].limit -= amount;
		  fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit));
		}
	      }
	      exports.removeLimit = function(serial, amount) {
		let position = false
		Object.keys(limit).forEach((i) => {
		  if (limit[i].id === serial) {
		    position = i
		  }
		})
		if (position !== false) {
		  limit[position].limit += amount;
		  fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
		}
	      }
	      
	exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
	  fetch(url, options)
	    .then(response => response.json())
	    .then(json => {
	      resolve(json)
	    })
	    .catch((err) => {
	      reject(err)
	    })
	})
	
	exports.wallpaperNime = async function (from, name, jumlah) {
  const wallpaper = await wall.getAnimeWall2(name)
    console.log(wallpaper)
    for (let i = 0; i < Number(jumlah); i++) {
    hm = await getBuffer(wallpaper[i].image)
    anto.sendMessage(from, hm, MessageType.image, {caption: wallpaper[i].title})
    }
}