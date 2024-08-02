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


global.SESSION_ID = process.env.SESSION_ID "SUHAIL_10_48_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDgxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA2NixcbiAgICAgICAgODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA3LFxuICAgICAgICAzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk0LFxuICAgICAgICA0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MixcbiAgICAgICAgNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDkxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM3LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInl5SFdFbG13M0IyWTZKVUI0aWRhV2xXSnp5WGcxeFExSmR6cXVGWGpIMUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZWOEY5NlZTVFdxd2p4TlhHYy1nRkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWNiZjNmNWUtZTM0ZC00MDU3LTk5NDItZWUwYWZlY2MwZjE1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NixcbiAgICAgIDEyOSxcbiAgICAgIDEwLFxuICAgICAgMjMxLFxuICAgICAgNzUsXG4gICAgICAxNjQsXG4gICAgICAxODYsXG4gICAgICAxNjgsXG4gICAgICAyMSxcbiAgICAgIDE4OCxcbiAgICAgIDg2LFxuICAgICAgMTE0LFxuICAgICAgMTg4LFxuICAgICAgMjQwLFxuICAgICAgNDcsXG4gICAgICA1MyxcbiAgICAgIDQwLFxuICAgICAgMTAsXG4gICAgICAyMDcsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgODIsXG4gICAgICAyMTcsXG4gICAgICAxNDQsXG4gICAgICA0NyxcbiAgICAgIDMsXG4gICAgICAxNjEsXG4gICAgICA5MyxcbiAgICAgIDIzOCxcbiAgICAgIDIwLFxuICAgICAgMTkwLFxuICAgICAgMjQzLFxuICAgICAgNzUsXG4gICAgICA3OCxcbiAgICAgIDIyMCxcbiAgICAgIDE0NCxcbiAgICAgIDIwOSxcbiAgICAgIDEyOSxcbiAgICAgIDE2NSxcbiAgICAgIDIzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIySFJIV0Y2R1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3NDAwMDcwMjM0OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwOTI0Njg2NDAxOTYzNjo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09TMDhLQUVFT0R5c3JVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRVVFSVBlVmpLMFVkVmJsbENaSi9oZnBDaHY2dU1IQkhNSU9hVDcwTUlXdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqTnNNSEhyR0NJZzl4UnJyMndOcmNQRHFWZWUyczRjVHhJbHk0MHlWTk5Vc1RZb0lUTWE1Y2pqbzZ4YUlNMDBBWWllSXNoU3ljcGpwWTRHSFJPanVBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUY0R0RjBPMUs1ZzlWSHBvaE44QS9Jd2liR09jbDR4VHIybWl2azFQM3p6YVN6Uko4L0lTYnpSaWNYZ3FnSVpCOHVPc2dKdEN3RVlKdXF1Nk9iMERpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDc0MDAwNzAyMzQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTk1NjgzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
