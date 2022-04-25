const TestRequest = `SELECT 
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
   and stadiums.stadium_id=calendar.stadium_id
`;
module.exports = TestRequest;