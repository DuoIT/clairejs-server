import { AbstractModel, Required, Field, FK, Model } from '@clairejs/core'
import { Category } from './Category';

@Model()
export class Product extends AbstractModel {
    @FK({model: Category})
    cateId : number;

    @Required()
    name : string;

    @Field()
    img : string;

    @Required(false)
    des?: string;

    @Required(false)
    price?: number
}