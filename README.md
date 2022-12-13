# TickSoftware
## FrontEnd
http://localhost:4200/  - Front End
- [x] Run npm install to get dependencies.
- [x] Run ng build to build the project.
- [x] Run ng serve to start the project.
- [x] Though it is a sample project, I have separated component, services, models.
- [x] Appropriate validation is in place and message is displayed accordingly.Accepts value between 1 and 100 only.
      Restrictions on entering alphanumeric and other characters could be achieved for more robust validation.
- [x] Written unit test cases for component and service.

- [x] In case, if webApi service runs on different port, please change the path of the variable accordingly
 in file PrimeGen\src\app\services\prime.service.ts.
 
      public primeWebApiUrl = 'http://localhost:5052/';

 - [x] Bootstrap latest version is used for styling.
 


## WebApi
http://localhost:5052/  - C# Web API
- [x] Appropriate validation is in place.
- [x] On building and running the project first time, please ignore the message about local IIS certificate. 
- [x] Structured the project as Controllers, Models, Services. This is just to give the idea about real time projects.
- [x] Web API Service currently run's without any COR'S  restriction.
- [x] Written unit test case for service using NUNIT.

