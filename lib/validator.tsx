import { z } from "zod"


export const eventFormSchema = z.object({
    title: z.string().min(3, { message: 'Title must be at least 3 characters long' }),
    description: z.string().min(10, { message: 'Description must be at least 10 characters long' })
    .max(400, { message: 'Description must be at most 1000 characters long' }),
    location: z.string().min(3, { message: 'Location must be at least 3 characters long' })
    .max(400, { message: 'Location must be at most 100 characters long' }),
    imageUrl:z.string(),
    startDateTime:z.date(),
    endDateTime:z.date(),
    categoryId: z.string(),
    price:z.string(),
    isFree:z.boolean(),
    url:z.string().url(),
})