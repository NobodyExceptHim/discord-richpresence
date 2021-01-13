const { Plugin } = require('powercord/entities');
const { React, getModule } = require('powercord/webpack');
const { remote } = require('electron');
const Settings = require('./Settings');

const RPC = require("discord-rpc")
const rpc = new RPC.Client({
    transport: "ipc"
});




module.exports = class DiscordRPC extends Plugin {
    startPlugin() {
        powercord.api.settings.registerSettings(this.entityID, {
            category: this.entityID,
            label: 'DiscordRPC',
            render: (props) => React.createElement(Settings, {
                ...props,
                main: this
              })
        });

        rpc.login({
            clientId: this.settings.get('IDset', '790602350612054026')
        });

        const SetInfo = {
            'timestamp': new Date().getTime(),
            'lineone': 'Hello!',
            'linetwo': 'I am cool.'

        }
        var tst = 0
        const setActivity = async () => {
            if (this.settings.get('timestamp', false) == false) {
                tst = null
            } else if (this.settings.get('timestamp', false) == true) {
                tst = SetInfo.timestamp
            } 
            switch(this.settings.get('clearMode', false)){
                case false: {
                    rpc.setActivity({
                        details: this.settings.get('lineone', SetInfo.lineone),
                        state: this.settings.get('linetwo', SetInfo.linetwo),
                        startTimestamp: tst,
                        largeImageKey: this.settings.get('largeimage', null),
                        largeImageText: this.settings.get('largeimagetext', null),
                        smallImageKey: this.settings.get('smallimage', null),
                        smallImageText: this.settings.get('smallimagetext', null)
                    });
                    break;
                }
                case true: {
                    rpc.setActivity({
                        details: '  ',
                        state: '  ',
                    });
                    break;
                }
            }
        }

        this.mikoma = async () => {

        }


        rpc.on("ready", () => {
            setActivity();

            this.ete = async () => {
                setActivity();
            }
        });
        
    }

    pluginWillUnload () {
        powercord.api.settings.unregisterSettings(this.entityID);
        powercord.api.commands.unregisterCommand('discordrpc');
    }
    

};
