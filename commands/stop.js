const { SlashCommandBuilder } = require('discord.js');
const { intervalId, sendingMessages } = require('../index');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('stops sending messages'),
    execute(interaction) {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            sendingMessages = false;
            interaction.reply('Spamming stopped.');
        } else {
            interaction.reply('Bot is not currently spamming.');
        }
    },
};
