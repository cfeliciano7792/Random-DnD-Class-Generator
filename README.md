How to use the Random DnD Class Generator microservice



To request data from the microservice, you can utilize the fetch API in JavaScript. Below are instructions for accessing the microservice locally or through render.com where the microservice is currently being hosted.

Accessing the Microservice Locally:

1) Use the URL http://localhost:3000/random-class.
2) Make sure your microservice is running locally on your machine at port 3000.
   ![image](https://github.com/cfeliciano7792/Random-DnD-Class-Generator/assets/96458958/1d920b94-6d5a-4cda-82bc-8b0876161f9a)
3) This code sends a GET request to the specified URL (http://localhost:3000/random-class). Upon receiving a response, it parses the JSON data using response.json(). The parsed data is then passed to the next .then() block where you can handle it as needed. In this case, the setRandomDndClass function is called to update the state with the received D&D class.


Accessing the Microservice Online:

1) Use the URL https://dnd-generator.onrender.com/random-class.
2) Ensure your microservice is deployed and accessible online at the specified URL.
   ![image](https://github.com/cfeliciano7792/Random-DnD-Class-Generator/assets/96458958/ff5d088c-6a19-448c-ac9a-a06faebfe4e7)
3) This code sends a GET request to the specified URL (https://dnd-generator.onrender.com/random-class). Upon receiving a response, it parses the JSON data using response.json(). The parsed data is then passed to the next .then() block where you can handle it as needed. In this case, the setRandomDndClass function is called to update the state with the received D&D class.
