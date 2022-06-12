import DoorModel from "../model/doorModel";

export function createDoors(qtde: number, doorWithGift: number): DoorModel[] {
  return Array.from({ length: qtde }, (_, i) => {
    const number = i + 1;
    const haveGift = number === doorWithGift;
    return new DoorModel(number, haveGift);
  });
}

export function updateDoors(
  doors: DoorModel[],
  modified: DoorModel
): DoorModel[] {
  return doors.map((currentDoor) => {
    const sameModified = currentDoor.number === modified.number;

    if (sameModified) {
      return modified;
    } else {
      return modified.open ? currentDoor : currentDoor.deselect();
    }
  });
}
