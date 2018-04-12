RunAction "login", oneIteration
RunAction "flight book", oneIteration, "02/27/16", DataTable("passenger", dtGlobalSheet), DataTable("name", dtGlobalSheet)
RunAction "close", oneIteration, Parameter("flight book", "total_prize")