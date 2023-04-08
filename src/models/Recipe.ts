export default interface Recipe {
    id: string,
    title: string,
    author: string,
    imageUrl: string,
    ingredients: string[],
    directions: string[],
}
