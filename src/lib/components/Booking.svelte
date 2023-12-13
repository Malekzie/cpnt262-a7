<script>
	let a = 1;
</script>

<div class="p-5 mx-16 mt-32 rounded-lg bg variant-glass-tertiary">
	<h1 class="my-2 text-2xl font-bold">Book your Visit!</h1>
	<p class="my-2">
		We require you to book your visit due to the volume of visitors using our magic array to
		teleport to us, so we would need at least a days notice to take your volume into account
	</p>
	<label class="label">
		<span>Enter Name:</span>
		<input class="rounded-lg input" type="text" placeholder="John Smith" />
	</label>
	<label class="label">
		<span>When are you visiting?</span>
		<select class="rounded-lg select">
			<option value="1">Monday</option>
			<option value="2">Tuesday</option>
			<option value="3">Wednesday</option>
			<option value="4">Thursday</option>
			<option value="5">Friday</option>
			<option value="5">Satday</option>
			<option value="5">Sunday</option>
		</select>
	</label>
	<label class="label">
		<span>Textarea</span>
		<textarea class="rounded-lg textarea" rows="4" placeholder="Concerns, Necesities" />
	</label>
	<label class="label">
		<span>If you are in a group, how many individuals are going?</span>
		<p>People going: {a}</p>
		<input type="range" bind:value={a} max="50" class="w-[10rem] rounded-lg" />
	</label>
	<div class="flex justify-between">
		<label class="label">
			<input type="checkbox" class="rounded-lg checkbox" />
			<span>Do you require a translator?</span>
		</label>
		<label class="label">
			<input type="checkbox" class="rounded-lg checkbox" />
			<span>Do you require a wheelchair?</span>
		</label>
		<label class="label">
			<input type="checkbox" class="rounded-lg checkbox" />
			<span>Are you allergic to dragon mana?</span>
		</label>

  <div class="m-2">
    <button class="rounded-lg btn variant-filled-primary hover:scale-105">Submit</button>
  </div>
	</div>
</div>
