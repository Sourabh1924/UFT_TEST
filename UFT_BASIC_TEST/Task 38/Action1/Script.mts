'Find the number of working days in a month.

days=inputbox("enter the days")
weeks=inputbox("momber of weeks")
a=weeks*5
msgbox a
c=a/12
msgbox "numbers of working days" & c

'                              or

a=inputbox("enter month")
  Select Case a
      Case 1,7 
    msgbox "Number of working days is 20 to 21" 
    Case 2,3,6,8,9,10,11,12 
    msgbox "Number of working days is 22 to 23 "
    Case 4,5 
    msgbox "Number of working days is 21 to 22"
End select  
