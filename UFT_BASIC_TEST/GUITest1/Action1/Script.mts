
SystemUtil.Run "iexplore","http://www.makemytrip.com/"
Browser("MakeMyTrip, India's No").Page("MakeMyTrip, India's No").Sync
If Browser("MakeMyTrip, India's No").Page("MakeMyTrip, India's No").Exist Then
	reporter.ReportEvent micPass,"Web page","Web page is loaded"
else
    reporter.ReportEvent micFail,"Web page","Web page is not loaded"
exittest
End If

' for flight
Set object = Description.Create
object("micclass").value = "link"
Set object=Browser("MakeMyTrip, India's No_2").Page("MakeMyTrip, India's No").ChildObjects(object)
    For i = 0 To object.count-1
        b=object.count-1
        D_link=object(i).getroproperty("innertext")
        D_link1=trim(D_link)
           If D_link1=datatable.Value("Link","Flight") Then
                D_link1=environment.Value("Link")
                object(i).click
                
    Exit for          
           End if           
    next 


'flight
'domatic/international
If  environment.Value("Link")="Flights" Then
	Set object = Description.Create
    object("micclass").value = "link"
    Set object=Browser("MakeMyTrip, India's No_2").Page("MakeMyTrip, India's No").ChildObjects(object)
        For i = 0 To object.count-1
            b=object.count-1
            D_link=object(i).getroproperty("innertext")
            D_link1=trim(D_link)
                 If D_link1=datatable.Value("Location","Flight") Then
                        object(i).click    
         Exit for          
                 End if           
         next 
End If

'flight
'trip
Set object = Description.Create
object("micclass").value = "link"
Set object=Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").ChildObjects(object)
    For i = 0 To object.count-1
        b=object.count-1
        D_link=object(i).getroproperty("innertext")
        D_link1=trim(D_link)
           If D_link1=datatable.Value("Trip","Flight") Then
                D_link1=tour
                object(i).click
    exit for          
           End if   
    next             
    
If tour="ONE WAY" Then
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit").Set
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit_2").Set
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebList("select_class").Select
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").Link("DEPARTURESelect Date31Mar").Click
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebTable("Su").GetCellData
       Browser("MakeMyTrip, India's No_2").Page("MakeMyTrip, India's No").Link("+").Click
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").Link("Search Flights").Click
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
                           End if   
                next
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebCheckBox("aigTerms").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review").WebEdit("txtemail").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review").Link("Continue").Click
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("tFirstName1").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("tLastName1").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebList("sTitle1").Select
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("sAge1").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("txtMobile").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review").WebEdit("txtemail").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review").WebRadioGroup("signIn_user").Select
       Browser("MakeMyTrip, India's No_2").Page("Flight Review").Link("Continue").Click
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").Link("Continue to Payment").Click
       Set object = Description.Create
       object("micclass").value = "link"
       Set object=Browser("MakeMyTrip, India's No_2").Page("MakeMyTrip, India's No").ChildObjects(object)
           For i = 0 To object.count-1
               b=object.count-1
               D_link=object(i).getroproperty("innertext")
               D_link1=trim(D_link)
                    If D_link1=datatable.Value("Payment","Flight") Then
                         object(i).click
           Exit for
                    End if           
           next             
       Browser("MakeMyTrip, India's No_2").Page("MakeMytrip Payment : Safe").WebList("NB_options").Select
       Browser("MakeMyTrip, India's No_2").Page("MakeMytrip Payment : Safe").Link("Make Payment").Click
End If
    
If tour="ROUND TRIP" Then
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit").Set
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit_2").Set
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").Link("DEPARTURESelect Date31Mar").Click
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebTable("Su").GetCellData
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").Link("RETURNSelect Date03Apr").Click
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebTable("Su").GetCellData
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebList("select_class").Select
       Browser("MakeMyTrip, India's No_2").Page("MakeMyTrip, India's No").Link("+").Click
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").Link("Search Flights").Click
       Browser("MakeMyTrip, India's No_2").Page("Search Results_2").Link("Book now").Click
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebCheckBox("aigTerms").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review").WebEdit("txtemail").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review").Link("Continue").Click
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("tFirstName1").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("tLastName1").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebList("sTitle1").Select
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("sAge1").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("txtMobile").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review").WebEdit("txtemail").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review").WebRadioGroup("signIn_user").Select
       Browser("MakeMyTrip, India's No_2").Page("Flight Review").Link("Continue").Click
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").Link("Continue to Payment").Click
       Set object = Description.Create
       object("micclass").value = "link"
       Set object=Browser("MakeMyTrip, India's No_2").Page("MakeMyTrip, India's No").ChildObjects(object)
           For i = 0 To object.count-1
               b=object.count-1
               D_link=object(i).getroproperty("innertext")
               D_link1=trim(D_link)
                    If D_link1=datatable.Value("Payment","Flight") Then
                         object(i).click
           Exit for
                    End if           
           next             
       Browser("MakeMyTrip, India's No_2").Page("MakeMytrip Payment : Safe").WebList("NB_options").Select
       Browser("MakeMyTrip, India's No_2").Page("MakeMytrip Payment : Safe").Link("Make Payment").Click
End If
    
If tour="MULTI CITY / STOP OVER" Then
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit").Set
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebEdit("WebEdit_2").Set
       Browser("MakeMyTrip, India's No_2").Page("MakeMyTrip, India's No").Link("05Apr '16Tue").Click
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebTable("Su").GetCellData
       Browser("MakeMyTrip, India's No_2").Page("MakeMyTrip, India's No").Link("+_2").Click
       Browser("MakeMyTrip, India's No_2").Page("MakeMyTrip, India's No").WebEdit("WebEdit_3").Set
       Browser("MakeMyTrip, India's No_2").Page("MakeMyTrip, India's No").WebEdit("WebEdit_4").Set
       Browser("MakeMyTrip, India's No_2").Page("MakeMyTrip, India's No").Link("05Apr '16Tue_2").Click
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").WebList("select_class").Select
       Browser("MakeMyTrip, India's No_2").Page("MakeMyTrip, India's No").Link("+").Click
       Browser("MakeMyTrip, India's No_2").Page("Cheap Air Tickets, Flight").Link("Search Flights").Click
              Set object = Description.Create
              object("innerhtml").value = "Book"
              Set object=Browser("MakeMyTrip, India's No_2").Page("Departure Listing").ChildObjects(object)
                  For i = 0 To object.count-1
                        var=object.count-1
                        var1=var-1
                        var2=var-var1
                             If var2=i Then
                                 object(i).click
                             End if   
                  next
              
              Set object = Description.Create
              object("innerhtml").value = "Book"
              Set object=Browser("MakeMyTrip, India's No_2").Page("Departure Listing").ChildObjects(object)
                  For i = 0 To object.count-1
                        var=object.count-1
                        var1=var-1
                        var2=var-var1
                             If var2=i Then
                                 object(i).click
                             End if   
                  next
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebCheckBox("aigTerms").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review").WebEdit("txtemail").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review").Link("Continue").Click
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("tFirstName1").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("tLastName1").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebList("sTitle1").Select
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("sAge1").Set
       Browser("MakeMyTrip, India's No_2").Page("Flight Review_2").WebEdit("txtMobile").Set
       Browser("MakeMyTrip, India's No_2").Page("Flt Customer Details").WebRadioGroup("paymentModesRadio").Select
       Browser("MakeMyTrip, India's No_2").Page("Flt Customer Details").Link("Make Payment").Click
End If

