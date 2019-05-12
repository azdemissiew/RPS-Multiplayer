const config = {
    apiKey: "AIzaSyDlkbm0wLvO4DMCpTJSuKgQIAovInzs-Gw",
    authDomain: "train-schedule-717ae.firebaseapp.com",
    databaseURL: "https://train-schedule-717ae.firebaseio.com",
    projectId: "train-schedule-717ae",
    storageBucket: "train-schedule-717ae.appspot.com",
    messagingSenderId: "604472148436",
    appId: "1:604472148436:web:83098c2d4f15e6db"
  };
  // Initialize Firebase
firebase.initializeApp(config);

  // create a variable
var trainName = "";
var destination = "";
var trainTime = 0;
var frequency = 0;

  $("#submitBtn").on("click", function (){
    // the user input or value  of the form
   trainName = $("#nameInput").val().trim();
    destination = $("#destinationInput").val().trim();
     trainTime = $("#timeInput").val().trim();
    
     frequency = $("#frequencyInput").val().trim();

   

   
   
    // we upload it to  the database 
    firebase.database().ref().push ({
       trainName:trainName,
       destination:destination,
       trainTime:trainTime,
       frequency:frequency

     })
    
    });














