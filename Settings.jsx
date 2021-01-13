const { React } = require('powercord/webpack');
const { TextInput, SwitchItem, Category, Button } = require('powercord/components/settings');

module.exports = ({ getSetting, updateSetting, toggleSetting, main }) => (
    
    <div>
        <TextInput
        note='ID used to login into Discord Developer App (After providing this ID you will have to refresh discord)'
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
                disabled={getSetting('clearMode', false)}
            >
                Line One
            </TextInput>
            <TextInput
                note='Second line of the Discord RPC.'
                defaultValue={getSetting('linetwo')}
                required={false}
                onChange={val => {updateSetting('linetwo', val); main.ete();}}
                disabled={getSetting('clearMode', false)}
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
                defaultValue={getSetting('largeimage', 'null')}
                required={false}
                onChange={val => {updateSetting('largeimage', val); main.ete();}}
                disabled={getSetting('clearMode', false)}
            >
                Large Image
            </TextInput>
            <TextInput
                defaultValue={getSetting('largeimagetext', 'null')}
                required={false}
                onChange={val => {updateSetting('largeimagetext', val); main.ete();}}
                disabled={getSetting('clearMode', false)}
            >
                Large Image Text
            </TextInput>
            <TextInput
                defaultValue={getSetting('smallimage', 'null')}
                required={false}
                onChange={val => {updateSetting('smallimage', val); main.ete();}}
                disabled={getSetting('clearMode', false)}
            >
                Small Image
            </TextInput>
            <TextInput
                defaultValue={getSetting('smallimagetext', 'null')}
                required={false}
                onChange={val => {updateSetting('smallimagetext', val); main.ete();}}
                disabled={getSetting('clearMode', false)}
            >
                Small Image Text
            </TextInput>
        </Category>
        <SwitchItem
        note='Timestamp for the Discord RPC.'
        value={getSetting('timestamp', false)}
        onChange={() => {toggleSetting('timestamp'); main.ete();}}
        disabled={getSetting('clearMode', false)}
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
        <Category
            name='SS Options'
            description={<span>Just something not very useful</span>}
            opened={getSetting('sOptions', false)}
            onChange={() => {toggleSetting('sOptions'); main.ete();}}
        >
        <SwitchItem
        note='Enables transparent mode for all controls except app name and images. (It disables all input options)'
        value={getSetting('clearMode', false)}
        onChange={() => {toggleSetting('clearMode'); main.ete();}}
        >
            Clear mode
        </SwitchItem>
        </Category>
    </div>
);