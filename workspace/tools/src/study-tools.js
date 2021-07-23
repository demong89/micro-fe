// Anything exported from this file is importable by other in-browser modules.
// export function publicApiFunction() {}

import { ReplaySubject } from "rxjs"
export const sharedSubject = new ReplaySubject() 

export function sayHello(who){
  console.log(`%c${who} say hello`,"color:skyblue");
}
