import TeleBot from 'telebot'
import { config } from 'dotenv'
import { Recipe } from './lib/Calculator'
config()

// Create the bot instance
const bot = new TeleBot(process.env.TELEGRAM_TOKEN as string)

// Command handler
bot.on(['/water'], async (msg: any) => {
  console.log(msg)
  const recipe = new Recipe(1000,0.6,0.2,0.2)
  await msg.reply.text(`Amount of water: ${recipe.water}`)
})

bot.start()