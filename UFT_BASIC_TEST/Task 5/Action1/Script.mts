'Open gmail account from uft and sign in with username and password.

Systemutil.Run "iexplore.exe","http:\\www.gmail.com"
Browser("Gmail").Page("Gmail").WebEdit("Email").Set"memo.sourabh@gmail.com"
Browser("Gmail").Page("Gmail").WebButton("Next").Click
Browser("Gmail").Page("Gmail").WebEdit("Passwd").Set"sourabh24"
Browser("Gmail").Page("Gmail").WebButton("Sign in").Click
