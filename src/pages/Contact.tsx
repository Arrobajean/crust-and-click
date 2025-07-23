import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Phone, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.string().email("Por favor, introduce un email válido"),
  subject: z.string().min(3, "El asunto debe tener al menos 3 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (data: FormValues) => {
    try {
      // In a real application, you would send this data to your backend
      console.log("Form data submitted:", data);

      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto. ¡Gracias!",
      });

      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error al enviar el formulario",
        description: "Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-bread-background min-h-[80vh]">
      {/* Hero Section */}
      <section className="bg-bread-light py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-bread-dark mb-6">
              Contacta con Nosotros
            </h1>
            <p className="text-lg text-bread-dark/80 mb-8">
              Estamos aquí para responder a tus preguntas y escuchar tus
              comentarios. Nos encantaría saber de ti.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6 md:p-8"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-bread-dark mb-6">
              Envíanos un Mensaje
            </h2>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asunto</FormLabel>
                      <FormControl>
                        <Input placeholder="Asunto del mensaje" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Escribe tu mensaje aquí..."
                          className="min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-bread-accent hover:bg-bread-accent/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-bread-dark mb-6">
                Información de Contacto
              </h2>
              <p className="text-bread-dark/80 mb-8">
                Si prefieres contactarnos directamente, aquí tienes nuestros
                datos de contacto. Estamos disponibles de lunes a viernes de
                9:00 a 18:00.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-bread-accent mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-bread-dark">Dirección</h3>
                  <p className="text-bread-dark/80">
                    Calle Panaderos, 123
                    <br />
                    28001, Madrid, España
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-bread-accent mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-bread-dark">Teléfono</h3>
                  <p className="text-bread-dark/80">+34 91 123 45 67</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-bread-accent mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-bread-dark">Email</h3>
                  <p className="text-bread-dark/80">info@crustclick.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <h3 className="font-medium text-bread-dark mb-4">Encuéntranos</h3>
              <div className="h-64 rounded-lg overflow-hidden border border-bread-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12143.373035239393!2d-3.7037974!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436feb1c1f4201!2sMadrid%2C%20Spain!5e0!3m2!1sen!2ses!4v1620120000000!5m2!1sen!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Ubicación de nuestra panadería"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
