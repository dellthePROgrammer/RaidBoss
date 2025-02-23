const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('Displays the leaderboard'),
    async execute(interaction) {
        await interaction.reply('Leaderboard')
    },
};
