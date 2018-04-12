using System;
    using System.Collections.Generic;
    using System.Text;
    using HP.ST.Fwk.RunTimeFWK.Utilities;
    using HP.ST.Fwk.RunTimeFWK.BindingFWK;
    
    namespace Script
    {
    
    public class TestEntities
    {
    public ISTRunTimeContext Context = null;
    public Dictionary<string, HP.ST.Fwk.RunTimeFWK.DataHandling.IDataSource> dataSourceNameToDataSource = new Dictionary<string, HP.ST.Fwk.RunTimeFWK.DataHandling.IDataSource>();
    
    protected HP.ST.Fwk.RunTimeFWK.DataHandling.IDataSource GetDataSource(string dataSourceName)
    {
    if(!dataSourceNameToDataSource.ContainsKey(dataSourceName))
    	throw new Exception(("A data source with the specified name does not exist."));
    return dataSourceNameToDataSource[dataSourceName];
    }
    public HP.ST.Ext.BasicActivities.DataFetchActivity DataFetchActivity73 = null;
    public HP.ST.Ext.BasicActivities.DataFetchActivity DataFetchActivity70 = null;
    public HP.ST.Ext.BasicActivities.DataFetchActivity DataFetchActivity67 = null;
    public HP.ST.Ext.BasicActivities.StartActivity StartActivity1 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.Loop<Loop2Input> Loop2 = null;
    public HP.ST.Ext.BasicActivities.DataExporterActivity DataExporterActivity69 = null;
    public HP.ST.Ext.BasicActivities.DataExporterActivity DataExporterActivity72 = null;
    public HP.ST.Ext.BasicActivities.DataExporterActivity DataExporterActivity75 = null;
    public HP.ST.Ext.BasicActivities.DataExporterCloseActivity DataExporterCloseActivity76 = null;
    public HP.ST.Ext.BasicActivities.EndActivity EndActivity3 = null;
    public HP.ST.Ext.BasicActivities.DataDisconnectActivity DataDisconnectActivity68 = null;
    public HP.ST.Ext.BasicActivities.DataDisconnectActivity DataDisconnectActivity71 = null;
    public HP.ST.Ext.BasicActivities.DataDisconnectActivity DataDisconnectActivity74 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.Sequence Sequence66 = null;
    public HP.ST.Ext.WebServicesActivities.StServiceCallActivity StServiceCallActivity10 = null;
    public HP.ST.Ext.WebServicesActivities.StServiceCallActivity StServiceCallActivity12 = null;
    public HP.ST.Ext.BasicActivities.FileExistsActivity FileExistsActivity33 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElse<IfElse29Input> IfElse29 = null;
    public HP.ST.Ext.BasicActivities.ReportMessageActivity ReportMessageActivity42 = null;
    public HP.ST.Ext.BasicActivities.FileWriteActivity FileWriteActivity47 = null;
    public HP.ST.Ext.WebServicesActivities.StServiceCallActivity StServiceCallActivity17 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElse<IfElse21Input> IfElse21 = null;
    public HP.ST.Ext.BasicActivities.ReportMessageActivity ReportMessageActivity41 = null;
    public HP.ST.Ext.BasicActivities.FileWriteActivity FileWriteActivity52 = null;
    public HP.ST.Ext.BasicActivities.FileWriteActivity FileWriteActivity60 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElseBranch IfElseBranch30 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElseBranch IfElseBranch31 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElseBranch IfElseBranch22 = null;
    public HP.ST.Fwk.RunTimeFWK.CompositeActivities.IfElseBranch IfElseBranch23 = null;
    public HP.ST.Ext.BasicActivities.ReportMessageActivity ReportMessageActivity46 = null;
    public HP.ST.Ext.BasicActivities.FileWriteActivity FileWriteActivity48 = null;
    public HP.ST.Ext.BasicActivities.ConcatenateStringsActivity ConcatenateStringsActivity65 = null;
    public HP.ST.Ext.BasicActivities.FileWriteActivity FileWriteActivity32 = null;
    public HP.ST.Ext.BasicActivities.FileCreateActivity FileCreateActivity55 = null;
    public HP.ST.Ext.BasicActivities.ReportMessageActivity ReportMessageActivity56 = null;
    public HP.ST.Ext.BasicActivities.FileWriteActivity FileWriteActivity58 = null;
    public HP.ST.Ext.BasicActivities.FileWriteActivity FileWriteActivity57 = null;
    public HP.ST.Ext.BasicActivities.FileWriteActivity FileWriteActivity27 = null;
    public HP.ST.Ext.WebServicesActivities.StServiceCallActivity StServiceCallActivity20 = null;
    public HP.ST.Ext.BasicActivities.ReportMessageActivity ReportMessageActivity43 = null;
    public HP.ST.Ext.BasicActivities.FileWriteActivity FileWriteActivity44 = null;
    public HP.ST.Fwk.RunTimeFWK.Break Break36 = null;
    public HP.ST.Ext.BasicActivities.ReportMessageActivity ReportMessageActivity51 = null;
    public HP.ST.Ext.BasicActivities.FileWriteActivity FileWriteActivity50 = null;
    
    }
    
    }
    