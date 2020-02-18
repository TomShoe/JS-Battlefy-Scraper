const fetch = require("node-fetch");
var moment = require('moment');
var jq = require('jquery');
var document = require('html-element');


const data = await fetch("https://dtmwra1jsgyb0.cloudfront.net/stages/5e2399e8a66ac856e4ebf667/rounds/1/matches").then(x => x.json());


var dates = [], team1 = [], team2 = [], score1 = [], score2 = [], winner = [];
var hours = [], minutes = [], day = [], month = [], year = [], final = [];
var z = 1;


for (const match of data.filter(x => x.isComplete)) {
    team1.push(match.top.name);
    team2.push(match.bottom.name);
    score1.push(match.top.score);
    score2.push(match.bottom.score);
    }
    
for (const match of data.filter(x => x.isComplete)) {
    dates.push(new moment(match.schedule.startTime, 'YYYY-MM-DD hh:mm'));
    }
    
for(i = 0; i < dates.length; i++) {
    if (score1[i] > score2[i]) {
        winner[i] = 1;
        } else {
        winner[i] = 2;
        }
    dates[i].subtract(3, 'hours');
    hours.push(dates[i].hours());
    minutes.push(dates[i].minutes());
    day.push(dates[i].date());
    month.push(dates[i].month() + 1);
    year.push(dates[i].year());
    hours.push(dates[i].hours());
    minutes.push(dates[i].minutes());
    }


for (y = 0; y < dates.length; y++) {
    final.push("{{MatchSchedule|initialorder=" + z++ + "|team1=" + team1[y] + "|team2=" + team2[y] + "|team1score=" + score1[y] + "|team2score=" + score2[y] + "|winner=" + winner[y] + "|date=" + year[y] + "-" + day[y] + "-" + day[y] + "|time=" + hours[y] + ":" + minutes[y] + "|timezone=PST|dst=no|vod1=|stream=}}");
    }
    
    var str = final.join('/n');
    console.log(str);
