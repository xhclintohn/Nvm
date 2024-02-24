import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [  
  ['254705244235', '*Muli*', true],
 
] //Number of owners

//global.pairingNumber = "254708192575" //put your bot number here

global.mods = ['254708192575','254705244235'] 
global.prems = ['254708192575','254705244235']
global.allowed = ['254708192575','254705244235']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'Shotgun_Suppressor'
global.premium = 'true'
global.packname = 'SaMuli TEAM' 
global.author = '@Shotgun_Suppressor' 
global.menuvid = 'https://imgur.com/oVNvXwa.mp4'
global.igfg = '▢✓ Follow My channel\nhttps://chat.whatsapp.com/IW866EwDmuC9wrVju3KMBX\n' 
global.dygp = 'https://chat.whatsapp.com/IW866EwDmuC9wrVju3KMBX'
global.fgsc = 'https://chat.whatsapp.com/IW866EwDmuC9wrVju3KMBX' 
global.fgyt = 'https://chat.whatsapp.com/IW866EwDmuC9wrVju3KMBX'
global.fgpyp = 'https://chat.whatsapp.com/IW866EwDmuC9wrVju3KMBX'
global.fglog = './XLICON.jpg' 
global.thumb = fs.readFileSync('./XLICON.jpg')


global.wait = '*🕣 Shotgun_Suppressor*\n*Loading..._*\n*⭐▰▰▰▱▱▱▱▱⭐*'
global.rwait = '⌛'
global.dmoji = '😊'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // maximum warns

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
