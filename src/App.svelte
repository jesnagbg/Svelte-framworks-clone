<script>
  import { Route, Router } from "svelte-navigator"; 
  import Header from "./lib/Header.svelte";
  import Framework from "./lib/Framework.svelte";
  import Years from "./lib/Years.svelte";
  import Buttons from "./lib/Buttons.svelte";
  
</script>

<Header />

<Router> 

  <main>

    <div class="row-container">

      <Years />

      <Route path=":category">
        <Framework />
      </Route>

      <Route default="/retention">
        <Framework />
      </Route>

    </div>

  </main>

  <footer>

    <Buttons />

  </footer>

</Router>
