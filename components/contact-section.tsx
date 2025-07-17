"use client"

import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa"
import { personalData } from "@/lib/data"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactSection() {
  const { toast } = useToast()
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          duration: 5000,
        })
        form.reset()
      } else {
        const errorData = await response.json()
        toast({
          title: "Error",
          description: errorData.message || "Failed to send message. Please try again.",
          variant: "destructive",
          duration: 5000,
        })
      }
    } catch (error) {
      console.error("Contact form submission error:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
        duration: 5000,
      })
    }
  }

  return (
    <section id="contact" className="container mx-auto py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-foreground"
      >
        Contact Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto bg-card/80 backdrop-blur-md p-8 rounded-lg shadow-lg glassmorphism-border grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Contact Form Column */}
        <div>
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl font-bold text-foreground">Send a Message</CardTitle>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel
                      className={`absolute left-3 transition-all duration-200 ${
                        field.value || focusedField === "name"
                          ? "-top-3 text-xs text-primary"
                          : "top-1/2 -translate-y-1/2 text-base text-muted-foreground"
                      }`}
                    >
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="pt-6 pb-2 bg-input border border-input focus-visible:ring-ring focus-visible:ring-offset-2"
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel
                      className={`absolute left-3 transition-all duration-200 ${
                        field.value || focusedField === "email"
                          ? "-top-3 text-xs text-primary"
                          : "top-1/2 -translate-y-1/2 text-base text-muted-foreground"
                      }`}
                    >
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        className="pt-6 pb-2 bg-input border border-input focus-visible:ring-ring focus-visible:ring-offset-2"
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel
                      className={`absolute left-3 transition-all duration-200 ${
                        field.value || focusedField === "message"
                          ? "-top-3 text-xs text-primary"
                          : "top-3 text-base text-muted-foreground"
                      }`}
                    >
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        {...field}
                        className="pt-6 pb-2 bg-input border border-input focus-visible:ring-ring focus-visible:ring-offset-2"
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </Form>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left p-4 md:p-0">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl font-bold text-foreground">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4">
            <div className="flex items-center text-muted-foreground text-lg">
              <FaEnvelope className="w-6 h-6 mr-3 text-primary" />
              <Link href={`mailto:${personalData.email}`} className="hover:text-primary transition-colors">
                {personalData.email}
              </Link>
            </div>
            <div className="flex items-center text-muted-foreground text-lg">
              <FaLinkedin className="w-6 h-6 mr-3 text-primary" />
              <Link
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </Link>
            </div>
            <div className="flex items-center text-muted-foreground text-lg">
              <FaGithub className="w-6 h-6 mr-3 text-primary" />
              <Link
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </Link>
            </div>
            {/* Add other contact info like phone if desired */}
            <p className="text-muted-foreground text-sm mt-6">
              Feel free to reach out for collaborations, opportunities, or just a chat!
            </p>
          </CardContent>
        </div>
      </motion.div>
    </section>
  )
}
