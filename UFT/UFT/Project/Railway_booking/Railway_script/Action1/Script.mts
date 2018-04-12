''''''''''''''''''''''''''''''''''''''''''''''''''Relative_path for load''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Path = left(environment.Value("TestDir"),instrrev(environment.Value("TestDir"),"\")-1)
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''Function_Library load
LoadFunctionLibrary(Path&"\function\function.qfl")
'''''''''''''''''''''

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
datatable.Import Path&"\Data\Railway.xls"
Source_ = datatable.Value("Source")
Destination_ = datatable.Value("Destination")
Class_ = datatable.Value("Class")
Date_ = datatable.Value("Date")
URL = datatable.Value("URL")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'''''''''''''''''''''''''''''''''''''''''''''''''''''Launch''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
launch(URL)
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

'===============================================================================================================================
'============================================Select the travelling details======================================================
'===============================================================================================================================

   If Browser("Welcome to Indian Railway_2").Page("Welcome to Indian Railway").Exist Then
   
        ''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''
        call fpass("Launch","Website launch succecfully")
        call report("Launch","Website launch succecfully","PASS",Time,Date)
        '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''  
   else
   
        ''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''
        call ffail("Launch","Website does not launch succecfully")
        call report("Launch","Website does not launch succecfully","FAIL",Time,Date)
        exittest
        '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
   
   End If

   If Browser("Welcome to Indian Railway_2").Page("Welcome to Indian Railway").Link("Reserved Train Between").Exist Then
        Browser("Welcome to Indian Railway_2").Page("Welcome to Indian Railway").Link("Reserved Train Between").Click	
   else
        
        ''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''
        call ffail("Click","Link not found")
        exittest
        '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''   
   
   End If
   
   If Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_2").WebList("lccp_src_stncode").Exist Then
        Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_2").WebList("lccp_src_stncode").Select Source_	
   else
        
        ''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''
        call ffail("Select","Source is not selected")
        exittest
        '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  
   End If
   
   If Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_2").WebList("lccp_dstn_stncode").Exist Then
        Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_2").WebList("lccp_dstn_stncode").Select Destination_	
   else
        
        ''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''
        call ffail("Select","Destination is not selected")
        exittest
        '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        
   End If

   If Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_2").WebList("lccp_classopt").Exist Then
        Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_2").WebList("lccp_classopt").Select Class_
   else
        
        ''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''
        call ffail("Select","Class is not selected")
        exittest
        '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        
   End If
   
Day_ = split(Date_,"-")
Day_1 = trim(Day_(0))
Month_1 = trim(Day_(1))

   If Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_2").WebEdit("lccp_day").Exist Then
        Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_2").WebEdit("lccp_day").Set Day_1	

   else
        
        ''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''
        call ffail("Select","Day is not selected")
        exittest
        '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        
   End If

   If Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_2").WebEdit("lccp_month").Exist Then
        Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_2").WebEdit("lccp_month").Set Month_1	
   else
        
        ''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''
        call ffail("Select","Month is not selected")
        exittest
        '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        
   End If
Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_2").WebButton("Get Details").Click

'===============================================================================================================================
'===============================================================================================================================
'===============================================================================================================================

'===============================================================================================================================
'===============================================Select the train================================================================
'===============================================================================================================================

Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_3").WebTable("Train No.").WaitProperty "html tag","TABLE",100000

If Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_3").WebTable("Train No.").Exist Then
       
       ''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''
       call fpass("Check","Train table is found")
       call report("Check","Train table is found","PASS",Time,Date)
       '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

else

       ''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''
       call ffail("Check","Train table is not found")
       call report("Check","Train table is not found","FAIL",Time,Date)
       exittest
        '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

End If
'Path = left(environment.Value("TestDir"),instrrev(environment.Value("TestDir"),"\")-1)
'datatable.Import Path&"\Data\Railway.xls"
row_cnt = Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_3").WebTable("Train No.").RowCount
l = "3"
   For i = 3 To row_cnt Step 1
       All_data = Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_4").WebRadioGroup("lccp_trndtl").GetROProperty("all items")       
       All_data = split(All_data,";")
             For j = 0 To ubound(All_data) Step 1 
                   Row_no = datatable.GetRowCount                
                          For k = 1 To Row_no Step 1
	                           datatable.SetCurrentRow(k)
	                           Trn_name = datatable.Value("Train_name")
                               Train_nam = Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_3").WebTable("Train No.").GetCellData(l,2)	                                                      
	                           lent = len(Train_nam)
	                           Train_nam1 = mid(Train_nam,2,lent)
	                              If Trn_name = Train_nam1 Then
	                              	    Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_4").WebRadioGroup("lccp_trndtl").Select All_data(j)
                                        Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_3").WebButton("Get Availability").Click
                                        Browser("Welcome to Indian Railway").HandleDialog micOK
                                        Avali = Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_5").WebTable("S.No.").GetCellData(2,3)
                                        Avali1 = split(Avali," ")
                                            If trim(Avali1(0)) = "AVAILABLE" Then
                                                  Source1 = Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_5").WebTable("Train Number").GetCellData(2,4)
                                                  print "Source station is = "&Source1
                                                  Destination1 = Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_5").WebTable("Train Number").GetCellData(2,5)
                                                  print "Destination station is = "&Destination1   
                                                  Date_1 = Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_5").WebTable("Train Number").GetCellData(2,3)
                                                  print "Travelling date is = "&Date_1   
                                                  Berth = trim(Avali1(1))
                                                  datatable.Value("Seat") = Berth
	                                              print "Number of seat avalible in "&Trn_name&" is = "&Berth 
	                                                 
	                                                 ''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        										     call fpass("Select the train",Berth&" seats are avalible in train"&Trn_name)
        											 call report("Select the train",Berth&" seats are avalible in train"&Trn_name,"PASS",Time,Date)
        											 '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''  
        
	                      Exit for           
	                                         else
                                                  print "No seat is avalible = "&Avali
                                                  Browser("Welcome to Indian Railway").Back
                                              End If
	                             End If                 
                          next              
              l = l + 1
                If Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_5").WebButton("Get Fare").Exist Then
                	  Exit for
                End If
              Next
   Exit for 
   Next

  If Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_3").WebTable("Train No.").Exist Then
 
       ''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
       call fpass("Check","Train is found so procced futher")
       call report("Check","Train is found so procced futher","PASS",Time,Date)
       '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''  	

  else
     
       ''''''''''''''''''''''''''Reporter''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
       call fpass("Check","Train is not found")
       call report("Check","Train is not found","FAIL",Time,Date)
       exittest
       ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''  	

  End If

'===============================================================================================================================
'===============================================================================================================================
'===============================================================================================================================

'===============================================================================================================================
'===========================================Get fare details====================================================================
'===============================================================================================================================

Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_5").WebButton("Get Fare").Click

  If Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_6").WebTable("Fare/Charges").Exist Then
  
       ''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
       call fpass("Check","Fare details page is open")
       call report("Check","Fare details page is open","PASS",Time,Date)
       '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''    
  
  else
  
        ''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
       call fpass("Check","Fare details page is not open")
       call report("Check","Fare details page is not open","FAIL",Time,Date)
       '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''  
  
  End If
row_cnt = Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_6").WebTable("Fare/Charges").GetROProperty("rows")
   'Get total price
   For i = 2 To row_cnt-1 Step 1
       price = Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_6").WebTable("Fare/Charges").GetCellData(i,2)
       price1 = cint(price1) + cint(price)
   Next
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Total price''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'Base charge
Base_charge = Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_6").WebTable("Fare/Charges").GetCellData(2,2)
'Reservertation charge
Reser_charge = Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_6").WebTable("Fare/Charges").GetCellData(3,2)
'Super fast charge
Super_charge = Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_6").WebTable("Fare/Charges").GetCellData(4,2)
'Other charge
Oth_charge = Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_6").WebTable("Fare/Charges").GetCellData(5,2)
'Service charge
Service_tax = Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_6").WebTable("Fare/Charges").GetCellData(6,2)
'Total charge
Total_pri = price = Browser("Welcome to Indian Railway").Page("Welcome to Indian Railway_6").WebTable("Fare/Charges").GetCellData(7,2)
'Add all the price
Total_charge = cint(Base_charge) + cint(Reser_charge) + cint(Super_charge) + cint(Oth_charge) + cint(Service_tax) 
  If price1 = Total_charge Then
	
       ''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
       call fpass("Check","Fare is same")
       call report("Check","Fare is same","PASS",Time,Date)
       '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''  

else
       
       ''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
       call fpass("Check","Fare is not same")
       call report("Check","Fare is not same","FAIL",Time,Date)
       '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''  

End If

'===============================================================================================================================
'===============================================================================================================================
'===============================================================================================================================


'===============================================================================================================================
'=================================================Zip the folder================================================================
'===============================================================================================================================

TargetZipFileName = "Railway_zip"
SystemUtil.Run "C:\Program Files\WinRAR\WinRAR.exe","a -ep1  -scul -r0 -iext -- "&TargetZipFileName&".rar F:\Railway","F:\","" 

'===============================================================================================================================
'===============================================================================================================================
'===============================================================================================================================





