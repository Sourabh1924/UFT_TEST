systemutil.Run "F:\Flights Application\FlightsGUI.exe"
''''''''''''''''''''''''''''''''''''''''''''''''''''''''Login '''''''''''''''''''''''''''''''''''''''''''''''''''''''
If WpfWindow("HP MyFlight Sample Application").WpfEdit("agentName").Exist Then
   WpfWindow("HP MyFlight Sample Application").WpfEdit("agentName").Set datatable.Value("Username",Global)	
End If
If WpfWindow("HP MyFlight Sample Application").WpfEdit("password").Exist Then
   WpfWindow("HP MyFlight Sample Application").WpfEdit("password").Set datatable.Value("Password",Global)	
End If

                   '---------------------------------------------------------------------------------------------------------------------
                   call fpass("Step-1_Login","Username & Password is enter")
                   Call report("Step-1_Login","Username & Password is enter","PASS",time,date)
                   '---------------------------------------------------------------------------------------------------------------------

WpfWindow("HP MyFlight Sample Application").WpfButton("OK").Click @@ hightlight id_;_2119850168_;_script infofile_;_ZIP::ssf3.xml_;_
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''''Flight find ....'''''''''''''''''''''''''''''''''''''''''''''''
WpfWindow("HP MyFlight Sample Application").WpfComboBox("fromCity").Select datatable.Value("Source_city",Global) @@ hightlight id_;_2119852376_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("toCity").Select datatable.Value("Destination_city",Global) @@ hightlight id_;_2119853432_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfCalendar("datePicker").SetDate datatable.Value("Date",Global) @@ hightlight id_;_2119854872_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("Class").Select datatable.Value("Class",Global) @@ hightlight id_;_2119855544_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfImage("WpfImage_2").Click @@ hightlight id_;_2119856264_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("numOfTickets").Select datatable.Value("Passenger",Global) @@ hightlight id_;_2119856936_;_script infofile_;_ZIP::ssf14.xml_;_

                   '---------------------------------------------------------------------------------------------------------------------
                   call fpass("Step-2_Flight_details","Enter the flight details")
                   Call report("Step-2_Flight_details","Enter the flight details","PASS",time,date)
                   '---------------------------------------------------------------------------------------------------------------------

WpfWindow("HP MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2119858136_;_script infofile_;_ZIP::ssf15.xml_;_
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''Select_flight''''''''''''''''''''''''''''''''''''''''''''''''''''''
row_cnt = WpfWindow("HP MyFlight Sample Application").WpfTable("flightsDataGrid").RowCount
For i = 0 To row_cnt-1 Step 1
     fight_no = WpfWindow("HP MyFlight Sample Application").WpfTable("flightsDataGrid").GetCellData(i,4)
     If fight_no = datatable.Value("Flight_no",Global) Then
     	   WpfWindow("HP MyFlight Sample Application").WpfTable("flightsDataGrid").ActivateCell i,4
     	   WpfWindow("HP MyFlight Sample Application").WpfTable("flightsDataGrid").SelectCell i,4
     	   Price_1 = WpfWindow("HP MyFlight Sample Application").WpfTable("flightsDataGrid").GetCellData(i,0)
     	      do
                u=instr(Price_1,"D")
                Price_1=mid(Price_1,u+1)
              Loop until u=0
Exit for 
     End If 
          
Next
                   '----------------------------------------------------------------------------------------------------------------------
                   call fpass("Step-3_Select_flight","Select the flight")
                   Call report("Step-3_Select_flight","Select the flight","PASS",time,date)
                   '----------------------------------------------------------------------------------------------------------------------

WpfWindow("HP MyFlight Sample Application").WpfButton("SELECT FLIGHT").Click
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''Verification'''''''''''''''''''''''''''''''''''''''''''''''''''''''
'Flight_number
Flight_no = WpfWindow("HP MyFlight Sample Application").WpfObject("6102 USA").GetROProperty("name")
If Flight_no = datatable.Value("Flight_no",Global) Then

	               '----------------------------------------------------------------------------------------------------------------------
                   call fpass("Verification_Flight_number","Verify flight number")
                   Call report("Verification_Flight_number","Verify flight number","PASS",time,date)
                   '----------------------------------------------------------------------------------------------------------------------
End If

'Passenger_number
Passenger_no = WpfWindow("HP MyFlight Sample Application").WpfObject("4").GetROProperty("name")
If Passenger_no = datatable.Value("Passenger",Global) Then

	               '----------------------------------------------------------------------------------------------------------------------
                   call fpass("Verification_Passenger_number","Verify passenger number")
                   Call report("Verification_Passenger_number","Verify passenger number","PASS",time,date)
                   '----------------------------------------------------------------------------------------------------------------------
End If

'Travel_class
Travel_class = WpfWindow("HP MyFlight Sample Application").WpfObject("First").GetROProperty("name")
If Travel_class = datatable.Value("Class",Global) Then
	               '----------------------------------------------------------------------------------------------------------------------
                   call fpass("Verification_Travel_class","Verify travelling class")
                   Call report("Verification_Travel_class","Verify travelling class","PASS",time,date)
                   '----------------------------------------------------------------------------------------------------------------------
End If
'Find the per tic price 
Price = WpfWindow("HP MyFlight Sample Application").WpfObject("$330.60").GetROProperty("name")
Total_price = WpfWindow("HP MyFlight Sample Application").WpfObject("$1322.40").GetROProperty("name")
Tol_price = csng(Price) * csng(Passenger_no)
total_prc = csng(Total_price)
Tol_price1 = "$"&Tol_price
total_prc1 = "$"&total_prc

'Total_price
If Tol_price1 = total_prc1 Then
	               '----------------------------------------------------------------------------------------------------------------------
                   call fpass("Verification_Total_price","Verify the total prize")
                   Call report("Verification_Total_price","Verify the total prize","PASS",time,date)
                   '----------------------------------------------------------------------------------------------------------------------
End If

WpfWindow("HP MyFlight Sample Application").WpfEdit("passengerName").Set datatable.Value("Passenger_name") @@ hightlight id_;_2122598168_;_script infofile_;_ZIP::ssf18.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("ORDER").Click @@ hightlight id_;_2122599032_;_script infofile_;_ZIP::ssf19.xml_;_
wait 3
order_no = WpfWindow("HP MyFlight Sample Application").WpfObject("Order 91 completed").GetROProperty("name")
order_no1 = mid(order_no,6,18)
order_no2 = split(order_no1," ")
order_no3 = trim(order_no2(1))
datatable.Value("Order_no",Global) = order_no3
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''NEW SEARCH'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
WpfWindow("HP MyFlight Sample Application").WpfButton("NEW SEARCH").Click @@ hightlight id_;_1980744424_;_script infofile_;_ZIP::ssf28.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER" @@ hightlight id_;_1980746776_;_script infofile_;_ZIP::ssf29.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfEdit("byNameWatermark").Set datatable.Value("Passenger_name")  @@ hightlight id_;_1980746056_;_script infofile_;_ZIP::ssf30.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("SEARCH").Click @@ hightlight id_;_1980745384_;_script infofile_;_ZIP::ssf31.xml_;_

'Find Order_no & fight_no 
row_cnt = WpfWindow("HP MyFlight Sample Application").WpfTable("ordersDataGrid").RowCount
For i = 0 To row_cnt-1 Step 1
     Order_no = WpfWindow("HP MyFlight Sample Application").WpfTable("ordersDataGrid").GetCellData(i,1)
     fight_no = WpfWindow("HP MyFlight Sample Application").WpfTable("ordersDataGrid").GetCellData(i,2)
     fight_no1 = datatable.Value("Flight_no",Global)
     fight_no1 = mid(fight_no1,1,4)
     If fight_no = fight_no1 and Order_no = datatable.Value("Order_no",Global) Then
           WpfWindow("HP MyFlight Sample Application").WpfTable("ordersDataGrid").ActivateCell i,2
     	   WpfWindow("HP MyFlight Sample Application").WpfTable("ordersDataGrid").SelectCell i,2  
     	   
     	           '----------------------------------------------------------------------------------------------------------------------
                   call fpass("Verification_Order_no","Verify the flight number")
                   Call report("Verification_Order_no","Verify the flight number","PASS",time,date)
                   '----------------------------------------------------------------------------------------------------------------------
                   
                   '----------------------------------------------------------------------------------------------------------------------
                   call fpass("Verification_fight_no","Verify the order number")
                   Call report("Verification_fight_no","Verify the order number","PASS",time,date)
                   '----------------------------------------------------------------------------------------------------------------------                                            	  	
Exit for     	    	     	   
     End If 
          
Next

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Delete_order''''''''''''''''''''''''''''''''''''''''
WpfWindow("HP MyFlight Sample Application").WpfButton("SELECT ORDER").Click @@ hightlight id_;_1976229888_;_script infofile_;_ZIP::ssf34.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("WpfButton").Click @@ hightlight id_;_1974062608_;_script infofile_;_ZIP::ssf35.xml_;_
WpfWindow("HP MyFlight Sample Application").Dialog("Notification").WinButton("Yes").Click @@ hightlight id_;_4916732_;_script infofile_;_ZIP::ssf36.xml_;_
wait 2
order_delete = WpfWindow("HP MyFlight Sample Application").WpfObject("Order 102 deleted").GetROProperty("name")
If order_delete = "Order "&datatable.Value("Order_no",Global)&" deleted" Then
     '----------------------------------------------------------------------------------------------------------------------
      call fpass("Verification_order_delete","Verify the order deleted")
      Call report("Verification_order_delete","Verify the order deleted","PASS",time,date)
     '----------------------------------------------------------------------------------------------------------------------
End If
WpfWindow("HP MyFlight Sample Application").Close @@ hightlight id_;_1508620_;_script infofile_;_ZIP::ssf20.xml_;_

