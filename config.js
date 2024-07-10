const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_59_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDczLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU5LFxuICAgICAgICA3MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgNTksXG4gICAgICAgIDg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTExLFxuICAgICAgICA4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDMyLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDcwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyLFxuICAgICAgICA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYyLFxuICAgICAgICA5LFxuICAgICAgICA1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDYsXG4gICAgICAgIDcyLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyYWJocDJSNHVhbUlMK1VHb2F3eU1XMU03N1E2aFIzQWhjM0xDVnJ2TkNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzY21wNzVReVJZMnV6bmF6NVFONmR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjY1NjM5MWNjLWExMTAtNDk1My05NTllLTQzZWJkNzM4ZjYzNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDE5LFxuICAgICAgMTU5LFxuICAgICAgMTE1LFxuICAgICAgMTQyLFxuICAgICAgMjI0LFxuICAgICAgNjQsXG4gICAgICAyNyxcbiAgICAgIDMxLFxuICAgICAgMTEyLFxuICAgICAgMjIyLFxuICAgICAgOTQsXG4gICAgICAxNzAsXG4gICAgICA0OCxcbiAgICAgIDEyMCxcbiAgICAgIDEyNSxcbiAgICAgIDI0OSxcbiAgICAgIDI3LFxuICAgICAgMTI4LFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NSxcbiAgICAgIDE5OCxcbiAgICAgIDEwOCxcbiAgICAgIDQwLFxuICAgICAgMTAyLFxuICAgICAgMTgzLFxuICAgICAgMjQ1LFxuICAgICAgNjEsXG4gICAgICA0NixcbiAgICAgIDcyLFxuICAgICAgNzQsXG4gICAgICA3MyxcbiAgICAgIDQ3LFxuICAgICAgNDIsXG4gICAgICAxODksXG4gICAgICA0OCxcbiAgICAgIDEsXG4gICAgICAyMzgsXG4gICAgICA5MyxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjg0RzU4RVg2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0NDc0ODI2NDQ1ODA6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU1MTYwNTE2NjUzMDc0Ojg4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05ybzBjTUdFTnYrdUxRR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNEdSc0ZsNXIyTktheEQvSk8wU2ZENHdqdmxKc0s0R2xyS01URDUyb2tHcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoLzNpeDZ3V0J1QmU0TzRoN25telBGbm9vZnkvLzFnREU4ampKSmNCcGljOGliNkdRS3lET3hoamFUUnJjbXNBNHR4TWJ3eFhSZ1lTN0xEOGxERWpDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyUExidWF1eWtETDhvSWd0cHNkZ2wzUFBTZENWL0JsaUN4aXVXMVp4S0NOQ1duTjVxa2VaamhFdnpHTkNPcG1GQyt0VWg0RW8zemVYNkRtSmx6N1FEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDc0ODI2NDQ1ODA6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1OTgzNjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLUE5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtQTi5qc29uIjogIntcImtleURhdGFcIjpcImJuaWwrZXJiZlgvT0lONThsc0NQWDAvOFNyVVFtRDZBNDNKWFE1MUhwSHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc1MjQ2MjQyNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNDU1NTY2NzExXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "TERRY",
  packname: process.env.PACK_NAME || "TERRY",
  botname : process.env.BOT_NAME  || "TERRY-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "TERRY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
