import cardStyle from './shop-card.css'

export const ShopCard = () => {
    return (
        <div className="shop-card">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <p>Lsss</p>
            </ul>
        </div>
    )
}


export function links () {
    return [{rel:'stylesheet', href:cardStyle}]
}