"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCreateSchema } from "@/app/api/hooks/use-search";

type FormValues = {
  idea: string;
};

export default function App() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

   const { mutate } = useCreateSchema();

  const onSubmit = (data: FormValues) => {
    mutate(data.idea, {
      onSuccess: () => {
        router.push('/schema');
      },
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start p-4 md:p-8 relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-radial-gradient"></div>
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150vw] h-[100vw] rounded-full"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, #0084ff40 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl pt-16 md:pt-24">
        <div className="mb-12 md:mb-20">
          <button className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-filter backdrop-blur-sm rounded-full border border-slate-700 hover:bg-slate-700/50 transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-white/90">
              Introducing Bolt Cloud!
            </span>
          </button>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 leading-tight">
          What should we build today?
        </h1>

        <p className="text-lg md:text-xl text-center text-gray-400 mb-12">
          Create stunning apps & websites by chatting with AI.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-2xl space-y-4"
        >
          <Textarea
            {...register("idea", { required: "Please type your idea." })}
            placeholder="Type your idea and we'll build it together."
            className={`min-h-[120px] ${
              errors.idea ? "border-red-500 focus:ring-red-500" : ""
            }`}
          />

          {errors.idea && (
            <p className="text-red-400 text-sm">{errors.idea.message}</p>
          )}

          <div className="flex justify-end space-x-2">
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700"
              type="submit"
            >
              Generate
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
