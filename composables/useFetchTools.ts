import toolsData from '~/constants/tools.json'

export function useFetchTools() {
  const tools = toolsData.tools;

  const getTool = (id: number) => {
    return tools.find(tool => tool.id === id)
  };

  return {
    tools,
    getTool
  };
}
