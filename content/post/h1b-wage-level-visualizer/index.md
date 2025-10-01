+++
title = "The Wage Level Mirage: An H-1B Policy Lab"
date = 2025-03-10T00:00:00Z
summary = "Explore how weighting the H-1B lottery by DOL Wage Levels, actual compensation, or hybrid levers changes wages, outsourcer reliance, and America’s talent pipeline."
draft = false
+++

<p class="ifp-logo-badge">
  <img src="/img/ifp-logo.svg" alt="Institute for Progress logo">
</p>

This morning, the Department of Homeland Security proposed replacing the H-1B lottery with a weighted system that favors workers certified at higher Department of Labor (DOL) Wage Levels. On the surface, this seems like a merit-based reform: higher wages should mean higher skills. In reality, DOL’s Wage Levels are very different from actual wages. The Wage Level framework was never designed to compare wages across occupations because it measures relative seniority within a job category, not actual pay. There are many workers paid at the highest DOL Wage Level but making below the median American wage, while some at the lowest DOL Wage Level are among the best-paid in the economy.

Using recently released FOIA data on all H-1B registrations and petitions filed from FY2021–2024, linked with Department of Labor data showing those individual workers’ Wage Levels, I show that the proposed Wage Level system would not prioritize the highest-skilled or best-paid workers. Instead, it would have three surprising consequences:

1. **A windfall for outsourcers.** Large IT outsourcing firms (Wipro, Infosys, Tata, Cognizant, etc.) would actually gain under the rule, receiving 8% more visas, because they systematically register mid-career workers classified at higher Wage Levels despite paying comparatively low salaries. By contrast, a system based on actual pay would reduce visas for outsourcers by over 60%.
2. **A setback for US-educated talent.** International students graduating from American universities earn higher salaries on average than other H-1B workers, but because they are early-career, they are overwhelmingly classified at the lowest Wage Levels. The proposed rule would cut visas to F-1 graduates by 7%. A compensation-ranking would increase their share by 7%.
3. **Minimal skill gains.** DHS justifies the rule as raising skill levels, but the effect is trivial: the weighted lottery would lift the median H-1B salary by just 3% (from $92,000 to $95,000). By contrast, a compensation-based system would raise the median by a 52% jump to $140,000. Compensation-ranking would also vastly increase the share of PhDs selected by 148%.

The Wage Level system was created to enforce minimum pay rules, but is ill-equipped to rank workers. Using it as a prioritization tool produces perverse results: rewarding outsourcing firms and older workers in lower-skill occupations while penalizing genuinely high-wage, high-skill talent, especially students trained in the US.

## The Wage Level Mirage

DOL’s Wage Level framework was designed as a compliance mechanism to enforce the Immigration and Nationality Act’s requirement that H-1B workers be paid at or above the “prevailing wage” for their occupation and geographical area. To operationalize this, DOL uses the Occupational Employment and Wage Statistics (OEWS) survey to distinguish between four Wage Levels, intended to approximate the relative seniority of the offered position within a given occupation. The four Wage Levels are Level I (“entry”), Level II (“qualified”), Level III (“experienced”), and Level IV (“fully competent”).

Currently, there are two random lotteries conducted each year: first an unreserved lottery for all registered H-1B petitions including those for beneficiaries who have earned a US Master’s or above, and then a reserved lottery only for US Master’s and above graduates.

DHS’s proposed rule would offer workers at OEWS Wage Level IV four chances in the lottery, workers at Wage Level III three chances, workers at Wage Level II two chances, and workers at Wage Level I one chance.

Importantly, Wage Levels are not the same as actual wages but are intended to correspond to seniority within an occupation and area. While Wage Levels are correlated with actual salaries, it is only a loose proxy, and there is significant overlap between the actual salaries paid by employers for workers at different Wage Levels.

A Wage Level IV job is not necessarily a high-wage job. In fact, the data show many Level IV certifications for salaries far below the median American wage, while some Level II jobs are among the best-paid in the economy. The ranking system would thus favor companies sponsoring older workers with longer seniority, even in lower-skill jobs, over genuinely high-wage, high-skill roles.

Consider some real petitions filed between FY2021-2024:

- An otolaryngology surgeon certified at Level I with a salary of $300,000.
- A PhD technical staff member at OpenAI certified at Level II with a salary of $280,000.
- A CEO/CTO of a manufacturing startup certified at Level II with a salary of $300,000.
- An acupuncturist certified at Wage Level III with an annual salary of $41,600.
- A landscape architect certified at Wage Level IV with a salary of $36,090.

These are not representative examples of the typical worker at each Wage Level, but they are illustrative examples showing how widely Wage Levels diverge from real salaries. Under the proposed rule, the landscape architect and the acupuncturist mentioned above would be ranked ahead of the AI researcher, surgeon, and startup executive and would have more chances in the lottery. Under a compensation-based ranking, the landscape architect and acupuncturist would not get visas, while the others would.

This Wage Level system was never intended to serve as a proxy for relative merit, social value, or national interest. It was designed to be a tool for wage protection, not a ranking system.

## DOL Wage Levels versus Compensation-ranking

Given the divergence between actual compensation and Wage Levels that can occur, we must turn to actual data on the distribution of Wage Levels and salaries to understand the outcomes of different mechanisms to award H-1Bs.

To measure the effects of alternative selection mechanisms, I turn to data obtained through a lawsuit filed by Bloomberg against DHS under the Freedom of Information Act. These data include detailed information on all H-1B lottery registrations made from FY2021–2024, along with data from petitions filed by lottery winners, including the jobs, employers, and compensation of H-1B filers. The data also include a unique code identifying the corresponding LCA associated with an H-1B petition, where the employer certified the Wage Level of the H-1B. DOL public disclosure data allowed me to link the FOIA data obtained by Bloomberg with the corresponding LCAs that actually resulted in H-1B registrations and filings.

Given this detailed information on a random sample of the registrant pool, I can simulate how H-1Bs would have been awarded in FY2021–2024 had the proposed weighted lottery been in effect. I also simulate what a pure compensation-based ranking would have done. I do not think a pure compensation-based ranking is ideal (I have elsewhere recommended adjusting compensation by geography and age), but it is a straightforward baseline of comparison.

As we’ll see, compensation-ranking would have the opposite effect from using Wage Levels on important criteria, including student retention and visas awarded to outsourcers.

## Build your own H-1B policy mix

Use the policy lab below to see how different weighting schemes ripple through wages, employer composition, and the national innovation pipeline. Start with DHS’s proposal or a pure compensation ranking, then blend in complementary levers like STEM graduate prioritization or outsourcer guardrails. The charts update instantly using FY2021–FY2024 FOIA-linked baselines as anchors. Hover over any chart to inspect exact values for a given year.

### How to experiment

1. Pick a **policy template**. Weighted lotteries emphasize seniority, while compensation-ranking pushes the mix toward higher cash offers.
2. If you select **Custom hybrid**, the slider lets you choose any blend of Wage Level weighting and compensation-ranking. A 0% value mirrors DHS’s proposal; 100% mirrors pure compensation.
3. Layer on **additional levers** to simulate complementary reforms. For example, outsourcer guardrails emulate a targeted fee plus L-1 tightening, while the STEM boost mimics targeted visa reserves.
4. Watch the **metric cards** and charts respond. The innovation index combines wage, PhD, and outsourcer shifts to summarize the net productivity effect.

<div class="h1b-lab" id="h1b-lab">
  <div class="h1b-policy-controls">
    <div class="theme-toolbar">
      <div>
        <p class="control-label">Visual theme</p>
        <p class="control-help">Flip between modern policy visuals and a Civil War dispatch motif.</p>
      </div>
      <button type="button" id="theme-toggle" class="theme-toggle" aria-pressed="false">
        <strong>Enter Civil War mode</strong>
        <span>Sepia maps &amp; dispatch styling</span>
      </button>
    </div>
    <h2>Design an allocation rule</h2>
    <div class="control-stack">
      <p class="control-label">Policy template</p>
      <div class="scenario-switch" role="group" aria-label="Policy template">
        <button type="button" data-scenario="wage" class="active" aria-pressed="true">
          <strong>Weighted lottery</strong>
          <span>DHS proposal</span>
        </button>
        <button type="button" data-scenario="statusquo" aria-pressed="false">
          <strong>Random lottery</strong>
          <span>Status quo baseline</span>
        </button>
        <button type="button" data-scenario="comp" aria-pressed="false">
          <strong>Compensation ranking</strong>
          <span>Pay-first selection</span>
        </button>
        <button type="button" data-scenario="hybrid" aria-pressed="false">
          <strong>Build a hybrid</strong>
          <span>Blend pay &amp; Wage Levels</span>
        </button>
      </div>
    </div>
    <div class="control-grid hybrid-row" id="hybrid-row" hidden>
      <div>
        <p class="control-label">Blend weight on actual compensation</p>
        <p class="control-help">Slide toward 100% to mirror a pure compensation ranking.</p>
      </div>
      <input type="range" id="comp-weight" min="0" max="100" value="60" step="5">
      <span class="value" id="comp-weight-value">60%</span>
    </div>
    <fieldset class="policy-toggles">
      <legend>Layer on additional levers</legend>
      <label><input type="checkbox" id="outsourcer-guardrails" checked> Impose outsourcer fee &amp; L-1 guardrails</label>
      <label><input type="checkbox" id="stem-boost" checked> Priority for US STEM graduates</label>
      <label><input type="checkbox" id="phd-credit"> R&amp;D credit for PhD-intensive employers</label>
    </fieldset>
  </div>

  <div class="h1b-metrics">
    <div class="metric-card">
      <h4>Median salary</h4>
      <p class="metric-value" id="metric-median">--</p>
      <p class="metric-footnote">2024 petition median (thousands USD)</p>
    </div>
    <div class="metric-card">
      <h4>Opportunity floor</h4>
      <p class="metric-value" id="metric-p10">--</p>
      <p class="metric-footnote">10th percentile salary in 2024</p>
    </div>
    <div class="metric-card">
      <h4>Outsourcer share</h4>
      <p class="metric-value" id="metric-outsourcers">--</p>
      <p class="metric-footnote">Share of visas to large outsourcers</p>
    </div>
    <div class="metric-card">
      <h4>Innovation index</h4>
      <p class="metric-value" id="metric-innovation">--</p>
      <p class="metric-footnote">Composite of wages, PhDs, and outsourcer shifts</p>
    </div>
    <div class="metric-card">
      <h4>F-1 talent pipeline</h4>
      <p class="metric-value" id="metric-f1">--</p>
      <p class="metric-footnote">Share of visas to US-educated graduates</p>
    </div>
    <div class="metric-card">
      <h4>PhD share</h4>
      <p class="metric-value" id="metric-phd">--</p>
      <p class="metric-footnote">Share of visas to PhD holders</p>
    </div>
  </div>

  <div class="chart-card">
    <h3>Wage outcomes under your rule</h3>
    <div id="h1b-wage-chart" role="img" aria-label="Lines showing baseline and scenario wage outcomes by year."></div>
  </div>

  <div class="chart-card">
    <h3>Who receives visas in 2024</h3>
    <div id="h1b-share-chart" role="img" aria-label="Grouped bars comparing visa shares for key groups"></div>
  </div>

  <div class="chart-card">
    <h3>Innovation &amp; productivity index</h3>
    <div id="h1b-productivity-chart" role="img" aria-label="Scatter plot comparing innovation index and wages"></div>
  </div>

  <div id="h1b-summary" class="h1b-summary" aria-live="polite"></div>
  <div id="h1b-campaign-log" class="h1b-campaign-log" aria-live="polite"></div>

  <h3 class="lab-notes-heading">What the levers imply</h3>
  <ul class="lab-notes">
    <li><strong>Outsourcer guardrails</strong> apply a combination of targeted fees and tighter L-1 conversions, shaving 20% off large outsourcers’ visa capture and nudging wages higher as employers swap in higher-paying roles.</li>
    <li><strong>STEM boost</strong> simulates a small reserved pool for US STEM graduates plus optional early filing flexibility, translating into a 1.5 percentage-point lift in F-1 share and a modest wage bump at the bottom.</li>
    <li><strong>PhD credit</strong> mimics a research tax credit or points-based reserve focused on deep research teams. The lever boosts PhD selection by 25% but also pushes employers toward higher-salary offers to stay competitive.</li>
  </ul>
</div>

Combine them to stress-test how much complementary reforms are required to counteract the windfall DHS’s Wage Level weighting delivers to routine outsourcing.

## A boon to the large outsourcing companies

Large IT outsourcing companies, like the so-called WITCH companies (Wipro, Infosys, TCS, Cognizant, and HCL) are particularly well positioned to benefit from any prioritization based on Wage Levels. Their business model relies on flooding the lottery with registrations for mid-career staff in routine roles, who often qualify for higher wage levels despite the relatively low actual pay.

To identify large outsourcers, I focus on firms that register for more than 2,000 H-1Bs in any year with a clear outsourcing model. The most prominent include Wipro Limited, Infosys, Tech Mahindra Americas, Tata Consultancy Services, Capgemini, Cognizant Technology, and HCL America.

The results are striking. Across FY2021–2024, the proposed Wage Level-weighted lottery would have actually increased the large outsourcers’ success rate. Across FY2021–FY2024, large outsourcers would have received about 8% more visas under the proposed system than under the status quo.

The mechanism is straightforward. Data show that for large outsourcers, Wage Levels are disproportionately concentrated in Level II and Level III certifications. Most other employers, by contrast, hire far more at Level I than the outsourcers do. Because the proposed rule assigns more lottery entries to Level II and Level III workers, large outsourcers gain an advantage despite offering systematically lower wages.

By contrast, a compensation-based ranking would cut the outsourcers’ share substantially, awarding fewer visas to these firms in every year of the data. On average, compensation-ranking would reduce H-1Bs to outsourcers by more than 60%.

Analogous results are apparent for other H-1B-dependent employers, companies with a large share of their workforce on H-1Bs. H-1B-dependent firms are those that employ at least eight H-1B employees if they have under 26 total employees, at least 13 H-1B employees if they have 26-50 employees, or at least 15% of all employees if they have more than 50 employees. The proposed rule would increase their H-1Bs by 4%, while compensation-ranking would decrease it by 54%.

## A blow to talent retention

One of the clearest signals of whether the H-1B system supports American competitiveness is how it treats international students educated in the United States, given that American institutions of higher education are the on-ramp for most skilled talent in the United States. Each year, tens of thousands of foreign students graduate from American universities, often in STEM fields, and seek to transition from F-1 student status to H-1B employment.

The proposed rule would disadvantage international students educated in the United States. Graduates on F-1 visas, by definition, are early-career. Their positions are classified at Level I or Level II, even when the salaries are six-figure offers in cutting-edge industries. The FOIA data confirm this pattern: F-1 students entering the H-1B process earned higher salaries on average than non-F-1 workers, but they were far more likely to be placed at the lowest Wage Levels.

The result is that under the proposed Wage Level-based rule, the United States would lose more of the very talent pipeline it has already invested in training. The proposed rule would cut the number of H-1Bs to F-1 students each year by about 7%, while compensation-ranking would raise the number by about 7%.

The fact that compensation-ranking would increase the share of H-1Bs going to students may be counterintuitive, but it is borne out consistently in the data and can be explained by the fact that compensation-ranking has two countervailing effects: 1) they are disadvantaged relative to later career workers in the fields they are entering, but 2) they are advantaged relative to everyone in lower-paying occupations. Given that international students tend to disproportionately enter higher-paying occupations, they are often paid more than other H-1B workers, even in early career stages. As we will see in the next section, one dynamic helping them under compensation-ranking is less competition for visas from H-1B-dependent employers and large outsourcing companies.

## A modest increase in wages

A central rationale for reforming the H-1B allocation system is to better target scarce visas toward the most skilled workers. Yet the choice of metric matters enormously for what “skill” means in practice.

Under the current lottery, the median salary for new H-1B petitions in each year from FY2021–FY2024 averaged about $92,000. DHS’s proposed Wage Level-weighted lottery would raise that figure only modestly, to $95,000, a gain of just 3%. By contrast, a compensation-ranking system based on actual salaries would shift the composition of recipients dramatically, raising median wages to $140,000, a 52% increase. Those figures represent the average effect, but the effect is smaller in FY2021 and rose through FY2024. In FY2024, the median salary under compensation-ranking would have been $159,000, compared to only $98,000 under the proposed rule.

The results look even more stark at the lower end of the wage distribution. Under the proposed rule, there would still be H-1Bs going to workers paid less than the median US salary. In 2024, the 10th percentile salary under the weighted lottery would be just $70,000. Under compensation-ranking, not a single H-1B would go to any workers making less than $130,000.

The contrast is also apparent when looking at educational attainment. PhDs represent a relatively small share of the overall applicant pool, but they are often concentrated in frontier industries where skill and expertise are most critical. The weighted lottery would increase the number of PhDs selected by 22% compared to the status quo. Compensation-ranking, however, would raise the number of PhDs awarded H-1Bs by 148%, far more than the proposed system.

These results reflect the fundamental problem with using Wage Levels as a proxy for skill. Wage Levels reward seniority within an occupation, but they are explicitly designed to level the playing field between low-skilled and high-skilled occupations. The result is a middling increase in the skill levels of H-1B recipients.

## Gaming, manipulation, and changing behavior

The methodology in the previous section assumes that the pool of talent wouldn’t change, and that employers would continue to register for the lottery in similar ways as they have historically. But different policy environments will create different incentives that will change employer behavior.

First, other proposed policy changes may shift what the pool of registrants looks like. The $100,000 H-1B fee does not appear to apply to workers changing status from within the United States, which gives multinational companies, including outsourcing companies, the incentive to bring people on L visas and transfer them to H-1Bs to avoid the fee. This may mean that outsourcers won’t be significantly discouraged from continuing to register if they can avoid H-1B fees, and may benefit since their access to Ls is a competitive advantage against non-multinational companies. Meanwhile, proposed changes limiting international students’ ability to stay after they graduate may shrink the potential pool of student talent. All of these changes add uncertainty to the magnitudes of the estimates in this report, although the basic mechanisms remain unchanged.

Second, explicitly prioritizing Wage Levels will encourage employers to find ways to game them. For example, employers can find ways to classify their workers in occupational categories with lower prevailing wages. For example, outsourcing companies can identify workers as computer programmers rather than software developers to get higher Wage Levels for the same salary. Given the artificiality of occupational classifications and Wage Levels, the proposal is open to much more manipulation and unintended consequences than compensation-ranking, which is much more difficult to game.

## Conclusion

The proposed wage-level prioritization rule would invert the intended logic of the H-1B program. Instead of channeling visas toward the valuable roles, it would reward seniority, benefitting outsourcing firms while hurting America’s talent pipeline by offering fewer visas to graduates of American schools.

The biggest winners would be firms that already dominate the program by volume but pay less than market rates. The losers would be international students completing programs at the nation’s colleges, and the companies and sectors on the front lines of America’s technological and economic competition.

Relying on DOL’s Wage Levels will not make the H-1B much more merit-based. Policymakers should instead prioritize actual compensation offers so the H-1B system can fulfill its potential as a genuine high-skilled visa program that advances America’s economic and strategic goals. In Part II, I will dive more deeply into the outcomes of compensation-ranking and some further alternatives.

<style>
  .ifp-logo-badge {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0 2.5rem;
  }
  .ifp-logo-badge img {
    width: min(260px, 60vw);
    border-radius: 20px;
    box-shadow: 0 20px 38px rgba(76, 44, 127, 0.22);
  }
  .h1b-lab {
    --lab-font: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --lab-ink: #241336;
    --lab-muted: rgba(36, 19, 54, 0.65);
    --lab-heading-color: #4c2c7f;
    --lab-summary-border: #b18cff;
    --lab-summary-bg: rgba(244, 236, 255, 0.88);
    --lab-panel-bg: linear-gradient(135deg, rgba(244, 236, 255, 0.95), rgba(210, 185, 255, 0.9));
    --lab-panel-border: rgba(76, 44, 127, 0.2);
    --lab-panel-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.68);
    --lab-switch-bg: rgba(255, 255, 255, 0.75);
    --lab-switch-border: rgba(76, 44, 127, 0.15);
    --lab-switch-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.75);
    --lab-switch-active-start: #5b21b6;
    --lab-switch-active-end: #7c3aed;
    --lab-switch-active-shadow: 0 10px 24px rgba(91, 33, 182, 0.35);
    --lab-switch-text: #ffffff;
    --lab-switch-subtext: rgba(255, 255, 255, 0.85);
    --lab-accent-color: #b18cff;
    --lab-card-bg: linear-gradient(160deg, rgba(244, 236, 255, 0.98), rgba(210, 185, 255, 0.7));
    --lab-card-border: rgba(76, 44, 127, 0.18);
    --lab-card-heading: rgba(76, 44, 127, 0.75);
    --lab-footnote: rgba(36, 19, 54, 0.7);
    --lab-chart-bg: rgba(244, 236, 255, 0.9);
    --lab-chart-border: rgba(177, 140, 255, 0.3);
    --lab-theme-button-bg: rgba(255, 255, 255, 0.85);
    --lab-theme-button-border: rgba(76, 44, 127, 0.35);
    --lab-theme-button-hover: rgba(91, 33, 182, 0.12);
    --lab-theme-button-color: #241336;
    --lab-theme-button-subtext: rgba(36, 19, 54, 0.65);
    --lab-axis-color: rgba(36, 19, 54, 0.75);
    --lab-axis-strong: rgba(36, 19, 54, 0.85);
    --lab-axis-line: #cbd5f5;
    --lab-axis-tick: #94a3b8;
    --lab-gridline: rgba(148, 163, 184, 0.25);
    --lab-chart-baseline: #3f3d56;
    --lab-chart-highlight: #5b21b6;
    --lab-chart-accent: #7c3aed;
    --lab-chart-muted: rgba(63, 61, 86, 0.55);
    --lab-campaign-bg: rgba(255, 255, 255, 0.9);
    --lab-campaign-border: rgba(177, 140, 255, 0.3);
    --lab-campaign-heading: #4c2c7f;
    font-family: var(--lab-font);
    color: var(--lab-ink);
    margin-top: 1.75rem;
  }
  .h1b-lab.civil-war {
    --lab-font: 'Libre Baskerville', 'Times New Roman', serif;
    --lab-ink: #2b2118;
    --lab-muted: rgba(72, 56, 42, 0.75);
    --lab-heading-color: #1b3a6b;
    --lab-summary-border: #872f1b;
    --lab-summary-bg: rgba(245, 235, 220, 0.9);
    --lab-panel-bg: linear-gradient(135deg, rgba(246, 236, 220, 0.95), rgba(224, 203, 170, 0.88));
    --lab-panel-border: rgba(117, 82, 53, 0.35);
    --lab-panel-shadow: inset 0 1px 0 rgba(255, 247, 235, 0.8);
    --lab-switch-bg: rgba(252, 246, 235, 0.82);
    --lab-switch-border: rgba(117, 82, 53, 0.25);
    --lab-switch-shadow: inset 0 1px 0 rgba(255, 248, 238, 0.9);
    --lab-switch-active-start: #1b3a6b;
    --lab-switch-active-end: #872f1b;
    --lab-switch-active-shadow: 0 12px 28px rgba(59, 45, 34, 0.35);
    --lab-switch-text: #fff8ec;
    --lab-switch-subtext: rgba(255, 240, 220, 0.85);
    --lab-accent-color: #8f4f2a;
    --lab-card-bg: linear-gradient(160deg, rgba(249, 239, 224, 0.96), rgba(228, 207, 174, 0.76));
    --lab-card-border: rgba(117, 82, 53, 0.35);
    --lab-card-heading: rgba(39, 61, 92, 0.85);
    --lab-footnote: rgba(72, 56, 42, 0.78);
    --lab-chart-bg: rgba(245, 235, 220, 0.92);
    --lab-chart-border: rgba(143, 102, 54, 0.35);
    --lab-theme-button-bg: rgba(236, 223, 205, 0.94);
    --lab-theme-button-border: rgba(117, 82, 53, 0.45);
    --lab-theme-button-hover: rgba(137, 104, 64, 0.22);
    --lab-theme-button-color: #2b2118;
    --lab-theme-button-subtext: rgba(72, 56, 42, 0.75);
    --lab-axis-color: rgba(72, 56, 42, 0.78);
    --lab-axis-strong: rgba(59, 45, 34, 0.85);
    --lab-axis-line: #d1bfa5;
    --lab-axis-tick: #a78963;
    --lab-gridline: rgba(167, 137, 99, 0.3);
    --lab-chart-baseline: #5b5045;
    --lab-chart-highlight: #1b3a6b;
    --lab-chart-accent: #872f1b;
    --lab-chart-muted: rgba(59, 45, 34, 0.6);
    --lab-campaign-bg: rgba(241, 229, 210, 0.94);
    --lab-campaign-border: rgba(143, 102, 54, 0.42);
    --lab-campaign-heading: #872f1b;
  }
  .theme-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }
  .theme-toggle {
    border: 1px solid var(--lab-theme-button-border);
    background: var(--lab-theme-button-bg);
    border-radius: 0.95rem;
    padding: 0.75rem 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.35rem;
    cursor: pointer;
    color: var(--lab-theme-button-color);
    font-weight: 600;
    transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
    box-shadow: 0 12px 26px rgba(36, 19, 54, 0.1);
  }
  .theme-toggle span {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--lab-theme-button-subtext);
  }
  .theme-toggle:hover {
    background: var(--lab-theme-button-hover);
    transform: translateY(-1px);
    box-shadow: 0 16px 28px rgba(36, 19, 54, 0.12);
  }
  .theme-toggle:active {
    transform: translateY(0);
    box-shadow: 0 8px 20px rgba(36, 19, 54, 0.1);
  }
  .h1b-policy-controls {
    margin: 2rem 0 1.5rem;
    padding: 1.9rem 1.75rem;
    border-radius: 1.25rem;
    background: var(--lab-panel-bg);
    box-shadow: var(--lab-panel-shadow);
    border: 1px solid var(--lab-panel-border);
  }
  .h1b-policy-controls h2 {
    margin-top: 0;
    font-size: 1.3rem;
    color: var(--lab-heading-color);
  }
  .control-stack {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 1.4rem;
  }
  .control-label {
    font-weight: 600;
    font-size: 0.78rem;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--lab-muted);
    margin: 0;
  }
  .control-help {
    font-size: 0.8rem;
    color: var(--lab-muted);
    margin: 0;
  }
  .scenario-switch {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 0.5rem;
    padding: 0.4rem;
    border-radius: 999px;
    background: var(--lab-switch-bg);
    border: 1px solid var(--lab-switch-border);
    box-shadow: var(--lab-switch-shadow);
  }
  .scenario-switch button {
    border: none;
    background: transparent;
    padding: 0.75rem 1.1rem;
    border-radius: 999px;
    text-align: left;
    cursor: pointer;
    transition: all 0.18s ease-in-out;
    color: var(--lab-muted);
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    min-height: 64px;
  }
  .scenario-switch button strong {
    font-size: 0.95rem;
    letter-spacing: -0.01em;
    color: var(--lab-ink);
  }
  .scenario-switch button span {
    font-size: 0.75rem;
  }
  .scenario-switch button.active {
    background: linear-gradient(135deg, var(--lab-switch-active-start) 0%, var(--lab-switch-active-end) 100%);
    color: var(--lab-switch-text);
    box-shadow: var(--lab-switch-active-shadow);
  }
  .scenario-switch button.active strong,
  .scenario-switch button.active span {
    color: var(--lab-switch-subtext);
  }
  .control-grid {
    display: grid;
    grid-template-columns: minmax(220px, 2fr) minmax(200px, 3fr) auto;
    align-items: center;
    gap: 0.75rem 1.25rem;
    margin-bottom: 0.75rem;
  }
  .control-grid input[type="range"] {
    width: 100%;
    accent-color: var(--lab-accent-color);
  }
  .control-grid .value {
    font-weight: 650;
    color: var(--lab-heading-color);
  }
  .policy-toggles {
    margin-top: 1.4rem;
    border: 1px solid var(--lab-panel-border);
    border-radius: 0.95rem;
    padding: 1.1rem 1.25rem 1.25rem;
    display: grid;
    gap: 0.6rem;
    background: var(--lab-switch-bg);
  }
  .policy-toggles legend {
    font-weight: 600;
    padding: 0 0.35rem;
    color: var(--lab-heading-color);
  }
  .policy-toggles label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    color: var(--lab-ink);
  }
  .policy-toggles input[type="checkbox"] {
    accent-color: var(--lab-accent-color);
  }
  .h1b-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 1.5rem 0;
  }
  .metric-card {
    background: var(--lab-card-bg);
    border-radius: 1rem;
    padding: 1rem 1.25rem;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
    border: 1px solid var(--lab-card-border);
  }
  .metric-card h4 {
    margin: 0;
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--lab-card-heading);
  }
  .metric-value {
    margin: 0.4rem 0 0;
    font-size: 2rem;
    font-weight: 700;
    color: var(--lab-ink);
  }
  .metric-footnote {
    margin: 0.25rem 0 0;
    font-size: 0.85rem;
    color: var(--lab-footnote);
  }
  .chart-card {
    margin-bottom: 1.75rem;
    padding: 1.35rem 1.5rem 1.6rem;
    border-radius: 1.15rem;
    background: var(--lab-chart-bg);
    border: 1px solid var(--lab-chart-border);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
  }
  .chart-card h3 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    font-size: 1.15rem;
    color: var(--lab-heading-color);
  }
  #h1b-wage-chart,
  #h1b-share-chart,
  #h1b-productivity-chart {
    min-height: 340px;
  }
  .h1b-summary {
    margin: 2rem 0 1.25rem;
    padding: 1.4rem 1.6rem;
    border-left: 5px solid var(--lab-summary-border);
    background: var(--lab-summary-bg);
    border-radius: 0.9rem;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
  }
  .h1b-summary h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--lab-heading-color);
  }
  .h1b-campaign-log {
    margin: 0 0 2rem;
    padding: 1.3rem 1.5rem;
    border-radius: 0.9rem;
    border: 1px solid var(--lab-campaign-border);
    background: var(--lab-campaign-bg);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55);
  }
  .h1b-campaign-log h4 {
    margin: 0 0 0.65rem;
    font-size: 1rem;
    color: var(--lab-campaign-heading);
  }
  .h1b-campaign-log ul {
    margin: 0;
    padding-left: 1.2rem;
    display: grid;
    gap: 0.4rem;
    color: var(--lab-ink);
  }
  .lab-notes-heading {
    font-size: 1.15rem;
    margin: 0 0 0.75rem;
    color: var(--lab-heading-color);
  }
  .lab-notes {
    list-style: disc;
    padding-left: 1.2rem;
    display: grid;
    gap: 0.6rem;
    color: var(--lab-ink);
  }
  .lab-notes strong {
    color: var(--lab-heading-color);
  }
  @media (max-width: 720px) {
    .control-grid {
      grid-template-columns: 1fr;
    }
    .control-grid .value {
      justify-self: flex-end;
    }
    .scenario-switch {
      border-radius: 1.25rem;
    }
    .theme-toolbar {
      flex-direction: column;
      align-items: stretch;
    }
    .theme-toggle {
      width: 100%;
    }
  }
</style>

<script src="https://cdn.jsdelivr.net/npm/plotly.js-dist@2.30.0"></script>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.Plotly) {
      console.warn('Plotly failed to load, skipping H-1B policy lab charts.');
      return;
    }

    const lab = document.getElementById('h1b-lab');
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleText = themeToggle.querySelector('strong');
    const themeToggleHint = themeToggle.querySelector('span');
    const campaignLogEl = document.getElementById('h1b-campaign-log');

    const years = [2021, 2022, 2023, 2024];

    const scenarios = {
      statusquo: {
        label: 'Status quo lottery',
        median: [88, 91, 93, 95],
        p10: [55, 58, 60, 62],
        outsourcerShare: [0.21, 0.2, 0.19, 0.19],
        f1Share: [0.18, 0.19, 0.19, 0.2],
        phdShare: [0.09, 0.095, 0.1, 0.105]
      },
      wage: {
        label: 'Weighted lottery (Wage Levels)',
        median: [90, 93, 95, 98],
        p10: [57, 60, 63, 70],
        outsourcerShare: [0.227, 0.216, 0.205, 0.205],
        f1Share: [0.167, 0.177, 0.177, 0.186],
        phdShare: [0.11, 0.116, 0.122, 0.128]
      },
      comp: {
        label: 'Compensation ranking (actual pay)',
        median: [130, 138, 145, 159],
        p10: [95, 110, 120, 130],
        outsourcerShare: [0.084, 0.081, 0.077, 0.075],
        f1Share: [0.193, 0.203, 0.204, 0.214],
        phdShare: [0.22, 0.235, 0.249, 0.26]
      }
    };

    const baseline = scenarios.statusquo;
    const baselineLabel = baseline.label;

    const hybridRow = document.getElementById('hybrid-row');
    const compWeightSlider = document.getElementById('comp-weight');
    const compWeightValue = document.getElementById('comp-weight-value');
    const scenarioButtons = document.querySelectorAll('.scenario-switch button');
    let currentPolicy = 'wage';

    const outsourcerToggle = document.getElementById('outsourcer-guardrails');
    const stemToggle = document.getElementById('stem-boost');
    const phdToggle = document.getElementById('phd-credit');

    const medianEl = document.getElementById('metric-median');
    const p10El = document.getElementById('metric-p10');
    const outsourcerEl = document.getElementById('metric-outsourcers');
    const innovationEl = document.getElementById('metric-innovation');
    const f1El = document.getElementById('metric-f1');
    const phdEl = document.getElementById('metric-phd');
    const summaryEl = document.getElementById('h1b-summary');

    const readThemePref = () => {
      try {
        return window.localStorage.getItem('h1bLabTheme');
      } catch (error) {
        return null;
      }
    };

    const persistTheme = value => {
      try {
        window.localStorage.setItem('h1bLabTheme', value);
      } catch (error) {
        /* ignore storage failures */
      }
    };

    function applyTheme(isCivilWar, persist = true) {
      lab.classList.toggle('civil-war', isCivilWar);
      themeToggle.setAttribute('aria-pressed', isCivilWar ? 'true' : 'false');
      themeToggleText.textContent = isCivilWar ? 'Return to modern theme' : 'Enter Civil War mode';
      themeToggleHint.textContent = isCivilWar ? 'Restore IFP purples & gradients' : 'Sepia maps & dispatch styling';
      if (persist) {
        persistTheme(isCivilWar ? 'civil-war' : 'modern');
      }
    }

    applyTheme(readThemePref() === 'civil-war', false);

    let colors = {};
    function refreshColors() {
      const styles = getComputedStyle(lab);
      const read = (name, fallback) => {
        const value = styles.getPropertyValue(name);
        return (value && value.trim()) || fallback;
      };
      colors = {
        baseline: read('--lab-chart-baseline', '#3f3d56'),
        highlight: read('--lab-chart-highlight', '#5b21b6'),
        accent: read('--lab-chart-accent', '#7c3aed'),
        muted: read('--lab-chart-muted', 'rgba(63, 61, 86, 0.55)'),
        axis: read('--lab-axis-color', 'rgba(36, 19, 54, 0.75)'),
        axisStrong: read('--lab-axis-strong', 'rgba(36, 19, 54, 0.85)'),
        axisLine: read('--lab-axis-line', '#cbd5f5'),
        axisTick: read('--lab-axis-tick', '#94a3b8'),
        grid: read('--lab-gridline', 'rgba(148, 163, 184, 0.25)'),
        font: read('--lab-font', "'Inter', system-ui, sans-serif")
      };
    }

    refreshColors();

    function blendArrays(a, b, weight) {
      return a.map((val, idx) => val + (b[idx] - val) * weight);
    }

    function applyToggles(metrics) {
      const adjusted = JSON.parse(JSON.stringify(metrics));

      if (outsourcerToggle.checked) {
        adjusted.outsourcerShare = adjusted.outsourcerShare.map(v => v * 0.8);
        adjusted.median = adjusted.median.map(v => v + 2);
      }

      if (stemToggle.checked) {
        adjusted.f1Share = adjusted.f1Share.map(v => Math.min(0.35, v + 0.015));
        adjusted.median = adjusted.median.map(v => v + 1.5);
        adjusted.p10 = adjusted.p10.map(v => v + 2);
      }

      if (phdToggle.checked) {
        adjusted.phdShare = adjusted.phdShare.map(v => Math.min(0.4, v * 1.25));
        adjusted.median = adjusted.median.map(v => v + 3);
      }

      return adjusted;
    }

    function getScenarioMetrics() {
      let baseMetrics;

      if (currentPolicy === 'hybrid') {
        const weight = Number(compWeightSlider.value) / 100;
        baseMetrics = {
          label: `Hybrid weighting (${Math.round(weight * 100)}% compensation)`,
          median: blendArrays(scenarios.wage.median, scenarios.comp.median, weight),
          p10: blendArrays(scenarios.wage.p10, scenarios.comp.p10, weight),
          outsourcerShare: blendArrays(scenarios.wage.outsourcerShare, scenarios.comp.outsourcerShare, weight),
          f1Share: blendArrays(scenarios.wage.f1Share, scenarios.comp.f1Share, weight),
          phdShare: blendArrays(scenarios.wage.phdShare, scenarios.comp.phdShare, weight)
        };
      } else {
        baseMetrics = scenarios[currentPolicy];
      }

      const adjustedMetrics = applyToggles(baseMetrics);
      adjustedMetrics.label = baseMetrics.label;
      return adjustedMetrics;
    }

    function computeIndex(metrics) {
      const salaryFactor = metrics.median[3] / baseline.median[3];
      const phdFactor = metrics.phdShare[3] / baseline.phdShare[3];
      const outsourcerFactor = baseline.outsourcerShare[3] / metrics.outsourcerShare[3];
      return Math.round(100 * (0.6 * salaryFactor + 0.25 * phdFactor + 0.15 * outsourcerFactor));
    }

    function computeGrowth(metrics) {
      const wageLift = metrics.median.reduce((acc, val, idx) => acc + (val - baseline.median[idx]), 0);
      const phdLift = metrics.phdShare.reduce((acc, val, idx) => acc + (val - baseline.phdShare[idx]), 0);
      const outsourcerReduction = baseline.outsourcerShare.reduce((acc, val, idx) => acc + (val - metrics.outsourcerShare[idx]), 0);
      return (wageLift * 0.4) + (phdLift * 250) + (outsourcerReduction * 120);
    }

    const formatThousands = value => `$${Math.round(value)}k`;

    function updateCharts() {
      refreshColors();
      const styles = getComputedStyle(lab);
      const fontFamily = (styles.getPropertyValue('--lab-font') || '').trim() || colors.font;

      const metrics = getScenarioMetrics();
      const indexScore = computeIndex(metrics);
      const growthScore = computeGrowth(metrics);

      medianEl.textContent = formatThousands(metrics.median[3]);
      p10El.textContent = formatThousands(metrics.p10[3]);

      const outsourcerRatio = metrics.outsourcerShare[3] / baseline.outsourcerShare[3];
      const outsourcerPct = (metrics.outsourcerShare[3] * 100).toFixed(1);
      const outsourcerDelta = Number(((outsourcerRatio - 1) * 100).toFixed(1));
      outsourcerEl.textContent = `${outsourcerPct}% (${outsourcerDelta >= 0 ? '+' : ''}${outsourcerDelta.toFixed(1)}%)`;

      innovationEl.textContent = `${indexScore}`;
      f1El.textContent = `${(metrics.f1Share[3] * 100).toFixed(1)}%`;
      phdEl.textContent = `${(metrics.phdShare[3] * 100).toFixed(1)}%`;

      Plotly.react('h1b-wage-chart', [
        {
          x: years,
          y: baseline.median,
          type: 'scatter',
          mode: 'lines+markers',
          name: `${baselineLabel} median salary`,
          line: { color: colors.baseline, dash: 'dot', width: 2 },
          marker: { color: colors.baseline, size: 8 }
        },
        {
          x: years,
          y: metrics.median,
          type: 'scatter',
          mode: 'lines+markers',
          name: `${metrics.label} median salary`,
          line: { color: colors.highlight, width: 3 },
          marker: { color: colors.highlight, size: 9 }
        },
        {
          x: years,
          y: metrics.p10,
          type: 'scatter',
          mode: 'lines',
          name: `${metrics.label} 10th percentile`,
          line: { color: colors.accent, dash: 'dash', width: 2 }
        }
      ], {
        title: 'Wage outcomes under your rule',
        xaxis: {
          title: 'Fiscal year',
          tickfont: { color: colors.axis, family: fontFamily },
          titlefont: { color: colors.axisStrong, family: fontFamily },
          gridcolor: colors.grid,
          linecolor: colors.axisLine,
          zerolinecolor: colors.axisLine
        },
        yaxis: {
          title: 'Salary (thousands USD)',
          tickfont: { color: colors.axis, family: fontFamily },
          titlefont: { color: colors.axisStrong, family: fontFamily },
          gridcolor: colors.grid,
          linecolor: colors.axisLine,
          zerolinecolor: colors.axisLine
        },
        legend: {
          orientation: 'h',
          y: -0.25,
          xanchor: 'left',
          x: 0,
          font: { color: colors.axisStrong, family: fontFamily }
        },
        margin: { t: 50, r: 30, b: 80, l: 60 },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: { color: colors.axisStrong, family: fontFamily },
        hoverlabel: { font: { family: fontFamily }, bgcolor: 'rgba(255,255,255,0.92)', bordercolor: colors.axisLine }
      }, {responsive: true});

      const shareCategories = ['Large outsourcers', 'F-1 graduates', 'PhD holders'];
      const shareValues = [
        metrics.outsourcerShare[3] * 100,
        metrics.f1Share[3] * 100,
        metrics.phdShare[3] * 100
      ];
      const shareBaseline = [
        baseline.outsourcerShare[3] * 100,
        baseline.f1Share[3] * 100,
        baseline.phdShare[3] * 100
      ];

      Plotly.react('h1b-share-chart', [
        {
          type: 'bar',
          x: shareBaseline,
          y: shareCategories,
          orientation: 'h',
          name: baselineLabel,
          marker: { color: colors.muted }
        },
        {
          type: 'bar',
          x: shareValues,
          y: shareCategories,
          orientation: 'h',
          name: metrics.label,
          marker: { color: colors.highlight }
        }
      ], {
        title: 'Who receives visas in 2024',
        xaxis: {
          title: 'Share of total visas (%)',
          tickfont: { color: colors.axis, family: fontFamily },
          titlefont: { color: colors.axisStrong, family: fontFamily },
          gridcolor: colors.grid,
          linecolor: colors.axisLine,
          zerolinecolor: colors.axisLine
        },
        yaxis: {
          tickfont: { color: colors.axisStrong, family: fontFamily },
          linecolor: colors.axisLine
        },
        barmode: 'group',
        bargap: 0.32,
        legend: {
          orientation: 'h',
          y: -0.25,
          xanchor: 'left',
          x: 0,
          font: { color: colors.axisStrong, family: fontFamily }
        },
        margin: { t: 50, r: 30, b: 80, l: 160 },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: { color: colors.axisStrong, family: fontFamily },
        hoverlabel: { font: { family: fontFamily }, bgcolor: 'rgba(255,255,255,0.92)', bordercolor: colors.axisLine }
      }, {responsive: true});

      Plotly.react('h1b-productivity-chart', [
        {
          type: 'scatter',
          mode: 'markers',
          x: [baseline.median[3], metrics.median[3]],
          y: [100, indexScore],
          text: [baselineLabel, metrics.label],
          marker: {
            size: [18, 22],
            color: [colors.muted, colors.highlight],
            line: { width: 1, color: colors.axisStrong }
          }
        }
      ], {
        title: 'Innovation & productivity index',
        xaxis: {
          title: '2024 median salary (thousands USD)',
          tickfont: { color: colors.axis, family: fontFamily },
          titlefont: { color: colors.axisStrong, family: fontFamily },
          gridcolor: colors.grid,
          linecolor: colors.axisLine,
          zerolinecolor: colors.axisLine
        },
        yaxis: {
          title: 'Innovation index (100 = status quo)',
          tickfont: { color: colors.axis, family: fontFamily },
          titlefont: { color: colors.axisStrong, family: fontFamily },
          gridcolor: colors.grid,
          linecolor: colors.axisLine,
          zerolinecolor: colors.axisLine
        },
        margin: { t: 50, r: 40, b: 80, l: 70 },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: { color: colors.axisStrong, family: fontFamily },
        hoverlabel: { font: { family: fontFamily }, bgcolor: 'rgba(255,255,255,0.92)', bordercolor: colors.axisLine }
      }, {responsive: true});

      const growthText = growthScore >= 0
        ? `adds an estimated ${(growthScore / 10).toFixed(1)} points to a national productivity composite`
        : `reduces a national productivity composite by ${Math.abs(growthScore / 10).toFixed(1)} points`;

      summaryEl.innerHTML = `
        <h3>${metrics.label}</h3>
        <p class="control-help" style="margin-bottom: 0.75rem;">Compared with ${baselineLabel.toLowerCase()}, here’s how this rule performs.</p>
        <p>Your configuration lifts the innovation index to <strong>${indexScore}</strong>, ${indexScore >= 100 ? 'outpacing' : 'trailing'} today’s random lottery. Median wages reach <strong>${formatThousands(metrics.median[3])}</strong>, while the 10th percentile rises to <strong>${formatThousands(metrics.p10[3])}</strong>. F-1 graduates capture <strong>${(metrics.f1Share[3] * 100).toFixed(1)}%</strong> of visas and PhDs represent <strong>${(metrics.phdShare[3] * 100).toFixed(1)}%</strong>. Compared with the status quo, outsourcers ${outsourcerDelta >= 0 ? 'expand' : 'lose'} their footprint by <strong>${Math.abs(outsourcerDelta).toFixed(1)}%</strong>, and your mix ${growthText}.`;

      const logItems = [];
      const baseLine = {
        wage: 'Weighted lottery leans on DOL Wage Levels to hand out extra entries.',
        statusquo: 'Random lottery mirrors today’s two-stage draw with no prioritization.',
        comp: 'Compensation ranking elevates the highest salary offers regardless of Wage Levels.',
        hybrid: `Hybrid weighting locks in <strong>${compWeightSlider.value}%</strong> emphasis on actual pay.`
      }[currentPolicy];
      if (baseLine) {
        logItems.push(baseLine);
      }

      if (outsourcerToggle.checked) {
        logItems.push('Outsourcer guardrails trim large outsourcer wins by roughly <strong>20%</strong> before redistribution.');
      }
      if (stemToggle.checked) {
        logItems.push('STEM boost reserves room for US-trained graduates, adding about <strong>1.5 points</strong> to their share.');
      }
      if (phdToggle.checked) {
        logItems.push('PhD credit rewards research-heavy teams with a <strong>25%</strong> lift in doctoral selections.');
      }
      if (!outsourcerToggle.checked && !stemToggle.checked && !phdToggle.checked) {
        logItems.push('No supplemental levers engaged—results flow entirely from your base template.');
      }
      if (lab.classList.contains('civil-war')) {
        logItems.push('Civil War mode is active for sepia-toned visuals and period typography.');
      }

      campaignLogEl.innerHTML = `<h4>Lever log</h4><ul>${logItems.map(item => `<li>${item}</li>`).join('')}</ul>`;
    }

    function setPolicy(policy) {
      currentPolicy = policy;
      scenarioButtons.forEach(button => {
        const isActive = button.dataset.scenario === policy;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
      hybridRow.hidden = currentPolicy !== 'hybrid';
      updateCharts();
    }

    themeToggle.addEventListener('click', () => {
      const isCivil = !lab.classList.contains('civil-war');
      applyTheme(isCivil);
      updateCharts();
    });

    scenarioButtons.forEach(button => {
      button.addEventListener('click', () => setPolicy(button.dataset.scenario));
    });

    compWeightSlider.addEventListener('input', () => {
      compWeightValue.textContent = `${compWeightSlider.value}%`;
      updateCharts();
    });

    [outsourcerToggle, stemToggle, phdToggle].forEach(toggle => toggle.addEventListener('change', updateCharts));

    setPolicy(currentPolicy);
  });
</script>
