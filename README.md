# D&D Class Randomizer Microservice

### What the Project Does
The D&D Class Randomizer Microservice is a simple API that provides a random Dungeons & Dragons (D&D) class from a predefined list of classes. It is built using Node.js and Express, making it easy to integrate into other applications or services.

### Why the Project Is Useful
This microservice is useful for developers building D&D-related applications or games who need a quick way to generate random classes for characters or NPCs (non-player characters). It eliminates the need for developers to manually create a list of D&D classes and randomly select one, saving time and effort.

### Communication Contract
This README outlines the communication contract for interacting with the D&D Class Randomizer Microservice. Please follow the instructions below to programmatically request and receive data from the microservice.

### Instructions for REQUESTing Data
To request data from the microservice, you can make an HTTP GET request to the /random-class endpoint. You can either access it online or run it locally on your machine.

#### Online Endpoint:
https://dnd-generator.onrender.com/random-class

#### Localhost Endpoint:
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
The code above sends a GET request to the specified URL (https://dnd-generator.onrender.com/random-class).

#### Instructions for RECEIVEing Data
The microservice will respond to your request with JSON data containing a randomly selected D&D class. Upon receiving a response, it parses the JSON data using response.json(). The parsed data is then passed to the next .then() block where you can handle it as needed. In this case, the setRandomDndClass function is called to update the state with the received D&D class. The response will have the following format:

```javascript
{
  "class": "Random D&D Class"
}
```

#### Running the Microservice Locally
If you wish to run the microservice locally on your machine, follow these steps:
1. Clone the repository containing the microservice code.
2. Navigate to the directory containing the code.
3. Install dependencies by running npm install.
4. Start the server by running node index.js.
5. The microservice will be accessible at http://localhost:3000/random-class.


#### UML Diagram

![UML Diagram](https://github.com/cfeliciano7792/Random-DnD-Class-Generator/assets/96458958/9b59cfe3-5733-4b48-b85d-8a4e531fb0f4)

