import http from "k6/http";
import { check } from "k6";

export default function () {
    const res = http.get( "http://localhost:3000" );
    
    check( res, { " allowed or rate limited " : r => r.status === 200 || r.status === 429, } );

}



/*

------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------

ritikraj@Ritiks-MacBook-Air tests % k6 run test.js

         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: test.js
        output: -

     scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
              * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)



  █ TOTAL RESULTS 

    checks_total.......: 1       63.779578/s
    checks_succeeded...: 100.00% 1 out of 1
    checks_failed......: 0.00%   0 out of 1

    ✓  allowed or rate limited 

    HTTP
    http_req_duration..............: avg=11.71ms min=11.71ms med=11.71ms max=11.71ms p(90)=11.71ms p(95)=11.71ms
      { expected_response:true }...: avg=11.71ms min=11.71ms med=11.71ms max=11.71ms p(90)=11.71ms p(95)=11.71ms
    http_req_failed................: 0.00% 0 out of 1
    http_reqs......................: 1     63.779578/s

    EXECUTION
    iteration_duration.............: avg=14.96ms min=14.96ms med=14.96ms max=14.96ms p(90)=14.96ms p(95)=14.96ms
    iterations.....................: 1     63.779578/s

    NETWORK
    data_received..................: 257 B 16 kB/s
    data_sent......................: 70 B  4.5 kB/s




running (00m00.0s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  00m00.0s/10m0s  1/1 iters, 1 per VU
ritikraj@Ritiks-MacBook-Air tests % 


------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------

*/






/*

------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------


import http from 'k6/http';

export const options = {

  vus: 20,                          // 20 virtual users

  duration: '5s',                   // run for 5 seconds

};

export default function () {
  
  http.get( 'http://localhost:3000' );

}



------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------




ritikraj@Ritiks-MacBook-Air tests % k6 run test.js        


         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: test.js
        output: -

     scenarios: (100.00%) 1 scenario, 20 max VUs, 35s max duration (incl. graceful stop):
              * default: 20 looping VUs for 5s (gracefulStop: 30s)



  █ TOTAL RESULTS 

    HTTP
    http_req_duration..............: avg=1.42ms min=160µs    med=1.2ms  max=41.12ms p(90)=2.28ms p(95)=2.48ms
      { expected_response:true }...: avg=2.07ms min=697µs    med=1.45ms max=5.46ms  p(90)=4.03ms p(95)=4.73ms
    http_req_failed................: 99.97% 69361 out of 69375
    http_reqs......................: 69375  13867.963395/s

    EXECUTION
    iteration_duration.............: avg=1.43ms min=172.12µs med=1.21ms max=41.16ms p(90)=2.29ms p(95)=2.49ms
    iterations.....................: 69375  13867.963395/s
    vus............................: 20     min=20             max=20
    vus_max........................: 20     min=20             max=20

    NETWORK
    data_received..................: 19 MB  3.9 MB/s
    data_sent......................: 4.9 MB 971 kB/s




running (05.0s), 00/20 VUs, 69375 complete and 0 interrupted iterations
default ✓ [======================================] 20 VUs  5s
ritikraj@Ritiks-MacBook-Air tests % 

*/