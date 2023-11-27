import {z} from "zod";

export class Lesson1 {
    static parsePrimitives(obj: unknown): string | number
    {
        const str =   SCHEMA.string.safeParse(obj);
        if(str.success) {
            return str.data;
        }
        return SCHEMA.number.parse(obj);
    }
    static parsePrimitives2(obj: unknown)
    {
        return SCHEMA.stringAndNumber.parse(obj);
    }

    static isEmoji(obj: unknown)
    {
        return SCHEMA.string.emoji().parse(obj);
    }
    static isAdult(obj: unknown)
    {
        return SCHEMA.number.min(18).parse(obj);
    }

}
const SCHEMA = {
    string: z.string(),
    number: z.number(),
    boolean: z.boolean(),
    stringAndNumber : z.union([z.string(), z.number()])
}
