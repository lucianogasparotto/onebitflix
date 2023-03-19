import { ResourceOptions } from "adminjs";

export const categoryResourceOptions: ResourceOptions = {
    navigation: 'Catalogo',
    editProperties: ['name', 'position'],
    filterProperties: ['name', 'position', 'createdAT', 'updatedAt'],
    listProperties: ['id','name', 'position'],
    showProperties: ['id', 'name', 'position', 'createdAT', 'updatedAt']
}