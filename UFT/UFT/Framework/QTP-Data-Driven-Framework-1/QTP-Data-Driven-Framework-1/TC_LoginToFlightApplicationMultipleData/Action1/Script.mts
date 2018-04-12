iRows = DataTable.GetRowCount

'Loop through all the rows
For iR = 1 to iRows

	'Set the current row
	DataTable.SetCurrentRow iR

	'Open Flight Reservation Application
	SystemUtil.Run "C:\Program Files (x86)\HP\QuickTest Professional\samples\flight\app\flight4a.exe"
	
	'Enter UserId and Password
	Dialog("text:=Login").WinEdit("attached text:=Agent Name:").Set DataTable.Value("UserName", "Global")
	Dialog("text:=Login").WinEdit("attached text:=Password:").Set DataTable.Value("Password", "Global")
	
	'Click on Ok button
	Dialog("text:=Login").WinButton("text:=OK").Click
	
	'Check if Login is Successful or Not
	'Check if error message is displayed
	If Dialog("text:=Login").Dialog("text:=Flight Reservations").Exist(4) Then
		'Click on Ok button to close the dialog
		Dialog("text:=Login").Dialog("text:=Flight Reservations").WinButton("text:=OK").Click
		'Click on Cancel to Close the Login Screen
		Dialog("text:=Login").WinButton("text:=Cancel").Click
		Reporter.ReportEvent micFail, "Login Unsuccessful", ""
	
	Else
		'Login is successful. close the application
		Reporter.ReportEvent micPass, "Login Successful", ""
		Wait(1)
		Window("text:=Flight Reservation").Close()
End If

Next