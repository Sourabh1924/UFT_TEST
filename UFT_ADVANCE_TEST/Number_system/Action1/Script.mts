'1 complement and 2's complement
fist = "101111"
Print "Binery number  = "&fist
arr = array(1)
ReDim preserve arr(len(fist)-1)
For i = 0 To len(fist)-1 Step 1
    arr(i) = mid(fist,i+1,1)
        If arr(i) = "0" Then
                arr(i) = "1"
        Else     
               arr(i) = "0"
        End If
       var = var + arr(i)       
Next
Print "1's complement = "&var
print "Add 1 "
var = strreverse(var)
status = false
For i = 1 To len(var) Step 1
    var1 = mid(var,i,1)
          If var1 = "1" and status = false Then
                    vel = vel + "0"
                    status1 = true
          ElseIf var1 = "0" Then
                    vel = vel + "1"
                      For j = i+1 To len(var) Step 1
                          	vel = vel + mid(var,j,1)   	
                      Next
Exit for 
                                  
          End If
Next

print "2's complement = "&strreverse(vel)  

str = 24
Do
   str1 = str mod 2
     If str1 = 0 Then
          var = var & 0
     else
     	  var = var & 1
     End If
Loop While False

