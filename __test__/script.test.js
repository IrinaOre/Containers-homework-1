import Team from "../src/script.js";

test("add character to the team", () => {
  const team = new Team();
  team.add("Magician");

  expect(team.members.size).toBe(1);
});

test("add the existing character throws error", () => {
  expect(() => {
    const team = new Team();
    team.add("Magician");
    team.add("Magician");
  }).toThrow("This character already exists!");
});

test("add several characters", () => {
  const team = new Team();
  const characters = ["Magician", "Daemon", "Bowerman", "Swordsman"];
  team.addAll([...characters, characters[0]]);
  expect(team.members.size).toBe(4);
});

test("convert to array", () => {
  const team = new Team();
  const characters = ["Magician", "Daemon", "Bowerman", "Swordsman"];
  team.addAll(characters);
  expect(team.toArray()).toEqual(characters);
});
