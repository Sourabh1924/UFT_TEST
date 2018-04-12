Dim iTodayMails
iTodayMails = 0


'Open GMail
SystemUtil.Run "iexplore.exe", "http://www.gmail.com"
'Page Sync
Browser("Gmail").Page("Gmail").Sync


'Login to Gmail
Browser("Gmail").Page("Gmail").WebEdit("UserName").Set "valid gmail user name"
Browser("Gmail").Page("Gmail").WebEdit("Password").Set "valid gmail password"
Browser("Gmail").Page("Gmail").WebButton("SignIn").Click
'Page Sync
Browser("Inbox").Page("Inbox").Sync


'Search for emails received today in your inbox
'Logic - The mails received today will have only time in the last(8th) column.
'Time is always preceded by am or pm. So the code check for the last 2 characters and matches it with am or pm.
For iR = 1 to 50
		sLastColumnText = Browser("Inbox").Page("Inbox").Frame("Frame").WebTable("Emails").GetCellData(iR, 8)
		sLast2Characters = Right(sLastColumnText, 2)
		If sLast2Characters = "am" or sLast2Characters = "pm" Then
			iTodayMails = iTodayMails + 1
		Else
			'Exit For
		End If
Next
'Report the number of  mails received today
Reporter.ReportEvent micPass, "Total Emails Received Today - " & iTodayMails, ""


'Sign out from GMail
Browser("Inbox").Page("Inbox").Frame("Frame").Link("SignOut").Click
Browser("Gmail").Page("Gmail").Sync
'Close the browser
Browser("Gmail").Close()