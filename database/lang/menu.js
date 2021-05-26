const { level, duit } = require("../../function")

const wel = `*_「  LIST MENU BOT  」_*`
const end = `*_「  PAIMON BOT  」_*`
exports.coreMenu = (limits, role, ini_lv, cardUser, ManikBars, giiid, latensiu, gaya, pushname, selamat, sender, tampilTanggal, tampilWaktu, tmp_hit, tmphit, _register, ownerNumber_, text_r, multiKah, totalchat, process) => {
    return `
    _*「  PAIMON BOT  」*_


*_Hay Kak @${sender.split("@")[0]} Selamat ${selamat} :)_*

_*「  INFO & DATA USER  」*_
| ◪ Name: ${pushname}
| ◪ Role: ${role}
| ◪ Level: ${ini_lv}
| ◪ Progress: ${ManikBars}
| ◪ Card: ${cardUser}
| ◪ Limit: ${limits}
| ◪ Limit Game: -
| ◪ Money: ${duit.checkATMuser(sender) ? duit.checkATMuser(sender) : '0'}


_*「  TIME & DATE BOT  」*_
|${tampilTanggal}*
|${tampilWaktu}*

_*「  STAT PAIMON  」*_
${gaya}
| ◪ Total Hit: ${tmp_hit.length}
| ◪ Hit Today: ${tmphit.length}
| ◪ Total Daftar: ${_register.length}    
| ◪ Creator: @${ownerNumber_.split('@')[0]}
| ◪ Runtime: ◪  ${text_r}
| ◪ Library:  「 Baileys 」
| ◪ Prefix:  「  ${multiKah}  」
| ◪ Personal Chat: ${totalchat.length - giiid.length}
| ◪ Total Chat: ${totalchat.length}
| ◪ Speed: ${latensiu.toFixed(4)}/Second
${gaya}

| ◪ *${prefix}downloadmenu*
| ◪ *${prefix}creatormenu*
| ◪ *${prefix}funmenu*
| ◪ *${prefix}storagemenu*
| ◪ *${prefix}soundmenu*
| ◪ *${prefix}botmenu*
| ◪ *${prefix}adminmenu*
| ◪ *${prefix}infomenu*
| ◪ *${prefix}gamemenu*
| ◪ *${prefix}islammenu*
| ◪ *${prefix}animemenu*
| ◪ *${prefix}nsfwmenu*
| ◪ *${prefix}searchmenu*
| ◪ *${prefix}randommenu*
| ◪ *${prefix}makermenu*
| ◪ *${prefix}primbonmenu*
| ◪ *${prefix}ownermenu*

  ◪ *_INFO BOT_* ◪
| ◪ *${prefix}rulesbot*
| ◪ *${prefix}sourcode*
| ◪ *${prefix}sewabot*
| ◪ *${prefix}request*
| ◪ *${prefix}report*

${gaya}
Menemukan Bug & Error? Silahkan Report Di ${prefix}report <error nya> Jika Ingin Request Fitur Bisa Share Idenya Di ${prefix}request <ide kamu> Dan Jika Ingin Sewa Bot silahkan Ketik ${prefix}sewabot${gaya}
*_Dan Jangan Lupa Buat Join Group:_*

*_PAIMON OFFICIAL I_*
_https://chat.whatsapp.com/J1hLy6XJtFR6d7PO1GIDOZ_

*_PAIMON OFFICIAL II_*
_https://chat.whatsapp.com/Kw1xaaoV3bF0h1tKgx4O6z_

*_PAIMON OFFICIAL III_*
_https://chat.whatsapp.com/GmpqQKnlfMl2fJlFjBH76q_
*_HUNTER NIME_*
_https://chat.whatsapp.com/EOm4ak4m1f6CQa5Pt4X5zd_

${end}

`
}
exports.linkGb = (pushname) => {
    return `
*_PAIMON OFFICIAL I_*
_https://chat.whatsapp.com/J1hLy6XJtFR6d7PO1GIDOZ_

*_PAIMON OFFICIAL II_*
_https://chat.whatsapp.com/Kw1xaaoV3bF0h1tKgx4O6z_

*_PAIMON OFFICIAL III_*
_https://chat.whatsapp.com/GmpqQKnlfMl2fJlFjBH76q_
*_HUNTER NIME_*
_https://chat.whatsapp.com/EOm4ak4m1f6CQa5Pt4X5zd_
Join Yah Kak ${pushname}
${end}`
}
exports.makerMenu = (prefix) => {
    return `
${wel}


| ◪ *${prefix}blackpink*
| ◪ *${prefix}neon*
| ◪ *${prefix}greenneon*
| ◪ *${prefix}advanceglow*
| ◪ *${prefix}futureneon*
| ◪ *${prefix}sandwriting*
| ◪ *${prefix}sandsummer*
| ◪ *${prefix}sandengraved*
| ◪ *${prefix}metaldark*
| ◪ *${prefix}neonlight*
| ◪ *${prefix}holographic*
| ◪ *${prefix}text1917*
| ◪ *${prefix}minion*
| ◪ *${prefix}deluxesilver*
| ◪ *${prefix}newyearcard*
| ◪ *${prefix}bloodfrosted*
| ◪ *${prefix}halloween*
| ◪ *${prefix}jokerlogo*
| ◪ *${prefix}fireworksparkle*
| ◪ *${prefix}natureleaves*
| ◪ *${prefix}bokeh*
| ◪ *${prefix}toxic*
| ◪ *${prefix}strawberry*
| ◪ *${prefix}box3d*
| ◪ *${prefix}roadwarning*
| ◪ *${prefix}breakwall*
| ◪ *${prefix}icecold*
| ◪ *${prefix}luxury*
| ◪ *${prefix}cloud*
| ◪ *${prefix}summersand*
| ◪ *${prefix}horrorblood*
| ◪ *${prefix}thunder*
| ◪ *${prefix}christmas*
| ◪ *${prefix}wetglass*
| ◪ *${prefix}multicolor3d*
| ◪ *${prefix}watercolor*
| ◪ *${prefix}luxurygold*
| ◪ *${prefix}galaxywallpaper*
| ◪ *${prefix}lighttext*
| ◪ *${prefix}beautifulflower*
| ◪ *${prefix}puppycute*
| ◪ *${prefix}royaltext*
| ◪ *${prefix}heartshaped*
| ◪ *${prefix}birthdaycake*
| ◪ *${prefix}galaxystyle*
| ◪ *${prefix}hologram3d*
| ◪ *${prefix}greenneon*
| ◪ *${prefix}glossychrome*
| ◪ *${prefix}greenbush*
| ◪ *${prefix}metallogo*
| ◪ *${prefix}noeltext*
| ◪ *${prefix}glittergold*
| ◪ *${prefix}textcake*
| ◪ *${prefix}starsnight*
| ◪ *${prefix}wooden3d*
| ◪ *${prefix}textbyname*
| ◪ *${prefix}writegalacy*
| ◪ *${prefix}galaxybat*
| ◪ *${prefix}snow3d*
| ◪ *${prefix}birthdayday*
| ◪ *${prefix}goldplaybutton*
| ◪ *${prefix}silverplaybutton*
| ◪ *${prefix}freefire*
| ◪ *${prefix}shadow*
| ◪ *${prefix}cup*
| ◪ *${prefix}cup1*
| ◪ *${prefix}romance*
| ◪ *${prefix}smoke*
| ◪ *${prefix}burnpaper*
| ◪ *${prefix}lovemessage*
| ◪ *${prefix}undergrass*
| ◪ *${prefix}love*
| ◪ *${prefix}coffe*
| ◪ *${prefix}woodheart*
| ◪ *${prefix}flowerheart*
| ◪ *${prefix}woodenboard*
| ◪ *${prefix}summer3d*
| ◪ *${prefix}wolfmetal*
| ◪ *${prefix}nature3d*
| ◪ *${prefix}underwater*
| ◪ *${prefix}golderrose*
| ◪ *${prefix}summernature*
| ◪ *${prefix}letterleaves*
| ◪ *${prefix}glowingneon*
| ◪ *${prefix}fallleaves*
| ◪ *${prefix}flamming*
| ◪ *${prefix}harrypotter*  
| ◪ *${prefix}pornhub [ Text1 Text2 ]*
| ◪ *${prefix}glitch [ Text1 Text2 ]*
| ◪ *${prefix}avenger [ Text1 Text2 ]*
| ◪ *${prefix}space [ Text1 Text2 ]*
| ◪ *${prefix}ninjalogo [ Text1 Text2 ]*
| ◪ *${prefix}marvelstudio [ Text1 Text2 ]*
| ◪ *${prefix}lionlogo [ Text1 Text2 ]*
| ◪ *${prefix}wolflogo [ Text1 Text2 ]*
| ◪ *${prefix}steel3d [ Text1 Text2 ]*
| ◪ *${prefix}wallgravity [ Text1 Text2 ]*  

${end}`
}
exports.gameMenu = (prefix) => {
    return `
${wel}
    
| ◪ *${prefix}tictactoe [Tag Mem]*
| ◪ *${prefix}delttc*
| ◪ *${prefix}suit* 
| ◪ *${prefix}slot*
| ◪ *${prefix}tebakgambar*
| ◪ *${prefix}canceltebakgambar*
| ◪ *${prefix}sambungkata [cicak]*
| ◪ *${prefix}cancelsambungkata*
| ◪ *${prefix}transfer jumlah <Tag Mem>*
| ◪ *${prefix}level*
| ◪ *${prefix}setbackground*

${end}`
}
exports.funMenu = (prefix) => {
    return `
${wel}

| ◪ *${prefix}getpic*
| ◪ *${prefix}kontak*
| ◪ *${prefix}hidetag*
| ◪ *${prefix}imgtag <Reply>*
| ◪ *${prefix}stickertag <Reply>*
| ◪ *${prefix}fitnah <@tag|fitnah|kata lu>*
| ◪ *${prefix}fakedeface <img|title|desc>*
| ◪ *${prefix}wiki [Query]*
| ◪ *${prefix}jadwalsholat [Wilayah]*
| ◪ *${prefix}jagokata [Query]*
| ◪ *${prefix}cerpen*
| ◪ *${prefix}ceritahoror*
| ◪ *${prefix}drakorongoing*
| ◪ *${prefix}asupan*
| ◪ *${prefix}wancak*
| ◪ *${prefix}sambungkata*
| ◪ *${prefix}cancelsambungkata*
| ◪ *${prefix}igstalk*
| ◪ *${prefix}stalkgithub*
| ◪ *${prefix}stalktwitter*
| ◪ *${prefix}stalktiktok*
| ◪ *${prefix}ssweb*
| ◪ *${prefix}ssweb2*
| ◪ *${prefix}shortlink*
| ◪ *${prefix}spamsms*
| ◪ *${prefix}ssweb*
| ◪ *${prefix}ssweb*

${end}`
}

exports.storageMenu = (prefix) => {
    return`
${wel}

| ◪ *${prefix}addimage*
| ◪ *${prefix}listimage*
| ◪ *${prefix}getimage*
| ◪ *${prefix}addsticker*
| ◪ *${prefix}liststicker*
| ◪ *${prefix}getsticker*
| ◪ *${prefix}addvn*
| ◪ *${prefix}listvn*
| ◪ *${prefix}getvn*
| ◪ *${prefix}addvideo*
| ◪ *${prefix}getvideo*
| ◪ *${prefix}listvideo*

${end}`
}
exports.ownerMenu = (prefix) => {
    return `
${wel}

| ◪ *${prefix}term*
| ◪ *${prefix}setreply*
| ◪ *${prefix}setprefix*
| ◪ *${prefix}setname*
| ◪ *${prefix}broadcast*
| ◪ *${prefix}setbio*
| ◪ *${prefix}multiprefix 0 / 1*
| ◪ *${prefix}setfakeimg*
| ◪ *${prefix}setfakethumb*
| ◪ *${prefix}setprofilemenu*
| ◪ *${prefix}setgif
| ◪ *${prefix}premium*
| ◪ *${prefix}gift*
| ◪ *${prefix}self*
| ◪ *${prefix}public*

${end}
`
}

exports.adminMenu = (prefix) => {
    return`
${wel}

| ◪ *${prefix}hidetag*
| ◪ *${prefix}imgtag*
| ◪ *${prefix}stickertag*
| ◪ *${prefix}kontak*
| ◪ *${prefix}setgifmenu [Reply Video]*
| ◪ *${prefix}kick*
| ◪ *${prefix}add*
| ◪ *${prefix}edotensei*
| ◪ *${prefix}kicktime*
| ◪ *${prefix}badword 0/false | 1/true*
| ◪ *${prefix}welcome 0/false | 1/true*
| ◪ *${prefix}nsfw 0/false | 1/true*
| ◪ *${prefix}antilink 0/false | 1/true*
`}
exports.botMenu = (prefix) => {
    return `
${wel}

| ◪ *${prefix}daftar namakamu|umurkamu*
| ◪ *${prefix}welcome 0/false | 1/true*
| ◪ *${prefix}runtime*
| ◪ *${prefix}speed*
| ◪ *${prefix}premiumcheck*
| ◪ *${prefix}limit*
| ◪ *${prefix}tagme*
| ◪ *${prefix}getid*

${end}`

}
exports.downloaderMenu = (prefix) => {
    return `
${wel}

| ◪ *${prefix}play [Query]*
| ◪ *${prefix}playv [Query]*
| ◪ *${prefix}playv2 [Query]*
| ◪ *${prefix}playdl [Query]*
| ◪ *${prefix}playdl2 [Query]*
| ◪ *${prefix}ytmp4 [Link]*
| ◪ *${prefix}ytmp42 [Link]*
| ◪ *${prefix}ytmp3 [Link]*
| ◪ *${prefix}ytmp32 [Link]*
| ◪ *${prefix}ytdlmp4 [Link]*
| ◪ *${prefix}ytdlmp3 [Link]*
| ◪ *${prefix}ytsearch [Link]*
| ◪ *${prefix}ig [Link]*
| ◪ *${prefix}image [Query]*
| ◪ *${prefix}brainly [Query]*
| ◪ *${prefix}pinterest [Query]*
| ◪ *${prefix}ighig [Query]*
| ◪ *${prefix}igstory [Query]*
| ◪ *${prefix}tiktokwm [Link]*
| ◪ *${prefix}tiktoknowm [Link]*
| ◪ *${prefix}tiktokmusic [Link]*
| ◪ *${prefix}facebook [Link]*
| ◪ *${prefix}music [Query]*
| ◪ *${prefix}video [Query]*
| ◪ *${prefix}needmusic [Query]*
| ◪ *${prefix}needvideo [Query]*
| ◪ *${prefix}lirik [Query]*

${end}`
}

exports.soundMaker = (prefix) => {
    return `

${wel}

| ◪ *${prefix}nightcore [Reply Audio]*
| ◪ *${prefix}gemuk [Reply Audio]*
| ◪ *${prefix}ghost [Reply Audio]*
| ◪ *${prefix}tupai [Reply Audio]*
| ◪ *${prefix}bass [Reply Audio]*
| ◪ *${prefix}slow [Reply Audio]*
| ◪ *${prefix}blub [Reply Audio]*
| ◪ *${prefix}hode [Reply Audio]*
| ◪ *${prefix}tomp3 [Reply Audio]*
| ◪ *${prefix}robot [Reply Audio]*
| ◪ *${prefix}toptt [Reply Audio]*
| ◪ *${prefix}slowvid [Reply Video]*
| ◪ *${prefix}| ◪ *${prefix}lreverse [Reply Video]*
| ◪ *${prefix}fast [Reply Video]*

${end}
`
}
exports.creatorMenu = (prefix) => {
    return `
${wel}

| ◪ *${prefix}sticker*
| ◪ *${prefix}swm nama | author*
| ◪ *${prefix}takestick nama | author*
| ◪ *${prefix}stickercircle [Reply Sticker]*
| ◪ *${prefix}colong [Reply Sticker]*
| ◪ *${prefix}toimg [Reply Sticker]*
| ◪ *${prefix}tomp4  [Reply Sticker]*
| ◪ *${prefix}removebg [Reply Image]*
| ◪ *${prefix}stickernobg [Reply Image]*
| ◪ *${prefix}1977*
| ◪ *${prefix}aden*
| ◪ *${prefix}brannan*
| ◪ *${prefix}brooklyn*
| ◪ *${prefix}clarendon*
| ◪ *${prefix}gingham*
| ◪ *${prefix}hudson*
| ◪ *${prefix}inkwell*
| ◪ *${prefix}earlybird*
| ◪ *${prefix}kelvin*
| ◪ *${prefix}lark*
| ◪ *${prefix}lofi*
| ◪ *${prefix}maven*
| ◪ *${prefix}mayfair*
| ◪ *${prefix}moon*
| ◪ *${prefix}nashville*
| ◪ *${prefix}perpetua*
| ◪ *${prefix}reyes*
| ◪ *${prefix}rise*
| ◪ *${prefix}slumber*
| ◪ *${prefix}stinson*
| ◪ *${prefix}toaster*
| ◪ *${prefix}valencia*
| ◪ *${prefix}walden*
| ◪ *${prefix}willow*
| ◪ *${prefix}xpro2*
| ◪ *${prefix}pencil*


${end}
`
}
exports.waiting = (pushname) => {
    return `
_*「  WAITING  」* Perintah Kak ${pushname} Sedang Di Proses_`
}
exports.groupOnly = (pushname) => {
    return`
*_Maaf Kak ${pushname} Perintah Ini Hanya Untuk Didalam Group_*
`
}
exports.doneOwner = (pushname) => {
    return `
_*Perintah Owner ${pushname} Sudah Di Proses*_`
}

exports.onlyOwner = (pushname) => {
    return `
_*Perintah Hanya Untuk Owner Bukan Untuk Kamu ${pushname}*_`

}

exports.botaAdmin = (pushname) => {
    return `
*_Maaf Kak ${pushname} Perintah Hanya Ketika Bot Menjadi Admin!!!_*`
}
exports.notRegister = (pushname, prefix) => {
    return `
*_「  DETECTOR REGISTER  」_*
*_Maaf Kak ${pushname} Kamu Belum Terdaftar Dalam Database Friend Paimon Untuk Jadi Temen Paimon Daftar Terlebih Dahulu Dengan Cara ${prefix}daftar ${pushname}|umurkamu Bingung?? Ketik @verify aja_*
`
}
exports.thisLimit = (pushname, prefix) => {
    return `
_*Maaf Kak ${pushname} Limit Kamu Telah Habis Mohon Untuk Membeli Premium Atau Meminta Limit Di Owner Di ${prefix}creator Gratis Kok ^_^*_`
}

exports.alReadyOn = (command, pushname) => {
return `
_*${command} sudah Aktif Sebelum Nya Happy Using  Yah Kak ${pushname} ^_^*_`
}

exports.alReadyOff = (command, pushname) => {
return `
_*${command} sudah Di non-Aktifka Sebelum Nya Happy Using ${pushname} ^_^*_`
}
exports.dontActive = (pushname, command) => {
    return `
_*Maaf Kak ${pushname} Sayang Nya ${command} Belum Di Aktifkan Di Group Ini ^_^*_`

}

exports.premiumOnly = (pushname, prefix) => {
    return `
_*Maaf Kak ${pushname} Command Ini Khusus User Premium!!
Mau Jadi User Premium Hubungi Owner Di ${prefix}creator*_`
}
exports.adminOnly = (pushname) => {
    return `
*_Maaf Kak ${pushname} Perintah Hanya Untuk Admin Group_*`
}
exports.doneRequest = (pushname) => {
  return `
*_Perintah ${pushname} Telah Di Lakukan_*`
}
exports.messageTag = () => {
    return `
_Orang Nya Mana Kok Ga Di Tag _-_`
}


exports.Donasi = (wel, gaya, hargaSewa, end) => {
    return `${wel}
${gaya}Kamu bisa sewa bot Mulai Dari ${hargaSewa}/bulan Sampai 25.000/2 bulan
permanen? kami tidak menyediakan Sewa bot permanen Karna Tuntutan Harga Server Tiap Bulan
sekali lagi mohon maaf
Apasih Guna Masukin Bot Ke Group?
nah... 
Kamu Bisa Bermain Game Di Game Menu 
kamu bisa search lagu
kamu bisa search foto
kamu bisa download lagu
kamu bisa dapat informasi dari infomenu
kamu bisa jadiin bot sebagai moderator, add, kick, welcome, tutup & open groub, dan paling penting memiliki anti link menu hanya di admin menu
dan masih banyak lagi
KETENTUAN & SNK
-JANGAN TELPON BOT
-JANGAN SPAM BOT
-DUIT BOT HANYA BERUPA DUIT GAME HANYA BISA DI DALAM MENU GAME TIDAK BISA DI TARIK!!
-GUNAKAN BOT DENGAN BIJAK
${gaya}
TERTARIK ??
PEMBAYARAN BISA HUBUNGI wa.me/6287811078485

PAYMENT:
GOPAY: 087811078485
DANA: COMING SOON
PULSA:-

_*NOTE:*_
_*Jikan Ingin support creator atau donasi bebas metode dan menggunakan pembayaran tersedia_*

${end}
`
}

exports.rulesBot = (wel, end, gaya) => {
    return `${wel}
◪ *RULES THE BOT*
${gaya}
| ◪ Jangan Di Telpon
| ◪ Jangan Di Spam
| ◪ Jangan Hina Bot
| ◪ Hargai Bot
| ◪ Gunakan Dengan Bijak 
${gaya}
*_Ketahuan Langgar Di Banned Permanen_*
*_makasih sudah menggunakan paimon Bot_*
${end}
`
}

exports.sourceBot = (wel, gaya, end) => {
    return `${wel}
${gaya}
Bot Ini Asli Dari Github https://github.com/zennn08/BaseSelfBot
Yang Tidak Di Perjual Belikan Dan bisa di dapat di github secara FREE
Yang menggunakan atau memakai Source code Telah Lepas Dari Tanggung jawab author
NOTE:
Jangan lupa kasih credit ke aqulz
${gaya}
${end}`
}

exports.premiumMenu = (prefix, wel, end) => {
    return `${wel}
| ◪ *${prefix}swm author|pack*
| ◪ *${prefix}removebg [Reply Audio]*
| ◪ *${prefix}sendbug [Id Group]*
${end}
`
}
exports.notArgs = (prefix, command) => {
    return `
_*Maaf Di ${prefix}${command} Text Tidak Boleh Kosong*_`
}

exports.randomMenu = (prefix) => {
    return `
${wel}
| ◪ *${prefix}quotes*
| ◪ *${prefix}quotesanime*
| ◪ *${prefix}quotesdilan*
| ◪ *${prefix}quotesimage*
| ◪ *${prefix}faktaunik*
| ◪ *${prefix}katabijak*
| ◪ *${prefix}bucin*
| ◪ *${prefix}randomnama*


${end}
`
}
exports.primbonMenu = (prefix) => {
    return `
${wel}
| ◪ *${prefix}artinama*
| ◪ *${prefix}jodoh*
| ◪ *${prefix}weton*
| ◪ *${prefix}jadian*
| ◪ *${prefix}tebakumur*
| ◪ *${prefix}kapankah*
| ◪ *${prefix}apakah*


${end}`
}

exports.searchingMenu = (prefix) => {
    return `
${wel}
| ◪ *${prefix}gimage*
| ◪ *${prefix}gimage2*
| ◪ *${prefix}konachan*
| ◪ *${prefix}wallpapersearch*
| ◪ *${prefix}wallpapersearch2*
| ◪ *${prefix}playstore*
| ◪ *${prefix}shopee*
| ◪ *${prefix}google*
| ◪ *${prefix}stickerwa*


${end}
`
}
exports.islamMenu = (prefix, pushname) => {
    return `
${wel}


Assalamu'alaikum kak ${pushname}

| ◪ *${prefix}listsurah*
| ◪ *${prefix}alquran*
| ◪ *${prefix}alquranaudio*
| ◪ *${prefix}asmaulhusna*
| ◪ *${prefix}kisahnabi*
| ◪ *${prefix}jadwalsholat*

${end}`
}
exports.infoMenu = (prefix) => {
    return `
${wel}


| ◪ *${prefix}jarak*
| ◪ *${prefix}urbandictionary*
| ◪ *${prefix}chord*
| ◪ *${prefix}heroml*
| ◪ *${prefix}mlstalk*
| ◪ *${prefix}genshin*
| ◪ *${prefix}qrreader*
| ◪ *${prefix}wikipedia*
| ◪ *${prefix}translate*
| ◪ *${prefix}jadwaltv*
| ◪ *${prefix}jadwaltvnow*
| ◪ *${prefix}newsinfo*
| ◪ *${prefix}cnnindonesia*
| ◪ *${prefix}cnnnasional*
| ◪ *${prefix}cnninternasional*
| ◪ *${prefix}infogempa*
| ◪ *${prefix}lirik2*
| ◪ *${prefix}cuaca*
| ◪ *${prefix}covidindo*
| ◪ *${prefix}covidglobal*
| ◪ *${prefix}jadwalbola *
| ◪ *${prefix}indbeasiswa*
| ◪ *${prefix}kodepos*
| ◪ *${prefix}nsfwcheck*
| ◪ *${prefix}ocr*
| ◪ *${prefix}lk21*
| ◪ *${prefix}kodepos*
| ◪ *${prefix}drakorongoing*
| ◪ *${prefix}wattpad*
| ◪ *${prefix}wattpadsearch*

${end}
`
} 
exports.animeMenu = (prefix) => {
    return `
${wel}

| ◪ *${prefix}character*
| ◪ *${prefix}manga*
| ◪ *${prefix}anime*
| ◪ *${prefix}wait*
| ◪ *${prefix}kusonime*
| ◪ *${prefix}kusonimesearch*
| ◪ *${prefix}otakudesu*
| ◪ *${prefix}otakudesusearch*
| ◪ *${prefix}nhentai*
| ◪ *${prefix}nhentaipdf*
| ◪ *${prefix}nhentaisearch*
| ◪ *${prefix}nekopoi*
| ◪ *${prefix}nekopoisearch*
| ◪ *${prefix}otakudesu*
| ◪ *${prefix}otakudesu*

${end}`
}
exports.nsfwMenu = (prefix) => {
    return `
${wel}

| ◪ *${prefix}nhentai*
| ◪ *${prefix}nhentaipdf*
| ◪ *${prefix}nhentaisearch*
| ◪ *${prefix}nekopoi*
| ◪ *${prefix}nekopoisearch*
| ◪ *${prefix}otakudesu*
| ◪ *${prefix}otakudesu*
| ◪ *${prefix}xnxx*
| ◪ *${prefix}xnxxsearch*
| ◪ *${prefix}xhamters*
| ◪ *${prefix}chiisaihentai*
| ◪ *${prefix}trap*
| ◪ *${prefix}blowjob*
| ◪ *${prefix}yaoi*
| ◪ *${prefix}ecchi*
| ◪ *${prefix}hentai*
| ◪ *${prefix}ahegao*
| ◪ *${prefix}hololewd*
| ◪ *${prefix}sideoppai*
| ◪ *${prefix}animefeets*
| ◪ *${prefix}animebooty*
| ◪ *${prefix}animethighss*
| ◪ *${prefix}hentaiparadise*
| ◪ *${prefix}animearmpits*
| ◪ *${prefix}hentaifemdom*
| ◪ *${prefix}lewdanimegirls*
| ◪ *${prefix}biganimetiddies*
| ◪ *${prefix}animebellybutton*
| ◪ *${prefix}hentai4everyone*
| ◪ *${prefix}bj*
| ◪ *${prefix}ero*
| ◪ *${prefix}cum*
| ◪ *${prefix}feet*
| ◪ *${prefix}yuri*
| ◪ *${prefix}trap*
| ◪ *${prefix}lewd*
| ◪ *${prefix}feed*
| ◪ *${prefix}eron*
| ◪ *${prefix}solo*
| ◪ *${prefix}gasm*
| ◪ *${prefix}poke*
| ◪ *${prefix}anal*
| ◪ *${prefix}holo*
| ◪ *${prefix}tits*
| ◪ *${prefix}kuni*
| ◪ *${prefix}kiss*
| ◪ *${prefix}erok*
| ◪ *${prefix}smug*
| ◪ *${prefix}baka*
| ◪ *${prefix}solog*
| ◪ *${prefix}feetg*
| ◪ *${prefix}lewdk*
| ◪ *${prefix}waifu*
| ◪ *${prefix}pussy*
| ◪ *${prefix}femdom*
| ◪ *${prefix}cuddle*
| ◪ *${prefix}hentai*
| ◪ *${prefix}eroyuri*
| ◪ *${prefix}cum_jpg*
| ◪ *${prefix}blowjob*
| ◪ *${prefix}erofeet*
| ◪ *${prefix}holoero*
| ◪ *${prefix}classic*
| ◪ *${prefix}erokemo*
| ◪ *${prefix}fox_girl*
| ◪ *${prefix}futanari*
| ◪ *${prefix}lewdkemo*
| ◪ *${prefix}wallpaper*
| ◪ *${prefix}pussy_jpg*
| ◪ *${prefix}kemonomimi*
| ◪ *${prefix}nsfw_avatar*

${end}
`
}