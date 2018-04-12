wait 6         
 @@ hightlight id_;_Browser("MakeMyTrip, India's No 2").Page("Cheap Air Tickets, Flight").WebList("select class")_;_script infofile_;_ZIP::ssf88.xml_;_
'*******************************************STEP FOR CLICK ON BOOK BUTTON**********************************************

Set object = Description.Create
object("micclass").value = "WebElement"
object("html tag").value = "A"
object("class").value = "btn btn_g"
Set object=Browser("MakeMyTrip, India's No_2").Page("Departure Listing").ChildObjects(object)
    For i = 0 To object.count-1
        var=object.count-1
        var1=var-1
        var2=var-var1
           If var2=i Then
                object(i).click

                '**************************************************************************************************************************************************************
                
                Call report("Step-8","Click on button.","Click on book button","Next page will open","PASS",time,date)
                reporter.ReportEvent micPass,"Click on book button","Next page will open"

                '**************************************************************************************************************************************************************
    Exit for
      
           ElseIf var=i Then
           
                '**************************************************************************************************************************************************************
                
                Call report("Step-8","Click on button.","Click on book button","Next page will open","FAIL",time,date)
                reporter.ReportEvent micPass,"Click on book button","Next page will open"

                '**************************************************************************************************************************************************************
           
           exittest     
           End if   
    next             
wait 3 @@ hightlight id_;_Browser("MakeMyTrip, India's No 2").Page("Flight Split Listing View").Link("Book")_;_script infofile_;_ZIP::ssf102.xml_;_

'*******************************************STEP FOR TYPE EMAIL ADDRESS**********************************************

If Browser("MakeMyTrip, India's No_2").Page("Flight Review").WebEdit("txtemail").Exist Then
   Browser("MakeMyTrip, India's No_2").Page("Flight Review").WebEdit("txtemail").Set datatable.Value("Email","BOOK") 	
     
         '****************************************************************************************************************************************************************************
          	
         Call report("Step-9","Email address type.","Typed the Email address.","Email address will show.","PASS",time,date)
         reporter.ReportEvent micPass,"Typed the Email address.","Email address will show."  

     	 '****************************************************************************************************************************************************************************

else

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-9","Email address type.","Typed the Email address.","Email address is not typed.","FAIL",time,date)
         reporter.ReportEvent micPass,"Typed the Email address.","Email address is not typed."  

     	 '****************************************************************************************************************************************************************************
End If
 @@ hightlight id_;_Browser("MakeMyTrip, India's No 2").Page("Flights Review").WebEdit("WebEdit")_;_script infofile_;_ZIP::ssf103.xml_;_
'*******************************************STEP FOR SELECT THE RADIO BUTTON********************************************** 
 
If Browser("MakeMyTrip, India's No_2").Page("Flight Review").WebRadioGroup("signIn_user").Exist Then
   Browser("MakeMyTrip, India's No_2").Page("Flight Review").WebRadioGroup("signIn_user").click	

        '****************************************************************************************************************************************************************************
          	
         Call report("Step-10","Click on Continue as Guest radio button.","Travel detail window will open window will open.","Travel detail window is open.","PASS",time,date)
         reporter.ReportEvent micPass,"Travel detail will open.","Travel detail window is open."  

     	 '****************************************************************************************************************************************************************************

else

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-10","Click on Continue as Guest radio button.","Travel detail window will open window will open.","Travel detail window is not open.","FAIL",time,date)
         reporter.ReportEvent micPass,"Travel detail will open.","Travel detail window is not open."  

     	 '****************************************************************************************************************************************************************************

exittest
End If 
  
'*******************************************STEP FOR CLICK ON CONTINUE BUTTON**********************************************

If Browser("MakeMyTrip, India's No_2").Page("Flight Review").Link("Continue").Exist Then
   Browser("MakeMyTrip, India's No_2").Page("Flight Review").Link("Continue").Click	
     
         '****************************************************************************************************************************************************************************
          	
         Call report("Step-11","Click on Continue as Guest button.","Flight Review window will open.","Flight Review window is open.","PASS",time,date)
         reporter.ReportEvent micPass,"Flight booking Review will open.","Flight Review window is open."  

     	 '****************************************************************************************************************************************************************************

else

         '****************************************************************************************************************************************************************************
          	
         Call report("Step-11","Click on Continue as Guest button.","Flight Review window will open.","Flight Review window is not open.","FAIL",time,date)
         reporter.ReportEvent micPass,"Flight booking Review will open.","Flight Review window is not open."  

     	 '****************************************************************************************************************************************************************************

exittest
End If
On error goto 0
