const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add')
        .setDescription('adds to the leaderboard'),
    async execute(interaction) {
        await interaction.reply('Event has been added')
    },
};


