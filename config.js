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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ Terry sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "447482644580";




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


global.SESSION_ID = process.env.SESSION_ID "SUHAIL_08_23_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5LFxuICAgICAgICAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDU1LFxuICAgICAgICA4MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDQxLFxuICAgICAgICA3NCxcbiAgICAgICAgMixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxODksXG4gICAgICAgIDQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NSxcbiAgICAgICAgNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc2LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE1LFxuICAgICAgICA3MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDk2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgODUsXG4gICAgICAgIDExLFxuICAgICAgICA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMixcbiAgICAgICAgMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxODYsXG4gICAgICAgIDU3LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjY3M0TWVpRm1DRFVKUmN6c0sxaEt0amI4NytFaDlxZmg5WENZTUNsWkhZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItQzV5ZEYtV1E3dXMtczRqR2trQzJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE4ZGQxM2Q5LTcyYTEtNGNiZS04MmZkLTVmYjNiMjU1MzBjOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICA1MSxcbiAgICAgIDExNixcbiAgICAgIDExNCxcbiAgICAgIDM5LFxuICAgICAgMTgwLFxuICAgICAgOTMsXG4gICAgICAzMyxcbiAgICAgIDIxNCxcbiAgICAgIDE4MixcbiAgICAgIDQ0LFxuICAgICAgMTIxLFxuICAgICAgMjI5LFxuICAgICAgMjQ2LFxuICAgICAgNjAsXG4gICAgICAyNDMsXG4gICAgICAzOCxcbiAgICAgIDExOCxcbiAgICAgIDc3LFxuICAgICAgMjEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDIzLFxuICAgICAgMTEyLFxuICAgICAgMTQsXG4gICAgICA5NCxcbiAgICAgIDIxMyxcbiAgICAgIDYzLFxuICAgICAgMTg4LFxuICAgICAgMTM1LFxuICAgICAgMTkwLFxuICAgICAgMTA4LFxuICAgICAgMTgwLFxuICAgICAgMTU2LFxuICAgICAgNDgsXG4gICAgICAxNzUsXG4gICAgICAxOTMsXG4gICAgICA5NixcbiAgICAgIDE2MCxcbiAgICAgIDEzOCxcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLNUVaQ0I1VFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3NDU0NDU0MzczOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMDUxNDc1NDAyOTg1OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlRFNVBzRkVPWFEvYlFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwY3lPQzdaamIzbzBPQTczOE9ZQnRsa2JvalVGOEdhdmtKSk54NFF4MlZNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJZNUNrSWRMeEhEb2diTFR1VGFBbVRjSWFSdkVNekJEZXBFeStDYlg0WlYzTE5XZ3BLUHBsTjkyMFZETzBvL1NRc3psdzFLTjJtSmZYcjhDUStPQkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjA3OUxpRVRSWHA5UHd0U0lQYVFQWmU4ZVFmQ1NFb0x2ZFdtKzVnYXBKQ2tzV29CV2VRZyttM0xCd1JLNGx0SmpzVzhsRzRJN0dFYWJpSWZVYVlPS0F3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ0NzQ1NDQ1NDM3MzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzIyOTg1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2VkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHZWQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyOXdyY1JDNjZoTHRhNDR2QmM1ejdRb3g0NG1RcS9wVG0wVmU4elVWZHFZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MDE3NzQxNjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQ4NjU0MzgyNVwifSIKfQ=="  // PUT your SESSION_ID 


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
