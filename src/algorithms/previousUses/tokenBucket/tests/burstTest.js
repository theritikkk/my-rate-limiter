import http from 'k6/http';

export const options = {

  vus: 20,                          // 20 virtual users

  duration: '5s',                   // run for 5 seconds

};

export default function () {
  
  http.get( 'http://localhost:3000' );

}


/*

This is result of k6 :
ritikraj@Ritiks-MacBook-Air src % k6 run burstTest.js

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
    http_req_duration..............: avg=2.61ms min=1.02ms med=2.21ms max=62.03ms p(90)=3.36ms  p(95)=3.95ms
      { expected_response:true }...: avg=7.75ms min=2.12ms med=9.69ms max=14.72ms p(90)=11.23ms p(95)=12.7ms
    http_req_failed................: 99.96% 37754 out of 37768
    http_reqs......................: 37768  7550.628073/s

    EXECUTION
    iteration_duration.............: avg=2.64ms min=1.04ms med=2.23ms max=62.05ms p(90)=3.39ms  p(95)=3.98ms
    iterations.....................: 37768  7550.628073/s
    vus............................: 20     min=20             max=20
    vus_max........................: 20     min=20             max=20

    NETWORK
    data_received..................: 11 MB  2.1 MB/s
    data_sent......................: 2.6 MB 529 kB/s




running (05.0s), 00/20 VUs, 37768 complete and 0 interrupted iterations
default ✓ [======================================] 20 VUs  5s
ritikraj@Ritiks-MacBook-Air src % 


*/