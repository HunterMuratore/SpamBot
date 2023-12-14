const { SlashCommandBuilder } = require('discord.js');
const stopCommand = require('./stop');

let intervalId;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('start')
        .setDescription('sends messages every 2 seconds'),
    async execute(interaction) {
        let counter = 0;
        const interval = 2000; // 2 seconds

        const sendMessage = () => {
            interaction.reply(counter++);
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
