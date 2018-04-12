
Set qtApp = CreateObject("QuickTest.Application") ' Create the Application object
qtApp.Launch ' Start QuickTest
qtApp.Visible = True ' Make the QuickTest application visible

' Set QuickTest run options
qtApp.Options.Run.RunMode = "Fast"
qtApp.Options.Run.ViewResults = True

''''''''''''''''''''''''''''''''''''''''''''''''''This will Open a script'''''''''''''''''''''''''''''''''''''''''''''''''

qtApp.Open "F:\Jetairways\Jet_script", True ' Open the test in read-only mode

'''''''''''''''''''''''''''''''''''''''''''''''''''Run the test'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Set qtTest = qtApp.Test

'''''''''''''''''''''''''''''''''''''''''''''''''For Viewing Results''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Set qtResultsOpt = CreateObject("QuickTest.RunResultsOptions") ' Create the Run Results Options object
qtResultsOpt.ResultsLocation = "F:\Jetairways\Result\Res1" ' Set the results location
qtTest.Run qtResultsOpt ' Run the test
qtApp.Options.Run.ViewResults = True 

''''''''''''''''''''''''''''''''''''''''''''''''''Close QTP''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'qtTest.Close ' Close the test

''''''''''''''''''''''''''''''''''''''''''''''''''Set the options to nothing'''''''''''''''''''''''''''''''''''''''''''''''

Set qtResultsOpt = Nothing ' Release the Run Results Options object
Set qtTest = Nothing ' Release the Test object
Set qtApp = Nothing ' Release the Application object