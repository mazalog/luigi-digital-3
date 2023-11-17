import recommend from "@algolia/recommend";

const DATA = {
    appId: '8JV4YJXDOE',
    apiKey: '2c848023b46091756e311ecf49e5cb6f',
    useCookie: true
}

const recommendClient = recommend(DATA.appId, DATA.apiKey)
const indexName = 'modasport'

export async function getRelatedProducts(productId) {
    const { results } = await recommendClient.getRelatedProducts([{
        indexName,
        maxRecommendations: 5,
        objectID: productId
    }])
    return results?.[0].hits
}

export async function getFrequentlyBoughtTogether(productId) {
    const { results } = await recommendClient.getFrequentlyBoughtTogether([{
        indexName,
        maxRecommendations: 5,
        objectID: productId
    }])
    return results?.[0].hits
}