import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let img = "https://telegra.ph/file/1dc3a6d6aa5cfbc0a9517.jpg"
let info = `*Shotgun_Suppressor BOT IS ACTIVE*`
await conn.reply(m.chat, info, m, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: author, body: botname, sourceUrl: fgyt, thumbnail: await conn.getFile(img) }}})
}
handler.customPrefix = /^(Ab|bot|test)$/i
handler.command = new RegExp

export default handler
