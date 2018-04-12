'Start  QTP, open an existing test and Run the Test:


Dim qtApp
Dim qtTest

'Create the QTP Application object
Set qtApp = CreateObject("QuickTest.Application") 

'If QTP is notopen then open it
If  qtApp.launched <> True then 

qtApp.Launch 

End If 

'Make the QuickTest application visible
qtApp.Visible = True

'Set QuickTest run options
'Instruct QuickTest to perform next step when error occurs

qtApp.Options.Run.ImageCaptureForTestResults = "OnError"
qtApp.Options.Run.RunMode = "Fast"
qtApp.Options.Run.ViewResults = False

'Open the test in read-only mode
qtApp.Open "C:\Program Files\HP\QuickTest Professional\Tests\trial", True 

'set run settings for the test
Set qtTest = qtApp.Test

'Instruct QuickTest to perform next step when error occurs
qtTest.Settings.Run.OnError = "NextStep" 

'Run the test
qtTest.Run

'Check the results of the test run
MsgBox qtTest.LastRunResults.Status

' Close the test
qtTest.Close 

'Close QTP
qtApp.quit

'Release Object
Set qtTest = Nothing
Set qtApp = Nothing 


'Start  QTP, open an existing test and Run the Test  And Store Run Results in Specified Folder: 

Dim qtApp
Dim qtTest
Dim qtResultsOpt

'Create the QTP Application object
Set qtApp = CreateObject("QuickTest.Application") 

'If QTP is notopen then open it
If  qtApp.launched <> True then 

qtApp.Launch 

End If 

'Make the QuickTest application visible
qtApp.Visible = True

'Set QuickTest run options
qtApp.Options.Run.ImageCaptureForTestResults = "OnError"
qtApp.Options.Run.RunMode = "Fast"
qtApp.Options.Run.ViewResults = False

'Open the test in read-only mode
qtApp.Open "C:\Program Files\HP\QuickTest Professional\Tests\trial", True 

'set run settings for the test
Set qtTest = qtApp.Test

'Instruct QuickTest to perform next step when error occurs
qtTest.Settings.Run.OnError = "NextStep" 

'Create the Run Results Options object
Set qtResultsOpt = CreateObject("QuickTest.RunResultsOptions")

'Set the results location
qtResultsOpt.ResultsLocation = "D:\Result"

' Run the test
qtTest.Run qtResultsOpt 

'Check the results of the test run
MsgBox qtTest.LastRunResults.Status

'Close the test
qtTest.Close 

'Close QTP
qtApp.quit

'Release Object
Set qtResultsOpt = nothing
Set qtTest = Nothing
Set qtApp = Nothing


'Start  QTP and open New test:


Dim qtApp
Dim qtTest

'Create the QTP Application object
Set qtApp = CreateObject("QuickTest.Application") 

'If QTP is notopen then open it
If  qtApp.launched <> True then 
qtApp.Launch 
End If 

'Make the QuickTest application visible
qtApp.Visible = True

' Open a new test
qtApp.New 

Set qtApp = Nothing ' Release the Application object
 
 
'Open QTP and Connect to Quality Center and run QC script:


Dim qtApp ' Declare the Application object variable

'Create the QTP Application object
Set qtApp = CreateObject("QuickTest.Application") 

'If QTP is notopen then open it
If  qtApp.launched <> True then 
qtApp.Launch 
End If 

'Make the QuickTest application visible
qtApp.Visible = True
If Not qtApp.TDConnection.IsConnected Then

' Make changes in a test on Quality Center with version control
qtApp.TDConnection.Connect "QC URL","DOMAIN Name","Project Name","User Name","Password",False

'QC URL = QC Server path
'DOMAIN Name = Domain name that contains QC project
'Project Name =Project Name in QC you want to connect to
'Username = Username to connect to Project
'Password = Password to connect to project
'False or True = Whether ‘password is entered in encrypted or normal. 
'Value is True for encrypted and FALSE for normal

'Example : qtApp.TDConnection.Connect
'"http://200.168.1.1:8080/qcbin","Default","proj1","qtpworld","qtp",false

End If

'Make Sure about your script path  and script name in QC
qtApp.Open "[QualityCenter] Subject\QCScriptPath\ScriptName", False
qtApp.Test.Run
qtApp.TDConnection.Disconnect

'Close QTP
qtApp.quit

'Release Object
Set qtApp = Nothing


'Start  QTP, open an existing test, associate Object Repositories and save the test: 
 

Dim qtApp
Dim qtTest
Dim qtRepositories

'Create the QTP Application object
Set qtApp = CreateObject("QuickTest.Application") 
'If QTP is notopen then open it
If  qtApp.launched <> True then 
qtApp.Launch 
End If 

'Make the QuickTest application visible
qtApp.Visible = True
qtApp.Open "C:\Program Files\HP\QuickTest Professional\Tests\trial", False
 
' Get the object repositories collection object of the "SignIn" action
Set qtRepositories = qtApp.Test.Actions("SignIn").ObjectRepositories 

' Add  Object repositry "Reposit.tsr" if it's not already associated wit action "SignIn"

If qtRepositories.Find("D:\Reposit.tsr") = -1 Then 
    qtRepositories.Add "D:\Reposit.tsr", 1
End If

'Save the test
qtApp.Test.Save

'Close QTP
qtApp.quit

'Release Object
Set qtLibraries = Nothing
Set qtTest = Nothing
Set qtApp = Nothing


'Start  QTP, open an existing test, associate libraries and save the test: 
 

Dim qtApp
Dim qtTest
Dim qtLibraries

'Create the QTP Application object
Set qtApp = CreateObject("QuickTest.Application") 

'If QTP is notopen then open it
If  qtApp.launched <> True then 
qtApp.Launch 
End If 

'Make the QuickTest application visible
qtApp.Visible = True

qtApp.Open "C:\Program Files\HP\QuickTest Professional\Tests\trial", False

'Get the libraries collection object
Set qtLibraries = qtApp.Test.Settings.Resources.Libraries 

'If the library file "libraary.vbs" is not assiciates with the Test then associate it
If qtLibraries.Find("D:\libraary.vbs") = -1 Then 
    qtLibraries.Add "D:\libraary.vbs", 1  
End If

'Save the test
qtApp.Test.Save

'Close QTP
qtApp.quit

'Release Object
Set qtLibraries = Nothing
Set qtTest = Nothing ' Release the Test object
Set qtApp = Nothing ' Release the Application object


'Start QTP, Open an Existing Test and Define Environment Variables: 
 

Dim qtApp

'Create the QTP Application object
Set qtApp = CreateObject("QuickTest.Application") 

'If QTP is notopen then open it
If  qtApp.launched <> True then 
qtApp.Launch 

End If 

'Make the QuickTest application visible
qtApp.Visible = True
' Open the test

qtApp.Open "C:\Program Files\HP\QuickTest Professional\Tests\trial", False

' Set some environment variables
qtApp.Test.Environment.Value("Root") = "C:\"
qtApp.Test.Environment.Value("Password") = "QuickTest"
qtApp.Test.Environment.Value("Days") = 14

' Save the test
qtApp.Test.Save

'Close QTP
qtApp.quit

'Release Object
Set qtApp = Nothing


'Start QTP with specified views: 

Dim qtApp

'Create the QTP Application object
Set qtApp = CreateObject("QuickTest.Application") 

'If QTP is notopen then open it
If  qtApp.launched <> True then 
qtApp.Launch 

End If 

'Make the QuickTest application visible
qtApp.Visible = True
' Open the test

qtApp.Open "C:\Program Files\HP\QuickTest Professional\Tests\trial", False

' Set some environment variables
qtApp.Test.Environment.Value("Root") = "C:\"
qtApp.Test.Environment.Value("Password") = "QuickTest"
qtApp.Test.Environment.Value("Days") = 14

' Save the test
qtApp.Test.Save

'Close QTP
qtApp.quit

'Release Object
Set qtApp = Nothing


'Start QTP, Open an Existing Test and Get All Available Action Names From the Test: 

Dim qtApp
'Create the QTP Application object
Set qtApp = CreateObject("QuickTest.Application") 

'If QTP is notopen then open it
If  qtApp.launched <> True then 
qtApp.Launch 
End If 

'Make the QuickTest application visible
qtApp.Visible = True

qtApp.Open "C:\Program Files\HP\QuickTest Professional\Tests\trial", False, False

'Get count of Action in a test
oActCount=qtApp.Test.Actions.Count

For iCounter=1 to oActCount
' Get the first action in the test by index (start from 1)

MsgBox qtApp.Test.Actions(iCounter).Name

Next

'Close QuickTest
qtApp.Quit

' Release the Application object
Set qtApp = Nothing


'Open and minimize QTP Window: 

Dim qtApp
'Create the QTP Application object
Set qtApp = CreateObject("QuickTest.Application") 

'If QTP is notopen then open it
If  qtApp.launched <> True then 
qtApp.Launch 
End If 

'Make the QuickTest application visible
qtApp.Visible = True
qtApp.WindowState = "Minimized" ' Maximize the QuickTest window
qtApp.WindowState = "Maximized" ' Maximize the QuickTest window

'Release Object
Set qtApp = Nothing