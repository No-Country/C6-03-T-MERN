

export const getEnvVariables = () => {
  // console.log(import.meta.env)
  const variables = import.meta.env;

  return {
    ...variables
  }
}