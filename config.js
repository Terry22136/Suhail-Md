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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_48_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDg3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgNixcbiAgICAgICAgMTQzLFxuICAgICAgICA1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODcsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICA3NixcbiAgICAgICAgMjMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk2LFxuICAgICAgICAzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDgyLFxuICAgICAgICA5OCxcbiAgICAgICAgMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY3LFxuICAgICAgICA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMXUxTmljaDRFTlRtOXJPYW1US2NBQkNQQzBwZnU2bUdMNmFNZ2ZwU0Vqdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc0NDc4NTkyOTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRTUwNDIwODg5NzNGOEE4NDM3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQxODUyNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0NzQ0Nzg1OTI5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E2NkI3QTdFMDExRDA3Qjc1RUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDE4NTI2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpKVFd2N0ZqVDd5VmFUNDExQW1iN3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjg2MWEyNzMtZjYwNS00MjFjLWE5Y2UtNGVmMjRhNjY4NzAwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDE1NSxcbiAgICAgIDIzMCxcbiAgICAgIDIwOCxcbiAgICAgIDY1LFxuICAgICAgMTAzLFxuICAgICAgMjEsXG4gICAgICAyMDksXG4gICAgICAxMjcsXG4gICAgICAyMTgsXG4gICAgICAyMDAsXG4gICAgICA0NSxcbiAgICAgIDEwNSxcbiAgICAgIDIwMSxcbiAgICAgIDE0NSxcbiAgICAgIDE1OSxcbiAgICAgIDE5NyxcbiAgICAgIDk3LFxuICAgICAgMTUxLFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgMjIwLFxuICAgICAgMjA0LFxuICAgICAgMTU5LFxuICAgICAgMTQyLFxuICAgICAgNzEsXG4gICAgICAxOSxcbiAgICAgIDIzNixcbiAgICAgIDIzNyxcbiAgICAgIDE4LFxuICAgICAgMTc4LFxuICAgICAgNzcsXG4gICAgICA3NCxcbiAgICAgIDE2NixcbiAgICAgIDYzLFxuICAgICAgOTgsXG4gICAgICAxMzEsXG4gICAgICAyMSxcbiAgICAgIDE1NixcbiAgICAgIDE4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCMVlMREcyMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3NDQ3ODU5Mjk0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJMb3JkXCIsXG4gICAgXCJsaWRcIjogXCIyODA0NDA0MDk3MzEwOTA6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbml4ZG9DRUphRzY3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjh4MmU2Q1Z5dmRIRXVEVEFkY20wL3oyMDNWOGRJdEVTMG9McmRqNVFheFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibElkdnV2QmdJMHo1WHRDMmtpWm9pVVU3d0NFamlwMnBacnhMMWJlTlFRMlBYU0YwV28xOFpHK3VIS3hFa215UHllOUFNbjdVVnJtYzNCcFVwaXo3Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidFJyYyttcnVhUFhKRXE1TXRuUzNycnczOFdDaE4xYkJDOG1jcWZvRDZaMTFHQmN0K2dQK1pxV2duQlZ6NGp1SDV0ODJBUGV3Nm1KR2FDcXE1emZaQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDQ3NDQ3ODU5Mjk0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDE4NTIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQm9LXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCb0suanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCNGt6M0Vzd1paZ3lkTnB3UjNkbENnWkZ6SmdYc2dhTGJuWnpWNW5jVTdRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcyNjc1NzczNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDE4NTIyNjAyXCJ9Igp9"  // PUT your SESSION_ID 


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
