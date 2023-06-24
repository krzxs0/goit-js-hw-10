axios.defaults.headers.common["x-api-key"] = "live_oc30wcx1PviugFdsFCKBsJ5coApU1peY8Ms5iQagletoq9mydoqY3xN9TwMoJP4c";

export function fetchBreeds() {
    let breeds = axios.get('https://api.thecatapi.com/v1/breeds')

    return breeds
}

export function fetchCatByBreed(breedId) {
    let certainCat = axios.get('https://api.thecatapi.com/v1/images/search', {
        params: {
            breed_ids: breedId
        }
    })

    return certainCat
}