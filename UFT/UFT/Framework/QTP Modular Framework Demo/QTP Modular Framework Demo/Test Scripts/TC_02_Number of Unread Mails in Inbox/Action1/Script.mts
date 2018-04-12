'This test case opens Gmail and then finds out the total number of unread emails in the inbox
'. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 

Dim iUnreadMails

'Call Login Function
fnLogin()


'The number of unread emails is appended with Inbox link. Hence the code will find out the number of unread mails from Inbox link only
'Find text from inbox link
strTemp = Browser("Inbox").Page("Inbox").Frame("Frame").Link("class:=J-Ke n0","text:=Inbox.*").GetROProperty("innertext")

If Right(strTemp, 1) = ")" Then	
	'Split the text to find the number of unread mails
	arrTemp = Split(strTemp, "Inbox (")
	arrTemp2 = Split(arrTemp(1), ")")	
	iUnreadMails = arrTemp2(0)
ElseIf Right(strTemp, 1) = "x" Then 'x from Inbox
	iUnreadMails = 0
End If

'Report the number of unread emails
Reporter.ReportEvent micPass, "Number of Unread mails - " & iUnreadMails, "Passed"


'Call Logout Function
fnLogout()



