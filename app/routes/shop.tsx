import {ShopCard, links as cardstyle} from '~/components/shop-card'

const Shop = () => {
    return (
        <main>
            <ShopCard></ShopCard>
        </main>
    )
}


export default Shop;

///

export function links () {
    return [cardstyle()]
}