import http from 'k6/http';

export const options = {

  vus: 20,                          // 20 virtual users

  duration: '5s',                   // run for 5 seconds

};

export default function () {
  
  http.get( 'http://localhost:3000' );

}



/*

------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------



ritikraj@Ritiks-MacBook-Air tests % k6 run burstTest.js                                                                      


         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: burstTest.js
        output: -

     scenarios: (100.00%) 1 scenario, 20 max VUs, 35s max duration (incl. graceful stop):
              * default: 20 looping VUs for 5s (gracefulStop: 30s)



  █ TOTAL RESULTS 

    HTTP
    http_req_duration..............: avg=1.75ms min=729µs    med=1.68ms  max=30.29ms p(90)=2.27ms  p(95)=2.65ms 
      { expected_response:true }...: avg=9.71ms min=3.99ms   med=10.21ms max=16.61ms p(90)=15.08ms p(95)=15.85ms
    http_req_failed................: 99.98% 56241 out of 56250
    http_reqs......................: 56250  11247.318639/s

    EXECUTION
    iteration_duration.............: avg=1.77ms min=746.16µs med=1.69ms  max=31.41ms p(90)=2.29ms  p(95)=2.66ms 
    iterations.....................: 56250  11247.318639/s
    vus............................: 20     min=20             max=20
    vus_max........................: 20     min=20             max=20

    NETWORK
    data_received..................: 16 MB  3.2 MB/s
    data_sent......................: 3.9 MB 787 kB/s




running (05.0s), 00/20 VUs, 56250 complete and 0 interrupted iterations
default ✓ [======================================] 20 VUs  5s
ritikraj@Ritiks-MacBook-Air tests % 


*/