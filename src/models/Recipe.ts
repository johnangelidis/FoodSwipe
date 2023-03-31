export default interface Recipe {
    id: string,
    title: string,
    author: string,
    imageUrl: string,
    instructions: string | null | undefined,
};
