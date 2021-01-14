const { Plugin } = require('powercord/entities');
const { React, getModule } = require('powercord/webpack');
const { remote } = require('electron');
const Settings = require('./components/Settings');

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

        powercord.api.commands.registerCommand({
            command: 'drpc',
            description: 'Set some things to fool your friends.',
            usage: '{c}',
            
        })

        rpc.login({
            clientId: this.settings.get('IDset', '790602350612054026')
        });

        const SetInfo = {
            'timestamp': new Date().getTime(),
            'lineone': 'Hello!',
            'linetwo': 'I am cool.'

        }
        var tst = 0, etst = 0
        const setActivity = async () => {
            switch (this.settings.get('timestamp', 'iff')){
                case 'off': {
                    tst = null
                    this.settings.set('timestampAdv', true)
                    this.settings.set('timestampSettings', false)
                    break;
                } 
                case 'on': {
                    tst = SetInfo.timestamp
                    this.settings.set('timestampAdv', true)
                    this.settings.set('timestampSettings', false)
                    break;
                }
                case 'adv': {
                    tst = SetInfo.timestamp - parseInt(this.settings.get('startTimestamp', 0), 10)
                    etst = SetInfo.timestamp + parseInt(this.settings.get('endTimestamp', 0), 10)
                    this.settings.set('timestampAdv', false)
                    break;
                }
            }

            switch(this.settings.get('clearMode', false)){
                case false: {
                    if (this.settings.get('endTimestamp', 0) < 1){
                    rpc.setActivity({
                        details: this.settings.get('lineone', SetInfo.lineone),
                        state: this.settings.get('linetwo', SetInfo.linetwo),
                        startTimestamp: tst,
                        largeImageKey: this.settings.get('largeimage', null),
                        largeImageText: this.settings.get('largeimagetext', null),
                        smallImageKey: this.settings.get('smallimage', '  '),
                        smallImageText: this.settings.get('smallimagetext', '  ')
                    });
                }
                    else {
                        rpc.setActivity({
                            details: this.settings.get('lineone', SetInfo.lineone),
                            state: this.settings.get('linetwo', SetInfo.linetwo),
                            startTimestamp: tst,
                            endTimestamp: etst,
                            largeImageKey: this.settings.get('largeimage', null),
                            largeImageText: this.settings.get('largeimagetext', null),
                            smallImageKey: this.settings.get('smallimage', '  '),
                            smallImageText: this.settings.get('smallimagetext', '  ')
                        });
                    }
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
