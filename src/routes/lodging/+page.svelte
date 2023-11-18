<script>
    import Badge from "../../lib/components/Badge.svelte";
    import LodgingButton from "../../lib/components/LodgingButton.svelte";
</script>

<section class="mt-[8rem] h-[200%] relative">
	<h1 class="mx-10 my-10 text-5xl text-center">
		We know that sometimes, a longer trip has been planned so we've constructed some lodgings for
		you to stay in!
	</h1>
	<div class="flex flex-wrap gap-5 justify-evenly">
        <!-- First -->
		<div class="w-[20rem] card rounded-md p-5 bg-black bg-opacity-20">
			<img
				src="/images/lodging-1.jpg"
				alt="First Lodging"
				class="w-[80%] h-auto m-2 mx-auto rounded-lg"
			/>
			<div class="m-5 mx-auto rounded-md variant-outline-warning">
				<header class="mx-auto text-2xl font-bold text-center card-header">
					Riverside Lodging
				</header>
				<section class="p-4 my-2 h-[30rem] overflow-auto flex flex-col gap-3 mx-2">
					<p>Welcome to Riverside Lodge, a serene retreat nestled along the banks of a peaceful river. Our lodge beckons with 10 cozy rooms, each meticulously designed to offer a tranquil escape into nature while providing modern comforts.</p>

					<p>Whether you're planning a brief respite or an extended stay, Riverside Lodge accommodates your desires with flexible rental options ranging from 2 to 5 days. Immerse yourself in the soothing sounds of the river and the gentle rustling of leaves as you relax in the embrace of our well-appointed rooms.</p>

                    <p>Each room features default twin-sized beds, ideal for solo travelers or companions seeking a cozy atmosphere. For those desiring a bit more space and luxury, the option of a queen-sized bed is available. Awaken to the melodic flow of the river, and enjoy your morning coffee on a private balcony overlooking the picturesque waters.</p>

                    <p>Riverside Lodge transcends being a mere place to stay; it's an immersive experience connecting you with the natural beauty that surrounds. Explore nearby trails, partake in water activities, or simply unwind in our communal areas designed for comfort and camaraderie.</p>

                    <p>Join us at Riverside Lodge for a rejuvenating retreat where the scenic allure of the river meets the warmth of genuine hospitality. Whether you seek adventure or a tranquil riverside escape, our lodge welcomes you to create enduring memories along the water's edge.</p>
				</section>
                <div class="flex justify-between m-5">
                    <LodgingButton content="Rent"/>
                    <LodgingButton content="Availablities"/>
                </div>
				<footer class="flex flex-wrap justify-between gap-2 p-5 rounded-lg card-footer variant-outline-warning">
                    <Badge content="2 to 5 days Rental"/>
                    <Badge content="10 rooms"/>
                    <Badge content="Twin Size default"/>
                    <Badge content="Queen Size Available"/>
                </footer>
			</div>
		</div>
        <!-- Second -->
        <div class="w-[20rem] bg-black bg-opacity-20 card rounded-md p-5">
			<img
				src="/images/lodging-2.jpg"
				alt="Second Lodging"
				class="w-[80%] h-auto m-2 mx-auto rounded-lg"
			/>
			<div class="m-5 mx-auto rounded-md variant-outline-warning">
				<header class="mx-auto text-2xl font-bold text-center card-header">
					Dragon Slayer Lodging
				</header>
				<section class="p-4 my-2 h-[30rem] overflow-auto flex flex-col gap-3 mx-2">
					<p>Welcome to Dragon Slayer Lodge, a fortress of respite for the valiant souls on a quest to conquer dragons. Nestled within the mighty walls of a medieval stronghold, our lodge beckons with 50 spacious rooms available for a month-long rental, each adorned with regal king-sized beds befitting a true champion.</p>

					<p>At the heart of Dragon Slayer Lodge lies the grand Great Hall, where dragon slayers come together to share tales of their conquests and indulge in hearty meals prepared by our skilled chefs. Your one-month rental not only secures a comfortable abode but also grants you daily feasts to replenish your strength for the challenges that await you.</p>

					<p>Each room is a sanctuary of rest, featuring king-sized beds to ensure a royal night's sleep. Adorned with banners depicting the emblems of renowned dragon-slaying guilds, these rooms echo with the spirit of camaraderie and shared victories.</p>

                    <p>Join us at Dragon Slayer Lodge, where the clang of armor and the roar of dragons fade into the background, replaced by the warm camaraderie of fellow dragon slayers. Whether you seek a month-long refuge between quests or a base for epic adventures, our lodge stands as a testament to the courage and resilience of those who dare to face the dragons.</p>
				</section>
                <div class="flex justify-between m-5">
                    <LodgingButton content="Rent"/>
                    <LodgingButton content="Availabilities"/>
                </div>
				<footer class="flex flex-wrap justify-between gap-2 p-5 rounded-lg card-footer variant-outline-warning">
                    <Badge content="Up to 1 Month Rental"/>
                    <Badge content="50 rooms"/>
                    <Badge content="Built-in Bath"/>
                    <Badge content="King Size Beds"/>
                    <Badge content="Meals Included"/>
                </footer>
			</div>
		</div>
        <!-- Third -->
        <div class="w-[20rem] bg-black bg-opacity-20 card rounded-md p-5">
			<img
				src="/images/lodging-3.jpg"
				alt="Third Lodging"
				class="w-[80%] h-auto m-2 mx-auto rounded-lg"
			/>
			<div class="m-5 mx-auto rounded-md variant-outline-warning">
				<header class="mx-auto text-2xl font-bold text-center card-header">
					Townside Lodging
				</header>
				<section class="p-4 my-2 h-[30rem] overflow-auto flex flex-col gap-3 mx-2">
					<p>Welcome to Townside Inn, a welcoming abode for those seeking comfort and convenience within the bustling town. Situated at the crossroads of adventure, our inn offers 20 cozy rooms available for a bi-weekly rental, providing respite for weary travelers and steadfast explorers alike.</p>

					<p>Each room at Townside Inn is thoughtfully designed to cater to your every need. Enjoy the regal comfort of a queen-size bed, ensuring a restful night's sleep after a day of quests and exploration. As a guest, you'll find a built-in bath, allowing you to unwind and refresh at your leisure.</p>

					<p>The heart of Townside Inn is its attached restaurant, where our skilled chefs craft delectable meals to satisfy every palate. Your bi-weekly rental includes the luxury of daily dining at the restaurant, where you can savor hearty meals and share tales of your adventures with fellow travelers.</p>
                    
                    <p>Whether you are a passing wanderer or a long-term guest, Townside Inn stands as your haven in the heart of the realm. Experience the charm of townside lodging, where the vibrancy of the town meets the comfort of a warm and inviting inn. Join us at Townside Inn, your home away from home, and let the tales of the town unfold around you.</p>
				</section>
                <div class="flex justify-between m-5">
                    <LodgingButton content="Rent"/>
                    <LodgingButton content="Availabilities"/>
                </div>
				<footer class="flex flex-wrap justify-between gap-2 p-5 rounded-lg cursor-default card-footer variant-outline-warning">
                    <Badge content="Bi-weekly Rental"/>
                    <Badge content="20 Rooms"/>
                    <Badge content="Meals Included"/>
                    <Badge content="Built in Bath"/>
                    <Badge content="Queen Size Beds"/>
                </footer>
			</div>
		</div>
        <!-- Fourth -->
        <div class="w-[20rem] bg-black bg-opacity-20 card rounded-md p-5">
			<img
				src="/images/lodging-4.jpg"
				alt="Fourth Lodging"
				class="w-[80%] h-auto m-2 mx-auto rounded-lg"
			/>
			<div class="m-5 mx-auto rounded-md variant-outline-warning">
				<header class="mx-auto text-2xl font-bold text-center card-header">
					Drake Count Mansion
				</header>
				<section class="p-4 my-2 h-[30rem] overflow-auto flex flex-col gap-3 mx-2">
					<p>Welcome to Drake Count Mansion, an opulent estate near the heart of the city, where the allure of a long-term stay meets unparalleled luxury. Immerse yourself in the grandeur of our mansion, offering 15 sumptuous rooms tailored for extended residence, providing a haven of comfort and sophistication.</p>

					<p>As a distinguished resident of Drake Count Mansion, you'll enjoy daily meals served within the majestic Great Hall. Our skilled chefs curate delectable dishes, transforming each meal into a regal experience amidst the splendid surroundings of the mansion.</p>

					<p>Each room within Drake Count Mansion is a sanctuary of luxury, featuring a built-in bath for your relaxation and convenience. The grand king-size bed in every room ensures a restful night's sleep, and the lavish amenities evoke an ambiance of regality and refinement.</p>
                    
                    <p>Join us at Drake Count Mansion, where the elegance of a bygone era meets the convenience of modern living. Experience the epitome of extended stay luxury in our regal estate, where every moment is imbued with the timeless allure of sophistication.</p>
				</section>
                <div class="flex justify-between m-5">
                    <LodgingButton content="Rent"/>
                    <LodgingButton content="Availabilities"/>
                </div>
				<footer class="flex flex-wrap justify-between gap-2 p-5 rounded-lg cursor-default card-footer variant-outline-warning">
                    <Badge content="Long Term Stay available"/>
                    <Badge content="15 Rooms"/>
                    <Badge content="Meals Included"/>
                    <Badge content="Near the City"/>
                    <Badge content="Built in Bath"/>
                    <Badge content="Queen Size Beds"/>
                </footer>
			</div>
		</div>
        <!-- Fifth -->
        <div class="w-[20rem] bg-black bg-opacity-20 card rounded-md p-5">
			<img
				src="/images/lodging-5.jpg"
				alt="Fifth Lodging"
				class="w-[80%] h-auto m-2 mx-auto rounded-lg"
			/>
			<div class="m-5 mx-auto rounded-md variant-outline-warning">
				<header class="mx-auto text-2xl font-bold text-center card-header">
					Moonlit Haven Inn
				</header>
				<section class="p-4 my-2 h-[30rem] overflow-auto flex flex-col gap-3 mx-2">
					<p>Welcome to Moonlit Haven Inn, a captivating city-side lodging strategically nestled amidst the vibrant streets of our bustling urban landscape. As a beacon of comfort and contemporary charm, our inn invites you to immerse yourself in a unique and unforgettable experience.</p>

					<p>Each room at Moonlit Haven Inn offers panoramic cityscape views, providing a dynamic backdrop to your stay. Whether you're a traveler seeking a brief respite or a long-term guest looking for an extended urban escape, our flexible stay options cater to a diverse range of preferences.</p>

					<p>Discover a hidden oasis atop our inn—a serene roof-top garden where verdant greenery and the soft glow of city lights create a tranquil retreat. It's the perfect space to unwind, recharge, and escape the energetic pulse of the city below.</p>

					<p>Indulge your palate in culinary delights at our attached restaurant, where a diverse array of cuisines awaits. As our esteemed guest, relish the convenience of exclusive discounts on meals, allowing you to savor delectable dishes without venturing far from the comfort of your urban haven.</p>

					<p>Our dedicated concierge team stands ready to elevate your experience, offering personalized assistance with reservations, city tours, and recommendations to uncover the hidden gems and vibrant culture of the city.</p>

                    <p>Join us at Moonlit Haven Inn, where the vibrancy of the city converges seamlessly with the tranquility of your urban sanctuary. Whether you're here for a short-term visit or an extended stay, let the enchantment of Moonlit Haven Inn redefine your expectations of city-side lodging.</p>
				</section>
                <div class="flex justify-between m-5">
                    <LodgingButton content="Rent"/>
                    <LodgingButton content="Availabilites"/>
                </div>
				<footer class="flex flex-wrap justify-between gap-2 p-5 rounded-lg cursor-default card-footer variant-outline-warning">
                    <Badge content="Flexible Stay Options"/>
                    <Badge content="15 Rooms"/>
                    <Badge content="Meals Included"/>
                    <Badge content="Rooftop Gardens"/>
                    <Badge content="Built in Bath"/>
                    <Badge content="Queen Size Beds"/>
                </footer>
			</div>
		</div>
        <!-- Sixth -->
        <div class="w-[20rem] bg-black bg-opacity-20 card rounded-md p-5">
			<img
				src="/images/lodging-6.jpg"
				alt="Sixth Lodging"
				class="w-[80%] h-auto m-2 mx-auto rounded-lg"
			/>
			<div class="m-5 mx-auto rounded-md variant-outline-warning">
				<header class="mx-auto text-2xl font-bold text-center card-header">
					Mystic Haven Inn
				</header>
				<section class="p-4 my-2 h-[30rem] overflow-auto flex flex-col gap-3 mx-2">
					<p>Welcome to Mystic Haven Inn, an urban oasis seamlessly woven into the fabric of our vibrant city. Nestled in a prime location, this haven of tranquility invites you to experience the perfect blend of contemporary comfort and timeless charm.</p>

					<p>As a guest at Mystic Haven Inn, you'll find yourself surrounded by the modern elegance of our thoughtfully designed rooms. Whether you're here for a short-term stay or a more extended retreat, our flexible accommodations cater to your unique needs.</p>

					<p>Immerse yourself in the enchantment of our rooftop garden—a verdant escape amidst the urban landscape. Take a moment to unwind, surrounded by lush greenery and the soft murmur of the city below, creating a serene retreat just steps away from your room.</p>

					<p>Dine at our in-house restaurant, where culinary artistry meets local flavors. Enjoy a diverse menu crafted by skilled chefs, providing a delightful culinary experience without leaving the comfort of the inn. As a guest, relish the convenience of personalized dining options and local gastronomic discoveries.</p>

					<p>Our attentive staff is committed to making your stay exceptional. From personalized recommendations to ensuring your needs are met, the Mystic Haven team is dedicated to curating an experience that goes beyond the ordinary.</p>

                    <p>Join us at Mystic Haven Inn, where the soothing ambiance of a tranquil oasis converges with the excitement of urban living. Whether you're a traveler seeking respite or a guest on an extended urban adventure, let Mystic Haven redefine your expectations of city-side lodging with its blend of modern comfort and timeless allure.</p>
				</section>
                <div class="flex justify-between m-5">
                    <LodgingButton content="Rent"/>
                    <LodgingButton content="Availabilities"/>
                </div>
				<footer class="flex flex-wrap justify-between gap-2 p-5 rounded-lg cursor-default card-footer variant-outline-warning">
                    <Badge content="Flexible Accommodations"/>
                    <Badge content="25 Rooms"/>
                    <Badge content="Rooftop Retreat"/>
                    <Badge content="Urban Oasis Experiencey"/>
                    <Badge content="Culinary Artistry"/>
                    <Badge content="Attentive Staff"/>
                </footer>
			</div>
		</div>
        <!-- Seventh -->
        <div class="w-[20rem] bg-black bg-opacity-20 card rounded-md p-5">
			<img
				src="/images/lodging-7.jpg"
				alt="Seventh Lodging"
				class="w-[80%] h-auto m-2 mx-auto rounded-lg"
			/>
			<div class="m-5 mx-auto rounded-md variant-outline-warning">
				<header class="mx-auto text-2xl font-bold text-center card-header">
					Crimson Keep Castle
				</header>
				<section class="p-4 my-2 h-[30rem] overflow-auto flex flex-col gap-3 mx-2">
                    <p>Embark on a journey into the lap of luxury as you step through the towering gates of Crimson Keep Castle. This resplendent abode, nestled in the heart of our city, stands as a testament to the enduring allure of regality and architectural grandeur. </p><p>A stay at Crimson Keep Castle promises an experience that transcends mere accommodation, inviting you to immerse yourself in the opulence of a lord's castle, where the echoes of history resonate through every stone.</p>

                    <p><strong>Elegance Beyond Measure:</strong>
                        From the moment you cross the threshold, the regal ambiance of Crimson Keep Castle envelops you. The architecture, characterized by intricate details and timeless design, creates an atmosphere that transports you to an era of aristocracy and noble sophistication.</p>
                    <p><strong>Royal Chambers:</strong>
                        Indulge in the lavishness of our royal chambers, each a sanctuary of comfort adorned with rich tapestries, antique furnishings, and a grand king-size bed. The rooms exude an air of refinement, inviting you to revel in the luxury befitting nobility.</p>
                    <p><strong>Castle Courtyard:</strong>
                        Find tranquility in the enchanting Castle Courtyard, a picturesque haven surrounded by ivy-covered stone walls. Here, amidst the fragrant blooms and the gentle rustle of leaves, you can escape the bustle of the city and experience moments of repose amidst the regal ambiance.</p>
                    <p><strong>Great Hall Dining:</strong>
                        Dine like royalty in the Great Hall, an awe-inspiring space where ornate chandeliers hang from the lofty ceiling, casting a warm glow on long banquet tables. Indulge in gourmet meals fit for a lord, creating an unforgettable dining experience that transcends the ordinary.</p>
                    <p><strong>Castle Library:</strong>
                        Lose yourself in the Castle Library, a treasure trove of literature and knowledge. This quiet retreat allows you to escape into the realms of literature while surrounded by the timeless charm of antique books. Whether you seek intellectual enrichment or a peaceful reading nook, the library beckons.</p>
                        
                    <p>Join us at Crimson Keep Castle, where the splendor of a lord's castle is seamlessly intertwined with modern luxury. Whether you're seeking a grand escape or a noble retreat, let the regal ambiance of Crimson Keep redefine your expectations of lodging. Here, each moment is a journey through time, where the echoes of the past harmonize with the comforts of the present.</p>
				</section>
                <div class="flex justify-between m-5">
                    <LodgingButton content="Rent"/>
                    <LodgingButton content="Availabilities"/>
                </div>
				<footer class="flex flex-wrap justify-between gap-2 p-5 rounded-lg cursor-default card-footer variant-outline-warning">
                    <Badge content="Monthy Rental"/>
                    <Badge content="30 Rooms"/>
                    <Badge content="Royal Chambers Retreat"/>
                    <Badge content="Enchanting Castle Courtyard"/>
                    <Badge content="Great Hall Dining Experience"/>
                    <Badge content="Castle Library Access"/>
                </footer>
			</div>
		</div>
	</div>
</section>
<div class="mt-32 text-sm text-center">Each of these are not hosted by us, but by the local businesses. We are not responsible for any damages you cause or any mishap that happens within these establishments</div>