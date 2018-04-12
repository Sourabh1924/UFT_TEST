'==============================================================================================================
'Scenario Name= Hotel booking in makemayTrip web application
' Author Name=  Ratnesh Kumar
' Creation Date = 03/24/2016
' Last Modification Date = 04/30/2016
' Scenario Name = In this scenario we are calling func_read_keyword(stestcasename) function to do some task
'===============================================================================================================

sTestCaseName= environment.Value("TestName") 'using environment variable
func_read_keyword(sTestCaseName) 'calling function

'===============================================================================================================