import { ResourceOptions } from "adminjs";

export const categoryResourceOptions: ResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['name', 'position'],
    filterProperties: ['name', 'position', 'createdAT', 'updatedAt'],
    listProperties: ['id','name', 'position'],
    showProperties: ['id', 'name', 'position', 'createdAT', 'updatedAt']
}