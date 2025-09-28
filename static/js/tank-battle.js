
(function () {
  const canvas = document.getElementById('tank-arena');
  const ctx = canvas ? canvas.getContext('2d') : null;
  if (!canvas || !ctx) {
    return;
  }

  const tankSelect = document.getElementById('tank-select');
  const startButton = document.getElementById('start-game');
  const restartButton = document.getElementById('restart-game');
  const abilityButton = document.getElementById('ability-button');
  const factsPanel = document.getElementById('tank-facts');
  const doctrinePanel = document.getElementById('doctrine-info');
  const statusPanel = document.getElementById('tank-status');
  const roundCounter = document.getElementById('round-counter');
  const killCounter = document.getElementById('kill-counter');
  const accuracyReadout = document.getElementById('accuracy-readout');
  const abilityStatus = document.getElementById('ability-status');
  const eventFeed = document.getElementById('event-feed');
  const difficultySelect = document.getElementById('difficulty-select');
  const scoreboardList = document.getElementById('scoreboard-list');

  const tankLore = {
    'Tiger I': {
      mobility: 3,
      armour: 10,
      firepower: 10,
      reload: 1300,
      description:
        'The terror of the Eastern Front. Tigers shrug off frontal hits but pay the price in mobility and production cost.',
      colour: '#f7b733'
    },
    'T-34': {
      mobility: 8,
      armour: 7,
      firepower: 7,
      reload: 850,
      description:
        'The Soviet workhorse. Rugged, sloped armour and a nimble chassis turned quantity into quality.',
      colour: '#6abf4b'
    },
    Centurion: {
      mobility: 6,
      armour: 8,
      firepower: 8,
      reload: 900,
      description:
        'The British all-rounder that fought on through the Cold War and saved Israel in 1967.',
      colour: '#5daed0'
    },
    'M4 Sherman': {
      mobility: 7,
      armour: 6,
      firepower: 6,
      reload: 820,
      description:
        "America's mass-produced brawler. Reliable, fast and easy to field in overwhelming numbers.",
      colour: '#c37f4b'
    },
    'Panzer IV': {
      mobility: 6,
      armour: 7,
      firepower: 7,
      reload: 880,
      description:
        "Germany's versatile mainstay. Produced in large numbers and loved by Blitzkrieg tacticians.",
      colour: '#b0a89f'
    }
  };

  const gauntletTemplates = [
    { name: 'Panzer IV', callSign: 'Blitz Ace', difficulty: 0.9, spread: 0.07, behavior: 'flanker' },
    { name: 'M4 Sherman', callSign: 'Thunderbolt', difficulty: 1.0, spread: 0.06, behavior: 'balanced' },
    { name: 'Tiger I', callSign: 'Iron Fist', difficulty: 1.15, spread: 0.05, behavior: 'sniper' },
    { name: 'Centurion', callSign: 'Desert Lance', difficulty: 1.1, spread: 0.045, behavior: 'balanced' },
    { name: 'T-34', callSign: 'Red Banner', difficulty: 1.05, spread: 0.05, behavior: 'aggressive' }
  ];

  const difficultySettings = {
    recruit: {
      label: 'Recruit',
      aiModifier: 0.88,
      playerHealth: 1.18,
      playerDamageTaken: 0.78,
      playerReload: 0.9,
      playerSpeed: 1.08,
      playerRotation: 1.05,
      playerTurret: 1.05
    },
    veteran: {
      label: 'Veteran',
      aiModifier: 1,
      playerHealth: 1,
      playerDamageTaken: 1,
      playerReload: 1,
      playerSpeed: 1,
      playerRotation: 1,
      playerTurret: 1
    },
    ace: {
      label: 'Ace',
      aiModifier: 1.18,
      playerHealth: 0.92,
      playerDamageTaken: 1.18,
      playerReload: 1.12,
      playerSpeed: 0.94,
      playerRotation: 0.95,
      playerTurret: 0.96
    }
  };

  const baseModifiers = {
    speed: 1,
    rotation: 1,
    turret: 1,
    reload: 1,
    damage: 1,
    damageTaken: 1,
    spread: 1,
    shellSpeed: 1
  };

  let playerModifiers = { ...baseModifiers };
  let difficultyBaseline = {
    damageTaken: 1,
    reload: 1,
    speed: 1,
    rotation: 1,
    turret: 1
  };
  let selectedDifficulty = 'veteran';

  const SCOREBOARD_KEY = 'tank-arena-scoreboard-v1';
  const SCOREBOARD_LIMIT = 5;
  let scoreboard = [];

  const doctrines = {
    'Tiger I': {
      title: 'Armour Overmatch',
      summary: 'Halve incoming damage and steady the gun for six seconds. Charges: 2, Cooldown: 12s.',
      charges: 2,
      duration: 6000,
      cooldown: 12000,
      modifiers: { damageTaken: 0.5, spread: 1.35 },
      onActivate: () => {
        logEvent('Porsche engineering roars: armour crews brace for impact.');
      },
      onDeactivate: () => {
        logEvent('Armour plates cool — Tiger doctrine cycle complete.');
      }
    },
    'T-34': {
      title: 'Rapid Refuel',
      summary: 'Depot crews patch 25 hull points and boost mobility for 5.5 seconds. Charges: 3, Cooldown: 9s.',
      charges: 3,
      duration: 5500,
      cooldown: 9000,
      modifiers: { speed: 1.25, rotation: 1.15, turret: 1.1 },
      onActivate: (tank) => {
        tank.health = Math.min(tank.maxHealth, tank.health + 25);
        logEvent('Factory reserve rushes spares: hull integrity +25.');
      }
    },
    Centurion: {
      title: 'Stabilised Volley',
      summary: 'Gun stabilisers lock in — faster reloads and tighter groupings for 6.5 seconds. Charges: 2, Cooldown: 11s.',
      charges: 2,
      duration: 6500,
      cooldown: 11000,
      modifiers: { reload: 0.7, spread: 1.6, damage: 1.1 },
      onActivate: () => {
        logEvent('Centurion crews engage the fully-stabilised gunnery suite.');
      }
    },
    'M4 Sherman': {
      title: 'Logistics Surge',
      summary: 'U.S. supply chains deliver ready rounds — reloads slash and engines perk for 6 seconds. Charges: 3, Cooldown: 8s.',
      charges: 3,
      duration: 6000,
      cooldown: 8000,
      modifiers: { reload: 0.65, speed: 1.15, rotation: 1.1 },
      onActivate: () => {
        logEvent('Sherman crews receive fresh ammo racks and spare parts.');
      }
    },
    'Panzer IV': {
      title: 'Tactical Flank',
      summary: 'Engines redline for lateral movement — speed and turret traverse spike for 5 seconds. Charges: 3, Cooldown: 9s.',
      charges: 3,
      duration: 5000,
      cooldown: 9000,
      modifiers: { speed: 1.3, rotation: 1.25, turret: 1.2 },
      onActivate: () => {
        logEvent('Panzer crews execute a textbook flanking manoeuvre.');
      }
    }
  };

  Object.keys(tankLore).forEach((name) => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    tankSelect.appendChild(option);
  });

  let gameState = 'idle';
  let playerTank = null;
  let aiTanks = [];
  let aiQueue = [];
  let shells = [];
  let keys = {};
  let lastFrame = 0;
  let missionStats = { shotsFired: 0, hits: 0, kills: 0, startTime: 0 };
  let doctrineState = {
    charges: 0,
    duration: 0,
    cooldown: 0,
    readyAt: 0,
    endsAt: 0,
    active: false,
    label: '',
    summary: '',
    modifiers: { ...baseModifiers }
  };
  let totalRounds = 0;
  let currentRound = 0;
  let roundTransition = null;

  const arenaBounds = {
    width: canvas.width,
    height: canvas.height,
    padding: 40
  };

  let obstacles = [];

  function createObstacles() {
    const midX = arenaBounds.width / 2;
    const midY = arenaBounds.height / 2;
    return [
      {
        x: midX - 190,
        y: midY - 28,
        width: 180,
        height: 36,
        colour: 'rgba(88, 104, 118, 0.9)',
        label: 'Shattered ridge'
      },
      {
        x: arenaBounds.padding + 40,
        y: arenaBounds.padding + 120,
        width: 120,
        height: 44,
        colour: 'rgba(64, 84, 98, 0.85)',
        label: 'Burnt-out village'
      },
      {
        x: arenaBounds.width - arenaBounds.padding - 170,
        y: arenaBounds.height - arenaBounds.padding - 160,
        width: 150,
        height: 46,
        colour: 'rgba(54, 72, 88, 0.9)',
        label: 'Hasty earthworks'
      }
    ];
  }

  const random = (min, max) => Math.random() * (max - min) + min;

  function describeTank(name) {
    const lore = tankLore[name];
    return `Armour ${lore.armour}/10, Firepower ${lore.firepower}/10, Mobility ${lore.mobility}/10.`;
  }

  function Tank(name, x, y, isPlayer) {
    this.name = name;
    this.stats = tankLore[name];
    this.x = x;
    this.y = y;
    this.angle = -Math.PI / 2;
    this.turretAngle = this.angle;
    this.baseSpeed = this.stats.mobility * 0.8;
    this.baseRotationSpeed = 0.0025 * this.stats.mobility;
    this.baseTurretSpeed = 0.005 * (6 + this.stats.mobility);
    this.speed = this.baseSpeed;
    this.rotationSpeed = this.baseRotationSpeed;
    this.turretSpeed = this.baseTurretSpeed;
    this.maxHealth = 65 + this.stats.armour * 8;
    this.health = this.maxHealth;
    this.baseReloadTime = this.stats.reload;
    this.reloadTime = this.baseReloadTime;
    this.isPlayer = isPlayer;
    this.cooldown = 0;
    this.aiProfile = null;
  }

  Tank.prototype.update = function update(delta) {
    if (this.cooldown > 0) {
      this.cooldown -= delta;
    }
  };

  Tank.prototype.takeHit = function takeHit(damage) {
    const modifier = this.isPlayer ? playerModifiers.damageTaken : 1;
    this.health -= damage * modifier;
    if (this.health < 0) {
      this.health = 0;
    }
  };

  Tank.prototype.readyToFire = function readyToFire() {
    return this.cooldown <= 0;
  };

  Tank.prototype.fire = function fire(targetAngle) {
    if (!this.readyToFire()) return null;
    const reloadBase = this.isPlayer
      ? this.baseReloadTime * playerModifiers.reload
      : this.reloadTime;
    this.cooldown = reloadBase;
    const firepower = this.stats.firepower;
    const spreadModifier = this.isPlayer ? playerModifiers.spread : 1;
    const spreadBase = this.isPlayer ? 0.045 : 0;
    const deviation = this.isPlayer ? random(-spreadBase, spreadBase) / spreadModifier : 0;
    const firingAngle = targetAngle + deviation;
    const shellSpeedBase = 2.4 + firepower * 0.45;
    const shellSpeed = shellSpeedBase * (this.isPlayer ? playerModifiers.shellSpeed : 1);
    const shellDamageBase = 14 + firepower * 4;
    const shellDamage = shellDamageBase * (this.isPlayer ? playerModifiers.damage : 1);
    const muzzleX = this.x + Math.cos(firingAngle) * 28;
    const muzzleY = this.y + Math.sin(firingAngle) * 28;
    if (this.isPlayer) {
      missionStats.shotsFired += 1;
    }
    return new Shell(this, muzzleX, muzzleY, firingAngle, shellSpeed, shellDamage);
  };

  function Shell(owner, x, y, angle, speed, damage) {
    this.owner = owner;
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.speed = speed;
    this.damage = damage;
    this.life = 2200;
  }

  Shell.prototype.update = function update(delta) {
    this.x += Math.cos(this.angle) * this.speed * delta * 0.08;
    this.y += Math.sin(this.angle) * this.speed * delta * 0.08;
    this.life -= delta;
  };

  function resetModifiers() {
    playerModifiers = { ...baseModifiers };
    Object.keys(difficultyBaseline).forEach((key) => {
      if (key in playerModifiers) {
        playerModifiers[key] *= difficultyBaseline[key];
      }
    });
  }

  function updateIntelDisplay(name) {
    if (!factsPanel || !doctrinePanel) return;
    const lore = tankLore[name];
    const doctrine = doctrines[name];
    factsPanel.innerHTML = `<strong>${name}</strong>: ${describeTank(name)}<br>${lore.description}`;
    if (doctrine) {
      doctrinePanel.innerHTML = `<h3>${doctrine.title}</h3><p>${doctrine.summary}</p>`;
    } else {
      doctrinePanel.textContent = 'No special doctrine loaded for this crew.';
    }
  }

  function loadScoreboard() {
    if (typeof window === 'undefined' || !window.localStorage) {
      scoreboard = [];
      updateScoreboardUI();
      return;
    }
    try {
      const stored = window.localStorage.getItem(SCOREBOARD_KEY);
      scoreboard = stored ? JSON.parse(stored) : [];
    } catch (error) {
      scoreboard = [];
    }
    updateScoreboardUI();
  }

  function saveScoreboard() {
    if (typeof window === 'undefined' || !window.localStorage) {
      return;
    }
    try {
      window.localStorage.setItem(SCOREBOARD_KEY, JSON.stringify(scoreboard));
    } catch (error) {
      // Ignore quota or privacy errors; scoreboard will remain in memory.
    }
  }

  function renderScoreboardEntry(entry) {
    const li = document.createElement('li');
    li.className = entry.result.toLowerCase();
    const durationText = typeof entry.duration === 'number' ? entry.duration.toFixed(1) : entry.duration;
    li.textContent = `${entry.result} — ${entry.tank} (${entry.difficulty}) · KOs ${entry.kills} · Acc ${entry.accuracy}% · ${durationText}s`;
    return li;
  }

  function updateScoreboardUI() {
    if (!scoreboardList) return;
    scoreboardList.innerHTML = '';
    if (!scoreboard || scoreboard.length === 0) {
      const placeholder = document.createElement('li');
      placeholder.className = 'placeholder';
      placeholder.textContent = 'Complete a run to populate the hall of fame.';
      scoreboardList.appendChild(placeholder);
      return;
    }
    scoreboard.forEach((entry) => {
      scoreboardList.appendChild(renderScoreboardEntry(entry));
    });
  }

  function recordMissionResult(victory, accuracy, durationSeconds) {
    const profile = difficultySettings[selectedDifficulty] || difficultySettings.veteran;
    const durationRounded = Number(durationSeconds.toFixed(1));
    const difficultyLabel = missionStats.difficulty || profile.label;
    const entry = {
      id: Date.now(),
      result: victory ? 'Victory' : 'Defeat',
      kills: missionStats.kills,
      accuracy,
      duration: durationRounded,
      tank: playerTank ? playerTank.name : 'Unknown',
      difficulty: difficultyLabel,
      resultScore: victory ? 1 : 0
    };
    scoreboard.push(entry);
    scoreboard.sort((a, b) => {
      if (b.resultScore !== a.resultScore) return b.resultScore - a.resultScore;
      if (b.kills !== a.kills) return b.kills - a.kills;
      if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;
      return a.duration - b.duration;
    });
    scoreboard = scoreboard.slice(0, SCOREBOARD_LIMIT);
    saveScoreboard();
    updateScoreboardUI();
  }

  function buildGauntlet(selected) {
    const queue = [];
    const difficultyScale = (difficultySettings[selectedDifficulty] || difficultySettings.veteran).aiModifier;
    gauntletTemplates.forEach((template) => {
      if (template.name !== selected) {
        queue.push({
          ...template,
          difficulty: template.difficulty * difficultyScale,
          spread: Math.max(0.03, template.spread / (difficultyScale > 1 ? 1.08 : 1))
        });
      }
    });

    let bossTemplate = queue.find((t) => t.name === 'Tiger I');
    if (!bossTemplate) {
      bossTemplate = queue.find((t) => t.name === 'Centurion');
    }
    if (!bossTemplate) {
      const fallback = gauntletTemplates.find((t) => t.name !== selected) || gauntletTemplates[0];
      bossTemplate = {
        ...fallback,
        difficulty: fallback.difficulty * difficultyScale,
        spread: Math.max(0.03, fallback.spread / (difficultyScale > 1 ? 1.08 : 1))
      };
    }

    queue.push({
      ...bossTemplate,
      callSign: `${bossTemplate.callSign} Elite`,
      difficulty: bossTemplate.difficulty + 0.25,
      spread: Math.max(0.03, bossTemplate.spread - 0.015),
      special: true
    });

    return queue.slice(0, 5).map((entry, index) => ({ ...entry, round: index + 1 }));
  }

  function setupDoctrineFor(name) {
    resetModifiers();
    const doctrine = doctrines[name];
    if (!doctrine) {
      doctrineState = {
        charges: 0,
        duration: 0,
        cooldown: 0,
        readyAt: Infinity,
        endsAt: 0,
        active: false,
        label: '',
        summary: '',
        modifiers: { ...baseModifiers }
      };
      return;
    }

    doctrineState = {
      charges: doctrine.charges,
      duration: doctrine.duration,
      cooldown: doctrine.cooldown,
      readyAt: performance.now(),
      endsAt: 0,
      active: false,
      label: doctrine.title,
      summary: doctrine.summary,
      modifiers: doctrine.modifiers,
      onActivate: doctrine.onActivate,
      onDeactivate: doctrine.onDeactivate
    };
  }

  function spawnNextOpponent() {
    if (aiQueue.length === 0) {
      return;
    }
    const profile = aiQueue.shift();
    const spawnX = arenaBounds.width / 2 + random(-120, 120);
    const spawnY = arenaBounds.padding + 60;
    const tank = new Tank(profile.name, spawnX, spawnY, false);
    tank.angle = Math.PI / 2;
    tank.turretAngle = Math.PI / 2;
    tank.aiProfile = profile;
    tuneOpponent(tank, profile);
    aiTanks.push(tank);
    currentRound = profile.round;
    logEvent(`Round ${currentRound}: ${profile.callSign} (${profile.name}) rolls into the arena.`);
    statusPanel.textContent = `Round ${currentRound}/${totalRounds}: ${profile.name} challenges your crew.`;
    const behavior = profile.behavior || 'balanced';
    const behaviorCue =
      behavior === 'aggressive'
        ? 'They will press the attack — keep your hull angled.'
        : behavior === 'sniper'
        ? 'Expect long-range sniping. Use cover before exposing your glacis.'
        : behavior === 'flanker'
        ? 'Watch the flanks — this ace loves circling shots.'
        : 'Stay adaptable — this crew matches your pace.';
    logEvent(behaviorCue);
    updateHUD();
  }

  function tuneOpponent(tank, profile) {
    const d = profile.difficulty || 1;
    const speedMultiplier = 0.85 + d * 0.2;
    const rotationMultiplier = 0.9 + d * 0.15;
    const turretMultiplier = 0.9 + d * 0.12;
    const reloadMultiplier = 1 / (0.85 + d * 0.1);
    const healthMultiplier = 0.95 + d * 0.25;
    tank.speed = tank.baseSpeed * speedMultiplier;
    tank.rotationSpeed = tank.baseRotationSpeed * rotationMultiplier;
    tank.turretSpeed = tank.baseTurretSpeed * turretMultiplier;
    tank.reloadTime = tank.baseReloadTime * reloadMultiplier;
    tank.maxHealth = tank.maxHealth * healthMultiplier;
    tank.health = tank.maxHealth;
    tank.behavior = profile.behavior || 'balanced';
    if (tank.behavior === 'flanker') {
      tank.flankDir = Math.random() > 0.5 ? 1 : -1;
    }
  }

  function drawTank(tank) {
    ctx.save();
    ctx.translate(tank.x, tank.y);
    ctx.rotate(tank.angle);
    ctx.fillStyle = tank.stats.colour;
    ctx.fillRect(-20, -14, 40, 28);
    ctx.fillStyle = '#111';
    ctx.fillRect(-18, -10, 36, 20);
    ctx.fillStyle = '#666';
    ctx.fillRect(-10, -6, 20, 12);

    ctx.save();
    ctx.rotate(tank.turretAngle - tank.angle);
    ctx.fillStyle = tank.stats.colour;
    ctx.fillRect(-12, -8, 24, 16);
    ctx.fillStyle = '#ccc';
    ctx.fillRect(10, -3, 26, 6);
    ctx.restore();

    ctx.restore();

    drawHealthBar(tank);
  }

  function drawHealthBar(tank) {
    const width = 60;
    const height = 6;
    const x = tank.x - width / 2;
    const y = tank.y - 36;
    const ratio = tank.health / tank.maxHealth;

    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.fillRect(x, y, width, height);
    ctx.fillStyle = ratio > 0.6 ? '#4caf50' : ratio > 0.3 ? '#ffb300' : '#f44336';
    ctx.fillRect(x, y, width * ratio, height);
  }

  function drawShell(shell) {
    ctx.save();
    ctx.translate(shell.x, shell.y);
    ctx.rotate(shell.angle);
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(-4, -2, 8, 4);
    ctx.restore();
  }

  function drawObstacles() {
    obstacles.forEach((obstacle) => {
      ctx.fillStyle = obstacle.colour;
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.strokeRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
  }

  function circleRectOverlap(cx, cy, radius, rect) {
    const closestX = clamp(cx, rect.x, rect.x + rect.width);
    const closestY = clamp(cy, rect.y, rect.y + rect.height);
    const dx = cx - closestX;
    const dy = cy - closestY;
    return dx * dx + dy * dy < radius * radius;
  }

  function tankCollidesWithObstacle(tank) {
    const radius = 22;
    return obstacles.some((obstacle) => circleRectOverlap(tank.x, tank.y, radius, obstacle));
  }

  function shellBlockedByObstacle(shell) {
    return obstacles.some((obstacle) =>
      shell.x >= obstacle.x - 6 &&
      shell.x <= obstacle.x + obstacle.width + 6 &&
      shell.y >= obstacle.y - 6 &&
      shell.y <= obstacle.y + obstacle.height + 6
    );
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function normalizeAngle(angle) {
    while (angle > Math.PI) angle -= Math.PI * 2;
    while (angle < -Math.PI) angle += Math.PI * 2;
    return angle;
  }

  function updatePlayer(delta) {
    if (!playerTank) return;

    playerTank.rotationSpeed = playerTank.baseRotationSpeed * playerModifiers.rotation;
    playerTank.turretSpeed = playerTank.baseTurretSpeed * playerModifiers.turret;

    if (keys['KeyA']) {
      playerTank.angle -= playerTank.rotationSpeed * delta;
    }
    if (keys['KeyD']) {
      playerTank.angle += playerTank.rotationSpeed * delta;
    }

    const velocity = { x: 0, y: 0 };
    if (keys['KeyW']) {
      const forwardSpeed = playerTank.baseSpeed * playerModifiers.speed * delta * 0.04;
      velocity.x += Math.cos(playerTank.angle) * forwardSpeed;
      velocity.y += Math.sin(playerTank.angle) * forwardSpeed;
    }
    if (keys['KeyS']) {
      const reverseSpeed = playerTank.baseSpeed * playerModifiers.speed * delta * 0.03;
      velocity.x -= Math.cos(playerTank.angle) * reverseSpeed;
      velocity.y -= Math.sin(playerTank.angle) * reverseSpeed;
    }

    const nextX = clamp(playerTank.x + velocity.x, arenaBounds.padding, arenaBounds.width - arenaBounds.padding);
    const nextY = clamp(playerTank.y + velocity.y, arenaBounds.padding, arenaBounds.height - arenaBounds.padding);
    const previousPosition = { x: playerTank.x, y: playerTank.y };
    playerTank.x = nextX;
    playerTank.y = nextY;
    if (tankCollidesWithObstacle(playerTank)) {
      playerTank.x = previousPosition.x;
      playerTank.y = previousPosition.y;
    }

    if (keys['ArrowLeft']) {
      playerTank.turretAngle -= playerTank.turretSpeed * delta;
    }
    if (keys['ArrowRight']) {
      playerTank.turretAngle += playerTank.turretSpeed * delta;
    }
    if (keys['Space']) {
      const shell = playerTank.fire(playerTank.turretAngle);
      if (shell) {
        shells.push(shell);
      }
    }
  }

  function updateAI(delta) {
    if (!playerTank) return;
    aiTanks.forEach((tank) => {
      tank.update(delta);
      const dx = playerTank.x - tank.x;
      const dy = playerTank.y - tank.y;
      const targetAngle = Math.atan2(dy, dx);

      const angleDiff = normalizeAngle(targetAngle - tank.angle);
      tank.angle += clamp(angleDiff, -tank.rotationSpeed * delta, tank.rotationSpeed * delta);

      const turretDiff = normalizeAngle(targetAngle - tank.turretAngle);
      tank.turretAngle += clamp(turretDiff, -tank.turretSpeed * delta, tank.turretSpeed * delta);

      const distance = Math.hypot(dx, dy);
      const behavior = tank.behavior || (tank.aiProfile && tank.aiProfile.behavior) || 'balanced';
      let desiredDistance = 210;
      if (behavior === 'aggressive') desiredDistance = 150;
      if (behavior === 'sniper') desiredDistance = 320;
      if (behavior === 'balanced') desiredDistance = 200;
      if (behavior === 'flanker') desiredDistance = 220;

      const moveStep = tank.speed * delta * 0.025;
      let moveX = 0;
      let moveY = 0;

      if (distance > desiredDistance + 40) {
        moveX += Math.cos(tank.angle) * moveStep;
        moveY += Math.sin(tank.angle) * moveStep;
      } else if (distance < desiredDistance - 50) {
        moveX -= Math.cos(tank.angle) * moveStep * 0.85;
        moveY -= Math.sin(tank.angle) * moveStep * 0.85;
      } else if (behavior === 'flanker') {
        const strafeAngle = targetAngle + (Math.PI / 2) * (tank.flankDir || 1);
        moveX += Math.cos(strafeAngle) * moveStep * 0.9;
        moveY += Math.sin(strafeAngle) * moveStep * 0.9;
      }

      const prevPosition = { x: tank.x, y: tank.y };
      tank.x = clamp(tank.x + moveX, arenaBounds.padding, arenaBounds.width - arenaBounds.padding);
      tank.y = clamp(tank.y + moveY, arenaBounds.padding, arenaBounds.height - arenaBounds.padding);
      if (tankCollidesWithObstacle(tank)) {
        tank.x = prevPosition.x;
        tank.y = prevPosition.y;
        if (behavior === 'flanker') {
          tank.flankDir = -(tank.flankDir || 1);
        }
      }

      const engageRange = behavior === 'sniper' ? 520 : 460;
      if (distance < engageRange && tank.readyToFire()) {
        const spread = tank.aiProfile ? tank.aiProfile.spread : 0.05;
        const shell = tank.fire(tank.turretAngle + random(-spread, spread));
        if (shell) {
          shells.push(shell);
        }
      }
    });
  }

  function handleShells(delta, timestamp) {
    shells.forEach((shell) => shell.update(delta));
    shells = shells.filter((shell) => {
      if (shell.life <= 0) return false;
      if (!isInsideArena(shell)) return false;
      if (shellBlockedByObstacle(shell)) {
        if (shell.owner.isPlayer && Math.random() < 0.25) {
          logEvent('Shot slams into cover — manoeuvre for a clearer angle.');
        }
        return false;
      }
      return true;
    });

    shells.forEach((shell) => {
      const targets = shell.owner.isPlayer ? aiTanks : [playerTank];
      targets.forEach((tank) => {
        if (!tank || tank.health <= 0 || tank === shell.owner) return;
        const dist = Math.hypot(shell.x - tank.x, shell.y - tank.y);
        if (dist < 24) {
          tank.takeHit(shell.damage);
          shell.life = 0;
          if (shell.owner.isPlayer) {
            missionStats.hits += 1;
          }
          if (tank.health <= 0) {
            if (shell.owner.isPlayer) {
              missionStats.kills += 1;
              logEvent(`${shell.owner.name} knocks out ${tank.name}.`);
            } else if (tank.isPlayer) {
              logEvent(`${shell.owner.name} breaches your armour!`);
            }
          }
        }
      });
    });

    const aliveOpponents = aiTanks.filter((tank) => tank.health > 0);
    if (aliveOpponents.length !== aiTanks.length) {
      aiTanks = aliveOpponents;
      updateHUD();
      if (aiTanks.length === 0 && aiQueue.length > 0) {
        statusPanel.textContent = 'Stand by — next challenger incoming.';
        roundTransition = timestamp + 1200;
      }
    }
  }

  function isInsideArena(obj) {
    return (
      obj.x > arenaBounds.padding &&
      obj.x < arenaBounds.width - arenaBounds.padding &&
      obj.y > arenaBounds.padding &&
      obj.y < arenaBounds.height - arenaBounds.padding
    );
  }

  function drawBackground() {
    ctx.fillStyle = '#091522';
    ctx.fillRect(0, 0, arenaBounds.width, arenaBounds.height);
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    const grid = 40;
    for (let x = arenaBounds.padding; x < arenaBounds.width - arenaBounds.padding; x += grid) {
      ctx.beginPath();
      ctx.moveTo(x, arenaBounds.padding);
      ctx.lineTo(x, arenaBounds.height - arenaBounds.padding);
      ctx.stroke();
    }
    for (let y = arenaBounds.padding; y < arenaBounds.height - arenaBounds.padding; y += grid) {
      ctx.beginPath();
      ctx.moveTo(arenaBounds.padding, y);
      ctx.lineTo(arenaBounds.width - arenaBounds.padding, y);
      ctx.stroke();
    }

    drawObstacles();
  }

  function updateGame(timestamp) {
    if (gameState !== 'running') return;
    const delta = timestamp - lastFrame;
    lastFrame = timestamp;

    playerTank.update(delta);
    updatePlayer(delta);
    updateAI(delta);
    handleShells(delta, timestamp);
    updateDoctrineState(timestamp);

    if (roundTransition && timestamp >= roundTransition) {
      roundTransition = null;
      spawnNextOpponent();
    }

    drawBackground();
    drawTank(playerTank);
    aiTanks.forEach(drawTank);
    shells.forEach(drawShell);

    if (playerTank.health <= 0) {
      endGame(false);
      return;
    }

    if (aiTanks.length === 0 && aiQueue.length === 0 && !roundTransition) {
      endGame(true);
      return;
    }

    updateHUD();
    requestAnimationFrame(updateGame);
  }

  function updateDoctrineState(timestamp) {
    if (!doctrineState) return;
    if (doctrineState.active && timestamp >= doctrineState.endsAt) {
      resetModifiers();
      doctrineState.active = false;
      if (typeof doctrineState.onDeactivate === 'function') {
        doctrineState.onDeactivate(playerTank);
      }
    }
    updateHUD();
  }

  function canUseDoctrine() {
    if (!playerTank) return false;
    if (!doctrineState || doctrineState.charges <= 0) return false;
    if (doctrineState.active) return false;
    return performance.now() >= doctrineState.readyAt;
  }

  function activateDoctrine() {
    if (!canUseDoctrine()) return;
    const now = performance.now();
    doctrineState.charges -= 1;
    doctrineState.active = true;
    doctrineState.endsAt = now + doctrineState.duration;
    doctrineState.readyAt = now + doctrineState.cooldown;
    resetModifiers();
    Object.keys(doctrineState.modifiers || {}).forEach((key) => {
      if (key in playerModifiers) {
        playerModifiers[key] *= doctrineState.modifiers[key];
      }
    });
    if (typeof doctrineState.onActivate === 'function') {
      doctrineState.onActivate(playerTank);
    }
    logEvent(`${doctrineState.label} initiated.`);
    updateHUD();
  }

  function updateHUD() {
    if (roundCounter) {
      const roundText = totalRounds ? `${Math.min(currentRound, totalRounds)} / ${totalRounds}` : '0 / 0';
      roundCounter.textContent = roundText;
    }
    if (killCounter) {
      killCounter.textContent = missionStats.kills.toString();
    }
    if (accuracyReadout) {
      if (missionStats.shotsFired === 0) {
        accuracyReadout.textContent = '--';
      } else {
        const ratio = (missionStats.hits / missionStats.shotsFired) * 100;
        accuracyReadout.textContent = `${Math.round(ratio)}%`;
      }
    }
    if (abilityStatus) {
      if (!doctrineState || doctrineState.readyAt === Infinity) {
        abilityStatus.textContent = 'Offline';
      } else if (doctrineState.charges === 0 && !doctrineState.active) {
        abilityStatus.textContent = 'Spent';
      } else if (doctrineState.active) {
        abilityStatus.textContent = 'Executing';
      } else if (performance.now() < doctrineState.readyAt) {
        const remaining = ((doctrineState.readyAt - performance.now()) / 1000).toFixed(1);
        abilityStatus.textContent = `Recharging (${remaining}s)`;
      } else {
        abilityStatus.textContent = `Ready (${doctrineState.charges}x)`;
      }
    }
    if (abilityButton) {
      abilityButton.disabled = !canUseDoctrine() || gameState !== 'running';
    }
  }

  function logEvent(message) {
    if (!eventFeed) return;
    const elapsed = missionStats.startTime
      ? ((performance.now() - missionStats.startTime) / 1000).toFixed(1)
      : '0.0';
    const entry = document.createElement('div');
    entry.className = 'entry';
    entry.textContent = `[${elapsed}s] ${message}`;
    eventFeed.prepend(entry);
    while (eventFeed.children.length > 8) {
      eventFeed.removeChild(eventFeed.lastChild);
    }
  }

  function endGame(victory) {
    gameState = 'ended';
    resetModifiers();
    updateHUD();
    const elapsed = missionStats.startTime ? (performance.now() - missionStats.startTime) / 1000 : 0;
    const accuracy = missionStats.shotsFired ? Math.round((missionStats.hits / missionStats.shotsFired) * 100) : 0;
    recordMissionResult(victory, accuracy, elapsed);
    const elapsedSeconds = elapsed.toFixed(1);
    const summaryLine = `Summary — ${missionStats.difficulty || 'Veteran'} difficulty, ${missionStats.kills} KOs, accuracy ${accuracy}% in ${elapsedSeconds}s.`;
    if (victory) {
      statusPanel.textContent = `${playerTank.name} claims the field! History will remember this duel.`;
      logEvent('Mission complete — your tank secures the bragging rights.');
    } else {
      statusPanel.textContent = `${playerTank.name} is knocked out. Another tank seizes the laurels.`;
      logEvent('Crew evac ordered. Review the doctrine timing and try again.');
    }
    logEvent(summaryLine);
  }

  function resetGame() {
    const selectedTank = tankSelect.value || 'T-34';
    selectedDifficulty = difficultySelect ? difficultySelect.value || 'veteran' : 'veteran';
    const difficultyProfile = difficultySettings[selectedDifficulty] || difficultySettings.veteran;
    difficultyBaseline = {
      damageTaken: difficultyProfile.playerDamageTaken,
      reload: difficultyProfile.playerReload,
      speed: difficultyProfile.playerSpeed,
      rotation: difficultyProfile.playerRotation,
      turret: difficultyProfile.playerTurret
    };

    playerTank = new Tank(selectedTank, arenaBounds.width / 2, arenaBounds.height - 90, true);
    playerTank.maxHealth *= difficultyProfile.playerHealth;
    playerTank.health = playerTank.maxHealth;
    playerTank.angle = -Math.PI / 2;
    playerTank.turretAngle = -Math.PI / 2;
    aiQueue = buildGauntlet(selectedTank);
    aiTanks = [];
    shells = [];
    keys = {};
    currentRound = 0;
    totalRounds = aiQueue.length;
    missionStats = {
      shotsFired: 0,
      hits: 0,
      kills: 0,
      startTime: performance.now(),
      difficulty: difficultyProfile.label
    };
    roundTransition = null;
    obstacles = createObstacles();
    setupDoctrineFor(selectedTank);
    if (eventFeed) {
      eventFeed.innerHTML = '';
    }
    statusPanel.textContent = `${difficultyProfile.label} difficulty. Engage and eliminate rival aces to claim bragging rights.`;
    updateIntelDisplay(selectedTank);
    restartButton.disabled = false;
    if (abilityButton) {
      abilityButton.disabled = true;
    }
    spawnNextOpponent();
    logEvent(`${difficultyProfile.label} difficulty engaged — use the wrecked terrain for cover.`);
    updateHUD();
  }

  function startGame() {
    if (gameState === 'running') return;
    resetGame();
    gameState = 'running';
    lastFrame = performance.now();
    requestAnimationFrame(updateGame);
  }

  function restartGame() {
    resetGame();
    if (gameState !== 'running') {
      gameState = 'running';
      lastFrame = performance.now();
      requestAnimationFrame(updateGame);
    }
  }

  document.addEventListener('keydown', (event) => {
    keys[event.code] = true;
    if (event.code === 'Space' || event.code === 'KeyE') {
      event.preventDefault();
    }
    if (event.code === 'KeyE') {
      activateDoctrine();
    }
  });

  document.addEventListener('keyup', (event) => {
    keys[event.code] = false;
  });

  if (difficultySelect) {
    difficultySelect.addEventListener('change', () => {
      selectedDifficulty = difficultySelect.value || 'veteran';
      const profile = difficultySettings[selectedDifficulty] || difficultySettings.veteran;
      if (gameState === 'running') {
        logEvent(`${profile.label} difficulty queued — restart to apply the new parameters.`);
      } else {
        statusPanel.textContent = `${profile.label} difficulty locked. Press Deploy to test your crew.`;
      }
    });
  }

  tankSelect.addEventListener('change', () => {
    const name = tankSelect.value;
    updateIntelDisplay(name);
    setupDoctrineFor(name);
    updateHUD();
  });

  startButton.addEventListener('click', () => {
    startGame();
  });

  restartButton.addEventListener('click', () => {
    restartGame();
  });

  if (abilityButton) {
    abilityButton.addEventListener('click', () => {
      activateDoctrine();
    });
  }

  // Initialise display
  tankSelect.value = 'T-34';
  updateIntelDisplay('T-34');
  setupDoctrineFor('T-34');
  statusPanel.textContent = 'Select a tank and press Deploy to begin the duel.';
  loadScoreboard();
  updateHUD();
})();
