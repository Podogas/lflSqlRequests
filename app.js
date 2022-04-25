require('dotenv').config(); 
const express = require('express');
const mysql = require("mysql2");

const lflDbConnection = mysql.createConnection({
  host: `${process.env.DB_HOST}`,
  port: process.env.DB_PORT,
  user: `${process.env.DB_USERNAME}`,
  database: `${process.env.DB_NAME}`,
  password: `${process.env.DB_PASS}`
});

const lflDbError = require('./errors/lflDbErrors.js');
const TestRequest = require('./utils/SqlRequests.js');
const test = require('./controllers/test.js');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const app = express();


lflDbConnection.connect(lflDbError);
app.use(requestLogger);
// TEST ZONE!!!
lflDbConnection.query(TestRequest, test);
// END OF TEST ZONE!!!
lflDbConnection.end();
app.use(errorLogger);



// logger, 

















/*
const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "91.189.87.218",
  port: 3306,
  user: "report",
  database: "sitelfl",
  password: "report"
});
 connection.connect(function(err)
    if (err) {{
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });


 connection.query(`SELECT 
   calendar.tour as "Round",
   calendar.match_date_time as "Date",
   HomeTeamUAO.Team_Name as "Home",
   calendar.home_score as "Score Away",
   calendar.away_score as "Score Home",
   AwayTeamUAO.Team_Name as "Away",
   stadiums.name as "Stadium"
 FROM 
  calendar,
  tournaments,
  HomeTeamUAO,
  AwayTeamUAO,
  stadiums
  WHERE 
   calendar.match_date_time between (curdate()-5) and curdate()
   and calendar.tournament_id=tournaments.tournament_id
   and tournaments.name="Высший дивизион ЮЛ-2022"
   and calendar.home_id=HomeTeamUAO.home_id 
   and calendar.away_id=AwayTeamUAO.away_id
   and stadiums.stadium_id=calendar.stadium_id`,
  function(err, results, fields) {
    console.log(err);
    console.log(results); // собственно данные
    console.log(fields); // мета-данные полей 
});

 connection.end();

/*  // закрытие подключения
 connection.end(function(err) {
  if (err) {
    return console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
});*/




