exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES⏳*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING☑️*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING❌*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG⃣*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN❗*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*Cara Daftar ${prefix}daftar nama|umur*\n*Contoh ${prefix}daftar Irwan|17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot❗*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi♻️*`
}

exports.linkga = () => {
	return`*maaf link tidak valid❌*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF❌*`
}

exports.baned = () => {
	return`*「❗」ANDA TELAH TERBANNED OLEH OWNER❗*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi❗*`
}

exports.wrongf = () => {
	return`*format salah/text kosong❌*`
}

exports.clears = () => {
	return`*clear all Success☑️*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA USER」*\n\nkamu sudah terdaftar dengan data \n\n┏━➤nama\n┗➤${namaUser}\n┏━➤nomer\n┗➤wa.me/${sender.split("@")[0]}\n┏━➤umur\n┗➤${umurUser}\n┏━➤waktu pendaftaran\n┗➤${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗➤NOTE : jangan sampai lupa save nomor admin IrwanS Dan Jangan Lupa Untuk Ketik ,rules sebelum memulai botnya ya😁`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script❌*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, date, time, client, getLevelingLevel, getLevelingXp, bani, premi, kyun, sender, reqXp, _registered, uangku) => { 
	return `
╭▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂╮
*┃❥─┯─IRWANS BOT─╝* ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
┃⛨╭╯
┃⛨┊✧ུ *Nama*: ${pushname}
┃⛨┊✧ུ *Prefix*: *${prefix}*
┃⛨┊✧ུ *Nomor*: wa.me/${sender.split("@")[0]}
┃⛨┊✧ུ *Uang mu* : Rp${uangku}
┃⛨┊✧ུ *Premium* : ${premi}
┃⛨┊✧ུ *XP* : ${getLevelingXp(sender)}/${reqXp}
┃⛨┊✧ུ *Level* : ${getLevelingLevel(sender)}
┃⛨┊✧ུ *User register* : ${_registered.length}
┗━━━━━━━━━━━━━━━━━
𝚃𝙷𝙽𝚇 𝚂𝚄𝙳𝙰𝙷 𝙼𝙴𝙽𝙶𝙶𝚄𝙽𝙰𝙺𝙰𝙽 𝙱𝙾𝚃
─────────────────┈ ❁۪۪
╭┈──────𝚁𝚄𝙻𝙴𝚂
╰─➤⚒𝚁𝚄𝙻𝙴𝚂📜
↣ *Spam : Auto Block!*
↣ *Beri Jeda 5 Detik!*
↣ *No Vc/Tlpn=Block!*
↣ *Note Bot Belum Jadi Sepenuhnya!*
↣ *Invite = Tanya Owner Bot!*

─────────────────┈ ❁۪
┏━━━━━━━━━━━━━━━━━━━┓
┃ ❀:ུ۪۪  *INFORMASI* ❀:ུ۪۪
┃╭─────────────────
┃│⊱❥ *${prefix}info*
┃│⊱❥ *${prefix}donasi*
┃│⊱❥ *${prefix}owner*
┃│⊱❥ *${prefix}rules*
┃│⊱❥ *${prefix}bahasa*
┃╰─────────────────
┃ ❀:ུ۪۪  *MAKER MENU* ❀:ུ۪۪
┃╭─────────────────
┃│⊱❥ *${prefix}sticker*
┃│⊱❥ *${prefix}kuncitext*
┃│⊱❥ *${prefix}textdaun*
┃│⊱❥ *${prefix}nulis*
┃│⊱❥ *${prefix}nulis2*
┃│⊱❥ *${prefix}silktext*
┃│⊱❥ *${prefix}makequote*
┃│⊱❥ *${prefix}toimg*
┃│⊱❥ *${prefix}ocr*
┃│⊱❥ *${prefix}galaxstyle*
┃│⊱❥ *${prefix}jokerlogo*
┃│⊱❥ *${prefix}toxic*
┃│⊱❥ *${prefix}trigger*
┃│⊱❥ *${prefix}gtav*
┃│⊱❥ *${prefix}gay*
┃│⊱❥ *${prefix}nigthbeach*
┃│⊱❥ *${prefix}laptop*
┃│⊱❥ *${prefix}linephoto*
┃│⊱❥ *${prefix}raindrop*
┃│⊱❥ *${prefix}sketch*
┃│⊱❥ *${prefix}wanted*
┃│⊱❥ *${prefix}shadow*
┃│⊱❥ *${prefix}cup*
┃│⊱❥ *${prefix}cup2*
┃│⊱❥ *${prefix}freefire*
┃│⊱❥ *${prefix}wolfmetal*
┃│⊱❥ *${prefix}harymaker*
┃│⊱❥ *${prefix}undermaker*
┃│⊱❥ *${prefix}carvedwood*
┃│⊱❥ *${prefix}sandsummer*
┃│⊱❥ *${prefix}neon*
┃│⊱❥ *${prefix}royalmaker*
┃│⊱❥ *${prefix}kuemaker*
┃│⊱❥ *${prefix}galaxywallpaper*
┃│⊱❥ *${prefix}airmaker*
┃│⊱❥ *${prefix}cloud*
┃│⊱❥ *${prefix}3dmaker*
┃│⊱❥ *${prefix}ulangtahunmaker*
┃│⊱❥ *${prefix}silverplaybutton*
┃│⊱❥ *${prefix}holomaker*
┃│⊱❥ *${prefix}neonligth*
┃│⊱❥ *${prefix}christmas*
┃│⊱❥ *${prefix}crossgun*
┃│⊱❥ *${prefix}bloodfrosted*
┃│⊱❥ *${prefix}hororblood*
┃│⊱❥ *${prefix}halloween*
┃│⊱❥ *${prefix}firework*
┃│⊱❥ *${prefix}glitch*
┃│⊱❥ *${prefix}blackpink*
┃│⊱❥ *${prefix}goldplay*
┃│⊱❥ *${prefix}hologram*
┃│⊱❥ *${prefix}textbyname*
┃│⊱❥ *${prefix}herrypoter*
┃│⊱❥ *${prefix}imagetext*
┃│⊱❥ *${prefix}greenneon*
┃│⊱❥ *${prefix}paper*
┃│⊱❥ *${prefix}darkneon*
┃│⊱❥ *${prefix}metallogo*
┃│⊱❥ *${prefix}avmaker*
┃│⊱❥ *${prefix}glit*
┃│⊱❥ *${prefix}temoji*
┃│⊱❥ *${prefix}lionmaker*
┃│⊱❥ *${prefix}marvelmaker*
┃│⊱❥ *${prefix}pornmaker*
┃│⊱❥ *${prefix}pubg2*
┃│⊱❥ *${prefix}googlesearch*
┃│⊱❥ *${prefix}mememaker*
┃│⊱❥ *${prefix}amongus*
┃│⊱❥ *${prefix}ktp*
┃│⊱❥ *${prefix}ytkomen*
┃│⊱❥ *${prefix}nuliscok*
┃│⊱❥ *${prefix}attp*
┃│⊱❥ *${prefix}ttp*
┃│⊱❥ *${prefix}nickff*
┃╰─────────────────
┃ ❀:ུ۪۪  *LIMIT MENU* ❀:ུ۪۪
┃╭─────────────────
┃│⊱❥ *${prefix}limit*
┃│⊱❥ *${prefix}buylimit*
┃│⊱❥ *${prefix}dompet*
┃╰─────────────────
┃ ❀:ུ۪۪  *NSFW MENU* ❀:ུ۪۪
┃╭─────────────────
┃│⊱❥ *${prefix}pokemon*
┃│⊱❥ *${prefix}anjing*
┃│⊱❥ *${prefix}nsfwloli*
┃│⊱❥ *${prefix}nsfwneko*
┃│⊱❥ *${prefix}solo*
┃│⊱❥ *${prefix}solo2*
┃│⊱❥ *${prefix}ahegao*
┃│⊱❥ *${prefix}solo3*
┃│⊱❥ *${prefix}pussy*
┃│⊱❥ *${prefix}nsfwtrap*
┃│⊱❥ *${prefix}nsfwpussy*
┃│⊱❥ *${prefix}nsfwyuri*
┃│⊱❥ *${prefix}ero*
┃│⊱❥ *${prefix}nsfwloli2*
┃│⊱❥ *${prefix}sideoppai*
┃│⊱❥ *${prefix}nsfwwaifu*
┃│⊱❥ *${prefix}ecchi*
┃│⊱❥ *${prefix}nekopoi* [judul]
┃╰─────────────────
┃ ❀:ུ۪۪  *GRUB MENU* ❀:ུ۪۪
┃╭─────────────────
┃│⊱❥ *${prefix}hidetag*
┃│⊱❥ *${prefix}del*
┃│⊱❥ *${prefix}grouplist*
┃│⊱❥ *${prefix}level*
┃│⊱❥ *${prefix}leaderboard*
┃│⊱❥ *${prefix}linkgc*
┃│⊱❥ *${prefix}tagall*
┃│⊱❥ *${prefix}setpp*
┃│⊱❥ *${prefix}add*
┃│⊱❥ *${prefix}kick*
┃│⊱❥ *${prefix}tagall*
┃│⊱❥ *${prefix}setname*
┃│⊱❥ *${prefix}setdesc*
┃│⊱❥ *${prefix}demote*
┃│⊱❥ *${prefix}promote*
┃│⊱❥ *${prefix}listadmin*
┃│⊱❥ *${prefix}tutuptime*
┃│⊱❥ *${prefix}group* [buka/tutup]
┃│⊱❥ *${prefix}leveling* [enable/disable]
┃│⊱❥ *${prefix}nsfw* [1/0]
┃│⊱❥ *${prefix}simih* [1/0]
┃│⊱❥ *${prefix}welcome* [1/0]
┃╰─────────────────
┃ ❀:ུ۪۪  *ANIME MENU* ❀:ུ۪۪
┃╭─────────────────
┃│⊱❥ *${prefix}animesaran*
┃│⊱❥ *${prefix}topanime*
┃│⊱❥ *${prefix}wait*
┃│⊱❥ *${prefix}wait2*
┃│⊱❥ *${prefix}animesaran2*
┃│⊱❥ *${prefix}husbu2*
┃│⊱❥ *${prefix}anime*
┃│⊱❥ *${prefix}wallpaperanime*
┃│⊱❥ *${prefix}trap*
┃│⊱❥ *${prefix}baka2*
┃│⊱❥ *${prefix}wallpapernime*
┃│⊱❥ *${prefix}animefanart*
┃│⊱❥ *${prefix}megumin*
┃│⊱❥ *${prefix}doujinimage*
┃│⊱❥ *${prefix}shinobu*
┃│⊱❥ *${prefix}baka*
┃│⊱❥ *${prefix}eroyuri*
┃│⊱❥ *${prefix}neko4*
┃│⊱❥ *${prefix}nino*
┃│⊱❥ *${prefix}itsuki*
┃│⊱❥ *${prefix}yotsuba*
┃│⊱❥ *${prefix}ichika*
┃│⊱❥ *${prefix}miku2*
┃│⊱❥ *${prefix}senku2*
┃│⊱❥ *${prefix}kurumi3*
┃│⊱❥ *${prefix}testhusbu*
┃│⊱❥ *${prefix}testwaifu*
┃│⊱❥ *${prefix}boboboi*
┃│⊱❥ *${prefix}happy*
┃│⊱❥ *${prefix}dance*
┃│⊱❥ *${prefix}animegirl*
┃│⊱❥ *${prefix}animeboy*
┃│⊱❥ *${prefix}kusonimesearch*
┃│⊱❥ *${prefix}neko3*
┃│⊱❥ *${prefix}smile*
┃│⊱❥ *${prefix}wallpaper*
┃│⊱❥ *${prefix}slapnime*
┃│⊱❥ *${prefix}shota*
┃│⊱❥ *${prefix}sagiri*
┃│⊱❥ *${prefix}femdom*
┃│⊱❥ *${prefix}waifukawai*
┃│⊱❥ *${prefix}kuni*
┃│⊱❥ *${prefix}nsfwloli3*
┃│⊱❥ *${prefix}kitsune*
┃│⊱❥ *${prefix}yuri*
┃│⊱❥ *${prefix}yaoi*
┃│⊱❥ *${prefix}wancak*
┃│⊱❥ *${prefix}quotesnime*
┃│⊱❥ *${prefix}waifu2*
┃│⊱❥ *${prefix}bj*
┃│⊱❥ *${prefix}ram*
┃│⊱❥ *${prefix}lomly*
┃│⊱❥ *${prefix}pictlolicon*
┃│⊱❥ *${prefix}bts*
┃│⊱❥ *${prefix}exo*
┃│⊱❥ *${prefix}pictneko*
┃│⊱❥ *${prefix}testwaifu*
┃│⊱❥ *${prefix}nsfw_avatar*
┃│⊱❥ *${prefix}senku*
┃│⊱❥ *${prefix}pictwaifu*
┃│⊱❥ *${prefix}kurumi2*
┃│⊱❥ *${prefix}nakanomiku*
┃│⊱❥ *${prefix}wibu*
┃│⊱❥ *${prefix}wibu2*
┃│⊱❥ *${prefix}boruto*
┃│⊱❥ *${prefix}rize*
┃│⊱❥ *${prefix}kaneki*
┃│⊱❥ *${prefix}kemonomimi*
┃│⊱❥ *${prefix}holo*
┃│⊱❥ *${prefix}naruto*
┃│⊱❥ *${prefix}elf*
┃│⊱❥ *${prefix}violet*
┃│⊱❥ *${prefix}amv*
┃│⊱❥ *${prefix}minato*
┃│⊱❥ *${prefix}gecg*
┃│⊱❥ *${prefix}avatar*
┃│⊱❥ *${prefix}miku*
┃│⊱❥ *${prefix}kurumi*
┃│⊱❥ *${prefix}elaina*
┃│⊱❥ *${prefix}hinata*
┃│⊱❥ *${prefix}sasuke*
┃│⊱❥ *${prefix}sakura*
┃│⊱❥ *${prefix}akura*
┃│⊱❥ *${prefix}itori*
┃│⊱❥ *${prefix}touka*
┃│⊱❥ *${prefix}rem*
┃│⊱❥ *${prefix}chika*
┃╰─────────────────
┃ ❀:ུ۪۪  *ISLAM MENU* ❀:ུ۪۪
┃╭─────────────────
┃│⊱❥ *${prefix}quran*
┃│⊱❥ *${prefix}quranaudio*
┃│⊱❥ *${prefix}listsurah*
┃│⊱❥ *${prefix}quotemuslim*
┃│⊱❥ *${prefix}asmaul*
┃│⊱❥ *${prefix}jadwalsholat*
┃│⊱❥ *${prefix}tahlil*
┃│⊱❥ *${prefix}kisahnabi*
┃│⊱❥ *${prefix}ayatkursi*
┃│⊱❥ *${prefix}hadits*
┃│⊱❥ *${prefix}surah* [surah teks|teks]
┃╰─────────────────
┃ ❀:ུ۪۪  *FUN MENU* ❀:ུ۪۪
┃╭─────────────────
┃│⊱❥ *${prefix}mining*
┃│⊱❥ *${prefix}playstore*
┃│⊱❥ *${prefix}bisakah*
┃│⊱❥ *${prefix}kapankah*
┃│⊱❥ *${prefix}apakah*
┃│⊱❥ *${prefix}seberapagay*
┃│⊱❥ *${prefix}rate*
┃│⊱❥ *${prefix}truth*
┃│⊱❥ *${prefix}dare*
┃│⊱❥ *${prefix}hobby*
┃│⊱❥ *${prefix}memeindo*
┃│⊱❥ *${prefix}darkjoke*
┃│⊱❥ *${prefix}cerpen*
┃│⊱❥ *${prefix}quotesimage*
┃│⊱❥ *${prefix}fitnah*
┃│⊱❥ *${prefix}pasangan*
┃│⊱❥ *${prefix}ntahlah*
┃│⊱❥ *${prefix}slap*
┃│⊱❥ *${prefix}hemkel*
┃│⊱❥ *${prefix}quotes2*
┃│⊱❥ *${prefix}katadoi*
┃│⊱❥ *${prefix}katakatadilan*
┃│⊱❥ *${prefix}cogan*
┃│⊱❥ *${prefix}cecan*
┃│⊱❥ *${prefix}qoutes*
┃│⊱❥ *${prefix}caklontong*
┃│⊱❥ *${prefix}jadian*
┃│⊱❥ *${prefix}jodoh*
┃│⊱❥ *${prefix}tebakumur*
┃│⊱❥ *${prefix}weton*
┃│⊱❥ *${prefix}family100*
┃│⊱❥ *${prefix}tebakin*
┃│⊱❥ *${prefix}tebakcok*
┃│⊱❥ *${prefix}cakcok*
┃│⊱❥ *${prefix}cersex*
┃│⊱❥ *${prefix}cerhor*
┃│⊱❥ *${prefix}imagesearch*
┃│⊱❥ *${prefix}kbbi*
┃│⊱❥ *${prefix}dadu*
┃│⊱❥ *${prefix}gombal*
┃│⊱❥ *${prefix}artinama*
┃│⊱❥ *${prefix}huruf1*
┃│⊱❥ *${prefix}alay*
┃│⊱❥ *${prefix}artinama2*
┃│⊱❥ *${prefix}faktaunik*
┃╰─────────────────
┃ ❀:ུ۪۪  *GENERAL MENU* ❀:ུ۪۪
┃╭─────────────────
┃│⊱❥ *${prefix}beritahoax*
┃│⊱❥ *${prefix}wiki*
┃│⊱❥ *${prefix}ssweb*
┃│⊱❥ *${prefix}cuaca*
┃│⊱❥ *${prefix}infogempa*
┃│⊱❥ *${prefix}covidglobal*
┃│⊱❥ *${prefix}ytstalk*
┃│⊱❥ *${prefix}igstalk*
┃│⊱❥ *${prefix}githubstalk*
┃│⊱❥ *${prefix}covid62*
┃│⊱❥ *${prefix}brainly*
┃│⊱❥ *${prefix}jadwaltv*
┃│⊱❥ *${prefix}ramalhp*
┃│⊱❥ *${prefix}nekojav*
┃│⊱❥ *${prefix}pinterest*
┃│⊱❥ *${prefix}pinterest2*
┃│⊱❥ *${prefix}googleimage*
┃│⊱❥ *${prefix}igdlw*
┃│⊱❥ *${prefix}ytmp3*
┃│⊱❥ *${prefix}ytmp4*
┃│⊱❥ *${prefix}play*
┃│⊱❥ *${prefix}tomp3*
┃│⊱❥ *${prefix}joox*
┃│⊱❥ *${prefix}jooxinfo*
┃│⊱❥ *${prefix}itxt*
┃│⊱❥ *${prefix}kawai*
┃│⊱❥ *${prefix}husbu*
┃│⊱❥ *${prefix}waifu2*
┃│⊱❥ *${prefix}waifu*
┃│⊱❥ *${prefix}loli*
┃│⊱❥ *${prefix}erodoujin*
┃│⊱❥ *${prefix}loli2*
┃│⊱❥ *${prefix}neko*
┃│⊱❥ *${prefix}neko2*
┃│⊱❥ *${prefix}nekonime*
┃│⊱❥ *${prefix}randomanime*
┃│⊱❥ *${prefix}randomhusbu*
┃│⊱❥ *${prefix}randomcyberspace*
┃│⊱❥ *${prefix}randomexo*
┃│⊱❥ *${prefix}blackpink*
┃│⊱❥ *${prefix}randomgame*
┃│⊱❥ *${prefix}randommountain*
┃│⊱❥ *${prefix}randomloli*
┃│⊱❥ *${prefix}programer*
┃│⊱❥ *${prefix}hartatahta*
┃│⊱❥ *${prefix}meme*
┃│⊱❥ *${prefix}memeindo*
┃│⊱❥ *${prefix}tts* 
┃│⊱❥ *${prefix}play*
┃│⊱❥ *${prefix}play2*
┃│⊱❥ *${prefix}lirik*
┃│⊱❥ *${prefix}ssweb*
┃│⊱❥ *${prefix}map*
┃│⊱❥ *${prefix}stalkig*
┃│⊱❥ *${prefix}afk*
┃│⊱❥ *${prefix}asupan* 
┃╰─────────────────
┃ ❀:ུ۪۪  *OWNER MENU* ❀:ུ۪۪
┃╭─────────────────
┃│⊱❥ *${prefix}setreply*
┃│⊱❥ *${prefix}groupinfo*
┃│⊱❥ *${prefix}tutuptime*
┃│⊱❥ *${prefix}bukatime*
┃│⊱❥ *${prefix}setprefix*
┃│⊱❥ *${prefix}ban*
┃│⊱❥ *${prefix}unban*
┃│⊱❥ *${prefix}antilinkgrup* [1/0]
┃│⊱❥ *${prefix}clearall*
┃│⊱❥ *${prefix}block*
┃│⊱❥ *${prefix}unblock*
┃│⊱❥ *${prefix}addbadword* [teks]
┃│⊱❥ *${prefix}listbadword*
┃│⊱❥ *${prefix}nobadword* [enable/disable]
┃│⊱❥ *${prefix}delbadword*
┃│⊱❥ *${prefix}listblock*
┃│⊱❥ *${prefix}leave*
┃│⊱❥ *${prefix}event* [1/0]
┃│⊱❥ *${prefix}clone*
┃│⊱❥ *${prefix}setppbot*
┃╰─────────────────
┃ *⊷>️ ©TQTO® <⊷️*
┃ *© MHANKBAR*
┃ *© IRWANS*
┃ *© RUI*
┃ *© ALL OTHER BOT CREATORS*
┗━━━━━━━━━━━━━━━━━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 Level Up 」*
┏𖥻ꦼꦽ➳ *Nama* : ${pushname}
┣𖥻ꦼꦽ➳ *Nomer* : wa.me/${sender.split("@")[0]}
┣𖥻ꦼꦽ➳ *Xp* : ${getLevelingXp(sender)}
┗𖥻ꦼꦽ➳ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf kak ${pushname} limit kamu hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`*「 LIMIT USER 」*
sisa limit anda : ${limitCounts}

🍁NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit🍁`
}

exports.satukos = () => {
	return`Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣𖥻ꦼꦽ➳ *Nama* : ${pushname}\n┣𖥻ꦼꦽ➳ *Nomer* : ${sender.split("@")[0]}\n┣𖥻ꦼꦽ➳ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil diaktifkan!\n\n➸ Username: ${pushname}\n➸ Alasan: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `「 AFK MODE 」\n\nINGFO!!! Orangnya lagi AFK, jangan diganggu!\n➸ Alasan: ${getReason}\n➸ Sejak: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `${pushname} telah kembali dari AFK! Welcome Tod :v`
}
