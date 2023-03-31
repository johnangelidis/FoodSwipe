/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
import axios from 'axios';
import Recipe from '../models/Recipe';

const getRecipes = async () => {
  const res = await axios.get('https://www.reddit.com/r/recipes/hot.json?limit=10');
  return res.data;
};

const filterRecipes = (recipesJSON: any) => recipesJSON.data.children.filter((recipe: any, index: number) => index >= 2 || !recipe.data.title.startsWith('['));

const getPostComments = async (postId: string) => {
  const res = await axios.get(`https://www.reddit.com/r/recipes/comments/${postId}.json`);
  return res.data;
};

const extractInstructions = (commentsJSON:any, authorId:string):string => {
  let recipeBody = '';
  // eslint-disable-next-line consistent-return
  commentsJSON.forEach((comment:any, index:number) => {
    const commentsChildren = commentsJSON[1].data.children[index];
    if (commentsChildren !== undefined) {
      const commentAuthor = commentsJSON[1].data.children[index].data.author;
      if (commentAuthor && commentAuthor === authorId) {
        recipeBody = commentsJSON[1].data.children[index].data.body;
      }
    } else {
      return '';
    }
  });
  return recipeBody;
};

const parseRecipes = async (filteredRecipes: any) : Promise<Recipe[]> => {
  const recipes : Recipe[] = [];
  if (filteredRecipes) {
    for (const recipe of filteredRecipes) {
      const commentsPromise : Promise<any> = getPostComments(recipe.data.id);
      const comments = await commentsPromise;
      const extractedInstructions = extractInstructions(comments, recipe.data.author);
      recipes.push({
        id: recipe.data.id,
        title: recipe.data.title,
        author: recipe.data.author,
        imageUrl: recipe.data.url,
        instructions: extractedInstructions,
      });
    }
  }
  return recipes;
};
export {
  getRecipes,
  filterRecipes,
  parseRecipes,
};
