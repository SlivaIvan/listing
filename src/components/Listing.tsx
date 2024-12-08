import  data  from '../data/data.json'
import { IItems } from '../interface/items'
import { Item } from './Item'

export const Listing = () => {  
    const items: IItems[] = data.filter(item => item.state === 'active')
    return(
        <div className="item-list">
            {
                items.map(item => <Item item={item} key={item.listing_id}/>)
            }

        </div>
    )

}

