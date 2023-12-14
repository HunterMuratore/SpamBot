const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('stops sending messages'),
    execute(interaction) {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            interaction.reply('Spamming stopped.');
        } else {
            interaction.reply('Bot is not currently spamming.');
        }
    },
};
