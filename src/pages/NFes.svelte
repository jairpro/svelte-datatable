<script lang=ts>
  //import { resolve } from 'path'

  import type { 
    DatatableColumnsData, 
    DatatableData, 
    DatatableSumsData 
  } from "../components/DataTable/types";
  
	import Datatable from "../components/DataTable/index.svelte"

	//const json = resolve('.','db','nfes.json')
	//const data: DatatableData = JSON.parse(json)
	const data: DatatableData = [
		[
			"2031",
			"Morrinhos",
			3500.35
		], 
		[
			"2032",
			"Capão",
			1500.1
		]
	]

	let columns: DatatableColumnsData = [
		{ text: 'Número' },
		{ text: 'Cliente' },
		{
			text: 'R$',
			format: ';',
		}
	]

	let sums: DatatableSumsData = [
		{},
		{ text: 'Soma' },
		{ active: true },
	]
</script>

<Datatable
  {columns}
  {data}
  {sums}
/>
