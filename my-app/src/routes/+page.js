// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;



// import Papa from 'papaparse'

export const load = async ({ fetch }) => {


    const responseFlights = await fetch('http://vda-lab.gitlab.io/datavis-technologies/assets/flights_part.json')
    const  csvFlights = await responseFlights.json()
    // const  parsedCsvFlights = Papa.parse(csvFlights, {header: true})

    return {

      flights: csvFlights
    }
}