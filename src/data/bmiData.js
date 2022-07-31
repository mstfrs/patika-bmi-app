const bmiResults = [
  {
    bmiType: "Underweight",
    bmiDesc: "We recommend working with a dietitian to gain a healthy weight.",
    bgColor: "aquamarine",
    color: "white",
    diet: {
      breakfast:
        "2 egg brown bread sandwich, Green chutney, 1 cup milk, 3 cashews, 4 almonds, 2 walnuts",
      lunch:
        "1 cup arhar dal, 1 cup potato curry, 3 chapatti, 1/2 cup rice, 1/2 cup low fat curd, Salad",
      dinner: "1.5 cup chicken curry, 3 chapatti, Salad",
    },
  },
  {
    bmiType: `Healthy!`,
    bmiDesc: "Congratulations! Maintain a well-balanced and consistent diet.",
    bgColor: "green",
    color: "white",
    diet: {
      breakfast:
        "3/4 cup hot whole-grain cereal, 1 small banana, Calorie-free beverage",
      lunch:
        "Tossed salad, 1 whole-wheat dinner roll, 1 1/2 teaspoons butter, 1/2 cup cubed pineapple, Calorie-free beverage",
      dinner:
        "3 ounces seared scallops in 1 teaspoon olive oil, Garlic mashed cauliflower potatoes, 1/2 cup beets, Calorie-free beverage",
    },
  },
  {
    bmiType: "Overweight",
    bmiDesc:
      "We observed that he was overweight compared to his height. We recommend that you get rid of excess weight with a suitable diet.",
    bgColor: "orange",
    color: "white",
    diet: {
      breakfast: "Cooked oatmeal with walnuts, 1 small banana, Skim milk",

      lunch:
        "Low-fat plain yogurt with flaxseed and peach halves, Melba toast crackers, Raw broccoli, Cauliflower, Low-fat cream cheese",
      dinner:
        "Salmon, Green beans with almonds, Salad greens with low-fat salad dressing and sunflower seeds, skim milk and an orange",
    },
  },
  {
    bmiType: "Obesity",
    bmiDesc:
      "We observed that the weight was at a level that could pose a risk to health. We recommend that you lose weight with the help of a dietitian.",
    bgColor: "red",
    color: "white",
    diet: {
      breakfast:
        "Brown rice idli, Sambhar, A spoonful of coconut chutney/two whole eggs, one toast with unsweetened tea/coffee",

      lunch:
        "One whole-grain chapati, Mixed vegetable curry, A bowl of salad/one whole-grain chapati turned into a tortilla with chicken stuffing",
      dinner: "One large bowl of soup with sautéed tofu/paneer/chicken",
    },
  },
];

export default bmiResults;
