function(doc) {
if(doc.dtstart === "2013-01-14T11:00:13:00"
||doc.dtstart === "2013-01-15T11:00:13:00"
||doc.dtstart === "2013-0116T10:30:13:00"
||doc.dtstart === "2013-01-17T11:00:13:00"
||doc.dtstart === "2013-01-18T09:30:13:00") 
emit(doc.dtstart,doc);
}
}
