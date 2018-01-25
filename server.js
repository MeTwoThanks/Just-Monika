const Eris = require('eris');
 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 
bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content === 'Yuri') {                       // If the message content is "Yuri"
        bot.createMessage(msg.channel.id, 'Just Monika');  // Send a message in the same channel with "Just Monika"
    }
});

bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content === 'Sayori') {                       // If the message content is "Sayori"
        bot.createMessage(msg.channel.id, 'Just Monika');  // Send a message in the same channel with "Just Monika"
    }
});

bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content === 'Natsuki') {                       // If the message content is "Natsuki"
        bot.createMessage(msg.channel.id, 'Just Monika');  // Send a message in the same channel with "Just Monika"
    }
});
 
bot.connect();             
