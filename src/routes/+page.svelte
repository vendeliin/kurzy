<script>
    /** @type {import('@sveltejs/adapter-vercel').Config} */
    export const config = {
        runtime: 'nodejs18.x'
    }

    import {nacistKurzy} from "./apiService.js";

    let data = ''

    const bruh = async () => {
        data = await nacistKurzy()
    }
    bruh()

</script>

{#if data}
    <table>
        <thead>
        <tr>
            <th>Měna</th>
            <th>Jednotka</th>
            <th>Kurz</th>
        </tr>
        </thead>
        <tbody>
        {#each Object.keys(data.kurzy) as key}
            <tr>
                <td >{data.kurzy[key].nazev}</td>
                <td >{data.kurzy[key].jednotka}</td>
                <td >{data.kurzy[key].dev_stred}</td>
            </tr>
        {/each}
        </tbody>
    </table>
{/if}

