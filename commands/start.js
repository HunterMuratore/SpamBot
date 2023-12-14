const { SlashCommandBuilder } = require('discord.js');
const stopCommand = require('./stop'); // Import the stop command

let intervalId; // Declare the intervalId outside the execute function

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

        // Send the first message immediately
        sendMessage();

        // Set up an interval to send messages every 2 seconds indefinitely
        intervalId = setInterval(() => {
            sendMessage();
        }, interval);
    },
};

// Expose the stop command
module.exports.stop = stopCommand;
