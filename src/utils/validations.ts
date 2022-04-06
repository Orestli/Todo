import * as yup from 'yup';

export const photosInput = yup.object({
  id: yup.number().min(1, 'Minimum number - 1').max(100, 'Maximum number - 100').required('Required')
})

export const todoInput = yup.object({
  text: yup.string().required('Required')
})