let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let teks = `
Kebijakan Privasi, Syarat Ketentuan dan Peraturan Raull Bot

Kebijakan Privasi
1. Raul Botz tidak akan merekam data riwayat chat user.
2. Raul Botz tidak akan menyebarkan nomor users.
3. Raul Botz tidak akan menyimpan media yang dikirimkan oleh users.
4. Raul Botz tidak akan menyalah gunakan data data users.
5. Owner Raul Botz berhak melihat data riwayat chat users.
6. Owner Raul Botz berhak melihat status users.
7. Owner Raul Botz dapat melihat riwayat chat, dan media yang dikirimkan users.

Peraturan Raul Botz
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

Syarat Ketentuan Raul Botz
1. Bot akan keluar dari group apabila sudah waktunya keluar.
2. Raul Botz dapan mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. Raul Botz *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. Raul Botz akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. Raul Botz bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

- LanXzy
- PutraaXD

Peraturan: 1 Februari 2022
`.trim()
    conn.send2ButtonLoc(m.chat, await(await fetch(image)).buffer(), teks, watermark, 'Menu', '.menu', 'Owner', '.owner', m)
}
handler.help = ['peraturan']
handler.command = /^(snk|syarat|peraturan|rules)$/i
handler.tags = ['main']
module.exports = handler
