systemutil.Run "iexplore", "http://www.popuptest.com/"
Browser("PopupTest - test your").Page("PopupTest - test your").Link("Multi-PopUp Test").Click
'Set obj = Browser("PopupTest - test your")
'call RecoveryFunction1(obj)
'  For i = 1 To 9 Step 1      
'      If Browser("PopupTest - test your").Exist Then
'      	 Browser("PopupTest - test your").Close
'      End If
'  Next
'
'systemutil.Run "C:\Program Files (x86)\HP\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

