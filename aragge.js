var cheerio = require('cheerio');
var fs = require('fs');
var request = require('request');

var Twitter = require('twitter');
var time = require('time')(Date);
 
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

var url = 'http://aragge.ch/cgi-bin/data_frame.pl';

var now = new Date();
now.setTimezone('Europe/Zurich');

var oneHour = 60 * 60 * 1000;
var lastCheck = new Date(now - oneHour);
lastCheck.setTimezone('Europe/Zurich');

var month = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

var params = {
  start_hour: '' + lastCheck.getHours(),
  hour_count: "24",
  start_day: '' + lastCheck.getDate(),
  start_month_name: month[lastCheck.getMonth()],
  end_day: '' + now.getDate(),
  end_month_name: month[now.getMonth()],
  year: '' + (now.getYear() + 1900),
  m_type:'All%20Types',
  m_airport:'Geneva',
  m_noise_charge:'Geneva',
  Search:'Search'
};


function query(registration, callback) {
  if (registration) {
    params.SelectRegistration = registration;
  }

  var flights = [];

  var p = [];
  for (var i in params) {
          p.push(i + '=' + params[i]);
  }
  var fullUrl = url + '?' + p.join('&');
  request.get(fullUrl, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);
      var rowTitles = [];
      $('tr').each(function(row, elem) {
        var data = $(this);
        if (row == 0) {
          data.find('th').each(function(col, elem) {
            rowTitles.push($(this).text());
          });
        } else {
          var flight = {};
          data.find('td').each(function(col, elem) {
            flight[rowTitles[col]] = $(this).text();
          });
          flights.push(flight);
        }
      });
      callback(undefined, flights);
    } else {
      callback(error);
    }
  }); 
}

// The following list contains:
// 'registration ID' : 'Owner'
var planes = {
  // Algeria
 '7T-VPP' : 'Airbus A340 VIP used by Algerian government',
 '7T-VPF' : 'ATR42 used by Algerian government',
 '7T-VPE' : 'ATR42 used by Algerian government',
 '7T-VPS' : 'Gulfstream IV used by Algerian government',
 '7T-VPC' : 'Gulfstream IV used by Algerian government',
 '7T-VPM' : 'Gulfstream IV used by Algerian government',
 '7T-VPG' : 'Gulfstream V used by Algerian government',
 
 // Angola
 'D2-EYU' : 'De Havilland Dash 8 used by Angola government',
 'D2-EEA' : 'De Havilland Dash 8 used by Angola government',
 'D2-EEB' : 'De Havilland Dash 8 used by Angola government',

 
 // Azerbaijan
 '4K-AIO1' : 'Boeing 767 "Baku 1" used by Azerbaijan government',
 '4K-AI06' : 'Gulfstream G550 used by Azerbaijan government',
 
 // Belarus
 'EW-001PA' : 'Boeing 737 used by Belarus government',
 'EW-001PB' : 'Boeing 767 used by Belarus government',
 
 //Cameroon
 'TJ-AAC' : 'Boeing 767 used by Cameroon government',

 // Equatorial Guinea
 '3C-EGE' : 'Boeing 737 used by Teodoro Obiang, Equatorial Guinea',
 '3C-ONM' : 'Dassault 900B used by Teodorin Obiang, Equatorial Guinea',
 '3C-LGE' : 'Falcon 50 used by Equatorial Guinea government',
 '3C-LLU' : 'Boeing 767 used by Equatorial Guinea government',
 'CS-TQX' : 'Boeing 777 used by Equatorial Guinea government',
 
 // Gabon
 'TR-KJD' : 'ATR 42M used by Gabonese government',
 'TR-KPR' : 'Boeing 777 VIP used by Gabonese government',
 
 // Ivory Coast
 'TU-VAD' : 'Gulfstream IV used by Ivory Coast government',
 'TU-VAS' : 'A319 VIP used by Ivory Coast government',

 //Jordan
 'VQ-BDD' : 'Airbus A318 Elite used by Jordanian government',
 
 // Kazakhstan	
 'P4-KAZ' : 'Boeing 737 used by Kazakhstan government',
 'UP-A2001' : 'Airbus A320 used by Kazakhstan government',
 'UP-A3001' : 'Airbus A330 used by Kazakhstan government',
 'UP-B5701' : 'Boeing 757 used by Kazakhstan government',
 
 // Kuwait
 '9K-GBA' : 'Airbus A340 VIP used by Kuwait government',
 '9K-GBB' : 'Airbus A340 VIP used by Kuwait government',
 '9K-AKD' : 'Airbus A320 VIP used by Kuwait government',
 '9K-GEA' : 'Airbus A319 VIP used by Kuwait government',
 '9K-GCC' : 'Boeing 737 VIP used by Kuwait government',
 '9K-GAA' : 'Boeing 747 VIP used by Kuwait government',
 '9K-AJD' : 'Gulfstream V used by Kuwait government',
 '9K-AJE' : 'Gulfstream V used by Kuwait government',
 '9K-AJF' : 'Gulfstream V used by Kuwait government',
 '9K-GFA' : 'Gulfstream 550 used by Kuwait government',
 
 // Libya
 '5A-ONE' : 'Airbus A340 used Libyan government',
 
 // Russia
 'RA-96016' : 'Ilyushin Il-96 used Russian president Vladimir Putin',
 'RA-96017' : 'Ilyushin Il-96 used Russian president Vladimir Putin',

 // Saudi Arabia
 // Source: http://i.dailymail.co.uk/i/pix/2015/07/01/16/2A25797C00000578-3145792-The_prince_has_several_planes_including_the_smaller_A_Hawker_jet-a-12_1435765095892.jpg
 'HZ-WBT7' : 'Prince Al Waleed\'s Boeing 747',
 'HZ-WBT5' : 'Prince Al Waleed\'s Hawker',
 // "Saudi Arabian Royal Flight" planes operate for the ruling family
 'HZ-HMS2' : 'A340 for use by the royal family',
 'HZ-HMS1' : 'B747 registered to Prince Sultan Bin Abdulaziz',
 'HZ-HM1B' : 'B747 for the use of the royal family',
 'HZ-HM1A' : 'B747 for the use of the royal family',
 'HZ-HM1C' : 'B747 for the use of the royal family',

 // Bahrain
 // Source: https://www.youtube.com/watch?v=XlRT3ruTnkU
 'A9C-HMK' : 'Boeing 747 used by the king of Bahrain',

 // Qatar
 // Source https://www.youtube.com/watch?v=-BCVLX7Pdfc
 // https://en.wikipedia.org/wiki/Qatar_Amiri_Flight
 // http://www.airframes.org/fleet/qaf
 'VQ-BSK' : 'Boeing 747 used by the royal family of Qatar',
 'A7-AAG' : 'A320 used by the royal family of Qatar',
 'A7-AAH' : 'A340 used by the royal family of Qatar',
 'A7-AAM' : 'Bombardier BD-700 used by the royal family of Qatar',
 'A7-AFE' : 'A310 used by the royal family of Qatar',
 'A7-HHE' : 'Boeing 747 used by the royal family of Qatar',
 'A7-HHH' : 'A340 used by the royal family of Qatar',
 'A7-HHJ' : 'A319 used by the royal family of Qatar',
 'A7-HHK' : 'A340 used by the royal family of Qatar',
 'A7-HHM' : 'A330 used by the royal family of Qatar',
 'A7-HJJ' : 'A330 used by the royal family of Qatar',
 'A7-HSJ' : 'A320 used by the royal family of Qatar',
 'A7-MBK' : 'A320 used by the royal family of Qatar',
 'A7-MED' : 'A319 used by the royal family of Qatar',
 'A7-MHH' : 'A319 used by the royal family of Qatar',
 'VP-BAT' : 'Boeing 747 used by the royal family of Qatar',

 // Sudan
 // Source: http://www.airplane-pictures.net/photo/465501/st-prm-sudan-government-antonov-an-72/
 'ST-PRM' : 'An-72 of the Sudanese government',
 // Source: http://www.philstar.com/world/2015/09/02/1495088/china-parade-draws-putin-few-other-major-world-leaders
 'ST-PRA' : 'Il-62 used by Omar Al-Bashir',

 // Oman
 // The Royal Flight of Oman caters for the need of the royals
 'A4O-AJ' : 'A319 of the Oman royal family',
 'A4O-AA' : 'A320 of the Oman royal family',
 'A4O-OMN' : 'B747 of the Oman royal family',
 'A4O-HMS' : 'B747 of the Oman royal family',
 'A4O-SO' : 'B747 of the Oman royal family',
 'A4O-AD' : 'Gulfstream of the Oman royal family',
 'A4O-AE' : 'Gulfstream of the Oman royal family',

 // Algeria
 // Source: http://www.liberation.fr/planete/2014/11/15/le-president-algerien-bouteflika-a-quitte-la-clinique-de-grenoble_1143663
 '7T-VPM' : 'Gulfstream used by the Algerian government',

 // Chad
 // Source: http://www.airteamimages.com/mcdonnell-douglas-md-80_TT-ABC_chad-government_93128.html
 'TT-ABC' : 'MD-87 used by the government of Chad'
};

var testPlanes = { 'HB-JXA' : 1, 'HB-JYN': 1 };


function tweet(str) {
  client.post('statuses/update', {status: str}, function(error, tweet, response){
    if (error) {
      console.error('Failed to tweet: ');
      console.warn(error);
    }
  });
}

query(process.argv[2], function(error, flights) {
  if (error) {
    console.log(error);
  } else {
    //console.warn(flights);
    for (var i in flights) {
      var flight = flights[i];
      var reg = flight['Reg.'];
      if (process.argv[2] || reg in planes) {
        var verb = (flight.M_Type.match(/Landing/) ? 'landed at' : 'left');
        var str = 
          (reg in testPlanes ? '(test) A plane' : 'A dictator\'s plane')
          + ' ' + verb + ' #gva airport: '
          + (reg in planes && planes[reg] ? planes[reg] + " (" + reg +')' : reg)
          + ' on ' + flight.Date + ' at ' + flight.Time;
        console.log(str);
        tweet(str);
      }
    }
  } 
});



