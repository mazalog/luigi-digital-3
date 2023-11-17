import si from 'search-insights'

si('init', {
    appId: '8JV4YJXDOE',
    apiKey: '2c848023b46091756e311ecf49e5cb6f',
    useCookie: true
})

export default function useAlgoliaInsights() {
    const sendProductAddedToCart = objectID => {
        si('convertedObjectIDs', {
            index: 'modasport',
            eventName: 'Product View',
            objectIDs: [objectID]
        })
    }
    const sendProductView = objectID => {
        si('viewedObjectIDs', {
            index: 'modasport',
            eventName: 'addProduct',
            objectIDs: [objectID]
        })
    }
    return { sendProductAddedToCart, sendProductView }
}
