# ZOOMcatalog


ZOOMcatalog Full-Stack test
Instructions
Solve this exercise using PHP or Python, once you have complete them please share with us the github or bitbucket link, so, the engineering team can review the code. Also we added a couple of questions after the exercise that you can answer in this document or sent your answers to us in text format.

Any doubt do not hesitate in contact us, if you have any problem please let us know. Do your best and good luck!

Exercises
1) Echo server
Write an application program interface for HTTP requests that could handle POST, PUT, DELETE, PATCH and GET requests (A kind of an echo server), the response of each request must be a valid JSON following this structure: 
{
  “method”: <HTTP METHOD REQUESTED>,
  “data”: <HTTP PARAMETERS SENT IN THE REQUEST>
}

Considerations:
You must use the endpoint /data
Only should allow JSON parameters 
Use the best practices of coding to create the exercise

Example:
Request: curl -d '{"key1":"value1", "key2":"value2"}' -X POST http://localhost:3000/data
Response: {"method": "POST", "data": {"key1":"value1", "key2":"value2"}}


Instructions: To run the application php artisan serve

2) UI Client
Create a very simple Angular 2+ user interface to execute the last exercise, basically need a way to choose the HTTP method, something to send data and a button to send the request; The JSON response needs to be displayed and also the time in seconds the request takes to be completed. 


Instructions: To run the application ng serve






