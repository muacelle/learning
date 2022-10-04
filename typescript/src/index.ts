// Basic Types

let age: number = 20
let company: string = 'Apperture Science'
let isPublished: boolean = true
let x: any = 'Hello'
let IDs: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuples

let person: [number, string, boolean] = [1, 'Marcelle', true]
let employee:[number, string][]
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jimmy']
]

// Unions

let product: string | number
product = '22'

// Enums

enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction1.Up) // 0

// Objects

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion

let cid: any = 1
let customerId = cid as number // or <number>cid

// Functions 

function addNum(x: number, y: number): number {
    return x + y
}

function log(message: string | number): void {
    console.log(message)
}

// Interfaces

interface UserInterface {
    readonly id: number
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes 

class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Scott')

// Subclasses

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

// Generics 

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['paul', 'john', 'george', 'ringo'])

numArray.push(1)