'Declare Variables
Dim sTemp, sTemp2, sUnreadEmails

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

'Find out the number of unread emails in inbox
sTemp = Browser("Inbox").Page("Inbox").Frame("Frame").Link("Inbox").GetROProperty("innertext")
sLastChar = Right(sTemp, 1)
If sLastChar = ")" Then
	sTemp2 = Split(sTemp, "Inbox (")
	sUnreadEmails = Left(sTemp2(1), (Len(sTemp2(1)) - 1))
	Reporter.ReportEvent micPass, "Number of Unread Emails is - " & sUnreadEmails, "Passed"
Else
	Reporter.ReportEvent micDone, "No Unread Emails available in Inbox", "Done"
End If

'Logout from Gmail
Browser("Inbox").Page("Inbox").Frame("Frame").Link("SignOut").Click
Browser("Gmail").Page("Gmail").Sync
Browser("Gmail").Close()
