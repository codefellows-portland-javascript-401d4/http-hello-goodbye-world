![cf](https://i.imgur.com/7v5ASc8.png) http-hello-goodbye-world part 2
======

Add API testing to your http server using chai-http.

Add three more options to your server and enhance the response.

Make sure you are returning status code and content type.

## Directions

* Add _at least_ three new possible responses, triggered by one or more of the following:
	* Url (path)
	* Query parameters
	* Http Verb
	
(all three of above options need to be used at least _once_)
	
* Add an invalid response that yields a `400` status code.

* Your response also needs to include some information based on the original request (e.g. show the actual requested url)
	
* You are free to use other response messages and variations as long as they are distinguishable. 
Plain text or html is fine.
	
* E2E Testing with chai-http

* Update `README.md` to describe how to alter responses 

## Bonus

* **1pts** Create additional option utilizing Http header information

* **1pts** Return a `json` response based on passed on query parameter of `format=json`

## Rubric

* Has Different Responses: 3pts
* Code Quality: 2pts
* Testing: 2pts
* Test Design and Setup: 3pts
