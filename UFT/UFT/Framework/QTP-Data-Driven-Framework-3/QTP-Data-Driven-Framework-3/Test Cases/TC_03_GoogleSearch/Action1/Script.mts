'Get Test Case Name
sTestCaseName = Environment.Value("TestName")

'Open Google Home Page
sURL = fnGetDataFromExcel("URL")
SystemUtil.Run "iexplore.exe", sURL
Browser("Google").Page("Google").Sync

'Search for the string
Browser("Google").Page("Google").WebEdit("String").fnSetValue "Search"
Browser("Google").Page("Google").WebButton("Search").Click
Browser("Google").Page("Google").Sync

'Find the number of results displayed
sTemp = Browser("Google").Page("Google").WebElement("Results").GetROProperty("innertext")
aTmp1 = Split(sTemp, "About ")
aTmp2 = Split(aTmp1(1), " results")
sNumberOfResults = aTmp2(0)
Reporter.ReportEvent micPass, "Total Number of Results Displayed - " &sNumberOfResults, "Passed"

'Close Google
Browser("Google").Close()
