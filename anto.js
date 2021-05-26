/* HELOOO NAMA SAYA HARDIANTO */
/* SAYA MERECODE INI DEFAULT CASENYA ADALAH SC AQUL*/
/* SPECIAL THANKS TO :
AQUL,
TOBZ,
MHANKBARBAR
SLAVIAN
PIYO
HAFIZ
DLL KAWAN-KAWAN YG TDK DISEBUTKAN NAMA NYA ,
SPECIAL BIG THANKS TO MY PARENTS && ALLAH SWT*/


const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		Jid,
		processTime,
    WA_DEFAULT_EPHEMERAL,
} = require("@adiwajshing/baileys");
const canvas = require("canvacord");
const moment = require("moment-timezone");
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const fs = require("fs");
const request = require("request");
const { Swiftcord } = require("swiftcord")
const cord = new Swiftcord();
const Loli = require("lolis.life");
const loli = new Loli();
const { exec } = require('child_process');
const paimon = require('./whatsapp/message.js');
const speed = require('performance-now');
const yts = require('yt-search');
const ffmpeg = require('fluent-ffmpeg');
const { yta, ytv } = require('./lib/ytdl');
const conn = require('./whatsapp/connect');
const { color } = require('./lib/color');
const imgbb = require('imgbb-uploader');
const imgb = '8c0a80b3b41f530988993924f47af7dc'
const fetch = require('node-fetch');
const ms = require('parse-ms');
const toMs = require('ms');
const gis = require('g-i-s');
const got = require("got");
const axios = require('axios');
const Exif = require('./lib/exif');
const { get, del } = require("request");
const nezuko = require("nezuko-api");
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const Fb = require('fb-video-downloader');
const brainly = require('brainly-scraper');
const cron = require('node-cron');
const exif = new Exif();
const errorimg = `https://i.ibb.co/K9Sqj84/20210417-155858.jpg`
const limitCount = 35
const botname = '```PAIMON BOT```'
/*_________________ FUNCTION ________________*/

// LOAD  JS
const {  y2mateV, y2mateA, wikiSearch, jagoKata } = require('./lib/y2mate')
const peimon = require('./lib/toVideo')
const { createSerial, wait
} = require('./lib/function')
const { fetchJson, getBuffer } = require('./lib/fetch')
const { 
level, // 1
register, //2
afk,  //3
premium, //4
limit,  //5
game,// 6
rolem, //7
duit,
card  //8



} = require('./function')
const { covid } = require('./lib/covid');
const { fbDown } = require('./lib/fb');
const { lirikLagu } = require('./lib/lirik');
const { fotoIg, videoIg } = require('./lib/igdl')
const { tmpdir } = require("os");
const { waifu2x, default: Waifu2x } = require("waifu2x");
const { validmove, setGame } = require("./lib/tictactoe");
const { getRegisteredIdFromSerial } = require("./function/register.js");
const { getInfo } = require("fb-video-downloader");
const { coreMenu,
   downloaderMenu, 
   creatorMenu, 
   funMenu, 
   storageMenu, 
   soundMaker, 
   botMenu, 
   adminMenu, 
   infoMenu, 
   gameMenu, 
   islamMenu, 
   animeMenu, 
   randomMenu, 
   makerMenu, 
   ownerMenu, 
   rulesBot, 
   sourceBot, 
   Donasi, 
   linkGb, 
   notRegister, 
   waiting, 
   thisLimit, 
   onlyOwner,
   groupOnly, 
   doneOwner,
   dontActive,
   adminOnly,
   nsfwMenu,
   searchingMenu,
   premiumOnly,
   doneRequest,
   primbonMenu} = require("./database/lang/menu.js");
const { antiNsfw, UpScale, custom } = require("./lib/deep.js");
/*_________________ ENDING ___________________*/


// LOAD DATA BASE
const multiPrefix = JSON.parse(fs.readFileSync('./database/bot/multiprefix.json'));
const _register = JSON.parse(fs.readFileSync('./database/bot/registered.json'));
const mess = JSON.parse(fs.readFileSync('./whatsapp/mess.json'));
const tmp_hit = JSON.parse(fs.readFileSync('./database/bot/hit.json'));
let tmphit = JSON.parse(fs.readFileSync('./database/bot/today.json'));
const _premium = JSON.parse(fs.readFileSync('./database/bot/premium.json'));
let _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
const _leveling = JSON.parse(fs.readFileSync('./database/bot/leveling.json'));
const _limitGame = JSON.parse(fs.readFileSync('./database/user/limitgame.json'));
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'));
const _role = JSON.parse(fs.readFileSync('./database/user/role.json'));
const _duit = JSON.parse(fs.readFileSync('./database/user/uang.json'));
const _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
const tebakgambar = JSON.parse(fs.readFileSync('./database/user/tebakgambar.json'));
const tebakgambar2 = JSON.parse(fs.readFileSync('./database/user/tebakgambar2.json'));
const akinator = JSON.parse(fs.readFileSync('./database/user/akinator.json'));
const welkom = JSON.parse(fs.readFileSync('./database/bot/welcome.json'));
const _bg = JSON.parse(fs.readFileSync('./database/user/card/background.json'));
const _setiker = JSON.parse(fs.readFileSync('./database/bot/sticker.json'));
const _vn = JSON.parse(fs.readFileSync('./database/bot/vn.json'));
const _image = JSON.parse(fs.readFileSync('./database/bot/image.json'));
const _video = JSON.parse(fs.readFileSync('./database/bot/video.json'));
const antilink = JSON.parse(fs.readFileSync('./database/bot/antilink.json'));
const sambungkata = JSON.parse(fs.readFileSync('./database/user/sambungkata.json'));
const wpGb = JSON.parse(fs.readFileSync('./database/group/cekwp.json'));
const ownerNumber1 = JSON.parse(fs.readFileSync('./setting/owner.json'));
const _Nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'));




// INTEL
conn.connect()
const anto = conn.anto
// DATA OWNER & SETTING
fake = 'PAIMON SELF BOT'
wel = `*_「  PAIMON BOT  」_*`
end = `*_「  PAIMON BOT ^_^  」_*`
hargaSewa = 15000
fakeimage = fs.readFileSync(`./media/paimon.jpeg`)
public = true
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const gaya = '```'
// WELCOME NYA
anto.on('group-participants-update', async (anu) => {
	if (!welkom.includes(anu.jid)) return
	try {
			const mdata = await anto.groupMetadata(anu.jid)
			console.log(anu)
      num = anu.participants[0]
      ini_user = anto.contacts[num]
			nam = anu.jid
			try {
			ppGb = await anto.getProfilePicture(anu.jid)
			ppimg = await anto.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
			ppimg = errorimg
			}
			thu = await anto.getStatus(anu.participants[0], MessageType.text)	
		if (anu.action == 'add') {
		teks = `
「 *NEW MEMBER IN ${mdata.subject}*  」
┌─────────────────╮
|  ◪ *INTRO TIME* ◪ 
| ◪ *Name:*
| ◪ *Age:*
| ◪ *Gender:*
| ◪ *Live in:*
|──────────────────
| ◪ *username : @${num.split('@')[0]}*
| ◪ *Bio : ${thu.status}*
| ◪ *Number : wa.me/${num.split('@')[0]}*
| ◪ *Owner  : wa.me/${nam.split('-')[0]}*
└─────────────────╯
and Following Rule Group:
${mdata.desc}

Welcome @${num.split('@')[0]} 👋🏻`

let imaget = await cord.Welcome()
  .setUsername(ini_user.notify)
  .setDiscriminator("000")
  .setMemberCount(mdata.participants.length)
  .setGuildName(mdata.subject)
  .setGuildIcon(ppGb)
  .setAvatar(ppimg)
  .setBackground("https://i.ibb.co/WyvDRgy/20210422-044002.jpg")
  .toAttachment();
fs.writeFileSync('./welcome.png', imaget)
			anto.sendMessage(mdata.id, fs.readFileSync('./welcome.png'), MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [nam, num]}})
		} else if (anu.action == 'promote') {
		    teks = `*❏ PROMOTE-DETECTED*\n\nUsername: @${num.split('@')[0]}\n\nBio : ${thu.status}\n\nDate: ${time} 2021\n\nGroup: ${mdata.subject}\n\nDon't break the rules!`
		   let buff = await getBuffer(ppimg)
		   anto.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		} else if (anu.action == 'demote') {
		  teks = `*❏ DEMOTE-DETECTED*\n\nUsername: @${num.split('@')[0]}\n\nBio : ${thu.status}\n\nDate: ${time} 2021\n\nGroup: ${mdata.subject}\n\nPfft hahaha`
		   let buff = await getBuffer(ppimg)
		   anto.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		} else if (anu.action == 'remove') {
			let imagei = await cord.Goodbye()
			  .setUsername(ini_user.notify)
			  .setDiscriminator("000")
			  .setMemberCount(mdata.participants.length)
			  .setGuildName(mdata.subject)
			  .setAvatar(ppimg)
			  .setGuildIcon(ppGb)
			  .setBackground("https://i.ibb.co/WyvDRgy/20210422-044002.jpg")
			  .toAttachment();
			
	    fs.writeFileSync('./leave.png', imagei)
			teks = `Byee @${num.split('@')[0]} `
			anto.sendMessage(mdata.id, fs.readFileSync('./leave.png'), MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
	} catch (e) {

		console.log('Error : %s', color(e, 'red'))
	}
})
  anto.on('chat-update', async(hardi) => {
	try {
    if (!hardi.hasNewMessage) return
    hardi = hardi.messages.all()[0]
    if (!hardi.message) return
    if (hardi.key.fromMe) return //ga suka self
		if (hardi.key && hardi.key.remoteJid == 'status@broadcast') return
    hardi.message = (Object.keys(hardi.message)[0] === 'ephemeralMessage') ? hardi.message.ephemeralMessage.message : hardi.message
    global.prefix
		const content = JSON.stringify(hardi.message)
		const from = hardi.key.remoteJid
		const type = Object.keys(hardi.message)[0]        
    const cmdu = (type === 'conversation' && hardi.message.conversation) ? hardi.message.conversation : (type == 'imageMessage') && hardi.message.imageMessage.caption ? hardi.message.imageMessage.caption : (type == 'videoMessage') && hardi.message.videoMessage.caption ? hardi.message.videoMessage.caption : (type == 'extendedTextMessage') && hardi.message.extendedTextMessage.text ? hardi.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    const prefixm = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmdu) ? cmdu.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
    orggblk = ["6287811078485@s.whatsapp.net"]
    if (multiPrefix.includes(orggblk[0])) {
    prefix = prefixm
    } else {
    prefix = '!'
    }
    global.prefix        
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const day2 = moment.tz('Asia/Jakarta').format('DD-Mon-YYYY')
		const eco = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const day = moment.tz('Asia/Jakarta').format('DD/MM/YY')
		body = (type === 'conversation' && hardi.message.conversation.startsWith(prefix)) ? hardi.message.conversation : (type == 'imageMessage') && hardi.message.imageMessage.caption.startsWith(prefix) ? hardi.message.imageMessage.caption : (type == 'videoMessage') && hardi.message.videoMessage.caption.startsWith(prefix) ? hardi.message.videoMessage.caption : (type == 'extendedTextMessage') && hardi.message.extendedTextMessage.text.startsWith(prefix) ? hardi.message.extendedTextMessage.text : ''
		chats = (type === 'conversation') ? hardi.message.conversation : (type === 'extendedTextMessage') ? hardi.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? hardi.message.conversation : (type === 'extendedTextMessage') ? hardi.message.extendedTextMessage.text : ''
		var Link = (type === 'conversation' && hardi.message.conversation) ? hardi.message.conversation : (type == 'imageMessage') && hardi.message.imageMessage.caption ? hardi.message.imageMessage.caption : (type == 'videoMessage') && hardi.message.videoMessage.caption ? hardi.message.videoMessage.caption : (type == 'extendedTextMessage') && hardi.message.extendedTextMessage.text ? hardi.message.extendedTextMessage.text : ''
		const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const mentionByTag = type == "extendedTextMessage" && hardi.message.extendedTextMessage.contextInfo != null ? hardi.message.extendedTextMessage.contextInfo.mentionedJid : []
    const mentionByReply = type == "extendedTextMessage" && hardi.message.extendedTextMessage.contextInfo != null ? hardi.message.extendedTextMessage.contextInfo.participant || "" : ""
    const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
    mention != undefined ? mention.push(mentionByReply) : []
    const mentionUser = mention != undefined ? mention.filter(n => n) : []
    const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const isGroup = from.endsWith('@g.us')
		const arg = chats.slice(command.length + 2, chats.length)
    const q = args.join(' ')
		if (isCmd && isGroup) {
		tmp_hit.push(command)
		fs.writeFileSync('./database/bot/hit.json', JSON.stringify(tmp_hit))
		tmphit.push(command)
		fs.writeFileSync('./database/bot/today.json', JSON.stringify(tmphit))
		}

		copid = await covid()
		const lol = 'delapann143796123'
		const ownerNumber = ["6287811078485@s.whatsapp.net"]
		const thisBot = anto.user.jid
		const sender = hardi.key.fromMe ? anto.user.jid : isGroup ? hardi.participant : hardi.key.remoteJid
		const totalchat = await anto.chats.all()
    anto.chatRead(from, "read")
		const serial = sender //napa Ga senang
		const isOwner = isGroup ?  ownerNumber1.includes(sender) : false
		const groupMetadata = isGroup ? await anto.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupAdmins = isGroup ? paimon.getGroupAdmins(groupMembers) : ''
		const isAdmin = groupAdmins.includes(sender)
		const botNumber = anto.user.jid
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const itsMe = sender === botNumber ? true : false
		const conts = hardi.key.fromMe ? anto.user.jid : anto.contacts[sender] || { notify: jid.replace(/@.+/, '') }
		// My Add
    const isNsfw = isGroup ? _Nsfw.includes(from) : false 
		const isWelkom = isGroup ? welkom.includes(from) : false 
		const isPremium = premium.checkPremiumUser(sender, _premium)
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isRegistered = register.checkRegisteredUser(sender, _register)
		const isAfkOn = afk.checkAfkUser(sender, _afk)
		const isLevelingOn = isGroup ? _leveling.includes(from) : false
    const pushname = hardi.key.fromMe ? anto.user.name : conts.notify || conts.vname || conts.name || '-'
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		/*if (itsMe){
		if (chats.toLowerCase() === `${prefix}self`){
		public = false
		paimon.sendFakeStatus(from, `Sukses`, `Status: SELF`)
		}
		if (chats.toLowerCase() === 'status'){
		paimon.sendFakeStatus(from, `STATUS: ${public ? 'PUBLIC' : 'SELF'}`)
		}
		}*/
		// TOOL TO EZ
		const imut = '-af atempo=3/4,asetrate=44500*4/3'
		const hode = '-af atempo=4/3,asetrate=44500*3/4'
		const gemuk = '-filter:a "atempo=1.6,asetrate=22100'
		const ghost = '-filter:a "atempo=1.6,asetrate=3486"'
		const blub = '-filter:a "atempo=0.9,asetrate=95100"'
		const tupai = '-filter:a "atempo=0.5,asetrate=65100"'
		const slow = '-filter:a "atempo=0.7,asetrate=44100"'
		const robot = `-filter:a "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75"`
		const nightcore = '-filter:a atempo=1.06,asetrate=44100*1.25'
    // FAKE FAKE KAN
    const fakeGIF = {
     key: {
         fromMe: false, 
         participant: `0@s.whatsapp.net`, ...(from ? { 
         remoteJid: "status@broadcast" } : {}) }, 
         message: { 
        "videoMessage": {
        "mimetype": "video/mp4", 
        "caption": fake, 
        "gifPlayback": true,
         "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)}
        }
    }

const fakeImage = {
     key: {
         fromMe: false, 
         participant: `0@s.whatsapp.net`, ...(from ? { 
         remoteJid: "status@broadcast" } : {}) }, 
         message: { 
        "imageMessage": {
        "mimetype": "image/jpeg", 
        "caption": fake, 
         "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)}
        }
    }


const fakeVideo = {
     key: {
         fromMe: false, 
         participant: `0@s.whatsapp.net`, ...(from ? { 
         remoteJid: "status@broadcast" } : {}) }, 
         message: { 
        "videoMessage": {
        "mimetype": "video/mp4", 
        "caption": fake, 
         "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)}
        }
    }


const fakeLocation = {
     key: {
         fromMe: false, 
         participant: `0@s.whatsapp.net`, ...(from ? { 
         remoteJid: "status@broadcast" } : {}) }, 
         message: { 
        "locationMesaage": {
        "name": '*ISEKAI NGE~HAREM',  
         "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)}
        }
    }

		const sleep = async (ms) => {
			return new Promise(resolve => setTimeout(resolve, ms));
		    }
		const fakethumb = (teks, yes) => {
		  anto.sendMessage(from, teks, image, { thumbnail: fs.readFileSync('./sticker/thumb.jpeg'), quoted: hardi, caption: yes })
		}
		const getRandom = (ext) => {
			return `${Math.floor(Math.random() * 10000)}${ext}`
		}
        
        const fakeSound  = (dikirimApa, faketeks) => {
          anto.sendMessage(from, dikirimApa, MessageType.audio, {
            quoted: {
			key: { 
			fromMe: false, 
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6287811078485-1618184810@g.us" } : {}) }, message: { 
			  "imageMessage": {
			    "mimetype": "image/jpeg", 
			    "caption": faketeks, 
			    "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)}}}, mimetype: 'audio/mp4', ptt: true})
        }
        const fakeUdin  = (dikirimApa, type, faketeks) => {
          anto.sendMessage(from, dikirimApa, type, {
            quoted: {
			key: { 
			fromMe: false, 
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6287811078485-1618184810@g.us" } : {}) }, message: { 
			  "imageMessage": {
			    "mimetype": "image/jpeg", 
			    "caption": faketeks, 
			    "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)}}}})
        }
        
        const mentiontext = (teks, memberr, id) => {
          (id == null || id == undefined || id == false) ? anto.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : anto.sendMessage(from, teks.trim(), extendedText, {quoted: hardi, contextInfo: {"mentionedJid": memberr}})
        }
        
        const fakemention = (PathFile, typeFile, ThisTag, caption) => {
        capten = caption ? caption : ''
        anto.sendMessage(from, PathFile, typeFile, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": fake, "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)} } }, contextInfo: {"mentionedJid": ThisTag}, caption: capten })
        }
        const fakegroup = (teks) => {
            anto.sendMessage(from, teks, MessageType.text, {
                quoted: {
			key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6287811078485-1618184810@g.us" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": fake, "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)}}}})
        }
	const sendFileFromUrl = async(link, type, options) => {
		hasil = await paimon.getBuffer(link)
		      anto.sendMessage(from, hasil, type, options).catch(e => {
		      fetch(link).then((hasil) => {
		      anto.sendMessage(from, hasil, type, options).catch(e => {
		      anto.sendMessage(from, { url : link }, type, options).catch(e => {
			fakegroup('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
			console.log(e)
		      })
		      })
		      })
		      })
		      }
		      const reply = (teks) => {
		        anto.sendMessage(from, teks, MessageType.text, { quoted: hardi })
		      }
	// leveling 
	const leader = async function (_dir) {
       ini_bg = await paimon.getBuffer('https://i.ibb.co/fNBzJvP/20210522-080938.jpg')
       _duit.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
       _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
       cptduit = `*── 「 LEADERBOARDS 」 ──*\n\n`
       cptlev = `*── 「 LEADERBOARDS 」 ──*\n\n`
       for (let i = 0; i < 100; i++) {
      const typeLeader = _level[i].level
      var roles = 'Newbie ㋡'
      if (typeLeader <= 2) {
          roles = 'Newbie ㋡'
      } else if (typeLeader <= 4) {
          roles = 'Beginner Tier1 ⚊¹'
      } else if (typeLeader <= 6) {
          roles = 'Beginner Tier2 ⚊²'
      } else if (typeLeader <= 8) {
          roles = 'Beginner Tier3 ⚊³'
      } else if (typeLeader <= 10) {
          roles = 'Beginner Tier4 ⚊⁴'
      } else if (typeLeader <= 12) {
          roles = 'Private Tier1 ⚌¹'
      } else if (typeLeader <= 14) {
          roles = 'Private Tier2 ⚌²'
      } else if (typeLeader <= 16) {
          roles = 'Private Tier3 ⚌³'
      } else if (typeLeader <= 18) {
          roles = 'Private Tier4 ⚌⁴'
      } else if (typeLeader <= 20) {
          roles = 'Private Tier5 ⚌⁵'
      } else if (typeLeader <= 22) {
          roles = 'Corporal Tier1 ☰¹'
      } else if (typeLeader <= 24) {
          roles = 'Corporal Tier2 ☰²'
      } else if (typeLeader <= 26) {
          roles = 'Corporal Tier3 ☰³'
      } else if (typeLeader <= 28) {
          roles = 'Corporal Tier4 ☰⁴'
      } else if (typeLeader <= 30) {
          roles = 'Corporal Tier5 ☰⁵'
      } else if (typeLeader <= 32) {
          roles = 'Sergeant Tier1 ≣¹'
      } else if (typeLeader <= 34) {
          roles = 'Sergeant Tier2 ≣²'
      } else if (typeLeader <= 36) {
          roles = 'Sergeant Tier3 ≣³'
      } else if (typeLeader <= 38) {
          roles = 'Sergeant Tier4 ≣⁴'
      } else if (typeLeader <= 40) {
          roles = 'Sergeant Tier5 ≣⁵'
      } else if (typeLeader <= 42) {
          roles = 'Staff Tier1 ﹀¹'
      } else if (typeLeader <= 44) {
          roles = 'Staff Tier2 ﹀²'
      } else if (typeLeader <= 46) {
          roles = 'Staff Tier3 ﹀³'
      } else if (typeLeader <= 48) {
          roles = 'Staff Tier4 ﹀⁴'
      } else if (typeLeader <= 50) {
          roles = 'Staff Tier5 ﹀⁵'
      } else if (typeLeader <= 52) {
          roles = 'Sergeant Tier1 ︾¹'
      } else if (typeLeader <= 54) {
          roles = 'Sergeant Tier2 ︾²'
      } else if (typeLeader <= 56) {
          roles = 'Sergeant Tier3 ︾³'
      } else if (typeLeader <= 58) {
          roles = 'Sergeant Tier4 ︾⁴'
      } else if (typeLeader <= 60) {
          roles = 'Sergeant Tier5 ︾⁵'
      } else if (typeLeader <= 62) {
          roles = '2nd Lt. Tier1 ♢¹ '
      } else if (typeLeader <= 64) {
          roles = '2nd Lt. Tier2 ♢²'
      } else if (typeLeader <= 66) {
          roles = '2nd Lt. Tier3 ♢³'
      } else if (typeLeader <= 68) {
          roles = '2nd Lt. Tier4 ♢⁴'
      } else if (typeLeader <= 70) {
          roles = '2nd Lt. Tier5 ♢⁵'
      } else if (typeLeader <= 72) {
          roles = '1st Lt. Tier1 ♢♢¹'
      } else if (typeLeader <= 74) {
          roles = '1st Lt. Tier2 ♢♢²'
      } else if (typeLeader <= 76) {
          roles = '1st Lt. Tier3 ♢♢³'
      } else if (typeLeader <= 78) {
          roles = '1st Lt. Tier4 ♢♢⁴'
      } else if (typeLeader <= 80) {
          roles = '1st Lt. Tier5 ♢♢⁵'
      } else if (typeLeader <= 82) {
          roles = 'Major Tier1 ✷¹'
      } else if (typeLeader <= 84) {
          roles = 'Major Tier2 ✷²'
      } else if (typeLeader <= 86) {
          roles = 'Major Tier3 ✷³'
      } else if (typeLeader <= 88) {
          roles = 'Major Tier4 ✷⁴'
      } else if (typeLeader <= 90) {
          roles = 'Major Tier5 ✷⁵'
      } else if (typeLeader <= 92) {
          roles = 'Colonel Tier1 ✷✷¹'
      } else if (typeLeader <= 94) {
          roles = 'Colonel Tier2 ✷✷²'
      } else if (typeLeader <= 96) {
          roles = 'Colonel Tier3 ✷✷³'
      } else if (typeLeader <= 98) {
          roles = 'Colonel Tier4 ✷✷⁴'
      } else if (typeLeader <= 100) {
          roles = 'Colonel Tier5 ✷✷⁵'
      } else if (typeLeader <= 102) {
          roles = 'Brigadier Early ✰'
      } else if (typeLeader <= 104) {
          roles = 'Brigadier Silver ✩'
      } else if (typeLeader <= 106) {
          roles = 'Brigadier gold ✯'
      } else if (typeLeader <= 108) {
          roles = 'Brigadier Platinum ✬'
      } else if (typeLeader <= 110) {
          roles = 'Brigadier Diamond ✪'
      } else if (typeLeader <= 112) {
          roles = 'Major General Early ✰'
      } else if (typeLeader <= 114) {
          roles = 'Major General Silver ✩'
      } else if (typeLeader <= 116) {
          roles = 'Major General gold ✯'
      } else if (typeLeader <= 118) {
          roles = 'Major General Platinum ✬'
      } else if (typeLeader <= 120) {
          roles = 'Major General Diamond ✪'
      } else if (typeLeader <= 122) {
          roles = 'Lt. General Early ✰'
      } else if (typeLeader <= 124) {
          roles = 'Lt. General Silver ✩'
      } else if (typeLeader <= 126) {
          roles = 'Lt. General gold ✯'
      } else if (typeLeader <= 128) {
          roles = 'Lt. General Platinum ✬'
      } else if (typeLeader <= 130) {
          roles = 'Lt. General Diamond ✪'
      } else if (typeLeader <= 132) {
          roles = 'General Early ✰'
      } else if (typeLeader <= 134) {
          roles = 'General Silver ✩'
      } else if (typeLeader <= 136) {
          roles = 'General gold ✯'
      } else if (typeLeader <= 138) {
          roles = 'General Platinum ✬'
      } else if (typeLeader <= 140) {
          roles = 'General Diamond ✪'
      } else if (typeLeader <= 142) {
          roles = 'Commander Early ★'
      } else if (typeLeader <= 144) {
          roles = 'Commander Intermediate ⍣'
      } else if (typeLeader <= 146) {
          roles = 'Commander Elite ≛'
      } else if (typeLeader <= 148) {
          roles = 'The Commander Hero ⍟'
      } else if (typeLeader <= 152) {
          roles = 'Legends I 忍'
      } else if (typeLeader <= 154) {
          roles = 'Legends I 忍'
      } else if (typeLeader <= 156) {
          roles = 'Legends I 忍'
      } else if (typeLeader <= 158) {
          roles = 'Legends I 忍'
      } else if (typeLeader <= 160) {
          roles = 'Legends I 忍'
      } else if (typeLeader <= 162) {
          roles = 'Legends I 忍'
      } else if (typeLeader <= 164) {
          roles = 'Legends I 忍'
      } else if (typeLeader <= 166) {
          roles = 'Legends II 忍'
      } else if (typeLeader <= 168) {
          roles = 'Legends II 忍'
      } else if (typeLeader <= 170) {
          roles = 'Legends II 忍'
      } else if (typeLeader <= 172) {
          roles = 'Legends II 忍'
      } else if (typeLeader <= 174) {
          roles = 'Legends II 忍'
      } else if (typeLeader <= 176) {
          roles = 'Legends II 忍'
      } else if (typeLeader <= 178) {
          roles = 'Legends II 忍'
      } else if (typeLeader <= 180) {
          roles = 'Legends II 忍'
      } else if (typeLeader <= 182) {
          roles = 'Legends II 忍'
      } else if (typeLeader <= 184) {
          roles = 'Legends II 忍'
      } else if (typeLeader <= 186) {
          roles = 'Legends II 忍'
      } else if (typeLeader <= 188) {
          roles = 'Legends II 忍'
      } else if (typeLeader <= 190) {
          roles = 'Legends II 忍'
      } else if (typeLeader <= 192) {
          roles = 'Legends I 忍'
      } else if (typeLeader <= 194) {
          roles = 'Legends II 忍'
      } else if (typeLeader <= 196) {
          roles = 'Legends II 忍'
      } else if (typeLeader <= 198) {
          roles = 'Legends II 忍'
      } else if (typeLeader <= 200) {
          roles = 'Legends III 忍'
      } else if (typeLeader <= 210) {
          roles = 'Legends III 忍'
      } else if (typeLeader <= 220) {
          roles = 'Legends III 忍'
      } else if (typeLeader <= 230) {
          roles = 'Legends III 忍'
      } else if (typeLeader <= 240) {
          roles = 'Legends III 忍'
      } else if (typeLeader <= 250) {
          roles = 'Legends III 忍'
      } else if (typeLeader <= 260) {
          roles = 'Legends III 忍'
      } else if (typeLeader <= 270) {
          roles = 'Legends III 忍'
      } else if (typeLeader <= 280) {
          roles = 'Legends III 忍'
      } else if (typeLeader <= 290) {
          roles = 'Legends III 忍'
      } else if (typeLeader <= 300) {
          roles = 'Legends IV 忍'
      } else if (typeLeader <= 310) {
          roles = 'Legends IV 忍'
      } else if (typeLeader <= 320) {
          roles = 'Legends IV 忍'
      } else if (typeLeader <= 330) {
          roles = 'Legends IV 忍'
      } else if (typeLeader <= 340) {
          roles = 'Legends IV 忍'
      } else if (typeLeader <= 350) {
          roles = 'Legends IV 忍'
      } else if (typeLeader <= 360) {
          roles = 'Legends IV 忍'
      } else if (typeLeader <= 370) {
          roles = 'Legends IV 忍'
      } else if (typeLeader <= 380) {
          roles = 'Legends IV 忍'
      } else if (typeLeader <= 390) {
          roles = 'Legends IV 忍'
      } else if (typeLeader <= 400) {
          roles = 'Legends V 忍'
      } else if (typeLeader <= 410) {
          roles = 'Legends V 忍'
      } else if (typeLeader <= 420) {
          roles = 'Legends V 忍'
      } else if (typeLeader <= 430) {
          roles = 'Legends V 忍'
      } else if (typeLeader <= 440) {
          roles = 'Legends V 忍'
      } else if (typeLeader <= 450) {
          roles = 'Legends V 忍'
      } else if (typeLeader <= 460) {
          roles = 'Legends V 忍'
      } else if (typeLeader <= 470) {
          roles = 'Legends V 忍'
      } else if (typeLeader <= 480) {
          roles = 'Legends V 忍'
      } else if (typeLeader <= 490) {
          roles = 'Legends V 忍'
      } else if (typeLeader <= 500) {
          roles = 'Legends VI 忍'
      } else if (typeLeader <= 600) {
          roles = 'Legends VII 忍'
      } else if (typeLeader <= 700) {
          roles = 'Legends VIII 忍'
      } else if (typeLeader <= 800) {
          roles = 'Legends IX 忍'
      } else if (typeLeader <= 900) {
          roles = 'Legends X 忍'
      } else if (typeLeader <= 1000) {
          roles = 'Mythic I 上帝'
      } else if (typeLeader <= 2000) {
          roles = 'Mythic II 上帝'
      } else if (typeLeader <= 3000) {
          roles = 'Mythic III 上帝'
      } else if (typeLeader <= 4000) {
          roles = 'Mythic IV 上帝'
      } else if (typeLeader <= 5000) {
          roles = 'Mythic V 上帝'
      } else if (typeLeader <= 6000) {
          roles = 'Mythic VII 上帝'
      } else if (typeLeader <= 7000) {
          roles = 'Mythic VIII 上帝'
      } else if (typeLeader <= 8000) {
          roles = 'Mythic IX 上帝'
      } else if (typeLeader <= 9000) {
          roles = 'Mythic X 上帝'
      } else if (typeLeader <= 10000) {
          roles = 'Awakened Mythic 特尔邦贡'
    } else if (typeLeader <= 99999999999) {
            roles = 'End level 程度❗'
      }
      var barsu = `[▒▒▒▒▒▒▒▒▒]`
    if (typeLeader <= 10) {
      barsu = `[█▒▒▒▒▒▒▒▒]`
    } else if (typeLeader <= 20) {
      barsu = `[██▒▒▒▒▒▒▒]`
    } else if (typeLeader <= 30) {
      barsu = `[███▒▒▒▒▒▒]`
    } else if (typeLeader <= 40) {
      barsu = `[████▒▒▒▒▒]`
    } else if (typeLeader <= 50) {
      barsu = `[█████▒▒▒▒]`
    } else if (typeLeader <= 60) {
      barsu = `[██████▒▒▒]`
    } else if (typeLeader <= 70) {
      barsu = `[███████▒▒]`
    } else if (typeLeader <= 80) {
      barsu = `[████████▒]`
    } else if (typeLeader <= 90) {
      barsu = `[█████████]`
    } else if (typeLeader <= 100) {
      barsu = `[█████████]`
    } else if (typeLeader <= 110) {
      barsu = `[█████████]+1*`
    } else if (typeLeader <= 120) {
      barsu = `[█████████]+2*`
    } else if (typeLeader <= 130) {
      barsu = `[█████████]+3*`
    } else if (typeLeader <= 140) {
      barsu = `[█████████]+4*`
    } else if (typeLeader <= 150) {
      barsu = `[█████████]+5*`
    } else if (typeLeader <= 160) {
      barsu = `[█████████]+6*`
    } else if (typeLeader <= 170) {
      barsu = `[█████████]+7*`
    } else if (typeLeader <= 180) {
      barsu = `[█████████]+8*`
    } else if (typeLeader <= 190) {
      barsu = `[█████████]+9*`
    } else if (typeLeader <= 110) {
      barsu = `[█████████]+10*`
    } else if (typeLeader <= 99999999999999) {
      barsu = `[█████████]+上帝*`
          }
      cptduit += `| ◪ Top ${i + 1} wa.me/${_duit[i].id.replace('@s.whatsapp.net', '')}
| ◪ *Balance: ${_duit[i].uang}*
| ◪ *Role: ${roles}*
| ◪ *ProgressEvent: ${barsu}*\n\n`
      cptlev += `Top ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}
➸ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}
➸ *Role:* ${roles}
➸ *Progres:* ${barsu}\n\n`
       }
       cptduit += `${end}`
       cptlev +=  `${end}`
    if (_dir === _level) {
paimon.sendFakeStatusWithImg(from, ini_bg, cptlev, '*LEADERBOARD LEVEL*')
    }
    if (_dir === _duit) {
 paimon.sendFakeStatusWithImg(from, ini_bg, cptduit, '*LEADERBOARD BALANCE*')
    }
   }
	const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Tier1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Tier2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Tier3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Tier4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Tier1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Tier2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Tier3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Tier4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Tier5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Tier1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Tier2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Tier3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Tier4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Tier5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Tier1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Tier2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Tier3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Tier4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Tier5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Tier1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Tier2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Tier3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Tier4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Tier5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Tier1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Tier2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Tier3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Tier4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Tier5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Tier1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Tier2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Tier3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Tier4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Tier5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Tier1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Tier2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Tier3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Tier4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Tier5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Tier1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Tier2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Tier3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Tier4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Tier5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Tier1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Tier2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Tier3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Tier4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Tier5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends I 忍'
        } else if (levelRole <= 154) {
            role = 'Legends I 忍'
        } else if (levelRole <= 156) {
            role = 'Legends I 忍'
        } else if (levelRole <= 158) {
            role = 'Legends I 忍'
        } else if (levelRole <= 160) {
            role = 'Legends I 忍'
        } else if (levelRole <= 162) {
            role = 'Legends I 忍'
        } else if (levelRole <= 164) {
            role = 'Legends I 忍'
        } else if (levelRole <= 166) {
            role = 'Legends II 忍'
        } else if (levelRole <= 168) {
            role = 'Legends II 忍'
        } else if (levelRole <= 170) {
            role = 'Legends II 忍'
        } else if (levelRole <= 172) {
            role = 'Legends II 忍'
        } else if (levelRole <= 174) {
            role = 'Legends II 忍'
        } else if (levelRole <= 176) {
            role = 'Legends II 忍'
        } else if (levelRole <= 178) {
            role = 'Legends II 忍'
        } else if (levelRole <= 180) {
            role = 'Legends II 忍'
        } else if (levelRole <= 182) {
            role = 'Legends II 忍'
        } else if (levelRole <= 184) {
            role = 'Legends II 忍'
        } else if (levelRole <= 186) {
            role = 'Legends II 忍'
        } else if (levelRole <= 188) {
            role = 'Legends II 忍'
        } else if (levelRole <= 190) {
            role = 'Legends II 忍'
        } else if (levelRole <= 192) {
            role = 'Legends I 忍'
        } else if (levelRole <= 194) {
            role = 'Legends II 忍'
        } else if (levelRole <= 196) {
            role = 'Legends II 忍'
        } else if (levelRole <= 198) {
            role = 'Legends II 忍'
        } else if (levelRole <= 200) {
            role = 'Legends III 忍'
        } else if (levelRole <= 210) {
            role = 'Legends III 忍'
        } else if (levelRole <= 220) {
            role = 'Legends III 忍'
        } else if (levelRole <= 230) {
            role = 'Legends III 忍'
        } else if (levelRole <= 240) {
            role = 'Legends III 忍'
        } else if (levelRole <= 250) {
            role = 'Legends III 忍'
        } else if (levelRole <= 260) {
            role = 'Legends III 忍'
        } else if (levelRole <= 270) {
            role = 'Legends III 忍'
        } else if (levelRole <= 280) {
            role = 'Legends III 忍'
        } else if (levelRole <= 290) {
            role = 'Legends III 忍'
        } else if (levelRole <= 300) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 310) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 320) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 330) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 340) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 350) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 360) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 370) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 380) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 390) {
            role = 'Legends IV 忍'
        } else if (levelRole <= 400) {
            role = 'Legends V 忍'
        } else if (levelRole <= 410) {
            role = 'Legends V 忍'
        } else if (levelRole <= 420) {
            role = 'Legends V 忍'
        } else if (levelRole <= 430) {
            role = 'Legends V 忍'
        } else if (levelRole <= 440) {
            role = 'Legends V 忍'
        } else if (levelRole <= 450) {
            role = 'Legends V 忍'
        } else if (levelRole <= 460) {
            role = 'Legends V 忍'
        } else if (levelRole <= 470) {
            role = 'Legends V 忍'
        } else if (levelRole <= 480) {
            role = 'Legends V 忍'
        } else if (levelRole <= 490) {
            role = 'Legends V 忍'
        } else if (levelRole <= 500) {
            role = 'Legends VI 忍'
        } else if (levelRole <= 600) {
            role = 'Legends VII 忍'
        } else if (levelRole <= 700) {
            role = 'Legends VIII 忍'
        } else if (levelRole <= 800) {
            role = 'Legends IX 忍'
        } else if (levelRole <= 900) {
            role = 'Legends X 忍'
        } else if (levelRole <= 1000) {
            role = 'Mythic I 上帝'
        } else if (levelRole <= 2000) {
            role = 'Mythic II 上帝'
        } else if (levelRole <= 3000) {
            role = 'Mythic III 上帝'
        } else if (levelRole <= 4000) {
            role = 'Mythic IV 上帝'
        } else if (levelRole <= 5000) {
            role = 'Mythic V 上帝'
        } else if (levelRole <= 6000) {
            role = 'Mythic VII 上帝'
        } else if (levelRole <= 7000) {
            role = 'Mythic VIII 上帝'
        } else if (levelRole <= 8000) {
            role = 'Mythic IX 上帝'
        } else if (levelRole <= 9000) {
            role = 'Mythic X 上帝'
        } else if (levelRole <= 10000) {
            role = 'Awakened Mythic 特尔邦贡'
	    } else if (levelRole <= 99999999999) {
   	         role = 'End level 程度❗'
        }
        /********** TINGKAT - LEVELING **********/
 ManikBars = level.getLevelingLevel(sender, _level)
			 bars = `[▒▒▒▒▒▒▒▒▒]`
			if (ManikBars <= 10) {
				bars = `[█▒▒▒▒▒▒▒▒]`
			} else if (ManikBars <= 20) {
				bars = `[██▒▒▒▒▒▒▒]`
			} else if (ManikBars <= 30) {
				bars = `[███▒▒▒▒▒▒]`
			} else if (ManikBars <= 40) {
				bars = `[████▒▒▒▒▒]`
			} else if (ManikBars <= 50) {
				bars = `[█████▒▒▒▒]`
			} else if (ManikBars <= 60) {
				bars = `[██████▒▒▒]`
			} else if (ManikBars <= 70) {
				bars = `[███████▒▒]`
			} else if (ManikBars <= 80) {
				bars = `[████████▒]`
			} else if (ManikBars <= 90) {
				bars = `[█████████]`
			} else if (ManikBars <= 100) {
				bars = `[█████████]`
			} else if (ManikBars <= 110) {
				bars = `[█████████]+1*`
			} else if (ManikBars <= 120) {
				bars = `[█████████]+2*`
			} else if (ManikBars <= 130) {
				bars = `[█████████]+3*`
			} else if (ManikBars <= 140) {
				bars = `[█████████]+4*`
			} else if (ManikBars <= 150) {
				bars = `[█████████]+5*`
			} else if (ManikBars <= 160) {
				bars = `[█████████]+6*`
			} else if (ManikBars <= 170) {
				bars = `[█████████]+7*`
			} else if (ManikBars <= 180) {
				bars = `[█████████]+8*`
			} else if (ManikBars <= 190) {
				bars = `[█████████]+9*`
			} else if (ManikBars <= 110) {
				bars = `[█████████]+10*`
			} else if (ManikBars <= 99999999999999) {
				bars = `[█████████]+上帝*`
            }

           var cardUser = 'Free User'
			if (!isPremium) {
				cardUser = 'V I P✨'
			} 
			if (!isOwner) {
				cardUser = 'OWNER :)'
			}
	
		   // AUTO FORMAT DUIT NYA
		  if (isRegistered) {
      const checkATM = duit.checkATMuser(serial)
      if (checkATM === undefined)  {
      duit.addATM(serial)
      console.log('Add Format Duit')
                }
              }
        // AUTOMATE
	var kuis = false
        premium.expiredCheck(_premium)
	cron.schedule('0 0 * * *', () => {
		const reset = []
		console.log('Reset Limit')
		_limit = reset
		fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
		console.log('Done')
    anto.sendMessage(ownerNumber[0], "Reset Limit Harian", MessageType.text)
	}, {
		scheduled: true,
		timezone: 'Asia/Jakarta'
	})
    cron.schedule('0 0 * * *', () => {
    const reset = []
    console.log('Resetting user limit...')
	  tmphit = reset
    fs.writeFileSync('./database/bot/today.json', JSON.stringify(tmphit))
	  anto.sendMessage(ownerNumber[0], "Reset Hit Harian", MessageType.text)
    console.log('Success!')
    }, {
          scheduled: true,
          timezone: 'Asia/Jakarta'
    })
// DETECTOR
	if (chats.includes("://chat.whatsapp.com/")) {
	  if (!isGroup) return
	  if (!isAntiLink) return
	  if (isAdmin) {
      fakegroup('karena kamu adalah admin group, bot tidak akan kick kamu')
    } else {
	  anto.updatePresence(from, Presence.composing)
	  if (chats.includes("#antokeren")) return fakegroup("Karna Lu Puji Hardianto\n#izinadmin diterima\njangan kirim 1×24 jam lagi yah")
	  var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	  fakegroup(`*[ DETECTOR GROUP ]*\nLink Group Terdeteksi maaf ${pushname} anda akan di kick dari group 5detik lagi`)
	  setTimeout(() => {
	    anto.groupRemove(from, [kic]).catch((e) => { fakegroup(`*ERR:* ${e}`) })
	  }, 5000)
	  setTimeout(() => {
	    anto.updatePresence(from, Presence.composing)
	    fakegroup("1detik")
	  }, 4000)
	  setTimeout(() => {
	    anto.updatePresence(from, Presence.composing)
	    fakegroup("2detik")
	  }, 3000)
	  setTimeout(() => {
	    anto.updatePresence(from, Presence.composing)
	    fakegroup("3detik")
	  }, 2000)
	  setTimeout(() => {
	    anto.updatePresence(from, Presence.composing)
	    fakegroup("4detik")
	  }, 1000)
	  setTimeout(() => {
	    anto.updatePresence(from, Presence.composing)
	    fakegroup("5detik")
	  }, 0)
	}
}
	// AFK
	if (isGroup) {
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK DETECTED 」*\n
*Sstttt ${pushname} Saat Ini @${mentionUser[0].split("@")[0]} Lagi Afk*
${gaya}
Waktu: ${getTime} 
Reseason: ${getReason}
${gaya}
${end}`
      mentiontext(cptl, x, true)
    }}
		// LEVELING
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*「 AFK EXPIRE 」*\n*${pushname} Telah Kembali Dari Afk Sejak ${getTime} Yg Lalu Karna ${getReason}*`
		    fakegroup(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
	 if (isGroup && isRegistered && !level.isGained(sender) && isLevelingOn) {
	   try {
	     level.addCooldown(sender)
	     const currentLevel = level.getLevelingLevel(sender, _level)
	     const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15)
	     
	     const requiredXp = 50 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
	     level.addLevelingXp(sender, amountXp, _level)
	     if (requiredXp <= level.getLevelingXp(sender, _level)) {
	       level.addLevelingLevel(sender, 1, _level)
	       const userLevel = level.getLevelingLevel(sender, _level)
	       const fetchXp = 50 * Math.pow(userLevel, 2) + 50 * userLevel + 100
	     const checkBg = card.getBg(sender, _bg)
	     if (checkBg === undefined) card.addBg(sender, _bg)
	       const anuyo = `*「 LEVEL UP 」*\n\n*NAME:* ${pushname}\n*PROGRESS:* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n*TO LEVEL:* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙\n*ROLE:* ${role}`
	       const begem = card.getBg(sender, _bg)
	       const rankmu = Number(level.getUserRank(sender, _level))
	       try {
	         ppmu = await anto.getProfilePicture(sender)
	       } catch {
	         ppmu = errorimg
	       }
	       const randombur = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
	       const _randombur = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
	       const rank = new canvas.Rank()
	         .setAvatar(ppmu)
	         .setLevel(userLevel)
	         .setLevelColor('#ffa200', '#ffa200')
	         .setRank(Number(level.getUserRank(sender, _level)), role, true)
	         .setCurrentXP(level.getLevelingXp(sender, _level))
	         .setOverlay('#000000', 0.5, true)
	         .setRequiredXP(requiredXp)
	         .setProgressBar([randombur, _randombur], 'GRADIENT')
	         .setBackground('IMAGE', begem)
	         .setUsername(pushname)
	         .setDiscriminator(sender.substring(6, 10))
	       rank.build()
	         .then(async (buffer) => {
	           fs.writeFileSync('./rank.png', buffer)
	           vuffer = fs.readFileSync('./rank.png')
	           fs.unlinkSync('./rank.png')
	           anto.sendMessage(from, vuffer, MessageType.image, { quoted: fakeGIF, caption: anuyo})
	         })
	         .catch(async (err) => {
	           console.error(err)
	           reply(from, 'Error!', id)
	         })
	     }
	   } catch (err) {
	     console.error(err)
	   }
	 }
	 if (sambungkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
  kuis = true
  jawaban = sambungkata[sender.split('@')[0]]
  userAnswer = chats.toLowerCase()
  if (userAnswer.startsWith(jawaban[jawaban.length - 1])) {
    get_result = await axios.get(`https://api.lolhuman.xyz/api/sambungkata?apikey=${lol}&text=${userAnswer}`)
    await anto.sendMessage(from, get_result.data.result, MessageType.text, { quoted: hardi }).then(() => {
      sambungkata[sender.split('@')[0]] = get_result.data.result.toLowerCase()
      fs.writeFileSync("./database/user/sambungkata.json", JSON.stringify(sambungkata))
    })
  } else {
    fakegroup("Silahkan jawab dengan kata yang dimulai huruf " + jawaban[jawaban.length - 1])
  }
}
for (let x = 0; x < tebakgambar2.length; x++) {
  if(chats.toLowerCase(tebakgambar2[x])) {
  reply(`*Hebat ${pushname} Jawaban Kamu Benar*`)
  }
}

	 if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (chats.toLowerCase() === jawaban) {
                    fakegroup("*Wah Keren Betul Dong*")
               delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/user/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                   fakegroup("Salah Kang Atu Yg bener!")
                }
                }
		// RESPONSE
		/*if (chats.match("@6287811078485")) {
		fakegroup('*Ada Apa Kaka Tag Owner Ku*')
		}*/
		/*if (!public){
			if (!hardi.key.fromMe) return
		}*/
		if (isCmd && !isGroup) {console.log(color('[CMD]'), color(moment(hardi.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`))}
        if (isCmd && isGroup) {console.log(color('[CMD]'), color(moment(hardi.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(`${pushname}`), 'in', color(groupName))}
        switch (command) { 
// COPAST HUMAN

case 'sambungkata':               
if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
if (sambungkata.hasOwnProperty(sender.split('@')[0])) return fakegroup("Selesein yg sebelumnya dulu atuh")
if (args.length == 0) return fakegroup(`Example: ${prefix + command} tahu`)
ini_txt = args.join(" ")
get_result = await axios.get(`https://api.lolhuman.xyz/api/sambungkata?apikey=${lol}&text=${ini_txt}`)
get_result = get_result.data.result
await anto.sendMessage(from, get_result, MessageType.text, { quoted: hardi }).then(() => {
  sambungkata[sender.split('@')[0]] = get_result.toLowerCase()
  fs.writeFileSync("./database/user/sambungkata.json", JSON.stringify(sambungkata))
})
break
case 'cancelsambungkata':                  
  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))    
if (!sambungkata.hasOwnProperty(sender.split('@')[0])) return fakegroup("Anda tidak memiliki tebak gambar sebelumnya")
delete sambungkata[sender.split('@')[0]]
fs.writeFileSync("./database/user/sambungkata.json", JSON.stringify(sambungkata))
fakegroup("Success mengcancel sambung kata sebelumnya")
break
case 'memecreate':
case 'memes':
  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))
  paimon.limitAdd(sender)
  encmedia = JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
  filePatho = await anto.downloadAndSaveMediaMessage(encmedia, `./${sender}`)
  memes = await imgbb(imgb, filePatho)
  memes = `${memes.display_url}`
  console.log(memes)
  thisq = args.join(' ')
  ini_text1 = thisq.split('|')[0]
  ini_text2 = thisq.split('|')[1]
  memek = await paimon.getBuffer(`https://api.memegen.link/images/custom/${ini_text1}/${ini_text2}.png?background=${memes}`)
  fs.unlinkSync(filePatho)
  fakeUdin(memek, MessageType.image, '*MEME LU DAH JADI*')
  break
case 'spotify':                    
  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))    
  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))                
  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lol}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await paimon.getBuffer(get_result.thumbnail)
                    await anto.sendMessage(from, thumbnail, image, { quoted: hardi, caption: ini_txt })
                    get_audio = await paimon.getBuffer(get_result.link)
                    await anto.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: hardi })
                    break
                case 'spotifysearch':                    
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))  
                paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    fakegroup(ini_txt)
                    break
                case 'jooxplay':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                 
                  if (paimon.isLimit(sender)) return  
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await paimon.getBuffer(get_result.image)
                    await anto.sendMessage(from, thumbnail, image, { quoted: hardi, caption: ini_txt })
                    get_audio = await paimon.getBuffer(get_result.audio[0].link)
                    await anto.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: hardi })
                    break
                    case 'twtdl':                 
                      if (!isRegistered) return fakegroup(notRegister(pushname, prefix))              
                      if (paimon.isLimit(sender)) return
                      paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${lol}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_url = ini_url[ini_url.length - 1].link
                    ini_buffer = await paimon.getBuffer(ini_url)
                    await anto.sendMessage(from, ini_buffer, video, { quoted: hardi })
                    break
                    case 'zippyshare':            
                    if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                    if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix)) 
                    paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${lol}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    fakegroup(ini_txt)
                    break
                case 'pinterestsearch':                  
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                  if (paimon.isLimit(sender)) return
                paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lol}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await paimon.getBuffer(ini_url)
                    await anto.sendMessage(from, ini_buffer, image, { quoted: hardi })
                    break
                case 'pinterest2':                
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))  
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} loli kawaii`)
                    
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await paimon.getBuffer(get_result[x])
                        await anto.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'pinterestdl':                 
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))  
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${lol}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await paimon.getBuffer(ini_url)
                    await anto.sendMessage(from, ini_buffer, image, { quoted: hardi })
                    break
                case 'pixiv':                    
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                 
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))  
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await paimon.getBuffer(`https://api.lolhuman.xyz/api/pixiv?apikey=${lol}&query=${query}`)
                    await anto.sendMessage(from, ini_buffer, image, { quoted: hardi })
                    break
                case 'pixivdl':                  
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix)) 
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_buffer = await paimon.getBuffer(`https://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${lol}`)
                    await anto.sendMessage(from, ini_buffer, image, { quoted: hardi })
                    break
                    case 'imagecharacter':
                     if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                     if (paimon.isLimit(sender)) return
                     paimon.limitAdd(sender)
                     if (args.length == 0) return fakegroup(`Example: ${prefix + command} Miku Nakano|6`)
                     nome = q.split("|")[0]
                     lrt = q.split("|")[1]
                     paimon.wallpaperNime(from, nome, Number(lrt))
                     break
                    case 'character':                    
                      if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                      if (paimon.isLimit(sender)) return 
                      paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await paimon.getBuffer(get_result.image.large)
                    await anto.sendMessage(from, thumbnail, image, { quoted: hardi, caption: ini_txt })
                    break
                case 'manga':                    
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await paimon.getBuffer(get_result.coverImage.large)
                    await anto.sendMessage(from, thumbnail, image, { quoted: hardi, caption: ini_txt })
                    break
                case 'anime':                    
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))   
                paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await paimon.getBuffer(get_result.coverImage.large)
                    await anto.sendMessage(from, thumbnail, image, { quoted: hardi, caption: ini_txt })
                    break
                case 'wait':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix)) 
                  paimon.limitAdd(sender)
                    if ((isMedia && !hardi.message.videoMessage || isQuotedImage) && args.length == 0) {
                        encmedia = isQuotedImage ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
                        const filePath = await anto.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/wait?apikey=${lol}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await paimon.getBuffer(get_result.video)
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Similarity : ${get_result.similarity}`
                        await anto.sendMessage(from, ini_video, video, { quoted: hardi, caption: ini_txt })
                    } else {
                        fakegroup(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                    // 
                    case 'bj':
                      case 'ero':
                      case 'cum':
                      case 'feet':
                      case 'yuri':
                      case 'trap':
                      case 'lewd':
                      case 'feed':
                      case 'eron':
                      case 'solo':
                      case 'gasm':
                      case 'poke':
                      case 'anal':
                      case 'holo':
                      case 'tits':
                      case 'kuni':
                      case 'kiss':
                      case 'erok':
                      case 'smug':
                      case 'baka':
                      case 'solog':
                      case 'feetg':
                      case 'lewdk':
                      case 'waifu':
                      case 'pussy':
                      case 'femdom':
                      case 'cuddle':
                      case 'hentai':
                      case 'eroyuri':
                      case 'cum_jpg':
                      case 'blowjob':
                      case 'erofeet':
                      case 'holoero':
                      case 'classic':
                      case 'erokemo':
                      case 'fox_girl':
                      case 'futanari':
                      case 'lewdkemo':
                      case 'wallpaper':
                      case 'pussy_jpg':
                      case 'kemonomimi':
                      case 'nsfw_avatar':
                          paimon.getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lol}`).then((gambar) => {
                              anto.sendMessage(from, gambar, image, { quoted: fakeGIF })
                          })
                          break
                    case 'chiisaihentai':
                      case 'trap':
                      case 'blowjob':
                      case 'yaoi':
                      case 'ecchi':
                      case 'hentai':
                      case 'ahegao':
                      case 'hololewd':
                      case 'sideoppai':
                      case 'animefeets':
                      case 'animebooty':
                      case 'animethighss':
                      case 'hentaiparadise':
                      case 'animearmpits':
                      case 'hentaifemdom':
                      case 'lewdanimegirls':
                      case 'biganimetiddies':
                      case 'animebellybutton':
                      case 'hentai4everyone':
                          await paimon.getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lol}`).then((gambar) => {
                              anto.sendMessage(from, gambar, image, { quoted: fakeGIF })
                          })
                          break
                    case 'xhamster':
                      if (!isNsfw) return reply(dontActive(pushname, command))
                      if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                      query = args.join(" ")
                      get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamster?apikey=${lol}&url=${query}`)
                      get_result = get_result.result
                      ini_txt = `Title : ${get_result.title}\n`
                      ini_txt += `Duration : ${get_result.duration}\n`
                      ini_txt += `Uploader : ${get_result.author}\n`
                      ini_txt += `Upload : ${get_result.upload}\n`
                      ini_txt += `View : ${get_result.views}\n`
                      ini_txt += `Rating : ${get_result.rating}\n`
                      ini_txt += `Like : ${get_result.likes}\n`
                      ini_txt += `Dislike : ${get_result.dislikes}\n`
                      ini_txt += `Comment : ${get_result.comments}\n`
                      ini_txt += "Link : \n"
                      link = get_result.link
                      for (var x of link) {
                          ini_txt += `${x.type} - ${x.link}\n\n`
                      }
                      thumbnail = await getBuffer(get_result.thumbnail)
                      await anto.sendMessage(from, thumbnail, image, { quoted: hardi, caption: ini_txt })
                      break
                  case 'xnxxsearch':
                      if (!isNsfw) return reply(dontActive(pushname, command))
                      if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                      query = args.join(" ")
                      get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lol}&query=${query}`)
                      get_result = get_result.result
                      ini_txt = ""
                      for (var x of get_result) {
                          ini_txt += `Title : ${x.title}\n`
                          ini_txt += `Views : ${x.views}\n`
                          ini_txt += `Duration : ${x.duration}\n`
                          ini_txt += `Uploader : ${x.uploader}\n`
                          ini_txt += `Link : ${x.link}\n`
                          ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                      }
                      reply(ini_txt)
                      break
                  case 'xnxx':
                      if (!isNsfw) return reply(dontActive(pushname, command))
                      if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                      query = args.join(" ")
                      get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lol}&url=${query}`)
                      get_result = get_result.result
                      ini_txt = `Title : ${get_result.title}\n`
                      ini_txt += `Duration : ${get_result.duration}\n`
                      ini_txt += `View : ${get_result.view}\n`
                      ini_txt += `Rating : ${get_result.rating}\n`
                      ini_txt += `Like : ${get_result.like}\n`
                      ini_txt += `Dislike : ${get_result.dislike}\n`
                      ini_txt += `Comment : ${get_result.comment}\n`
                      ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                      ini_txt += `Description : ${get_result.description}\n`
                      ini_txt += "Link : \n"
                      ini_link = get_result.link
                      for (var x of ini_link) {
                          ini_txt += `${x.type} - ${x.link}\n\n`
                      }
                      thumbnail = await getBuffer(get_result.thumbnail)
                      await anto.sendMessage(from, thumbnail, image, { quoted: hardi, caption: ini_txt })
                      break
case 'nhentai': 
                    if (!isNsfw) return reply(dontActive(pushname, command))
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
                case 'nhentaipdf':
                    if (!isNsfw) return reply(dontActive(pushname, command))
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lol}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    await anto.sendMessage(from, ini_buffer, document, { quoted: hardi, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case 'nhentaisearch':
                    if (!isNsfw) return reply(dontActive(pushname, command))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nekopoi':
                    if (!isNsfw) return reply(dontActive(pushname, command))
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lol}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    await anto.sendMessage(from, ini_buffer, image, { quoted: hardi, caption: ini_txt })
                    break
                case 'nekopoisearch':
                    if (!isNsfw) return reply(dontActive(pushname, command))
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case 'jarak':
                      if (args.length == 0) return reply(`Example: ${prefix + command} jakarta - yogyakarta`)
                      pauls = args.join(" ")
                      teks1 = pauls.split("-")[0].trim()
                      teks2 = pauls.split("-")[1].trim()
                      get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${apikey}&kota1=${teks1}&kota2=${teks2}`)
                      x = get_result.result
                      ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
                      ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
                      ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
                      ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
                      ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
                      ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
                      ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
                      ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
                      ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
                      ini_txt += `   ╭───────────────❏\n`
                      ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
                      ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
                      ini_txt += `❍┤ Mobil : ${x.mobil}\n`
                      ini_txt += `❍┤ Motor : ${x.motor}\n`
                      ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
                      ini_txt += `   ╰───────────────❏\n`
                      reply(ini_txt)
                      break
                  case 'urbandictionary':
                      urb = args.join(" ")
                      get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/urdict?apikey=${apikey}&query=${urb}`)
                      lilu = get_result.result
                      for (var x of lilu) {
                          ini_txt = `\`\`\`Meaning :\n${x.definition}\`\`\`\n\n`
                          ini_txt += `\`\`\`Link : ${x.permalink}\`\`\`\n\n`
                          ini_txt += `\`\`\`Sounds Url : ${x.sound_urls[0]}\`\`\`\n\n`
                          ini_txt += `\`\`\`Like : ${x.thumbs_up}\`\`\`\n\n`
                          ini_txt += `\`\`\`Dislike : ${x.thumbs_down}\`\`\`\n\n`
                          ini_txt += `\`\`\`Created On : \n${x.written_on}\`\`\`\n\n`
                          ini_txt += `\`\`\`Author : ${x.author}\`\`\`\n\n`
                          ini_txt += `\`\`\`Word : ${x.word}\`\`\`\n\n`
                          ini_txt += `\`\`\`Defined Id : ${x.defid}\`\`\`\n\n`
                          ini_txt += `\`\`\`Example : ${x.example}\`\`\`\n\n`
                      }
                      reply(ini_txt)
                      break
                  case 'chord':
                      if (args.length == 0) return reply(`Example: ${prefix + command} Melukis senja`)
                      query = args.join(" ")
                      get_result = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${apikey}&query=${query}`)
                      get_result = get_result.result
                      ini_txt = `Title : ${get_result.title}\n`
                      ini_txt += `Chord : \n${get_result.chord}`
                      reply(ini_txt)
                      break
                    case 'heroml':              
                      if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                      if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))
                      paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} Fanny`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await paimon.getBuffer(get_result.icon)
                    await anto.sendMessage(from, ini_icon, image, { quoted: hardi, caption: ini_txt })
                    break
                case 'mlstalk':                  
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} 84830127/2169`)
                    ml_id = args[0]
                    get_result = await fetchJson(`http  s://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=${lol}`)
                    fakegroup(get_result.result)
                    break
                case 'genshin':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                 
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix)) 
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} jean`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${hero}?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.title}\n`
                    ini_txt += `Intro : ${get_result.intro}\n`
                    ini_txt += `Icon : ${get_result.icon}\n`
                    ini_icon = await paimon.getBuffer(get_result.cover1)
                    await anto.sendMessage(from, ini_icon, image, { quoted: hardi, caption: ini_txt })
                    ini_voice = await paimon.getBuffer(get_result.cv[0].audio[0])
                    await anto.sendMessage(from, ini_voice, audio, { quoted: hardi, mimetype: Mimetype.mp4Audio })
                    break
                case 'qrreader':                    
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                 
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))
                  paimon.limitAdd(sender)
                    if ((isMedia && !hardi.message.videoMessage || isQuotedImage) && args.length == 0) {
                        encmedia = isQuotedImage ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
                        const filePath = await anto.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/read-qr?apikey=${lol}`, {...options })
                        fs.unlinkSync(filePath)
                        fakegroup("Result: " + get_result.result)
                    } else {
                        fakegroup(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'wikipedia':                    
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                 
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    fakegroup(get_result)
                    break
                case 'translate':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))  
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/translatec/auto/${kode_negara}?apikey=${lol}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    fakegroup(init_txt)
                    break
                    case 'jadwaltv':                  
                      if (!isRegistered) return fakegroup(notRegister(pushname, prefix))            
                      if (paimon.isLimit(sender)) return
                      paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}  \n`
                    }
                    fakegroup(ini_txt)
                    break
                case 'jadwaltvnow':                    
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))  
                  paimon.limitAdd(sender)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    fakegroup(ini_txt)
                    break
                case 'newsinfo':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))
                  paimon.limitAdd(sender)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    fakegroup(ini_txt)
                    break
                case 'cnnindonesia':           
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))            
                if (paimon.isLimit(sender)) return  
                paimon.limitAdd(sender)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    fakegroup(ini_txt)
                    break
                case 'cnnnasional':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix)) 
                  paimon.limitAdd(sender)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    fakegroup(ini_txt)
                    break
                case 'cnninternasional':                     
                    if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                
                    if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))   
                    paimon.limitAdd(sender)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    fakegroup(ini_txt)
                    break
                case 'infogempa':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))  
                  paimon.limitAdd(sender)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await paimon.getBuffer(get_result.map)
                    await anto.sendMessage(from, get_buffer, image, { quoted: hardi, caption: ini_txt })
                    break
                case 'lirik2':                    
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))  
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${lol}&query=${query}`)
                    fakegroup(get_result.result)
                    break
                case 'cuaca':                  
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                  if (paimon.isLimit(sender)) return  
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    await anto.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: hardi })
                    fakegroup(ini_txt)
                    break
                case 'covidindo':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix)) 
                paimon.limitAdd(sender)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    fakegroup(ini_txt)
                    break
                case 'covidglobal':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))
                  paimon.limitAdd(sender)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    fakegroup(ini_txt)
                    break
                case 'kodepos':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                 
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))   
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${lol}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    fakegroup(ini_txt)
                    break
                case 'jadwalbola':                  
                if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                if (paimon.isLimit(sender)) return  
                paimon.limitAdd(sender)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    fakegroup(ini_txt)
                    break
                case 'indbeasiswa':                  
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))   
                  paimon.limitAdd(sender)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    fakegroup(ini_txt)
                    break
                case 'hoax':                    
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))  
                  paimon.limitAdd(sender)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    fakegroup(ini_txt)
                    break
                case 'nsfwcheck':                    
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                  if (paimon.isLimit(sender)) return  
                  paimon.limitAdd(sender)
                    if ((isMedia && !hardi.message.videoMessage || isQuotedImage) && args.length == 0) {
                        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
                        var filePath = await anto.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=${lol}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
                        fakegroup(`Is NSFW? ${is_nsfw}\nNSFW Score : ${get_result}`)
                    } else {
                        fakegroup(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'ocr':                   
                    if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                    if (paimon.isLimit(sender)) return  
                    paimon.limitAdd(sender)
                    if ((isMedia && !hardi.message.videoMessage || isQuotedImage) && args.length == 0) {
                        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
                        var filePath = await anto.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/ocr?apikey=${lol}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        fakegroup(`Result : ${get_result}`)
                    } else {
                        fakegroup(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                    case 'lk21':                    
                      if (!isRegistered) return fakegroup(notRegister(pushname, prefix))  
                      if (paimon.isLimit(sender)) return
                      paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await paimon.getBuffer(get_result.thumbnail)
                    await anto.sendMessage(from, thumbnail, image, { quoted: hardi, caption: ini_txt })
                    break
                case 'drakorongoing':                
                if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))
                paimon.limitAdd(sender)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    fakegroup(ini_txt)
                    break
                case 'wattpad':                    
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${lol}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await paimon.getBuffer(get_result.photo)
                    await anto.sendMessage(from, thumbnail, image, { quoted: hardi, caption: ini_txt })
                    break
                case 'wattpadsearch':                    
                if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))    
                paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    fakegroup(ini_txt)
                    break
                case 'cerpen':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))   
                  paimon.limitAdd(sender)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    fakegroup(ini_txt)
                    break
                case 'ceritahoror':             
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))    
                  paimon.limitAdd(sender)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await paimon.getBuffer(get_result.thumbnail)
                    await anto.sendMessage(from, thumbnail, image, { quoted: hardi, caption: ini_txt })
                    break

                    // Random Text //
                case 'quotes':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))   
                  paimon.limitAdd(sender)
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lol}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    fakegroup(`_${quotes}_\n\n*― ${author}*`)
                    break
                case 'quotesanime':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                  if (paimon.isLimit(sender)) return
                  paimon.limitAdd(sender)
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lol}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    fakegroup(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                    break
                case 'quotesdilan':                    
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 
                  if (paimon.isLimit(sender)) return
                  paimon.limitAdd(sender)
                    quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lol}`)
                    fakegroup(quotedilan.result)
                    break
                case 'quotesimage':                    
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                  if (paimon.isLimit(sender)) return
                  paimon.limitAdd(sender)
                    get_result = await paimon.getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lol}`)
            break
                case 'faktaunik':  
                case 'katabijak':
                case 'pantun':
                case 'bucin':                    
                if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                if (paimon.isLimit(sender)) return
                paimon.limitAdd(sender)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lol}`)
                    fakegroup(get_result.result)
                    break
                case 'randomnama':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                  if (paimon.isLimit(sender)) return
                  paimon.limitAdd(sender)
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lol}`)
                    fakegroup(anu.result)
                    break

                    // Searching
                case 'gimage':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                 
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await paimon.getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${lol}&query=${query}`)
                    await anto.sendMessage(from, ini_buffer, image, { quoted: hardi })
                    break
                case 'gimage2':                  
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))  
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gimage2?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await paimon.getBuffer(get_result[x])
                        await anto.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'konachan':                 
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))               
                  if (paimon.isLimit(sender)) return  
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await paimon.getBuffer(`https://api.lolhuman.xyz/api/konachan?apikey=${lol}&query=${query}`)
                    await anto.sendMessage(from, ini_buffer, image, { quoted: hardi })
                    break
                case 'wallpapersearch':                    if (!isRegistered) return fakegroup(notRegister(pushname, prefix))      
                if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))    
                paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${lol}&query=${query}`)
                    ini_buffer = await paimon.getBuffer(get_result.result)
                    await anto.sendMessage(from, ini_buffer, image, { quoted: hardi })
                    break
                case 'wallpapersearch2':                   
                if (!isRegistered) return fakegroup(notRegister(pushname, prefix))              
                if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))    
                paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper2?apikey=${lol}&query=${query}`)
                    ini_buffer = await paimon.getBuffer(get_result.result)
                    await anto.sendMessage(from, ini_buffer, image, { quoted: hardi })
                    break
                case 'playstore':                  
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))  
                paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    fakegroup(ini_txt)
                    break
                case 'shopee':                 
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return  
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    fakegroup(ini_txt)
                    break
                case 'google':                    
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix)) 
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    fakegroup(ini_txt)
                    break
                case 'stickerwa':                 
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                 
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))   
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lol}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await paimon.getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=${x}`)
                        await anto.sendMessage(from, ini_buffer, sticker)
                    }
                    break

        fr            // Primbon
                case 'artinama':                 
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))               
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix)) 
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} LoL Human`)
                    ini_nama = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${lol}&nama=${ini_nama}`)
                    fakegroup(get_result.result)
                    break
                case 'jodoh':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix)) 
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} Tahu & Bacem`)
                    ini_nama = args.join(" ").split("&")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Negative : ${get_result.negatif}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    fakegroup(ini_txt)
                    break
                case 'weton':                 
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                 
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix)) 
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    fakegroup(ini_txt)
                    break
                case 'jadian':                 
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                 
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))
                  paimon.limitAdd(sender)
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                  if (paimon.isLimit(sender)) return
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    fakegroup(ini_txt)
                    break
                case 'tebakumur':                 
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                 
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix)) 
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} LoL Human`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} LoL Human`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${lol}&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    fakegroup(ini_txt)
                    break

                    // Entertainment
                case 'asupan':                  
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix)) 
                  paimon.limitAdd(sender)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${lol}`)
                    ini_buffer = await paimon.getBuffer(get_result.result)
                    await anto.sendMessage(from, ini_buffer, video, { quoted: hardi, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                case 'wancak':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))    
                  paimon.limitAdd(sender)
                    ini_buffer = await paimon.getBuffer(`https://api.lolhuman.xyz/api/onecak?apikey=${lol}`)
                    await anto.sendMessage(from, ini_buffer, image, { quoted: hardi })
                    break
                    case 'quotemaker3':                   
                      if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                    if (paimon.isLimit(sender)) return
                    paimon.limitAdd(sender)
                    if ((isMedia && !hardi.message.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return fakegroup(`Example: ${prefix + command} LoL|Human`)
                        encmedia = isQuotedImage ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
                        filePath = await anto.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ")
                        request({
                            url: `https://api.lolhuman.xyz/api/quotemaker3?apikey=${lol}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "text": ini_txt
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            anto.sendMessage(from, ini_buff, image, { quoted: hardi }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        fakegroup(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                    case 'roundsticker':   
                      if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                      if (paimon.isLimit(sender)) return
                      paimon.limitAdd(sender)
                    if ((isMedia && !hardi.message.videoMessage || isQuotedImage) && args.length == 0) {
                        encmedia = isQuotedImage ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
                        filePath = await anto.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpwround?apikey=${lol}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            anto.sendMessage(from, ini_buff, sticker, { quoted: hardi }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        fakegroup(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'ttp':                    
                case 'ttp2':                    
                case 'ttp3':                    
                case 'ttp4':                    
                case 'attp2':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))                
                paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} LoL Human`)
                    ini_txt = encodeURIComponent(args.join(' '))
                    ini_buffer = await paimon.getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lol}&text=${ini_txt}`)
                    await anto.sendMessage(from, ini_buffer, sticker, { quoted: hardi })
                    break
                case 'attp':
                  case 'ttg':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))                
                paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} LoL Human`)
                    ini_txt = encodeURIComponent(args.join(' '))
                    ini_buffer = await paimon.getBuffer(`https://api.xteam.xyz/attp?file&text=${ini_txt}`)
                    await anto.sendMessage(from, ini_buffer, sticker, { quoted: hardi })
                    break
                case 'wasted':
                  case 'wanted':
                    case 'utatoo':
                    case 'unsharpen':
                    case 'tobecontinued':
                    case 'thanos':
                    case 'sniper':
                    case 'sharpen':
                    case 'sepia':
                    case 'scary':
                    case 'rip':
                    case 'redple':
                    case 'rejected':
                    case 'posterize':
                    case 'ps4':
                    case 'pixelize':
                    case 'missionpassed':
                    case 'moustache':
                    case 'lookwhatkarenhave':
                    case 'jail':
                    case 'invert':
                    case 'instagram':
                    case 'greyscale':
                    case 'glitch':
                    case 'gay':
                    case 'frame':
                    case 'fire':
                    case 'distort':
                    case 'dictator':
                    case 'deepfry':
                    case 'ddungeon':
                    case 'circle':
                    case 'challenger':
                    case 'burn':
                    case 'brazzers':
                    case 'beautiful':
                    case 'approved3000years':
                      if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                      if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix)) 
                      paimon.limitAdd(sender)
                      boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
                      delb = await anto.downloadAndSaveMediaMessage(boij, `./media/${sender}.png`)
                      anu = paimon.toPostUrl(delb)
                     const ini_gen = `${command}`
                     console.log(ini_gen)
                     const imoj = await ameApi.generate(ini_gen, { url: anuk})
                     fakeUdin(imoj, image, `${command}`)
                     break
                case 'triggered':                  
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix)) 
                  paimon.limitAdd(sender)
                  boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
                  delb = await anto.downloadAndSaveMediaMessage(boij, `./media/${sender}.png`)
                 anu = await paimon.toPostUrl(delb)
                 const imgj = await ameApi.generate("triggered", { url: anu})
                 path = './triggered.gif'
                 retvid = './triggered.mp4'
                 fs.writeFileSync(path, imgj)
                 const mediams = fs.readFileSync(path)
                 exec(`ffmpeg -i ${path} -s 480x480 -vf crop=480:480,setdar=1:1,setsar=1:1 ${retvid}`)
                  paimon.reply(from, waiting(pushname), hardi)
                   await ffmpeg(`${path}`)
                  .inputFormat("gif")
                  .on('start', function (cmd) {
                  console.log(`Started : ${cmd}`)
                  })
                  .on('error', function (err) {
                    console.log(`Error : ${err}`)
                  fs.unlinkSync(path)
            
                  paimon.reply(from, mess.error.api, hardi)
                    })
                  .on('end', function () {
                    console.log('Finish')
                  exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                  //if (error) return paimon.reply(from, mess.error.api, hardi)
                  paimon.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), hardi)
                  fs.unlinkSync(retvid)
                  fs.unlinkSync(`./sticker/${sender}.webp`)
                    })
                  })
                  .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                  .toFormat('webp')
                  .save(`./sticker/${sender}.webp`)
                 
                    break
                case 'wasted':                  
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                 
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))               
                  paimon.limitAdd(sender)
                    ini_url = args[0]
                    ini_buffer = await paimon.getBuffer(`https://api.lolhuman.xyz/api/editor/wasted?apikey=${lol}&img=${ini_url}`)
                    await anto.sendMessage(from, ini_buffer, image, { quoted: hardi })
                    break
                case 'smoji':                 
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await paimon.getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lol}`)
                    await anto.sendMessage(from, ini_buffer, sticker, { quoted: hardi })
                    break
                case 'smoji2':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))   
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} 😭`)
                    emojil = args[0]
                    try {
                        emojilo = encodeURI(emojil[0])
                    } catch {
                        emojilo = encodeURI(emojil)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emojilo}?apikey=${lol}`)
                    ini_buffer = await paimon.getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lol}&img=` + ini_buffer.result.emoji.whatsapp)
                    await anto.sendMessage(from, ini_buffer, sticker, { quoted: hardi })
                    break
                case 'fakedonald':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))  
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await paimon.getBuffer(`https://api.lolhuman.xyz/api/tweettrump?apikey=${lol}&text=${ini_txt}`)
                    await anto.sendMessage(from, ini_buffer, image, { quoted: hardi })
                    break
               
                case 'ktpmaker':                   
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))  
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await paimon.getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${lol}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    await anto.sendMessage(from, ini_buffer, image, { quoted: hardi })
                    break
                    case 'stalktwitter':                 
                      if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                      if (paimon.isLimit(sender)) return
                      paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} jokowi`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=${lol}`)
                    ini_result = ini_result.result
                    ini_buffer = await paimon.getBuffer(ini_result.profile_picture)
                    ini_txt = `Username : ${ini_result.screen_name}\n`
                    ini_txt += `Name : ${ini_result.name}\n`
                    ini_txt += `Tweet : ${ini_result.tweet}\n`
                    ini_txt += `Joined : ${ini_result.joined}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Like : ${ini_result.like}\n`
                    ini_txt += `Description : ${ini_result.description}`
                    anto.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
                case 'stalktiktok':                  
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                 
                  if (paimon.isLimit(sender)) return  
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} bulansutena`)
                    stalk_toktok = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `Username : ${get_result.username}\n`
                    ini_txt += `Nickname : ${get_result.nickname}\n`
                    ini_txt += `Followers : ${get_result.followers}\n`
                    ini_txt += `Followings : ${get_result.followings}\n`
                    ini_txt += `Likes : ${get_result.likes}\n`
                    ini_txt += `Video : ${get_result.video}\n`
                    ini_txt += `Bio : ${get_result.bio}\n`
                    pp_tt = await paimon.getBuffer(get_result.user_picture)
                    anto.sendMessage(from, pp_tt, image, { quoted: hardi, caption: ini_txt })
                    break

                    // Other
                case 'ssweb':                  
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                 
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))  
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await paimon.getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${lol}&url=${ini_link}`)
                    await anto.sendMessage(from, ini_buffer, image, { quoted: hardi })
                    break
                case 'ssweb2':                    
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))  
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await paimon.getBuffer(`https://api.lolhuman.xyz/api/sswebfull?apikey=${lol}&url=${ini_link}`)
                    await anto.sendMessage(from, ini_buffer, image, { quoted: hardi })
                    break
                case 'shortlink':                  
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                   
                  if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix)) 
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${lol}&url=${ini_link}`)
                    fakegroup(ini_buffer.result)
                    break
                case 'spamsms':                  
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                  
                  if (paimon.isLimit(sender)) return
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${lol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${lol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${lol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${lol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${lol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${lol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${lol}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${lol}&nomor=${nomor}`)
                    fakegroup("Success")
                    break



                case '1977':
                  case 'aden':
                  case 'brannan':
                  case 'brooklyn':
                  case 'clarendon':
                  case 'gingham':
                  case 'hudson':
                  case 'inkwell':
                  case 'earlybird':
                  case 'kelvin':
                  case 'lark':
                  case 'lofi':
                  case 'maven':
                  case 'mayfair':
                  case 'moon':
                  case 'nashville':
                  case 'perpetua':
                  case 'reyes':
                  case 'rise':
                  case 'slumber':
                  case 'stinson':
                  case 'toaster':
                  case 'valencia':
                  case 'walden':
                  case 'willow':
                  case 'xpro2':
                    if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                 
                    if (paimon.isLimit(sender)) return reply(thisLimit(pushname, prefix))
                    paimon.limitAdd(sender)
                    if ((isMedia && !hardi.message.videoMessage || isQuotedImage) && args.length == 0) {
                        encmedia = isQuotedImage ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
                        filePath = await anto.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.jpg')
                        request({
                            url: `https://api.lolhuman.xyz/api/filter/${command}?apikey=${lol}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            anto.sendMessage(from, ini_buff, image, { quoted: hardi }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        fakegroup(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                  case 'art':
                  case 'bts':
                  case 'exo':
                  case 'elf':
                  case 'loli':
                  case 'neko':
                  case 'waifu':
                  case 'shota':
                  case 'husbu':
                  case 'sagiri':
                  case 'shinobu':
                  case 'megumin':
                  case 'wallnime':           
                    if (!isRegistered) return fakegroup(notRegister(pushname, prefix))               
                    if (paimon.isLimit(sender)) return
                    paimon.limitAdd(sender)
                    paimon.getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lol}`).then((gambar) => {
                        anto.sendMessage(from, gambar, image, { quoted: hardi })
                    })
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))                 
                  if (paimon.isLimit(sender)) return  
                  paimon.limitAdd(sender)
                    if (args.length == 0) return fakegroup(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    paimon.getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lol}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        anto.sendMessage(from, gambar, image, { quoted: hardi })
                    })
                    break


   // BALANCE AND GAME
   case 'setbackground':
   case 'setbg':
   if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
   if (!isLevelingOn) return fakegroup('*Leveling Status: Offline*\n_silahkan hubungi admin group_')
   if (!isGroup) return fakegroup(messs.GroupOnly)
   const levels = level.getLevelingLevel(sender, _level)
   const xps = level.getLevelingXp(sender, _level)
   if (levels === undefined && xps === undefined) return fakegroup('*Level Mu Belum aktif*')
   if ((isMedia && !hardi.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
     boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
     delb = await anto.downloadAndSaveMediaMessage(boij, `./media/${sender}`)
     umgbb = await imgbb(imgb, delb)
     const linkos = umgbb.display_url
     card.replaceBg(sender, linkos, _bg)
     fakegroup('*Background Anda Telah Berhasil Tersetel silahkan cek !level*')
   } else {
   fakegroup('*Tag Photo Bang*')
   }
   break
            case 'level':
            if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
            if (!isLevelingOn) return fakegroup("Leveling Nya Lom Aktif")
            if (!isGroup) return fakegroup(groupOnly(pushname))
            const userLevel = level.getLevelingLevel(sender, _level)
            const begel = card.getBg(sender, _bg)
            const userXp = level.getLevelingXp(sender, _level)
            const currentRank = Number(level.getUserRank(sender, _level))
            const requiredXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
            try {
            avatarem = await anto.getProfilePicture(sender)
            } catch {
            avatarem = errorimg
            }
            const randombar = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
            const _randombar = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
            const rank = new canvas.Rank()
                    .setAvatar(avatarem)
                    .setLevel(userLevel)
                    .setLevelColor('#ffa200', '#ffa200')
                    .setRank(currentRank, role, true)
                    .setCurrentXP(userXp)
                    .setOverlay('#000000', 0.5, true)
                    .setRequiredXP(requiredXp)
                    .setProgressBar([randombar, _randombar], 'GRADIENT')
                    .setBackground('IMAGE', begel)
                    .setUsername(pushname)
                    .setDiscriminator(sender.substring(6, 10))
                    rank.build()
                    .then(async (buffer) => {
                    fs.writeFileSync('./rank.png', buffer)
                    vuffer = fs.readFileSync('./rank.png')
                    fs.unlinkSync('./rank.png')
                    anto.sendMessage(from, vuffer, MessageType.image, {quoted: fakeGIF, })
                    })
                    .catch(async (err) => {
                        console.error(err)
                       reply(from, 'Error!', id)
                    })
            break
   case 'cekduit':
   case 'uang':
   case 'mybalance':
   case 'saldo':
   case 'tabungan': // naik haji :v
   if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
   if (hardi.message.extendedTextMessage != undefined){
   mentioned = hardi.message.extendedTextMessage.contextInfo.mentionedJid
   isDuit = duit.checkATMuser(mentioned[0])
   textduite = ` Saat Ini @${mentioned[0].split('@')[0]} Memiliki Saldo Sebesar *Rp.${isDuit};-*\nDapat Di Belanjakan Limit, Judi, Dll`
   anto.sendMessage(from, textduite, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": fake, "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)} } }, contextInfo: {"mentionedJid": [ mentioned[0] ]}})
   } else {
   myDuite = duit.checkATMuser(sender)
   iniDuite = `Saat Ini Anda ${pushname} Memiliki Balance/Saldo Sebesar *Rp.${myDuite};-*\nDapat Di Belanjakan Di Shop Limit Maupun Judi`
   fakegroup(iniDuite)
   }
   break
   case 'transfer':
    if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                if (!isGroup) return fakegroup(groupOnly(pushname))
                if (hardi.message.extendedTextMessage != undefined){
                  mentioned = hardi.message.extendedTextMessage.contextInfo.mentionedJid
                const duitnya = Number(args[1])
                if (duitnya <= 0) return fakegroup(`*Jumlah Tidak Boleh Mines*`)
                const orng = mentioned[0]
                if (duit.checkATMuser(serial) <= duitnya) return fakegroup(from, `*Maaf Kak Duit Mu Cuma ${duit.checkATMuser(serial)} Sok Sok-An Ngasih Saldo Rp: ${duitnya} Kerja Goblok*`)
                if (duit.checkATMuser(serial) >= duitnya) {
                    duit.addDuit(orng, duitnya)
                    duit.removeDuit(serial, duitnya)
                    anto.sendMessage(from, `Sukses Transfer Saldo Ke @${mentioned.split('@'[0])} Sekarang Saldo Saat Ini Berkurang ${args[1]}`, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": fake, "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)} } }, contextInfo: {"mentionedJid": [mentioned]}})
                }} else {
                    fakegroup('*Orang Nya mana Kak*')
                }
                break
            break
    // astro Bot
   case 'suit':
   try {
     if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
     // if (game.isLimitGame(sender)) return
     // game.limitAddGame(sender)
     const text = args.join(' ')
     if (!text) return fakegroup(`Pilihan yang tersedia\n\ngunting, kertas, batu\n\n${prefix}suit gunting\n\nkasih spasi!`)
     var astro = Math.random()
     if (astro < 0.34) {
       astro = 'batu'
     } else if (astro > 0.34 && astro < 0.67) {
       astro = 'gunting'
     } else {
       astro = 'kertas'
     }
     if (text == astro) {
       fakegroup(`❒「  *SUIT GAME*  」\n${gaya}Hasil Seri!\nkamu: ${text}\nBot: ${astro}${gaya}\n*Gambare*`)
     } else if (text == 'batu') {
       if (astro == 'gunting') {
         // uang.addDuit(sender)
         fakegroup(`❒「  *SUIT GAME*  」\nKamu menang! Kamu Mendapat Balance Sebesar Rp.1000\nKamu: ${text}\nBot: ${astro}`)
       } else {
         fakegroup(`❒「  *SUIT GAME*  」\nKamu kalah!\nkamu: ${text}\nBot: ${astro}`)
       }
     } else if (text == 'gunting') {
       if (astro == 'kertas') {
         //uang.addDuit(sender)
         fakegroup(`❒「  *SUIT GAME*  」\nKamu menang! Kamu Mendapat Balance Sebesar Rp.1000\nKamu: ${text}\nBot: ${astro}`)
       } else {
         fakegroup(`❒「  *SUIT GAME*  」\nKamu kalah!\nkamu: ${text}\nBot: ${astro}`)
       }
     } else if (text == 'kertas') {
       if (astro == 'batu') {
         //uang.addDuit(sender)
         fakegroup(`❒「  *SUIT GAME*  」\nKamu menang! Kamu Mendapat Balance Sebesar Rp.1000\nKamu: ${text}\nBot: ${astro}`)
       } else {
         fakegroup(`❒「  *SUIT GAME*  」\nKamu kalah!\nkamu: ${text}\nBot: ${astro}`)
       }
     } else {
       fakegroup('*Kayak Anak Tk Aja Anak Tk Aja Tau Gunting Batu Kertas*')
     }
   } catch {
     fakegroup('*Error*')
   }
   break
    case 'facebook':
    case 'fb':
    if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
    if (args.length < 1) return fakegroup("Apa Yang Mau Di Cari? ")
    if (paimon.isLimit(sender)) return
    paimon.limitAdd(sender)
    if (!isUrl(args[0]) && !args[0].includes('facebook')) return fakegroup('*Error*')
    teks = args.join(' ')
    fakegroup(waiting(pushname))
    res = await fbDown(teks).catch(e => {
      reply('_[ ! ] Error Terjadi Kesalahan Dalam Memasuki Web Atau Link Error_')
    })
    a = res[0]
    result = `❒「  *${botname}*  」
    ├ *Judul :* ${a.judul}
    ├ *Source :* ${a.source}
    ├ *Ukuran :* ${a.size}
    ├ *Kualitas :* ${a.quality}
    ├ *Type :* ${a.type}
    └ *Nama File :* ${a.judul}.${a.type}
    `
    sendFileFromUrl(a.thumb, image, { caption: result, quoted: hardi })
    sendFileFromUrl(a.link, video, { mimetype: 'video/mp4', quoted: hardi, filename: `${a.judul}.${a.type}` })
    break
    case 'jadwalsholat':
      if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
      if (args.length < 1) return fakegroup("Apa Yang Mau Di Cari? ")
      if (paimon.isLimit(sender)) return
      paimon.limitAdd(sender)
      teksu = args.join(' ')
      fakegroup(waiting(pushname))
      jadwalSolat(teksu).then((res) => {
        const anujad = `❒「  *${botname}*  」\nJadwal Sholat ${teksu}\nDaerah: ${res.daerah},\nTanggal: ${res.tanggal},\nShubuh: ${res.shubuh},\nDzuhur: ${res.dzuhur},\nAshar: ${res.ashar},\nMagrib: ${res.maghrib},\nIsya: ${res.isya}`
        fakegroup(anujad)
      })
    break
    case 'lirik':
    case 'liriklagu':
    if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
    if (args.length < 1) return fakegroup("Apa Yang Mau Di Cari? ")
    if (paimon.isLimit(sender)) return
    paimon.limitAdd(sender)
    fakegroup(waiting(pushname))
    teksu = args.join(' ')
    lirikLagu(teksu).then((res) => {
      let lirik = `❒「  *${botname}*  」
    └ *Lirik Lagu :*
    
    
    ${res[0].result}
    `
      fakegroup(lirik)
    })
		case 'wiki':
			if (args.length < 1) return fakegroup(' Yang Mau Di Cari Apa? ')
			teks = args.join(' ')
			res = await wikiSearch(teks).catch(e => {
			  return fakegroup('_[ ! ] Error Hasil Tidak Ditemukan_')
			})
			result = `❒「  *Wiki*  」
			├ *Judul :* ${res[0].judul}
			└ *Wiki :* ${res[0].wiki}`
			sendFileFromUrl(res[0].thumb, image, { quoted: hardi, caption: result }).catch(e => {
			  fakegroup(result)
			})
			break
case 'pinterest':
case 'pin':

if (args.length < 1) return fakegroup('Apa Yang Mau Dicari?')
fakegroup(waiting(pushname))
teks = args.join(' ')
await peimon.Pinterest(teks).then(res => {
for (let u = 0; u < 4; u++) {
sendFileFromUrl(res.result[u], image, {quoted: hardi, caption: `*Hasil Pencarian Dari :* ${teks}`})
console.log(res)
}
})
//endFileFromUrl(random, image, {quoted: hardi, caption: `*Hasil Pencarian Dari :* ${teks}`})
break
case 'playdl2':

if (args.length < 1) return fakegroup('Apa Yang Mau Dicari?')
teks = args.join(' ')
fakegroup(waiting(pushname))
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
fakegroup('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
fakegroup(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)
let thumbInfo = `❒「  *Youtube Search*  」
├ *Judul :* ${res.all[0].title}
├ *ID Video :* ${res.all[0].videoId}
├ *Diupload Pada :* ${res.all[0].ago}
├ *Views :* ${res.all[0].views}
├ *Durasi :* ${res.all[0].timestamp}
├ *Channel :* ${res.all[0].author.name}
└ *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: hardi, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
fakegroup('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: hardi, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
fakegroup('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
fakegroup(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)
let thumbInfo = `❒「  *${botname}*  」
├ *Judul :* ${res.all[0].title}
├ *ID Video :* ${res.all[0].videoId}
├ *Diupload Pada :* ${res.all[0].ago}
├ *Views :* ${res.all[0].views}
├ *Durasi :* ${res.all[0].timestamp}
├ *Channel :* ${res.all[0].author.name}
└ *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: hardi, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
fakegroup('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: hardi, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'jagokata':
case 'quote':
case 'quotes':
case 'katamutiara':
if (args.length < 1) return fakegroup('Yang mau di cari apaan?')
teks = args.join(' ')
res = await jagoKata(teks)
let hehasil = `*“* ${res[0].isi} *”*
_~${res[0].by}_`
fakegroup(hehasil)
break
case 'ytmp32':

if (args.length < 1) return fakegroup('Link Nya Mana?')

if(!isUrl(args[0]) && !args[0].includes('youtu')) return fakegroup(mess.error.Iv)
teks = args.join(' ')
fakegroup(waiting(pushname))
res = await y2mateA(teks).catch(e => {
fakegroup('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
result = `❒「  ${botname}  」
├ *Judul :* ${res[0].judul}
├ *Ukuran :* ${res[0].size}
├ *Kualitas :* ${res[0].quality}kbps
├ *Nama File :* ${res[0].output}
└ *Output :* ${res[0].tipe}

_*Tunggu Proses Uploading.....*_
`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: hardi}).then((lalu) => {
sendFileFromUrl(res[0].link, audio, {quoted: hardi, mimetype: 'audio/mp4', filename: res[0].output})
})
break
case 'ytmp42':
if (args.length < 1) return fakegroup('Link Nya Mana?')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return fakegroup(mess.error.Iv)
teks = args.join(' ')
fakegroup(waiting(pushname))
res = await y2mateV(teks).catch(e => {
fakegroup('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
result = `❒「  *${botname}*  」
├ *Judul :* ${res[0].judul}
├ *Ukuran :* ${res[0].size}
├ *Kualitas :* ${res[0].quality}p
├ *Nama File :* ${res[0].output}
└ *Output :* ${res[0].tipe}

_*Tunggu Proses Uploading.....*_
`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: hardi}).then((lalu) => {
sendFileFromUrl(res[0].link, video, {quoted: hardi, mimetype: 'video/mp4', filename: res[0].output})
})
break
case 'fast':
	if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
	if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
	paimon.limitAdd(sender)
	fakegroup(waiting(pushname))
	try {
	if (!isQuotedVideo) return fakegroup('Reply videonya!')
      fakegroup(waiting(pushname))
     encmedia = JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
      media = await anto.downloadAndSaveMediaMessage(encmedia)
      ran = getRandom('.mp4')
      exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
	fs.unlinkSync(media)
	if (err) return fakegroup(`Err: ${err}`)
	buffer453 = fs.readFileSync(ran)
	anto.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: hardi })
	fs.unlinkSync(ran)
      })
	} catch {
	  fakegroup('*Error*')
	}
      break
      case 'slowvid':
	if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
	if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
	paimon.limitAdd(sender)
	fakegroup(waiting(pushname))
	try {
	if (!isQuotedVideo) return fakegroup('Reply videonya!')
      fakegroup(waiting(pushname))
     encmedia = JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
      media = await anto.downloadAndSaveMediaMessage(encmedia)
      ran = getRandom('.mp4')
      exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
	fs.unlinkSync(media)
	if (err) return fakegroup(`Err: ${err}`)
	buffer453 = fs.readFileSync(ran)
	anto.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: hardi })
	fs.unlinkSync(ran)
      })
	}
      catch {
	fakegroup('error')
      }
      break
      case 'reverse':
	if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
	if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
	paimon.limitAdd(sender)
	fakegroup(waiting(pushname))
	try{
	if (!isQuotedVideo) return fakegroup('Reply videonya!')
      encmedia = JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
     media = await anto.downloadAndSaveMediaMessage(encmedia)
      ran = getRandom('.mp4')
      exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
	fs.unlinkSync(media)
	if (err) return fakegroup(`Err: ${err}`)
	buffer453 = fs.readFileSync(ran)
	anto.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: hardi })
	fs.unlinkSync(ran)
      })
	} catch {
	  fakegroup('*Error*')
	}
      break
		      case 'tebakgambar': // case by piyo-chan
          if (!isRegistered) return fakegroup("Daftar Dlu Atuh")
          if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return fakegroup("Selesein yg sebelumnya dulu atuh")
          get_result = await axios.get(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=${lol}`)
          get_result1 = get_result.data.result
          ini_image = get_result1.image
          jawaban = get_result1.answer
          ini_buffer = await paimon.getBuffer(ini_image)
          anto.sendMessage(from, ini_buffer, MessageType.image, { quoted: hardi, caption: "Jawab gk? Jawab lahhh, masa enggak. 60 detik cukup kan? gk cukup pulang aja" }).then(() => {
          tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
          fs.writeFileSync("./database/user/tebakgambar.json", JSON.stringify(tebakgambar))
          })
          setTimeout(() => {
           if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
          fakegroup(`*Jawaban: ${jawaban}*\n*Soal Sudah Ditutup*`)
          delete tebakgambar[sender.split('@')[0]]
          fs.writeFileSync("./database/user/tebakgambar.json", JSON.stringify(tebakgambar))
}
          }, 60000);
break
case 'tebakgambar2': // case by piyo-chan & multi
          get_result = await axios.get(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=${lol}`)
          get_result1 = get_result.data.result
          ini_image = get_result1.image
          jawaban = get_result1.answer
          ini_buffer = await paimon.getBuffer(ini_image)
          anto.sendMessage(from, ini_buffer, MessageType.image, { quoted: hardi, caption: "Jawab gk? Jawab lahhh, masa enggak. 60 detik cukup kan? gk cukup pulang aja" }).then(() => {
         tebakgambar2.push(jawaban)
          fs.writeFileSync("./database/user/tebakgambar2.json", JSON.stringify(tebakgambar2))
          })
          setTimeout(() => {
           if (tebakgambar2.includes(jawaban)) {
          fakegroup(`*Jawaban: ${jawaban}*\n*Soal Sudah Ditutup*`)
          tebakgambar2.splice(jawaban, 1)
          fs.writeFileSync("./database/user/tebakgambar2.json", JSON.stringify(tebakgambar2))
}
          }, 60000);
break
          case 'canceltebakgambar':
          if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return paimon.reply("Anda tidak memiliki tebak gambar sebelumnya")
          delete tebakgambar[sender.split('@')[0]]
          fs.writeFileSync("./database/user/tebakgambar.json", JSON.stringify(tebakgambar))
          fakegroup("Success mengcancel tebak gambar sebelumnya")
break
case 'gemuk':
					 if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
					 if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
					 paimon.limitAdd(sender)
					 fakegroup(waiting(pushname))
					try{
	        if (!isQuotedAudio) return reply('Reply audio nya om')
	         encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
	         media = await anto.downloadAndSaveMediaMessage(encmedia)
	         ran = getRandom('.mp3')
	        exec(`ffmpeg -i ${media} ${gemuk} ${ran}`, (err, stderr, stdout) => {
	        fs.unlinkSync(media)
	        if (err) return reply('Error!')
	        const hah = fs.readFileSync(ran)
	        anto.sendMessage(from, hah, MessageType.audio,{ mimetype: "audio/mp4", ptt: true, quoted: hardi})
	          fs.unlinkSync(ran)
					 })
	         } catch {
	        fakegroup("anu error")
	        }
	break
					case 'ghost':
					if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
					if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
					paimon.limitAdd(sender)
					fakegroup(waiting(pushname))
					try {
					  if (!isQuotedAudio) return reply('Reply audio nya om')
					  encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
					   media = await anto.downloadAndSaveMediaMessage(encmedia)
					   ran = getRandom('.mp3')
					  exec(`ffmpeg -i ${media} ${ghost} ${ran}`, (err, stderr, stdout) => {
					    fs.unlinkSync(media)
					    if (err) return reply('Error!')
					    const hah = fs.readFileSync(ran)
					    anto.sendMessage(from, hah, MessageType.audio, { mimetype: "audio/mp4", ptt: true, quoted: hardi })
					    fs.unlinkSync(ran)
					  })
					} catch {
					  fakegroup("anu error")
					}
					break
				  case 'blub':
				  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
				  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
				  paimon.limitAdd(sender)
				  fakegroup(waiting(pushname))
				  try {
				    if (!isQuotedAudio) return reply('Reply audio nya om')
				    encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
				    media = await anto.downloadAndSaveMediaMessage(encmedia)
				    ran = getRandom('.mp3')
				    exec(`ffmpeg -i ${media} ${blub} ${ran}`, (err, stderr, stdout) => {
				      fs.unlinkSync(media)
				      if (err) return reply('Error!')
				      const hah = fs.readFileSync(ran)
				      anto.sendMessage(from, hah, MessageType.audio, { mimetype: "audio/mp4", ptt: true, quoted: hardi })
				      fs.unlinkSync(ran)
				    })
				  } catch {
				    fakegroup("anu error")
				  }
				  break
				  case 'tupai':
				  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
				  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
				  paimon.limitAdd(sender)
				  fakegroup(waiting(pushname))
				  try {
				    if (!isQuotedAudio) return reply('Reply audio nya om')
				    encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
				     media = await anto.downloadAndSaveMediaMessage(encmedia)
				     ran = getRandom('.mp3')
				    exec(`ffmpeg -i ${media} ${tupai} ${ran}`, (err, stderr, stdout) => {
				      fs.unlinkSync(media)
				      if (err) return reply('Error!')
				      const hah = fs.readFileSync(ran)
				      anto.sendMessage(from, hah, MessageType.audio, { mimetype: "audio/mp4", ptt: true, quoted: hardi })
				      fs.unlinkSync(ran)
				    })
				  } catch {
				    fakegroup("anu error")
				  }
				  break 
				  case 'robot':
				  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
				  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
				  paimon.limitAdd(sender)
				  fakegroup(waiting(pushname))
				  try {
				    if (!isQuotedAudio) return reply('Reply audio nya om')
				    encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
				     media = await anto.downloadAndSaveMediaMessage(encmedia)
				     ran = getRandom('.mp3')
				    exec(`ffmpeg -i ${media} ${robot} ${ran}`, (err, stderr, stdout) => {
				      fs.unlinkSync(media)
				      if (err) return reply('Error!')
				      const hah = fs.readFileSync(ran)
				      anto.sendMessage(from, hah, MessageType.audio, { mimetype: "audio/mp4", ptt: true, quoted: hardi })
				      fs.unlinkSync(ran)
				    })
				  } catch {
				    fakegroup("anu error")
				  }
				  break
				  case 'leveling':
				if (!isGroup) return fakegroup(groupOnly(pushname))
				if (!groupAdmins) return fakegroup(onlyOwner(pushname))
				if (args.length < 1) return fakegroup('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (args[0] === '1') {
				if (isLevelingOn) return fakegroup('*Fitur level sudah aktif sebelum nya*')
				_leveling.push(from)
				fs.writeFileSync('./database/bot/leveling.json', JSON.stringify(_leveling))
			  fakegroup('*Suskes Di Aktifkan*')
				} else if (args[0] === '0') {
				_leveling.splice(from, 1)
				fs.writeFileSync('./database/bot/leveling.json', JSON.stringify(_leveling))
				fakegroup('*Suskses*')
				} else {
				fakegroup('error')
				}
				break
				  case 'slow':
				  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
				  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
				  paimon.limitAdd(sender)
				  fakegroup(waiting(pushname))
				  try {
				    if (!isQuotedAudio) return reply('Reply audio nya om')
				    encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
				     media = await anto.downloadAndSaveMediaMessage(encmedia)
				    ran= getRandom('.mp3')
				    exec(`ffmpeg -i ${media} ${slow} ${ran}`, (err, stderr, stdout) => {
				      fs.unlinkSync(media)
				      if (err) return reply('Error!')
				      const hah = fs.readFileSync(ran)
				      anto.sendMessage(from, hah, MessageType.audio, { mimetype: "audio/mp4", ptt: true, quoted: hardi })
				      fs.unlinkSync(ran)
				    })
				  } catch {
				    fakegroup("anu error")
				  }
				  break
				  case 'nightcore':
				  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
				  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
				  paimon.limitAdd(sender)
				  fakegroup(waiting(pushname))
				  try {
				    if (!isQuotedAudio) return reply('Reply audio nya om')
				    encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
				    media = await anto.downloadAndSaveMediaMessage(encmedia)
				    ran= getRandom('.mp3')
				    exec(`ffmpeg -i ${media} ${nightcore} ${ran}`, (err, stderr, stdout) => {
				      fs.unlinkSync(media)
				      if (err) return reply('Error!')
				      const hah = fs.readFileSync(ran)
				      anto.sendMessage(from, hah, MessageType.audio, { mimetype: "audio/mp4", ptt: true, quoted: hardi })
				      fs.unlinkSync(ran)
				    })
				  } catch {
				    fakegroup("anu error")
				  }
				  break
	  case 'hode':
	  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
	  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
	  paimon.limitAdd(sender)
	  fakegroup(waiting(pushname))
	  try {
	    if (!isQuotedAudio) return reply('Reply audio nya om')
	     encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
	     media = await anto.downloadAndSaveMediaMessage(encmedia)
	    ran = getRandom('.mp3')
	    exec(`ffmpeg -i ${media} ${hode} ${ran}`, (err, stderr, stdout) => {
	      fs.unlinkSync(media)
	      if (err) return reply('Error!')
	      const hah = fs.readFileSync(ran)
	      anto.sendMessage(from, hah, MessageType.audio, { mimetype: "audio/mp4", ptt: true, quoted: hardi })
	      fs.unlinkSync(ran)
	    })
	  } catch {
	    fakegroup("anu error")
	  }
	  break
		case 'imut':
		if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
		if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
		paimon.limitAdd(sender)
		fakegroup(waiting(pushname))
		try {
		  if (!isQuotedAudio) return reply('Reply audio nya om')
		  encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
		   media = await anto.downloadAndSaveMediaMessage(encmedia)
		  ran= getRandom('.mp3')
		  exec(`ffmpeg -i ${media} ${imut} ${ran}`, (err, stderr, stdout) => {
		    fs.unlinkSync(media)
		    if (err) return reply('Error!')
		    const hah = fs.readFileSync(ran)
		    anto.sendMessage(from, hah, MessageType.audio, { mimetype: "audio/mp4", ptt: true, quoted: hardi })
		    fs.unlinkSync(ran)
		  })
		} catch {
		  fakegroup("anu error")
		}
		break
		case 'toptt':
	         if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
		 if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
		 paimon.limitAdd(sender)
		 fakegroup(waiting(pushname))
		try{
	        if (!isQuotedAudio) return reply('Reply audio nya om')
	        encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
	         media = await anto.downloadAndSaveMediaMessage(encmedia)
	        ran= getRandom('.mp3')
	        exec(`ffmpeg -i ${media} ${ran}`, (err, stderr, stdout) => {
	        fs.unlinkSync(media)
	        if (err) return reply('Error!')
	        const hah = fs.readFileSync(ran)
	        anto.sendMessage(from, hah, MessageType.audio,{ mimetype: "audio/mp4", ptt: true, quoted: hardi})
	          fs.unlinkSync(ran)
					 })
	         } catch {
	        fakegroup("anu error")
	        }
	break
case 'bass':
	try{
	if (!isQuotedAudio) return reply('Reply audio nya om')
	      encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
	      media = await anto.downloadAndSaveMediaMessage(encmedia)
	     ran= getRandom('.mp3')
	      exec(`ffmpeg -i ${media} -af equalizer=f=64:width_type=o:width=2:g=56 ${ran}`, (err, stderr, stdout) => {
	      fs.unlinkSync(media)
	      if (err) return reply('Error!')
	      const hah = fs.readFileSync(ran)
	      anto.sendMessage(from, hah, MessageType.audio,{ mimetype: "audio/mp4", ptt: true, quoted: hardi})
	fs.unlinkSync(ran)
					 })
	} catch {
	  anto.reply(from,"anu error")
	}
	break
	// paket sticker
	case 'getsticker':
	  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
	  const textmu = args.join(' ')
	  if (!textmu) return fakegroup('*Wadafak Sticker Apa Bang Cek di liststicker Bang!!*')
	  if (textmu.toLowerCase(_setiker)) {
	   const stimer = fs.readFileSync(`./media/add/sticker/${textmu}.webp`)
	  fakeUdin(stimer, MessageType.sticker, pushname)
	  }
	  break
	case 'addsticker':
		if (!isQuotedSticker) return fakegroup('Reply sticker')
		const svst = args.join(' ')
		console.log(svst)
		if (!svst) return fakegroup('Sticker name?')
		boij = JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		delb = await anto.downloadMediaMessage(boij)
		fs.writeFileSync(`./media/add/sticker/${svst}.webp`, delb)
		_setiker.push(`${svst}`)
fs.writeFileSync('./database/bot/sticker.json', JSON.stringify(_setiker))
		fakegroup(`Succes add sticker\n${prefix}liststicker to view stickerlist`)
		break
		
		case 'stickerlist':
	  case 'liststicker':
		teks = '*Sticker List :*\n\n'
		for (let awokwkwk of _setiker) {
			teks += `- ${awokwkwk}\n`
		}
		teks += `\n*Total : ${_setiker.length}*`
	  fakeUdin(teks, MessageType.text, '*List Sticker*')
		break
		// End sticker
	// Paket Vn
	 case 'addvn':
	 if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
	 if (!isQuotedAudio) return fakegroup('*Audio Mana*')
	 textnyu = args.join(' ')
	 if (!textnyu) return fakegroup("nama vn um?")
	 boij = JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 delb = await anto.downloadMediaMessage(boij)
	 var mencek = textnyu.toLowerCase(_vn)
	 if (!mencek) return fakegroup("Sudah Dalam Data Base Atuh Kak")
	 fs.writeFileSync(`./media/add/vn/${textnyu}.mp3`, delb)
	 _vn.push(`${textnyu}`)
	 fs.writeFileSync('./database/bot/vn.json', JSON.stringify(_vn))
	 fakegroup(`Succes add vn\n${prefix}listvn to view vnlist`)
	 break
	 case 'vnlist':
	 case 'listvn':
	 teks = '*vn List :*\n\n'
	 for (let awokwkwk of _vn) {
	   teks += `- ${awokwkwk}\n`
	 }
	 teks += `\n*Total : ${_vn.length}*`
	 fakeUdin(teks, MessageType.text, '*List Vn*')
	 break
	case 'getvn':
	if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
	 textmi = args.join(' ')
	if (!textmi) return fakegroup('*Wadafak Vn Apa Bang Cek di listvn Bang!!*')
	if (textmi.toLowerCase(_vn)) {
	  const stimur = fs.readFileSync(`./media/add/vn/${textmi}.mp3`)
	  fakeSound(stimur, `*${pushname}*`)
	}
	break
	// end vn
	case 'addimage':
	if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
	if (!isQuotedImage) return fakegroup('*Audio Mana*')
	textnyu = args.join(' ')
	if (!textnyu) return fakegroup("nama image apa um?")
	boij = JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	delb = await anto.downloadMediaMessage(boij)
	var mencuuk = textnyu.toLowerCase(_image)
	if (!mencuuk) return fakegroup("Sudah Dalam Data Base Atuh Kak")
	fs.writeFileSync(`./media/add/image/${textnyu}.png`, delb)
	_image.push(`${textnyu}`)
	fs.writeFileSync('./database/bot/image.json', JSON.stringify(_image))
	fakegroup(`Succes add vn\n${prefix}listimage to view imagelist`)
	break
	case 'listimage':
	case 'imagelist':
	teks = '*image List :*\n\n'
	for (let awokwkwk of _image) {
	  teks += `- ${awokwkwk}\n`
	}
	teks += `\n*Total : ${_image.length}*`
	fakeUdin(teks, MessageType.text, '*List Image*')
	break
	case 'getimage':
	if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
	textmi = args.join(' ')
	if (!textmi) return fakegroup('*Wadafak image Apa Bang Cek di listimage Bang!!*')
	if (textmi.toLowerCase(_image)) {
	  const stimir = fs.readFileSync(`./media/add/image/${textmi}.png`)
	  fakeUdin(stimir, MessageType.image, `${pushname}`)
	}
	break
	//paket video
	case 'addvideo':
	if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
	if (!isQuotedVideo) return fakegroup('*Audio Mana*')
	textnyu = args.join(' ')
	if (!textnyu) return fakegroup("nama video apa um?")
	boij = JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	delb = await anto.downloadMediaMessage(boij)
	var mencuik = textnyu.toLowerCase(_video)
	if (!mencuik) return fakegroup("Sudah Dalam Data Base Atuh Kak")
	fs.writeFileSync(`./media/add/video/${textnyu}.mp4`, delb)
	_video.push(`${textnyu}`)
	fs.writeFileSync('./database/bot/video.json', JSON.stringify(_video))
	fakegroup(`Succes add vn\n${prefix}listvideo to view videolist`)
	break
	case 'listvideo':
	case 'videolist':
	teks = '*video List :*\n\n'
	for (let awokwkwk of _video) {
	  teks += `- ${awokwkwk}\n`
	}
	teks += `\n*Total : ${_video.length}*`
	fakeUdin(teks, MessageType.text, '*List video*')
	break
	case 'getvideo':
	if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
	textmi = args.join(' ')
	if (!textmi) return fakegroup('*Wadafak video Apa Bang Cek di listvideo Bang!!*')
	if (textmi.toLowerCase(_video)) {
	  const stumir = fs.readFileSync(`./media/add/video/${textmi}.mp4`)
	  fakeUdin(stumir, MessageType.video, `${pushname}`)
	}
	break
		// image
		  case 'loli':
			if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
			if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
			paimon.limitAdd(sender)
			const amu = JSON.parse(fs.readFileSync('./database/loli.json'))
			const loline = await loli.getSFWLoli()
			const anue_ = await paimon.getBuffer(loline.url)
			paimon.sendFakeStatusWithImg(from, anue_, '*Om Jangan Om*', '*LOLI IMAGE*')
			break
		 case 'limit':
            var found = false
            const limidat = JSON.parse(fs.readFileSync('./database/user/limit.json'))
            for(let lmt of limidat){
                if(lmt.id === sender){
                    let limitCounts = limitCount-lmt.limit
                    if(limitCounts <= 0) return fakegroup(`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 00:00!_`)
                    const ade = `Sisa limit request anda tersisa : *${limitCounts}*\n\n_Note : Limit akan direset setiap jam 00:00!_`
                    fakegroup(ade)
                    found = true
                }
            }
            console.log(_limit)
            console.log(limidat)
            if (found === false){
                let obj = {id: `${sender}`, limit:1};
                _limit.push(obj);
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(limit, 1));
                const limite = `Sisa limit request anda tersisa : *${limitCount}*\n\n_Note : Limit akan direset setiap jam 20:00!_`
                fakegroup(limite)
            }
            break
		 case 'ceklimit':
			anto.sendMessage(from, `${paimon.cekLimit(sender)-limitCount}`, MessageType.text, {quoted: hardi})
			break
		 // S NO BG + WM BY ANTO
		case 'stickernobackground':
		case 'stickernobg':
		case 'snobg':
		if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
		if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
		paimon.limitAdd(sender)
		if ((isMedia && !hardi.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
			fakegroup(waiting(pushname))
			const boijou = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo : hardi
			  const delbou = await anto.downloadAndSaveMediaMessage(boijou, `./media/${sender}`)
			  const ando = await imgbb(imgb, delbou)
			  const anytime = ando.display_url
			  const mediau = await paimon.getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${lol}&img=${anytime}`)
			  fs.writeFileSync(`./tmp/${sender}.jpeg`, mediau)
			   media = `./tmp/${sender}.jpeg`
			    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								//fs.unlinkSync(mediau)
								paimon.reply(from, mess.error.api, hardi)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return paimon.reply(from, mess.error.api, hardi)
									// CREATED BY HARDIANTO
									paimon.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), hardi)
								//	paimon.reply("*Jangan Hapus Author Kontol*")
									fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							// Special Thanks By Aqul
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15,pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
		            } else {
		        anto.reply(`Kirim gambar dengan caption ${prefix}snobg`)
			        }
			
break
		      case 'removebg':
		      if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 		 		
		      if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
		      paimon.limitAdd(sender)
		      if (!isPremium) return fakegroup(`Khusus Premium Silakan Gunakan ${prefix}snobg`)
	        if ((isMedia && !hardi.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		       fakegroup(waiting(pushname))
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo : hardi
			        const delbu = await anto.downloadAndSaveMediaMessage(boij, `./media/${sender}`)
			        const ando = await imgbb(imgb, delbu)
			        const anytime = ando.display_url
			        const aniss = await paimon.getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${lol}&img=${anytime}`)
			        paimon.sendFakeStatusWithImg(from, aniss, '*Lah Kok Ilang*', '*REMOVE BACKGROUND*')
        	} else {
              anto.reply(`Kirim gambar dengan caption ${prefix}removebg`)
         	}
			break	
		            case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                case 'christmas':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} lindow`)
                    txt = args.join(" ")
                    buffer = await paimon.getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lol}&text=${txt}`)
                    paimon.sendFakeStatusWithImg(from, buffer, "Done Kak", `${command}`)
                    break
		            case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (args.length == 0) return paimon.reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} lindow`)
                    txt = args.join(" ")
                    buffer = await paimon.getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lol}&text=${txt}`)
                    paimon.sendFakeStatusWithImg(from, buffer, "DONE YAH KAK", `${command}`)
                    break
		            case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'flowerheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                if(!isRegistered) return fakegroup(notRegister(pushname, prefix))
                if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
                    if (args.length == 0) return fakegroup(`Usage: ${prefix + command} text\nExample: ${prefix + command} lindow`)
                txt = args.join(" ")
                buffer = await paimon.getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lol}&text=${txt}`)
                    paimon.sendFakeStatusWithImg(from, buffer, `*SUDAH SELESAI KAK*`, `${command}`)
                break
		case 'afk': // by Slavyan & Recode By Hardianto
                if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 		 		
                if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
                paimon.limitAdd(sender)
                if (!isGroup) return fakegroup(groupOnly(pushname))
                if (isAfkOn) return fakegroup('Woe Kalo Mau Afk Jangan Nimbrung di sini')
		const reason = args.join(' ');
                afk.addAfkUser(sender, time, reason, _afk)
               // const timeru = ms(await time - Date.now())
             const aluty = `*「 AFK STATUS 」*\n*${pushname} Sedang Afk Karena ${reason} Pada ${time} Lalu*`
               fakegroup(aluty)
               
            break
      case 'downloadmenu':
      case 'download':
      anto.sendMessage(from, downloaderMenu(prefix), MessageType.text, {quoted: fakeGIF})
      break
      case 'creatormenu':
      anto.sendMessage(from, creatorMenu(prefix), MessageType.text, {quoted: fakeGIF})
			break
      case 'funmenu':
      anto.sendMessage(from, funMenu(prefix), MessageType.text, {quoted: fakeGIF})
      break
      case 'storagemenu':
      anto.sendMessage(from, storageMenu(prefix), MessageType.text, {quoted: fakeGIF})
      break
      case 'soundmenu':
      anto.sendMessage(from, soundMaker(prefix), MessageType.text, {quoted: fakeGIF})
      break
      case 'botmenu':
      anto.sendMessage(from, botMenu(prefix), MessageType.text, {quoted: fakeGIF})
      break
      case 'adminmenu':
      anto.sendMessage(from, adminMenu(prefix), MessageType.text, {quoted: fakeGIF})
      break
      case 'gamemenu':
      anto.sendMessage(from, gameMenu(prefix), MessageType.text, {quoted: fakeGIF})
      break
      case 'infomenu':
      anto.sendMessage(from, infoMenu(prefix), MessageType.text, {quoted: fakeGIF})
      break
      case 'islammenu':
      anto.sendMessage(from, islamMenu(prefix, pushname), MessageType.text, {quoted: fakeGIF})
      break
      case 'animemenu':
      anto.sendMessage(from, animeMenu(prefix), MessageType.text, {quoted: fakeGIF})
      break
      case 'primbonmenu':
      anto.sendMessage(from, primbonMenu(prefix), MessageType.text, {quoted: fakeGIF})
      break
      case 'nsfwmenu':
        if (!isNsfw) return reply(dontActive(pushname, command))
        anto.sendMessage(from, nsfwMenu(prefix), MessageType.text, {quoted: fakeGIF})
        break
      case 'randommenu':
      anto.sendMessage(from, randomMenu(prefix), MessageType.text, {quoted: fakeGIF})
      break
      case 'searchmenu':
      anto.sendMessage(from, searchingMenu(prefix), MessageType.text, {quoted: fakeGIF})
      break
      case 'makermenu':
      anto.sendMessage(from, makerMenu(prefix), MessageType.text, {quoted: fakeGIF})
      break
      case 'ownermenu':
      anto.sendMessage(from, ownerMenu(prefix), MessageType.text, {quoted: fakeGIF})
      break
// settin & info
      case 'rulesbot':
      anto.sendMessage(from, rulesBot(wel, end, gaya), MessageType.text, {quoted: fakeGIF})
      break
      case 'sourcode':
      anto.sendMessage(from, sourceBot(wel, gaya, end), MessageType.text, {quoted: fakeGIF})
      break
      case 'sewabot':
      anto.sendMessage(from, Donasi(wel, gaya, hargaSewa, end), MessageType.text, {quoted: fakeGIF})
      break
      case 'request':
        ini_request = `${wel}\n\n${gaya}Dari: wa.me/${sender.split("@")[0]}\nRequest: ${q}${gaya}\n\n${end}`
        anto.sendMessage(ownerNumber[0], ini_request, MessageType.text, {quoted: fakeGIF})
        fakegroup("*Ide Mu Telah Di Sampaikan Di Owner saya*")
        break
      case 'report':
        ini_request = `${wel}\n\n${gaya}Dari: wa.me/${sender.split("@")[0]}\nReport: ${q}${gaya}\n\n${end}`
        anto.sendMessage(ownerNumber[0], ini_request, MessageType.text, {quoted: fakeGIF})
        fakegroup("*Bug Telah Di Sampaikan Di Owner saya*")
        break
      case 'paimonofficial':
      case 'officialpaimon':
      anto.sendMessage(from, linkGb(pushname), MessageType.text, {quoted: fakeGIF})
      break

      case 'menu': 
			case 'help':  
limits = paimon.cekUserLimit(sender) ? paimon.cekUserLimit(sender) : 35
ini_lv = level.getLevelingLevel(sender, _level)
mantappu = wpGb.includes(from) ? fs.readFileSync(`./asset/${from}.mp4`) : fs.readFileSync(`./asset/cewek.mp4`)
multiKah = multiPrefix.includes(ownerNumber[0]) ? 'MULTI PREFIX' : `${prefix}`
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00")
    {
    var selamat = 'Malam'
    }
    if(time2 < "19:00:00")
    {
    var selamat = 'Malam'
    }
    if(time2 < "18:00:00")
    {
    var selamat = 'Sore Menjelang Malam'
    }
    if(time2 < "15:00:00")
    {
    var selamat = 'Sore'
    }
    if(time2 < "11:00:00")
    {
    var selamat = 'Siang'
    }
    if(time2 < "05:00:00")
    {
    var selamat = 'Pagi'
    }
    var date = new Date();
    var tahun = date.getFullYear();
    var bulan = date.getMonth();
    var tanggal = date.getDate();
    var hari = date.getDay();
    var jam = date.getHours();
    var menit = date.getMinutes();
    var detik = date.getSeconds();
    switch(hari) 
    {
    case 0: hari = "Minggu"; break;
    case 1: hari = "Senin"; break;
    case 2: hari = "Selasa"; break;
    case 3: hari = "Rabu"; break;
    case 4: hari = "Kamis"; break;
    case 5: hari = "Jum'at"; break;
    case 6: hari = "Sabtu"; break;
    }
    switch(bulan) 
    {
    case 0: bulan = "Januari"; break;
    case 1: bulan = "Februari"; break;
    case 2: bulan = "Maret"; break;
    case 3: bulan = "April"; break;
    case 4: bulan = "Mei"; break;
    case 5: bulan = "Juni"; break;
    case 6: bulan = "Juli"; break;
    case 7: bulan = "Agustus"; break;
    case 8: bulan = "September"; break;
    case 9: bulan = "Oktober"; break;
    case 10: bulan = "November"; break;
    case 11: bulan = "Desember"; break;
    }
            var tampilTanggal = "◪ *Tanggal: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
            var tampilWaktu = "◪ *Jam: " + jam + ":" + menit + ":" + detik;
				    let ii = []
				    let giiid = []
				    for (mem of totalchat) {
					  ii.push(mem.jid)
				    }
				    for (id of ii) {
					  if (id && id.includes('g.us')) {
					  giiid.push(id)
					  }
				    }
				    let timestampi_ = speed();
				    let latensiu = speed() - timestampi_
				    const ownerNumber_ = '6287811078485@s.whatsapp.net'
				    const run = process.uptime()
				    let text_r = paimon.runtime(run)
				    anto.sendMessage(from, mantappu, 
            MessageType.video, 
            {mimetype: Mimetype.gif, 
            quoted: fakeGIF, 
            contextInfo: {
            "mentionedJid": [sender, ownerNumber_]}, 
            caption: coreMenu(limits, role, ini_lv, cardUser, bars, giiid, latensiu, gaya, pushname, selamat, sender, tampilTanggal, tampilWaktu, tmp_hit, tmphit, _register, ownerNumber_, text_r, multiKah, totalchat), 
            thumbnail: fs.readFileSync('./sticker/thumb.jpeg') })
            break

			case 'toimg':
			if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
			if (!isQuotedSticker) return fakegroup('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			fakegroup(waiting(pushname))
			encmediaoi = JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			mediau = await anto.downloadAndSaveMediaMessage(encmediaoi)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${mediau} ${ran}`, (err) => {
			fs.unlinkSync(mediau)
			if (err) return fakegroup('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			anto.sendMessage(from, buffer, MessageType.image, {quoted: hardi, thumbnail: fs.readFileSync('./sticker/thumb.jpeg')})
			paimon.limitAdd(sender)
			fs.unlinkSync(ran)
			})
			break
			case 'tomp4': 
			    if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 		 		
			    if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
			    paimon.limitAdd(sender)
		      if (isQuotedSticker) {
		      encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
		      const savedFilename = await anto.downloadAndSaveMediaMessage(encmedia, `./tmp/${sender}`)
		      await peimon.webpToMp4(savedFilename)
			 .then(async (rest) => {
			     await axios({
				 method: "GET",
				 url: rest.result,
				 responseType: "stream",
			     }).then(({ data }) => {
				 const saving = data.pipe(
				     fs.createWriteStream(`./tmp/${sender}-done.mp4`)
				 )
				  saving.on("finish", () => {
				     anto.sendMessage(from,
					 fs.readFileSync(`./tmp/${sender}-done.mp4`),
					 MessageType.video, {
					 mimetype: Mimetype.mp4,
					 caption: `*By Paimon Bot*`,
					 quoted: hardi,
				     }
				     )
		  if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
			if (fs.existsSync(`./tmp/${sender}-done.mp4`)) fs.unlinkSync(`./tmp/${sender}-done.mp4`)
			 })
			 })
			 })
			 .catch((e) => {
			console.log(e)
			anto.reply(from, `Error gan :(`)
			if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
			 })
		  }
      break
			case 'daftar':
				if (isRegistered) return fakegroup("Kamu Sudah Terdaftar")
				 if (args.length < 1)  return  fakegroup(`*Masukan ${prefix}daftar ${pushname}|15*`)
				 try {
				 var perry = await anto.getProfilePicture(sender)
				 } catch (e) {
				var perry = errorimg
				 }
				 anose = await ameApi.generate("approved ", {url: perry})
				 var anum = args.join(' ')
				 var namaUser = anum.split('|')[0];
				 var umurUser = anum.split('|')[1];
				 var serialUser = createSerial(20)
				 if (Number(umurUser) >= 40) return fakegroup('*Kamu Terlalu Tua Sayang*')
				 register.addRegisteredUser(sender, namaUser, umurUser, time, serialUser, _register)
				 const cptu = `
◪ ➪  *「 DAFTAR USER 」*
| ◪ *Nama: ${namaUser}*
| ◪ *Umur: ${umurUser}*
| ◪ *Time: ${time}*
| ◪ *Chats: wa.me/${sender.split('@')[0]}*
| ◪ *Serial: _${serialUser}_*
◪ ➪  *「 NOTE 」*  ${gaya}
➪ Following Rules
➪ Report Bug
➪ Open request
➪ Dont Forget Support My In ${prefix}donasi${gaya}
◪ ➪  *「 THANKS TO USER 」*`
				    paimon.sendFakeStatusWithImg(from, anose, cptu, "*VERIFIKASI COMPLETE*")
				    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
            break
			  case 'ytdlmp3':  
			  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
			  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
			  paimon.limitAdd(sender)
			  if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
		 	 let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
		   	if (!isLinks) return reply(mess.error.Iv)
				try {
					//reply(waiting(pushname))
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
			  if (Number(filesize) >= 30000) return paimon.sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam hardituk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						paimon.sendMediaURL(from, thumb, captions)
						paimon.sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})

						})
						} catch (err) {
							paimon.reply(mess.error.api)
						}
					  break
		  case 'video':
		  case 'music':
		  case 'musik':
		  if (!isRegistered) return reply(notRegister(pushname, prefix))
		  if (!q) return reply(`EXAMPLE\n${prefix}${command} ${command} apa?`)
		  try {
		    let berhitung = 1
		    thisq = args.join(' ')
		    const ngini = await yts(thisq)
		    const videosu = ngini.videos.slice(0, 20)
		    reply(waiting(pushname))
		    let hasileho = `${wel}`
		    hasileho += `\n`;
		    for (let i = 0; i < video.length; i++) {
		      hasileho += `
		  
		  ${gaya}
No: ${i+berhitung}
✨Judul : ${videosu[i].title}
✨Channel : ${videosu[i].author.name}
✨Durasi : ${videosu[i].timestamp}
✨ID     : ${videosu[i].videoId}
✨HOW GET: ${prefix}need${command} ${1+berhitung}
✨HOW GET2: ${prefix}need${command} ${videosu[i].videoId}
✨DESC: ${videosu[i].description}
${gaya}
________________________`
		    };
		    for (let ii = 0; ii < videosu.length; ii++) {
		    hasileho += `\n\n(#)${videosu[ii].videoId}`
		    }
		    thispp = await paimon.getBuffer(videosu[0].thumbnail)
		    anto.sendMessage(from, thispp, MessageType.image, { quoted: fakeGIF, caption: hasileho })
		  } catch (e) {
		    console.log(e)
		  }
		  break
		  case 'needmusik':
    case 'needmusic':
      if (!isRegistered) return reply(notRegister(pushname, prefix))
      if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
        paimon.limitAdd(sender)
    try {
      if (isQuotedImage) {
        reply(waiting(pushname))
        if (!Number(args[0])) return fakegroup(`*Apabila ditag hanya cantumkan nomer urutan bukan ID Download!*\nContoh : *${prefix}${command} 1*`)
        const dataDownmp3 = hardi.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
        pilur = dataDownmp3.split('(#)')
        console.log(pilur[args[0]])
        teks = `https://youtu.be/${pilur[args[0]]}`
        res = await yts(`${teks}`).catch(e => {
          fakegroup('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
        })
        fakegroup(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)
        let thumbInfo = `❒「  *Youtube Search*  」
├ *Judul :* ${res.all[0].title}
├ *ID Video :* ${res.all[0].videoId}
├ *Diupload Pada :* ${res.all[0].ago}
├ *Views :* ${res.all[0].views}
├ *Durasi :* ${res.all[0].timestamp}
├ *Channel :* ${res.all[0].author.name}
└ *Link Channel :* ${res.all[0].author.url}
    
*_Tunggu Proses Upload....._*
    `
        sendFileFromUrl(res.all[0].image, image, { quoted: hardi, caption: thumbInfo })
        res = await y2mateA(res.all[0].url).catch(e => {
          fakegroup('_[ ! ] Error Saat Memasuki Web Y2mate_')
        })
        sendFileFromUrl(res[0].link, audio, { quoted: fakeGIF, mimetype: 'audio/mp4', filename: res[0].output })
      }
    } catch (e) {
      console.log(e)
    }
    break
    case 'needvideo':
      if (!isRegistered) return reply(notRegister(pushname, prefix))
      if (paimon.isLimit(sender, from)) return reply(thisLimit(pushname, prefix))
      paimon.limitAdd(sender)
      try {
        if (isQuotedImage) {
          const dataDownmp3 = hardi.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
          pilur = dataDownmp3.split('(#)')
          console.log(pilur[args[0]])
          fakegroup(waiting(puhsname))
          isAda = pilur[args[0]] ? pilur[args[0]] : args[0]
          teks = `https://youtu.be/${isAda}`
          res = await y2mateV(teks).catch(e => {
        fakegroup('_[ ! ] Error Gagal Memasuki Web Y2mate_')
      })
      result = `❒「  *${botname}*  」
├ *Judul :* ${res[0].judul}
├ *Ukuran :* ${res[0].size}
├ *Kualitas :* ${res[0].quality}p
├ *Nama File :* ${res[0].output}
└ *Output :* ${res[0].tipe}
      
_*Tunggu Proses Uploading.....*_
      `
      sendFileFromUrl(res[0].thumb, image, { caption: result, quoted: hardi }).then((lalu) => {
        sendFileFromUrl(res[0].link, video, { quoted: hardi, mimetype: 'video/mp4', filename: res[0].output })
      })}
      } catch (e) {
        console.log(e)
      }
      break
      case `ytdlmp4`:
        if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
        if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
			  if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			  let isLinks2 = arg[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			  try {
					ytv(args[0])
					.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
					.then((a) => {
					if (Number(filesize) >= 40000) return paimon.sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam hardituk link_`)
					const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
					paimon.sendMediaURL(from, thumb, captionsYtmp4)
					paimon.sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
					})
			
					})
					} catch (err) {
					reply(mess.error.api)
					}
					break
		  case 'playdl':  
		  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
		  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
		  paimon.limitAdd(sender)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
      var srch = args.join('')
      aramas = await yts(srch);
      aramat = aramas.all 
   	  var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return paimon.sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam hardituk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        paimon.sendMediaURL(from, thumb, captions)
                        await paimon.sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
			    case 'ytsearch': {
			    if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 		 		
			    if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
			    paimon.limitAdd(sender)
				  const nama = body.slice(10)
				  const nganu = await yts(nama)
				    const videos = nganu.videos.slice(0, 10)
				    let hasileh = `🔎 Hasil pencarian youtube *'${nama}'* 🔍`
				    hasileh += `\n`;
				    Object.keys(videos).forEach(function(i) {
				    hasileh += `\n _*Judul : ${videos[i].title}*_\n_*- Channel : ${videos[i].author.name}*_\n_*- Durasi : ${videos[i].timestamp}*_\n*_- ${prefix}ytmp3/${prefix}ytmp4 https://www.youtube.com/watch?v=${videos[i].videoId}_*\n`;
				    });
				   hasileh += '\n_*PAIMON yt search*_';
				   const anuo = await paimon.getBuffer(videos[0].thumbnail)
				    anto.sendMessage(from, anuo, MessageType.image, {quoted: {
					  key: { 
					  fromMe: false, 
					  participant: `0@s.whatsapp.net`, ...(from ? { 
					  remoteJid: "6289523258649-1604595598@g.us" } : {})}, 
					  message: {
					      "videoMessage": {
						"mimetype": "video/mp4", 
						"caption": "Cari Bokep Um", 
						"jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)
				       }
				       }
				      }, contextInfo: {forwardingScore: 399, isForwarded: true}, thumbnail: fs.readFileSync('./media/paimon.jpeg'), caption: hasileh})
			}
			      break
      case 'ytmp3':  
      if (!isRegistered) return fakegroup(notRegister(pushname, prefix))	
      if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
      paimon.limitAdd(sender)
      try {
      const anum = arg
      const music_yt = await axios.get(`http://lolhuman.herokuapp.com/api/ytaudio?apikey=${lol}&url=${anum}`)
      console.log(anum)
      console.log(music_yt)
      const { title, uploader, duration, view, like, thumbnail, description, link } = music_yt.data.result
      const cpt = `${gaya}LAGU DI TEMUKAN ✨
💠 Title✨: ${title}
💠 Upload✨: ${uploader}
💠 Duration✨: ${duration}
💠 Views✨: ${view}
💠 Like✨ : ${like}
💠 Desc✨ : ${description}
     ///////////////////
     LAGU SEDANG DI KIRIM
    /////////////////${gaya}\n\n*_PAIMON SELF BOT_*`
         anu = await paimon.getBuffer(thumbnail)
        anto.sendMessage(from, anu, MessageType.image, {quoted: {
        key: { 
        fromMe: false, 
        participant: `0@s.whatsapp.net`, ...(from ? { 
        remoteJid: "6289523258649-1604595598@g.us" } : {})}, 
        message: {
            "imageMessage": {
              "mimetype": "image/jpeg", 
              "caption": title, 
              "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)
    }
     }
      }, contextInfo: {forwardingScore: 99, isForwarded: true}, thumbnail: fs.readFileSync('./media/paimon.jpeg'), caption: cpt})
      const pree = await paimon.getBuffer(link[0].link)
      anto.sendMessage(from, pree, MessageType.audio, {mimetype: 'audio/mp4', filename: `${title}.mp3`, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": title, "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)}}}, contextInfo: {forwardingScore: 300, isForwarded: true}})
        console.log(`Sukses Sending Mp3`)
        } catch {
        fakeGroup(from, 'maaf Error Kak')
        }
        break
        case 'ytmp4':  
        if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
        if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
        paimon.limitAdd(sender)
        try {
        const anum = arg
        const jiingan_ = await axios.get(`https://lolhuman.herokuapp.com/api/ytvideo?apikey=${lol}&url=${anum}`)
         console.log(anum)
        const { id, title, uploader, channel, duration, view, like, dislike, thumbnail, description, link } = jiingan_.data.result
        const cpt = `${gaya}LAGU DI TEMUKAN ✨\n💥title:  ${title}\n💥type: ${link[0].type}\n💥Quality: ${link[0].resolution}\n💥Size: ${link[0].size}\n💥id: ${id}\n💥uploader: ${uploader}\n💥channel: ${channel}\n💥duration: ${duration}\n💥view: ${view}\n💥like: ${like}\n💥Link: ${link[0].link}\n💥Description: ${description}${gaya}`
         anu = await paimon.getBuffer(thumbnail)
        anto.sendMessage(from, anu, MessageType.image, {quoted: {
         key: { 
        fromMe: false, 
        participant: `0@s.whatsapp.net`, ...(from ? { 
        remoteJid: "6289523258649-1604595598@g.us" } : {})}, 
        message: {
            "imageMessage": {
              "mimetype": "image/jpeg", 
              "caption": "*OTW DOWNLOAD*", 
              "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)
      }
       }
        }, contextInfo: {forwardingScore: 99, isForwarded: true}, thumbnail: fs.readFileSync('./media/paimon.jpeg'), caption: cpt})
        const anjung = await paimon.getBuffer(link[0].link)
          anto.sendMessage(from, anjung, MessageType.video, {mimetype: 'video/mp4', filename: `${title}.mp4`, contextInfo: {forwardingScore: 300, isForwarded: true}, quoted: {
          key: { 
          fromMe: false, 
          participant: `0@s.whatsapp.net`, ...(from ? { 
          remoteJid: "6289523258649-1604595598@g.us" } : {})}, 
          message: {
            "imageMessage": {
              "mimetype": "image/jpeg", 
              "caption": "*DAH KU DOWNLOAD ASW*", 
              "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)
    }
     }
      }
  })
  }
  catch  {
    anto.sendMessage(from, messageType.text, 'Error!')
  }
  break
			     case 'playv': 
			     if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 		 		
			     if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
			     paimon.limitAdd(sender)
				  try {
					const gwe = arg
					const axi = await axios.get(`https://lolhuman.herokuapp.com/api/ytplay?apikey=${lol}&query=${gwe}`)
					const  { info, video } = axi.data.result
					const {title, uploader, duration, view, thumbnail } = info
					copt = `*Video Di Temukan✨*\n*Title: ${title}*\n*Duration: ${duration}*\n*Uploader: ${uploader}*\n*View: ${view}*\n*Size: ${video[0].size}*\n*Ext: ${video[0].type}*\n*Quality: ${video[0].resolution}*\n\n*Mohon Untuk Tunggu Sebentar*\n*_PAIMON SELF BOT_*`
					anu = await paimon.getBuffer(thumbnail)
					anto.sendMessage(from, anu, MessageType.image, {contextInfo: {forwardingScore: 999, isForwarded: true}, thumbnail: fs.readFileSync('./media/paimon.jpeg'), caption: copt})
					vid = await paimon.getBuffer(video[0].link)
					anto.sendMessage(from, vid, MessageType.video, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": title, "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)} } }, contextInfo: {forwardingScore: 700, isForwarded: true}})
				  } catch {
					console.log(error)
				  }
				  break
				  
  case 'joox':
	if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
	if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
	paimon.addLimit(sender)
	try {
	if (args.length < 0) return fakegroup("Judul Um?")
	tosh = args.join(" ")
	console.log(tosh)
	const cios = await axios.get(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lol}&query=${tosh}`)
	const {audio, image, info} = cios.data.result
	const {singer, duration, album, song, date} = info
	console.log(cios)
	const caption = `*_JOOX PLAY_*\n*Song: ${song}*\n*Album: ${album}*\n*Date: ${date}*\n*Singer: ${singer}*\n*Duration: ${duration}*`
	tmbnel = await paimon.getBuffer(image)
	anto.sendMessage(from, tmbnel, MessageType.image, {caption: caption, quoted: hardi})
	antos = await paimon.getBuffer(audio[0].link)
	anto.sendMessage(from, antos, MessageType.audio, {mimetype: 'audio/mp4', quoted: hardi})
	} catch {
	  fakegroup("lagu Tidak Di Temukan")
	}
	break
	
			    case 'play':  
			    if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 		 		
			    if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
			    paimon.limitAdd(sender)
				  try {
			    const qwe = arg
			    console.log(qwe)
			    const axi = await axios.get(`https://lolhuman.herokuapp.com/api/ytplay?apikey=${lol}&query=${qwe}`)
			    const { image, info, audio, lirik } = axi.data.result
			    const { id, title, uploader, duration, view, thumbnail } = info
			    const anui = await paimon.getBuffer(thumbnail)
			    const copt = `*Lagu Di Temukan✨*\n*Title: ${title}*\n*Duration: ${duration}*\n*Upload: ${uploader}*\n*View: ${view}*\n*Size: ${audio[4].size}*\n*Bitrate: ${audio[4].bitrate}*\n\n*Mohon Untuk Tunggu Sebentar*\n*_PAIMON SELF BOT_*`
			    anto.sendMessage(from, anui, MessageType.image, {contextInfo: {forwardingScore: 508, isForwarded: true }, thumbnail: fs.readFileSync('./media/paimon.jpeg'), caption: copt})
			    const nganu_ = await paimon.getBuffer(audio[3].link)
			    anto.sendMessage(from, nganu_, MessageType.audio, {mimetype: 'audio/mp4', filename: `${title}.mp3`, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": title, "jpegThumbnail": fs.readFileSync(`./media/paimon.jpeg`)} } }, contextInfo: {forwardingScore: 100, isForwarded: true}})
			    console.log('Sukses Send Audio')
			    } catch {
				  console.log(error)
			    }
		break
case 'upscale':
case 'tohd':
case 'enhance':
  if (paimon.isLimit(sender, from)) return reply(thisLimit(pushname, prefix))
  paimon.limitAdd(sender)
  reply(waiting(pushname))
  if (!isQuotedImage) return reply("tag foto nya kaka")
  boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
       delb = await anto.downloadAndSaveMediaMessage(boij, `./media/${sender}.png`)
      hasil = await paimon.toPostUrl(delb)
   
      UpScale(hasil, pushname, fakeUdin)
      break
     case 'deepface':
      boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
      delb = await anto.downloadAndSaveMediaMessage(boij, `./media/${sender}.png`)
      uplod = await imgbb(imgb, delb)
      ini_link = `${uplod.display_url}`
      await ameApi.generate("magik", { url: ini_link}).then(res => {
      fs.writeFileSync('./dep.png', res)
      ini_baf = fs.readFileSync('./dep.png')
      fakeUdin(ini_baf, image, "DEEPFAKE")
      fs.unlinkSync('./dep.png')
      console.log('suksess')
      })
    
      break
      case 'toonify':
        if (paimon.isLimit(sender, from)) return reply(thisLimit(pushname, prefix))
        paimon.limitAdd(sender)
        reply(waiting(pushname))
        if (!isQuotedImage) return reply("tag foto nya kaka")
        boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
             delb = await anto.downloadAndSaveMediaMessage(boij, `./media/${sender}.png`)
            hasil = await paimon.toPostUrl(delb)
            custom(hasil, command).then(async(hm) => {
            anu = await paimon.getBuffer(hm.output_url)
            fakeUdin(anu, image, "*Awokawok*")

            })      
            break
          case 'test': 
                 if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 		 		
          paimon.sendText(from, 'oke')
				  break
			    case 'public':  if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 
				  public = true
				  paimon.sendFakeStatus(from, `Status: PUBLIC`, fake)
				  break
			    case 'exif':  
			    if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 
			    if (!isOwner) return paimon.reply(from, only)
				  if (args.length < 1) return paimon.reply(from, `Penggunaan ${prefix}exif nama|author`, hardi)
				  if (!arg.split('|')) return paimon.reply(from, `Penggunaan ${prefix}exif nama|author`, hardi)
				  exif.create(arg.split('|')[0], arg.split('|')[1])
				  paimon.reply(from, 'sukses', hardi)
				  break
				  case 'fakedeface':  
				  if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 		 		
				  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
				  paimon.limitAdd(sender)
				  if (isQuotedSticker) {
       	  const anus = args.join(' ')
				  const text_ = anus.split('|')[0]
				  const text2 = anus.split('|')[1];
				  const text3 = anus.split('|')[2];
				  const text4 = anus.split('|')[3];
				  encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
				  const testf = await anto.downloadMediaMessage(encmedia)
				  paimon.sendFakeThumb(from, text_, text2, text3, text4, testf)
				  }
				  break
			 case 'circlesticker':
			 case 'csticker':
			 case 'stickercircle':
			 case 'stickerc':
			 case 'sc':
			 case 'scicle':
			 if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
			 if (paimon.isLimit(sender)) return
			 paimon.limitAdd(sender)
			 if (!isQuotedImage) return fakegroup('*Gambar Mana')
			 encmediau = isQuotedImage ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
			 await anto.downloadMediaMessage(encmediau).then(media => {
			   ran = getRandom('.webp')
			   const roundedCorners = Buffer.from(
			     '<svg><rect x="0" y="0" width="600" height="600" rx="300" ry="300"/></svg>'
			   )
			   sharp(media).resize({
			     width: 600,
			     height: 600
			   }).composite([{
			     input: roundedCorners,
			     blend: 'dest-in'
			             }]).webp().toBuffer().then(async buffer => {
			     fs.writeFileSync('./tmp/' + ran, buffer)
			     exec(`webpmux -set exif ./sticker/data.exif ./tmp/${ran} -o ./sticker/${sender}.webp`, async (error) => {
			       //if (error) return anto.reply(from, mess.error.api, hardi)
			       paimon.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), hardi)
			       fs.unlinkSync('./tmp/' + ran)
			     })
			   })
			 })
			 break
			 case 'sticker':  
			 case 'stiker':  
			  case 's':  
			  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
			  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
			  paimon.limitAdd(sender)
				if (isMedia && !hardi.message.videoMessage || isQuotedImage) {
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
					 media = await anto.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
						  console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
						  console.log(`Error : ${err}`)
								fs.unlinkSync(media)
						  paimon.reply(from, mess.error.api, hardi)
							})
							  .on('end', function () {
								console.log('Finish')
							 exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							 if (error) return paimon.reply(from, mess.error.api, hardi)
									paimon.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), hardi)
									fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15,pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				    } else if ((isMedia && hardi.message.videoMessage.fileLength < 10000000 || isQuotedVideo && hardi.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					  encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
					   const mediam = await anto.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					   exec(`ffmpeg -i ${mediam} -s 480x480 -vf crop=480:480,setdar=1:1,setsar=1:1 ./${sender}.mp4`)
					    paimon.reply(from, waiting(pushname), hardi)
						   await ffmpeg(`${mediam}`)
							.inputFormat(mediam.split('.')[4])
							.on('start', function (cmd) {
						  console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
						  fs.unlinkSync(media)
						  tipe = media.endsWith('.mp4') ? 'video' : 'gif'
						  paimon.reply(from, mess.error.api, hardi)
							  })
							.on('end', function () {
								console.log('Finish')
						  exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
						  //if (error) return paimon.reply(from, mess.error.api, hardi)
						  paimon.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), hardi)
						  fs.unlinkSync(mediam)
							fs.unlinkSync(`./sticker/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				     } else {
					  paimon.reply(from, `Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`, hardi)
				      }
				    break
				    case 'take':  
	          case 'colong':  
	          if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 		 		
	          if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 	
	          paimon.limitAdd(sender)
		        if (!isQuotedSticker) return anto.reply(from, `Reply sticker dengan caption *${prefix}colong*`, hardi)
		        const encmediia = JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		        const meidia = await anto.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		        exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
			      if (error) return anto.reply(from, mess.error.api, hardi)
			      paimon.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), hardi)
			      fs.unlinkSync(meidia)
		        })
			      break
			      case 'swm':  
			      case 'stickerwm':  
			      if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 		 		
			      if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
			      paimon.limitAdd(sender)
				    if (!isPremium) return fakegroup(mess.premiumOnly)
				    if (isMedia && !hardi.message.videoMessage || isQuotedImage) {
					  if (!arg.includes('|')) return paimon.reply(from, `Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`, hardi)
					  encmedia = isQuotedImage ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
					  media = await anto.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					  const packname1 = arg.split('|')[0]
					  const author1 = arg.split('|')[1]
					  exif.create(packname1, author1, `stickwm_${sender}`)
					  await ffmpeg(`${media}`)
						.input(media)
					  .on('start', function (cmd) {
						console.log(`Started : ${cmd}`)
							})
					  .on('error', function (err) {
					  console.log(`Error : ${err}`)
					  fs.unlinkSync(media)
					  paimon.reply(from, mess.error.api, hardi)
							})
					  .on('end', function () {
								console.log('Finish')
					  exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
						if (error) return paimon.reply(from, mess.error.api, hardi)
					  paimon.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), hardi)
						fs.unlinkSync(media)	
						fs.unlinkSync(`./sticker/${sender}.webp`)	
					  fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
						})
					  })
					  .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					  .toFormat('webp')
					  .save(`./sticker/${sender}.webp`)
				    } else if ((isMedia && hardi.message.videoMessage.fileLength < 10000000 || isQuotedVideo && hardi.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
					  if (!arg.includes('|')) return paimon.reply(from, `Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`, hardi)
					  encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
					  media = await anto.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					  const packname1 = arg.split('|')[0]
					  const author1 = arg.split('|')[1]
					  exif.create(packname1, author1, `stickwm_${sender}`)
					  paimon.reply(from, waiting(pushname), hardi)
						await ffmpeg(`${media}`)
						.inputFormat(media.split('.')[4])
					  .on('start', function (cmd) {
					  console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
								console.log(`Error : ${err}`)
						fs.unlinkSync(media)
					  tipe = media.endsWith('.mp4') ? 'video' : 'gif'
						paimon.reply(from, mess.error.api, hardi)
						})
					  .on('end', function () {
						console.log('Finish')
					  exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					  if (error) return paimon.reply(from, mess.error.api, hardi)
					  paimon.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), hardi)					
						fs.unlinkSync(media)
					  fs.unlinkSync(`./sticker/${sender}.webp`)
					  fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
				  	})
				  	})
				  .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
				  } else {
					paimon.reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
				  }
				  break
				  case 'fitnah':  
				  if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 		 		
				  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
				  paimon.limitAdd(sender)
					var anuo = args.join(' ')
					console.log(anuo)
					console.log(tex_)
					//var trz
					mentioned = hardi.message.extendedTextMessage.contextInfo.mentionedJid
					var tex1_ = anuo.split('|')[1];
					var tex2_ = anuo.split('|')[2];
					paimon.sendFitnah(from, mentioned[0], tex1_, tex2_)
					break
					case 'playv2':
						if (args.length < 1) return fakegroup('Apa Yang Mau Dicari?')
						teks = args.join(' ')
						fakegroup(waiting(pushname))
						if (!teks.endsWith("-doc")) {
						  res = await yts(`${teks}`).catch(e => {
						    fakegroup('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
						  })
						  fakegroup(`.•♫•♬• Playing Video ${res.all[0].title} •♬•♫•.`)
						  let thumbInfo = `❒「  *Youtube Search*  」
├ *Judul :* ${res.all[0].title}
├ *ID Video :* ${res.all[0].videoId}
├ *Diupload Pada :* ${res.all[0].ago}
├ *Views :* ${res.all[0].views}
├ *Durasi :* ${res.all[0].timestamp}
├ *Channel :* ${res.all[0].author.name}
└ *Link Channel :* ${res.all[0].author.url}
						
*_Tunggu Proses Upload....._*
						`
						  sendFileFromUrl(res.all[0].image, image, { quoted: hardi, caption: thumbInfo })
						  res = await y2mateV(res.all[0].url).catch(e => {
						    fakegroup('_[ ! ] Error Saat Memasuki Web Y2mate_')
						  })
						  sendFileFromUrl(res[0].link, video, { quoted: hardi, mimetype: 'video/mp4', filename: res[0].output })
						}
						if (teks.endsWith("-doc")) {
						  const tec = teks.split("-doc")
						  res = await yts(`${tec}`).catch(e => {
						    fakegroup('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
						  })
						  fakegroup(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)
						  let thumbInfo = `❒「  *${botname}*  」
						├ *Judul :* ${res.all[0].title}
						├ *ID Video :* ${res.all[0].videoId}
						├ *Diupload Pada :* ${res.all[0].ago}
						├ *Views :* ${res.all[0].views}
						├ *Durasi :* ${res.all[0].timestamp}
						├ *Channel :* ${res.all[0].author.name}
						└ *Link Channel :* ${res.all[0].author.url}
						
						*_Tunggu Proses Upload....._*
						`
						  sendFileFromUrl(res.all[0].image, image, { quoted: hardi, caption: thumbInfo })
						  res = await y2mateV(res.all[0].url).catch(e => {
						    fakegroup('_[ ! ] Error Saat Memasuki Web Y2mate_')
						  })
						  sendFileFromUrl(res[0].link, document, { quoted: hardi, mimetype: 'video/mp4', filename: res[0].output })
						}
						break
				case 'fdeface': 
			  case 'hack':  
			  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
			  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
			  paimon.limitAdd(sender)
			  if (!arg) return paimon.reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|bawahnya`, hardi)
				argz = arg.split("|")
			 	if (!argz) return paimon.reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|bawahnya`, hardi)
			  if ((isMedia && !hardi.message.videoMessage || isQuotedImage)) {
			  let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo : hardi
				let media = await anto.downloadMediaMessage(encmedia)
				paimon.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3], media)
				} else {
				paimon.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3])
				}
				break
				case 'fakethumbnail':  
				case 'fthumbnail':
				case 'fakethumb':  
				if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
				if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
				paimon.limitAdd(sender)
				if ((isMedia && !hardi.message.videoMessage || isQuotedImage)) {
				let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo : hardi
				let media = await anto.downloadMediaMessage(encmedia)
			  paimon.sendFakeImg(from, media, arg, fakeimage, hardi)
				} else {
				paimon.reply(from, `Kirim gambar atau reply dengan caption ${prefix}fakethumb caption`, hardi)
				}
			  break
				case 'setthumb_':
				if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
				if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
				paimon.limitAdd(sender)
			  boij = JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await anto.downloadMediaMessage(boij)
				fs.writeFileSync(`./media/paimon.jpeg`, delb)
				paimon.sendFakeStatus(from, `Sukses`, fake)
				break
				case 'getpic': 
				if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
				if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 	
				paimon.limitAdd(sender)
				if (hardi.message.extendedTextMessage != undefined){
				mentioned = hardi.message.extendedTextMessage.contextInfo.mentionedJid
			  try {
				pic = await anto.getProfilePicture(mentioned[0])
				} catch {
				pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
				}
			  thumb = await paimon.getBuffer(pic)
			  anto.sendMessage(from, thumb, MessageType.image)
				}
					  break
				case 'imgtag':  
				if (!isAdmin) return fakegroup(mess.GrupAdmin)
				if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
				if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
				paimon.limitAdd(sender)
			  if ((isMedia && !hardi.message.videoMessage || isQuotedImage)) {
				const pe = arg
			  encmedia = isQuotedImage ? JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo : hardi
			   media = await anto.downloadMediaMessage(encmedia)
				fs.writeFileSync('./anu.jpeg', media)
			   anu = './anu.jpeg'
			  paimon.hideTagImg(from, anu, pe)
					  } else {
			  paimon.reply(from, `Kirim gambar atau reply dengan caption ${prefix}imgtag caption`, hardi)
					  }
			  break
				case 'sticktag': 
				case 'stickertag':  
				if (!isAdmin) return fakegroup(mess.GrupAdmin)
				if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
				if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
				paimon.limitAdd(sender)
			  if (!isQuotedSticker) return paimon.reply(from, `Reply sticker dengan caption *${prefix}stickertag*`, hardi)
				let encmediai = JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				let mediai = await anto.downloadMediaMessage(encmediai)
				fs.writeFileSync('./stick.webp', mediai)
				const _anue = './stick.webp'
				paimon.hideTagSticker(from, _anue)
					  break
				case 'kontaktag':  
			  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
			  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
			  paimon.limitAdd(sender)
					  argzu = arg.split('|')
			  if (!argzu) return paimon.reply(from, `Penggunaan ${prefix}kontak @tag atau nomor|nama`, hardi)
			  if (hardi.message.extendedTextMessage != undefined){
		    mentioned = hardi.message.extendedTextMessage.contextInfo.mentionedJid
				paimon.hideTagKontak(from, mentioned[0].split('@')[0], argzu[1])
			  } else {
			  paimon.hideTagKontak(from, argzu[0], argz[1])
			  }
				break
			  case 'takestick':  
			  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
			  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
			  paimon.limitAdd(sender)
				if (!isQuotedSticker) return paimon.reply(from, `Reply sticker dengan caption *${prefix}takestick nama|author*`, hardi)
				const pembawm = body.slice(11)
				if (!pembawm.includes('|')) return paimon.reply(from, `Reply sticker dengan caption *${prefix}takestick nama|author*`, hardi)
				encmedia = JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				 media = await anto.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
				const packname = pembawm.split('|')[0]
				const author = pembawm.split('|')[1]
				exif.create(packname, author, `takestick_${sender}`)
				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
				if (error) return paimon.reply(from, mess.error.api, hardi)
			  paimon.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), hardi)
			  fs.unlinkSync(media)
			  fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				// antoGON
            case 'tomp3':  
              try{
            if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 		 		
            if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 	
            paimon.limitAdd(sender)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(waiting(pushname))
            encmedia = JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await anto.downloadAndSaveMediaMessage(encmedia, './example.mp4')
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -b:a 64K ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            anto.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', filename: `${sender}.mp3`, quoted: hardi })
            fs.unlinkSync(ran)
            })} catch{ fakegroup('*Error*')}
            break
            case 'image'	:
            if (args.length < 1) return paimon.reply('Masukan teks!')
            const gimg = args[0];
            gis(gimg, async (error, result) => {
            for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
            var get = got(result[i].url);
            var stream = get.buffer();
            stream.then(async (images) => {
            await fakethumb(images);
            });
            }
            });
            break
    case 'brainly':  
        if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
        if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
        paimon.limitAdd(sender)
			  if (args.length < 1) return reply('Pertanyaan apa')
        brien = args.join(' ')
			  brainly(`${brien}`).then(res => {
			  teks = '❉───────────────────────❉\n'
			  for (let Y of res.data) {
			  teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			  }
			  fakegroup(teks)                        
        })              
			  break
			  case 'tiktokmusic':
			    if (args.length < 1) return fakegroup('Link Yang Mana? ')
			    if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
			    paimon.limitAdd(sender)
			    try {
			      fakegroup(waiting(pushname))
			      linknye = args.join(' ')
			      const anue_ = await paimon.getBuffer(`https://lolhuman.herokuapp.com/api/tiktokmusic?apikey=${lol}&url=${linknye}`)
			      anto.sendMessage(from, anue_, audio, {mimetype: 'audio/mp4', quoted: hardi})
			    } catch {
			      fakegroup("Erorr")
			    }
			    break
			  case 'tiktoknowm':
			  if (args.length < 1) return fakegroup('Link Yang Mana? ')
			  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
			  paimon.limitAdd(sender)
			  try {
			    linknye = args.join(' ')
			    console.log(linknye)
			    fakegroup(waiting(pushname))
			   const tektok = await axios.get(`https://lolhuman.herokuapp.com/api/tiktok?apikey=${lol}&url=${linknye}`)
			   const { link, description, title, keywords, thumbnail } = tektok.data.result
			   const them = await paimon.getBuffer(thumbnail)
			   const trimtol = await paimon.getBuffer(link)
			   const cpTUN = `*Video Di Temukan*\n*Title: ${title}*\n*Key: ${keywords}*\n*Desc:* ${description}\n\n*_VIDEO SEDANG DI UPLOAD_*`
			   anto.sendMessage(from, them, image, {quoted: hardi, caption: cpTUN})
			   anto.sendMessage(from, trimtol, video, {quoted: hardi})
			  } catch {
			    fakegroup("Tidak Di jangan Kau")
			  }
			  break
			  case 'tiktokwithwm':
			  case 'tiktokwm':
			  if (args.length < 1) return fakegroup('Link Yang Mana? ')
			  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
			  paimon.limitAdd(sender)
			  try {
			    fakegroup(waiting(pushname))
			  const vide = await paimon.getBuffer(`https://lolhuman.herokuapp.com/api/tiktokwm?apikey=${lol}&url=${args[0]}`)
			  console.log(args[0])
			  anto.sendMessage(from, vide, video, {quoted: hardi})
			  } catch {
			    fakegroup("Error Kak")
			  }
			  break
			  case 'coolgraffiti':
            case 'graffiti':
            if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
            if (args.length < 1) return fakegroup("Tek Um")
            initext = args.join(' ')
            textt1 = initext.split('|')[0]
            textt2 = initext.split('|')[1]
	    kowaii = await zrapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [textt1, textt2])
            kowai = paimon.getBuffer(kowaii)
	    fakeUdin(kowai, MessageType.image, "Neh")
            break
			  case 'igs':
			  case 'igstory':
			  if (args.length < 1) return fakegroup('Link Yang Mana? ')
			  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
			  paimon.limitAdd(sender)
			  try {
			    usernye = args.join(' ')
			    fakegroup(waiting(pushname))
			   const savehalal = await axios.get(`https://lolhuman.herokuapp.com/api/igstory/${usernye}?apikey=${lol}`)
			   for (var i = 0; i < savehalal.data.result.length; i++) {
			   const { url, type } = savehalal.data.result[i]
			   paimon.sendMediaURL(from, url, `Done`, hardi)
			   }
			  } catch {
			    fakegroup('*Error Kak*')
			  }
			  break
			  
			  case 'ighig':
			  case 'instagramhig':
			  if (args.length < 1) return fakegroup('Link Yang Mana? ')
			  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
			  paimon.limitAdd(sender)
			  try {
			  usernye = args.join(' ')
			  fakegroup(waiting(pushname))
			  const notmy = await axios.get(`https://lolhuman.herokuapp.com/api/highlights/${usernye}?apikey=${lol}`)
			  for (var i = 0; i < notmy.data.result.length; i++) {
			  const {url, added, title} = notmy.data.result[i]
			  const testcook = await paimon.getBuffer(url)
			  paimon.sendMediaURL(from, url,`Title: ${title}\nUpload: ${added}`, hardi)
			  }
			  } catch {
			    fakegroup('*Error Kak*')
			  }
        break
        
			  case 'ig':
				case 'instagram':
				if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix))
				paimon.limitAdd(sender)
				if (args.length < 1) return fakegroup('Link Yang Mana? ')
				if (isUrl(args[0]) && !args[0].includes('instagram')) return fakegroup('Link Ig?')
				teks = args.join(' ')
      await paimon.igDl(teks, from, fakeGIF)
				fakegroup(waiting(pushname))
			 break
        case 'fb':  
        if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
        if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
        paimon.limitAdd(sender)
        if (!q) return reply('Linknya?')
        te = args.join(' ')
        fakestatus(waiting(pushname))
        Fb.getInfo(`${te}`)
       .then(G => {
       ten = `${G.download.sd}`
       tek = `${G.title}`
       paimon.sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
       })
       break    
        case 'emoji': 
        if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
        if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 	
        paimon.limitAdd(sender)
			  qes = args.join(' ')
			  emoji.get(`${qes}`).then(emoji => {
			  teks = `${emoji.images[4].url}`
    		paimon.sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
			  case 'hidetag': 
			  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
			  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 	
			  paimon.limitAdd(sender)
			  if (!isAdmin) return paimon.reply(from, 'Khusus Admin Group')
			  if (!arg) return paimon.reply(from, `Penggunaan ${prefix}hidetag teks`, hardi)
				paimon.hideTag(from, arg)
				break
			  case 'runtime':  
			    if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 		 	
			    if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 	
			    paimon.limitAdd(sender)
				run = process.uptime()
				let text = paimon.runtime(run)
				paimon.sendFakeStatus(from, text, `Runtime bro`)
				break
			  case 'speed': 
			  case 'ping': 
			  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
			  if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 	
			  paimon.limitAdd(sender)
				let timestamp = speed();
				let latensi = speed() - timestamp
				paimon.sendFakeStatus(from, `Speed: ${latensi.toFixed(4)}second`, fake)
				break
			  case 'kontak':  
			    if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 		 		
			    if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
			    paimon.limitAdd(sender)
				argz = arg.split('|')
				if (!argz) return paimon.reply(from, `Penggunaan ${prefix}kontak @tag atau nomor|nama`, hardi)
				if (hardi.message.extendedTextMessage != undefined){
        mentioned = hardi.message.extendedTextMessage.contextInfo.mentionedJid
			  paimon.sendKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
			  paimon.sendKontak(from, argz[0], argz[1])
				}
				break
			   case 'gift':
				if (isOwner){
				if (hardi.message.extendedTextMessage === undefined || hardi.message.extendedTextMessage === null) return fakegroup('Tag target yang ingin di give!')
				mentioned = hardi.message.extendedTextMessage.contextInfo.mentionedJid
				paimon.addLimit(mentioned[0], Number(args[1]))
				const ngan = `Sukses Mengirim Limit Sebesar ${args[1]}`
				fakegroup(ngan)
				} 
				break
			  case 'term': 
				if (!arg) return
        if (!isOwner) return reply("culik ae om")
				exec(arg, (err, stdout) => {
				if (err) return paimon.sendFakeStatus(from, err, fake)
				if (stdout) paimon.sendFakeStatus(from, stdout, fake)
				})
				break
			  case 'setreply':  
        if (!isOwner) return reply(onlyOwner(pushname))
	      if (!arg) return paimon.reply(from, 'masukkan bio', hardi)
				if (!arg) return paimon.reply(from, `Penggunaan ${prefix}setreply teks`, hardi)
				fake = arg
				paimon.sendFakeStatus(from, `Sukses`, fake)
				break
        case 'setgif':
          if ((isMedia && hardi.message.videoMessage || isQuotedVideo) && args.length == 0) {
				    boij = isQuotedVideo ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
				    delb = await anto.downloadMediaMessage(boij)
				    fs.writeFileSync(`./asset/cewek.mp4`, delb)
          }
				case 'setwallpaper':
				case 'setgifmenu':
				  if (!isGroup) return fakegroup(groupOnly(pushname))
				  if (isAdmin) {
				  if ((isMedia && hardi.message.videoMessage || isQuotedVideo) && args.length == 0) {
				    boij = isQuotedVideo ? JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : hardi
				    delb = await anto.downloadMediaMessage(boij)
				    fs.writeFileSync(`./asset/${from}.mp4`, delb)
				    fakegroup('Sukses')
				    wpGb.push(from)
				    fs.writeFileSync(`./database/group/cekwp.json`, JSON.stringify(wpGb))
				  } else {
				    fakegroup(`Kirim gambar dengan caption ${prefix}setgifmenu`)
				  }}
				  break
				case 'multiprefix':
				  if (!isOwner) return paimon.reply(from, onlyOwner(pushname))
				  if (!arg) return paimon.reply(from, `Penggunaan ${prefix}${command} 1`, hardi)
				 if (args[0] == 1) {
				   if (multiPrefix.includes(ownerNumber[0])) return fakegroup("sudah Aktif")
				     fakegroup("Berhasil Di Terapkan")
				   multiPrefix.push(ownerNumber[0])
           fs.writeFileSync('./database/bot/multiprefix.json', JSON.stringify(multiPrefix))
				 } else if (args[0] == 0) {
				  if (!multiPrefix.includes(ownerNumber[0])) return fakegroup("Sudah Off Sebelum Nyah")
				 idnum = multiPrefix.indexOf(ownerNumber[0])
				  multiPrefix.splice(idnum, 1)
          fs.writeFileSync('./database/bot/multiprefix.json', JSON.stringify(multiPrefix))
				    fakegroup("Berhasil Di Non Aktif kan")
				 }
				 break
			  case 'setprefix':  
			        if (!isOwner) return paimon.reply(from, onlyOwner(pushname))
				if (!arg) return paimon.reply(from, `Penggunaan ${prefix}setprefix prefix`, hardi)
				prefix = arg
				paimon.sendFakeStatus(from, `Prefix berhasil diubah menjadi ${prefix}`, fake)
				break
				
				case 'slot':
	  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
	  // if (game.isLimitGame(sender)) return
	  // game.limitAddGame(sender)
	  try {
	  let emojis = ["🏆", "🥇", "💵"];
	  let a = Math.floor(Math.random() * emojis.length);
	  let b = Math.floor(Math.random() * emojis.length);
	  let c = Math.floor(Math.random() * emojis.length);
	  let x = [],
	    y = [],
	    z = [];
	  for (let i = 0; i < 3; i++) {
	    x[i] = emojis[a];
	    a++;
	    if (a == emojis.length) a = 0;
	  }
	  for (let i = 0; i < 3; i++) {
	    y[i] = emojis[b];
	    b++;
	    if (b == emojis.length) b = 0;
	  }
	  for (let i = 0; i < 3; i++) {
	    z[i] = emojis[c];
	    c++;
	    if (c == emojis.length) c = 0;
	  }
	  let end;
	  if (a == b && b == c) {
	    end = "JACKPOT! 🥳 *Kamu mendapat Duit Rp.1000;-*";
	
	  } else if (a == b || a == c || b == c) {
	    end = "Lumayan 👍 *Rp.200;- Buat Kamu* Coba lagi siapa tau dapet jackpot";
	  } else {
	    end = "Kamu kalah 😥 Coba lagi siapa tau dapet jackpot";
	  }
	  return fakegroup(
	    `[ 🎰 | SLOTS ]\n\n${end}\n\n${x[0]} ${y[0]} ${z[0]}\n${x[1]} ${y[1]} ${z[1]}\n${x[2]} ${y[2]} ${z[2]}`
	  )
} catch {
  fakegroup('*eror Kaka*')
}
			case 'setname':  

    if (!isOwner) return reply(onlyOwner(pushname))
		if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 
	  if (!arg) return paimon.reply(from, 'masukkan nama', hardi)
	  paimon.setName(arg)
	  .then((res) => paimon.sendFakeStatus(from, JSON.stringify(res), fake))
		.catch((err) => paimon.sendFakeStatus(from, JSON.stringify(err), fake))
				break
	  case 'setbio':  
    if (!isOwner) return reply(onlyOwner(pushname))
		if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
	  if (!arg) return paimon.reply(from, 'masukkan bio', hardi)
		 paimon.setBio(arg)
		.then((res) => paimon.sendFakeStatus(from, JSON.stringify(res), fake))
	  .catch((err) => paimon.sendFakeStatus(from, JSON.stringify(err), fake))
break
case 'welcome':
  if (!isAdmin) return reply(adminOnly(pushname))
	if (args.length < 1) return reply(`Use 1 or 0\n\nEx :\n${prefix}welcome 1`)
	if (Number(args[0]) === 1) {
	      if (isWelkom) return reply('Status : aktif')
	      welkom.push(from)
	      fs.writeFileSync('./database/bot/welcome.json', JSON.stringify(welkom))
	      fakegroup("*Sukses Telah Di aktifkan*")
	} else if (Number(args[0]) === 0) {
	      welkom.splice(from, 1)
	      fs.writeFileSync('./database/bot/welcome.json', JSON.stringify(welkom))
	      fakegroup('Succes, Menonaktifkan fitur welcome/left di group ini')
	} else {
	      reply(`${prefix}welcome 1 untuk mengaktifkan\n${prefix}welcome 0 untuk menonaktifkan\ncontoh: ${prefix}welcome 1`)
	}
  case 'nsfw':
if (!isAdmin) return reply(adminOnly(pushname))
	if (args.length < 1) return reply(`Use 1 or 0\n\nEx :\n${prefix}nsfw 1`)
	if (Number(args[0]) === 1) {
	      if (isNsfw) return reply('Status : aktif')
	      _Nsfw.push(from)
	      fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(_Nsfw))
	      fakegroup("*Sukses Telah Di aktifkan*")
	} else if (Number(args[0]) === 0) {
	      _Nsfw.splice(from, 1)
	      fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(_Nsfw))
	      fakegroup('Succes, Menonaktifkan fitur NSFW di group ini')
	} else {
	      reply(`${prefix}${command} 1 untuk mengaktifkan\n${prefix}welcome 0 untuk menonaktifkan\ncontoh: ${prefix}welcome 1`)
	}
	break
	  case 'premiumcheck':
	  case 'cekpremium': 
	  if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 	
		if (!isPremium) return fakegroup(mess.premiumOnly)
	  const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
	  fakegroup(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
		 break
	   case 'premiumlist': 
		 case 'listpremium':  
		 if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
		 if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
		 paimon.limitAdd(sender)
		 let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
		 const deret = premium.getAllPremiumUser(_premium)
		 const arrayPremi = []
		 for (let i = 0; i < deret.length; i++) {
		 const checkExp = ms(premium.getPremiumExpired(deret[i], _premium) - Date.now())
				  arrayPremi.push(anto.contacts(premium.getAllPremiumUser(_premium)[i]))
		 listPremi += `${i + 1}. wa.me/${premium.getAllPremiumUser(_premium)[i].replace('@s.whatsapp.net', '')}\n➸ *Name*: ${arrayPremi[i].pushname}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
		  }
		  fakegroup(listPremi)
		  break
///ZONE OWNER //
case 'bc':
  case 'broadcast':
    if (!isOwner) return reply(onlyOwner(pushname))
    list_chat = await anto.chats.all()
    ini_text = args.join(" ")
    for (let chat of list_chat) {
          if (isQuotedVideo) {
      boij = JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
      delb = await anto.downloadMediaMessage(boij)
      anto.sendMessage(chat.jid, delb, MessageType.video, {qouted: fakeGIF, caption: ini_text, thumbnail: fs.readFileSync("./sticker/thumb.jpeg")})
      reply(doneOwner(pushname))  
        } else if (isQuotedImage) {
      boij = JSON.parse(JSON.stringify(hardi).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
      delb = await anto.downloadMediaMessage(boij)
      anto.sendMessage(chat.jid, delb, MessageType.image, {qouted: fakeGIF, caption: ini_text, thumbnail: fs.readFileSync("./sticker/thumb.jpeg")})
      reply(doneOwner(pushname))  
        } else {
      anto.sendMessage(chat.jid, ini_text, MessageType.text, {qouted: fakeGIF})
      reply(doneOwner(pushname))  
      }
    }
        break
case 'addowner':
if (mentionUser[0] === ownerNumber[0]) return reply("ngajak War")
if (!isOwner) return reply("mau jadi owner?")
ownerNumber1.push(mentionUser[0])
fs.writeFileSync('./setting/owner.json', JSON.stringify(ownerNumber1))
mentiontext(`Sukses Menambahkan @${mentionUser[0].split("@")[0]} Sebagai Owner`, mentionUser, true)
break

case 'delowner':
if (mentionUser[0] === ownerNumber[0]) return reply("ngajak War")
if (!isOwner) return reply("mau Hapus owner?")
ownerNumber1.splice(mentionUser[0], 1)
fs.writeFileSync('./setting/owner.json', JSON.stringify(ownerNumber1))
mentiontext(`Sukses MengHapus @${mentionUser[0].split("@")[0]} Sebagai Owner`, mentionUser, true)
break

	    case 'setfakethumb':  
	    if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 	
	    if (paimon.isLimit(sender, from)) return fakegroup(thisLimit(pushname, prefix)) 		
	    paimon.limitAdd(sender)
	    if (!isOwner) return fakegroup(onlyOwner(pushname))
	    if ((isMedia && !hardi.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
      boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo : hardi
			delb = await anto.downloadMediaMessage(boij)
			fs.writeFileSync(`./sticker/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
      fakeGroup(`Kirim gambar dengan caption ${prefix}sethumb`)
          }
break
		case 'setprofilemenu':
		if (!isOwner) return fakegroup(onlyOwner(pushname))
		if ((isMedia && !hardi.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
	  boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo : hardi
		delb = await anto.downloadMediaMessage(boij)
		fs.writeFileSync(`./media/paimon.jpeg`, delb)
		fakestatus('Sukses')
		 } else {
		paimon.reply(`Kirim gambar dengan caption ${prefix}sethumb`)
		 }
break	
                    case 'setfakeimg': 
                    if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 	
                    if (!isOwner) return fakegroup(onlyOwner(pushname))
        	          if ((isMedia && !hardi.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	         boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo : hardi
			                delb = await anto.downloadMediaMessage(boij)
			                fs.writeFileSync(`./sticker/paimon.jpeg`, delb)
			fakestatus('Done')
        	            } else {
                      fakegroup(error)
          	            }
break
	                      case 'premium': 
	                      if (!isRegistered) return fakegroup(notRegister(pushname, prefix)) 
                        if (!isOwner) return paimon.reply(from, onlyOwner(pushname))
                        if (args[0] === 'add') {
                        if (hardi.message.extendedTextMessage != undefined) {
                            mentioned = hardi.message.extendedTextMessage.contextInfo.mentionedJid

                        premium.addPremiumUser(mentioned[0], args[2], _premium)
                        paimon.reply(from, `*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                        
                          } else {
                            
                           premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
                            paimon.reply(from, `*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                            }
                            } else if (args[0] === 'del') {
                            if (hardi.message.extendedTextMessage != undefined) {
                            mentioned = hardi.message.extendedTextMessage.contextInfo.mentionedJid
                            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
                           fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_premium))
                           paimon.reply(from, mess.doneOwner)
                           } else {
                          _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
                          fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_premium))
                          paimon.reply(from, doneOwner)
                          }
                          } else {
                          paimon.reply(from, wrongFormat)
                          }
                          break
        
	        case 'antilink':
	        if (!isAdmin) return fakegroup(mess.AdminOnly)
					if (args.length < 1) return fakegroup('type 1 to activate the antilink feature')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return fakegroup('anti link group is active')
						antilink.push(from)
						fs.writeFileSync('./database/bot/antilink.json', JSON.stringify(antilink))
						fakegroup('Success activate antilink group in this group')
						anto.sendMessage(from,`Attention to all member, antilink active, if you send a group link, you will be kicked from the group`, MessageType.text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return fakegroup('Antilink status : disable')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/bot/antilink.json', JSON.stringify(antilink))
						fakegroup('Success disable antilink group in this group')
					} else {
						fakegroup('1 to activate, 0 to deactivate')
					}
					break
					
					
					
					
          case 'tiktokstalk':
          if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
          if (paimon.isLimit(sender)) return
          paimon.limitAdd(sender)
          userse = args.join
          console.log(userse)
          datemy = await axios.get(`http://api.lolhuman.xyz/api/stalktiktok/${userse}?apikey=${lol}}`)
          data = datemy.data
          teks = `*Username :* ${data.result.username}\n\n*Nickname :* ${data.result.nickname}\n\n*Bio :* ${data.result.bio}\n\n*Followers :* ${data.result.followers}\n\n*Following :* ${data.result.followings}\n\n*Like count :* ${data.result.likes}\n\n*Video count :* ${data.result.video}`
                    ppmus = await paimon.getBuffer(data.result.user_picture)
                    anto.sendMessage(from, ppmus, image, {quoted: hardi, caption: teks})
                    break
                    
			
			case 'listonline':
			  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(anto.chats.get(ido).presences), anto.user.jid]
			    anto.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: hardi,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
			case 'typing':
			  if (!isOwner) return fakegroup(mess.AntoOnly)
			     anto.updatePresence(from, Presence.composing)
			     if (args[1]=="stop")
			     anto.updatePresence(from, Presence.paused)
			    break
			case 'unread?':
			    if (isOwner){
			    const unread = await anto.loadAllUnreadMessages()
			    anto.sendMessage("627811078485@s.whatsapp.net", `unread message count : *${unread.length}*`, MessageType.text)
			  }
			    break
			    case 'delchat':
			          if (isAdmin){
                fakegroup('*succes delete this chat*')
                console.log('succes delete chat = ' + from)
               // await sleep(4000)
                anto.modifyChat(from, ChatModification.delete)
			          }
                break
                case 'telesticker':
                if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                if (paimon.isLimit(sender)) return
                paimon.limitAdd(sender)
                    inim_url = args[0]
                    ini_urlm = await axios.get(`http://api.lolhuman.xyz/api/telestick?apikey=${lol}&url=${inim_url}`)
                    ini_url = ini_urlm.data
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        buffer = await paimon.getBuffer(ini_sticker[sticker_])
                        anto.sendMessage(from, buffer, MessageType.sticker)
                    }
                    break
                case 'googleimg':
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                  if (paimon.isLimit(sender)) return
                  paimon.limitAdd(sender)
                    ini_url = args[0]
                    ini_urlm = await axios.get(`http://api.lolhuman.xyz/api/gimage2?apikey=${lol}&query=${ini_url}`)
                    ini_urlr = ini_urlm.data
                    ini_sticker = ini_urlr.result
                    for (let i = 0; i < 5; i++) {
                        buffer = await paimon.getBuffer(ini_sticker[i])
                        anto.sendMessage(from, buffer, image, {quoted: hardi})
                    }
                    break
                    case 'cuaca':
                    if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                    if (paimon.isLimit(sender)) return
                    paimon.limitAdd(sender)
                    var kota = args.join(' ')
                    datang = await axios(`http://api.lolhuman.xyz/api/cuaca/${kota}?apikey=${lol}`)
                    data = datang.data
                     fakegroup(`*Weather*\n\nCity : ${data.result.tempat}\nLatitude : ${data.result.latitude}\nLongitude : ${data.result.longitude}\nWeather : ${data.result.cuaca}\nDescription : ${data.result.description}\n Wind : ${data.result.angin}\nMoisture : ${data.result.kelembapan}\nTemperature : ${data.result.suhu}\nAir : ${data.result.udara}\nSea level : ${data.result.permukaan_laut}`)
                     break
                case 'qrcode':
                    if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                    if (paimon.isLimit(sender)) return
                    paimon.limitAdd(sender)
                    ajgn = args.join(' ')
                    hasil = await paimon.getBuffer(`http://api.lolhuman.xyz/api/qrcode?apikey=${lol}&text=${ajgn}`)
                    anto.sendMessage(from, hasil, image, {quoted: hardi})
                    break
                case 'qrreader':
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                    enmedia = JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await anto.downloadAndSaveMediaMessage(enmedia)
					anu = await imgbb(imgb, mediam)
					teks = `${anu.display_url}`
                    anu = await axios.get(`http://api.lolhuman.xyz/api/read-qr?apikey=${lol}&img=${teks}`)
                    fakegroup(anu.data.result)
                    break
        case 'becrypt':
				becry = `${body.slice(9)}`
				anu = await axios.get(`https://api.i-tech.id/hash/bcrypt?key=TrzDwA-gT8ZNu-xJWUZT-TAUYD5-W6HIOV&string=${becry}`)
				anto.sendMessage(from, `${anu.data.result}`, text, {quoted: hardi})
				break 
			    
                         
                case 'katailham':
				quotes = args.join(' ')
				const kta =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
				const su = kta[Math.floor(Math.random() * kta.length)]
				anto.sendMessage(from, ''+su+'\n\n-Ilham.', MessageType.text, { quoted: hardi})
				break
               case 'citacita':
                 if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                    if (paimon.isLimit(sender)) return
                    paimon.limitAdd(sender)
               const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
               const cita3 = cita[Math.floor(Math.random() * cita.length)]
               cita2 = await paimon.getBuffer(cita3)
               anto.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: hardi})
               break
                case 'asupan':
                if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                if (paimon.isLimit(sender)) return
                    paimon.limitAdd(sender)
                anu = await axios.get(`http://lolhuman.herokuapp.com/api/asupan?apikey=${lol}`)
                buff = await paimon.getBuffer(anu.data.result)
                anto.sendMessage(from, buff, video, {caption: `Succes`})
                    break
                case 'gtav':
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                  if (paimon.isLimit(sender)) return
                  paimon.limitAdd(sender)
                    enmedia = JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await anto.downloadAndSaveMediaMessage(enmedia)
					anu = await imgbb(imgb, media)
					teks = `${anu.display_url}`
					foto = await paimon.getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${teks}`)
					anto.sendMessage(from, foto, image, {quoted: hardi})
					break
                case 'wasted':
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                  if (paimon.isLimit(sender)) return
                  paimon.limitAdd(sender)
                    enmedia = JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await anto.downloadAndSaveMediaMessage(enmedia)
					anu = await imgbb(imgb, media)
					teks = `${anu.display_url}`
					foto = await paimon.getBuffer(`http://api.lolhuman.xyz/api/editor/wasted?apikey=${lol}&img=${teks}`)
					anto.sendMessage(from, foto, image, {quoted: hardi})
					break
                case 'fisheye':
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                  if (paimon.isLimit(sender)) return
                  paimon.limitAdd(sender)
                    enmedia = JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await anto.downloadAndSaveMediaMessage(enmedia)
					anu = await imgbb(imgb, media)
					teks = `${anu.display_url}`
					foto = await paimon.getBuffer(`http://api.lolhuman.xyz/api/editor/fisheye?apikey=${lol}&img=${teks}`)
					anto.sendMessage(from, foto, image, {quoted: hardi})
					break
                case 'pencil':
                  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                  if (paimon.isLimit(sender)) return
                  paimon.limitAdd(sender)
                    enmedia = JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await anto.downloadAndSaveMediaMessage(enmedia)
					anu = await imgbb(imgb, media)
					teks = `${anu.display_url}`
					foto = await paimon.getBuffer(`http://api.lolhuman.xyz/api/editor/pencil?apikey=${lol}&img=${teks}`)
					anto.sendMessage(from, foto, image, {quoted: hardi})
					break
          case 'wanted':
            if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
            if (paimon.isLimit(sender)) return
            paimon.limitAdd(sender)
            enmedia = JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await anto.downloadAndSaveMediaMessage(enmedia)
					anu = await imgbb(imgb, media)
					teks = `${anu.display_url}`
					var kls = args.join(' ')
			        var has = kls.split("|")[0];
			        var kas = kls.split("|")[1];
					foto = await paimon.getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${teks}&text1=${has}&text2=${kas}`)
					anto.sendMessage(from, foto, image, {quoted: hardi})
					break
               case 'setnamegc':
                if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                if (paimon.isLimit(sender)) return
                paimon.limitAdd(sender)
                if (isAdmin) return fakegroup(mess.AdminOnly)
                anto.groupUpdateSubject(from, `${args.join(' ')}`)
                anto.sendMessage(from, 'Succes, change group name', text, {quoted: hardi})
					break
					case 'kusonimesearch':
					  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
					  if (paimon.isLimit(sender)) return
					  paimon.limitAdd(sender)
            query = args.join(" ")
            get_result = await axios.get(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${lol}&query=${query}`)
                    get_result = get_result.data.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Seasons : ${get_result.seasons}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Status : ${get_result.status}\n`
                    txt += `Total Episode : ${get_result.total_episode}\n`
                    txt += `Score : ${get_result.score}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Released On : ${get_result.released_on}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await paimon.getBuffer(get_result.thumbnail)
                    anto.sendMessage(from, buffer, image, { quoted: hardi, caption: txt })
                    break
               case 'kusonime':
                    if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                    if (paimon.isLimit(sender)) return
                    paimon.limitAdd(sender)
                    ini_url = args.join(' ')
                    get_result = await axios.get(`http://api.lolhuman.xyz/api/kusonime?apikey=${lol}&url=${ini_url}`)
                    get_result = get_result.data.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Seasons : ${get_result.seasons}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Status : ${get_result.status}\n`
                    txt += `Total Episode : ${get_result.total_episode}\n`
                    txt += `Score : ${get_result.score}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Released On : ${get_result.released_on}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await paimon.getBuffer(get_result.thumbnail)
                    anto.sendMessage(from, buffer, image, { quoted: hardi, caption: txt })
                    break
					  case 'tahta':
            case 'harta':
              if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
              if (paimon.isLimit(sender)) return
              paimon.limitAdd(sender)
                tahta = args.join(' ')
                     if (args.length < 1) return fakegroup('Text?')
                     if (args.length > 10) return fakegroup('Text maximal 10')
                     fakegroup(waiting(pushname))
                     buff = await paimon.getBuffer(`https://lolhuman.herokuapp.com/api/hartatahta?apikey=${lol}&text=${tahta}`)
                     anto.sendMessage(from, buff, image, {quoted: hardi, caption: `Harta Tahta ${tahta}`})
                  break
                  case 'readmore':
          if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
                    if (paimon.isLimit(sender)) return
                    paimon.limitAdd(sender)
					if (args.length < 1) return fakegroup(`*Usage :*\n${prefix}readmore Teks|Teksreadmore\n\n*Ex :*\n${prefix}readmore Cinta|i ususmu, minum blabla`)

					var kls = args.join(' ')
					var has = kls.split("|")[0];
					var kas = kls.split("|")[1];
					if (args.length < 1) return fakegroup(mess.blank)
					anto.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , MessageType.text, { quoted: hardi })
					break
					case 'ytstalk':
          if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
          if (paimon.isLimit(sender)) return
          paimon.limitAdd(sender)
                anu = await axios.get(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lol}&query=${args.join(' ')}`)
                teks = `*YOUTUBE - STALK*`
                var nomore = '1'
                for (let i = 0; i < anu.data.result.length; i++) {
                    teks += `\n\n*Urutan ${nomore}*\n*Channel name :* ${anu.data.result[i].channel_name}\n*Channel id :* ${anu.data.result[i].channel_id}\n*Channel created :* ${anu.data.result[i].channel_created}`
                    nomore++
                }
                buff = await paimon.getBuffer(anu.data.result[0].channel_picture.high.url)
               anto.sendMessage(from, buff, image, {quoted: hardi, caption: teks})
                break
                case 'readall':
                  if (isOwner){
					var chats = await anto.chats.all()
                    chats.map( async ({ jid }) => {
                          await anto.chatRead(jid)
                    })
					teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
					await anto.sendMessage(from, teks, MessageType.text, {quoted: hardi})
					console.log(chats.length)
                  }
					break
					case 'timer':
				if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
				if (paimon.isLimit(sender)) return
				paimon.limitAdd(sender)
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return fakegroup("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				fakegroup("Waktu habis")
				}, timer)
				break
				case 'nulis':
			case 'tulis':
			  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
			  if (paimon.isLimit(sender)) return
			  paimon.limitAdd(sender)
				  anto.updatePresence(from, Presence.composing)
			      if (args.length < 1) return fakegroup(`*Usage :*\n${prefix}nulis yourtext\n\n*Ex :*\n${prefix}nulis Tes123`)
			      fakegroup(waiting(pushname))
					tulis = body.slice(7)
					nulis = await paimon.getBuffer(`http://api.lolhuman.xyz/api/nulis?apikey=${lol}&text=${tulis}`)
					anto.sendMessage(from, nulis, image, {quoted: hardi})
					break
             case 'kicktime':
                    crkick = '*WARNING!!*'
					if (hardi.message.extendedTextMessage === undefined || hardi.message.extendedTextMessage === null) return fakegroup('Tag target yang ingin di tendang!')
					mentioned = hardi.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					fakegroup('Done!')
					}, 8000)
					setTimeout( () => {
					anto.groupRemove(from, mentioned)
					}, 7000)
					setTimeout( () => {
				 fakegroup('awokawok')
					}, 6000)
					setTimeout( () => {
					fakegroup('Set time..')
					}, 3500)
					setTimeout( () => {
					fakegroup('Perintah diterima!')
					}, 0)
            case 'github':
            if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
            if (paimon.isLimit(sender)) return
            paimon.limitAdd(sender)
                    git = args.join(' ')
                    anu = await axios.get(`http://api.lolhuman.xyz/api/github/${git}?apikey=${lol}`) // GET IN api.lolhuman.xyz
                    anu = anu.data
                    teks = `*Name :* ${anu.result.name}\n*Followers :* ${anu.result.followers}\n*Following :* ${anu.result.following}\n*Repositories :* ${anu.result.public_repos}\n*Gits :* ${anu.result.public_gits}\n*Type :* ${anu.result.type}\n*Company :* ${anu.result.company}\n*Location :* ${anu.result.location}\n*Email :* ${anu.result.email}\n*Bio :* ${anu.result.bio}\n*Url :* ${anu.result.url}`
                    pepek = await paimon.getBuffer(anu.result.avatar)
                    anto.sendMessage(from, pepek, image, {quoted: hardi, caption: `${teks}`})
                    break
        case 'igstalk':
          if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
          if (paimon.isLimit(sender)) return
          paimon.limitAdd(sender)
                  igdlm = args.join(' ')
                  anu = await axios.get(`https://lolhuman.herokuapp.com/api/stalkig/${igdlm}?apikey=${lol}`)
                  anu = anu.data
                  teks = `*Username :* ${anu.result.username}\n*Name :* ${anu.result.fullname}\n*Post :*${anu.result.posts}\n*Followers :* ${anu.result.followers}\nFollowing :* ${anu.result.following}\n*Bio :* ${anu.result.bio}`
                  pepek = await paimon.getBuffer(anu.result.photo_profile)
                  anto.sendMessage(from, pepek, image, {quoted: hardi, caption: `${teks}`})
                  break
        case 'jadwalsholat':
          if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
            if (paimon.isLimit(sender)) return
            paimon.limitAdd(sender)
                  jsholat = args.join(' ')
                  anu = await axios.get(`http://api.lolhuman.xyz/api/sholat/${jsholat}?apikey=${lol}`)
                  anu = anu.data
                  teks = `*Jadwal sholat wilayah ${anu.result.wilayah} tanggal ${anu.result.tanggal}*\n\nWilayah : ${anu.result.wilayah}\nImsak  ${anu.result.imsak}\nSubuh ${anu.result.subuh}\nTerbit  ${anu.result.terbit}\nDhuha  ${anu.result.dhuha}\nDzuhur  ${anu.result.dzuhur}\nAshar  ${anu.result.ashar}\nMaghrib  ${anu.result.maghrib}\nIsya  ${anu.result.isya}`
                  crsho = '*_JADWAL - SHOLAT_*'
                  await fakegroup(teks)
                  break
          case 'kapankah':
					const kapan1 = args.join(' ')
					const kapan2 = [
					'Hari ini',
					'Mungkin besok',
					'1 Minggu lagi',
					'Masih lama',
					'3 Bulan lagi',
					'7 Bulan lagi',
					'3 Tahun lagi',
					'4 Bulan lagi',
					'2 Bulan lagi',
					'1 Tahun lagi',
					'1 Bulan lagi',
					'Coba ulangi',
					]
					const kpnkh = kapan2[Math.floor(Math.random() * (kapan2.length))]

					const jawab1 = `Pertanyaan : *${kapan1}*\n\nJawaban: ${kpnkh}`
                    
				 fakegroup(jawab1)
					break
			case 'apakah':
					const tanya = body.slice(1)
					const apa = [
					'Ya',
					'Mungkin',
					'Tidak',
					'Coba Ulangi',
					'Iya kali',
					]
					const apkh = apa[Math.floor(Math.random() * (apa.length))]
					const jawab = `Pertanyaan : *${tanya}*\n\nJawaban: ${apkh}`
				  fakegroup(jawab)
					break
			case 'darkjoke':
				 if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
            if (paimon.isLimit(sender)) return
            paimon.limitAdd(sender)
                hasil = await paimon.getBuffer(`https://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=${lol}`)
                anto.sendMessage(from, hasil, MessageType.image, {quoted: hardi})
				        break
			case 'memeind':
                    crmek = '*_Searching - meme_*'
                    fakegroup(crmek)
                    thumbni = await paimon.getBuffer(`https://lolhuman.herokuapp.com/api/meme/memeindo?apikey=${lol}`)
                                anto.sendMessage(from, thumbni, image, {quoted: hardi})
                                break
				case 'terbalik':
					if (args.length < 1) return fakegroup('teks nya mana sayang?')
					meki = await axios.get(`https://videfikri.com/api/hurufterbalik/?query=${args.join(' ')}`)
					anto.sendMessage(from, `Input: ${args.join(' ')}\nOutput: ${meki.data.result.kata}`, MessageType.text, {quoted: hardi})
					break
				case 'huruf': 
					if (args.length < 1) return fakegroup('teks nya mana sayang?')
					meki = await axios.get(`https://videfikri.com/api/jumlahhuruf/?query=${args.join(' ')}`)
					anto.sendMessage(from, `Input: ${body.slice(6)}\nJumlah Huruf: ${meki.data.result.jumlah}`, MessageType.text, {quoted: hardi})
					break
				case 'tagall':
				  if (isAdmin){
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentiontext(teks, members_id, true)
				  }
				  
					break
				case 'clearall':
				  if (isOwner) {
					anu = await anto.chats.all()
					anto.setMaxListeners(25)
					for (let _ of anu) {
						anto.deleteChat(_.jid)
					}
					fakegroup('succes clear all')
				  }
					break
					case 'setpp':
					if (isOwner) {
				anto.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return fakegroup(`Kirim gambar dengan caption ${prefix}setpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(hardi).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await anto.downloadAndSaveMediaMessage(enmedia)
					await anto.updateProfilePicture(thisBot, media)
					fakegroup('Done!')
					}
					break	
					case 'grup':
					case 'group':
					if (!isAdmin) return fakegroup(`${pushname} Enteh Saha?`)
					crgrup = '*_GROUP - SETTING_*'
					if (args[0] === 'unlock') {
					    fakegroup(`Berhasil mebuka group`)
						anto.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'lock') {
			    fakegroup('Berhasil Menutup Group')
						anto.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
            case 'ownerbot':
            case 'owner':
            case 'contact':
            case 'creator':
                  me = anto.user
				  teks = `
Name: This A Hardianto
My Age: 17 th
I'm A Student And Live in Pinrang, Sulsel`
				  paimon.sendKontak(from, ownerNumber[0].split('@')[0], 'HARDIANTO CHAN🌸')
				  pepek = await paimon.getBuffer(me.imgUrl)
				  anto.sendMessage(from, pepek, image, {quoted: hardi, caption: teks})
           break    
           case 'demote':
           if (isAdmin) {
					mentioned = hardi.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Done!\n`
							teks += `@${_.split('@')[0]}`
						}
						mentiontext(teks, mentioned, true)
						anto.groupDemoteAdmin(from, mentioned)
					} else {
						mentiontext(`Done! @${mentioned[0].split('@')[0]} sekarang menjadi member!`, mentioned)
						anto.groupDemoteAdmin(from, mentioned)
					}
           }
					break
			  case 'idgroup':
			  case 'getid':
			  reply(`${from}`)
			  break
			  case 'tagme':
			  text_v = `@${sender.split("@")[0]}`
			  mentiontext(text_v, [sender], true)
			  break
				case 'promote':
				  if (isAdmin) {
					if (hardi.message.extendedTextMessage === undefined || hardi.message.extendedTextMessage === null) return fakegroup('Tag dulu membernya njir')
					mentioned = hardi.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Done :\n`
							teks += `@_.split('@')[0]`
						}
						mentiontext(teks, mentioned, true)
						anto.groupMakeAdmin(from, mentioned)
					} else {
						mentiontext(`Done! @${mentioned[0].split('@')[0]} sekarang admin`, mentioned, true)
						anto.groupMakeAdmin(from, mentioned)
					}}
					break
					case 'kick':
          if (!isAdmin) return fakegroup('*Jadi Admin?*')
					if (hardi.message.extendedTextMessage === undefined || hardi.message.extendedTextMessage === null) return fakegroup('Tag yang member yang ingin ditendang!')
					mentioned = hardi.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentionUser) {
							teks += `Otw.... :\n`
							teks += `@${_.split('@')[0]}`
						}
						mentiontext(teks, mentionUser, true)
						anto.groupRemove(from, [mentionUser[0]])
					} else {
						mentiontext(`Done! @${mentioned[0].split('@')[0]} akan di kick`, mentioned)
						anto.groupRemove(from, mentioned)
					}
					break
				case 'listadmin':
					teks = `List admin group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentiontext(teks, groupAdmins, true)
					break
					case 'otakudesusearch':
					  if (!isRegistered) return fakegroup(notRegister(pushname, prefix))
					  if (paimon.isLimit(sender)) return
					  paimon.limitAdd(sender)
                    var queryy = args.join(' ')
                    get_result = await axios.get(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=${lol}&query=${queryy}`)
                    get_result = get_result.data.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Judul : ${get_result.judul}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Episode : ${get_result.episodes}\n`
                    txt += `Aired : ${get_result.aired}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Genre : ${get_result.genres}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Studios : ${get_result.status}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Credit : ${get_result.credit}\n`
                    var get_link = get_result.link_dl
                    for (var x in get_link) {
                        txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            var info = get_link[x].link_dl[y]
                            txt += `\n\`\`\`Reso : \`\`\`${info.reso}\n`
                            txt += `\`\`\`Size : \`\`\`${info.size}\n`
                            txt += `\`\`\`Link : \`\`\`\n`
                            var down_link = info.link_dl
                            for (var z in down_link) {
                                txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    fakegroup(txt)
                    break
			  default:
				  if (isCmd) {
				if (chats.startsWith(`${prefix}${command}`)) {
				console.log(color('[UNCMD]'), color(moment(hardi.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`CMD ASAL ASALAN BROO`))
				return paimon.reply(from, `*Maaf Kak ${pushname} perintah ${prefix}${command} Tidak Terdaftar Dalam ${prefix}menu*`)
				}
			}
				if (chats.startsWith('>')){
        if (!isOwner) return reply("hmm ngapain")
				console.log(color('[EVAL]'), color(moment(hardi.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval brooo`))
        return paimon.reply(from, JSON.stringify(eval(chats.slice(2)), null, 2), hardi)
				}
        if (chats.startsWith('@verify')){
            if (isRegistered) return fakegroup("Kamu Sudah Terdaftar")
             try {
             var perry = await anto.getProfilePicture(sender)
             } catch (e) {
            var perry = errorimg
             }
             anose = await ameApi.generate("approved", {url: perry})
             var namaUser = pushname
             var umurUser = 17
             var serialUser = createSerial(20)
             if (Number(umurUser) >= 40) return fakegroup('*Kamu Terlalu Tua Sayang*')
             register.addRegisteredUser(sender, namaUser, umurUser, time, serialUser, _register)
             const cptu = `
◪ ➪  *「 DAFTAR USER 」*
| ◪ *Nama: ${namaUser}*
| ◪ *Time: ${time}*
| ◪ *Chats: wa.me/${sender.split('@')[0]}*
| ◪ *Serial: _${serialUser}_*
 ◪ ➪  *「 NOTE 」* ${gaya}
➪ Following Rules
➪ Report Bug
➪ Open request
➪ Dont Forget Support My In ${prefix}donasi${gaya}
    ◪ ➪  *「 THANKS TO USER 」*`
                paimon.sendFakeStatusWithImg(from, anose, cptu, "*VERIFIKASI COMPLETE*")
                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
              
        }
          break
        }
        } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
        }
        })
