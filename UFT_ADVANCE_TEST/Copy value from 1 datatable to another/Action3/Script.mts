
ColNums=DataTable.GetSheet("Action3").getparametercount
   For i=1 to ColNums
   
       ColName=DataTable.GetSheet("Action3").GetParameter(i).name
            If ColName="Name" Then            
            	If datatable.GetSheet("Action3").GetRowCount=0 Then
	               call transfer("Action1","Action3","Name")               
                End If 
            else   
                call transfer("Action1","Action3","Name")
            End If
   Next
   
   
     