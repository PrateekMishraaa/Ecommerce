// BottomDetails.jsx
import React from 'react';

const BottomDetails = () => {
    const bottomDetails = [
        {
            title: "Milk Online",
            description: "The richness of milk as nature's perfect food is demonstrated by its high content of essential nutrients, versatility in cooking, and its indispensable role in sustaining life. Milk has been more than just a biological necessity for human consumption since it originated as an essential diet for young mammals. Today, milk is a daily essential in most households, enjoyed on its own or paired with breakfast favourites like cereals, oats, muesli, and granola. It also forms the base for a wide range of dairy products such as curd, yogurt, butter, cheese, paneer, and cream. When you buy milk online, you can choose from full cream, toned, double toned, organic, and lactose-free options, ensuring freshness and convenience delivered straight to your doorstep."
        },
        {
            title: "Composition:",
            description: "Primarily, milk contains water, proteins, fats, carbohydrates, vitamins, and minerals that together determine its nutritive value and sensory properties. Water accounts for about 87% of the total volume of milk making it a major component. Proteins such as casein and whey contain all the necessary amino acids required for growth and development (Tungland & Meyer 2018). The lipid components contain saturated fats, monounsaturated fats, and polyunsaturated fats which are responsible for taste enhancement in milk but also act as carriers for fat-soluble vitamins including A, D, E and K among others. Primarily lactose is the principal carbohydrate providing an energy source while facilitating mineral absorption (Young et al., 2013). Besides these elements, there are other vital minerals such as calcium, phosphorus, potassium, and magnesium, which help to retain good muscle function, bone health processes along metabolic processes."
        },
        {
            title: "Types of Milk:",
            description: "Different types of milk depend on their origin and composition:"
        },
        {
            title: "Cow's Milk:",
            description: "Cow's milk is regarded as one of the most popular types of milk globally both in terms of consumption and recognition. It holds great importance because it consists of proteins, calcium, vitamins among many others needed by our bodies. Furthermore, cow's milk is used in diverse culinary creations ranging from healthy breakfast cereals to heavenly desserts due to its creamy texture with mild flavor (Bowen et al., 2016)."
        },
        {
            title: "Buffalo's Milk:",
            description: "Buffalo's milk can be considered equivalent to cow's but it is richer or creamier than such kind. Having slightly different components from those found in bovine versions, buffalo's milk has higher fat content hence it is used to make creamy dairy products such as cheese and yogurt (Tungland & Meyer 2018). Additionally, buffalo's milk tends to be tastier, thus enhancing the flavor of different meals from sweet treats to savory foods."
        }
    ];
const nutrientsValue=[
    {
        title:"Protein",
        description:"Milk is replete with proteins, with casein and whey standing out as the primary variants. These proteins furnish the body with a plethora of amino acids, crucial for muscle growth, repair, and overall cellular function."
    },
    {
        title:"Fats",
        description:" The buttery richness of milk stems from its fat content, comprising a harmonious blend of saturated, monounsaturated, and polyunsaturated fats. Alongside, fat-soluble vitamins like A, D, E, and K find solace within milk's lipid matrix, bestowing upon it unparalleled nutritional richness."
    },
    {
        title:"Carbohydrates",
        description:" Lactose, the predominant carbohydrate in milk, serves as a source of energy while aiding in the absorption of calcium and other minerals. Its presence ensures a balanced nutritional profile, catering to the body's diverse metabolic needs."
    },
    {
        title:"Vitamins and Minerals",
        description:"Milk emerges as a veritable treasure trove of vitamins and minerals, including vitamin A, vitamin D, vitamin B12, riboflavin (B2), niacin (B3), calcium, phosphorus, potassium, and magnesium. These micronutrients play pivotal roles in bolstering bone health, supporting muscle function, and orchestrating myriad metabolic processes essential for vitality and well-being."
    },
  
]
const uses=[
    {
        title:"Beverages",
        description:"Milk serves as the cornerstone of countless beverages, ranging from the simplicity of a comforting glass of warm milk to the sophistication of frothy cappuccinos and velvety milkshakes. Its creamy consistency and neutral flavor provide a canvas for culinary exploration, infusing each concoction with a touch of wholesome goodness."
    },
    {
        title:"Cooking and Baking",
        description:"In the realm of gastronomy, milk assumes the role of a culinary alchemist, weaving its magic into an array of savory and sweet creations. From creamy sauces and velvety soups to decadent cakes and delicate pastries, milk lends its moisture, richness, and subtle sweetness to elevate dishes to culinary perfection."
    },
    {
        title:"Dairy Products",
        description:" Milk serves as the lifeblood of the dairy industry, birthing an array of delectable delights ranging from creamy cheeses and tangy yogurts to indulgent creams and velvety ice creams. Each dairy product bears testament to milk's transformative powers, offering a symphony of flavors and textures to tantalize the taste buds."
    },
    
]
const benifits=[
    {
        title:"Bone Health",
        description:" Milk emerges as a stalwart defender of bone health, fortified with calcium and vitamin D, indispensable allies in the quest for strong and resilient bones. Regular consumption of milk ensures optimal calcium absorption, safeguarding against the ravages of osteoporosis and brittle bones."
    },
    {
        title:"Muscle Growth and Repair",
        description:"The high-quality proteins abundant in milk serve as building blocks for muscle growth, repair, and maintenance. Whether fueling a rigorous workout or aiding in post-exercise recovery, milk stands as a stalwart companion in the pursuit of peak physical performance"
    },
    {
      title:"Weight Management",
      description:" Milk assumes a pivotal role in weight management regimes, thanks to its satiating combination of protein and fats. By curbing cravings and regulating appetite, milk fosters a sense of fullness and satisfaction, empowering individuals to navigate their dietary journey with ease and efficacy."  
    },
    {
        title:"Hydration",
        description:" With its high water content and replenishing electrolytes, milk emerges as a potent hydrating agent, offering respite from the parched throes of dehydration. Whether quenching thirst after physical exertion or cooling the palate on a scorching summer's day, milk stands as a refreshing oasis of hydration."
    },
    {
        title:"Nutrient Absorption",
        description:" The presence of lactose in milk facilitates the efficient absorption of calcium and other minerals, ensuring their seamless assimilation into the body's intricate matrix. This synergistic interplay between nutrients optimizes metabolic efficiency, fortifying the body's defenses against nutritional deficiencies and metabolic disorders."
    },
   
]
const CulturalSignificance=[
    {
        title:"Rituals and Ceremonies",
        description:"Milk features prominently in traditional rituals, ceremonies, and celebrations, symbolizing purity, fertility, and nourishment. From ceremonial libations to symbolic offerings, milk transcends its culinary utility to embody cultural values and spiritual significance."
    },
    {
        title:"Social Cohesion",
        description:"The sharing of milk fosters social cohesion and communal bonds, serving as a conduit for interpersonal connections and collective celebrations across diverse cultural landscapes."
    },
    
];
const FrequentlyAskedQuestions=[
    {
        question:"What is it about milk that makes it a nutritious drink?",
        answer:"Milk has all the essential nutrients that are necessary for the human body, including proteins, fats, carbohydrates, vitamins, and minerals. It contains vast amounts of good-quality proteins, calcium, and other micronutrients required for bone health, muscle activity as well and good general body function"
    },
    {
        question:"Can lactose-intolerant people consume milk?",
        answer:"Conventional cow’s milk has lactose which causes gastrointestinal problems in individuals with lactose intolerance but some alternatives include lactose-free cow milk or non-dairy nut milk. Furthermore, there are some types of milk like goat’s that can be taken by those having issues to digesting them because they have less lactose compared to cow’s."
    },
    {
        question:"How does Milk affect your Bones?",
        answer:"In terms of bone health, substantial contributions come from milk which is rich in vitamin D and calcium. The role of calcium is to give bones their structure while vitamin D assists in absorbing and utilizing calcium therefore ensuring efficient bone mineralization and optimal density."
    },
    {
        question:"Can I use Milk in my weight loss plan?",
        answer:"Definitely! One can take this into account when planning what he or she eats or drinks. This combination of protein and fat helps to control hunger pangs thus making it a very satisfying choice of beverage. Additionally, its nutrient density provides essential vitamins and minerals plus it’s not high calorie so you can keep your overall intake under check even during weight management hence promoting your health holistically during such efforts."
    }
]
    return (
        <section className="w-full bg-gray-50 border-t border-gray-200 mt-10 py-8 px-4">
            <div className="max-w-7xl mx-auto space-y-8">
                {bottomDetails.map((item, index) => (
                    <div key={index} className="space-y-2">
                        <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                ))}

              
                 <div>
                    <p className='text-2xl font-bold'>Nutritional Values</p>
                     {nutrientsValue.map((item, index) => (
                    <div key={index} className="space-y-2 py-4">
                        <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                ))}
                 </div>


                  <div>
                    <p className='text-2xl font-bold'>Uses</p>
                     {uses.map((item, index) => (
                    <div key={index} className="space-y-2 py-4">
                        <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                ))}
                 </div>
                    <div>
                    <p className='text-2xl font-bold'>Benifits</p>
                     {benifits.map((item, index) => (
                    <div key={index} className="space-y-2 py-4">
                        <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                ))}
                 </div>
                   <div>
                    <p className='text-2xl font-bold'>Cultural Significance</p>
                     {CulturalSignificance.map((item, index) => (
                    <div key={index} className="space-y-2 py-4">
                        <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                ))}
                 </div>

                    <div>
                    <p className='text-2xl font-bold'>Cultural Significance</p>
                     {CulturalSignificance.map((item, index) => (
                    <div key={index} className="space-y-2 py-4">
                        <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                ))}
                 </div>
                    <div>
                    <p className='text-2xl font-bold'>Frequently Asked Questions</p>
                     {FrequentlyAskedQuestions.map((item, index) => (
                    <div key={index} className="space-y-2 py-4">
                        <h3 className="font-bold text-xl text-gray-800">{item.question}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                ))}
                 </div>
            </div>
        </section>
    );
};

export default BottomDetails;