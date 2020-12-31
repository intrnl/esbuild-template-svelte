<script lang='typescript'>
	let count: number = 0;
	let increment = () => count++;
	let decrement = () => count--;
	let reset = () => count = 0;
</script>

<div class='counter'>
	<div>count: {count}</div>
	<button on:click={increment}>increment</button>
	<button on:click={decrement}>decrement</button>
	<button on:click={reset}>reset</button>
</div>

<style>
	.counter {
		border: 1px solid black;
		padding: 10px;
	}
</style>
