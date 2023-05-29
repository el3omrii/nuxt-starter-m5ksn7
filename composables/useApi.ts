export const useApi = async (path:string) => {
    return await useFetch(() => `http://api.koratv.com/v1/${path}`)
}