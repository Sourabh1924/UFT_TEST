Browser("Gmail").Page("Gmail").WebEdit("Email").Set "memo.sourabh@gmail.com" @@ hightlight id_;_Browser("Gmail").Page("Gmail").WebEdit("Email")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Gmail").Page("Gmail").WebButton("Next").Click @@ hightlight id_;_Browser("Gmail").Page("Gmail").WebButton("Next")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Gmail").Page("Gmail").WebEdit("Passwd").SetSecure "58b0405e2e48733d5e7e23e78734a872fb30244d7f7617a3" @@ hightlight id_;_Browser("Gmail").Page("Gmail").WebEdit("Passwd")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Gmail").Page("Gmail").WebButton("Sign in").Click @@ hightlight id_;_Browser("Gmail").Page("Gmail").WebButton("Sign in")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Gmail").Page("Inbox (1) - memo.sourabh@gmail").Link("Link").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Gmail").Page("Inbox (1) - memo.sourabh@gmail").Link("Calendar").Click @@ hightlight id_;_Browser("Gmail").Page("Inbox (1) - memo.sourabh@gmail").Link("Calendar")_;_script infofile_;_ZIP::ssf6.xml_;_
If Browser("Google Calendar - Week").Page("Google Calendar - Week").WebElement("Got it").Exist Then
   Browser("Google Calendar - Week").Page("Google Calendar - Week").WebElement("Got it").Click
End If
Browser("Google Calendar - Week").Page("Google Calendar - Week").WebElement("Create").Click
Browser("Google Calendar - Week").Page("Google Calendar - Week").WebEdit("Title").Set "Meeting"
Browser("Google Calendar - Week").Page("Google Calendar - Week").WebEdit("Location").Set "Bilaspur"
Browser("Google Calendar - Week").Page("Google Calendar - Week").WebEdit("S_date").Set "2/24/2017"
Browser("Google Calendar - Week").Page("Google Calendar - Week").WebEdit("S_time").Set "8:00pm"
Browser("Google Calendar - Week").Page("Google Calendar - Week").WebEdit("E_time").Set "9:30pm"
Browser("Google Calendar - Week").Page("Google Calendar - Week").WebEdit("E_date").Set "2/24/2017"
Browser("Google Calendar - Week").Page("Google Calendar - Week").WebEdit("Guest").Set "memo.sourabh@hotmail.com"
Browser("Google Calendar - Week").Page("Google Calendar - Week").WebElement("Save").Click

If Browser("Google Calendar - Week").Page("Google Calendar - Week").WebButton("Don't send").Exist Then
   Browser("Google Calendar - Week").Page("Google Calendar - Week").WebButton("Don't send").Click
End If
Browser("Google Calendar - Week").Page("Google Calendar - Week").WebElement("Added aaaaa on Fri Feb").Click

cols = Browser("Google Calendar - Week").Page("Google Calendar - Week").WebTable("S").GetROProperty("cols")
Cell_data_row = Browser("Google Calendar - Week").Page("Google Calendar - Week").WebTable("S").GetRowWithCellText("24")

For i = 1 To cols Step 1
	Cell_data = Browser("Google Calendar - Week").Page("Google Calendar - Week").WebTable("S").GetCellData(Cell_data_row,i)
		If Cell_data = "24" Then
			Set iObj = Browser("Google Calendar - Week").Page("Google Calendar - Week").WebTable("S").ChildItem(Cell_data_row,i,"WebElement",0)
			iObj
			
		End If
Next