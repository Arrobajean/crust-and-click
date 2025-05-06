
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(3, "El nombre es obligatorio y debe tener al menos 3 caracteres"),
  email: z.string().email("Ingrese un correo electrónico válido"),
  phone: z.string().min(9, "Ingrese un número de teléfono válido"),
  address: z.string().min(5, "La dirección es obligatoria"),
  city: z.string().min(2, "La ciudad es obligatoria"),
  postalCode: z.string().min(5, "Ingrese un código postal válido"),
});

type FormValues = z.infer<typeof formSchema>;

const CheckoutForm = () => {
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log("Datos de envío:", data);
    toast({
      title: "Pedido confirmado",
      description: "¡Gracias por tu compra! Recibirás un correo con los detalles.",
      variant: "default",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl md:text-2xl font-serif font-semibold mb-6">Datos de Envío</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre completo</Label>
          <Input
            id="name"
            placeholder="Tu nombre completo"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            placeholder="Ej: 612345678"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address">Dirección</Label>
          <Input
            id="address"
            placeholder="Calle, número, piso, puerta..."
            {...register("address")}
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">Ciudad</Label>
            <Input
              id="city"
              placeholder="Madrid"
              {...register("city")}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="postalCode">Código postal</Label>
            <Input
              id="postalCode"
              placeholder="28001"
              {...register("postalCode")}
            />
            {errors.postalCode && (
              <p className="text-red-500 text-sm">{errors.postalCode.message}</p>
            )}
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-bread-accent hover:bg-bread-accent/90 text-white py-3 mt-6"
        >
          Confirmar Compra
        </Button>
        
        <p className="text-sm text-bread-dark/60 mt-4 text-center">
          Al realizar el pedido, aceptas nuestros <a href="/terminos-condiciones" className="text-bread-accent hover:underline">Términos y Condiciones</a>
        </p>
      </form>
    </div>
  );
};

export default CheckoutForm;
