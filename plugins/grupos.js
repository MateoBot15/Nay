import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
await m.reply(`╭「 𝐌𝐚𝐭𝐞𝐨 𝐁𝐨𝐭 」\n│➯(♦️)*PUEDES ENTRAR A LOS GRUPOS O VISITAR NUESTRAS PÁGINAS OFICIALES ESO NOS AYUDARÍA MUCHO*\n︎╰───────────────╯\n\n\n╭「 𝐌𝐚𝐭𝐞𝐨 𝐁𝐨𝐭  」\n│➯(♦️)*YOU CAN ENTER THE GROUPS OR VISIT OUR OFFICIAL PAGES YOU WOULD HELP US A LOT WITH THAT$\n︎╰───────────────╯`)
let pp = imagen1
let vn = './Audios/naa.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭「 𝐌𝐚𝐭𝐞𝐨 𝐁𝐨𝐭 」
│➯𝗛ᴏʟᴀ,➟${taguser}
│➯ *𝙲𝚁𝙴𝙰𝙳𝙾𝚁:𝙼𝚊𝚝𝚎𝚘 𝙱𝚘𝚝
│➯ *𝙸𝙽𝙵𝙾: Wa.me/51929741688
│➯ *Yape: 900711258
│➯ғᴇᴄʜᴀ:➟${date}
│➯ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ:➟${uptime}
│➯ᴜsᴜᴀʀɪᴏs:➟${rtotalreg}
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥*Grupos y cuentas*➻❥」
│➯𝙷𝙰𝙳𝙴𝚂-𝙼𝚊𝚝𝚎𝚘 𝙱𝚘𝚝
│➯https://chat.whatsapp.com/Kz6zFTtKva4HaBSqDYfAQf
│➯𝙷𝙰𝙳𝙴𝚂-𝙼𝚊𝚝𝚎𝚘 𝙱𝚘𝚝
│➯https://chat.whatsapp.com/Kz6zFTtKva4HaBSqDYfAQf
│➯𝙷𝙰𝙳𝙴𝚂-𝙼𝚊𝚝𝚎𝚘 𝙱𝚘𝚝
│➯https://chat.whatsapp.com/Kz6zFTtKva4HaBSqDYfAQf
│➯𝚙á𝚐𝚒𝚗𝚊 𝚍𝚎 𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
│➯https://www.facebook.com/groups/987464505464904/?ref=share
│➯INSTAGRAM
│➯https://instagram.com/mateo_ventas_?igshid=NTc4MTIwNjQ2YQ==
︎╰───────────────╯`.trim()
if (m.isGroup) {
await conn.sendFile(m.chat, vn, 'naa.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
await conn.sendFile(m.chat, vn, 'naa.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(grupos|Grupos|GRUPOS|grùpos)$/i
handler.exp = 50
handler.register = true
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}