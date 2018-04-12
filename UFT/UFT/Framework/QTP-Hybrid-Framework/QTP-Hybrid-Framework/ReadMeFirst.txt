Before running the test cases in this framework, please make sure that - 

You directly copy the framework to C:\ drive. The folder 'QTP-Hybrid-Framework' should be a top level folder inside C:\ drive so that
the path formed should be like this - C:\QTP-Hybrid-Framework\..... This would ensure that all the bindings and folder locations are intact.

Incase you want to store the framework in some location other than C:\ drive, then make sure that - 
1) Both the function libraries are associated with all the 3 test cases
2) Object repository is correctly associated to all the 3 test cases
3) You have provide the correct value for 'sExcelWorkbookPath' variable in 'Generic_FunctionLibrary.qfl' function library.
4) You have provide correct path of DriverScript.vbs file in the VBA macro
5) You have provided the correct value for 'sFrameworkFolder' variable in DriverScript.vbs
6) In DriverScript.vbs file, the code for sending email (at line 34) is commented. If you have Outlook configured, then provide a valid email id in 'sEmailTo' field (line 17) and then uncomment the code (at line 34) so that the framework can send email after completion of the batch run



FLOW OF THE TEST CASES:

1) TC_01_CreateOrder: Login to Application -> Create a New Order -> Close Application
2) TC_02_ModifyOrder: Login to Application -> Create a New Order -> Update the Order -> Close Application
3) TC_03_DeleteOrder: Login to Application -> Create a New Order -> Delete the Order -> Close Application