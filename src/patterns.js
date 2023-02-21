export const patterns = [
  {
    name: 'Factory Pattern 🏭',
    description: 'The factory pattern is a software design pattern that allows users to create objects without specifying their exact class. It provides a layer of abstraction between a program\'s object creation and usage, allowing the user to employ different implementations of a given interface or abstract class as long as each implementation follows the same rules. This pattern can be used for data access and business process layers, as well as for more complex scenarios such as artificial intelligence.',
    code: `function Developer(name) {
  this.name = name
  this.type = 'Developer'
}

function Tester(name) {
  this.name = name
  this.type = 'Tester'
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch(type) {
      case DEVELOPER:
          return new Developer(name)
          break
      case TESTER:
          return new Tester(name)
          break
    }
  }
}

function sayHello() {
  console.log('Hi, I am ' + this.name + ' and I am a ' + this.type})
}

const DEVELOPER = 1
const TESTER = 2
const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create('Ivan', DEVELOPER))
employees.push(employeeFactory.create('Frank', TESTER))

employees.forEach(emp => sayHello.call(emp))`,
    output: `'Hi, I am Ivan and I am a Developer'
'Hi, I am Frank and I am a Tester'`,
    example: 'We need to create different roles in our company, that\'s a perfect way to implement a Factory pattern. In our company we have different roles of employees for example Developers and Testers, let\'s create our example.'
  },
  {
    name: 'Singleton Pattern 👨‍👧',
    description: 'The Singleton pattern is a creational design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system. It allows the reader to make use of global state without the use of global variables.',
    code: `const Singleton = (function() {
  function ProcessManager() {
      this.numProcess = 0
  }

  let pManager

  function createProcessManager() {
      pManager = new ProcessManager()
      return pManager
  }

  return {
      getProcessManager: () => {
          if (!pManager)
              pManager = createProcessManager()
          return pManager
      }
  }
})()

const processManager = Singleton.getProcessManager()
const processManager2 = Singleton.getProcessManager()

// Check if there is the same instance
console.log(processManager === processManager2)`,
    output: 'true',
    example: 'In this scenario we have to manage process, and we have to create an object called ProcessManager to manage those process. We need to be sure that we have just one instance of this ProcessManager.'
  },
  {
    name: 'Strategy Pattern ♟️',
    description: 'The Strategy Pattern is a software design pattern that allows for different algorithms (strategies) to be used interchangeably. It\'s useful when you need to change or dynamically choose from multiple algorithms with the same interface. This pattern makes code extensible, maintainable and easy to read.'
  },
  {
    name: 'Iterator Pattern 🔄',
    description: 'The iterator pattern in software development is a design pattern which provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. It allows for the traversal of a collection of objects in a consistent manner and simplifies the logic involved in looping through different collections. This pattern is heavily used in modern programming languages such as Java and C++.'
  },
  {
    name: 'Observer Pattern 👀',
    description: 'The Observer Pattern is a design pattern used to enable the objects in the system to have a one-to-many relationship, whereby changes to any object\'s state will be broadcast to all its observer objects.'
  },
  {
    name: 'Proxy Pattern 🪪',
    description: 'The Proxy pattern is a structural design pattern that provides a surrogate or placeholder object to control access to another object.'
  },
  {
    name: 'Mediator Pattern 👩🏻‍⚖️',
    description: 'The mediator pattern is a software design pattern which defines an object that encapsulates how a set of objects interact. This pattern is used to promote loose coupling by keeping objects from referring to each other explicitly, and it enables the loosely coupled objects to cooperate when necessary. It also allows for the encapsulation of complex communication or logic between objects in one place.'
  },
  {
    name: 'Visitor Pattern 🧳',
    description: 'The Visitor Pattern allows for adding new operations to a group of classes without modifying the classes themselves. It uses an external class, known as the Visitor, that stores all of the implementations of the operations. The Visitor can then be passed to each object in the group and, by using polymorphism, call each object\'s implementation of the Visitor\'s operation.'
  }
]
