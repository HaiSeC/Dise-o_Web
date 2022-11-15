var USERS = { 
    property: 10,

    initailize: function(){
        USERS.clear();
        USERS.loadUsers();
    },

    initailizeEvents: function(){
    },

    loadUsers: function(){
        var users = [];
        if(localStorage.getItem('users')){
            users = JSON.parse(localStorage.getItem('users'));
        }
        
        users.forEach(function(user, index, users) {
            USERS.addUser(user);
          });
    },

    addUser: function(user){
        // crear una HTML fila
		var row = "<tr><td>"+user.name+"</td><td>"+user.lastName+"</td><td>"+user.phone+"</td></tr>";

		// agregar a la tabla
		var table = document.getElementById("users_table");
		table.innerHTML = table.innerHTML + row;

        var users = [];
        if(localStorage.getItem('users')){
            users = JSON.parse(localStorage.getItem('users'));
        }
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        USERS.clear();
    },   

    clear: function(){
        document.getElementById('name').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('phone').value = '';
    },

    getLastID: function() {
        var users = [];
        let id = 0;
        if(localStorage.getItem('users')) {
            
            users = JSON.parse(localStorage.getItem('users'));
            users.forEach(user => {
                if(user.id >= id){
                    id = user.id;
                }
            })
        }
        return id;
        
    }

};
USERS.initailize();
USERS.initailizeEvents();