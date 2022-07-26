# Time Zone Converter

---

## About

This application is a time zone converter that takes an initial time as input and asks for an initial time zone. The application will then convert the time input into the desired time zone's equivalent of the intial time zone. The front end of this application was built with the Angular framework and the backend was created using Python.

## Structure

This application consists of a single microservice that will take the the time input, initial time, and desired time converts the input time into the desired time's equivalent. The transformed data will then be returned. The microservice is communicated to by an API which is called when a click event occurs on the button component "Get Time".

## How the Time Zone is Converted

In order to send the request for the time zone to be converted, all three fields must be selected with a value: the input time, initial time zone, and desired time zone. Once these fields are selected, the chosen options are saved in the front end. These options are then sent to the back end via an API by clicking on the button at the bottom of the application named "Get Time". One the button is clicked, the API is called to send the data to the back end where the input data is used to convert the time input into the desired time zone's equivalent. 

## UML diagram


