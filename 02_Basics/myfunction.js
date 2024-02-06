// different type of function and the argument passing types
function addTwo(num) {
    return num + 2;
}
function subTwo(num) {
    return num - 2;
    // return "hello";
    //for full strictly type . if some one pass diff type instated of expected value
}
function getUpper(val) {
    return val.toUpperCase();
}
function signup(name, email, ispaid) { }
function login(name, email, ispaid) {
    if (ispaid === void 0) { ispaid = true; }
}
var role = ["admin", "user", "manager"];
role.map(function (item) {
    return "the role is ".concat(item);
});
function consoleError(err) {
    console.log(err);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
addTwo(4);
getUpper("bandan");
signup("1", "test@gmai.com", false);
login("bandan", "bandan@gmail.com");
subTwo(4);
