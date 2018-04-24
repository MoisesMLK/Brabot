const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NDM4MzgyMjU3MjA0NjI1NDE4.DcEC-A._5AcQlh8yi9fgP8wxF2iaZWq514');

bot.on('message', message => {
    if (message.content.startsWith(".brabo")){
        randomNumber = Math.floor(Math.random() * (1 - 1) + 1);
        if(randomNumber == 1){
            message.reply("Va te toma no cú");
        }
    }

    if (message.content.startsWith(".bomdia")){
        randomNumber = Math.floor(Math.random() * (1 - 1) + 1);
        if(randomNumber == 1){
            message.reply("https://www.youtube.com/watch?v=J4CaOMAtFxg");
        }
    }

    if (message.content.startsWith(".unimed")){
        randomNumber = Math.floor(Math.random() * (1 - 1) + 1);
        if(randomNumber == 1){
            message.reply("TA NO SEU CU FILHA DA PUTA");
        }
    }
});

bot.login(process.env.BOAT_TOKEN);
