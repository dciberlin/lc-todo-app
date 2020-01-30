export const fetchTodos = async () => {
  const url = 'https://ds-todo-api.now.sh/todos';
  try {
    const data = await (await fetch(url)).json();
    return data;
  } catch (error) {
    return [];
  }
};
