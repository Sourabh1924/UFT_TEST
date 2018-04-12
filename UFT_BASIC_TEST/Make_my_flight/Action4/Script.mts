wait 12

'********************************************STEP FOR SELECT TYPE**********************************************************8

Set object = Description.Create
object("micclass").value = "link"
Set object=Browser("MakeMyTrip, India's No_2").Page("MakeMyTrip, India's No").ChildObjects(object)
    For i = 0 To object.count-1
        b=object.count-1
        D_link=object(i).getroproperty("innertext")
        D_link1=trim(D_link)
           If D_link1=datatable.Value("Payment","PAYMENT") Then
                object(i).click
                print D_link1
                
               '****************************************************************************************************************************************************************************
          	
               Call report("Step-24","Select the Payment","Select the "&datatable.Value("Payment","PAYMENT")&" type.","Payment type will select.","PASS",time,date)
               reporter.ReportEvent micPass,"Select the "&datatable.Value("Payment","PAYMENT")&" type.","Payment type will select."

     	       '****************************************************************************************************************************************************************************
     Exit for

            ElseIf b=i Then
  
               '****************************************************************************************************************************************************************************
          	
               Call report("Step-24","Select the Payment","Select the "&datatable.Value("Payment","PAYMENT")&" type.","Payment type is not select.","FAIL",time,date)
               reporter.ReportEvent micFail,"Select the "&datatable.Value("Payment","PAYMENT")&" type.","Payment type is not select."

     	       '****************************************************************************************************************************************************************************  
    
           exittest
           End if           
    next             

'*******************************************STEP FOR SELECT THE BANK**********************************************

If Browser("MakeMyTrip, India's No_2").Page("MakeMytrip Payment : Safe").WebList("NB_options").Exist Then
   Browser("MakeMyTrip, India's No_2").Page("MakeMytrip Payment : Safe").WebList("NB_options").Select datatable.Value("Bank_code","PAYMENT") @@ hightlight id_;_Browser("MakeMyTrip, India's No 2").Page("MakeMytrip Payment : Safe").WebList("NB options")_;_script infofile_;_ZIP::ssf111.xml_;_

               '****************************************************************************************************************************************************************************
          	
               Call report("Step-25","Select the Bank.","Select "&datatable.Value("Bank_code","PAYMENT")& ".","Payment bank will select.","PASS",time,date)
               reporter.ReportEvent micPass,"Select "&datatable.Value("Bank_code","PAYMENT")&".","Payment bank will select."

     	       '****************************************************************************************************************************************************************************

else

               '****************************************************************************************************************************************************************************
          	
               Call report("Step-25","Select the Bank.","Select "&datatable.Value("Bank_code","PAYMENT")& ".","Payment bank is not select.","FAIL",time,date)
               reporter.ReportEvent micFail,"Select "&datatable.Value("Bank_code","PAYMENT")&".","Payment bank is not select."

     	       '****************************************************************************************************************************************************************************

exittest
End If

'*******************************************STEP FOR CLICK ON MAKE PAYMENT BUTTON**********************************************

If Browser("MakeMyTrip, India's No_2").Page("MakeMytrip Payment : Safe").Link("Make Payment").Exist Then
   Browser("MakeMyTrip, India's No_2").Page("MakeMytrip Payment : Safe").Link("Make Payment").Click	

               '****************************************************************************************************************************************************************************
          	
               Call report("Step-26","Select the button.","Select the make payment button.","Redirect to secure bank page.","PASS",time,date)
               reporter.ReportEvent micPass,"Select the make payment button.","Redirect to secure bank page."

     	       '****************************************************************************************************************************************************************************

else

               '****************************************************************************************************************************************************************************
          	
               Call report("Step-26","Select the button.","Select the make payment button.","Button is not exist.","FAIL",time,date)
               reporter.ReportEvent micFail,"Select the make payment button.","Button is not exist."

     	       '****************************************************************************************************************************************************************************

exittest
End If @@ hightlight id_;_Browser("Flight Review").Page("Flight Review").WebCheckBox("aigTerms")_;_script infofile_;_ZIP::ssf4.xml_;_
Call report("  ","  ","  ","  ","  ","  ","  ")
On error goto 0
SystemUtil.CloseProcessByName("IEXPLORE.exe")