export const nacistKurzy = async () => {
    try {
        const response = await fetch(`https://data.kurzy.cz/json/meny/b[1].json`)
        return await response.json()
    } catch (error) {
        console.error('Error fetching data:', error)
        return null
    }
}