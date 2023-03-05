<script>
  import { frameworks } from "../../data/index.js";
  
</script>

<div class="stat-container">
  <div class="line-container" data-cy="chart-header">
    <div class="side-space" />
    {#each frameworks[0].surveys as survey}
      <div class="no-circle">
        {survey.year}
      </div>
    {/each}
    <div class="side-space" />
  </div>
</div>
