

# [Timestamp Microservice](https://microservice-api-project.herokuapp.com/)

A small microservice api that return a JSON with a unix and UTC timestamp.
The user send a url request <appurl>/api/:data on any valid js date-string and retrieve a JSON.
<br/>
    <br/>
  <p>Sample:</p>

  <p>If data parameter the api return the currente date</p>
  <p><a href="https://microservice-api-project.herokuapp.com/api/"><code> [appurl]/api/ </code></a>/p>
    <code>{  "unix": 1628778631225,   "utc": "Thu Aug 12 2021 14:30:31 GMT+0000 (Coordinated Universal Time)"  } </code>  
    <p></p>
    <p></p>   
    <p></p>
    <p>If there is a valid date provided the api return the correponding unix and utc timestamp</p>
    <p><a href="https://microservice-api-project.herokuapp.com/api/09-17-1982"><code>  [appurl]/api/09-17-1982 </code></a></p>
    <code> {  "unix": 401068800000,  "utc": "Fri, 17 Sep 1982 00:00:00 GMT"      }</code>
    <p></p>
    <p></p>
    <p><a href="https://microservice-api-project.herokuapp.com\api\401068800000"><code>  [appurl]/api/401068800000 </code></a></p>
    <code> {  "unix": 401068800000,  "utc": "Fri, 17 Sep 1982 00:00:00 GMT"      }</code>
    <p></p>
        <p></p>
        <br/>
        <p></p>
    <p>Check it out live on <a href="https://microservice-api-project.herokuapp.com" target="_blank">heroku<a> alternatively check on <a href='https://replit.com/@Horvatbarbosa/Timestampmicroservice' target="_blank" >Replit<a/> click  Run to start the <a href='https://Timestampmicroservice.horvatbarbosa.repl.co' target="_blank" >app<a/> </p>
