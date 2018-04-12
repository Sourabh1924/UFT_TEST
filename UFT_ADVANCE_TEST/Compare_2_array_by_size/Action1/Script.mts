var = "1,2,3"
var1 = "1,2,3"
array1 = split(var,",")
array2 = split(var1,",")

'=================================================if array2 is greater===============================================
    If ubound(array1) < ubound(array2) Then
         For i = 0 To UBound(array2)
                 For j = 0 To UBound(array1) 
                       If array1(i) = array2(j) Then
                            i =i+1        
                       End If               
                 Next 
              print "Last number of array2 is = "& array2(i)              
         Next

'=================================================if array1 is greater===============================================
    ElseIf ubound(array1) > ubound(array2) Then	
          For i = 0 To UBound(array1)
                  For j = 0 To UBound(array2) 
                        If array1(i) = array2(j) Then
                             i =i+1        
                        End If               
                  Next 
              print "Last number of array1 is = "& array1(i)            
          Next
 
'=================================================if both the array are same==========================================
     else
        print "Both the array are same"
     End If
