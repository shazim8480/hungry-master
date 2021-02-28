
        // function to take search value and meal search//
            const searchMeal = () =>{
                const searchText = document.getElementById("search-meal").value;
                // now connecting between the search value and result through API //
                fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
                .then(res => res.json())
                .then(data => displayMeals(data.meals))
                .catch(error => displayError("Failed to load search data. Please try again!!"));
            }
    
        // creating a div for each meal with image and header //
            const displayMeals = meals =>{
                // console.log(meals);
                const mealsDiv = document.getElementById("meals");
                mealsDiv.innerHTML = '';            
                meals.forEach(meal => {
                    const mealDiv = document.createElement("div");
                    mealDiv.className = "meal";
                    mealDiv.innerHTML = `
                        <img onclick = "displayMealDetail('${meal.idMeal}')" class='meal-img' src="${meal.strMealThumb}"/>
                        <h5 onclick = "displayMealDetail('${meal.idMeal}')" class='meal-name'>${meal.strMeal}
                        </h5>
                    `;
                    // mealDiv.innerHTML = mealInfo;
                    mealsDiv.appendChild(mealDiv);
                });
        }
            
        // fetch function for meal details//
            const displayMealDetail = mealId =>{
                // console.log(mealId);
                const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
                // console.log(url);
                fetch(url)
                .then(response => response.json())
                .then(data => renderMealInfo(data.meals))
                .catch(error => displayError("Failed to load meal details. Please try again later!"));
            }

        // function for showing meal details //
            const renderMealInfo = meals => {
                const mealInfoDiv = document.getElementById("meal-description");
                mealInfoDiv.innerHTML = 
                `
                    <img class='meal-img' src="${meals[0].strMealThumb}"/>
                    <h2 class='single-mealName'>${meals[0].strMeal}</h2>
                    <h5 class='ingredient-name'>Ingredients</h5>
                    <ul>
                        <div class="meals-list">
                        <i class="fas fa-check-square check-icon"></i><li>${meals[0].strIngredient1}</li>
                        </div>
                        <div class="meals-list">
                        <i class="fas fa-check-square check-icon"></i><li>${meals[0].strIngredient2}</li>
                        </div>
                        <div class="meals-list">
                        <i class="fas fa-check-square check-icon"></i><li>${meals[0].strIngredient3}</li>
                        </div>
                        <div class="meals-list">
                        <i class="fas fa-check-square check-icon"></i><li>${meals[0].strIngredient4}</li>
                        </div>
                        <div class="meals-list">
                        <i class="fas fa-check-square check-icon"></i><li>${meals[0].strIngredient5}</li>
                        </div>
                        <div class="meals-list">
                        <i class="fas fa-check-square check-icon"></i><li>${meals[0].strIngredient6}</li>
                        </div>
                        <div class="meals-list">
                        <i class="fas fa-check-square check-icon"></i><li>${meals[0].strIngredient7}</li>
                        </div>
                        <div class="meals-list">
                        <i class="fas fa-check-square check-icon"></i><li>${meals[0].strIngredient8}</li>
                        </div>
                        <div class="meals-list">
                        <i class="fas fa-check-square check-icon"></i><li>${meals[0].strIngredient9}</li>
                        </div>
                        <div class="meals-list">
                        <i class="fas fa-check-square check-icon"></i><li>${meals[0].strIngredient10}</li>
                        </div>      
                    </ul>
                `;     
            }

        // error function //
        const displayError = error =>{
            const errorTag = document.getElementById("error-message");
            errorTag.innerText = error;
        }

