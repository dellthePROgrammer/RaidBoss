require('dotenv').config();
const { SlashCommandBuilder } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('add')
        .setDescription('adds to the leaderboard'),
    async execute(interaction) {
        await interaction.reply('Event has been added')
    },
};


