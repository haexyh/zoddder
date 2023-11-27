import './style.css'
import {Lesson2, User} from "./lesson2.ts";
import {z} from "zod";
import {Lesson3} from "./lesson3.ts";
import {Lesson1} from "./lesson1.ts";

const test = (parse: (obj: unknown) => Object | null, obj: unknown) => {
    try {
        const result = parse(obj);
        const display = result && z.object({}).safeParse(result).success ? JSON.stringify(result) : result;
        console.log(display);
    } catch (e) {
        console.error(`Fail:  ${e}`);
    }


}
console.log("Lesson 1")
test(Lesson1.parsePrimitives, 12)
test(Lesson1.parsePrimitives, 'helumt')
test(Lesson1.parsePrimitives, {})
test(Lesson1.parsePrimitives, null)
test(Lesson1.parsePrimitives2, 12)
test(Lesson1.parsePrimitives2, 'helumt')

console.log('validation')
test(Lesson1.isEmoji, '')
test(Lesson1.isEmoji, '🕺🏼')

test(Lesson1.isAdult, 19)
test(Lesson1.isAdult, 18)
test(Lesson1.isAdult, 17)

console.log("Lesson 2")
const userA1: User = {email: 'hans', name: 'peter'};
const userB1: User = {email: 'hans@smino.com', name: 'peter'};
test(Lesson2.getUser, userA1)
test(Lesson2.getUser, userB1)
test(Lesson2.getUserOrNull, userA1)
test(Lesson2.getUserOrNull, userB1)


console.log("Lesson 3")
const userA: User = {email: 'peter@me.com', name: 'max'}
const userB: User & any = {email: 'pupu@me.com', name: 'pupu', isMale: true}

test(Lesson3.getPartialUser, {band: 12})
test(Lesson3.getPartialUser, {name: 'hummel'})
test(Lesson3.getPartialUser, userB)

test(Lesson3.getStrictUser, userA)
test(Lesson3.getStrictUser, userB)

test(Lesson3.getUserWithAllKeys, userA)
test(Lesson3.getUserWithAllKeys, userB)

