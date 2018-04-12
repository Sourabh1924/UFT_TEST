'===== Code to Login to the Application =====


'===== Code to Insert a New Order =====


'===== Logout from Application =====
Window("Flight Reservation").Close


'========================================
'   Function Name - fnLogin
'   Purpose - This function is used to login to flight reservation application
'========================================
Function fnLogin()

	SystemUtil.Run "C:\Program Files (x86)\HP\QuickTest Professional\samples\flight\app\flight4b.exe"
	Dialog("Login").WinEdit("AgenName").Set "anish"
	Dialog("Login").WinEdit("Password").Set "mercury"
	Dialog("Login").WinButton("OK").Click

End Function


'========================================
'   Function Name - fnLogin
'   Purpose - This function is used to login to flight reservation application
'========================================
Function fnInsertOrder() 

	Set WshShell = CreateObject("WScript.Shell")
	WshShell.SendKeys "%(fn)" 'Press Alt F+N to open a new order screen
	Window("Flight Reservation").ActiveX("DateOfFlight").Type "010114"
	Window("Flight Reservation").WinComboBox("FlyFrom").Select "Paris"
	Window("Flight Reservation").WinComboBox("FlyTo").Select "Sydney"
	Window("Flight Reservation").WinButton("Flights").Click
	'Select any Flight
	Window("Flight Reservation").Dialog("FlightsTable").WinButton("OK").Click
	'Provide Name and Insert Order
	Window("Flight Reservation").WinEdit("Name").Set "Anish"
	Window("Flight Reservation").WinButton("InsertOrder").Click

End Function