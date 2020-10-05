import { AbstractModel, FK, Model } from '@clairejs/core';
import { User } from './User';
import { Product } from './Product'

@Model()
class Cart extends AbstractModel {
    @FK({model:User})
    userId : number

    @FK({model: Product})
    productId : number

    
}