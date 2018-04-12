namespace Script
{
    using System;
    using System.Xml;
    using System.Xml.Schema;
    using HP.ST.Ext.BasicActivities;
    using HP.ST.Fwk.RunTimeFWK;
    using HP.ST.Fwk.RunTimeFWK.ActivityFWK;
    using HP.ST.Fwk.RunTimeFWK.Utilities;
    using HP.ST.Fwk.RunTimeFWK.CompositeActivities;
	using HP.ST.Ext.CustomDataProviders.Extensions;
	using HP.ST.Ext.CustomDataProviders.ExcelFileArguments;
    
    [Serializable()]
    public class TestUserCode : TestEntities
    {
   
    	
    	/// <summary>
    	/// Handler for the FileWriteActivity47 Activity’s CodeCheckPointEvent event.
    	/// </summary>
    	/// <param name=\"sender\">The activity object that raised the CodeCheckPointEvent event.</param>
    	/// <param name=\"args\">The event arguments passed to the activity.</param>
    	/// Use this.FileWriteActivity47 to access the FileWriteActivity47 Activity's context, including input and output properties.
    	public void FileWriteActivity47_OnCodeCheckPointEvent(object sender, CheckpointEventArgs args)
    	{
    		//TODO: Add your code here...
    	}

    	/// <summary>
    	/// Handler for the FileWriteActivity27 Activity’s BeforeExecuteStepEvent event.
    	/// </summary>
    	/// <param name=\"sender\">The activity object that raised the BeforeExecuteStepEvent event.</param>
    	/// <param name=\"args\">The event arguments passed to the activity.</param>
    	/// Use this.FileWriteActivity27 to access the FileWriteActivity27 Activity's context, including input and output properties.
    	public void FileWriteActivity27_OnBeforeExecuteStepEvent(object sender, STActivityBaseEventArgs args)
    	{
    		//TODO: Add your code here...
    	}

    	/// <summary>
    	/// Handler for the ReportMessageActivity45 Activity’s AfterExecuteStepEvent event.
    	/// </summary>
    	/// <param name=\"sender\">The activity object that raised the AfterExecuteStepEvent event.</param>
    	/// <param name=\"args\">The event arguments passed to the activity.</param>
    	/// Use this.ReportMessageActivity45 to access the ReportMessageActivity45 Activity's context, including input and output properties.
    	public void ReportMessageActivity45_OnAfterExecuteStepEvent(object sender, STActivityBaseEventArgs args)
    	{
    		//TODO: Add your code here...
    		
    	}
}

}
