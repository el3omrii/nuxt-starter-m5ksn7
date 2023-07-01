export const useApi = async (path:string) => {
    const config = useRuntimeConfig();
    return await useFetch(() => `${config.public.API_URL}/${path}`, {key: path})
}