<AppPage>
  <div class="badge-card">
    <div class="location-container">
      <h3 class="location-title">Continent Badges</h3>
      <span class="location-badges">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
      </span>
      <p> See More Badges {'>'} </p>
    </div>

    <hr size="1">

    <div class="location-container">
      <h3 class="location-title">Territory Badges</h3>
      <span class="location-badges">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
      </span>
      <p> See More Badges {'>'} </p>
    </div>

    <hr size="1">

    <div class="location-container">
      <h3 class="location-title">Country Badges</h3>
      <span class="location-badges">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
      </span>
      <p> See More Badges {'>'} </p>
    </div>

    <hr size="1">

    <div class="location-container">
      <h3 class="location-title">County Badges</h3>
      <span class="location-badges">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
      </span>
      <p> See More Badges {'>'} </p>
    </div>

    <hr size="1">

    <div class="location-container">
      <h3 class="location-title">District Badges</h3>
      <span class="location-badges">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
      </span>
      <p> See More Badges {'>'} </p>
    </div>

    <hr size="1">

    <div class="location-container">
      <h3 class="location-title">Challenge Badges</h3>
      <span class="location-badges">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
      </span>
      <p> See More Badges {'>'} </p>
    </div>

    <hr size="1">

    <div class="location-container">
      <h3 class="location-title">Special Badges</h3>
      <span class="location-badges">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
        <img src="./static/logo-variations/color-icon.svg" alt="badge">
      </span>
      <p> See More Badges {'>'} </p>
    </div>
  </div>
</AppPage>



<style>

  h3 {
    margin: 0;
    margin-bottom: 14px;
    margin-left: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-left));
    margin-right: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-right));
    font-weight: 400;
  }

  .location-container {
    margin: 24px 0;
    margin-left: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-left));
    margin-right: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-right));
  }

  .location-badges {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-left));
    margin-right: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-right));
  }

  .badge-card {
    padding-bottom: 10px;
  }

  .location-badges img {
    height: 50px;
    width: auto;
  }

  .location-container p {
    font-size: 10pt;
    display: flex;
    flex-direction: row-reverse;
    justify-content: end;
    margin-right: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-right));
  }
</style>

<script>
  import AppPage from "../app-pages/app-pages";
</script>