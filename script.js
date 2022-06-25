function commandParser() {
    
}

function GetClock() {        
    var d = new Date();
    var nhour = d.getHours(), nmin = d.getMinutes(), nsec = d.getSeconds();
    if (nhour <= 9) nhour = "0" + nhour;
    if (nmin<=9) nmin = "0"+nmin;
    if (nsec<=9) nsec = "0"+nsec;
    
    var nyear = d.getFullYear();
    // var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    var nmonth = d.getMonth();
    if (nmonth <= 9) nmonth = "0" + nmonth;            
                                        
    var nday = d.getDay();
    if (nday <= 9) nday = "0" + nday;
    var tdays = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
    var tday = tdays[d.getDay()];
                           
    var clocktext = nhour + ":" + nmin + ":" +nsec;
    var datetext =  nyear + " 年 " + nmonth + " 月 " + nday + " 日 ";
    var fulltext = clocktext + "<br>" + tday + "<br>" + datetext;
                
    document.getElementById("clockbox").innerHTML = fulltext;
     
    window.setTimeout(GetClock, 1000);   
}

