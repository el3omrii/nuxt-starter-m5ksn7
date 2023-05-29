const useSettings = () => {
    const settings = useState<object>('settings', () => [])
    const setSettings = (data: object) => settings.value = data

    return { settings, setSettings }
}
export default useSettings
