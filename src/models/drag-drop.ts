// Drag & Drop

// Dragable interfave helps us to write dragable components or draggable classes in a uniform way.
// So if we add more and more classes which should be dragable we always will have this methods
export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}
