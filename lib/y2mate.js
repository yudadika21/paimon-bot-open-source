const fetch = require('node-fetch') 
const cheerio = require('cheerio')
const axios = require('axios')

const y2mateV = async (yutub) => {
function post(url, formdata) {
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "*/*",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: new URLSearchParams(Object.entries(formdata))
    })
}
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
let ytId = ytIdRegex.exec(yutub)
url = 'https://youtu.be/' + ytId[1]
let res = await post(`https://www.y2mate.com/mates/en68/analyze/ajax`, {
    url,
    q_auto: 0,
    ajax: 1
  })
const mela = await res.json()
const $ = cheerio.load(mela.result)
const hasil = []
let thumb = $('div').find('.thumbnail.cover > a > img').attr('src')
let judul = $('div').find('.thumbnail.cover > div > b').text()
let quality = $('div').find('#mp4 > table > tbody > tr:nth-child(4) > td:nth-child(3) > a').attr('data-fquality')
let tipe = $('div').find('#mp4 > table > tbody > tr:nth-child(3) > td:nth-child(3) > a').attr('data-ftype')
let output = `${judul}.` + tipe
let size = $('div').find('#mp4 > table > tbody > tr:nth-child(4) > td:nth-child(2)').text()
let id = /var k__id = "(.*?)"/.exec(mela.result)[1]
let res2 = await post(`https://www.y2mate.com/mates/en68/convert`, {
    type: 'youtube',
    _id: id,
    v_id: ytId[1],
    ajax: '1',
    token: '',
    ftype: tipe,
    fquality: quality
  })
const meme = await res2.json()
const supp = cheerio.load(meme.result)
let link = supp('div').find('a').attr('href')
hasil.push({ thumb, judul, quality, tipe, size, output, link})
return hasil
}


const y2mateA = async (yutub) => {
function post(url, formdata) {
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "*/*",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: new URLSearchParams(Object.entries(formdata))
    })
}
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
let ytId = ytIdRegex.exec(yutub)
url = 'https://youtu.be/' + ytId[1]
let res = await post(`https://www.y2mate.com/mates/en68/analyze/ajax`, {
    url,
    q_auto: 0,
    ajax: 1
  })
const mela = await res.json()
const $ = cheerio.load(mela.result)
const hasil = []
let thumb = $('div').find('.thumbnail.cover > a > img').attr('src')
let judul = $('div').find('.thumbnail.cover > div > b').text()
let size = $('div').find('#mp3 > table > tbody > tr > td:nth-child(2)').text()
let tipe = $('div').find('#mp3 > table > tbody > tr > td:nth-child(3) > a').attr('data-ftype')
let output = `${judul}.` + tipe
let quality = $('div').find('#mp3 > table > tbody > tr > td:nth-child(3) > a').attr('data-fquality')
let id = /var k__id = "(.*?)"/.exec(mela.result)[1]
let res2 = await post(`https://www.y2mate.com/mates/en68/convert`, {
    type: 'youtube',
    _id: id,
    v_id: ytId[1],
    ajax: '1',
    token: '',
    ftype: tipe,
    fquality: quality
  })
const meme = await res2.json()
const supp = cheerio.load(meme.result)
let link = supp('div').find('a').attr('href')
hasil.push({ thumb, judul, quality, tipe, size, output, link})
return hasil
}
const wikiSearch = async (query) => {
        const res = await axios.get(`https://id.m.wikipedia.org/wiki/${query}`)
        const $ = cheerio.load(res.data)
        const hasil = []
        let wiki = $('#mf-section-0').find('p').text()
        let thumb = 'https:' + $('#mf-section-0').find('div > div > a > img').attr('src')
        let judul = $('h1#section_0').text()
        hasil.push({ wiki, thumb, judul })
        return hasil
        }
        const jagoKata = async (query) => {
                const base = `https://jagokata.com/kata-bijak/kata-${query}.html`
                const des = await axios.get(base)
                const sup = cheerio.load(des.data)
                var page = sup('h4 > strong').eq(2).text() / 10
                page = parseInt(page)
                const randomPage = Math.floor(Math.random() * page)
                const res = await axios.get(`${base}?page=${randomPage}`)
                const $ = cheerio.load(res.data)
                const hasil = []
                const list = $('ul > li')
                const random = Math.floor(Math.random() * 10)
                const isi = $(list).find('q.fbquote').eq(random).text() 
                
                var by = $(list).find('div > div > a').eq(random).text()
                by = by ? by : "Kang Galon"
                hasil.push({ isi,  by })
                return hasil
                }
        


module.exports = { y2mateV, y2mateA, wikiSearch, jagoKata
}