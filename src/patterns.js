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
    description: 'The Strategy Pattern is a software design pattern that allows for different algorithms (strategies) to be used interchangeably. It\'s useful when you need to change or dynamically choose from multiple algorithms with the same interface. This pattern makes code extensible, maintainable and easy to read.',
    code: `function Fedex() {
    this.calculate = (package) => {
        // fedex calculations...
        return 2.45
    }
}

function UPS() {
    this.calculate = (package) => {
        // ups calculations...
        return 1.56
    }
}

function USPS() {
    this.calculate = (package) => {
        // usps calculations...
        return 4.5
    }
}

function Shipping() {
    this.company = ''
    this.setStrategy = (company) => {
        this.company = company
    }
    this.calculate = (package) => {
        return this.company.calculate(package)
    }
}

const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()
const shipping = new Shipping()

const package = { from: 'Alabama', to: 'Georigia', weight: 1.56 }

shipping.setStrategy(fedex)
console.log('Fedex: ' + shipping.calculate(package))

shipping.setStrategy(ups)
console.log('UPS: ' + shipping.calculate(package))

shipping.setStrategy(usps)
console.log('USPS: ' + shipping.calculate(package))`,
    output: `'Fedex: 2.45'
'UPS: 1.56'
'USPS: 4.5'`,
    example: 'We are going to implement a functionality that calculates a transport costs depending of the company and its strategy, we have different companies like Fedex, UPS, USPS.'
  },
  {
    name: 'Iterator Pattern 🔄',
    description: 'The iterator pattern in software development is a design pattern which provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. It allows for the traversal of a collection of objects in a consistent manner and simplifies the logic involved in looping through different collections. This pattern is heavily used in modern programming languages such as Java and C++.',
    code: `const items = [
  new Date().toDateString(),
  "ivandev",
  false,
  1.99,
  () => { return 'I\'m a function' }
]

function Iterator(items) {
  this.items = items
  this.index = 0
  
  this.hasNext = () => {
    return this.index < this.items.length
  }
  
  this.next = () => {
    return this.items[this.index++]
  }
}

const iter = new Iterator(items)
while(iter.hasNext()) {
  const current = iter.next()
  console.log(current)
}`,
    output: `'Tue Feb 21 2023'
'ivandev'
false
1.99
ƒ ()`,
    example: 'We have an array with different kind of data, we have to use the iterator implementation to iterate over the array and show every element.'
  },
  {
    name: 'Observer Pattern 👀',
    description: 'The Observer Pattern is a design pattern used to enable the objects in the system to have a one-to-many relationship, whereby changes to any object\'s state will be broadcast to all its observer objects.',
    code: `class Subject {
  constructor() {
    this.observers = []
  }

  subscribe = (fn) => {
    this.observers.push(fn)
  }

  unsubscribe = (fnToRemove) => {
    this.observers = this.observers.filter(fn => {
      if (fn != fnToRemove)
        return fn
    })
  }

  fire = () => {
    this.observers.forEach(fn => {
      fn.call()
    })
  }
}

const subject = new Subject()

function Observer1() {
  console.log("Observer 1 Firing!")
}

function Observer2() {
  console.log("Observer 2 Firing!")
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.fire()

subject.unsubscribe(Observer2)
subject.fire()`,
    output: `'Observer 1 Firing!'
'Observer 2 Firing!'


'Observer 1 Firing!'`,
    example: 'We have different observers that they want to subscribe to a subject. We are going to implement a Subject object with a subscribre/unsubscribe/fire methods to manage its observers.'
  },
  {
    name: 'Proxy Pattern 🪪',
    description: 'The Proxy pattern is a structural design pattern that provides a surrogate or placeholder object to control access to another object.',
    code: `// External API Service
function CryptocurrencyAPI() {
  this.getValue = (coin) => {
    console.log('Calling External API...')
    
    switch(coin) {
      case 'Bitcoin':
        return '$3,500'
      case 'Litecoin':
        return '$50'
      case 'Ethereum':
        return '$175'
    }
  }
}

// Proxy
function CryptocurrencyProxy() {
  this.api = new CryptocurrencyAPI()
  this.cache = {}
  
  this.getValue = (coin) => {
    if (!this.cache.hasOwnProperty(coin)) {
      this.cache[coin] = this.api.getValue(coin)
    }
    
    return this.cache[coin]
  }
}

const proxy = new CryptocurrencyProxy()

// These ones will request the data to the API
console.log(proxy.getValue('Bitcoin'))
console.log(proxy.getValue('Litecoin'))
console.log(proxy.getValue('Ethereum'))

// These ones will retrieve the data from the cache
console.log(proxy.getValue('Bitcoin'))
console.log(proxy.getValue('Litecoin'))
console.log(proxy.getValue('Ethereum'))`,
    output: `'Calling External API...'
'Calling External API...'
'Calling External API...'

'$3,500'
'$50'
'$175'

'$3,500'
'$50'
'$175'`,
    example: 'We are going to implement a Proxy pattern making the API requests by us, and it will implement a cache just to avoid extra API requests saving performace.'
  },
  {
    name: 'Mediator Pattern 👩🏻‍⚖️',
    description: 'The mediator pattern is a software design pattern which defines an object that encapsulates how a set of objects interact. This pattern is used to promote loose coupling by keeping objects from referring to each other explicitly, and it enables the loosely coupled objects to cooperate when necessary. It also allows for the encapsulation of complex communication or logic between objects in one place.',
    code: `function Member(name) {
  this.name = name
  this.chatRoom = null
  
  this.send = (message, toMember) => {
    this.chatRoom.send(message, this, toMember)
  }
  
  this.receive = (message, fromMember) => {
    console.log(fromMember.name + ' to ' + this.name + ': ' + message)
  }
}

function ChatRoom() {
  this.members = {} 
  
  this.addMember = (member) => {
    this.members[member.name] = member
    member.chatRoom = this
  }
  
  this.send = (message, fromMember, toMember) => {
    toMember.receive(message, fromMember)
  }
}

const chat = new ChatRoom()
const bob = new Member('Bob')
const john = new Member('John')
const ivan = new Member('Ivan')

chat.addMember(bob)
chat.addMember(john)
chat.addMember(ivan)

bob.send('Hey John!', john)
john.send('Whats up, Bob!', bob)
ivan.send('John, are you ok?', john)
ivan.send('Bob, do you work with VSCode or IntelliJ?', bob)`,
    output: `'Bob to John: Hey John!'
'John to Bob: Whats up, Bob!'
'Ivan to John: John, are you ok?'
'Ivan to Bob: Bob, do you work with VSCode or IntelliJ?'`,
    example: 'We are going to implement a chat room with members, these members will talk between each others, but nobody will talk directly with another one, the chat will be a middleware between members.'
  },
  {
    name: 'Visitor Pattern 🧳',
    description: 'The Visitor Pattern allows for adding new operations to a group of classes without modifying the classes themselves. It uses an external class, known as the Visitor, that stores all of the implementations of the operations. The Visitor can then be passed to each object in the group and, by using polymorphism, call each object\'s implementation of the Visitor\'s operation.',
    code: `function Employee(name, salary) {
  this.name = name
  this.salary = salary

  this.getSalary = () => {
    return this.salary
  }

  this.setSalary = (salary) => {
    this.salary = salary
  }

  this.accept = (visitorFn) => {
    visitorFn(this)
  }
}

const ivanDev = new Employee('Ivan', 10000)
console.log(ivanDev.getSalary())

// Visitor function, extending the functionality
function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2)
}

ivanDev.accept(ExtraSalary)
console.log(ivanDev.getSalary())`,
    output: `10000
20000`,
    example: 'We are going to create an Employee class and use the Visitor pattern to extend the funcionality of this class, adding a new function that will increment twice the salary.'
  }
]
