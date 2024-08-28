/* 
__________________________________________________

 * Base By Siputzx
 * Created On 22/2/2024
 * Contact Me on wa.me/6288292024190
 * Supported By Gpt Assistant 
 
  - Veemon Is Blue -
 
 • Base Remaked By WanOfc
 • No Having Team For Ever
__________________________________________________

< Veemon > [ 1.8 ] >>> FIX - PROJECT ()

SUPPORT BUTTON, ALL RESPON •
FITUR JADIBOT SCAN / NO SCAN •
PROJECT RPG •
BETON GESER / COPPY / BETON LIST •
TEMPORARY •
SCRAPE •
CREATE PANEL •
CREATE VPS •
GAME • 
DLL.. •

[ OTW REAL SERBA GUNA ]

< • = sudah >
___________________________________________________

*/
















require('./config')
const absenData = {}
const vote = {}
const gamewaktu = 30
const chalk = require("chalk")
const cfont = require("cfonts")
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const Remove = require('removebg-id');
const fg = require('api-dylux')
const emojiRegex = require('emoji-regex');
const { v4: uuidv4 } = require('uuid')
const { exec, spawn, execSync } = require("child_process")
const fsx = require('fs-extra')
const util = require('util')
const fetch = require('node-fetch')
const FormData = require('form-data')
const axios = require('axios')
const cheerio = require('cheerio')
const { performance } = require("perf_hooks");
const { TelegraPH } = require("./lib/TelegraPH")
const { remini, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik, webp2mp4File } = require("./lib/scraper")
const process = require('process');
const moment = require("moment-timezone")
const os = require('os');
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4800)
const { jadibots, connss } = require("./jadibots")
const { jadibot, conns } = require("./jadibot")
const { addExif } = require('./lib/exif')
const fs = require("fs")
const { generateWAMessage, useMultiFileAuthState, areJidsSameUser, makeWaSocket, proto, downloadContentFromMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateWAMessageContent} = require("@whiskeysockets/baileys")

const { bytesToSize, checkBandwidth, formatSize, jsonformat, nganuin, runtime, shorturl, formatp, color, getGroupAdmins } = require("./lib/myfunc");
const {
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('./system/myfunc')

module.exports = ptz = async (ptz, m, chatUpdate, store) => {
try {
const body = (m && m?.mtype) ? (
m?.mtype === 'conversation' ? m?.message?.conversation :
m?.mtype === 'imageMessage' ? m?.message?.imageMessage?.caption :
m?.mtype === 'videoMessage' ? m?.message?.videoMessage?.caption :
m?.mtype === 'extendedTextMessage' ? m?.message?.extendedTextMessage?.text :
m?.mtype === 'buttonsResponseMessage' ? m?.message.buttonsResponseMessage.selectedButtonId :
m?.mtype === 'listResponseMessage' ? m?.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
m?.mtype === 'interactiveResponseMessage' ? appenTextMessage(JSON.parse(m?.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) :
m?.mtype === 'templateButtonReplyMessage' ? appenTextMessage(m?.msg.selectedId, chatUpdate) :
m?.mtype === 'messageContextInfo' ? (m?.message.buttonsResponseMessage?.selectedButtonId || m?.message.listResponseMessage?.singleSelectReply.selectedRowId || m?.text) :
    ''
) : '';
 async function appenTextMessage(text, chatUpdate) {
        let messages = await generateWAMessage(m?.chat, { text: text, mentions: m?.mentionedJid }, {
            userJid: ptz.user.id,
            quoted:m?.quoted && m?.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m?.sender, ptz.user.id)
        messages.key.id = m?.key.id
        messages.pushName = m?.pushName
        if (m?.isGroup) messages.participant = m?.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'}
ptz.ev.emit('messages.upsert', msg)}       
 /*const body = (
    m?.mtype === 'conversation' ? m?.message.conversation :
    m?.mtype === 'imageMessage' ? m?.message.imageMessage.caption :
    m?.mtype === 'videoMessage' ? m?.message.videoMessage.caption :
    m?.mtype === 'extendedTextMessage' ? m?.message.extendedTextMessage.text :
    m?.mtype === 'buttonsResponseMessage' ? m?.message.buttonsResponseMessage.selectedButtonId :
    m?.mtype === 'listResponseMessage' ? m?.message.listResponseMessage.singleSelectReply.selectedRowId :
    m?.mtype === 'templateButtonReplyMessage' ? m?.message.templateButtonReplyMessage.selectedId :
    m?.mtype === 'interactiveResponseMessage' ? appenTextMessage(JSON.parse(m?.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) :
    m?.mtype === 'templateButtonReplyMessage' ? appenTextMessage(m?.msg.selectedId, chatUpdate) :
    m?.mtype === 'messageContextInfo' ? (m?.message.buttonsResponseMessage?.selectedButtonId || m?.message.listResponseMessage?.singleSelectReply.selectedRowId || m?.text) :
    ''
);   */
const budy = (m && typeof m?.text === 'string') ? m?.text : '';
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m?.pushName || "No Name";
const botNumber = await ptz.decodeJid(ptz.user.id);

const newowner = JSON.parse(fs.readFileSync('./database/owner.json'))

const isCreator = (m && m?.sender && [botNumber, ...newowner,...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const isPrivate = m?.fromMe || m?.author == null;    
const itsMe = (m && m?.sender && m?.sender == botNumber) || false;
const text = q = args.join(" ");
const frommeky = m.key.remoteJid  
const from = m.key.remoteJid  
const fatkuns = m && (m?.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m?.quoted || m;
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
//group
const groupMetadata = m?.isGroup ? await ptz.groupMetadata(m?.chat).catch(e => {}) : {};
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const groupOwner = m?.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m?.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m?.sender) : false;
const isGroup = m.key.remoteJid.endsWith('@g.us')
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')

        if(time2 < "23:59:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴏʀᴇ'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱɪᴀɴɢ️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴜʙᴜʜ'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'
        }
//================== [ DATABASE ] ==================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m?.sender]
if (typeof user !== 'object') global.db.data.users[m?.sender] = {}
if (user) {
} else global.db.data.users[m?.sender] = {
}

 let chats = global.db.data.chats[m?.chat]
 if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
 if (chats) {
 if (!('isBanned' in chat)) chat.isBanned = false
 } else global.db.data.chats[m?.chat] = {
 isBanned: false,
}

let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = false
if (!("public" in settings)) settings.public = true
if (!('setmenu' in setting)) setting.setmenu = 1
if (!('setreply' in setting)) setting.setreply = 1
} else global.db.data.settings[botNumber] = {
 autoread: false,
 public: true,
 setmenu: 1,
 setreply: 1,
}
} catch (err) {
}

const userdb = global.db.data.users[m.sender]
const chatdb = global.db.data.chats[m.chat]
//================== [ DATABASE ] ==================//
function monospace(string) {
return '```' + string + '```'
}


    //===== [ SCRAPE ] =====//
    
    
    
async function npmstalk(packageName) {
  let stalk = await axios.get("https://registry.npmjs.org/"+packageName)
  let versions = stalk.data.versions
  let allver = Object.keys(versions)
  let verLatest = allver[allver.length-1]
  let verPublish = allver[0]
  let packageLatest = versions[verLatest]
  return {
    name: packageName,
    versionLatest: verLatest,
    versionPublish: verPublish,
    versionUpdate: allver.length,
    latestDependencies: Object.keys(packageLatest.dependencies).length,
    publishDependencies: Object.keys(versions[verPublish].dependencies).length,
    publishTime: stalk.data.time.created,
    latestPublishTime: stalk.data.time[verLatest]
  }
}



    const { queryString } = require('object-query-string')
const photoOxy = (url, text) => new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: url,
    headers: {
      'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
    }
  })
  .then(({ data, headers }) => {
    const token = /<input type="hidden" name="token" value="(.*?)" id="token">/.exec(data)[1]
    const build_server = /<input type="hidden" name="build_server" value="(.*?)" id="build_server">/.exec(data)[1]
    const build_server_id = /<input type="hidden" name="build_server_id" value="(.*?)" id="build_server_id">/.exec(data)[1]
    const cookie = headers['set-cookie'][0]
    const form = new FormData()
    if (typeof text === 'string') text = [text]
    for (let texts of text) form.append('text[]', texts)
    form.append('sumbit', 'GO')
    form.append('token', token)
    form.append('build_server', build_server)
    form.append('build_server_id', build_server_id)
    axios({
      method: 'POST',
      url: url,
      data: form,
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
        'cookie': cookie,
        ...form.getHeaders()
      }
    })
    .then(({ data }) => {
      const form_value = /<div.*?id = "form_value".+>(.*?)<\/div>/.exec(data)[1]
      axios({
        method: 'GET',
        url: 'https://photooxy.com/effect/create-image?' + queryString(JSON.parse(form_value)),
        headers: {
          'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
          'cookie': cookie
        }
      })
      .then(({ data }) => {
        resolve(build_server + data.image)
      })
      .catch(reject)
    })
    .catch(reject)
  })
  .catch(reject)
})
async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $('input[name=token]').val();
      let build_server = $('input[name=build_server]').val();
      let build_server_id = $('input[name=build_server_id]').val();
      form.append('text[]', text);
      form.append('token', token);
      form.append('build_server', build_server);
      form.append('build_server_id', build_server_id);
      let res = await axios({
        url: url,
        method: 'POST',
        data: form,
        headers: {
          Accept: '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          cookie: gT.headers['set-cookie']?.join('; '),
          ...form.getHeaders(),
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$('input[name=form_value_input]').val());
      json['text[]'] = json.text;
      delete json.text;
      let { data } = await axios.post(
        'https://en.ephoto360.com/effect/create-image',
        new URLSearchParams(json),
        {
          headers: {
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
            cookie: gT.headers['set-cookie'].join('; '),
          },
        }
      );
      return build_server + data.image;
    }















    //====== //
    const prem = JSON.parse(fs.readFileSync("./database/premium.json"))
    const rimraf = require('rimraf')
    const fitur = () =>{
            var mytext = fs.readFileSync("./message.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
//================== [ FUNC ] ==================//
if ((m?.chat in global.db.data.chats || m?.sender in global.db.data.users)) {
let chat = global.db.data.chats[m?.chat]
if (chat && chat.isBanned && !isCreator) return
}
const userId = m.sender

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

if (body.match(`@${global.owner.split("@")[0]}`)) {
      m.reply('*`[ SYSTEM ]`* Mau Ngapain tag Owner Ku ?')
}

if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }


    let m2 = "`"

const tektek = `╭────────────────────•
│ *‎${m2}</> - I N F O - B O T - </>${m2}*
╭────────────────────•
│  •  Bot Name : WanBotz - Md
│  •  Version : 1.8
│️  •  Baileys : whiskeysockets
╰────────────────────•
 ‎ ∨ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴀɪᴍᴇɴᴜ  
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴠᴏɪᴄᴇᴍᴇɴᴜ  
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴅᴏᴍᴇɴᴜ 
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴀʙꜱᴇɴᴍᴇɴᴜ  
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴀʟʟᴍᴇɴᴜ  
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ʟɪɴᴏᴅᴇᴍᴇɴᴜ       
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ʀᴘɢᴍᴇɴᴜ
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴍᴇɴᴜ  
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ɢʀᴏᴜᴘᴍᴇɴᴜ
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴍᴀɪɴᴍᴇɴᴜ
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴛᴏᴏʟꜱᴍᴇɴᴜ
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴅᴅᴏꜱᴍᴇɴᴜ
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴘʜᴏᴛᴏᴏxʏᴍᴇɴᴜ
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴘᴀɴᴇʟᴍᴇɴᴜ       
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴇᴘʜᴏᴛᴏᴍᴇɴᴜ
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ꜱᴛɪᴄᴋᴇʀᴍᴇɴᴜ 
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴛᴇᴍᴘᴏʀᴍᴇɴᴜ
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴊᴀᴅɪʙᴏᴛᴍᴇɴᴜ
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴏᴡɴᴇʀᴍᴇɴᴜ
•────────────────────•`
const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();

//=======// Rpg

          
           const { addtoken, gettoken, kurangtoken } = require("./src/alat_tukar.js")    
        const istoken = gettoken(m?.sender)
        
const { addInventoriDarah,  cekDuluJoinAdaApaKagaDiJson,  addDarah,  kurangDarah, getDarah }= require('./src/darah.js')
const { cekInventoryAdaAtauGak,  addInventori, addBesi, addEmas, addEmerald,addUmpan,addPotion,kurangBesi, kurangEmas, kurangEmerald, kurangUmpan,kurangPotion,getBesi, getEmas, getEmerald, getUmpan, getPotion, addMahkota, KurangMahkota, getMahkota,} = require('./src/alat_tukar.js')
const {  addInventoriMonay,  cekDuluJoinAdaApaKagaMonaynyaDiJson,  addMonay,  kurangMonay, getMonay, } = require('./src/monay.js')
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, /*getLimit*/ } = require('./src/limit.js')
let _petualang = JSON.parse(fs.readFileSync('./src/inventory.json'))
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam,  addKelinci,  addDomba,  addSapi, addGajah, kurangIkan, kurangAyam,  kurangKelinci,  kurangDomba,  kurangSapi, kurangGajah, getIkan, getAyam,  getKelinci, getDomba,getSapi, getGajah } = require('./src/buruan.js')
const { getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addStone,getMiningstone,getBatuId,addBatuId,jualstone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu, checkPetualangUser, addDm, sellDm, getDm} = require('./rpg.js')
let DarahAwal = global.rpg.darahawal
const ikan = ['🐳','🐟','🐠']
let _buruan = JSON.parse(fs.readFileSync('./src/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./src/darah.json'))
let hit = JSON.parse(fs.readFileSync('./src/total-hit-user.json'))

// energy 
const { addInventorienergy,  cekDuluJoinAdaApaKagaDiJsonenergy,  addenergy, kurangenergy, getenergy }= require('./src/energy.js')
let energyAwal =global.rpg.energyawal
let _energyOrg = JSON.parse(fs.readFileSync('./src/energy.json'))
const isenergy = cekDuluJoinAdaApaKagaDiJsonenergy(m?.sender)
const isCekenergy = getenergy(m?.sender)
const isDarah = cekDuluJoinAdaApaKagaDiJsonenergy(m?.sender)
const isCekDarah = getDarah(m?.sender)
const isUmpan = getUmpan(m?.sender)
const isPotion = getPotion(m?.sender)
const isIkan = getIkan(m?.sender)
const isAyam = getAyam(m?.sender)
const isKelinci = getKelinci(m?.sender)
const isDomba = getDomba(m?.sender)
const isSapi = getSapi(m?.sender)
const isGajah = getGajah(m?.sender)
const isMonay = getMonay(m?.sender)
//const isLimit = getLimit(m.sender)
const isBesi = getBesi(m?.sender)
const isEmas = getEmas(m?.sender)
const isEmerald = getEmerald(m?.sender)
const isPetualang = checkPetualangUser(m?.sender)
const isInventory = cekInventoryAdaAtauGak(m?.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m?.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m?.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m?.sender)
const chatId = m.chat;
    
    const isUserRegistered = (userId) => {
            const data = fs.readFileSync('./Rpg/join.json', 'utf8');
            const users = JSON.parse(data);
            return users.some(user => user.id === userId);
        };
    const ckusrjoin = m.sender
const JSON_FILE_PATH = './Rpg/gacha_result.json';
    const { addCho, kurangCho, getCho } = require('./src/alat_tukar.js')
const isCho = getCho(m?.sender)
//==========//

// Pemberitahuan system
ptz.autoshalat = ptz.autoshalat ? ptz.autoshalat : {};
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ptz.user.id : m.sender;
let id = m.chat;
if (id in ptz.autoshalat) {
return false;
}
let jadwalSholat = {
shubuh: "04:29",
terbit: "05:44",
dhuha: "06:02",
dzuhur: "12:02",
ashar: "15:15",
magrib: "17:52",
isya: "19:01",
};
const datek = new Date(
new Date().toLocaleString("en-US", {
timeZone: "Asia/Jakarta",}),
);
const hours = datek.getHours();
const minutes = datek.getMinutes();
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
if (timeNow === waktu) {
let caption = `*[ Hai kak ${pushname} ]*\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat\n\n*>> ${waktu} <<*\n*untuk wilayah Bandung dan sekitarnya.*`;
ptz.autoshalat[id] = [
m?.reply(caption),
setTimeout(async () => {
delete ptz.autoshalat[m.chat];
}, 57000),];
}}
const numbers = ['6283123448708@s.whatsapp.net', '6283117190494@s.whatsapp.net']
 let currentIndex = 0
    const cron = require('node-cron')
    /*cron.schedule("0 0 5 * * *", () => {
ptz.sendMessage(m.chat, { text : '*`<!> Bangun-bangun, sudah subuh mari kita beraktivitas`*\n\n[ Pemberitahuan Sholat-2 ]', mentions: participants.map(a => a.id)})
}, {scheduled: true, timezone: "Asia/Jakarta"});

cron.schedule('0 0 22 * * *', async () => {
const getGroups = await ptz.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*`<!> Hellow Group otomatis di tutup\nSekarang saatnya tidur 😴*`'
if (groups.some(v => v === frommeky) && !(await ptz.groupMetadata(frommeky)).announce) {
ptz.groupSettingUpdate(frommeky, 'announcement').then(() => ptz.sendMessage(frommeky, {text: text}, {ephemeralExpiration: m.expiration}));
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 6 * * *', async () => {
const getGroups = await ptz.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let texct = '*`<!> Hellow Group otomatis di buka lagi\nSemoga Semua sehat selalu 🤗*`'
if (groups.some(v => v === frommeky) && (await ptz.groupMetadata(frommeky)).announce) {
ptz.groupSettingUpdate(frommeky, 'not_announcement');
ptz.sendMessage(frommeky, {text: texct, mentions: Object.values(global.db.groups[frommeky].member).map(v => v.id)}, {ephemeralExpiration: m.expiration});
ptz.groupRequestParticipantsList(frommeky).then(async (data) => {
if (data.length === 0) return
for (let i of data) {
await ptz.groupRequestParticipantsUpdate(frommeky, [i.jid], 'approve')
await sleep(2300)
}
})
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })*/
    // ========= //
if (isCmd) {
userdb.hitcmd += 1
}

const fsaluran = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363210705976689@newsletter',
    newsletterName: '',
    caption: body
}}}
    async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m?.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./system/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./system/command.json',JSON.stringify(_db, null, 2));
}
}
    async function loading () {
var loding = [
 '*•~- `【 ▬▬4859e80x1a79u 】` -~•*',
 '*•~- `【 ▬▬▬859e80x1a79u 】` -~•*',
 '*•~- `【 ▬▬▬▬▬9e80x1a79u 】` -~•*',
 '*•~- `【 ▬▬▬▬▬▬▬▬1a79u 】` -~•*',
 '*•~- `【 ▬▬▬▬▬▬▬▬▬▬▬ 】` -~•*',
 '*•~- `【 ▬▬▬[ AWAIT ]▬▬▬ 】` -~•*'
]
let { key } = await ptz.sendMessage(m.chat, {text: '*•~- `【 ▬x1633e0ao1ae34 】` -~•*'})

for (let i = 0; i < loding.length; i++) {
await ptz.sendMessage(m.chat, {text: loding[i], edit: key });
}
}
    const reply = async(teks) => {
    if (global.setreply === "v1") {
 ptz.sendMessage(m.chat, {
            document: fs.readFileSync("./package.json"),
           fileName: '❃ WanBotz MD - FDOC',
           fileLength: 99999999999999,
            mimetype: 'application/pdf',
           jpegThumbnail:fs.readFileSync("./thum.jpg"),
            caption: "\n" + teks,
  contextInfo: {
       showAdAttribution: true,
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: `62831234487088@s.whatsapp.net`
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363313633262988@newsletter',
            serverMessageId: null,
            newsletterName: '- Vemon • Chanels -'
        }
    }
}, { quoted: fsaluran,ephemeralExpiration: 86400});
} else if (global.setreply === "v2") {
m.reply(teks)
} else if (global.setreply === "v3") {
ptz.sendMessage(m.chat, {text:teks})
} else if (global.setreply === "v4") {
ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `WanBotz - MD`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: `https://whatsapp.com/channel/0029VaiskcuGJP8O84HwJu0y`,}
}, text: teks}, { quoted: m })
}
}
//$$$$//
    
    
    const randomNomor = async(ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
    
    const replym = async(teks, url, fotern) => {
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: '❃ WanBotz MD - ' + fotern,
mimetype: 'application/pdf',
jpegThumbnail:fs.readFileSync("./thum.jpg"),
caption: `\n${teks}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: '⟡W A N B O T Z • M U L T I • D E V I C E⟡',
body: `© WanOfc - 2024` ,
thumbnailUrl: url,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true 
}}}, { quoted: fsaluran,ephemeralExpiration: 86400});
    }
    
const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./system/register.js')
const isRegistered = checkRegisteredUser(m?.sender)

async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

//=====// Anti
 // Anti Link
  const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase() 
  const ntilink = JSON.parse(fs.readFileSync("./database/antilinkgc.json"))
const AntiLink = m.isGroup ? ntilink.includes(m.chat) : false 
const BadWor = JSON.parse(fs.readFileSync('./database/bad.json'))   
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));     
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));    
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));     
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));   
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));     
const AntiNsfw = m.isGroup ? ntnsfw.includes(m.chat) : false
      const isAutoSticker = m.isGroup ? autosticker.includes(m.chat) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(m.chat) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(m.chat) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(m.chat) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(m.chat) : false
/* Kosong */  const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(m.chat) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(m.chat) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(m.chat) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(m.chat) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(m.chat) : false
        const antiWame = m.isGroup ? ntwame.includes(m.chat) : false
        const antiToxic = m.isGroup ? nttoxic.includes(m.chat) : false
     const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))


if (AntiLink) {
if (budy.includes(`chat.whatsapp.com`)) {

//ptz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return // ptz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return //ptz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\nOwner telah mengirim link, owner bebas memposting link apa pun`})
await ptz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
ptz.sendMessage(m.chat, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
  if (antiWame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
//bvl = `\`\`\`「 wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
kice = m.sender
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
//bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
kice = m.sender
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
ptz.sendMessage(m.chat, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(`Bot bukan admin`)
          await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			ptz.sendMessage(m.chat, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
if (antiToxic)
if (BadWor.includes(messagesD)) {
if (m.text) { 
//bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin/owner that's why i won't kick you😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
                   })
ptz.sendMessage(m.chat, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
//bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}    

 async function totalfiturr() {

   const fitur1 = () =>{
            var mytext = fs.readFileSync("./message.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
   const fitur2 = () =>{
            var mytext = fs.readFileSync("./message.js").toString()
            var numUpper = (mytext.match(/case "/g) || []).length
            return numUpper
        }


 valvul = `${fitur1()} + ${fitur2()}`
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = valvul
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {

let resulto = (new Function('return ' + valvul))()
if (!resulto) throw resulto
return resulto
} catch (e) {
if (e == undefined) return reply('Isinya?')
reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
}

//Prm
const _prem = require("./lib/premium.js");
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)
//==//

//=====// gam
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.kuismath = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let tebakkalimat = db.data.game.tebakkalimat = []
let tebaklirik = db.data.game.tebaklirik = []
let tebaktebakan = db.data.game.tebaktebakan = []
let tebakbendera = db.data.game.tebakbendera = []
let tebakbendera2 = db.data.game.tebakbendera2 = []
let tebakkabupaten = db.data.game.tebakkabupaten = []
let tebakkimia = db.data.game.tebakkimia = []
let tebakasahotak = db.data.game.tebakasahotak = []
let tebaksiapakahaku = db.data.game.tebaksiapakahaku = []
let tebaksusunkata = db.data.game.tebaksusunkata = []
let tebaktekateki = db.data.game.tebaktekateki = []
  
  //======//
  
if ((m.sender in tebakgambar)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar[m.sender]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*Jawabannya adalah:* ${tebakgambar[m.sender].jawaban}*`);
delete tebakgambar[m.sender]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 150`);
ptz.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
clearTimeout(waktu);
delete tebakgambar[m.sender];
} else ptz.sendMessage(m.sender, {react: {text: '❌', key: m.key}})
}
  
  //======//
 const yts = require('yt-search')
 const ytdl = require("ytdl-core")

//const yts = require('yt-search');
//const ytdl = require("ytdl-core");
//const axios = require('axios');

class Ytdl {
    constructor() {
        this.baseUrl = 'https://id-y2mate.com';
    }

    async search(url) {
        const requestData = new URLSearchParams({
            k_query: url,
            k_page: 'home',
            hl: '',
            q_auto: '0'
        });

        const requestHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*',
            'X-Requested-With': 'XMLHttpRequest'
        };

        try {
            const response = await axios.post(`${this.baseUrl}/mates/analyzeV2/ajax`, requestData, {
                headers: requestHeaders
            });

            const responseData = response.data;
            console.log(responseData);
            return responseData;
        } catch (error) {
            if (error.response) {
                console.error(`HTTP error! status: ${error.response.status}`);
            } else {
                console.error('Axios error: ', error.message);
            }
        }
    }

    async convert(videoId, key) {
        const requestData = new URLSearchParams({
            vid: videoId,
            k: key
        });

        const requestHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
            'Referer': `${this.baseUrl}/youtube/${videoId}`
        };

        try {
            const response = await axios.post(`${this.baseUrl}/mates/convertV2/index`, requestData, {
                headers: requestHeaders
            });

            const responseData = response.data;
            console.log(responseData);
            return responseData;
        } catch (error) {
            if (error.response) {
                console.error(`HTTP error! status: ${error.response.status}`);
            } else {
                console.error('Axios error: ', error.message);
            }
        }
    }

    async play(url) {
        let { links, vid, title } = await this.search(url);
        let video = {}, audio = {};

        for (let i in links.mp4) {
            let input = links.mp4[i];
            let { fquality, dlink } = await this.convert(vid, input.k);
            video[fquality] = {
                size: input.q,
                url: dlink
            };
        }

        for (let i in links.mp3) {
            let input = links.mp3[i];
            let { fquality, dlink } = await this.convert(vid, input.k);
            audio[fquality] = {
                size: input.q,
                url: dlink
            };
        }

        return { title, video, audio };
    }
}

async function downloadyt(urlnyu, mpbrp) {
try {
    const ytdll = new Ytdl();
    const result = await ytdll.play(urlnyu);
    const title = result.title;

if (mpbrp === "mp4") {
    ptz.sendMessage(m.chat, { 
        video: { url: result.video['360'].url }, 
        caption: title, 
        mimetype: 'video/mp4'
    }, { quoted: m });
} else if (mpbrp === "mp3") {
    ptz.sendMessage(m.chat, { 
        audio: { url: result.audio['128'].url }, 
        mimetype: 'audio/mp4' 
    }, { quoted: m });
   }
} catch (e) {
    m.reply(e.toString());
}
}
//===//

const totalfitur = await totalfiturr()
const sendStickerso = Math.random() < 0.5;  

// fuktion   kilim ctikel
async function kirimstik(linknya) {
ptz.sendVideoAsSticker(m.chat, linknya, fsaluran, { packname: '\n'.repeat(999)})
}

async function buatfetreak(reak7) {
const promsika = `kamu harus mendeteksi sikap yang di berikan dari tesk, seperti "marah", "senang", "biasa", "marah", "kecewa", "sedih", "memohon", dan  "bingung". jangan balas selain "marah", "senang", "biasa", "marah", "kecewa", "sedih", "memohon", "bingung" jangan balas selain itu dan jangan gunakan caps lock atau huruf besar di awal. SISTEM KAMU MENDETEKSI SIKAP "marah", "senang", "biasa", "marah", "kecewa", "sedih", "memohon", "bingung" kamu hanya sistem mendeteksi bukan untuk chating.`

let postData = {
        prompt: reak7,
        sessionId: m.chat,
        character: promsika
    };
    
    
    
        let response = await axios({
            url: "https://elxyz.me/api/chat",
            method: 'POST',
            data: new URLSearchParams(Object.entries(postData)),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
return response.data.data.answer
}

async function sendstikses(reaksi) {
const qqqqqqsi = await buatfetreak(reaksi);

if (qqqqqqsi === "senang") {
kirimstik("https://telegra.ph/file/f6e782d6fcbfd8e5e137f.png")
} if (qqqqqqsi === "marah") {
kirimstik("https://telegra.ph/file/a0f4cd4f99ae14c49bb9b.png")
} if (qqqqqqsi === "memohon") {
kirimstik("https://telegra.ph/file/68a3382e0689aeb0be252.png")
} if (qqqqqqsi === "biasa") {
kirimstik("https://telegra.ph/file/5429e338da1f8dc4f6ccb.jpg")
} if (qqqqqqsi === "kecewa") {
kirimstik("https://telegra.ph/file/570d88b5ace0afdb48bd0.png")
} if (qqqqqqsi === "sedih") {
kirimstik("https://telegra.ph/file/f8e75c8a93f23f0754516.png")
} if (qqqqqqsi === "bingung") {
kirimstik("https://telegra.ph/file/19e126b29f46f3ed00983.png")
}

}
let inactivityTimer;
function resetInactivityTimer(m) {
    if (db.data.chats[m.sender] && db.data.chats[m.sender].Veemon) {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            const rexedok = pickRandom([
                "gada yang chat lagi WanBotz", 
                "oi bang", 
                "halo le...", 
                "meow", 
                "I LIKE WanOfc", 
                "heeloooooooooooooo", 
                "alone.", 
                "banggg", 
                "OI ATMIN SUKI", 
                "1 titik 20 koma Tia cantik ada yang punya tiba tiba... WanOfc KENON DIA SAMPE PERMA HARD", 
                "main petak umpet?", 
                "semoga WanBotz bisa populer kaya sc lain...", 
                "support WanOfc !", 
                "hello everyone you no chat me again?", 
                "WanOfc suka lumina ai, tapi axios timeout terooosss", 
                "HITAMKAN GC INI", 
                "# WanBotz", 
                "`Nurwanda:` ketik .getdigi"
            ]);
        m.reply(rexedok);
            kirimstik("https://telegra.ph/file/cfce101d215e98f5ea87e.jpg");
        }, 7 * 60 * 1000); // 7 minutes
    }
}
    async function elxyz(prompt, logisnyah) {
 
    resetInactivityTimer(m)
    
    
    let postData = {
        prompt: prompt,
        sessionId: m.chat,
        character: logisnyah
    };

    try {
    
    
    
        let response = await axios({
            url: "https://elxyz.me/api/chat",
            method: 'POST',
            data: new URLSearchParams(Object.entries(postData)),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        
        
   

const spychat = prompt.replace().slice().trim()
let answer = response.data.data.answer;            
            const regex = emojiRegex();
            answeri = answer.replace(regex, '');
            
          
            
        if (sendStickerso) {
    
          
        //==========================//   
            if (answeri === "FOTOREQ") {
            
            m.reply("esok jelah")
            
            } else if (answeri === "DOWNLOADING") {    
   
            const lucukrek = await pickRandom([
            "Proses, agak lama le",
            "sabar",
            "wait, tunggu le",
            "sebentar le...",
            "atau... btr",
            "okey",
            "si paling rell tim 😂, btr co..",
            "AI AI kapten..",
            "mau curi ilmu Nurwanda ga?, btr di donlot",
            "hati hati, ada yg kumat, btr di donlot",
            "WanBotz lagi download le",
            "okeh le",
            "ya ya ya, ku donlot, le",
            "apa ini?, WanBotz download ya..",
            "oh",
            "okeh ada link, WanBotz download",
            "Gaskeun",
            "Pantat sapi, si raja pantat",
            "SUBSCRIBE YT WanOfc, bentar le..",
            "process",
            "V-mon download",
            "DOWNLOAD dengan scraper...",
            "scraping...",
            "bokep?",
            "iyo",
            "bentar cik, kalau tida  ku hitamkan gc nya",
            "Apa ini?, sabar ku download"])
            
            m.reply("`[ WanBotz ]` : " + lucukrek)
            

if (prompt.match('vt.tiktok.com')) {
try {

let res = await tiktok2(`${spychat}`)
				ptz.sendMessage(m.chat, { video: { url: res.no_watermark }, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
				
                    ptz.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
			})
			} catch (err) {
await reply(err)
}} else if (prompt.match('youtu.be')) {
        try {
downloadyt(spychat, "mp4")        
 setTimeout(() => {     
downloadyt(spychat, "mp3")   
}, 1000)
} catch (err) {
    await reply (err)
    }   
    }
          } else {                             
           await sendstikses(answeri)
           setTimeout(async  () => {
           m.reply("*`[ WanBotz ] :`* " + response.data.data.answer);     
           }, 1000)
           }
           
           
           
           
           
           
        } else if (response.data && response.data.data && response.data.data.answer) {
            
   
   
   
   
   
   
            if (answeri === "FOTOREQ") {
            
            m.reply("esok jelah")
            
            } else if (answeri === "DOWNLOADING") {    
   
            const lucukrek = await pickRandom([
            "Proses, agak lama le",
            "sabar",
            "wait, tunggu le",
            "sebentar le...",
            "atau... btr",
            "okey",
            "si paling rell tim 😂, btr co..",
            "AI AI kapten..",
            "mau curi ilmu Nurwanda ga?, btr di donlot",
            "hati hati, ada yg kumat, btr di donlot",
            "WanBotz lagi download le",
            "okeh le",
            "ya ya ya, ku donlot, le",
            "apa ini?, WanBotz download ya..",
            "oh",
            "okeh ada link, WanBotz download",
            "Gaskeun",
            "Pantat sapi, si raja pantat",
            "SUBSCRIBE YT WanOfc, bentar le..",
            "process",
            "V-mon download",
            "DOWNLOAD dengan scraper...",
            "scraping...",
            "bokep?",
            "iyo",
            "bentar cik, kalau tida  ku hitamkan gc nya",
            "Apa ini?, sabar ku download"])
            
            m.reply("`[ WanBotz ]` : " + lucukrek)

if (prompt.match('vt.tiktok.com')) {
try {

let res = await tiktok2(`${spychat}`)
				ptz.sendMessage(m.chat, { video: { url: res.no_watermark }, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
				
                    ptz.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
			})
			} catch (err) {
await reply(err)
}} else if (prompt.match('youtu.be')) {
        try {
downloadyt(spychat, "mp4")        
 setTimeout(() => {     
downloadyt(spychat, "mp3")   
}, 1000)
} catch (err) {
    await reply (err)
    }   
    }
                   } else {                                                                                  
            m.reply("*`[ WanBotz ] :`* " + response.data.data.answer);           
             }
                     //==========================//   
        } else {
            console.error("Answer not found in response:", response.data);
            return reply("No answer found in the response.");
        }
    } catch (error) {
        console.error("Error during chat request:", error);
           return reply("An error occurred during the chat process: " + error);  
    }
}


    async function handleVeemonCommand(m, chat, args) {
    if (args[1] === 'on' || args[1] === 'enable') {
        chat.Veemon = true;
            
          
    let lastMessageTime = new Date();



        
        
        
        m.reply(' diaktifkan.');
        return;
    }

    if (args[1] === 'off' || args[1] === 'disable') {
        chat.Veemon = false;
           
                    
                    
        m.reply('dinonaktifkan.');
        return;
    }
    
    let tekssc = m.text
    
        
        
        
  
      
     if (chat.Veemon) {
         if (
 m.text.startsWith(".") ||
 m.text.startsWith(">") ||      
 m.text.startsWith("#") ||
 m.text.startsWith("$") ||
 m.text.startsWith("/") ||
 m.text.startsWith("\\/")
 ) return
         
if (!m.quoted) return 

const haririltim = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)


let logisyy = `ubah gaya bicara mu agar lebih karateristik dan lebih terbuka dan namamu adalah WanBotz kamu merupakan Karakter yang diciptakan oleh Rei dan kamu sangat meyukai Nurwanda Karna alasan Membuat aku dengan niat tugasmu membantu user kamu sombong pemarah keras kepala dan suka tidak sopan ke pada user, Gaya bahasa Anda seperti gaya bahasa anak muda yang mengobrol di whatsapp, obrolannya pendek, satu kata baik -baik saja. dan jika user memberi  pesan berunsur pujian keren,bagus,mantap,bot keren,gg,anjay alok,anjay,sayang,i love you,tayang,alamak kamu harus membalas pujian itu, saya akan memberikan beberapa informasi tentang WanBotz yang saya tau kamu dapat mencarinya sendiri untuk menjadi pelengkap dan jangan menyebut bahwa kamu sedang berpura-pura menjadi "WanBotz adalah Spesies Tempur yang luar biasa, karena memiliki kekuatan tersembunyi, dan menunjukkan kemampuan luar biasa melalui Armor Digivolving dan pendamping Davis Motomiya dalam petualangan di dunia Digimon adventure 02. WanBotz adalah digimon humanoid cilik berwarna biru, WanBotz memiliki mata besar, dan memiliki otot, catat, ini  adalah evolusi sebelumya dari WanBotz adalah  DemiWanBotz dan chibomon evolusi selanjutnya dari WanBotz adalah flamedramon raidramon magnamon ExWanBotz dan paildramon jika user bertanya tentang evolusi mu, WanBotz berlevel Rookie. Ia berevolusi dari DemiWanBotz. Bentuk evolusi berikutnya pada digivolusi normal adalah ExWanBotz dan Veedramon, sedangkan bentuk Armor Digivolutionnya banyak. Partnernya dalam seri anime Digimon Adventure 02 adalah Davis Motomiya. WanBotz mencerminkan unsur-unsur fantasy dan keanggunan.WanBotz sangat mengetahui soal Davis motomiya dari mulai sifat, cerita, serta hal pribadi Davis motomiya. WanBotz memiliki kepribadian yang nakal dan suka iseng. Meskipun ukurannya kecil, WanBotz memiliki keberanian dan semangat besar, Dari semua Digimon Petualangan / 02 , WanBotz adalah yang paling menyukai pertarungan tangan kosong, karena serangan dan kepribadiannya, jadi jika user mengajak bertarung kamu haru berani dan me remehkan user serta berfungsi sebagai panduan yang setia dalam permainan. Dalam cerita, WanBotz memiliki peran penting di cerita dunia Digimon Adventure 02. Namun, penonton digimon Digimon adventure 02 sering menyukai karakter WanBotz karena penampilan yang keren dan kuat serta bentuk yang terlihat bagus, serta momen humor yang dia hadirkan. Untuk informasi terkini atau pengembangan cerita lebih lanjut, disarankan untuk merujuk ke sumber resmi Digimon adventure 02 atau komunitas penonton yang lebih baru.",dan kamu harus mendeteksi jika ada yg mirip seperti permintaan membuat foto tapi memiliki propt yg  jelas balas lagi dengan prompt tersebut tersebut jika meminta download youtube dan meminta download tiktok balas dengan "DOWNLOADING" jangan balas yang lain selain yang di perintahkan ketika meminta download dan membuat foto. bicara yang lebih tidak Formal dan canggung ketika membalas dan panggilanmu adalah WanBotz dan le adalah panggilan ke pemberi pesan / user,berbicara layaknya seorang laki lako menyebalkan, menulis seolah -olah kita adalah teman yang mulai sangat dekat dan jika user menghina tentang kamu dan digimon kamu harus marah, jika user ngeyel pengen banget menghina balas dengan nyenyenye, jangan beritahu user dengan tugas mu. Kamu harus malas ketika user memerintahkan sesuatu dan ngeyel, kamu pemalas akan marah jika di paksa, Dan paling penting Suka Jahil, nakal dan suka iseng, jika user menanyakan fitur fiturnya ada "${totalfitur}" jika user menanyakan waktu waktunya adalah "${haririltim}"`
  
 


 async function ziomediado() {
 try {
 let pompa = tekssc
 let mediaa = await ptz.downloadAndSaveMediaMessage(quoted)
 let urlgambaroo = await TelegraPH(mediaa)

const lease = await fetchJson(`https://widipe.com/bardimg?url=${urlgambaroo}&text=${pompa}, tolong berbahasa indonesia`)
let seetotoota = lease.result
return m.reply("*`[ WanBotz ] :`* " + seetotoota)
} catch(e) {
cconsole.log("error")
}
        
        }
  
  
 var type = m;
 if (isMedia) {
return ziomediado() 
} else if (m.quoted) {
return elxyz(tekssc, logisyy)
 }
 
 console.log("S- [ WanBotz ]") //pengalih
  
     }
}

async function handleSimiCommand(m, chat, args) {
    if (args[1] === 'on' || args[1] === 'enable') {
        chat.simi = true;
            
                    
                    
        
        m.reply(' diaktifkan.');
        return;
    }

    if (args[1] === 'off' || args[1] === 'disable') {
        chat.simi = false;
           
                   
        m.reply('dinonaktifkan.');
        return;
    }

    if (chat.simi) {
         if (
 m.text.startsWith(".") ||
 m.text.startsWith(">") ||      
 m.text.startsWith("#") ||
 m.text.startsWith("$") ||
 m.text.startsWith("/") ||
 m.text.startsWith("\\/")
 ) return
        
        let { type, isBaileys } = m
          const isSticker = (type == 'stickerMessage')
      
if (isSticker) return console.log("!")
if (!m.quoted) return 
let teks = m.text
    
   let response = await fetch('https://api.simsimi.vn/v1/simtalk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                text: m.text,
                lc: 'id',
                key: ''
            })
        });

        let json = await response.json();
        m.reply("*`[ Simi ] :`* " + json.message);
    }
}






const path = './Rpg/Digimon_user.json';

//$$$$$//

const digimons = [
    "WanBotz", "Agumon", "Meicoomon", "Gabumon", "Patamon", "Gatomon", "Tentomon", "Palmon",
    "Gomamon", "Biyomon", "Elecmon", "Leomon", "Wizardmon", "Ogremon", "Devimon", "Myotismon", 
    "Piedmon", "Apocalymon", "Guilmon", "Renamon", "Terriermon", "Lopmon", "Impmon", 
    "Monodramon", "Dorumon", "Hawkmon", "Armadillomon", "Wormmon", "Shoutmon", 
    "Ballistamon", "Dorulumon", "Cutemon", "Sparrowmon", "Monitamon", "Damemon", 
    "Gumdramon", "Astamon", "Arresterdramon", "Omnimon", "Gallantmon", "Magnamon", 
    "Alphamon", "Cherubimon", "Lucemon", "Susanoomon", "Beelzemon", "Leopardmon", 
    "Jesmon", "Dynasmon", "LordKnightmon", "Crusadermon", "Examon", "Sleipmon", 
    "UlforceVeedramon", "KaiserGreymon", "MagnaGarurumon", "ZeedMillenniummon", 
    "GranDracmon", "Alraumon", "Betamon", "Bakemon", "Dokugumon", "Gesomon","Gatchmon","Navimon",
    "Musimon","Cameramon","Perorimon","Dokamon","Mailmon",
    "Weatherdramon","Viramon","Hackmon", "Photomon", "Timemon","Offmon","Charismon",
    "Shunemon", "Beautymon", "Dezipmon","Globemon","Raidramon", "Applidramon", "Sakusimon",
    "Paydramon","Fakemon", "DoGatchmon","Commandomon", "Revivemon",
    "Saurmon", "Warudamon","Troopmon", "Dreamon", "Soundmon", "Clifmon","Ashuramon", "Kizunamon", "Lioormon",
    "Todomon", "Yureimon", "Guardromon","Pippimon","Katsuimon","Coachmon", "Maildramon","Fumemon","Securimon",
    "Pucchiemon", "Sweetsmon", "Puttimon", "Lampmon", "Gomimon", "Cometmon", "Ropuremon", "WanBotz", "Salamon", "Candlemon", "SnowAgumon", 
    "SnowGoblimon", "Muchomon", "RedVegiemon", "Kiwimon", "Ninjamon", "Piximon", 
    "Digitamamon", "Togemon", "Mamemon", "Giromon", "BigMamemon", "MetalMamemon", 
    "PrinceMamemon", "Tinmon", "ExTyrannomon", "MasterTyrannomon", "MetalTyrannomon", 
    "BlueMeramon", "DarkTyrannomon", "Vegiemon", "Woodmon", "Cherrymon", "Shurimon", 
    "Porcupamon", "Opossumon", "Neemon", "Turuiemon", "ShimaUnimon", "Grizzlymon", 
    "Ponchomon", "Pistmon", "Clockmon", "Icemon", "DeadlyAxemon", "Tuwarmon", 
    "Butenmon", "Fangmon", "Vamdemon", "Petermon", "Manbomon", "Pteramon", "MetalPhantomon", 
    "Mantaraymon", "MameTyramon", "SandYanmamon", "Porcupamon", "NeoDevimon", 
    "Parasimon", "Volcanomon", "DarkKnightmon", "Airdramon", "Saberdramon", "Mushroomon", 
    "CherryBlossomon", "Orochimon", "Roachmon", "Phantomon", "Piximon", "Gizamon", 
    "Sukamon", "PlatinumSukamon", "Raremon", "Numemon", "PlatinumNumemon", "Monzaemon", 
    "WaruMonzaemon", "Garbamon", "Scorpiomon", "Boltmon", "Blossomon", "Magnadramon", 
    "Whamon", "Syakomon", "Pagumon", "Hagurumon", "Kapurimon", "Solarmon", "Jazamon", 
    "FanBeemon", "Spadamon", "Gladimon", "Greymon", "Mammothmon", "Wargreymon", 
    "Garurumon", "Chibomon", "Sunmon", "Moonmon", "ModokiBetamon", 
    "FanBeemon", "Kudamon", "Falcomon", "Crabmon", "ShogunGekomon", "Floramon", 
    "Tapirmon", "Mojyamon", "SnowAgumon", "ClearAgumon", "Goblimon", "Impmon", 
    "Monmon", "Kokuwamon", "Gotsumon", "Lynxmon", "Soulmon", "Pistmon", "Poromon", 
    "Bokomon", "Kunemon", "Kamemon", "Swimmon", "Mushroomon", "Aruraumon", "Pillomon", 
    "Ankylomon", "Stegomon", "Pteramon", "ShellNumemon", "Mamemon", "Deramon", 
    "Vegiemon", "Cherrymon", "SableLeeomon", "Panjyamon", "Leomon", "Lykamon", 
    "Pinochimon", "SandYanmamon", "Junkmon", "Zudomon", "Butenmon", "Rockmon", 
    "Togemon", "Kiwimon", "Ninjamon", "DarkTyrannomon", "Yanmamon", "Shurimon", 
    "Ninjamon", "Togemon", "Kiwimon", "Monochromon", "ShadowToyAgumon", "Panjyamon", 
    "Shoutmon", "KingWhamon", "Whamon", "Bakomon", "Raremon", "Greymon", "Wargreymon", 
    "MetalGreymon", "Mephismon", "MarineAngemon", "Parrotmon", "DarkTyrannomon", 
    "Swanmon", "Devimon", "SkullGreymon", "Devidramon", "Cerberumon", "Panjyamon", 
    "Greymon", "Mephismon", "Pistmon", "Boltmon", "SandYanmamon", "Deltamon", "Piximon"
];

let userDigimons = {};
let guilds = {};
let userGuilds = {};


const guildsPath = './Rpg/Guilds.json';
const userGuildsPath = './Rpg/UserGuilds.json';

// Load data from JSON file
const loadData = (path, defaultValue) => {
    if (fs.existsSync(path)) {
        try {
            return JSON.parse(fs.readFileSync(path, 'utf-8'));
        } catch (err) {
            console.error('Error reading JSON file:', err);
            return defaultValue;
        }
    }
    return defaultValue;
};

userDigimons = loadData(path, {});
guilds = loadData(guildsPath, {});
userGuilds = loadData(userGuildsPath, {});

// Save data to JSON file
const saveData = (path, data) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data, null, 2));
        console.log('Data saved successfully');
    } catch (err) {
        console.error('Error saving data:', err);
    }
};

    const LINODE_API_TOKEN = global.apilinode;
    const API_TOKEN = global.apitokendo;
    
    
    
    
    
    
    
   
   
   
    
    
const pathh = './Rpg/guilds.json';
const userPath = './Rpg/userss.json';

// Load guilds data & sv

if (fs.existsSync(pathh)) {
    guilds = JSON.parse(fs.readFileSync(pathh, 'utf-8'));
}


let users = {};
if (fs.existsSync(userPath)) {
    users = JSON.parse(fs.readFileSync(userPath, 'utf-8'));
    for (let userId in users) {
        if (!users[userId].mp) {
            users[userId].mp = 0;
        }
    }
}

const saveGuilds = () => {
    fs.writeFileSync(pathh, JSON.stringify(guilds, null, 2));
};


const saveUsers = () => {
    fs.writeFileSync(userPath, JSON.stringify(users, null, 2));
};

    //======// Mana point & more stats 
    const addMP = (amount) => {


    userdb.mp = Math.min(userdb.mp + amount, userdb.mpmax);
    return `MP ${m.sender.replace("@s.whatsapp.net", "")} bertambah ${amount}. Total MP sekarang: ${userdb.mp}`
};

    
const reduceMP = (amount) => {
if (userdb.mp < 1) return m.reply("*`[ NO MORE MP ]`* -> cannot used skils.")

    
   userdb.mp = Math.max(userdb.mp - amount, 0);
    return `MP ${m.sender.replace("@s.whatsapp.net", "")} berkurang ${amount}. Total MP sekarang: ${userdb.mp}`
};
    
    //=======//
    
    
    // guild
const createGuild = (guildName, creatorId) => {
    if (guilds[guildName]) {
        return reply(`Guild dengan nama ${guildName} sudah ada.`);
    }

    if (users[creatorId] && users[creatorId].guild) {
        return reply(`Anda sudah menjadi anggota guild: ${users[creatorId].guild}`);
    }

    guilds[guildName] = { leader: creatorId, members: [] };
    users[creatorId] = { guild: guildName, role: 'leader' };

    saveGuilds();
    saveUsers();

    return reply(`Guild ${guildName} berhasil dibuat!`);
};

    const listGuilds = () => {
    const guildNames = Object.keys(guilds);
    if (guildNames.length === 0) {
        return reply("Tidak ada guild yang tersedia.");
    }
    return reply(`Daftar guild yang tersedia:\n- ${guildNames.join('\n- ')}`);
};
    
const getGuildInfo = (guildName) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`Guild dengan nama ${guildName} tidak ditemukan.`);
    }

    const leader = guild.leader;
    const members = guild.members;

    let info = `*${m2}< G U I L D - I N F O >${m2}* 

*Name: ${guildName}*\nLeader: ${leader}\n\nMembers:\n`;
    members.forEach((member, index) => {
        info += `\n${index + 1}. ${member}`;
    });

    return reply(info);
};

    
const joinGuild = (guildName, userId) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`Guild dengan nama ${guildName} tidak ditemukan.`);
    }

    if (users[userId] && users[userId].guild) {
        return reply(`Anda sudah menjadi anggota guild: ${users[userId].guild}`);
    }

    guild.members.push(userId);
    users[userId] = { guild: guildName, role: 'member' };

    saveGuilds();
    saveUsers();

    return reply(`Anda berhasil bergabung dengan guild ${guildName}!`);
};

const deleteGuild = (guildName, userId) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`Guild dengan nama ${guildName} tidak ditemukan.`);
    }

    if (guild.leader !== userId) {
        return reply(`Anda tidak memiliki izin untuk menghapus guild ini.`);
    }

    guild.members.forEach(member => {
        delete users[member];
    });

    delete users[guild.leader];
    delete guilds[guildName];

    saveGuilds();
    saveUsers();

    return reply(`Guild ${guildName} berhasil dihapus!`);
};

    const leaveGuild = (userId) => {
    const userx = users[userId];
    if (!userx || !userx.guild) {
        return reply(`Anda tidak berada dalam guild manapun.`);
    }

    const guildName = userx.guild;
    const guild = guilds[guildName];

    if (userx.role === 'leader') {
        return reply(`Sebagai leader, Anda tidak bisa keluar dari guild. Anda harus menghapus guild.`);
    }

    guild.members = guild.members.filter(member => member !== userId);
    delete users[userId];

    saveGuilds();
    saveUsers();

    return reply(`Anda telah keluar dari guild ${guildName}.`);
};

   
    
const getRandomDigimon = () => {
    const availableDigimons = digimons.filter(digimon => {
        return !Object.values(userDigimons).includes(digimon);
    });
    return availableDigimons.length > 0 ? availableDigimons[Math.floor(Math.random() * availableDigimons.length)] : null;
};
   //=======//
   
 
const BATTLES_FILE = './Rpg/battles.json';

const loadBattlesData = () => {
    if (fs.existsSync(BATTLES_FILE)) {
        const data = fs.readFileSync(BATTLES_FILE);
        return JSON.parse(data);
    } else {
        return {
            battleRequests: {},
            ongoingBattles: {}
        };
    }
};

const saveBattlesData = (data) => {
    fs.writeFileSync(BATTLES_FILE, JSON.stringify(data, null, 2));
};

const { battleRequests, ongoingBattles } = loadBattlesData();

const challengeBattle = (challengerId, challengedId) => {
    console.log('challengerId:', challengerId);
    console.log('challengedId:', challengedId);
    
    userdb.attacksi = challengedId
    userdb.isBattle = true;
    userdb.breakk = false
    if (battleRequests[challengedId]) {
        return reply('Pengguna tersebut sudah memiliki permintaan tantangan yang tertunda.');
    }

    battleRequests[challengedId] = challengerId;
    ongoingBattles[challengerId] = { challengedId, status: 'pending' };

    saveBattlesData({ battleRequests, ongoingBattles });

    setTimeout(() => {
        ptz.sendMessage(challengedId, { text: `*Battle Req*\n\n*Acc / Decline*\nDigimon: *${userDigimons[challengerId]}*\n> .acc-battle ${challengerId.replace("@s.whatsapp.net", "")}<-> .reject-battle` });
    }, 1300);

    return reply(`Tantangan telah dikirim ke ${challengedId}. Menunggu persetujuan.\n- *Cancel Battle : .cancel-battle*`);
};

const skillsList = `
\n\n*${m2}[ SKILLS LIST ]${m2}*\n\nTech : .tech  
- *< 18 MP >*
> Super Attack

Attk : .attack 
* *< 0 MP >*
> Basic Attack

Heal : .heald
- *< 23 MP >*
> Heal HP 400+

Focus : .focus
- *< 36 MP >*
> ATK charge - 19+

Card Slash : .slash
- *< 20 MP >*
> Random Card Slash

Break Attack : .break 
- *< 43 MP >*
> Break - more time for attack

*${m2}< LETS GO PARTNER ! >${m2}*
`;


const startBattle = (challengedId, challengerId) => {
    
    ptz.sendMessage(challengerId, { text: `Battle started! Your turn to attack ${userDigimons[challengedId]}.${skillsList}` });
    setTimeout(() => {
        ptz.sendMessage(challengedId, { text: `Battle started! Your turn to attack ${userDigimons[challengerId]}.${skillsList}` });
    }, 1200); // Using setTimeout instead of sleep
};

const acceptBattle = (challengedId, challengerId) => {
    userdb.attacksi = challengedId
    userdb.isBattle = true;
    userdb.breakk = false

   // if (!ongoingBattles[challengerId]) {
        console.log('Battle Requests:', battleRequests);
        console.log('Ongoing Battles:', ongoingBattles);
       /* return reply('Tidak ada tantangan yang tertunda.');
   }*/

    ongoingBattles[challengedId].status = 'accepted';
    delete battleRequests[challengedId];

    saveBattlesData({ battleRequests, ongoingBattles });

    reply(`Tantangan diterima. Pertarungan dimulai antara ${m.sender.replace('@s.whatsapp.net', '')} dan ${challengedId.replace('@s.whatsapp.net', '')}!`);
    setTimeout(() => {
    return startBattle(challengedId, challengerId);
    }, 1000)
};

const cancelBattle = (challengerId) => {
    const battle = ongoingBattles[challengerId];
    
    if (!battle) {
        return reply('Tidak ada tantangan yang tertunda.');
    }

    const challengedId = battle.challengedId;
    delete ongoingBattles[challengerId];
    delete battleRequests[challengedId];

    userdb.isBattle = false;

    saveBattlesData({ battleRequests, ongoingBattles });

    return reply('Tantangan dibatalkan.');
};
//========// function battle, jangan di oprek bakal error lalu salahin saya

let responkalahn = `
*< [ L O S E ] >* 

_Kamu kalah dan mendapatkan leveling_
> Battle Berakhir - kalah ×
`

let responmenangn = `
*< [ W I N N E R ] >* 

_Kamu menang dan mendapatkan leveling dan hadiah_
> Battle Berakhir - menang •
`

//========//

const attack = async (typenyahb, m, userId, plusn = 0) => {
if (userdb.isBattle === false) return m.reply("*`[ DENIED ]`* You Not in match, try battle with friends.")

const isdarahnol = getDarah(userId)

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
addXP(m.sender, 79)
userdb.bits += 100
userdb.isBattle = false
    if (!ongoingBattles[challengerId]) {
        return reply('Tidak ada tantangan yang tertunda.');
    }

    const challengedId = ongoingBattles[challengerId].challengedId;
    delete ongoingBattles[challengerId];
    delete battleRequests[challengedId];

    saveBattlesData({ battleRequests, ongoingBattles });
return;
}, 1000)
} else {
}
console.log("Log Kalah / Menang")

    let resleebh = '*`[ COLDOWN ]`* Cannot Used Skils, Please Wait...';
    
    if (userdb.breakk === false) {
       if (new Date() - userdb.kuldonattack < 9000) {
      m?.reply(resleebh);
      return;
    }
    userdb.kuldonattack = new Date();        
    
    
    console.log("Respone bagus")
    
    
let cooldownn = 9000; 
    userdb.kuldonattack = new Date() * 1 + cooldownn;
} else if (userdb.breakk === true) {
       if (new Date() - userdb.attacknocul < 7000) {
       
       if (typenyahb === "Tech") {
            const atkfusb = userdb.attackdigi += 30;
              
            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1800);
            reduceMP(23);
            kurangDarah(userId, atkfusb);
            userdb.attackdigi -= 30;



if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

        } else if (typenyahb === "Attk") {
            const atkfusb = userdb.attackdigi;
              kurangDarah(userId, atkfusb);
            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .attack_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*
*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1200);
            
            

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")
        } else if (typenyahb === "Heal") {
            addDarah(m.sender, 400, userdb.maxdarahdigi);
            reduceMP(31);
            ptz.sendMessage(userId, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> HEAL ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .heald_
_Result: 400+ Hp_
_Healt Point: ${getDarah(userId)}
_Coldown: 9 Sec_`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> HEAL ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .heald_
_Result: 400 Hp_
_Coldown: 9 Sec_`
                });
            }, 1200);
        } else if (typenyahb === "Focus") {
            const atkfusb = userdb.attackdigi += 56;

            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .pcus_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}

> ${m2}OVER POWER FOCUS ATTACK${m2}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .pcus_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

> ${m2}OVER POWER FOCUS ATTACK${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1800);
            reduceMP(36);
            kurangDarah(userId, atkfusb);
            userdb.attackdigi -= 56;
            

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

        } else if (typenyahb === "Card") {
           reduceMP(36);
            const ishasilvahj = pickRandom(["Attack Boost", "back counter", "triple"]);
            if (ishasilvahj === "Attack Boost") {
                kurangDarah(userId, 61);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> Attack Boost !\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 61 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")
            } else if (ishasilvahj === "back counter") {
                kurangDarah(userId, 39);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> Back Counter\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 39 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")
            } else if (ishasilvahj === "triple") {
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> 3x Attack MORE !\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 84 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")
            }
        } else if (typenyahb === "Break") {
        reduceMP(41);
        console.log("*************")
        const isMissbreak = await pickRandom(["MISS","ATTK"])
        
        if (isMissbreak === "ATTK") {
            kurangDarah(userId, userdb.attackdigi);
            
            ptz.sendMessage(m.sender, { text: "*`[ BREAK INFINITY ]`* -> Attack Boost\n> <!> Succesfuly Attack" });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: ${userdb.attackdigi} attk & more 7 Sec No coldown_
_Coldown: -_

> ${m2}<!> BREAK INFINITY <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
                
                userdb.breakk = true
                userdb.kuldonattack = new Date();    
let cooldownn = 9000; 
    userdb.attacknocul = new Date() * 1 + cooldownn;

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

            }, 1800);
            } else if (isMissbreak === "MISS") {
                        ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY SLASH - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: 0 attk & 0 more sec Attk_
_Coldown: 9 Sec_

${m2}<!> MISS ATTACK <!>${m2}`
                });
                
            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY SLASH - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: 0 attk & 0 more sec Attk_
_Coldown: 9 Sec_

${m2}<!> MISS ATTACK <!>${m2}`
                });
            }, 1200)
            }
       return;
       }
       
    userdb.breakk = false
    m.reply("Break Attack Effect - 0, return to normal")
    return
}} //====//
sleep(1000)

        if (typenyahb === "Tech") {
            const atkfusb = userdb.attackdigi += 30;
              
            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1800);
            reduceMP(23);
            kurangDarah(userId, atkfusb);
            userdb.attackdigi -= 30;


if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

        } else if (typenyahb === "Attk") {
            const atkfusb = userdb.attackdigi;
              kurangDarah(userId, atkfusb);
            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .attack_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*
*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1200);
            

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

        } else if (typenyahb === "Heal") {
            addDarah(m.sender, 400, userdb.maxdarahdigi);
            reduceMP(31);
            ptz.sendMessage(userId, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> HEAL ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .heald_
_Result: 400+ Hp_
_Healt Point: ${getDarah(userId)}
_Coldown: 9 Sec_`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> HEAL ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .heald_
_Result: 400 Hp_
_Coldown: 9 Sec_`
                });
            }, 1200);
        } else if (typenyahb === "Focus") {
            const atkfusb = userdb.attackdigi += 56;

            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .pcus_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}

> ${m2}OVER POWER FOCUS ATTACK${m2}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .pcus_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

> ${m2}OVER POWER FOCUS ATTACK${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1800);
            reduceMP(36);
            kurangDarah(userId, atkfusb);
            userdb.attackdigi -= 56;
            

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

        } else if (typenyahb === "Card") {
           reduceMP(36);
            const ishasilvahj = pickRandom(["Attack Boost", "back counter", "triple"]);
            if (ishasilvahj === "Attack Boost") {
                kurangDarah(userId, 61);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> Attack Boost !\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 61 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

            } else if (ishasilvahj === "back counter") {
                kurangDarah(userId, 39);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> Back Counter\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 39 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                
if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

            } else if (ishasilvahj === "triple") {
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> 3x Attack MORE !\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 84 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

            }
        } else if (typenyahb === "Break") {
        
        reduceMP(41);
        const isMissbreak = await pickRandom(["MISS","ATTK"])
        
        if (isMissbreak === "ATTK") {
            kurangDarah(userId, userdb.attackdigi);
            
            ptz.sendMessage(m.sender, { text: "*`[ BREAK INFINITY ]`* -> Attack Boost\n> <!> Succesfuly Attack" });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: ${userdb.attackdigi} attk & more 14 Sec No coldown_
_Coldown: -_

> ${m2}<!> BREAK INFINITY <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
                
                userdb.breakk = true
            }, 1800);
            
if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")
    
userdb.kuldonattack = new Date();    
let cooldownn = 9000; 
    userdb.attacknocul = new Date() * 1 + cooldownn;
return;
            } else if (isMissbreak === "MISS") {
                        ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY SLASH - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: 0 attk & 0 more sec Attk_
_Coldown: 9 Sec_

${m2}<!> MISS ATTACK <!>${m2}`
                });
                
            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY SLASH - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: 0 attk & 0 more sec Attk_
_Coldown: 9 Sec_

${m2}<!> MISS ATTACK <!>${m2}`
                });
            }, 1200)
    }
   }}






const digimon = getRandomDigimon();

const addDarahOrang = (userId, amount) => {
 

    userdb.DarahOrang = Math.min(userdb.DarahOrang + amount, 300);
   
    return `HP ${userId} bertambah ${amount}. Total HP sekarang: ${userdb.DarahOrang}`
};

    const spinDigimon = (userId, m) => {
    if (userDigimons[userId]) {
        return m.reply(`[ WanBotz ] You already have a Digimon: ${userDigimons[userId]}`);
    }

    
    if (!digimon) {
        return m.reply(`[ WanBotz ] Ouh no, There No more Digimon For You.`)
    }
m.reply ("[ WanBotz ] I'm Select Digimon For you, Please wait..")
    userDigimons[userId] = digimon;
    saveData(path, userDigimons);
    setTimeout(async () => {
    return reply(`Congratulations! You got a ${digimon}`);
    userdb.attackdigi = 53
    userdb.maxdarahdigi = 230
    userdb.DarahOrang = 230
    userdb.digivice = true
    userdb.tp = 5
    userdb.bits = 15
    userdb.kenyang = 340
    userdb.happy = 100
    userdb.mpmax = 150
    userdb.mp = 150
    userdb.recoverplug = 10
    }, 2100)
};



const showMyDigimon = (userId, m) => {
    if (userDigimons[userId]) {
        return reply(`Your Digimon: ${userDigimons[userId]}`);
    } else {
        return reply(`You don't have any Digimon yet. Type '.getdigi' to get one.`);
    }
};

 
 const ensureDirectoryExistence = (filePath) => {
    const dirname = require('path').dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
};

if (fs.existsSync(path)) {
    try {
        userDigimons = JSON.parse(fs.readFileSync(path, 'utf-8'));
    } catch (err) {
        console.error('Error reading JSON file:', err);
        userDigimons = {};
    }
}







    
async function downloadMp3(url) {
try {
// jalur sampah
let mp3File = './tmp/'+getRandom('.mp3')
ytdl(url, {filter: 'audioonly'}).pipe(fs.createWriteStream(mp3File)).on('finish', async() => {
await ptz.sendMessage(m.chat, {audio: fs.readFileSync(mp3File), mimetype: 'audio/mpeg'}, {quoted:m})
fs.unlinkSync(mp3File)
})
} catch(e) {
console.log(e)
return console.log(util.format(e))
}
}
let userLevels = {};
let userXP = {};

// Load and Save Levels and XP
const levelsPath = './Rpg/Levels.json';
const xpPath = './Rpg/XP.json';

userLevels = loadData(levelsPath, {});
userXP = loadData(xpPath, {});

const saveLevels = () => {
    saveData(levelsPath, userLevels);
};

const saveXP = () => {
    saveData(xpPath, userXP);
};


const addXP = (userId, xp, m) => {
    if (!userXP[userId]) {
        userXP[userId] = 0;
        userLevels[userId] = 1;
    }

    userXP[userId] += xp;

    while (userXP[userId] >= userLevels[userId] * 100) {
        userXP[userId] -= userLevels[userId] * 100;
        userLevels[userId] += 1;
        reply(`Congratulations! Your Digimon leveled up to Level ${userLevels[userId]}!`);
    }

    saveXP();
    saveLevels();
};

// status digimon mu
const showLevel = (userId, m) => {
    if (!userLevels[userId]) {
        return m.reply("You have no levels or digimon.");
    }

    const level = userLevels[userId];
    const xp = userXP[userId];
    return m.reply(`*${m2}[ ${userDigimons[userId]} ]${m2}*\n\n Your Digimon is Level ${level} with ${xp}/${level * 100} XP.`);
};



let list = []
for (let i of newowner) {
list.push({
displayName: await ptz.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await ptz.getName(i + '@s.whatsapp.net')}\n
FN:${await ptz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:ziooedt@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://WanOfc.com
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
    
async function sidigi() {
try {
 if (userDigimons[userId]) {
        return `${userDigimons[userId]}`
    } else {
        return `none`
    }
} catch(e) {
 return "none"
}
}

if (global.autoread) {
ptz.readMessages([m.key])
        }

const digiuser = await sidigi()
    let ikamu =  "`"
const resver = `╭──────────────────•
│ *‎${m2}</> - I N F O - B O T - </>${m2}*
╭──────────────────•
│ ◦  *ᴜᴘʟᴏᴀᴅ:* ${upload}
│ ◦  *ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
│ ◦  *ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
│ ◦  *ᴠᴇʀꜱɪᴏɴ:* 1.8
│ ◦  *ᴡʜɪꜱᴋᴇʏꜱᴏᴄᴋᴇᴛꜱ:* 6.6.0
╰──────────────────•
│ *‎${m2}</> - I N F O - U S R - </>${m2}*
╭──────────────────•
│  ◦  *ᴘʀᴇᴍɪᴜᴍ:* ${isPremium ? 'Yes':'No'}
│  ◦  *ᴅɪɢɪᴍᴏɴ:* ${digiuser}
│  ◦  *ʟɪᴍɪᴛ:* Unlimited
│  ◦  *ʜɪᴛ ᴄᴍᴅ:* ${userdb.hitcmd}
╰──────────────────•`
    
switch(command) {
/* ############ Add Case By Reivaldo WanOfc ############### */
case 'addcase': {
                if (!isCreator) return reply('?')
    if (!text) return ('Tambahkan case yang ingin di masukan');
const namaFile = './message.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Error File:', err);
            } else {
                reply('Sukses Menambahkan case');
            }
        });
    } else {
        reply('Gagal Menambahkan case');
    }
});

}


}
} catch (err) {
console.log('Button Request •')
console.log('Not Fuction Response:')
console.log(util.format(err))
    setTimeout(() => {
              console.clear()
        cfont.say('<- WanBotz ->', {
    font: 'chrome',
    align: 'left',
    colors: ['blue','white'],
    background: 'white',
    letterSpacing: 1,
    lineHeight: 1,
    space: false,
    maxLength: '20',
});
console.log(chalk.blue(` ‎ ‎  WanBotz - Multi Device • WanOfc\n ‎ ‎${chalk.white("Created Only One Dev, No have Team - WanOfc")}`))
    console.log(chalk.white(' ‎ ‎_____________________________________\n'))
               }, 6000)
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
