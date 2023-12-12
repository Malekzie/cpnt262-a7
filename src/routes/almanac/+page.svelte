<script lang="ts">
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	let tabSet: number = 0;
  export let data;
</script>

<section class="mt-[8rem] mx-10 w-screen h-fill">
	<TabGroup justify="justify-center">
		<Tab bind:group={tabSet} name="tab1" value={0}>Indus</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>Markona</Tab>
		<Tab bind:group={tabSet} name="tab3" value={2}>Terra</Tab>
		<Tab bind:group={tabSet} name="tab4" value={3}>Mizzarus</Tab>
		<Tab bind:group={tabSet} name="tab5" value={4}>Gaia</Tab>
		<Tab bind:group={tabSet} name="tab6" value={5}>Izz'kal</Tab>
		<Tab bind:group={tabSet} name="tab7" value={6}>Puff</Tab>
		<Tab bind:group={tabSet} name="tab8" value={7}>Slade</Tab>
		<Tab bind:group={tabSet} name="tab9" value={8}>Ao Sol</Tab>
		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				<section class="flex">
					<div class="flex flex-col w-[25rem] gap-5">
						<img src="/images/fire-dragon.jpg" alt="Indus" class="w-auto h-[20rem] rounded-lg" />
						<img src="/images/fire-habitat.jpg" alt="Habitat" class="w-auto h-[20rem] rounded-lg" />
					</div>
					<div class="w-[80%] mx-16 flex flex-col gap-5 variant-ghost-error p-5 rounded-lg">
						<h1 class="text-4xl font-bold">
							Indus, The Sovereign Inferno: A Tale of Unchallenged Dominance and Ruthless Majesty
						</h1>

						<p>
							Enter the domain of terror and witness the ominous presence of Indus, the Sovereign
							Inferno, a draconic force that compels even the most relentless flames to bow before
							his merciless will. As the progenitor of the Fire Dragons, he is a dark colossus, an
							embodiment of unbridled power, and an unrelenting force of malevolence within the
							draconic pantheon.
						</p>

						<p>
							A Sinister Genesis: Indus emerges from the depths of the abyss, a creature born from
							the very shadows that dance in the darkest corners of the world. Unfettered by the
							bonds of parentage, he is a creature of malevolent energy, an entity spawned from the
							blackened heart of a world seeking its own demise.
						</p>

						<p>
							<strong>Hellfire Tyrant:</strong>
							The flames that rage under Indus's command are not ordinary fire; they are the essence
							of hellfire, an unholy force that consumes all in its path. At his will, he can unleash
							infernos that devour entire realms, leaving nothing but scorched earth in his wake. The
							dominion he holds over the elemental forces is not a gift but a curse upon those who dare
							to defy his sovereign rule.
						</p>

						<p>
							<strong>Relentless Malevolence:</strong>
							Within the draconic hierarchy, Indus stands as the epitome of unbridled malevolence. His
							roar reverberates with a terror that transcends mere fear, and his presence alone is enough
							to shatter the will of those who gaze upon him. He is a harbinger of destruction, a force
							of nature that revels in the chaos he sows.
						</p>

						<p>
							<strong>Dark Legacy:</strong>
							Indus's legacy is one of dread and desolation, a curse passed down through the generations
							of Fire Dragons. His dark influence taints the very essence of his progeny, ensuring that
							each successive generation inherits his insatiable hunger for dominance and destruction.
						</p>

						<p>
							<strong>Oblivion Incarnate:</strong>
							To encounter Indus in his full malevolence is to face the embodiment of draconic tyranny.
							His scales, obsidian black and infused with the essence of shadow, conceal a heart that
							beats with the sinister pulse of oblivion. The skies darken in his wake, and the air is
							thick with the stench of impending doom.
						</p>

						<p>
							In the tapestry of dragonkind, Indus stands as a symbol of unchallenged dominance,
							ruthless majesty, and the insatiable desire for annihilation. His story, shrouded in
							shadows and tainted by the flames of damnation, echoes through the ages as a dire
							warning to those who would cross the path of the Sovereign Inferno.
						</p>
					</div>
				</section>
			{:else if tabSet === 1}
				<section class="flex">
					<div class="flex flex-col w-[25rem] gap-5">
						<img src="/images/water-dragon.jpg" alt="Markona" class="w-auto h-[20rem] rounded-lg" />
						<img src="/images/water-habitat.jpg" alt="Habitat" class="w-auto h-[20rem] rounded-lg" />
					</div>
					<div class="w-[80%] mx-16 flex flex-col gap-5 variant-ghost-error p-5 rounded-lg">
						<h1 class="text-4xl font-bold">
							Markona, The Abyssal Guardian: A Saga of Eternal Vigilance and Unyielding Dominion
						</h1>

						<p>
							Descend into the depths of aquatic legend and behold the enigmatic presence of Markona, the Abyssal Guardian—a twin-bodied serpent reigning supreme over the seas. Tasked with an eternal duty to protect the vast watery realms by her inscrutable creator, she stands as the progenitor of the water dragons, a sovereign force unmatched in strength and dominion.
						</p>

						<p>
							<strong>An Origin Veiled in Mystery: </strong>
                            Markona's origins are shrouded in the mystique of the ocean depths, emerging from the unseen depths of primordial waters. Bestowed with her unwavering purpose by an enigmatic creator, she embodies the essence of timeless guardianship, a serpentine entity born to endure through eons.
						</p>

						<p>
							<strong>Abyssal Sentinel:</strong>
							The waves themselves bow to Markona's will, a testament to her dominion over the seas. She guards the abyssal depths with an unyielding resolve, her twin-bodied form a silhouette that strikes awe and fear into the hearts of all who dare to navigate the ocean's expanse. No tumultuous wave or elusive sea creature eludes her all-seeing gaze.
						</p>

						<p>
							<strong>Progenitor of the Depths:</strong>
                            Markona stands as the primal matriarch of the water dragons, her lineage forever intertwined with the boundless depths she calls home. Each ripple in the vast expanse carries the mark of her progeny, and the waters teem with the echoes of her draconic descendants.
						</p>

						<p>
							<strong>All-Seeing Sovereignty:</strong>
							Legend weaves tales of Markona's omnipresence, where any surface of water becomes a mirror to her watchful eyes. No clandestine undercurrent or hidden cavern escapes her scrutiny, and the denizens of the deep whisper of a guardian that sees all and knows the secrets hidden beneath the undulating waves.
						</p>

						<p>
							In the tapestry of aquatic lore, Markona reigns as an enigmatic figure—a sentinel of the abyss, a progenitor of unbridled power, and a guardian whose watchful gaze pierces the very heart of the ocean's mysteries. Her story, woven through the currents of time, speaks of eternal vigilance and the indomitable sovereignty that defines the Abyssal Guardian.
						</p>
					</div>
				</section>
			{:else if tabSet === 2}
				<section class="flex">
					<div class="flex flex-col w-[25rem] gap-5">
						<img src="/images/earth-dragon.jpg" alt="Terra" class="w-auto h-[20rem] rounded-lg" />
						<img src="/images/earth-habitat.jpg" alt="Habitat" class="w-auto h-[20rem] rounded-lg" />
					</div>
					<div class="w-[80%] mx-16 flex flex-col gap-5 variant-ghost-error p-5 rounded-lg">
						<h1 class="text-4xl font-bold">
                            Terra, The Earthshaper: A Chronicle of Geological Majesty and Unfathomable Dominion
						</h1>

						<p>
							Embark on a journey through the annals of mythical geology and witness the awe-inspiring presence of Terra, The Earthshaper—an entity whose colossal steps shaped valleys, whose breath sculpted mountains, and whose mighty roar echoed through the earth itself. As the progenitor of the earth dragons, Terra stands as the unrivaled force among them, with every geological feature bearing the indelible mark of his monumental power.
						</p>

						<p>
							<strong>Primordial Genesis: </strong>
                            Terra's genesis is intertwined with the birth of the world, emerging from the elemental core as the very embodiment of geological might. His existence predates the formation of continents and the rising of mountains, making him a celestial force destined to shape the very foundation of the earth.
						</p>

						<p>
							<strong>Colossal Steps of Dominion:</strong>
							Legend recounts that each step taken by Terra carved vast valleys into the terrain, an indomitable force capable of shaping the landscape with mere footfalls. His presence resonates through the ages, as the undulating topography bears witness to the colossal footsteps that echo through the corridors of time.
						</p>

						<p>
							<strong>Breath of Alpine Majesty:</strong>
							The breath exhaled by Terra transcends the mundane, for it is the very breath that sculpted mountains into existence. Every towering peak and rugged crag stands as a testament to the divine exhale of the Earthshaper, a breath that hewed the landscape into majestic heights and breathtaking vistas.
						</p>

						<p>
							<strong>Roar of Subterranean Majesty:</strong>
							Terra's roar is a symphony that reverberates through the earth, making the very ground tremble beneath its potency. The echoes of his roar resonate in every cavern, ravine, and rocky expanse, a sonic force that attests to the seismic power contained within the scales of the progenitor of earth dragons.
						</p>

						<p>
							<strong>Regal Domain:</strong>
							Every mountain range is Terra's throne, and every valley his domain. His dominion spans the entire earthly realm, and from the loftiest peaks to the deepest chasms, the earth bears witness to the indomitable rule of the Earthshaper.
						</p>

						<p>
							<strong>Pebbles from Scaled Majesty:</strong>
                            Legend weaves tales of every pebble in existence originating from a scratch of Terra's scales. These minuscule remnants of his formidable form serve as geological artifacts, a cosmic legacy scattered across the earth, attesting to the intricate connection between the Earthshaper and the very substance of the world.
						</p>

						<p>
                            In the tapestry of geological lore, Terra stands as a titanic figure—a celestial sculptor of landscapes, a progenitor of unbridled power, and a guardian whose presence reverberates through the very bedrock of existence. His story, etched into the contours of the earth, speaks of geological majesty and the incomprehensible dominion of The Earthshaper.
						</p>
					</div>
				</section>
			{:else if tabSet === 3}
				<section class="flex">
					<div class="flex flex-col w-[25rem] gap-5">
						<img src="/images/wind-dragon.jpg" alt="Mizzarus" class="w-auto h-[20rem] rounded-lg" />
						<img src="/images/wind-habitat.jpg" alt="Habitat" class="w-auto h-[20rem] rounded-lg" />
					</div>
					<div class="w-[80%] mx-16 flex flex-col gap-5 variant-ghost-error p-5 rounded-lg">
						<h1 class="text-4xl font-bold">
							Mizzarus, The Elemental Tempest: A Saga of Grief, Rage, and Unbridled Havoc
						</h1>

						<p>
							Embark on a tale woven in the tempestuous fabric of the skies, where Mizzarus, The Elemental Tempest, once stood as a guardian over a grand and pristine kingdom in the heavens. Now, a mere shadow of his former self, he is a living manifestation of grief and rage, an entity unbound by reason or restraint. His wrathful presence roams the skies, leaving destruction in his wake, earning him the ominous moniker of a living natural disaster.
						</p>

						<p>
							<strong>Celestial Protector Unraveled:</strong>
                            In a bygone era, Mizzarus was the stalwart guardian of a kingdom suspended among the clouds—a realm of unparalleled beauty and serenity. His duty was to shield the celestial kingdom from harm, an elemental force that once harnessed the very essence of the skies for protection.
						</p>

						<p>
							<strong>Fallen Guardian, Shattered Sky:</strong>
							Now, the celestial kingdom he once protected lies in ruins, a testament to the overwhelming grief and rage that shattered Mizzarus's former purpose. The skies that were once serene now bear the scars of his anguish, and the remnants of the celestial realm drift as haunting echoes through the clouds.
						</p>

						<p>
							<strong>Roaming Fury:</strong>
							Maddened by grief, Mizzarus roams the skies, a relentless force of destruction. His once-noble purpose eclipsed by an overwhelming rage, he now obliterates anything that dares cross his path. Cities, creatures, and landscapes alike fall victim to the tempestuous wrath of The Elemental Tempest.
						</p>

						<p>
							<strong>Unstoppable Cataclysm:</strong>
							Nothing is safe in Mizzarus's path, and nothing possesses the might to impede his relentless advance. His fury defies the laws of nature, a cataclysmic force that challenges the very fabric of the skies. Those unfortunate enough to witness his approach know that escape is but a fleeting hope.
						</p>

						<p>
							<strong>Timeless Terror:</strong>
                            Throughout the annals of time, Mizzarus has left an indelible mark as a living natural disaster. His name reverberates through ancient tales and modern legends, a specter haunting the skies, a relentless force that refuses to be quelled. The Elemental Tempest persists, an enduring symbol of unchecked rage and a reminder of the destructive power that can arise from the depths of sorrow.
						</p>

						<p>
                            In the celestial saga of Mizzarus, grief and rage converge to birth an elemental tempest that defies the very heavens. His story, etched into the tumultuous skies, serves as a cautionary tale of the boundless havoc that can be wrought when a celestial protector succumbs to the tumult within.
						</p>
					</div>
				</section>
			{:else if tabSet === 4}
				<section class="flex">
					<div class="flex flex-col w-[25rem] gap-5">
						<img src="/images/plant-dragon.jpg" alt="Gaia" class="w-auto h-[20rem] rounded-lg" />
						<img src="/images/plant-habitat.jpg" alt="Habitat" class="w-auto h-[20rem] rounded-lg" />
					</div>
					<div class="w-[80%] mx-16 flex flex-col gap-5 variant-ghost-error p-5 rounded-lg">
						<h1 class="text-4xl font-bold">
							Gaia, Arboreal Matron: A Saga of Life's Genesis, Forest Vigilance, and Inescapable Destiny
						</h1>

						<p>
							Embark on a journey through the sylvan realms and behold the majestic presence of Gaia, the Arboreal Matron—an entity revered as the Mother of Life, the Protector of the Forests, and the Progenitor of the plant dragons. In her arboreal domain, she not only breathed life into the forests but also bestowed upon the plant dragons both purpose and power, crafting a tale that weaves through the verdant tapestry of life and death.
						</p>

						<p>
							<strong>Genesis of Life:</strong>
                            Gaia, with her nurturing touch, is the fount of life that birthed the sprawling forests. Her essence infuses every leaf, every branch, and every root, creating a harmonious symphony of nature that resonates through the groves. She is the sculptor of life's green tapestry, a divine force whose touch brings forth the vibrant dance of flora.
						</p>

						<p>
							<strong>Forest Sentinel:</strong>
							As the Protector of the Forests, Gaia stands vigilant against any threat to the sanctity of her arboreal realm. Her watchful gaze spans the expansive canopies and the hidden glades, ensuring that the delicate balance of nature remains undisturbed by external forces seeking to exploit or harm the sacred groves.
						</p>

						<p>
							<strong>Bestower of Power and Purpose:</strong>
							Gaia, in her benevolence, bestowed upon the plant dragons the very essence of their being. She gifted them with power drawn from the life force of the forests, intertwining their destinies with the flourishing ecosystems they were meant to safeguard. The plant dragons, in turn, became the guardians of the flora under Gaia's protective embrace.
						</p>

						<p>
							<strong>Life's Giver, Death's Harbinger:</strong>
							Gaia, in her dual role as the Mother of Life and the Arbiter of Destiny, not only granted life to the forests but also predestined their eventual demise. A cycle of life and death, orchestrated by her divine hand, shapes the destiny of the wooded realms she holds dear. As leaves fall, new buds emerge, and the eternal dance of regeneration continues under Gaia's watchful eye.
						</p>

						<p>
							In the mythic narrative of Gaia, the Arboreal Matron, life's genesis, forest protection, and the inexorable march of destiny converge into a story that echoes through the rustling leaves and the murmuring winds. Her tale, etched in the heartwood of ancient trees, is a testament to the intricate balance of nature and the profound influence of the divine upon the flourishing ecosystems she guards.
						</p>
					</div>
				</section>
			{:else if tabSet === 5}
				<section class="flex">
					<div class="flex flex-col w-[25rem] gap-5">
						<img src="/images/lightning-dragon.jpg" alt="Izz'Kal" class="w-auto h-[20rem] rounded-lg" />
						<img src="/images/lightning-habitat.jpg" alt="Habitat" class="w-auto h-[20rem] rounded-lg" />
					</div>
					<div class="w-[80%] mx-16 flex flex-col gap-5 variant-ghost-error p-5 rounded-lg">
						<h1 class="text-4xl font-bold">
							
Izz'kal, Tempest Sovereign: A Chronicle of Thunderous Birth, Lightning Mastery, and Earth-Piercing Wrath
						</h1>

						<p>
							Embark on an electrifying odyssey through the tempestuous realms, where Izz'kal, the Tempest Sovereign, reigns as Lightning Incarnate and Father of Storms. Born from the tumultuous echoes of a time saturated with boundless energy, his very existence materialized through a resounding boom of thunder. Legend reveres him as the craftsman of every bolt of thunder, the one who hurls them to the earth, meticulously forging the perfect bolt to pierce the very heart of the earth.
						</p>

						<p>
							<strong>Thunderous Genesis:</strong>
                            Izz'kal's inception resonates with a time of unparalleled strife, where the energies of the cosmos collided in a crescendo of thunderous might. Born from the cacophony of boundless energy, he emerged as the embodiment of the storm, a celestial entity woven from the very fabric of thunder.
						</p>

						<p>
							<strong>Lightning Mastery:</strong>
							Izz'kal, as Lightning Incarnate, holds dominion over the very essence of thunderstorms. His mastery over lightning is unparalleled, and the bolts that streak across the heavens bear the signature of his celestial craftsmanship. Each lightning flash is a stroke from his celestial forge, a testament to the unrivaled potency of the Tempest Sovereign.
						</p>

						<p>
							<strong>Earth-Piercing Wrath:</strong>
                            Legend weaves tales of Izz'kal as the harbinger of earth-piercing wrath. He hurls bolts of thunder to the ground with deliberate precision, each strike bearing the weight of his celestial fury. The ground quakes beneath the force of his wrath, and the very earth itself bows to the tempestuous might of the Father of Storms.
						</p>

						<p>
							<strong>Meticulous Bolt Forging:</strong>
							Izz'kal, in his celestial forge, meticulously crafts every bolt of thunder with infinite care. With each resounding boom, he refines and perfects his art, shaping bolts that carry the potency to pierce the very core of the earth. The thunderstorms that sweep across the skies are his canvases, and each bolt is a masterpiece forged in the crucible of celestial energy.
						</p>


						<p>
                            In the saga of Izz'kal, the Tempest Sovereign, thunderous birth, lightning mastery, and earth-piercing wrath converge into a tale that reverberates through the heavens. His story, etched in the electrified tapestry of the cosmos, stands as a testament to the celestial artistry of storms and the celestial force embodied by the Lightning Incarnate.
						</p>
					</div>
				</section>
			{:else if tabSet === 6}
				<section class="flex">
					<div class="flex flex-col w-[25rem] gap-5">
						<img src="/images/light-dragon.jpg" alt="Puff" class="w-auto h-[20rem] rounded-lg" />
						<img src="/images/light-habitat.jpg" alt="Habitat" class="w-auto h-[20rem] rounded-lg" />
					</div>
					<div class="w-[80%] mx-16 flex flex-col gap-5 variant-ghost-error p-5 rounded-lg">
						<h1 class="text-4xl font-bold">
							
Puff, Dawn's Luminary: A Saga of Primordial Radiance, Night's Sentinel, and the Inaugural Breath of Light
						</h1>

						<p>
							Embark on a luminous journey through the tapestry of creation, where Puff, Dawn's Luminary, emerges as The First Light and Defender from the Night. Born from the inaugural spark of creation, he stands as the herald of the rising dawn, banishing the darkness of the night. Legend weaves a tale that his very name originates from the first ethereal puff of light, a symbol of radiant genesis.
						</p>

						<p>
							<strong>Primordial Radiance:</strong>
                            Puff's origins trace back to the dawn of creation itself, born from the primordial spark that ignited the first glimmers of light in the cosmic void. As The First Light, his existence is interwoven with the very fabric of the universe, an ethereal entity birthed from the luminescent cradle of cosmic beginnings.
						</p>

						<p>
							<strong>Night's Sentinel:</strong>
							Puff assumes the mantle of Night's Sentinel, a vigilant guardian who stands against the encroaching darkness. With the rising dawn, he dispels the shadows that shroud the world, a celestial sentinel dedicated to banishing the night and ushering in the radiant arrival of a new day.
						</p>

						<p>
							<strong>Inaugural Breath of Light:</strong>
							Legend whispers of Puff's name being derived from the first puff of light, a gentle exhalation that marked the initiation of luminous existence. This inaugural breath, imbued with the essence of radiance, symbolizes Puff's role as the Luminary who breathes life into the nascent dawn.
						</p>

						<p>
							<strong>Radiant Harbinger:</strong>
							Puff, as Dawn's Luminary, heralds the new day with his radiant presence. His luminous aura illuminates the skies, chasing away the remnants of night and painting the horizon with hues of dawn. In his celestial dance, he marks the beginning of a fresh cycle of light and life.
						</p>

						<p>
                            In the timeless saga of Puff, Dawn's Luminary, primordial radiance, night's sentinelship, and the inaugural breath of light converge into a narrative that unfolds with the cosmic dawn. His story, etched across the canvas of the celestial expanse, stands as a testament to the luminescent majesty that heralds each new day.
						</p>
					</div>
				</section>
			{:else if tabSet === 7}
				<section class="flex">
					<div class="flex flex-col w-[25rem] gap-5">
						<img src="/images/dark-dragon.jpg" alt="Indus" class="w-auto h-[20rem] rounded-lg" />
						<img src="/images/shadow-habitat.jpg" alt="Habitat" class="w-auto h-[20rem] rounded-lg" />
					</div>
					<div class="w-[80%] mx-16 flex flex-col gap-5 variant-ghost-error p-5 rounded-lg">
						<h1 class="text-4xl font-bold">
                            Slade, Twilight's Harbinger: A Chronicle of Primordial Shadows, Night's Sovereign, and the Inceptive Veil of Darkness
						</h1>

						<p>
                            Embark on a journey through the shadows of cosmic genesis, where Slade, Twilight's Harbinger, emerges as The Night Bringer and The First Shadow. Born in tandem with Puff, his counterpart, Slade stands as the herald of the impending night, extinguishing the radiance of day. Legend whispers that his name, synonymous with the first shade of darkness, is the inaugural name to instill fear in the hearts of humankind.
						</p>

						<p>
							<strong>Primordial Shadows:</strong>
                            Slade's origins intertwine with the primordial shadows that clung to the cosmic void, born simultaneously with the luminescent breath of Puff. He embodies the essence of the first shadows, a celestial entity forged from the eternal dance between light and darkness at the inception of the universe.
						</p>

						<p>
							<strong>Night's Sovereign:</strong>
							Assuming the mantle of Night's Sovereign, Slade is the harbinger of the encroaching night. With his arrival, shadows deepen, and the world succumbs to the veil of darkness. A celestial sovereign, he commands the cosmos to shroud itself in the tapestry of night, heralding the silent arrival of twilight.
						</p>

						<p>
							<strong>Inceptive Veil of Darkness:</strong>
                            Legend recounts that Slade's name is drawn from the first shade of darkness, an ethereal veil cast upon the world. This inceptive darkness marks his dominion, a shadowy realm that expands with each breath he takes, obscuring the radiant hues of the day in preparation for the cosmic nightfall.
						</p>

						<p>
							<strong>Fear's Inaugural Name:</strong>
							Slade's name, whispered through the ages, is the first to echo in the hearts of humankind with an undertone of fear. As the Night Bringer, he casts an ominous pall over the realms, and his name becomes synonymous with the shadows that envelop the world, stoking the innate fears that dwell within the human psyche.
						</p>
						<p>
							In the unfolding saga of Slade, Twilight's Harbinger, primordial shadows, night's sovereignty, and the inaugural veil of darkness converge into a narrative that unfolds with the cosmic twilight. His story, etched in the veiled canvases of the celestial expanse, stands as a testament to the shadowy majesty that accompanies the silent descent of night.
						</p>
					</div>
				</section>
			{:else if tabSet === 8}
				<section class="flex">
					<div class="flex flex-col w-[25rem] gap-5">
						<img src="/images/cosmic-dragon.jpg" alt="Indus" class="w-auto h-[20rem] rounded-lg" />
						<img src="/images/cosmic-habitat.jpg" alt="Habitat" class="w-auto h-[20rem] rounded-lg" />
					</div>
					<div class="w-[80%] mx-16 flex flex-col gap-5 variant-ghost-error p-5 rounded-lg">
						<h1 class="text-4xl font-bold">
                            Ao Sol, Celestial Artisan: A Tapestry of Cosmic Inception, Star Forging Mastery, and the Eternal Pursuit of Illumination
						</h1>

						<p>
							Embark on a cosmic odyssey through the celestial realms, where Ao Sol, the Celestial Artisan, emerges as The Star Forger and The First of the Cosmos. Born from the inaugural spark of creation, she stands as the architect of the stars, imparting them with their radiant light. Legend tells that her very name originates from the first star she forged, and she traverses the cosmic expanse, seeking empty voids to forge new stars and fill them with the brilliance of illumination.


						</p>

						<p>
							<strong>Cosmic Inception: </strong>
                            Ao Sol's genesis is woven into the fabric of cosmic inception, emerging from the first spark that ignited the universe. As The First of the Cosmos, her existence is an intrinsic part of the cosmic ballet, an ethereal entity crafted from the very essence of celestial creation.
						</p>

						<p>
							<strong>Star Forging Mastery:</strong>
                            Assuming the mantle of The Star Forger, Ao Sol is the master craftsman who shapes the stars. With her celestial artistry, she breathes life into the void, forging stars that adorn the cosmic tapestry. Each star bears the signature of her meticulous craftsmanship, a testament to her mastery over the primordial elements that birth luminous orbs.
						</p>

						<p>
							<strong>Eternal Pursuit of Illumination::</strong>
							Ao Sol's cosmic odyssey takes her through the stellar expanses, as she roams the stars in an eternal pursuit of empty voids. Her quest is to forge new stars, infusing them with the radiance of illumination. She fills the cosmic voids with the brilliance of her creations, casting a celestial glow that echoes through the limitless reaches of the cosmos.
						</p>

						<p>
							<strong>Name of the First Star:</strong>
                            Legend whispers that Ao Sol's name finds its roots in the first star she ever forged. This inaugural star, bearing her essence, became the source of inspiration for her appellation. Her name, spoken in cosmic whispers, resonates with the brilliance of that first celestial creation.
						</p>

						<p>
							In the cosmic saga of Ao Sol, the Celestial Artisan, cosmic inception, star forging mastery, and the eternal pursuit of illumination converge into a narrative that unfolds across the astral canvases of the universe. Her story, etched in the starlight of countless celestial bodies, stands as a testament to the radiant majesty that accompanies the eternal dance of creation.
						</p>
					</div>
				</section>
			{/if}
		</svelte:fragment>
	</TabGroup>
</section>
