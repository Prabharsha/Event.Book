"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { eventFormSchema } from '@/lib/validator'
import { eventDefaultValues } from '@/constants'
import Dropdown from '@/components/shared/DropDown'
import { Textarea } from "@/components/ui/textarea"



type EventForumProps = {
    userId: string;
    type: "Create" | "Update";
}

const EventForum = ({ userId, type }: EventForumProps) => {

    const initialvalues = eventDefaultValues;


    // 1. Define your form.
    const form = useForm<z.infer<typeof eventFormSchema>>({
        resolver: zodResolver(eventFormSchema),
        defaultValues: initialvalues
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof eventFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">

                <div className='flex flex-col gap-5 md:flex-row'>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormControl>
                                    <Input placeholder="Event Title" {...field}
                                        className='input-field' />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="categoryId"
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormControl>
                                    <Dropdown onChangeHandler={field.onChange} value={field.value} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className='flex flex-col gap-5 md:flex-row'>
                <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormControl className='h-72'>
                                    <Textarea  placeholder="Description" {...field}
                                        className='textarea rounded-2xl' />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>


                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default EventForum
