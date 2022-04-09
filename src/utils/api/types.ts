export interface TodoProps {
  text: string;
  done: boolean;
}

export type TodoResponse = TodoProps & {
  id: string;
};
