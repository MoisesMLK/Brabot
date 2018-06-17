import { GuildMember } from 'discord.js';

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.fetchUser(id, [cache])
bot.on('message', message => {
    if (message.content.startsWith(".brabo")){
        randomNumber = Math.floor(Math.random() * (1 - 1) + 1);
        if(randomNumber == 1){
            message.reply("Va te toma no cú");
        }
    }

    fala1 = "./fala/fala 1.jpeg"; fala2 = "./fala/fala 2.jpeg"; fala3 = "./fala/fala 3.jpeg"; fala4 = "./fala/fala 4.jpeg"; fala5 = "./fala/fala 5.jpeg"; fala6 = "./fala/fala 6.jpeg"; fala7 = "./fala/fala 7.jpeg"; fala8 = "./fala/fala 8.jpeg"; fala9 = "./fala/fala 9.jpeg"; fala10 = "./fala/fala 10.jpeg"; fala11 = "./fala/fala 11.jpeg"; fala12 = "./fala/fala 12.jpeg"; fala13 = "./fala/fala 13.jpeg"; fala14 = "./fala/fala 14.jpeg"; fala15 = "./fala/fala 15.jpeg"; fala16 = "./fala/fala 16.jpeg"; fala17 = "./fala/fala 17.jpeg"; fala18 = "./fala/fala 18.jpeg"; fala19 = "./fala/fala 19.jpeg"; fala20 = "./fala/fala 20.jpeg"; fala21 = "./fala/fala 21.jpeg"; fala22 = "./fala/fala 22.jpeg"; fala23 = "./fala/fala 23.jpeg";
    if (message.content.startsWith(".bomdia")){
        number = 23
        var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.reply ({ files: [fala1] }); break;
            case 2: message.reply ({ files: [fala2] }); break;
            case 3: message.reply ({ files: [fala3] }); break;
            case 4: message.reply ({ files: [fala4] }); break;
            case 5: message.reply ({ files: [fala5] }); break;
            case 6: message.reply ({ files: [fala6] }); break;
            case 7: message.reply ({ files: [fala7] }); break;
            case 8: message.reply ({ files: [fala8] }); break;
            case 9: message.reply ({ files: [fala9] }); break;
            case 10: message.reply ({ files: [fala10] }); break;
            case 11: message.reply ({ files: [fala11] }); break;
            case 12: message.reply ({ files: [fala12] }); break;
            case 13: message.reply ({ files: [fala13] }); break;
            case 14: message.reply ({ files: [fala14] }); break;
            case 15: message.reply ({ files: [fala15] }); break;
            case 16: message.reply ({ files: [fala16] }); break;
            case 17: message.reply ({ files: [fala17] }); break;
            case 18: message.reply ({ files: [fala18] }); break;
            case 19: message.reply ({ files: [fala19] }); break;
            case 20: message.reply ({ files: [fala20] }); break;
            case 21: message.reply ({ files: [fala21] }); break;
            case 22: message.reply ({ files: [fala22] }); break;
            case 23: message.reply ({ files: [fala23] }); break;
        

        }
        
    }

    if (message.content.startsWith(".unimed")){
        randomNumber = Math.floor(Math.random() * (1 - 1) + 1);
        if(randomNumber == 1){
            message.reply("TA NO SEU CU FILHA DA PUTA");
        }
    }

    if (message.content.startsWith('.godsplan')){
        randomNumber = Math.floor(Math.random() * (1 - 1) + 1);
        if (randomNumber == 1){
            message.reply("God's Plan")
        }
    }

});


bot.login(process.env.BOT_TOKEN);
