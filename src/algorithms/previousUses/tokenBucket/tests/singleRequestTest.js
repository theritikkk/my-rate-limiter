import http from 'k6/http';

export default function () {

  http.get( 'http://localhost:3000' );
  
}




/*  

This is result of k6 testing :


ritikraj@Ritiks-MacBook-Air src % k6 run test.js


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

    HTTP
    http_req_duration..............: avg=66.96ms min=66.96ms med=66.96ms max=66.96ms p(90)=66.96ms p(95)=66.96ms
      { expected_response:true }...: avg=66.96ms min=66.96ms med=66.96ms max=66.96ms p(90)=66.96ms p(95)=66.96ms
    http_req_failed................: 0.00% 0 out of 1
    http_reqs......................: 1     14.271443/s

    EXECUTION
    iteration_duration.............: avg=69.87ms min=69.87ms med=69.87ms max=69.87ms p(90)=69.87ms p(95)=69.87ms
    iterations.....................: 1     14.271443/s

    NETWORK
    data_received..................: 253 B 3.6 kB/s
    data_sent......................: 70 B  999 B/s




running (00m00.1s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  00m00.1s/10m0s  1/1 iters, 1 per VU
ritikraj@Ritiks-MacBook-Air src % 





--------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------





Now this is 'ab' testing result :

ritikraj@Ritiks-MacBook-Air ~ % ab -n 100 -c 20 http://localhost:3000/

This is ApacheBench, Version 2.3 <$Revision: 1913912 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient).....done


Server Software:        
Server Hostname:        localhost
Server Port:            3000

Document Path:          /
Document Length:        25 bytes

Concurrency Level:      20
Time taken for tests:   0.076 seconds
Complete requests:      100
Failed requests:        90
   (Connect: 0, Receive: 0, Length: 90, Exceptions: 0)
Non-2xx responses:      90
Total transferred:      25020 bytes
HTML transferred:       3040 bytes
Requests per second:    1314.39 [#/sec] (mean)
Time per request:       15.216 [ms] (mean)
Time per request:       0.761 [ms] (mean, across all concurrent requests)
Transfer rate:          321.15 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       1
Processing:     6   11   4.1     10      23
Waiting:        5   11   4.1     10      23
Total:          6   11   4.2     10      23

Percentage of the requests served within a certain time (ms)
  50%     10
  66%     11
  75%     13
  80%     13
  90%     17
  95%     22
  98%     23
  99%     23
 100%     23 (longest request)
ritikraj@Ritiks-MacBook-Air ~ % 


*/