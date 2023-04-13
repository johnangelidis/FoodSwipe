import Recipe from './Recipe';

export default interface User {
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string,
    savedRecipes: Recipe[],
}
