/**
 - Created By Lexxy Official
 - Base Ori Dika Ardnt
*/

const fs = require("fs")
const chalk = require("chalk")

// Other
global.thum = fs.readFileSync("./plugins/media/image/thumb.jpg")
global.log0 = fs.readFileSync("./plugins/media/image/thumb.jpg")
global.err4r = fs.readFileSync("./plugins/media/image/thumb.jpg")
global.locimg = fs.readFileSync("./plugins/media/image/loc.jpg")
global.owner = ['6287814897547']
global.numberOwner = "6287814897547"
global.group = "https://chat.whatsapp.com/GbnYuRUpfv0Kvou1DqMgpp"
global.rkyt = []
global.banUser = ['']
global.ntilink = ['']
global.wlcm = ['']
global.gcrevoke = ['']
global.packname = "Losion Botz"
global.author = "iZyen"
global.sessionName = "session"
global.footer = "© Created By iZyen"
global.linkgrupss = "https://chat.whatsapp.com/GbnYuRUpfv0Kvou1DqMgpp"
global.antitags = true
global.txtSewabot = "1-Minggu : Rp5.000\n2-Minggu : Rp.10.000\n1-Bulan : Rp.20.000\n2-Bulan : Rp.30.000\n3-Bulan : Rp40.000"
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    linkm: 'Linknya Mana Kak?',
    ban: 'Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner'
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
