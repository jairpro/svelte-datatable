<script lang=ts>
  import { getCell, getSum } from "./functions";

  import type { 
    DatatableColumnsData, 
    DatatableData, 
    DatatableSumsData 
  } from "./types";

  export let columns: DatatableColumnsData
  export let data: DatatableData
  export let sums: DatatableSumsData
</script>

<table>
  <thead>
    <tr>
      {#each columns as column}
        <th>{column.text}</th>
      {/each}
    </tr>
  </thead>

  <tbody>
    {#each data as row}
    <tr>
      {#each row as cell, index}
        <td>{getCell({ cell, index, columns })}</td>
      {/each}
    </tr>
    {/each}
  </tbody>

  <tfoot>
    {#each sums as sum, index }
      <td>{getSum({ sum, index, data, columns })}</td>
    {/each}
  </tfoot>
</table>