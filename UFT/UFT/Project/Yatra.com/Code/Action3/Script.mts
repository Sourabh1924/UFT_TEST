''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Flight_booking'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

wait 15
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Flight row number save''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Set object = Description.Create
object("micclass").value = "WebElement"
object("html tag").value = "LI" 
object("width").value = "130"
Set object1=Browser("Flight, Cheap Air Tickets").Page("Yatra.com | Raipur to").ChildObjects(object)
    For i = 0 To object1.count-1
        D_link=object1(i).getroproperty("innertext")
        D_link1 = trim(D_link)
        If D_link1 = datatable.Value("Flight",Global) Then
             environment.Value("count") = i            
    Exit for 
        End If
    next    

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Click on flight'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
count = environment.Value("count") - 1
abs_y1 = datatable.Value("abs_y",Global)
For i = 0 To count  
    If i = count Then           
          Set DeviceReplay = CreateObject("Mercury.DeviceReplay")
          DeviceReplay.MouseClick 1160,abs_y1, LEFT_MOUSE_BUTTON 
               '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
               Call fpass("Step-4","Select the flight")
               Call report("Step-7","Select the flight","PASS",time,date)
               '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Exit for 
    End If 
        abs_y1 = abs_y1 + 113 
next
