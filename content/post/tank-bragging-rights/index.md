---
title: "Tank Bragging Rights Arena"
date: 2024-05-23
summary: "Play through a fast-paced duel that lets history's iconic tanks compete for bragging rights."
hero: ""
---

Welcome to the War Room bonus arena. Inspired by the debate over which 20th-century tank reigned supreme, this simulation lets the Tiger I, T-34, Centurion, Sherman and Panzer IV roll back onto the battlefield for bragging rights. Each duel is informed by the compromises Mark Urban outlines — firepower, protection and mobility — and the battlefield lessons reported from Cambrai to the Six Day War.

You will fight through a best-of-five gauntlet. Each rival enters the arena one at a time, so positioning, ammunition discipline and doctrine timing matter more than frantic trigger work. Keep an eye on the intel console to see how your crew is performing and when to trigger its signature manoeuvre.

<link rel="stylesheet" href="/css/tank-battle.css">

<div class="tank-game">
  <section class="tank-briefing">
    <p class="panel-kicker">War Room dossier</p>
    <h2>Briefing</h2>
    <p>Pick a tank commander to represent. Each tank reflects the trade-offs highlighted by historian Mark Urban: weighty armour slows the Tiger, the Centurion balances versatility, while the T-34 emphasises reliability and numbers. Survive the duel to prove your design truly deserves its reputation.</p>
    <label for="tank-select">Choose your tank:</label>
    <select id="tank-select"></select>
    <label for="difficulty-select">Select difficulty:</label>
    <select id="difficulty-select">
      <option value="recruit">Recruit – learn the arena with forgiving damage.</option>
      <option value="veteran" selected>Veteran – balanced challenge true to doctrine.</option>
      <option value="ace">Ace – rival aces pull every tactical trick.</option>
    </select>
    <p class="control-tip">Toggle tanks and difficulty before you deploy — the crew will recalibrate in real time.</p>
    <p class="difficulty-note">Difficulty shifts crew resilience and AI aggression. Use the new battlefield obstacles for hull-down shots before unleashing your doctrine.</p>
    <button id="start-game">Deploy</button>
    <button id="restart-game" disabled>Restart</button>
    <button id="ability-button" class="doctrine-btn" disabled>Activate Doctrine (E)</button>
    <div id="tank-facts"></div>
    <div id="doctrine-info" class="doctrine-card"></div>
    <div class="intel-notes">
      <h3>Intel cues</h3>
      <ul>
        <li>Mark Urban argues every tank is a compromise — expect heavy Tigers to soak hits but lumber.</li>
        <li>T-34s and Shermans win by staying mobile and fighting again tomorrow.</li>
        <li>Centurions and Panthers (represented here by the Panzer IV) reward deliberate positioning.</li>
      </ul>
    </div>
  </section>
  <section class="tank-battlefield">
    <div class="arena-wrapper">
      <canvas id="tank-arena" width="860" height="520" aria-label="Top-down tank battle arena"></canvas>
      <div class="arena-lights" aria-hidden="true"></div>
    </div>
    <div id="tank-status"></div>
    <div class="status-console" aria-live="polite">
      <div class="status-line"><span>Round</span><span id="round-counter">0 / 0</span></div>
      <div class="status-line"><span>Knock-outs</span><span id="kill-counter">0</span></div>
      <div class="status-line"><span>Accuracy</span><span id="accuracy-readout">--</span></div>
      <div class="status-line"><span>Doctrine</span><span id="ability-status">Offline</span></div>
    </div>
    <div class="controls-guide">
      <h3>Controls</h3>
      <ul>
        <li><strong>Move:</strong> W, A, S, D</li>
        <li><strong>Rotate turret:</strong> Left / Right arrows</li>
        <li><strong>Fire:</strong> Spacebar</li>
        <li><strong>Doctrine:</strong> E or the Activate button</li>
      </ul>
    </div>
    <div class="event-feed" id="event-feed" aria-live="polite" aria-label="Battle log"></div>
    <div class="scoreboard" aria-live="polite">
      <p class="panel-kicker">Local records</p>
      <h3>Hall of fame sorties</h3>
      <p class="scoreboard-hint">Results are stored locally so you can chase perfect runs.</p>
      <ol id="scoreboard-list"></ol>
    </div>
  </section>
</div>

<script src="/js/tank-battle.js"></script>

<div class="after-action warroom-card">
  <h2>After-action report</h2>
  <p>Think the outcome is unfair? Share your battle report and best tank pick with <a href="mailto:thewarroom@economist.com">thewarroom@economist.com</a>. We will highlight the most creative commanders next month.</p>
  <p>Want to dive deeper into the culture of armour? Try Patrick Wright's <em>Tank: The Progress of a Monstrous War Machine</em> and Mark Urban's explorations of the Centurion and its peers.</p>
</div>

<div class="campaign-timeline warroom-card">
  <h3>Tank hall of records</h3>
  <ol>
    <li><strong>1917 – Mark IV at Cambrai:</strong> breakthrough without infantry support proved fleeting.</li>
    <li><strong>1942 – Tiger I enters service:</strong> unstoppable armour but built in scarce numbers.</li>
    <li><strong>1944 – T-34 production peaks:</strong> Soviet industry fields tens of thousands.</li>
    <li><strong>1967 – Centurions in the Six Day War:</strong> Israeli crews use mobility and gunnery to blunt armour thrusts.</li>
    <li><strong>Today – Drone battlefields:</strong> makeshift “turtle tanks” adapt to aerial threats and AT teams.</li>
  </ol>
</div>
