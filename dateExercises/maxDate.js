function max_date(all_dates) {
    
    var maxdate = all_dates[0];
    var maxdateObj = new Date(all_dates[0]);
    
    for(dt in all_dates){
        //console.log(new Date(all_dates[dt]),maxdateObj);
        if(new Date(all_dates[dt]) > maxdateObj)
        {
            maxdate = all_dates[dt];
            maxdateObj = new Date(all_dates[dt]);
    }

    }    
     return maxdate;
      }



      function mindate(all_dates){

        all_dates.sort();
        return (all_dates[0]);

    }

    console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
    console.log(mindate(['2015/02/01', '2015/02/02', '2015/01/03']));