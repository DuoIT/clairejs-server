import { AbstractModel, Unique, Model } from '@clairejs/core'

@Model()
export class Category extends AbstractModel {
    @Unique()
    name :string
}