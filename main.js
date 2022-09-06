
import moment from 'moment';



setInterval(()=>{
  let date_now = moment().format('MMMM Do YYYY, h:mm:ss a');

  let time = document.getElementById('time');

  time.innerHTML = date_now;
}, 1000);