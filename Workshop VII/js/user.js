USERS.initializeEvents = function() {
    if(document.getElementById('addUserButton')) {
      document.getElementById('addUserButton').addEventListener('click', function() {
          var user = {
          id: USERS.getLastID() + 1,
          name: document.getElementById('name').value,
          lastName: document.getElementById('lastname').value,
          phone: document.getElementById('phone').value
        };
        
        USERS.addUser(user);
      });
    }
};

USERS.initializeEvents();