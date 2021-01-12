const { React } = require('powercord/webpack');
const { TextInput, SwitchItem, Category, Button } = require('powercord/components/settings');

module.exports = ({ getSetting, updateSetting, toggleSetting, main }) => (
    
    <div>
        <TextInput
        note='ID used to jump start'
        defaultValue={getSetting('IDset', '1111')}
        required={true}
        onChange={val => {updateSetting('IDset', val); 
            main.ete();
        }}
        >
            Client ID
        </TextInput>
        <Category
            name='Text Settings'
            description={<span>Settings for the discord RPC text.</span>}
            opened={getSetting('textSettings', false)}
            onChange={() => {toggleSetting('textSettings'); main.ete();}}
        >
            <TextInput
                note='First line of the Discord RPC.'
                defaultValue={getSetting('lineone', 'Hello!')}
                required={true}
                onChange={val => {updateSetting('lineone', val); main.ete();}}
            >
                Line One
            </TextInput>
            <TextInput
                note='Second line of the Discord RPC.'
                defaultValue={getSetting('linetwo')}
                required={false}
                onChange={val => {updateSetting('linetwo', val); main.ete();}}
            >
                Line Two
            </TextInput>
        </Category>
        <Category
        name='Image Settings'
        description={<span>Settings for the discord RPC images.</span>}
        opened={getSetting('imageSettings', false)}
        onChange={() => {toggleSetting('imageSettings'); main.ete();}}
        >
            <TextInput
                note='Large image shown on the Discord RPC.'
                defaultValue={getSetting('largeimage', 'null')}
                required={false}
                onChange={val => {updateSetting('largeimage', val); main.ete();}}
            >
                Large Image
            </TextInput>
            <TextInput
                note='Text shown when hovering over the large image.'
                defaultValue={getSetting('largeimagetext', 'null')}
                required={false}
                onChange={val => {updateSetting('largeimagetext', val); main.ete();}}
            >
                Large Image Text
            </TextInput>
            <TextInput
                note='Small image shown on the Discord RPC.'
                defaultValue={getSetting('smallimage', 'null')}
                required={false}
                onChange={val => {updateSetting('smallimage', val); main.ete();}}
            >
                Small Image
            </TextInput>
            <TextInput
                note='Text shown when hovering over the small image.'
                defaultValue={getSetting('smallimagetext', 'null')}
                required={false}
                onChange={val => {updateSetting('smallimagetext', val); main.ete();}}
            >
                Small Image Text
            </TextInput>
        </Category>
        <SwitchItem
        note='Timestamp for the Discord RPC.'
        value={getSetting('timestamp', false)}
        onChange={() => {toggleSetting('timestamp'); main.ete();}}
        >
            Timestamp
        </SwitchItem>
        <SwitchItem
        note='Enable/Disable the commands for controlling the Discord RPC'
        value={getSetting('commandsEnabled', false)}
        onChange={()=> {toggleSetting('commandsEnabled'); main.ete();}}
        >
            Commands
        </SwitchItem>
    </div>
);