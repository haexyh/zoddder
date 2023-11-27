import { z} from "zod";
import {User} from "./lesson2.ts";


export class Lesson3 {
    static getPartialUser(obj: unknown): Partial<User>{
        return SCHEMA.user.partial().parse(obj)
    }
    static getUserWithAllKeys(obj: unknown){
       return SCHEMA.user.passthrough().parse(obj);
    }
    static getStrictUser(obj: unknown){
        return SCHEMA.user.strict().parse(obj);
    }
}
const SCHEMA = {
    user: z.object({name: z.string().min(3), email: z.string().email().optional()}),
}
