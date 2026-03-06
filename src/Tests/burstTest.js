import http from "k6/http";
import { check } from "k6";

export const options = {

    scenarios: {

        burst: {
            executor: "constant-vus",
            vus: 50,
            duration: "10s",
        },

    },

};

export default function () {

    const res = http.get( "http://localhost:3000/metrics" );
    
    check(res, {
            "allowed or rate limited":
            r => r.status === 200 || r.status === 429,
        }
    );

}

/*


---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------


import http from "k6/http";
import { check } from "k6";
export const options = {
    scenarios: {
        burst: {
            executor: "constant-vus",
            vus: 50,
            duration: "200s",
        },
    },
};
export default function () {
    const res = http.get( "http://localhost:3000/metrics" );
    check(res, {
            "allowed or rate limited":
            r => r.status === 200 || r.status === 429,
        }
    );
}


---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------


ritikraj@Ritiks-MacBook-Air tests % k6 run burstTest.js

         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: burstTest.js
        output: -

     scenarios: (100.00%) 1 scenario, 50 max VUs, 3m50s max duration (incl. graceful stop):
              * burst: 50 looping VUs for 3m20s (gracefulStop: 30s)



  █ TOTAL RESULTS 

    checks_total.......: 2689045 13444.968604/s
    checks_succeeded...: 100.00% 2689045 out of 2689045
    checks_failed......: 0.00%   0 out of 2689045

    ✓ allowed or rate limited

    HTTP
    http_req_duration..............: avg=3.69ms min=474µs    med=3.28ms max=171.16ms p(90)=4.58ms p(95)=5.37ms
      { expected_response:true }...: avg=3.92ms min=866µs    med=3.34ms max=20.41ms  p(90)=4.82ms p(95)=5.75ms
    http_req_failed................: 99.99%  2688836 out of 2689045
    http_reqs......................: 2689045 13444.968604/s

    EXECUTION
    iteration_duration.............: avg=3.71ms min=505.08µs med=3.3ms  max=171.23ms p(90)=4.6ms  p(95)=5.4ms 
    iterations.....................: 2689045 13444.968604/s
    vus............................: 50      min=50                 max=50
    vus_max........................: 50      min=50                 max=50

    NETWORK
    data_received..................: 750 MB  3.8 MB/s
    data_sent......................: 207 MB  1.0 MB/s




running (3m20.0s), 00/50 VUs, 2689045 complete and 0 interrupted iterations
burst ✓ [======================================] 50 VUs  3m20s
ritikraj@Ritiks-MacBook-Air tests % 


{
  "allowed": 255,
  "blocked": 2760035
}





---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------

import http from "k6/http";
import { check } from "k6";

export const options = {

    scenarios: {

        burst: {
            executor: "constant-vus",
            vus: 50,
            duration: "5s",
        },

    },

};

export default function () {

    const res = http.get( "http://localhost:3000/metrics" );
    
    check(res, {
            "allowed or rate limited":
            r => r.status === 200 || r.status === 429,
        }
    );

}


---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------



ritikraj@Ritiks-MacBook-Air tests % k6 run burstTest.js

         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: burstTest.js
        output: -

     scenarios: (100.00%) 1 scenario, 50 max VUs, 35s max duration (incl. graceful stop):
              * burst: 50 looping VUs for 5s (gracefulStop: 30s)



  █ TOTAL RESULTS 

    checks_total.......: 71202   14228.311626/s
    checks_succeeded...: 100.00% 71202 out of 71202
    checks_failed......: 0.00%   0 out of 71202

    ✓ allowed or rate limited

    HTTP
    http_req_duration..............: avg=3.48ms min=844µs    med=3.09ms max=149.95ms p(90)=4.45ms p(95)=5.16ms 
      { expected_response:true }...: avg=4.09ms min=935µs    med=3.08ms max=11.75ms  p(90)=8.65ms p(95)=10.01ms
    http_req_failed................: 99.98% 71188 out of 71202
    http_reqs......................: 71202  14228.311626/s

    EXECUTION
    iteration_duration.............: avg=3.5ms  min=862.79µs med=3.11ms max=150.74ms p(90)=4.47ms p(95)=5.19ms 
    iterations.....................: 71202  14228.311626/s
    vus............................: 50     min=50             max=50
    vus_max........................: 50     min=50             max=50

    NETWORK
    data_received..................: 20 MB  4.0 MB/s
    data_sent......................: 5.5 MB 1.1 MB/s




running (05.0s), 00/50 VUs, 71202 complete and 0 interrupted iterations
burst ✓ [======================================] 50 VUs  5s
ritikraj@Ritiks-MacBook-Air tests % 











---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------



import http from "k6/http";
import { check } from "k6";

export const options = {

    scenarios: {

        burst: {
            executor: "constant-vus",
            vus: 5000,
            duration: "180s",
        },

    },

};

export default function () {

    const res = http.get( "http://localhost:3000" );
    
    check(res, {
            "allowed or rate limited":
            r => r.status === 200 || r.status === 429,
        }
    );

}



---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------


TOTAL RESULTS 

    checks_total.......: 1907493 10207.437729/s
    checks_succeeded...: 82.87%  1580886 out of 1907493
    checks_failed......: 17.12%  326607 out of 1907493

    ✗ allowed or rate limited
      ↳  82% — ✓ 1580886 / ✗ 326607

    HTTP
    http_req_duration..............: avg=167.56ms min=0s      med=222.13ms max=38.65s   p(90)=290.89ms p(95)=341.12ms
      { expected_response:true }...: avg=164.68ms min=620µs   med=173.59ms max=689.13ms p(90)=305.71ms p(95)=381.45ms
    http_req_failed................: 99.98%  1907296 out of 1907493
    http_reqs......................: 1907493 10207.437729/s

    EXECUTION
    iteration_duration.............: avg=474.55ms min=60.91µs med=233.68ms max=44.23s   p(90)=704.74ms p(95)=1.06s   
    iterations.....................: 1907493 10207.437729/s
    vus............................: 127     min=127                max=5000
    vus_max........................: 5000    min=5000               max=5000

    NETWORK
    data_received..................: 441 MB  2.4 MB/s
    data_sent......................: 111 MB  594 kB/s




running (3m06.9s), 0000/5000 VUs, 1907493 complete and 0 interrupted iterations
burst ✓ [======================================] 5000 VUs  3m0s
ritikraj@Ritiks-MacBook-Air tests % 








---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------








import http from "k6/http";
import { check } from "k6";

export const options = {

    scenarios: {

        burst: {
            executor: "constant-vus",
            vus: 50,
            duration: "5s",
        },

    },

};

export default function () {

    const res = http.get( "http://localhost:3000" );
    
    check(res, {
            "allowed or rate limited":
            r => r.status === 200 || r.status === 429,
        }
    );

}


---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------


ritikraj@Ritiks-MacBook-Air tests % k6 run burstTest.js

         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: burstTest.js
        output: -

     scenarios: (100.00%) 1 scenario, 50 max VUs, 35s max duration (incl. graceful stop):
              * burst: 50 looping VUs for 5s (gracefulStop: 30s)



  █ TOTAL RESULTS 

    checks_total.......: 67913   13572.515621/s
    checks_succeeded...: 100.00% 67913 out of 67913
    checks_failed......: 0.00%   0 out of 67913

    ✓ allowed or rate limited

    HTTP
    http_req_duration..............: avg=3.65ms min=548µs    med=3.25ms max=166.2ms  p(90)=4.56ms p(95)=5.31ms
      { expected_response:true }...: avg=3.15ms min=548µs    med=3.14ms max=8.02ms   p(90)=4.82ms p(95)=6.13ms
    http_req_failed................: 99.97% 67899 out of 67913
    http_reqs......................: 67913  13572.515621/s

    EXECUTION
    iteration_duration.............: avg=3.67ms min=585.62µs med=3.27ms max=168.08ms p(90)=4.59ms p(95)=5.34ms
    iterations.....................: 67913  13572.515621/s
    vus............................: 50     min=50             max=50
    vus_max........................: 50     min=50             max=50

    NETWORK
    data_received..................: 19 MB  3.8 MB/s
    data_sent......................: 4.8 MB 950 kB/s




running (05.0s), 00/50 VUs, 67913 complete and 0 interrupted iterations
burst ✓ [======================================] 50 VUs  5s
ritikraj@Ritiks-MacBook-Air tests % 

*/