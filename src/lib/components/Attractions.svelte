<script>
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';
  let tabSet = 0;
</script>

<div>
  <TabGroup>
    <Tab bind:group={tabSet} name="tab1" value={0}>
      <svelte:fragment slot="lead"></svelte:fragment>
      <span class="text-lg">Dragon Coloseum</span>
    </Tab>
    <Tab bind:group={tabSet} name="tab2" value={1}>Lunar Watch</Tab>
    <Tab bind:group={tabSet} name="tab3" value={2}>The Cores Forge</Tab>
    <!-- Tab Panels --->
    <svelte:fragment slot="panel">
      {#if tabSet === 0}
        <div class="flex">
          <img src="/images/dragon-colosseum.jpg" alt="Dragon Colosseum" class="w-[30rem] h-auto rounded-lg">
          <div class="flex flex-col w-screen gap-5 p-5 mx-10 text-lg bg-opacity-25 rounded-lg bg-surface-500 h-fit">
            <p>Behold the marvel that is The Dragon Colosseum, an extraordinary arena situated on the outskirts of our city, dedicated to the thrilling spectacle of dragon fighting. This legendary battleground, adorned with towering spires intricately carved with dragon motifs, is a testament to the age-old tradition that captures the imaginations of all who enter.</p>
            
            <p>As you step into the colossal amphitheater, you'll be swept away by the palpable excitement in the air. The grandstands, reaching towards the sky, reverberate with the collective roar of the crowd. The arena floor, a vast expanse surrounded by stone walls, serves as the majestic battleground where courageous dragon riders and their mythical companions engage in epic duels.</p>

            <p>The Dragon Colosseum is a celebration of both the mystical and the courageous. Picture fire-breathing dragons soaring through the air, their scales gleaming in the sunlight. Feel the ground beneath you tremble as these colossal creatures unleash their elemental powers, creating a spectacle that captivates the hearts of all in attendance.</p>

            <p>Join us at The Dragon Colosseum for an unforgettable experience, where the bonds between dragons and their riders are tested, and the very essence of magic and might converges in a dazzling display of prowess. Will you be enthralled by the roar of victory or moved by the graceful flight of these majestic beings?</p>
          </div>
        </div>
      {:else if tabSet === 1}
        <div class="flex">
          <img src="/images/dragon-hub.jpg" alt="Lunar Watch" class="w-[30rem] h-auto rounded-lg">
          <div class="flex flex-col w-screen gap-5 p-5 mx-10 text-lg bg-opacity-25 rounded-lg bg-surface-500 h-fit">
            <p>Behold the majesty of The Lunar Watch, a fantastical hub nestled at the heart of our city where magic intertwines seamlessly with architectural marvels. Towering spires, crafted from enchanted stone, reach skyward, adorned with intricate glyphs that shimmer with ethereal light.</p>

            <p>As you step into the grand foyer, a magical aura envelops you. The walls, adorned with ever-shifting murals depicting scenes of ancient sorcery, seem to come alive with each passing moment. The air is imbued with the faint hum of mystical energies that power the awe-inspiring contraptions scattered throughout the establishment.</p>
            
            <p>The central atrium of The Lunar Watch boasts a mesmerizing river, its waters illuminated by the radiant glow of enchanted stones scattered by the docks. Visitors marvel at the floating platforms that carry them from one level to another, guided by invisible forces and controlled by ancient runes etched into the floor.</p>

            <p>The Lunar Watch stands as a testament to the harmonious coexistence of magic and architecture, where dragons and mystical energies converge to create an otherworldly sanctuary. Join us in this extraordinary realm, where the structures themselves tell tales of a magical tapestry woven into the very fabric of our city.</p>
          </div>
        </div>
      {:else if tabSet === 2}
      <div class="flex">
        <img src="/images/dragon-smith.jpg" alt="The Cores Forge" class="w-[30rem] h-auto rounded-lg">
        <div class="flex flex-col w-screen gap-5 p-5 mx-10 text-lg bg-opacity-25 rounded-lg bg-surface-500 h-fit">
          <p>Step into the enchanting world of The Cores Forge, a mystical smithy situated in the heart of our city where the art of craftsmanship converges with enchantment. Tucked away in the winding streets, this legendary forge is celebrated for its ability to shape the most extraordinary weapons and armor, each imbued with the essence of magic and the power of dragonfire.</p>
          
          <p>As you cross the threshold into The Cores Forge, the rhythmic clang of hammers on anvils fills the air. Skilled artisans, surrounded by the glow of molten metal and magical runes, work tirelessly to craft masterpieces that seem to transcend the ordinary. The walls of the forge are adorned with ancient symbols, each carrying a tale of the mythical elements that have been infused into the creations.</p>

          <p>This venerable forge is not just a place of industry; it is a haven where master smiths harness the essence of dragons and magic to forge weapons of unparalleled might. The Cores Forge has become a destination for adventurers, seeking blades that shimmer with arcane energy and armor that bears the resilience of dragon scales.</p>

          <p>Visit us at The Cores Forge for an immersive experience where craftsmanship and magic entwine. Discover the secrets of forging weapons that carry the essence of dragons, and witness the skilled hands of artisans giving life to legends. Will you leave with a weapon fit for a dragon slayer or armor that echoes with the strength of mythical creatures?</p>
        </div>
      </div>
      {/if}
    </svelte:fragment>
  </TabGroup>
</div>