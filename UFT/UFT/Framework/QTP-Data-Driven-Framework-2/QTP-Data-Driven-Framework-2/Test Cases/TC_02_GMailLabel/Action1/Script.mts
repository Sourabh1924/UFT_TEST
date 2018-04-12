'Get the Test Case Name that will be used in fnGetDataTableValue function
sTestCaseName = Environment.Value("TestName")

'Open Gmail
sUrl = fnGetDataTableValue("URL")
SystemUtil.Run "iexplore.exe", sUrl
Browser("Gmail").Page("Gmail").Sync

'Login to GMail
Browser("Gmail").Page("Gmail").WebEdit("UserName").fnSetValue "UserName"
Browser("Gmail").Page("Gmail").WebEdit("Password").fnSetValue "Password"
Browser("Gmail").Page("Gmail").WebButton("SignIn").Click
Browser("Inbox").Page("Inbox").Sync

'Create New Label
Browser("Inbox").Page("Inbox").Frame("Frame").WebElement("More").Click
Wait(1)
Browser("Inbox").Page("Inbox").Frame("Frame").Link("CreateNewLabel").Click

'Create a Unique Label using Dat Time Stamp
sLabelName = fnGetDataTableValue("LabelName") & "_" & fnRandomNumberWithDateTimeStamp
Browser("Inbox").Page("Inbox").WebEdit("LabelName").Set sLabelName
Browser("Inbox").Page("Inbox").WebButton("Create").Click
Browser("Inbox").Page("Inbox").Sync

'Logout from Gmail
Browser("Inbox").Page("Inbox").Frame("Frame").Link("SignOut").Click
Browser("Gmail").Page("Gmail").Sync
Browser("Gmail").Close()