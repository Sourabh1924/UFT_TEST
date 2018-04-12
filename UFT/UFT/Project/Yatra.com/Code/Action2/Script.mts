'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Wedsite_launch'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Call login("http://www.yatra.com/")

wait 15
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Page exist'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").Sync
If Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").Exist Then
	fcorrect "Web page","Web page is loaded"
End If

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'Create a excel file
'''''''''''''''''''''''''
call create()
'''''''''''''''''''''''''

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Login''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
If Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").Link("One Way").Exist Then
   Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").Link("One Way").Click
   
       '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
       Call report("Step-1","Click on the one way option","PASS",time,date)
       '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
       
End If

If Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").WebEdit("flight_origin_city").Exist Then
   Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").WebEdit("flight_origin_city").Set datatable.Value("Source")
   
       '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
       Call report("Step-2","Type flight_origin_city","PASS",time,date)
       ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''' 
       
End If

If Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").WebEdit("flight_destination_city").Exist Then
   Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").WebEdit("flight_destination_city").Set datatable.Value("Destination")	
   
       '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
       Call report("Step-3","Type flight_destination_city","PASS",time,date)
       '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
       
End If

'Select date

Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").WebElement("WebElement").Click

idate=datatable.Value("Date")
idatevalue=Split(idate,"/")
idateval=Trim(idatevalue(1))
idateval1 = Trim(idatevalue(0))
idateval1 = monthname(idateval1)
idateval1 = idateval1&" "
Browser("Flight, Cheap Air Tickets_2").Page("Flight, Cheap Air Tickets").Link("September").SetTOProperty "text",idateval1
Browser("Flight, Cheap Air Tickets_2").Page("Flight, Cheap Air Tickets").Link("September").Click
row=Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").WebTable("1Jamat Ul_Vida").GetRowWithCellText(idateval)
ccount=Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").WebTable("1Jamat Ul_Vida").ColumnCount(row)
  For i=1 to ccount
      CellData=Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").WebTable("1Jamat Ul_Vida").GetCellData(row,i)
      row1 = split(CellData,",")
      idate=Trim(row1(0))
      idateval1 = mid(idate,1,2)            
            If  idateval=idateval1 Then
                Set iObj=Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").WebTable("1Jamat Ul_Vida").ChildItem(row,i,"Link",0)
                iObj.highlight
                    '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
                    Call fpass("Step-1","Select the date")
                    Call report("Step-4","Select the date","PASS",time,date)
                    '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
                iObj.Click                  
  Exit For
            End If
  Next

'Select travelling class

Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").WebElement("WebElement_2").Click
travel = datatable.Value("Traveller")
For i = 1 To travel - 1  Step 1
    Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").WebElement("WebElement_3").Click	
    
       '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
       Call fpass("Step-2","Select the traveller")
       Call report("Step-5","Select the traveller","PASS",time,date)
       '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
       
Next

Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").WebElement("Premium Economy").SetTOProperty "innertext",datatable.Value("Economy",Global)
Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").WebElement("Premium Economy").Click
Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").WebElement("Done").Click

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Call fpass("Step-3","Traveling details is selected")
Call report("Step-6","Traveling details is selected","PASS",time,date)
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Browser("Flight, Cheap Air Tickets").Page("Flight, Cheap Air Tickets").WebButton("Search").Click

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
