
systemutil.Run "chrome"
For i = 1 To 3 Step 1
	Browser("creationtime:="&a&"").OpenNewTab
Next

s_time = timer
wait 10
e_time = timer
t_time = e_time - s_time
t_time = cbyte(t_time)
  For i = 1 To 4 Step 1
   	  If cint(t_time) => "10" Then
	      Browser("creationtime:="&a&"").close
      End If
  Next

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

systemutil.Run "chrome"
For i = 1 To 3 Step 1
	Browser("creationtime:="&a&"").OpenNewTab
Next

For i = 1 To 4 Step 1
	Browser("creationtime:="&a&"").close
Next
