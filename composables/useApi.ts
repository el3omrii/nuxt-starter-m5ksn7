export const useApi = async (path:string, options?:object) => {
    const config = useRuntimeConfig();
    //ts-ignore
    options ? options.key = path : options = {key: path}
    return await useFetch(
        () => `${config.public.API_URL}/${path}`, 
        options,
        )
}