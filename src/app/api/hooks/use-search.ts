import { useMutation } from '@tanstack/react-query';
import {  schemaService } from '../calls/search.call';

export const useCreateSchema = () => {
  return useMutation({
    mutationFn: (prompt: string) => schemaService.createSchema(prompt),
  });
};
