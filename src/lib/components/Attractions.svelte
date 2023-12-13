<script>
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	let tabSet = 0;
</script>

<div class="mx-10">
	<TabGroup justify="justify-center" rounded="rounded-xl" hover="hover:variant-ringed-primary" active="border-b-2 border-primary-50-900-token" >
		<Tab bind:group={tabSet} name="tab1" value={0}>
			<svelte:fragment slot="lead" />
			<span class="text-lg">Dragon Coloseum</span>
		</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>Lunar Watch</Tab>
		<Tab bind:group={tabSet} name="tab3" value={2}>The Cores Forge</Tab>
		<Tab bind:group={tabSet} name="tab3" value={3}>Mystique Trinkets Emporium</Tab>
		<Tab bind:group={tabSet} name="tab3" value={4}>Lore Sanctum</Tab>
		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				<div class="flex ml-10">
					<img
						src="/images/dragon-colosseum.jpg"
						alt="Dragon Colosseum"
						class="w-[30rem] h-auto rounded-lg"
					/>
					<div
						class="flex flex-col scroll-p-10 w-screen h-[30rem] gap-5 p-5 mx-10 text-lg bg-opacity-25 rounded-lg bg-surface-500 overflow-auto"
					>
						<h1 class="text-3xl font-bold heading-face">The Dragon Colosseum</h1>
						<p>
							Behold the marvel that is The Dragon Colosseum, an extraordinary arena situated on the
							outskirts of our city, dedicated to the thrilling spectacle of dragon fighting. This
							legendary battleground, adorned with towering spires intricately carved with dragon
							motifs, is a testament to the age-old tradition that captures the imaginations of all
							who enter.
						</p>

						<p>
							As you step into the colossal amphitheater, you'll be swept away by the palpable
							excitement in the air. The grandstands, reaching towards the sky, reverberate with the
							collective roar of the crowd. The arena floor, a vast expanse surrounded by stone
							walls, serves as the majestic battleground where courageous dragon riders and their
							mythical companions engage in epic duels.
						</p>

						<p>
							The Dragon Colosseum is a celebration of both the mystical and the courageous. Picture
							fire-breathing dragons soaring through the air, their scales gleaming in the sunlight.
							Feel the ground beneath you tremble as these colossal creatures unleash their
							elemental powers, creating a spectacle that captivates the hearts of all in
							attendance.
						</p>

						<p>
							Join us at The Dragon Colosseum for an unforgettable experience, where the bonds
							between dragons and their riders are tested, and the very essence of magic and might
							converges in a dazzling display of prowess. Will you be enthralled by the roar of
							victory or moved by the graceful flight of these majestic beings?
						</p>
					</div>
				</div>
			{:else if tabSet === 1}
				<div class="flex">
					<img src="/images/dragon-hub.jpg" alt="Lunar Watch" class="w-[30rem] h-auto rounded-lg" />
					<div
						class="flex flex-col scroll-p-10 w-screen gap-5 p-5 mx-10 text-lg bg-opacity-25 rounded-lg bg-surface-500 h-[30rem] overflow-auto"
					>
						<h1 class="text-3xl font-bold heading-face">The Lunar Watch</h1>
						<p>
							Behold the majesty of The Lunar Watch, a fantastical hub nestled at the heart of our
							city where magic intertwines seamlessly with architectural marvels. Towering spires,
							crafted from enchanted stone, reach skyward, adorned with intricate glyphs that
							shimmer with ethereal light.
						</p>

						<p>
							As you step into the grand foyer, a magical aura envelops you. The walls, adorned with
							ever-shifting murals depicting scenes of ancient sorcery, seem to come alive with each
							passing moment. The air is imbued with the faint hum of mystical energies that power
							the awe-inspiring contraptions scattered throughout the establishment.
						</p>

						<p>
							The central atrium of The Lunar Watch boasts a mesmerizing river, its waters
							illuminated by the radiant glow of enchanted stones scattered by the docks. Visitors
							marvel at the floating platforms that carry them from one level to another, guided by
							invisible forces and controlled by ancient runes etched into the floor.
						</p>

						<p>
							The Lunar Watch stands as a testament to the harmonious coexistence of magic and
							architecture, where dragons and mystical energies converge to create an otherworldly
							sanctuary. Join us in this extraordinary realm, where the structures themselves tell
							tales of a magical tapestry woven into the very fabric of our city.
						</p>
					</div>
				</div>
			{:else if tabSet === 2}
				<div class="flex">
					<img
						src="/images/dragon-smith.jpg"
						alt="The Cores Forge"
						class="w-[30rem] h-auto rounded-lg"
					/>
					<div
						class="flex flex-col scroll-p-10 w-screen gap-5 p-5 mx-10 text-lg bg-opacity-25 rounded-lg bg-surface-500 h-[30rem] overflow-auto"
					>
						<h1 class="text-3xl font-bold heading-face">The Cores Forge</h1>
						<p>
							Step into the enchanting world of The Cores Forge, a mystical smithy situated in the
							heart of our city where the art of craftsmanship converges with enchantment. Tucked
							away in the winding streets, this legendary forge is celebrated for its ability to
							shape the most extraordinary weapons and armor, each imbued with the essence of magic
							and the power of dragonfire.
						</p>

						<p>
							As you cross the threshold into The Cores Forge, the rhythmic clang of hammers on
							anvils fills the air. Skilled artisans, surrounded by the glow of molten metal and
							magical runes, work tirelessly to craft masterpieces that seem to transcend the
							ordinary. The walls of the forge are adorned with ancient symbols, each carrying a
							tale of the mythical elements that have been infused into the creations.
						</p>

						<p>
							This venerable forge is not just a place of industry; it is a haven where master
							smiths harness the essence of dragons and magic to forge weapons of unparalleled
							might. The Cores Forge has become a destination for adventurers, seeking blades that
							shimmer with arcane energy and armor that bears the resilience of dragon scales.
						</p>

						<p>
							Visit us at The Cores Forge for an immersive experience where craftsmanship and magic
							entwine. Discover the secrets of forging weapons that carry the essence of dragons,
							and witness the skilled hands of artisans giving life to legends. Will you leave with
							a weapon for a dragon slayer or armor that echoes with the strength of mythical
							creatures?
						</p>
					</div>
				</div>
			{:else if tabSet === 3}
				<div class="flex">
					<img
						src="/images/dragon-trinket.jpg"
						alt="Mystique Trinkets Emporium"
						class="w-[30rem] h-auto rounded-lg"
					/>
					<div
						class="flex flex-col scroll-p-10 w-screen gap-5 p-5 mx-10 text-lg bg-opacity-25 rounded-lg bg-surface-500 h-[30rem] overflow-auto"
					>
						<h1 class="text-3xl font-bold heading-face">Mystique Trinkets Emporium</h1>
						<p>
							Welcome to Mystique Trinkets Emporium, an enchanting accessory shop nestled in the
							heart of our city. This captivating emporium is a haven for those enchanted by the
							allure of mystical adornments and magical artifacts, seeking to add a touch of wonder
							to their lives.
						</p>

						<p>
							The shelves of Mystique Trinkets Emporium are adorned with a dazzling array of
							accessories, each radiating with arcane energy. From intricately crafted amulets and
							rings to enchanted charms carrying ancient spells, each piece holds a narrative of the
							mystical realms from which it draws its power.
						</p>

						<p>
							As you wander through the emporium, the air is infused with the delicate fragrance of
							rare herbs and magical incense. The knowledgeable shopkeepers, attuned to the mystical
							energies of their wares, guide customers to the perfect trinket that resonates with
							their essence.
						</p>

						<p>
							Mystique Trinkets Emporium transcends being a mere shop; it is a destination where
							magic and style converge. Whether you seek a talisman for protection, a pendant
							enhancing your natural abilities, or an amulet revealing hidden truths, this emporium
							invites you to embark on a journey of self-discovery through the language of
							enchantment.
						</p>
					</div>
				</div>
			{:else if tabSet === 4}
      <div class="flex">
        <img
          src="/images/dragon-lib.jpg"
          alt="Mystique Trinkets Emporium"
          class="w-[30rem] h-auto rounded-lg"
        />
        <div
          class="flex flex-col scroll-p-10 w-screen gap-5 p-5 mx-10 text-lg bg-opacity-25 rounded-lg bg-surface-500 h-[30rem] overflow-auto"
        >
          <h1 class="text-3xl font-bold heading-face">Lore Sanctum</h1>
          <p>
            Welcome to Lore Sanctum, a prestigious library nestled in the heart of our city, dedicated to scholars, researchers, and mages seeking the profound mysteries that lie within the vast expanse of knowledge and magic.
          </p>

          <p>
            As you step into Lore Sanctum, the hushed ambiance envelops you, creating an atmosphere of reverence for the countless tomes that line the towering shelves. The air is imbued with the scent of ancient parchment and the faint whisper of turning pages, inviting seekers of wisdom to delve into the secrets contained within.
          </p>

          <p>
            This sanctum is a haven for scholars, providing a curated collection of manuscripts, grimoires, and scrolls from various arcane disciplines. Mages, in search of forgotten incantations and mystical insights, find solace in the quiet corners where the bound knowledge of ages past awaits discovery.
          </p>

          <p>
            Lore Sanctum is not merely a repository of books; it is a living archive where the pursuit of knowledge is a sacred journey. Scholars engage in intellectual discourse, researchers pore over ancient texts, and mages experiment with the arcane arts, all within the walls of this scholarly haven.
          </p>
          
          <p>
            Join us at Lore Sanctum, where the boundaries of reality blur, and the pursuit of knowledge becomes a magical odyssey. Whether you seek to unravel the secrets of forgotten civilizations, explore the intricacies of arcane lore, or simply lose yourself in the timeless wisdom of the written word, Lore Sanctum invites you to embark on a journey of enlightenment and discovery.
          </p>
        </div>
      </div>
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>
