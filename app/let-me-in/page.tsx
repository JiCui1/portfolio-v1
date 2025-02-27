"use client"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const onSubmit = () => {
  return;
}

export default function LoginPage() {
  const form = useForm()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl className="block">
                    <input type="text" className="text-black p-1 rounded-sm"/>
                  </FormControl>
                </FormItem>
              )}
            />
            <button type="submit" className="border-white border p-2 rounded-sm">Submit</button>
          </form>
        </Form>
      </main>
    </div>
  );
}
