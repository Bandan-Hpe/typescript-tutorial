// different type of function and the argument passing types
function addTwo(num: number) {
  return num + 2;
}

function subTwo(num: number): number {
  return num - 2;
  // return "hello";

  //for full strictly type . if some one pass diff type instated of expected value
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signup(name: string, email: string, ispaid: boolean) {}
function login(name: string, email: string, ispaid: boolean = true) {}

let role = ["admin", "user", "manager"];

role.map((item): string => {
  return `the role is ${item}`;
});

function consoleError(err: string): void {
  console.log(err);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
//   where we want to handle the error
}

addTwo(4);
getUpper("bandan");
signup("1", "test@gmai.com", false);
login("bandan", "bandan@gmail.com");
subTwo(4);
