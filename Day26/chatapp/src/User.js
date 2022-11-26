export const users = [
    {
      id: 1,
      name: "Gautam"
    },
    {
      id: 2,
      name: "Karan"
    }
  ];
  
  function createConnection(user) {
    console.log(`started lisening to `, user);
    let id;
    function listen(callback) {
      id = setInterval(() => {
        let message = `new Message from ${
          user.name
        } at ${new Date().toTimeString()}`;

        callback(message);
        
      }, 1000);
    }
    function unsubscribe() {
      clearInterval(id);
    }
    return { listen, unsubscribe };
  }
  
  export default createConnection;
  