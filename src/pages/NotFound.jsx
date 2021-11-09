import React from 'react';
import HeaderRecipes from '../components/details recipes/HeaderRecipes';
import SectionRecipes from '../components/details recipes/SectionRecipes';

function NotFound() {
  const meals = [
    {
      idMeal: '52959',
      strMeal: 'Baked salmon with fennel & tomatoes',
      strDrinkAlternate: null,
      strCategory: 'Seafood',
      strArea: 'British',
      strInstructions: 'Heat oven to 180C/fan 160C/gas 4. Trim the fronds ',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
      strTags: 'Paleo,Keto,HighFat,Baking,LowCarbs',
      strYoutube: 'https://www.youtube.com/watch?v=xvPR2Tfw5k0',
      strIngredient1: 'Fennel',
      strIngredient2: 'Parsley',
      strIngredient3: 'Lemon',
      strIngredient4: 'Cherry Tomatoes',
      strIngredient5: 'Olive Oil',
      strIngredient6: 'Salmon',
      strIngredient7: 'Black Olives',
      strMeasure1: '2 medium',
      strMeasure2: '2 tbs chopped',
      strMeasure3: 'Juice of 1',
      strMeasure4: '175g',
      strMeasure5: '1 tbs',
      strMeasure6: '350g',
      strMeasure7: 'to serve',
      strSource: 'https://www.bbcgoodfood.com/recipes/7745/baked-salmon-with-fennel-and-tomatoes',
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
  ];

  return (
    <main>
      NotFound
      <HeaderRecipes
        idMeal={ meals[0].idMeal }
        strMealThumb={ meals[0].strMealThumb }
        strMeal={ meals[0].strMeal }
      />
      <SectionRecipes />
    </main>
  );
}
export default NotFound;
