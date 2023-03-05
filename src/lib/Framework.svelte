<script>
  import { onMount } from "svelte";
  import { frameworks } from "../../data/index.js";
  import { useParams, useLocation, navigate } from "svelte-navigator";

  const params = useParams();
  const location = useLocation();

  onMount(() => {
    if (window.location.pathname === "/" || $location.pathname === "/retention") {
      navigate("/retention");
    }
  });
</script>

{#each frameworks as framework}
  <div class="stat-container" data-cy="chart-row">
    <div class="line-container">
      <!-- Left framework name -->
      <div class="side-space left" data-cy="chart-cell" style="color: {framework.color};">
        {framework.name}
      </div>

      <!-- Line -->
      <div class="line" data-cy="row-line" style="background-color: {framework.color};" />

      <!-- Empty divs -->
      {#if framework.surveys.length < frameworks[0].surveys.length}
        {#each Array(frameworks[0].surveys.length - framework.surveys.length) as emptyDiv}
          <div class="no-circle" data-cy="chart-cell" />
        {/each}
      {/if}

      <!-- Circle divs -->
      {#each framework.surveys as survey}
        <div data-cy="chart-cell">
          <div class="circle" data-cy="chart-circle" style="border: 3px solid {framework.color};">
            {survey[$params.category]}%
          </div>
        </div>
      {/each}

      <!-- Right framework name -->
      <div class="side-space right" data-cy="chart-cell" style="color: {framework.color};">
        {framework.name}
      </div>
    </div>
  </div>
{/each}
