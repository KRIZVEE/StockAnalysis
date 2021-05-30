function sendProfitMail() {

  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var email_sheet=ss.getSheetByName('emailListSheet');
  var main_sheet = ss.getSheetByName('testFinalVersionSheet');
  var numOfCol = main_sheet.getLastColumn();
  var subject = 'this is a subject text';
  var message = 'this is a message text';
  var tickerSymbol = "XYZ";
  
  for (var i = 3; i < numOfCol+1; i++){
    var profitValue = main_sheet.getRange(17,i).getValue();
    tickerSymbol = main_sheet.getRange(2,i).getValue();  
    
  if(profitValue >= 0.05 && profitValue < 0.3){
      subject = tickerSymbol + ' Profit > 5%, Congratulation !!!';
      message = 'Congratulation, Your profit has reached '+Math.round(profitValue*100,2)+ '% in '+tickerSymbol;
      var n=email_sheet.getLastRow();
      for (var j = 2; j < n+1 ; j++ ) {
      var emailAddress = email_sheet.getRange(j,2).getValue();
      MailApp.sendEmail(emailAddress, subject, message);
  } }
  if(profitValue >= 0.3 && profitValue < 0.4){
      subject = tickerSymbol + ' Profit > 30%, Congratulation !!!';
      message = 'Congratulation, Your profit has reached '+Math.round(profitValue*100,2)+ '% in '+tickerSymbol;
      var n=email_sheet.getLastRow();
      for (var j = 2; j < n+1 ; j++ ) {
      var emailAddress = email_sheet.getRange(j,2).getValue();
      MailApp.sendEmail(emailAddress, subject, message);
  } }
  
  if(profitValue >= 0.4 && profitValue < 0.5){
      subject = tickerSymbol + ' Profit > 40%, Congratulation !!!';
      message = 'Congratulation, Your profit has reached '+Math.round(profitValue*100,2)+ '% in '+tickerSymbol;
      var n=email_sheet.getLastRow();
      for (var j = 2; j < n+1 ; j++ ) {
      var emailAddress = email_sheet.getRange(j,2).getValue();
      MailApp.sendEmail(emailAddress, subject, message);
  } }
  
  if(profitValue >= 0.5){
      subject = tickerSymbol + ' Profit > 50%, Congratulation !!!';
      message = 'Congratulation, Your profit has reached '+Math.round(profitValue*100,2)+ '% in '+tickerSymbol;
      var n=email_sheet.getLastRow();
      for (var j = 2; j < n+1 ; j++ ) {
      var emailAddress = email_sheet.getRange(j,2).getValue();
      MailApp.sendEmail(emailAddress, subject, message);
  }  
  }
  
  }
  }
  
  