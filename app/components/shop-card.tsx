import cardStyle from './shop-card.css'
import { Input } from '@nextui-org/react'

export const ShopCard = () => {
    return (
        <div className="shop-card">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <p>Lsss</p>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input type="email" label="Email" />
                    <Input type="email" label="Email" placeholder="Enter your email" />
                </div>
            </ul>
        </div>
    )
}


export function links () {
    return {rel:'stylesheet', href:cardStyle}
}