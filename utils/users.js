const users = [];

// Join user to chat
function userJoin(id, username, room) {
    const user = {
        id, username, room
    };
    users.push(user);
    console.log(users)
    return user
}

// Get current user
function getCurrentUser(id) {
    console.log(users, id)
    return users.find(user => user.id === id);
}

function removeCurrentUser(id) {
    users.map(user => {
        if(user.id === id) {
            // console.log(user, 'to be removed')
            // Current user index
            const userIndex = users.indexOf(user);
            users.splice(userIndex, 1);
            console.log(users, 'after spliced')
        }
    })
    return users.find(user => user.id === id);
}

function getRoomUsers(room) {
    return users.filter(user => user.room === room);
}

module.exports = {
    userJoin, 
    getCurrentUser, 
    removeCurrentUser, 
    getRoomUsers
}