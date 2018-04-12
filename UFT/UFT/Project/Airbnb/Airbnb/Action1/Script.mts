''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Launch'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

login("https://www.airbnb.co.in/")
wait 10
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'''''''''''''''''''''''''''''''''Reporter
create()
fpass"Step-1","Page is open"
report"Step-1","Page is open","PASS",time,date
'''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Travelling details''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
datatable.ImportSheet "F:\firstpage.xls","Sheet1","Action1"
Browser("Vacation Rentals, Homes,").Page("Vacation Rentals, Homes,").WebEdit("location").Set datatable.Value("Location","Action1")
Browser("Vacation Rentals, Homes,").Page("Vacation Rentals, Homes,").WebEdit("startDate").Click

'''''''''''''''''''''''''''''''''CheckIn_date
idate=datatable.Value("Checkin","Action1")                                                                                                 'store the date from datatable
      idatevalue = Split(idate,"\")                                                                                                             'split the date
      idateval = Trim(idatevalue(0))                                                                                                            'get the date 
      row = Browser("Vacation Rentals, Homes,").Page("Vacation Rentals, Homes,").WebTable("August 2016").GetRowWithCellText(idateval)                     'count date present in which row
      ccount = Browser("Vacation Rentals, Homes,").Page("Vacation Rentals, Homes,").WebTable("August 2016").ColumnCount(row)                              'count number of coloumn
         For i = 1 to ccount
            CellData = Browser("Vacation Rentals, Homes,").Page("Vacation Rentals, Homes,").WebTable("August 2016").GetCellData(row,i)                    'show which cell is select in the date row 
                 If  CellData = idateval Then
                     Set iObj = Browser("Vacation Rentals, Homes,").Page("Vacation Rentals, Homes,").WebTable("August 2016").ChildItem(row,i,"WebElement",0)
                     iObj.Click
         Exit For
                 End If
         Next
'''''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''CheckOut_date
idate=datatable.Value("Checkout","Action1")                                                                                                 'store the date from datatable
      idatevalue = Split(idate,"\")                                                                                                             'split the date
      idateval = Trim(idatevalue(0))                                                                                                            'get the date 
      row = Browser("Vacation Rentals, Homes,").Page("Vacation Rentals, Homes,").WebTable("August 2016").GetRowWithCellText(idateval)                     'count date present in which row
      ccount = Browser("Vacation Rentals, Homes,").Page("Vacation Rentals, Homes,").WebTable("August 2016").ColumnCount(row)                              'count number of coloumn
         For i = 1 to ccount
            CellData = Browser("Vacation Rentals, Homes,").Page("Vacation Rentals, Homes,").WebTable("August 2016").GetCellData(row,i)                    'show which cell is select in the date row 
                 If  CellData = idateval Then
                     Set iObj = Browser("Vacation Rentals, Homes,").Page("Vacation Rentals, Homes,").WebTable("August 2016").ChildItem(row,i,"WebElement",0)
                     iObj.Click
         Exit For
                 End If
         Next         
'''''''''''''''''''''''''''''''''
Browser("Vacation Rentals, Homes,").Page("Vacation Rentals, Homes,").WebList("guests").Click
Browser("Vacation Rentals, Homes,").Page("Vacation Rentals, Homes,").WebList("guests").Select datatable.Value("Guest","Action1")

'''''''''''''''''''''''''''''''''Reporter
fpass "Step-2","Travelling details are filled"
report "Step-2","Travelling details are filled","PASS",time,date
'''''''''''''''''''''''''''''''''''''''''
Browser("Vacation Rentals, Homes,").Page("Vacation Rentals, Homes,").WebButton("Search").Click
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
