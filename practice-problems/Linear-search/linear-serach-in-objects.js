
function findObject(users){
    return users.find(user=>user.name==="Bob")
}
const users = [
    {id:1,name: "Alice"},
    {id:2,name:"Bob"},
    {id:3,name:"Charlie"}
]
console.log(findObject(users));
//using for-loop
function findObject(users) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === "Bob") {
            return users[i];
        }
    }
    return null;
}
console.log(findObject(users));
