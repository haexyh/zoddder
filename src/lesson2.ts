import { z} from "zod";

export class Lesson2 {
    static getUser(obj: unknown): User{
        return SCHEMA.user.parse(obj)
    }

    static getUserOrNull(obj: unknown): User |null {
        const u = SCHEMA.user.safeParse(obj);
        if(u.success)
            return u.data;
        return null;
    }
}
export type User = z.infer<typeof SCHEMA.user>;

const SCHEMA = {
    user: z.object({name: z.string().min(3), email: z.string().email().optional()}),
}
