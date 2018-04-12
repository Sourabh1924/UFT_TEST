Set qtApp = CreateObject("QuickTest.Application") 
 qtApp.Launch 
qtApp.Visible = True
qtApp.Open "C:\Users\Yogesh\Desktop\UFT\Report_for_time_taken_for_opening_application", True 
qtApp.Test.Run
qtApp.Test.Close
qtApp.Quit
Set qtApp = Nothing 