const { Telegraf } = require('telegraf')

const bot = new Telegraf('5092393875:AAEJ1pphECAurEYTqdF4gASjXc7Fg0OeaVg')


bot.start((ctx)=>{
    ctx.reply(`Welcome ${ctx.message.from.username} to Metacircle Bot! created by @Metacircle.`)
})

bot.command('website', (ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id, 'https://metacirclecoin.com',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Open Website", url: "https://metacirclecoin.com"}]
            ]
        }
    })
})

bot.command('price', (ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id, 'Price: https://poocoin.app/tokens/0x35f6fcdf952d24c09c74919ad9eba307b046de16')
})

bot.command('contract', (ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id, 'Contract: 0x35f6fcdf952d24c09c74919ad9eba307b046de16')
})

bot.command('test', (ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id, 'test')
})

bot.launch()
