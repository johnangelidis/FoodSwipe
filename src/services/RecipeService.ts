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

const extractInstructions = (commentsJSON:any):string => commentsJSON[1].data.children[0].data.body;

const parseRecipes = (filteredRecipes: any) : Recipe[] => {
  const recipes : Recipe[] = [];
  if (filteredRecipes) {
    filteredRecipes.forEach((recipe:any) => {
      let comments:string;
      let extractedInstructions = '';
      const commentsPromise : Promise<any> = getPostComments(recipe.data.id);
      commentsPromise.then((res) => {
        comments = res;
        extractedInstructions = extractInstructions(comments);
        console.log(extractedInstructions);
      });

      recipes.push({
        id: recipe.data.id,
        title: recipe.data.title,
        author: recipe.data.author,
        imageUrl: recipe.data.url,
        instructions: extractedInstructions,
      });
    });
  }
  return recipes;
};

export {
  getRecipes,
  filterRecipes,
  // processRecipes,
  parseRecipes,
};
