'=============================================================Data========================================================================
'=========================================================================================================================================

 Status = datatable.Value("Status","2_Flight_select")
 Sub_status = datatable.Value("Sub_status","2_Flight_select")
Wait 10
'=========================================================================================================================================
'=========================================================================================================================================


'====================================================Flight_status & Fare_charge=============================================================
'============================================================================================================================================
Services.StartTransaction "Flight_select"
S_time = timer
'''''''Click on Status 
Set obj1 = description.Create
obj1("micclass").value = "Webelement"
obj1("height").value = "64"
obj1("html tag").value = "LI"
Set Web_obj1 = Browser("Jet Airways Booking Select").Page("Jet Airways Booking Select").ChildObjects(obj1)
For i = 0 To Web_obj1.count - 1 Step 1
    Obj2 = Web_obj1(i).getroproperty("outertext")
         Obj2 = split(Obj2," ")
                For j = 1 To ubound(Obj2) Step 1
	                  If  Status = Obj2(j) Then
		                   Web_obj1(i).click
                Exit for	
	                  End If
                Next
Next

'''''''Click on Sub_status 
Set obj = description.Create
obj("micclass").value = "Webelement"
obj("height").value = "55"
obj("html tag").value = "LI"
Set Web_obj = Browser("Jet Airways Booking Select").Page("Jet Airways Booking Select").ChildObjects(obj)
For i = 0 To Web_obj.count - 1 Step 1
	Obj = Web_obj(i).getroproperty("innertext")
	If trim(Obj) = trim(Sub_status) Then
		xaxis = Web_obj(i).getroproperty("abs_x")
		yaxis = Web_obj(i).getroproperty("abs_y")
		yaxis = yaxis + 100
		Set DeviceReplay = CreateObject("Mercury.DeviceReplay")
        DeviceReplay.MouseClick xaxis,yaxis, LEFT_MOUSE_BUTTON
        Services.EndTransaction "Flight_select"
        E_time = timer
        TT_time = E_time - S_time
        ''''''''''''''''''''''''''''Reporter''''''''''''''''''''''''''''       
        call fpass("Step10","Flight is selected")
        call report("Step_3","Flight is selected","PASS",Time,Date,TT_time)
        ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

exit for
	End If
Next

''''''''''''''''Total_cost
Total_cost = Browser("Jet Airways Booking Select").Page("Jet Airways Booking Select").WebElement("26,528").GetROProperty("innertext")
Total_cost = replace(Total_cost,",","")
Fare = Browser("Jet Airways Booking Select").Page("Jet Airways Booking Select").WebElement("24,700").GetROProperty("innertext")
Tax = Browser("Jet Airways Booking Select").Page("Jet Airways Booking Select").WebElement("1,389").GetROProperty("innertext")
Service_fee = Browser("Jet Airways Booking Select").Page("Jet Airways Booking Select").WebElement("239").GetROProperty("innertext")
CUTE_fee = Browser("Jet Airways Booking Select").Page("Jet Airways Booking Select").WebElement("100").GetROProperty("innertext")
Swachh_Bharat_Cess = Browser("Jet Airways Booking Select").Page("Jet Airways Booking Select").WebElement("50").GetROProperty("innertext")
Krishi_Kalyan_Cess  = Browser("Jet Airways Booking Select").Page("Jet Airways Booking Select").WebElement("50_2").GetROProperty("innertext")
Surcharge = Browser("Jet Airways Booking Select").Page("Jet Airways Booking Select").WebElement("total-trip-cost").GetROProperty("innertext")

datatable.GetSheet("2_Flight_select").AddParameter "Price",cint(Fare) + cint(Tax) + cint(Service_fee) + cint(CUTE_fee) + cint(Swachh_Bharat_Cess) + cint(Krishi_Kalyan_Cess) + cint(Surcharge)  

If datatable.Value("Price","2_Flight_select") = Total_cost Then

     '''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''       
     call fpass("Step11","Both the cost are same")
     ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

else

     '''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''       
     call ffail("Step11","Both the cost are not same")
     ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

End If

Browser("Jet Airways Booking Select").Page("Jet Airways Booking Select").Link("Fare Rules").Click
Fare_rule = Browser("Jet Airways Booking Select").Page("Jet Airways Booking Select").WebElement("V FARE BASIS BK FARE TRAVEL-TI").GetROProperty("innertext")
wait 3
Path = left(environment.Value("TestDir"),instrrev(environment.Value("TestDir"),"\")-1)
Services.StartTransaction "Fare_rule"
S_time = timer
'''''''''''''''''''Write fare_rule in notepad
Set fso=createobject("Scripting.FileSystemObject")
    If fso.FileExists(Path&"\qtptest.txt")=TRUE Then    
          Set qfile=fso.OpenTextFile(Path&"\Txt_doc\qtptest.txt",2,True)
          fare = split(Fare_rule,". ..... ")
              For i = 0 To ubound(fare) Step 1
	              qfile.Writeline i&":-"&fare(i)
              Next
          Services.EndTransaction "Fare_rule"
          E_time = timer
          TT_time = E_time - S_time 
          
          '''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''       
          call fpass("Step12","Fare rule are write in the qtptest text file")
          call report("Step_4","Fare rule are write in the qtptest text file","PASS",Time,Date,TT_time)
          ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
          
    Else
          Set qfile1=fso.CreateTextFile(Path&"\Txt_doc\qtptest.txt",True,False) 
          Set qfile=fso.OpenTextFile(Path&"\qtptest.txt",1,True)
          fare = split(Fare_rule,". ..... ")
                For i = 0 To ubound(fare) Step 1
	                 qfile.Writeline i&":-"&fare(i)
                Next
          Services.EndTransaction "Fare_rule"
          E_time = timer
          TT_time = E_time - S_time       
          '''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''
          call fpass("Step12","Fare rule are write in the qtptest text file") 
          call report("Step_4","Fare rule are write in the qtptest text file","PASS",Time,Date,TT_time)
          ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    
    End If
qfile.Close
Set qfile=nothing
Browser("Jet Airways Booking Select").Page("Jet Airways Booking Select").WebButton("×Close").Click
Browser("Jet Airways Booking Select").Page("Jet Airways Booking Select_2").WebButton("CONTINUE").Click


''''''''''''''''''''''''''''''''Reporter'''''''''''''''''''''''''''''
 call report("Step_4","Flight and fare is selected","PASS",Time,Date,TT_time)
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

If Browser("Jet Airways Booking Select_2").Page("Jet Airways Booking Select").WebEdit("UserLogin.EmailAddress").Exist Then
   Browser("Jet Airways Booking Select_2").Page("Jet Airways Booking Select").WebEdit("UserLogin.EmailAddress").Set "memo.sourabh@gmail.com"
   Browser("Jet Airways Booking Select_2").Page("Jet Airways Booking Select").WebButton("Continue As Guest").Click	
End If

'=========================================================================================================================================
'=========================================================================================================================================
