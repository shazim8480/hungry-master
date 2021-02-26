
            // search button event listener and meal search//
            document.getElementById("search-btn").addEventListener("click", () =>{
                let inputMeal = document.getElementById("search-meal").value;
                searchMeal(inputMeal);
            })

            // result heading declaration//
            const resultHeading = document.getElementById("result-heading");
            
            // api function for meal search //
            const searchMeal = meals =>{
                fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`)
                .then(res => res.json())
                .then(data => displayMeals(data.meals));
            }
    
        // creating a div for each meal with image and header //
            const displayMeals = meals =>{
                const mealsDiv = document.getElementById("meals");            
                meals.forEach(meal => {
                    const mealDiv = document.createElement("div");
                    mealDiv.className = "meal";
                    const mealInfo = `
                        <img class='meal-img' src="${meal.strMealThumb}"/>
                        <h5 class='meal-name'>${meal.strMeal}</h5>
                    `;
                    mealDiv.innerHTML = mealInfo;
                    mealsDiv.appendChild(mealDiv);
                });
        }
        // // clear search value //
        //   const searchButton = document.getElementById("search-btn");
        //   searchButton.value = '';
            // fetch function//
            const displayMealDetail = meal =>{
                const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list/${meal}`;
                fetch(url)
                .then(response => response.json())
                .then(data => renderMealInfo(data.meal))
            }

            // function for showing meal details //
            const renderMealInfo = meal => {
                const mealInfoDiv = document.getElementsByClassName("meal-description");
                mealInfoDiv.innerHTML = `
                    <img class='meal-img' src="${meal.strMealThumb}"/>
                    <h2 class='meal-name'>${meal.strMeal}</h2>
                    <h4>Ingredients</h4>
                    <ul>
                        <i class="fas fa-check-square"></i><li>${strIngredient1}</li>
                        <i class="fas fa-check-square"></i><li>${strIngredient2}</li>
                        <i class="fas fa-check-square"></i><li>${strIngredient3}</li>
                        <i class="fas fa-check-square"></i><li>${strIngredient4}</li>
                        <i class="fas fa-check-square"></i><li>${strIngredient5}</li>
                        <i class="fas fa-check-square"></i><li>${strIngredient6}</li>
                        <i class="fas fa-check-square"></i><li>${strIngredient7}</li>
                        <i class="fas fa-check-square"></i><li>${strIngredient8}</li>
                        <i class="fas fa-check-square"></i><li>${strIngredient9}</li>
                    </ul>
                `;
            }


    // document.getElementsByClassName("meal-name").addEventListener("click", () =>{
    //     console.log("clicked");
    // })
