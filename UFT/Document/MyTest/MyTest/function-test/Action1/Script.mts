RegisterUserFunc "WebEdit","Set","SetValue"
RegisterUserFunc "Image","Click","ObjClick"
RegisterUserFunc "WebList","Select","WebListSelect"

'RegisterUserFunc "WebRadioGroup","Select","ObjSelect"
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Set "jojo" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password")_;_script infofile_;_ZIP::ssf56.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").Set "bean" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In")_;_script infofile_;_ZIP::ssf57.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Click @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebRadioGroup("tripType")_;_script infofile_;_ZIP::ssf58.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebRadioGroup("tripType").Select "oneway" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("passCount")_;_script infofile_;_ZIP::ssf59.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("passCount").Select "2"
blnStatus=Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromPort").Select "Frankfurt"
MsgBox blnStatus
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromMonth").Select "Feb" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromDay")_;_script infofile_;_ZIP::ssf62.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("fromDay").Select "10" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toPort")_;_script infofile_;_ZIP::ssf63.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toPort").Select "New York" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toMonth")_;_script infofile_;_ZIP::ssf64.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("toMonth").Select "Feb" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebRadioGroup("servClass")_;_script infofile_;_ZIP::ssf65.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebRadioGroup("servClass").Select "Business" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("airline")_;_script infofile_;_ZIP::ssf66.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").WebList("airline").Select "Blue Skies Airlines" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Image("findFlights")_;_script infofile_;_ZIP::ssf67.xml_;_
Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Image("findFlights").Click

'RegisterUserFunc "Page","Sync","xSync"
'blnStatus = Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Sync
'MsgBox blnStatus





























