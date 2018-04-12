path = environment.Value("TestDir")
print path
URL = left(path,InstrRev(Environment("TestDir"),"\")) 
print URL

'strCLM_SetupPath  = Left(Environment("TestDir"),InstrRev(Environment("TestDir"),"\"))&"CLM_SETUP.xls"
'LoadFunctionLibrary pathfinder.Locate("..\")&"Jazz_FunctionLib.qfl"

