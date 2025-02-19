"use strict";

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error("This character already exists!");
    } else {
      this.members.add(character);
    }
  }

  addAll(characterList) {
    this.members = new Set([...this.members, ...characterList]);
  }

  toArray() {
    const arrSet = Array.from(this.members);
    return arrSet;
  }
}
