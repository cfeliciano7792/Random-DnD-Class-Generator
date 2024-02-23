D&D Class Randomizer Microservice

Communication Contract
This README outlines the communication contract for interacting with the D&D Class Randomizer Microservice. Please follow the instructions below to programmatically request and receive data from the microservice.

Instructions for REQUESTing Data
To request data from the microservice, you can make an HTTP GET request to the /random-class endpoint. You can either access it online or run it locally on your machine.

Online Endpoint:
https://dnd-generator.onrender.com/random-class

Localhost Endpoint:
http://localhost:3000/random-class

Example Call:
```javascript  
const [randomDndClass, setRandomDndClass] = useState("");

  const getRandomDndClass = () => {
    // http://localhost:3000/random-class
    // 'https://dnd-generator.onrender.com/random-class'
  fetch('https://dnd-generator.onrender.com/random-class')
      .then(response => response.json())
      .then(data => setRandomDndClass(data.class))
      .catch(error => console.error('Error fetching random D&D class:', error));
};
```
Instructions for RECEIVEing Data
The microservice will respond to your request with JSON data containing a randomly selected D&D class. The response will have the following format:

json
Copy code
{
  "class": "Random D&D Class"
}
You can access the random D&D class from the class field in the JSON response.

Running the Microservice Locally
If you wish to run the microservice locally on your machine, follow these steps:

Clone the repository containing the microservice code.
Navigate to the directory containing the code.
Install dependencies by running npm install.
Start the server by running npm start.
The microservice will be accessible at http://localhost:3000/random-class.
Endpoint Information
Endpoint: /random-class
Method: GET
Description: Retrieves a random D&D class from the list of available classes.
UML Diagram:

![Screenshot 2024-02-22 142851](https://github.com/cfeliciano7792/Random-DnD-Class-Generator/assets/96458958/51a8c6d9-d54c-47f9-b52e-07803240a6ce)
