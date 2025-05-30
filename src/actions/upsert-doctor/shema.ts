import { z } from "zod";

export const upsertDoctorSchema = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string().trim().min(1, { message: "Nome è obrigatorio" }),
    specialty: z
      .string()
      .trim()
      .min(1, { message: "Especialidade é obrigatoria" }),

    appointmentPriceInCents: z
      .number()
      .min(1, { message: "Preço é obrigatorio" }),
    availableFromWeekDay: z.number().min(1).max(6),
    availableToWeekDay: z.number().min(1).max(6),
    availableFromTime: z
      .string()
      .trim()
      .min(1, { message: "Hora é obrigatoria" }),
    availableToTime: z
      .string()
      .trim()
      .min(1, { message: "Hora é obrigatoria" }),
  })
  .refine(
    (data) => {
      return data.availableFromTime < data.availableToTime;
    },
    {
      message:
        "O horário de início não pode ser anterior ao horário de término.",
      path: ["availableToTime"],
    },
  );

export type UpsertDoctorSchema = z.infer<typeof upsertDoctorSchema>;
