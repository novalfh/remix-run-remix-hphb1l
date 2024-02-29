import {ShopCard, links as cardstyle} from '~/components/shop-card'
import { Typography } from '@mui/material';
import {Button} from '@mui/material'
import {TextField} from '@mui/material'


const Shop = () => {
    return (
        <main>
            <ShopCard></ShopCard>
            <Typography variant='h6' component='h2'>Hello</Typography>
            <Button variant='contained'>Submit</Button>
            <form method='post'>
                <TextField name='name' label='Name' variant='outlined'></TextField>
                <TextField name='age' label='Age' variant='outlined'></TextField>
                <TextField name='password' label='Password' variant='outlined'></TextField>
            </form>
        </main>
    )
}


export default Shop;

///

export function links () {
    return [cardstyle()]
}
