const { React } = require('powercord/webpack');
const { TextInput, SwitchItem, Category, Button, RadioGroup } = require('powercord/components/settings');

module.exports = ({ getSetting, updateSetting, toggleSetting, main }) => (
    
    <div>
        <TextInput
        note='ID used to login into Discord Developer App (After providing this ID you will have to refresh discord)'
        defaultValue={getSetting('IDset', '<Paste your ID here>')}
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
                defaultValue={getSetting('linetwo', 'I am cool.')}
                required={false}
                onChange={val => {updateSetting('linetwo', val); main.ete();}}
                disabled={getSetting('clearMode', false)}
            >
                Line Two
            </TextInput>
        </Category>
        <Category
        name='Image Settings'
        description={<span>Settings for the discord RPC images. (Change to 'null' for nothing)</span>}
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
        <RadioGroup
        options={[
          { name: "Turn of completly", value: "off" },
          { name: "Show timestamp on RPC", value: "on" },
          { name: "Timestamp with advanced options", value: "adv" }
        ]}
        value={getSetting("timestamp", "off")}
        onChange={(e) => {updateSetting("timestamp", e.value); main.ete();}}
        disabled={getSetting('clearMode', false)}
        >Timestamp</RadioGroup>
        <Category
            name='Advanced timestamp options'
            description={<span>Here you can set things like 'remaining' and set custom time <b style={{ color: 'rgb(240, 71, 71)' }}>NOTE:</b> You can't open this category unless you will check the option above.</span>}
            opened={getSetting('timestampSettings', false)}
            onChange={() => {toggleSetting('timestampSettings'); main.ete();}}
            disabled={getSetting('timestampAdv', true)}
        >
            <TextInput
            note={<span>Value in milliseconds. Here you can enter 'how long' have you been in game.&nbsp; <b style={{ color: 'rgb(26, 122, 255)' }}>By entering a negative number you will set the time for the future, which will result in a time equal to '00: 00' until it reaches the value you set.</b></span>}
            defaultValue={getSetting('startTimestamp', 0)}
            required={false}
            onChange={val => {updateSetting('startTimestamp', val); main.ete();}}
            >
            Start Timestamp
            </TextInput>
            <TextInput
            note="Value in milliseconds. It determines after what time the game ends. Without being provided time will be counted from zero. If you don't want to use this option you want it to be blank."
            defaultValue={getSetting('endTimestamp')}
            required={false}
            onChange={val => {updateSetting('endTimestamp', val); main.ete();}}
            >
            End Timestamp
            </TextInput>
        </Category>
        <SwitchItem
        note="Enable/Disable the commands for controlling the Discord RPC ('.drpc')"
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