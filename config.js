require("./database/module")

//GLOBAL PAYMENT
global.storename = "⿻ -𝐙𝐢𝐢𝟒𝐘𝐭"
global.dana = "6282218496908"
global.qris = "https://a.top4top.io/p_319465f4i0.jpeg"


// GLOBAL SETTING
global.owner = "6282218496908" //masukin no lu
global.namabot = "LynnBotz"
global.nomorbot = "-" //masukin no lu
global.namaCreator = "LynnZxD"
global.linkyt = "https://youtube.com/@lynnzxd"
global.autoJoin = false
global.antilink = false
global.versisc = '𝟭𝟮.𝟬.𝟬'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://g.top4top.io/p_3194iz70l0.jpg'
global.isLink = 'https://whatsapp.com/channel/0029ValkS8dL2AU0eVX9oP3m'
global.packname = "⿻"
global.author = "⿻"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})