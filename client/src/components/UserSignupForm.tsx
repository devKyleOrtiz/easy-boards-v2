import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface SignupFormData {
  email: string;
  password: string;
}

const formSchema = z.object({
  email: z.string().email().min(2),
  password: z.string().min(7, {
    message: "Password must be at least 7 characters.",
  }),
});
function UserSignupForm() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutation = useMutation<unknown, Error, SignupFormData>({
    mutationFn: (formData) => {
      return axios.post("/api/users", { user: formData });
    },
    onSuccess: () => {
      toast.success("All signed up!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
    onError: () => {
      toast.error(
        "Unable to create an account. If you have an account already login"
      );
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="JaneDoe@email.com" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                Password must be at least 7 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full text-white" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default UserSignupForm;
