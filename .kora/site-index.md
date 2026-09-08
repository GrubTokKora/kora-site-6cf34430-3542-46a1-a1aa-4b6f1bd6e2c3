# Site index · format 1
Structure and the names of what each page offers. Values that change often — prices, hours, phone,
address — and body copy are deliberately not recorded here; read the page itself for those.

## index.html → /
title: Gus's Deli – American, Guatemalan & Italian Food in Stamford, CT
purpose: The whole site — a one-page deli site carrying the full menu in nine category blocks, plus the hours.
sections:
- hero "Three kitchens. One counter." — the tagline introducing the American, Guatemalan and Italian sides of the kitchen
- `#menu` — the menu section, holding the nine category blocks below
- `#menu-from-the-grill` "From the Grill" — 7 priced items: Chicken Quesadilla, Steak Quesadilla, Chicken Tender w/ Fries, Tacos (steak), Tacos (chicken)
- `#menu-italian-plates` "Italian Plates" — 4 priced items: Chicken Scorpiello, Chicken Lemon, Chicken Marsala, Chicken Parm
- `#menu-guatemala-food` "Guatemala Food" — 5 priced items: Pollo Guisada, Carne Guisada, Tamales, Empanadas, Especiales todos los días
- `#menu-burritos` "Burritos" — 2 priced items: Chicken Burrito, Beef Burrito
- `#menu-appetizers-sides` "Appetizers & Sides" — 9 priced items: French Fries, Sweet Potato Fries, Hash Brown, Fried Plantain, Chicken Fingers, Buffalo Chicken Wings, Onion Rings, Mozzarella Sticks, Fried Shrimp
- `#menu-something-sweet` "Something Sweet" — 1 priced item: Rice Pudding
- `#menu-breakfast` "Breakfast" — priced items under Signature Platters, Breakfast Sandwiches and Eggs & Omelets: El Chapin, El Ranchero, Gus's Breakfast, Pancake Platter, Big Man, Toasted Bagel, Toasted Muffin, Grilled Cheese, French Toast, BLTM on Toast, Avocado Toast, Western Omelet, Spanish Omelet, Veggie Omelet, Meat Lovers Omelet, Breakfast Burrito
- `#menu-sandwiches-salads` "Sandwiches & Salads" — priced items under Cold Sandwiches, Hot Sandwiches, Burgers & Grill, Salads and Salads By The Side: Philly Cheese Steak, Sausage and Peppers, Chicken Parmigiana, Meatball Parmigiana, Eggplant Parmigiana, Gus Burger, 2 Am Burger, Cheeseburger, House Salad, Caesar Salad, Mario Salad, Macaroni, Coleslaw
- `#menu-signature-subs` "Signature Subs" — 20 numbered subs, each offered as a roll, wrap or wedge and named only by its number
- `#visit` "Counter's open. Pull up a stool." — the weekly opening hours and the address
also: Most cold-sandwich and salad rows are named by their filling rather than by a dish name, so the item name and the item description are the same string. A request naming a sandwich will use words that appear in dozens of rows, and the row it means may not be the first match.
also: The signature subs are identified only by number, so nothing in that block says what any of them contains except the row's own description.
also: Menu rows repeat the same markup per item, so a change to one row's structure has to be made to every row in that category.

## shared (every page)
The header, navigation, mobile menu and footer are propagated from index.html to every other page by
`shell_propagation`. A change to any of them is made on index.html alone and copied automatically.
