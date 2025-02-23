const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remove')
        .setDescription('Removes from the leaderboard'),
    async execute(interaction) {
        await interaction.reply('Event has been removed')
    },
};
