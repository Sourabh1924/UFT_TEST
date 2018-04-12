'====================================================================================================================================================
'====================================================================================================================================================
Source_ = "F:\Rockwell"
Destination = "C:\Users\Yogesh\OneDrive\"
Set fso=createobject("Scripting.FileSystemObject")  '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Create a FSO object
fso.CopyFolder Source_ ,Destination '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''Copy folder
S_time = timer
Cnt = Window("Window").WinToolbar("User Promoted Notification").GetItemsCount '''''''''''''''''''''''''''''''''''''Count all the items 
 	For Iterator = 1 To Cnt Step 1
    	Object = Window("Window").WinToolbar("User Promoted Notification").GetItem(Iterator) ''''''''''''''''''''''Save the item name in other folder
		datatable.Value("Object_name",Global) = mid(Object,1,20)  
		    If "OneDrive" = mid(datatable.Value("Object_name",Global),1,10) Then  '''''''''''''''''''''''''''''''''Check the condition			    
				   Do
		 	  	    	Object_name = Window("Window").WinToolbar("User Promoted Notification").GetItem(Iterator)
		  	 	   Loop until "Up to date" = mid(Object_name,11) ''''''''''''''''''''''''''''''''''''''''''''''''''Loop until folder is uploaded
		   		 E_time = timer
		   		 datatable.Value("TT_time",Global) = E_time - S_time
	Exit for 
			else
			     Window("Window").WinButton("Button").Click ''''''''''''''''''''''''''''''''''''''''''''''''''''''''Click on button
				   Do
		 	  	    	Object_name = Window("W indow_2").WinToolbar("Overflow Notification").GetItem(Iterator)
		  	 	   Loop until "Up to date" = mid(Object_name,11) ''''''''''''''''''''''''''''''''''''''''''''''''''Loop until folder is uploaded
		   		 E_time = timer
		   		 datatable.Value("TT_time",Global) = E_time - S_time
	Exit for 
	    	End If
	Next
'====================================================================================================================================================
'====================================================================================================================================================
