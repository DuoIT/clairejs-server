import { AbstractModel, Unique, Required, Model } from '@clairejs/core'

@Model()
export class User extends AbstractModel {
    @Unique()
    email: string;

    @Required()
    password: string;

    @Required()
    name: string;

    address: string;

    gender: boolean;
}