const { Plugin } = require('powercord/entities');

const Settings = require('./Settings');

module.exports = class DiscordRPC extends Plugin {
    startPlugin() {
        powercord.api.settings.registerSettings(this.entityID, {
            category: this.entityID,
            label: 'DiscordRPC',
            render: Settings
        });

        powercord.api.commands.registerCommand({
            command: 'discordrpc',
            description: 'Set this thing man',
            usage: 'hi',
            executor: this.handleCommand.bind(this),
            autocomplete: this.handleAutocomplete.bind(this)
        });
    }

    pluginWillUnload () {
        powercord.api.settings.unregisterSettings(this.entityID);
        powercord.api.commands.unregisterCommand('discordrpc');
    }


};