# 🧙‍♂️ Game Classes

> This project was developed as part of the bootcamp **Programação do Zero (Programming from Scratch)**, by **[Digital Innovation One (DIO)](https://www.dio.me/)**, carried out in *2023*. The goal was to practice basic programming concepts in **JavaScript**, such as variables, operators, loops, decision structures, functions, classes, and objects.

---

## 🛠️ Skills developed in the bootcamp:

![Programming Logic](https://img.shields.io/badge/Programming%20Logic-blue) ![Problem Solving](https://img.shields.io/badge/Problem%20Solving-green) ![JavaScript](https://img.shields.io/badge/JavaScript-yellow) ![Git](https://img.shields.io/badge/Git-orange) ![GitHub](https://img.shields.io/badge/GitHub-black) ![Agile Methodologies (Scrum)](https://img.shields.io/badge/Agile%20Methodologies%20(Scrum)-purple)

## 🎯 Goal

Create a generic class that represents a hero in an adventure, with the following properties:

- `name`
- `age`
- `type` (e.g., warrior, mage, monk, ninja)

In addition, implement a method called **`attack()`**, which displays a personalized message according to the hero’s type: 

- mage → *used magic*
- warrior → *used sword*
- monk → *used martial arts*
- ninja → *used shuriken*

--- 

## 🚀 Usage Example

```javascript
const hero1 = new Hero("Arthus", 30, "warrior");
console.log(hero1.attack());
// Output: "The warrior attacked using sword"

const hero2 = new Hero("Merlin", 150, "mage");
console.log(hero2.attack());
// Output: "The mage attacked using magic"
