+++
title = "Modeling NVIDIA and Huawei AI Compute Supply"
date = 2025-09-08T00:00:00Z
summary = "Interactively explore how HBM supply, yields, and export controls shape the AI accelerator output of Huawei and NVIDIA over the next three years."
draft = false
+++

China’s push for self-reliance in AI hardware hinges on Huawei’s Ascend accelerators. SemiAnalysis estimates that Huawei shipped **507,000** Ascend units in 2024 thanks to a bank of TSMC-produced die, and is on track for **805,000** units in 2025 as SMIC improves yields.【F:content/post/ai-compute-forecast/index.md†L9-L12】 Yet Huawei will hit a hard wall once its stockpile of foreign high-bandwidth memory (HBM) is depleted—Samsung alone provided **11.4 million** HBM stacks, part of the **13 million** total stacks that can feed roughly **1.6 million** Ascend 910C packages.【F:content/post/ai-compute-forecast/index.md†L12-L15】 Domestic supplier CXMT is racing to fill the gap but is expected to ship only about **2 million** HBM stacks next year, enough for **250,000–300,000** Ascend 910Cs even if SMIC can fabricate more die.【F:content/post/ai-compute-forecast/index.md†L15-L17】 The chart now anchors on the 2024 delivery data so you can see how those die-bank shipments compare with forward-looking scenarios.

Meanwhile, SemiAnalysis reports that NVIDIA is driving toward multi-million-unit annual run rates—including roughly **350,000** H20-class units from existing inventory in 2025 and a planned **4 million**-unit run rate for RTX PRO 6000 derivatives that serve as China-compliant accelerators—before layering in potential Blackwell-based SKUs such as the rumored B30A.【F:content/post/ai-compute-forecast/index.md†L17-L19】【F:content/post/ai-compute-forecast/index.md†L211-L225】 To compare Huawei’s ramp against NVIDIA’s total fabrication capability, this interactive model now tracks NVIDIA’s global accelerator output and lets you explore how HBM availability, yield improvements, and policy-driven allocation assumptions shape effective compute through 2027.
All effective compute metrics translate each side’s production into GB200 NVL72-equivalent systems so the gap is framed in full-rack deployments rather than abstract chip-weighted units.

<div class="ai-compute-controls">
  <h2>Adjust the supply-side assumptions</h2>
  <div class="control-group">
    <label for="scenario">Start from a scenario template</label>
    <select id="scenario">
      <option value="baseline">Baseline: controls hold, domestic HBM ramps slowly</option>
      <option value="tight-controls">Tight controls: enforcement cuts HBM smuggling sharply</option>
      <option value="export-surge">Export surge: accelerated capex boosts NVIDIA fab output</option>
    </select>
  </div>
  <div class="control-group">
    <label for="yield">Huawei effective yield (across SMIC + Huawei fabs)</label>
    <input type="range" id="yield" min="40" max="90" value="55" step="1">
    <span class="value" id="yield-value">55%</span>
  </div>
  <div class="control-group">
    <label for="hbm-2026">HBM available to Huawei in 2026 (million stacks)</label>
    <input type="range" id="hbm-2026" min="1" max="10" value="2" step="0.5">
    <span class="value" id="hbm-2026-value">2.0M</span>
  </div>
  <div class="control-group">
    <label for="hbm-2027">HBM available to Huawei in 2027 (million stacks)</label>
    <input type="range" id="hbm-2027" min="1" max="15" value="4" step="0.5">
    <span class="value" id="hbm-2027-value">4.0M</span>
  </div>
  <div class="control-group">
    <label for="nvidia-factor">NVIDIA fab output factor</label>
    <input type="range" id="nvidia-factor" min="60" max="140" value="100" step="5">
    <span class="value" id="nvidia-factor-value">100%</span>
  </div>
  <div class="control-group">
    <label for="performance-ratio">Relative compute per chip (NVIDIA ÷ Huawei)</label>
    <input type="range" id="performance-ratio" min="80" max="180" value="130" step="5">
    <span class="value" id="performance-ratio-value">1.30×</span>
  </div>
</div>

<div id="ai-compute-chart" style="min-height: 420px;"></div>

<div class="ai-compute-metrics">
  <div class="metric-card">
    <h4>2027 compute gap</h4>
    <p class="metric-value" id="metric-gap">--</p>
    <p class="metric-footnote">NVIDIA minus Huawei GB200 NVL72 equivalents</p>
  </div>
  <div class="metric-card">
    <h4>Huawei output in 2026</h4>
    <p class="metric-value" id="metric-huawei">--</p>
    <p class="metric-footnote">Packaged Ascend units</p>
  </div>
  <div class="metric-card">
    <h4>Constraint mix</h4>
    <p class="metric-value" id="metric-constraint">--</p>
    <p class="metric-footnote">Years limited by HBM vs. wafers</p>
  </div>
</div>

<div id="ai-constraint-chart" style="min-height: 320px;"></div>

<div id="ai-compute-table"></div>

<div id="ai-compute-summary" class="ai-compute-summary"></div>

<div class="ai-compute-notes">
  <h3>How the model works</h3>
  <ul>
    <li>Huawei’s potential Ascend output blends die availability (up to 1.5 million units in 2025 and 5+ million in 2026 as SMIC scales) with an HBM constraint that assumes eight stacks per 910C-equivalent package. Adjust the yield slider to represent ramp progress in SMIC and Huawei-owned fabs.</li>
    <li>HBM sliders control the domestic supply Huawei can count on once Samsung’s stockpiled memory is exhausted. Keeping the default values reproduces SemiAnalysis’ base case of roughly 300,000 Ascend units in 2026 before HBM capacity ramps.</li>
    <li>NVIDIA’s baseline assumes total accelerator output of roughly 3.6 million units in 2025, rising to 4.8 million in 2026 and 5.5 million in 2027 as supply chain plans like the 4 million-unit RTX PRO 6000 run rate come online. The fab output factor lets you scale those volumes to reflect upside or downside in capital deployment and supplier execution.</li>
    <li>The metric cards and HBM chart surface when Huawei is constrained by memory versus wafer availability and quantify the compute gap to NVIDIA in GB200 NVL72 equivalents under each scenario.</li>
    <li>The performance ratio captures software and FLOP differentials; the default 1.3× reflects the stronger inference throughput NVIDIA achieves with CUDA-optimized stacks relative to Huawei’s Ascend 910C today.</li>
  </ul>
</div>

<div class="ai-compute-context">
  <h2>Key Huawei supply assumptions</h2>
  <ul>
    <li><strong>Die banks bridge the gap to SMIC maturity.</strong> Huawei drew on roughly 2.9 million Ascend die fabricated at TSMC to ship 507,000 accelerators in 2024 while SMIC’s yields climbed, and retains enough inventory to support 805,000 units in 2025 before stockpiles deplete.【F:content/post/ai-compute-forecast/index.md†L9-L15】【F:content/post/ai-compute-forecast/index.md†L49-L54】</li>
    <li><strong>SMIC allocation is no longer the binding constraint.</strong> SemiAnalysis expects SMIC’s advanced-node capacity to reach 45,000 wafers per month by the end of 2025, rising to 60,000 in 2026 and 80,000 in 2027, leaving wafer availability sufficient to support millions of Ascend die if memory were available.【F:content/post/ai-compute-forecast/index.md†L54-L63】</li>
    <li><strong>HBM availability caps short-term output.</strong> Samsung and other suppliers shipped an estimated 13 million HBM stacks into China—enough for 1.6 million Ascend 910C packages—but those inventories will run dry, leaving Huawei reliant on domestic supply for 2026 onward.【F:content/post/ai-compute-forecast/index.md†L12-L17】【F:content/post/ai-compute-forecast/index.md†L83-L95】</li>
    <li><strong>Domestic memory ramp is gradual.</strong> CXMT is forecast to produce only ~2 million HBM stacks next year, sufficient for 250,000–300,000 Ascend 910Cs, before expanding capacity toward the back half of the decade; the sliders let you test alternative conversion speeds and yields.【F:content/post/ai-compute-forecast/index.md†L95-L109】</li>
  </ul>

  <h2>NVIDIA fab outlook</h2>
  <ul>
    <li><strong>Licenses unlock near-term shipments.</strong> NVIDIA can liquidate roughly 350,000 units of H20- and H20E-class inventory in 2025, generating close to $10 billion of revenue even before any new production ramps commence.【F:content/post/ai-compute-forecast/index.md†L169-L183】</li>
    <li><strong>RTX PRO 6000 derivatives extend coverage.</strong> Supply chain plans show a 4 million-unit annual run rate for the RTX PRO 6000 family as China-compliant accelerators, providing a cushion if H20 demand softens or remains subject to licensing delays.【F:content/post/ai-compute-forecast/index.md†L183-L192】</li>
    <li><strong>Blackwell-based B30A is the swing factor.</strong> The rumored B30A would deliver significantly more FLOPs than the H20 while staying within policy guardrails if approved, effectively halving the compute gap Chinese buyers face relative to the B300; use the NVIDIA output slider to reflect faster or slower approvals.【F:content/post/ai-compute-forecast/index.md†L143-L169】</li>
  </ul>

  <h2>Why enforcement on HBM matters</h2>
  <ul>
    <li><strong>Controls triggered the stockpile sprint.</strong> Samsung alone shipped 7 million HBM stacks in the month between new restrictions being announced and enforced in December 2024, contributing to the 13 million-stack cache now winding down.【F:content/post/ai-compute-forecast/index.md†L67-L83】</li>
    <li><strong>Smuggling routes remain under scrutiny.</strong> Investigations into CoAsia Electronics, Faraday, and other intermediaries highlight the need for tight coordination with Korean and Japanese suppliers to prevent backdoor flows of advanced memory and packaging subsystems.【F:content/post/ai-compute-forecast/index.md†L83-L95】</li>
    <li><strong>Domestic buildout spans the full stack.</strong> CXMT’s TSV packaging partnerships with JCET and Tong Fu, along with Huawei-owned toolmaker SiCarrier and expanding cleanroom footprints, demonstrate how multiple players are racing to localize each supply chain stage despite controls.【F:content/post/ai-compute-forecast/index.md†L37-L49】【F:content/post/ai-compute-forecast/index.md†L95-L109】</li>
  </ul>

  <p class="ai-compute-context-summary">Taken together, these dynamics explain why SemiAnalysis expects Huawei’s packaged Ascend output to sag in 2026 before rebounding as domestic HBM comes online—and why NVIDIA retains a sizable compute lead absent a breakthrough in Chinese memory capacity or policy-driven approvals for high-end Blackwell exports.</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/plotly.js-dist@2.30.0"></script>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const stacksPerHuaweiChip = 8;
    const baseHuaweiWaferCapacity = {
      2024: 0.9, // die bank + early SMIC ramp yielded ~0.5M packaged Ascends in 2024
      2025: 1.5, // millions of die Huawei + SMIC could package if memory were unconstrained
      2026: 5.2,
      2027: 6.0
    };
    const baseHBMStacks = {
      2024: 13, // million stacks sourced primarily from Samsung stockpiles
      2025: 13,
      2026: 2,
      2027: 4
    };
    const baseNvidiaShipments = {
      2024: 2.1,
      2025: 3.6,
      2026: 4.8,
      2027: 5.5
    };

    const gpusPerNVL72 = 72;

    const yieldSlider = document.getElementById('yield');
    const hbm2026Slider = document.getElementById('hbm-2026');
    const hbm2027Slider = document.getElementById('hbm-2027');
    const nvidiaFactorSlider = document.getElementById('nvidia-factor');
    const performanceRatioSlider = document.getElementById('performance-ratio');

    const yieldValue = document.getElementById('yield-value');
    const hbm2026Value = document.getElementById('hbm-2026-value');
    const hbm2027Value = document.getElementById('hbm-2027-value');
    const nvidiaFactorValue = document.getElementById('nvidia-factor-value');
    const performanceRatioValue = document.getElementById('performance-ratio-value');

    const scenarioSelect = document.getElementById('scenario');

    const chartEl = document.getElementById('ai-compute-chart');
    const constraintChartEl = document.getElementById('ai-constraint-chart');
    const tableEl = document.getElementById('ai-compute-table');
    const summaryEl = document.getElementById('ai-compute-summary');

    const metricGapEl = document.getElementById('metric-gap');
    const metricHuaweiEl = document.getElementById('metric-huawei');
    const metricConstraintEl = document.getElementById('metric-constraint');

    const years = [2024, 2025, 2026, 2027];

    const scenarios = {
      baseline: {
        label: 'Baseline: Huawei is capped by domestic HBM while NVIDIA holds to planned fab ramps.',
        values: { yield: 55, hbm2026: 2, hbm2027: 4, nvidiaFactor: 100, performanceRatio: 130 }
      },
      'tight-controls': {
        label: 'Tight controls: stricter enforcement squeezes HBM to 1.5M stacks next year.',
        values: { yield: 52, hbm2026: 1.5, hbm2027: 2.5, nvidiaFactor: 90, performanceRatio: 135 }
      },
      'export-surge': {
        label: 'Export surge: additional capex accelerates NVIDIA’s total output ramp.',
        values: { yield: 60, hbm2026: 3.5, hbm2027: 6, nvidiaFactor: 125, performanceRatio: 145 }
      }
    };

    function computeHuaweiYear(year, effectiveYield, hbmOverride) {
      const waferPotential = baseHuaweiWaferCapacity[year] * (effectiveYield / 100);
      const hbmStacks = year === 2025 ? baseHBMStacks[year] : hbmOverride;
      const hbmLimited = hbmStacks / stacksPerHuaweiChip;
      const output = Math.min(waferPotential, hbmLimited);
      const constraint = waferPotential <= hbmLimited ? 'Wafer capacity' : 'HBM supply';
      return {
        output,
        waferPotential,
        hbmStacks,
        hbmDemand: output * stacksPerHuaweiChip,
        constraint
      };
    }

    function formatUnits(value) {
      if (value >= 1) {
        const formatted = value.toFixed(2);
        return `${formatted.endsWith('.00') ? formatted.slice(0, -3) : formatted}M units`;
      }
      return `${Math.round(value * 1000)}k units`;
    }

    function formatStacks(value) {
      if (value >= 1) {
        return `${value.toFixed(1)}M stacks`;
      }
      return `${Math.round(value * 1000)}k stacks`;
    }

    function formatMillions(value, decimals = 2) {
      const formatted = value.toFixed(decimals);
      return formatted.replace(/\.0+$/, '').replace(/(\.\d*[1-9])0+$/, '$1') + 'M';
    }

    function formatNVL72(valueMillions) {
      const actual = valueMillions * 1_000_000;
      if (actual >= 1_000_000) {
        const millions = actual / 1_000_000;
        const formatted = millions.toFixed(2).replace(/\.0+$/, '').replace(/(\.\d*[1-9])0+$/, '$1');
        return `${formatted}M GB200 NVL72`;
      }
      if (actual >= 1_000) {
        const thousands = actual / 1_000;
        const formatted = thousands.toFixed(1).replace(/\.0+$/, '').replace(/(\.\d*[1-9])0+$/, '$1');
        return `${formatted}k GB200 NVL72`;
      }
      return `${Math.round(actual)} GB200 NVL72`;
    }

    function applyScenarioValues(key) {
      const scenario = scenarios[key];
      if (!scenario) return;
      const { yield: yieldSetting, hbm2026, hbm2027, nvidiaFactor, performanceRatio } = scenario.values;
      yieldSlider.value = yieldSetting;
      hbm2026Slider.value = hbm2026;
      hbm2027Slider.value = hbm2027;
      nvidiaFactorSlider.value = nvidiaFactor;
      performanceRatioSlider.value = performanceRatio;
    }

    function updateModel() {
      const effectiveYield = parseFloat(yieldSlider.value);
      const hbm2026 = parseFloat(hbm2026Slider.value);
      const hbm2027 = parseFloat(hbm2027Slider.value);
      const nvidiaFactor = parseFloat(nvidiaFactorSlider.value) / 100;
      const performanceRatio = parseFloat(performanceRatioSlider.value) / 100;

      yieldValue.textContent = effectiveYield.toFixed(0) + '%';
      hbm2026Value.textContent = hbm2026.toFixed(1) + 'M';
      hbm2027Value.textContent = hbm2027.toFixed(1) + 'M';
      nvidiaFactorValue.textContent = (nvidiaFactor * 100).toFixed(0) + '%';
      performanceRatioValue.textContent = performanceRatio.toFixed(2) + '×';

      const huaweiDetails = years.map(year => {
        const hbmOverride = year === 2026 ? hbm2026 : (year === 2027 ? hbm2027 : baseHBMStacks[year]);
        return computeHuaweiYear(year, effectiveYield, hbmOverride);
      });

      const huaweiOutputs = huaweiDetails.map(detail => detail.output);
      const nvidiaOutputs = years.map(year => (baseNvidiaShipments[year] || 0) * nvidiaFactor);

      const huaweiNVL72Series = huaweiOutputs.map(output => (output / performanceRatio) / gpusPerNVL72);
      const nvidiaNVL72Series = nvidiaOutputs.map(output => output / gpusPerNVL72);
      const hbmAvailableSeries = huaweiDetails.map(detail => detail.hbmStacks);
      const hbmDemandSeries = huaweiDetails.map(detail => detail.hbmDemand);
      const combinedNVL72Series = huaweiNVL72Series.map((value, idx) => value + nvidiaNVL72Series[idx]);
      const computeGapSeries = nvidiaNVL72Series.map((value, idx) => value - huaweiNVL72Series[idx]);

      Plotly.react(chartEl, [
        {
          x: years,
          y: huaweiOutputs,
          name: 'Huawei Ascend units (millions)',
          type: 'bar',
          marker: { color: '#c41e3a' }
        },
        {
          x: years,
          y: nvidiaOutputs,
          name: 'NVIDIA total accelerator output (millions)',
          type: 'bar',
          marker: { color: '#76b900' }
        },
        {
          x: years,
          y: huaweiNVL72Series,
          name: 'Huawei effective compute (GB200 NVL72 equivalents)',
          type: 'scatter',
          mode: 'lines+markers',
          yaxis: 'y2',
          line: { color: '#8b1a1a' },
          marker: { symbol: 'circle' }
        },
        {
          x: years,
          y: nvidiaNVL72Series,
          name: 'NVIDIA effective compute (GB200 NVL72 equivalents)',
          type: 'scatter',
          mode: 'lines+markers',
          yaxis: 'y2',
          line: { color: '#2d572c' },
          marker: { symbol: 'square' }
        }
      ], {
        barmode: 'group',
        title: 'AI accelerator supply under different assumptions',
        xaxis: { title: 'Year' },
        yaxis: { title: 'Physical units (millions)', rangemode: 'tozero' },
        yaxis2: {
          title: 'Effective compute (GB200 NVL72 equivalents)',
          overlaying: 'y',
          side: 'right',
          rangemode: 'tozero'
        },
        legend: { orientation: 'h', y: -0.2 }
      });

      Plotly.react(constraintChartEl, [
        {
          x: years,
          y: hbmAvailableSeries,
          name: 'HBM available',
          type: 'scatter',
          mode: 'lines+markers',
          fill: 'tozeroy',
          line: { color: '#60a5fa' },
          marker: { symbol: 'circle' }
        },
        {
          x: years,
          y: hbmDemandSeries,
          name: 'HBM required for Huawei output',
          type: 'scatter',
          mode: 'lines+markers',
          fill: 'tozeroy',
          line: { color: '#1d4ed8' },
          marker: { symbol: 'square' }
        }
      ], {
        title: 'HBM demand versus available supply',
        xaxis: { title: 'Year' },
        yaxis: { title: 'HBM stacks (millions)', rangemode: 'tozero' },
        legend: { orientation: 'h', y: -0.2 }
      });

      const terminalIndex = years.length - 1;
      const computeGap = computeGapSeries[terminalIndex];
      const huawei2026Index = years.indexOf(2026);
      const hbmLimitedYears = huaweiDetails.filter(detail => detail.constraint === 'HBM supply').length;
      const waferLimitedYears = huaweiDetails.length - hbmLimitedYears;

      if (metricGapEl) {
        const prefix = computeGap >= 0 ? '+' : '−';
        metricGapEl.textContent = `${prefix}${formatNVL72(Math.abs(computeGap))}`;
      }

      if (metricHuaweiEl && huawei2026Index !== -1) {
        metricHuaweiEl.textContent = formatUnits(huaweiOutputs[huawei2026Index]);
      }

      if (metricConstraintEl) {
        metricConstraintEl.textContent = `HBM ${hbmLimitedYears} · Wafers ${waferLimitedYears}`;
      }

      const tableRows = years.map((year, index) => {
        const detail = huaweiDetails[index];
        const nvidiaUnits = nvidiaOutputs[index];
        const totalCompute = combinedNVL72Series[index];
        return `<tr>
          <td>${year}</td>
          <td>${formatUnits(detail.output)}</td>
          <td>${detail.constraint}</td>
          <td>${formatStacks(detail.hbmDemand)} / ${formatStacks(detail.hbmStacks)}</td>
          <td>${formatUnits(nvidiaUnits)}</td>
          <td>${formatNVL72(totalCompute)}</td>
          <td>${computeGapSeries[index] >= 0 ? '+' : '−'}${formatNVL72(Math.abs(computeGapSeries[index]))}</td>
        </tr>`;
      }).join('');

      tableEl.innerHTML = `
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Year</th>
              <th>Huawei packaged output</th>
              <th>Binding constraint</th>
              <th>HBM demand vs. available</th>
              <th>NVIDIA shipments</th>
              <th>Total effective compute</th>
              <th>Compute gap (NVIDIA − Huawei)</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>`;

      const scenario = scenarios[scenarioSelect.value];
      const latestYearDetail = huaweiDetails[terminalIndex];
      const latestNvidiaUnits = nvidiaOutputs[terminalIndex];
      const narrative = scenario ? scenario.label : '';
      const slack = latestYearDetail.hbmStacks - latestYearDetail.hbmDemand;
      const slackText = slack >= 0
        ? `${slack.toFixed(2)}M stacks of headroom`
        : `${Math.abs(slack).toFixed(2)}M stack shortfall`;

      const bulletPoints = [];
      if (huawei2026Index !== -1) {
        const diff2026 = hbmAvailableSeries[huawei2026Index] - hbmDemandSeries[huawei2026Index];
        const diffText2026 = diff2026 >= 0
          ? `${diff2026.toFixed(2)}M stacks spare`
          : `${Math.abs(diff2026).toFixed(2)}M stack shortfall`;
        bulletPoints.push(`2026: ${huaweiDetails[huawei2026Index].constraint} with ${formatStacks(hbmDemandSeries[huawei2026Index])} needed vs. ${formatStacks(hbmAvailableSeries[huawei2026Index])} available (${diffText2026}).`);
      }
      const diff2027 = latestYearDetail.hbmStacks - latestYearDetail.hbmDemand;
      const diffText2027 = diff2027 >= 0
        ? `${diff2027.toFixed(2)}M stacks spare`
        : `${Math.abs(diff2027).toFixed(2)}M stack shortfall`;
      bulletPoints.push(`2027: ${latestYearDetail.constraint} with ${formatStacks(latestYearDetail.hbmDemand)} needed vs. ${formatStacks(latestYearDetail.hbmStacks)} available (${diffText2027}).`);
      bulletPoints.push(`Compute gap: NVIDIA ${computeGap >= 0 ? 'leads' : 'trails'} by ${formatNVL72(Math.abs(computeGap))}.`);

      summaryEl.innerHTML = `
        <h3>Scenario takeaway</h3>
        <p>${narrative}</p>
        <p>By ${years[terminalIndex]}, Huawei ships <strong>${formatUnits(latestYearDetail.output)}</strong> with <strong>${slackText}</strong>, while NVIDIA delivers <strong>${formatUnits(latestNvidiaUnits)}</strong>. Combined, that is <strong>${formatNVL72(combinedNVL72Series[terminalIndex])}</strong> of effective compute.</p>
        <ul>
          ${bulletPoints.map(point => `<li>${point}</li>`).join('')}
        </ul>
      `;
    }

    updateModel();

    [yieldSlider, hbm2026Slider, hbm2027Slider, nvidiaFactorSlider, performanceRatioSlider].forEach(slider => {
      slider.addEventListener('input', updateModel);
    });

    scenarioSelect.addEventListener('change', event => {
      applyScenarioValues(event.target.value);
      updateModel();
    });
  });
</script>

<style>
  .ai-compute-controls {
    background: var(--card-background, rgba(0, 0, 0, 0.02));
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .ai-compute-controls h2 {
    margin-top: 0;
  }
  .control-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
  .control-group label {
    flex: 1 1 280px;
    margin-bottom: 0;
  }
  .control-group input[type="range"] {
    flex: 2 1 240px;
  }
  .control-group .value {
    font-weight: 600;
    min-width: 3rem;
  }
  .ai-compute-summary {
    margin-top: 1.5rem;
    padding: 1.25rem;
    border-left: 4px solid var(--primary, #c41e3a);
    background: rgba(196, 30, 58, 0.05);
  }
  .ai-compute-context {
    margin-top: 2rem;
    padding: 1.25rem 1.5rem;
    border-radius: 0.75rem;
    background: rgba(0, 0, 0, 0.025);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
  }
  .ai-compute-context h2 {
    margin-top: 1.25rem;
    margin-bottom: 0.75rem;
  }
  .ai-compute-context h2:first-child {
    margin-top: 0;
  }
  .ai-compute-context ul {
    padding-left: 1.25rem;
    margin: 0;
  }
  .ai-compute-context li {
    margin-bottom: 0.65rem;
    line-height: 1.5;
  }
  .ai-compute-context-summary {
    margin-top: 1.25rem;
    font-weight: 600;
  }
  .ai-compute-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
    margin: 1.5rem 0;
  }
  .metric-card {
    background: rgba(0, 0, 0, 0.03);
    border-radius: 0.75rem;
    padding: 1rem 1.25rem;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
  }
  .metric-card h4 {
    margin: 0 0 0.5rem 0;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: rgba(0, 0, 0, 0.6);
  }
  .metric-value {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
    color: var(--primary, #c41e3a);
  }
  .metric-footnote {
    margin: 0.35rem 0 0;
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.85rem;
  }
  #ai-constraint-chart {
    margin-bottom: 1rem;
  }
  #ai-compute-table table {
    width: 100%;
    margin-top: 1rem;
  }
  #ai-compute-table td, #ai-compute-table th {
    padding: 0.75rem 0.5rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  @media (max-width: 600px) {
    .control-group {
      flex-direction: column;
      align-items: flex-start;
    }
    .control-group input[type="range"] {
      width: 100%;
    }
    .control-group .value {
      align-self: flex-end;
    }
    .ai-compute-metrics {
      grid-template-columns: 1fr;
    }
  }
</style>
