// with webpack we have to remove file extensions(.js)
import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");

// console.log("Hi")