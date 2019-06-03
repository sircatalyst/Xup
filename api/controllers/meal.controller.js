import MealService from '../services/meal.service';

const MealController = {
	fetchAllMeals(req, res) {
		const allMeals = MealService.fetchAllMeals();
		return res
			.json({
				status: 'success',
				data: allMeals,
			})
			.status(200);
	},

	addAMeal(req, res) {
		/*
            expect json format
            {
                "name": "a name",
                "size": "medium",
                "price": "300"
            }
        */
		const newMeal = req.body;
		const createdMeal = MealService.addMeal(newMeal);
		return res
			.json({
				status: 'success',
				data: createdMeal,
			})
            .status(201);
            
    },
    
    getSingleMeal(req, res) {
        const id = req.params.id;
        const foundMeal= MealService.getAMeal(id);
        return res
			.json({
				status: 'success',
				data: foundMeal,
			})
            .status(201);
    }
};

export default MealController;