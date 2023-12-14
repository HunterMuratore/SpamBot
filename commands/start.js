const { SlashCommandBuilder } = require('discord.js');
const stopCommand = require('./stop');
const { intervalId, sendingMessages } = require('../index');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('start')
        .setDescription('sends messages every 2 seconds'),
    async execute(interaction) {
        if (sendingMessages) {
            interaction.reply('Messages are already being sent. Use /stop to stop them.');
            return;
        }

        sendingMessages = true;

        let counter = 0;
        const interval = 2000; // 2 seconds

        const sendMessage = () => {
            interaction.channel.send(`${counter++}`);
        };

        sendMessage();

        // Interval to send messages every 2 seconds indefinitely
        intervalId = setInterval(() => {
            sendMessage();
        }, interval);
    },
};

// Expose the stop command
module.exports.stop = stopCommand;
