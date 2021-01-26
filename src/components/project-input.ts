
import { Component } from "./base-component.js";
import { Validable, validate } from "../util/validation.js";
import { Autobind } from "../decorators/autobind.js";
import { projectState } from "../state/project-state.js";
// ProjectInput Class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;
  constructor() {
    super("project-input", "app", true, "user-input");

    this.titleInputElement = this.element.querySelector(
      "#title"
    )! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    )! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    )! as HTMLInputElement;
    this.configure();
  }

  private gatherUserInputs(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidate: Validable = {
      value: enteredTitle,
      required: true,
    };

    const descriptionValidate: Validable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };

    const peopleValidate: Validable = {
      value: Number(enteredPeople),
      required: true,
      min: 1,
    };

    if (
      !validate(titleValidate) ||
      !validate(descriptionValidate) ||
      !validate(peopleValidate)
    ) {
      alert("Invalid input, please try again!");
      return;
    } else {
      return [enteredTitle, enteredDescription, Number(enteredPeople)];
    }
  }
  configure() {
    this.element.addEventListener("submit", this.handleSubmit);
  }

  renderContent() {}

  @Autobind
  private handleSubmit(event: Event) {
    event.preventDefault();
    console.log("Hello!");
    const userInput = this.gatherUserInputs();
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      projectState.addProject(title, description, people);
      this.titleInputElement.value = "";
      this.descriptionInputElement.value = "";
      this.peopleInputElement.value = "";
    }
  }
}
