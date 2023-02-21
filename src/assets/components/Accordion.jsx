import React from 'react';

 export default function Accordion() {
  const questions = [
    {
      question: 'How does HelloFresh’s meal kit delivery service work?',
      answer:
        'Our meal delivery service allows you to skip meal planning and grocery shopping. HelloFresh delivers step-by-step recipes and fresh, pre-portioned ingredients right to your door. First, you set your meal plan preferences with options for carnivores, vegetarians, calorie-counters, and more. You’ll choose from 30+ delicious weekly recipes carefully put together by our chefs. Then, you’ll receive those recipes with easy-to-follow instructions on the day of your choosing. You can skip a week or cancel anytime if your needs change.',
    },
    {
      question: 'Which food meal plans & recipes does HelloFresh offer?',
      answer:
        'HelloFresh has the most variety in terms of recipes—from meat & veggies, to low-carb and low-calorie options, and more. You can choose from six delicious meal plan preferences—each one offers 27+ sumptuous weekly recipes crafted by professional chefs and nutrition specialists. With HelloFresh, you have the power to choose according to your preference and lifestyle. Our low-calorie meal kits, for instance, feature dietician-approved recipes that contain only about 650 calories. Meanwhile, our family-friendly meal delivery preference allows you to get easy and delicious recipes that even your kids will love. What’s more: you can always upgrade to Gourmet Recipes and include add-ons like garlic bread.',
    },
    {
      question: 'How many times a week does HelloFresh deliver?',
      answer:
        'Once a week. You can expect your meal kits to arrive between 8 am to 8 pm. We deliver anywhere in the United States, except Alaska and Hawaii.',
    },
    {
      question: 'Does HelloFresh give nutrition & calorie information?',
      answer:
        'Absolutely! We guarantee that every single one of our meal kits is appropriately labeled. They have all the nutritional facts you’re looking for like calorie content and the amount of carbohydrates, protein, dietary fiber, sugar, sodium, unsaturated and saturated fat, and cholesterol.',
    },
    {
      question: 'How do I recycle my HelloFresh box?',
      answer:
        'You can fold your box and place it with your curbside recyclables, take it to your local recycling center, or even compost it.',
    },
    {
      question: 'How much does HelloFresh cost?',
      answer:
        'The cost of HelloFresh’s meal service starts at $7.49 per serving. In other words, you spend only $53.94 per week for 3 recipes a week for 2 people. Just check out our street cred on Trustpilot, where our customers swear by our service.',
    },
    {
      question: 'Does HelloFresh support a healthy lifestyle?',
      answer:
        'Yes. HelloFresh offers a wide array of flavorful and nutritious meal kit menu options that cater to a range of dietary needs, making use of crisp, seasonal vegetables and other fresh produce.',
    },
    {
      question: 'Can I skip a week of delivery?',
      answer:
        'Yes. With our meal subscription service, you are always in control. If you don’t want to receive a meal kit on a particular week, you don’t have to. To avoid charges when skipping a week, you simply need to “pause” your meal kit order or cancel your meal subscription after logging into your account.Pausing or canceling your meal delivery orders should be done by 11:59 pm PST, five days before your next delivery schedule. Note that you will be charged on all orders that you failed to cancel before the cut-off date.',
    },
  ];
// data-bs-target, aria-controls, and id need to be the same so it knows which one to close
  return (
    <div className="accordion" id="accordionExample">
      {questions.map((item,index) => (
        <div key={index} className="accordion-item">
          <h3 className="accordion-header" id={`heading${index + 1}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="true"
              aria-controls={`collapse${index}`}
            >
              {item.question}
            </button>
          </h3>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse "
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
