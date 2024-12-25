//1. Basic Async Function
// Write an async function called getData that uses fetch to get data 
// from https://jsonplaceholde//r.typicod//e.com/todos/1 and logs the respons//e// .
export async function getData1(url) {
  // const response = await fetch(url);
  // const data = await response.json();
  // return data
  try{
    //Realizamos una solicitud HTTP a la URL proporcionada y espera la respuesta
    const response = await fetch(url);

    //Convertimos la respues en un objeto JSON y espramos que se resuelva
    const data = await response.json();

    //Ahora visualizamos los datos por la pantalla del terminal
    console.log(data);

    //Devolvemos los datos 
    return data;

  }catch(error){
    //Manejamos el error que se pueda ocasionar mediante la petición
    console.log("Error al manejar los datos",error)
  }
}
//Llamada a la funcion getData1
getData1('https://jsonplaceholder.typicode.com/todos/1');

//Llamada a la funcion getData1 y visualización de los datos obtenidos dando mayor flexibilidad al manejo de los datos
getData1('https://jsonplaceholder.typicode.com/todos/1').then(data => console.log('Data:', data));

//2. Error Handling
// Modify the getData function to handle errors using try and catc//h// .
export async function getData2(url) {
  // try {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   return data
  // } catch (error) {
    
  //   return error
  // }

  try{
    //Realizamos una solicitud HTTP a la URL proporcionada y espera la respuesta
    const response = await fetch(url);

    //Convertimos la respues en un objeto JSON y espramos que se resuelva
    const data = await response.json();

    //Ahora visualizamos los datos por la pantalla del terminal
    console.log(data);

    //Devolvemos los datos 
    return data;

  }catch(error){
    //Manejamos el error que se pueda ocasionar mediante la petición
    console.log("Error al manejar los datos",error)
  }

}
//Llamada a la funcion getData2
getData2('https://jsonplaceholder.typicode.com/todos/1');

//Llamada a la funcion getData2 y visualización de los datos obtenidos dando mayor flexibilidad al manejo de los datos
getData2('https://jsonplaceholder.typicode.com/todos/1').then(data => console.log('Data:', data));

//3. Sequential API Calls
// Write a function that makes two sequential API calls where the second call 
// depends on the data received from the first cal//l// .
// primera llamada https://jsonplaceholder.typicode.com/todos/1
// segunda llamada https://jsonplaceholder.typicode.com/todos/${data1.userId}
// data1 es el resultado de la primera llamada
export async function sequentialAPICalls(url) {
  // const response1 = await fetch(url);
  // const data1 = await response1.json();
  // const response2 = await fetch(`https://jsonplaceholder.typicode.com/users/${data1.userId}`);
  // const {name} = await response2.json();
  // return {r1:data1, r2:name}

  try{
    
    //Realizamos la primera llamada a la API 
    const response1 = await fetch(url);
    const data1 = await response1.json();
    
    //Realizamos la segunda llamada a la API usando data1.userId
    const response2 = await fetch(`https://jsonplaceholder.typicode.com/users/${data1.userId}`);
    const {name} = await response2.json();

    //Devolvemos los datos obtenidos de ambas llamadas
    return {r1:data1, r2:name}


  }catch(error){
    //Manejamos cualquier error que ocurra en el algoritmo de la función
    console.log("Error al manejar los datos",error);
    return error;
  }


}
//Llamada a la funcion sequentialAPICalls
sequentialAPICalls('https://jsonplaceholder.typicode.com/todos/1');

//Llamada a la funcion sequentialAPICalls y visualización de los datos obtenidos dando mayor flexibilidad al manejo de los datos
sequentialAPICalls('https://jsonplaceholder.typicode.com/todos/1').then(results => console.log('Results:', results));

//4. Parallel API Calls
// Write a function that makes two API calls in parallel and logs the 
// results only after both have complete//d// .
// primera llamada https://jsonplaceholder.typicode.com/todos/1
// segunda llamada https://jsonplaceholder.typicode.com/todos/2
export async function parallelAPICalls() {
  
  try {
    //Realizamos las dos llamadas de la API en paralelo usando Promise.all
    const [response1, response2] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/todos/1'),
      fetch('https://jsonplaceholder.typicode.com/todos/2')
    ]);

    //Convertimos las respuestas en objetos JSON y esperamos que se resuelvan
    const data1 = await response1.json();
    const data2 =await response2.json();

    //Visualizamos los datos obtenidos por la terminal
    console.log("Datos de la primera llamada a la API: ",data1);
    console.log("Datos de la segunda llamada a la API: ",data2);

    //Devolvemos los datos obtenidos
    return {data1,data2};
  } catch (error) {
    //Controlamos cualquier error que ocurriera en la ejecución de la función
    console.log("Error al manejar los datos",error);
    return error;
  }


}
//Llamada a la funcion parallelAPICalls
parallelAPICalls();

// Llamada a la función y registro de los resultados fuera de la función
parallelAPICalls().then(results => console.log('Results:', results));

//5. Await in Loops
// Write an async function that iterates over an array of URLs and fetches data from 
// each URL sequentially using a fo//r//.//..of loo//p// .
// https://jsonplaceholder.typicode.com/todos/n siendo n = 1,2,3,4
export async function fetchSequentially(urls) {
  
  //creamos un array para almacenar los datos obtenidos
  const results = [];

  try {
    for (const url of urls) {
      //Realizamos la solicitud HTTP a la URL proporcionada y esperamos la respuesta
      const response = await fetch(url);

      //Convertimos la respuesta en un objeto JSON y esperamos que se resuelva
      const data = await response.json();

      //Almacenamos los datos obtenidos en el array results
      results.push(data);
    }  


  } catch (error) {
    //Controlamos cualquier error al manejar los datos
    console.error('Error al manejar los datos', error);
  }

  //Devolvemos los datos obtenidos
  return results;

}
// Crear el array de URLs para el ejercicio
const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4'
];

// Llamada a la función y registro de los resultados
fetchSequentially(urls).then(results => console.log('Results:', results));

//6. Async/Await with Array Methods
// Create an async function that uses Promis//e.all to fetch data from multiple URLs 
// stored in an array and logs all responses at onc//e// .
// urls = ['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2']
export async function fetchAll(urls) {
  try {
    // Usa Promise.all para realizar todas las solicitudes en paralelo
    const responses = await Promise.all(urls.map(url => fetch(url)));
    
    // Convierte todas las respuestas en JSON
    const data = await Promise.all(responses.map(response => response.json()));
    
    // Registra todas las respuestas en la consola
    console.log('All data:', data);
    
    // Devuelve los datos obtenidos
    return data;
  } catch (error) {
    // Controla cualquier error que ocurra durante las solicitudes
    console.error('Error fetching data:', error);
    return error;
  }
}

// Crear el array de URLs para el ejercicio
const urls2 = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2'
];

// Llamada a la función y registro de los resultados
fetchAll(urls2).then(results => console.log('Results:', results));


//7. Async/Await with Conditional Logic
// Write an async function that makes an API call and performs different actions based on the status code of the respons//e// .
// https://jsonplaceholder.typicode.com/todos/1
export async function handleResponse(url) {
  try {
    // Realiza la solicitud HTTP a la URL proporcionada
    const response = await fetch(url);
    
    // Verifica el código de estado de la respuesta
    if (response.status === 200) {
      // Si el código de estado es 200 (OK), convierte la respuesta en JSON
      const data = await response.json();
      // Realiza una acción con los datos obtenidos
      console.log('Datos obtenidos:', data);
    } else if (response.status === 404) {
      // Si el código de estado es 404 (Not Found), registra un mensaje de error específico
      console.error('Error 404: Recurso no encontrado');
    } else {
      // Maneja otros códigos de estado según sea necesario
      console.error(`Error ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    // Captura y maneja cualquier error que ocurra durante la solicitud
    console.error('Error al realizar la solicitud:', error);
  }
}

// Llamada a la función y registro de los resultados
handleResponse('https://jsonplaceholder.typicode.com/todos/1');

// 8. Async/Await with File Operations (Node.js)
// If you’re using Node.js, write an async function that reads a file, processes its contents, 
// and writes the result to a new file, using await to handle the asynchronous file operations.
export async function processFile(inputFile, outputFile) {
 
}

//9. Fetch with Async/Await and FormData
//Write an async function that sends a POST request with FormData to 
//https://jsonplaceholder.typicode.com/posts. Log the response.
// data = { title: 'foo', body: 'bar', userId: 1 }
export async function postData(data) {
  
}

//10 Async Function with Destructuring
//Create an async function that fetches user data from 
// https://jsonplaceholder.typicode.com/users/1 and uses destructuring to extract and log the user's name and email.

export async function getUserData(url) {
 
}
