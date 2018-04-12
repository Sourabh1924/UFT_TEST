

''''''''''''''''''''''''''''''''''''''''''''''''''This will Open a script'''''''''''''''''''''''''''''''''''''''''''''''''

qtApp.Open "F:\Railway_booking\Railway_script", True ' Open the test in read-only mode

'''''''''''''''''''''''''''''''''''''''''''''''''''Run the test'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Set qtTest = qtApp.Test

'''''''''''''''''''''''''''''''''''''''''''''''''For Viewing Results''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Set qtResultsOpt = CreateObject("QuickTest.RunResultsOptions") ' Create the Run Results Options object
qtResultsOpt.ResultsLocation = "F:\Railway_booking\Result\Res1" ' Set the results location
qtTest.Run qtResultsOpt ' Run the test
qtApp.Options.Run.ViewResults = True 

''''''''''''''''''''''''''''''''''''''''''''''''''Close QTP''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'qtTest.Close ' Close the test

''''''''''''''''''''''''''''''''''''''''''''''''''Set the options to nothing'''''''''''''''''''''''''''''''''''''''''''''''

Set qtResultsOpt = Nothing ' Release the Run Results Options object
Set qtTest = Nothing ' Release the Test object
Set qtApp = Nothing ' Release the Application object
