How to use the Random DnD Class Generator microservice



To request data from the microservice, you can utilize the fetch API in JavaScript. Below are instructions for accessing the microservice locally or through render.com where the microservice is currently being hosted.

Accessing the Microservice Locally:

1) Use the URL http://localhost:3000/random-class.
2) Make sure your microservice is running locally on your machine at port 3000. To start the microservice simply type in the terminal: node index.js 

    ![image](https://github.com/cfeliciano7792/Random-DnD-Class-Generator/assets/96458958/1d920b94-6d5a-4cda-82bc-8b0876161f9a)
4) This code sends a GET request to the specified URL (http://localhost:3000/random-class). Upon receiving a response, it parses the JSON data using response.json(). The parsed data is then passed to the next .then() block where you can handle it as needed. In this case, the setRandomDndClass function is called to update the state with the received D&D class.


Accessing the Microservice Online:

1) Use the URL https://dnd-generator.onrender.com/random-class.
2) Ensure your microservice is deployed and accessible online at the specified URL.
   ![image](https://github.com/cfeliciano7792/Random-DnD-Class-Generator/assets/96458958/ff5d088c-6a19-448c-ac9a-a06faebfe4e7)
3) This code sends a GET request to the specified URL (https://dnd-generator.onrender.com/random-class). Upon receiving a response the following occurs:

.then(response => response.json()): This line is part of a chain of promises, commonly used for handling asynchronous operations in JavaScript. It takes the response returned by the microservice and converts it to a JSON object using the .json() method. This step assumes that the response from the microservice is in JSON format.

.then(data => setRandomDndClass(data.class)): Once the response has been converted to a JSON object, this line extracts the relevant data from the object and sets it using a function called setRandomDndClass. It assumes that the JSON object contains a property called class, and it sets the value of data.class to setRandomDndClass.

.catch(error => console.error('Error fetching random D&D class:', error)): This line catches any errors that occur during the process of fetching and handling the response from the microservice. If an error occurs, it logs a message to the console using console.error, indicating that there was an error fetching the random D&D class, and it also logs the specific error that occurred.



UML Diagram:
![Screenshot 2024-02-22 142851](https://github.com/cfeliciano7792/Random-DnD-Class-Generator/assets/96458958/51a8c6d9-d54c-47f9-b52e-07803240a6ce)
