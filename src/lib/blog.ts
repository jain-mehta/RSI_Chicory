

// This file acts as a mock database for blog posts.

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  aiHint: string;
  content: string; // Adding a longer content field
  faq?: { question: string; answer: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-roasted-chicory-elevates-coffee-blends",
    title: "How Roasted Chicory Elevates Coffee Blends: Roast Profiles, Crema Stability, Cup Consistency",
    description: "Industrial guide to using roasted chicory for better crema, stable cup quality, and consistent flavor—covering roast profiles, melanoidins, aroma chemistry, and QA specs.",
    date: "July 26, 2024",
    category: "Technical Guide",
    image: "https://images.unsplash.com/photo-1551030173-1744754c6a6a?q=80&w=600",
    aiHint: "coffee beans roasting",
    content: `
      <p>Industrial beverage developers increasingly rely on roasted chicory to engineer coffee blends that deliver stable crema, consistent cup quality, and cost resilience without sacrificing sensory appeal. The science behind chicory’s contribution is rooted in its roast chemistry—especially Maillard-derived melanoidins—and a distinct aroma matrix led by potent odorants such as rotundone, sotolon, and key pyrazines. When properly specified by roast degree and particle characteristics, roasted chicory can improve foam behavior, modulate bitterness and sweetness, and increase batch-to-batch uniformity across large-scale operations.</p>
      <p>This guide distills what matters most for industrial buyers: how light vs. dark roasted chicory changes aroma and mouthfeel; how melanoidin-rich matrices support foam and body; how to navigate crema stability; and how to lock in cup consistency through roast targets, quality specs, and process controls.</p>

      <h3 class="mt-8 font-headline text-2xl font-bold">Why Chicory Works in Coffee Blends</h3>
      <p>Roasted chicory roots undergo drying and roasting that parallel coffee thermal processing, forming high-molecular-weight Maillard products (melanoidins) that influence color, body, and sensory attributes in brews.</p>
      <p>The aroma of roasted chicory brews is driven by high-impact odorants—particularly rotundone (woody, peppery, “chicory-like”), caramel-like notes from compounds such as sotolon, maltol, and related furans, and nutty/roasty pyrazines—providing coffee-compatible aromatic depth.</p>
      <p>Roasting transforms inulin and other constituents, generating sugars and Maillard products that underpin color and flavor development across roast degrees, enabling calibration for blend targets.</p>
      <p>These transformations explain why chicory complements coffee in blends aimed at crema retention, fuller mouthfeel, and controlled bitterness, especially in espresso-style, soluble, and RTD applications.</p>
      
      <h3 class="mt-8 font-headline text-2xl font-bold">Roast Profiles: Light vs. Dark and Their Impact</h3>
      <p>Roast degree steers both aroma balance and matrix properties: lighter roasts preserve more bright, caramel/cereal-like notes, while darker roasts intensify roasty, bitter, and color-driving components via advanced Maillard chemistry.</p>
      <ul class="list-disc pl-6 space-y-2 mt-4">
        <li><strong>Light to medium roast chicory:</strong> Tends to emphasize sweet/caramel and malty notes linked to maltol, dihydromaltol, cyclotene, HDMF, and sotolon; these compounds elevate perceived sweetness and round off bitterness in coffee blends.</li>
        <li><strong>Dark roast chicory:</strong> Drives deeper roasty and bitter tonalities, higher color formation, and a stronger melanoidin signal that can increase body and perceived strength—useful for espresso-forward blends and markets preferring bolder cups.</li>
      </ul>
      <p class="mt-4">Roast profiling is not purely aromatic: progression from 140–180°C over 20–60 minutes illustrates industrial ranges where inulin degradation, sugar formation, and melanoidin build-up occur, shifting the chicory’s functional contributions to mouthfeel and color.</p>
      
      <h3 class="mt-8 font-headline text-2xl font-bold">Crema Stability: What Chicory Can and Can’t Do</h3>
      <p>Espresso crema is a foam formed by pressurized CO2 release and stabilized by surface-active compounds; its stability is highly influenced by brewing parameters like basket size, among others. While coffee-origin lipids and proteins are primary, chicory’s melanoidin-rich matrices can support foam longevity indirectly by enhancing the brew’s colloidal body and viscosity, which aid foam retention in blends.</p>
      <ul class="list-disc pl-6 space-y-2 mt-4">
        <li><strong>Espresso mechanics:</strong> Crema formation arises from gas supersaturation and air–liquid interfacial stabilization; double and triple baskets produce more stable crema than singles under otherwise constant conditions.</li>
        <li><strong>Role of chicory:</strong> Chicory does not supply the same lipoprotein profile as coffee, but its melanoidins and high-MW fractions can contribute to the bulk phase properties that reduce foam drainage, supporting perceived crema stability in blends when extraction and recipe are optimized.</li>
      </ul>
      <p class="mt-4">Operationally, crema performance with chicory blends is maximized when roast level, grind profile, and extraction parameters are tuned together, and when basket size and dose are calibrated for the target foam behavior.</p>

      <h3 class="mt-8 font-headline text-2xl font-bold">Cup Consistency: Reducing Variability at Scale</h3>
      <p>Melanoidin build-up and a distinct but reproducible aroma framework make roasted chicory a valuable lever for cup standardization across origins, seasons, and processes.</p>
      <ul class="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Aroma anchors:</strong> Rotundone provides a consistent chicory-like signature, while a cluster of sweet/caramel odorants and pyrazines deliver predictable roasty-sweet balance; these anchors help stabilize sensory profiles against coffee origin volatility.</li>
          <li><strong>Roast process controls:</strong> Monitoring color, time–temperature curves, and moisture endpoints steers formation of sugars and melanoidins, boosting batch-to-batch uniformity in industrial lines.</li>
      </ul>
      <p class="mt-4">Because chicory roasting follows lower temperatures and longer times than coffee in many operations, it offers a controllable input to “tune” blend outcomes with less origin-to-origin drift.</p>
      
      <h3 class="mt-8 font-headline text-2xl font-bold">Sensory Effects in Coffee–Chicory Blends</h3>
      <ul class="list-disc pl-6 space-y-2 mt-4">
        <li><strong>Sweetness and caramel:</strong> Sotolon, maltol, dihydromaltol, and related compounds heighten sweet/caramel perceptions and reduce the need to chase sweetness through coffee roasting or additives.</li>
        <li><strong>Roasty/nutty depth:</strong> Methoxypyrazines and alkylpyrazines amplify roasty/nutty facets that broaden coffee’s flavor base, especially helpful in darker espresso profiles.</li>
        <li><strong>Bitterness management:</strong> Roast degree of chicory allows targeting bitterness levels; medium roasts can enhance perceived sweetness and reduce harshness, while darker roasts add assertiveness for markets desiring bolder cups.</li>
      </ul>
      <p class="mt-4">Consumer and trained panel work around coffee substitutes and blend profiles show that chicory-linked sweetness and root/roast notes can be preferred in certain contexts, informing market-specific blend design.</p>
      
      <h3 class="mt-8 font-headline text-2xl font-bold">Quality and Stability Considerations</h3>
      <ul class="list-disc pl-6 space-y-2 mt-4">
        <li><strong>Flavor aging:</strong> In chicory-containing products, Strecker aldehydes and diketones decrease over storage while phenolics can rise; monitoring ratios such as 2,3-butanedione to 2-methylfuran has been proposed as an aging indicator in chicory-based coffee substitutes.</li>
        <li><strong>Acrylamide awareness:</strong> As with other roasted foods, acrylamide forms via Maillard pathways; process innovations and matrix effects (including residual inulin interactions) can mitigate formation and bioaccessibility in instant formats.</li>
      </ul>
      <p class="mt-4">Such insights help industrial buyers set shelf-life expectations and choose suppliers with robust roast and post-roast controls.</p>

      <h3 class="mt-8 font-headline text-2xl font-bold">Specification Playbook for Industrial Buyers</h3>
      <p>Target specifications to ensure chicory’s contribution to crema, body, and consistency is repeatable:</p>
      <ul class="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Roast degree by color:</strong> Define acceptable Lab* or spectro/color ranges per application—lighter for caramel-sweet support, darker for robust roast impact.</li>
          <li><strong>Moisture and water activity:</strong> Tight control limits to stabilize extraction yield and foam-related behavior in espresso and soluble processes.</li>
          <li><strong>Particle size distribution:</strong> Align grind/cut with extraction system; keep fines under control to balance filterability and body contributions in espresso, filter, and RTD cold filtration.</li>
          <li><strong>Sensory markers:</strong> Include descriptors tied to rotundone-driven “chicory-like” note and caramel/nutty balance to benchmark batch releases.</li>
          <li><strong>Process documentation:</strong> Require roast time–temperature curves and cooling/drying records to reduce drift in melanoidin development and volatile balance.</li>
      </ul>
      <p class="mt-4">These controls support predictable crema behavior and cup profiles when combined with coffee-side parameters like basket size, dose, and brew ratio.</p>

      <h3 class="mt-8 font-headline text-2xl font-bold">Application Guidance by Segment</h3>
       <ul class="list-disc pl-6 space-y-2 mt-4">
        <li><strong>Espresso blends:</strong> Pair medium-to-dark roasted chicory with medium/dark coffee roasts; calibrate dose and basket selection to leverage crema-friendly extraction and melanoidin body.</li>
        <li><strong>Soluble/instant coffee:</strong> Chicory’s melanoidins and compatible aroma help maintain body and flavor retention post-drying; monitor acrylamide mitigation strategies and aging markers in storage.</li>
        <li><strong>RTD coffee:</strong> Aim for chicory roast levels that increase body without overloading fines; control filtration and cold stability to reduce sedimentation while keeping roasty/caramel aromatics intact.</li>
      </ul>
      <p class="mt-4">Panel findings on chicory–coffee combinations and RTD prototypes support structured formulation trials with trained assessors to meet regional taste targets and process demands.</p>
      
      <h3 class="mt-8 font-headline text-2xl font-bold">Trial Design and Scale-Up Tips</h3>
      <ul class="list-disc pl-6 space-y-2 mt-4">
        <li><strong>Bench sensory mapping:</strong> Use GC–O informed odorants as anchors (rotundone for woody/peppery; sotolon and maltol for caramel/sweet) to build lexicons for internal panels and acceptance criteria.</li>
        <li><strong>Analytical correlations:</strong> Track color values and spectro readings versus cup scores to create predictive QA models linking roast development to sensory outputs.</li>
        <li><strong>Espresso foam testing:</strong> Standardize basket size and dose during trials to isolate ingredient effects on crema; double/triple baskets give more stable baselines for comparison.</li>
      </ul>
      <p class="mt-4">Instrumental–sensory alignment reduces trial cycles and improves tech transfer to production lines.</p>

      <h3 class="mt-8 font-headline text-2xl font-bold">Procurement Considerations for Consistency</h3>
      <ul class="list-disc pl-6 space-y-2 mt-4">
        <li><strong>Source stability:</strong> Favor suppliers with documented, repeatable roasting regimens for chicory and control over pre-roast drying to stabilize inputs to Maillard chemistry.</li>
        <li><strong>Storage and logistics:</strong> Protect roasted chicory from moisture and oxygen to preserve volatile balance and melanoidin functionality; monitor aging indicators where applicable.</li>
        <li><strong>Risk management:</strong> Include acrylamide mitigation controls and COAs for each lot in line with internal standards for roasted ingredients.</li>
      </ul>
      <p class="mt-4">This approach secures the cup and crema performance promised in development through commercial runs.</p>
      `,
      faq: [
          {
              question: "Does chicory directly create crema?",
              answer: "Not directly like coffee oils/proteins, but its melanoidins and high-MW fractions can enhance the bulk phase to support foam retention when brewing variables are optimized."
          },
          {
              question: "Which roast degree is best for crema?",
              answer: "There is no single “best”; blends benefit when roast targets are chosen to balance caramel sweetness and roasty depth, then brewed with basket/dose parameters tuned for crema stability."
          },
          {
              question: "Will chicory make my blend taste “too chicory-like”?",
              answer: "Control by specifying roast color and sensory cutoffs for rotundone-driven notes, and balance with coffee origins/roasts to keep the chicory signature supportive rather than dominant."
          }
      ]
  },
  {
    slug: "dried-chicory-cubes-vs-hand-cut-roots",
    title: "Dried Chicory Cubes vs. Hand-Cut Roots: The Right Input for Roasting and Extraction Lines",
    description: "Compare dried cubes and hand-cut chicory for industrial roasting and extraction. Learn impacts on yield, filtration, sensory, and cost—plus spec templates and trial protocols.",
    date: "July 15, 2024",
    category: "Process Engineering",
    image: "https://images.unsplash.com/photo-1590663731174-884076356e6e?q=80&w=600",
    aiHint: "raw ingredients",
    content: `
        <p>Industrial buyers weighing dried chicory cubes against hand-cut roots are ultimately deciding between throughput efficiency and maximum control over extraction behavior, roast development, and downstream filtration. This guide compares both inputs across roasting dynamics, extraction yields, filtration/clarity, sensory outcomes, QA specs, and cost/logistics—so procurement and technical teams can align raw material choice with process constraints and target cup profiles.</p>
        <p>RSI Chicory manufactures both inputs at scale under a contract-farming model with on-farm dicing, 48-hour sun drying, and in-house roasting at Etah, enabling like-for-like quality comparisons within a single supply chain. The decision framework below is tuned for espresso/industrial blends, soluble coffee, beverage premixes, and RTD formulations.</p>

        <h3 class="mt-8 font-headline text-2xl font-bold">Executive Summary</h3>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Choose dried chicory cubes</strong> when the goal is high-throughput roasting, uniform heat transfer, predictable extraction, and cleaner filtration with lower fines—ideal for instant, premix, and RTD processes where filterability and clarity are critical.</li>
            <li><strong>Choose hand-cut roots</strong> when plant teams want tighter control over extraction kinetics, deeper roast development in denser pieces, and a broader sensory palette with roasty depth and body—useful for espresso-forward blends or when a fuller mouthfeel is desired.</li>
        </ul>
        <p class="mt-4">For most plants, a mixed-input strategy (high proportion cubes, smaller proportion hand-cut) optimizes both filtration and body while retaining cost efficiency and consistent cup targets.</p>

        <h3 class="mt-8 font-headline text-2xl font-bold">How Form Factor Changes Process and Cup</h3>
        
        <h4 class="mt-6 font-headline text-xl font-bold">1) Roasting Dynamics</h4>
        <p><strong>Heat Transfer and Uniformity:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Cubes:</strong> Regular geometry improves bed packing and convective heat transfer, reducing hot/cold spots and tightening roast color distribution.</li>
            <li><strong>Hand-cut:</strong> Irregular geometry creates variable heat paths; thicker sections roast slower and retain more internal moisture early in the profile, which can deepen Maillard development in denser zones and increase roast heterogeneity.</li>
        </ul>
        <p class="mt-4"><strong>Roast Development:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Cubes favor predictable color endpoints and tighter Lab*/spectro windows—beneficial for batch-to-batch consistency, especially when blending across multiple lots.</li>
            <li>Hand-cut can produce layered roast notes (outer roasty, inner caramel-sweet) that some espresso-oriented buyers value for perceived complexity and body.</li>
        </ul>
         <p class="mt-4"><strong>Throughput:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Cubes generally support higher throughput due to faster heat equilibration and smoother material flow.</li>
            <li>Hand-cut may require slightly longer roast or lower batch fill to hit the same internal development, affecting throughput.</li>
        </ul>

        <h4 class="mt-6 font-headline text-xl font-bold">2) Extraction Behavior and Yield</h4>
        <p><strong>Surface Area vs. Density:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Cubes:</strong> More uniform cut size improves surface-area-to-volume ratios across the charge, promoting consistent solute diffusion and quicker attainment of target brix/°Bx.</li>
            <li><strong>Hand-cut:</strong> Mixed sizes increase extraction heterogeneity; thicker pieces extract slower but can contribute to body-building compounds later in the curve.</li>
        </ul>
        <p class="mt-4"><strong>Targeting Brix/Yield:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Cubes help plants hit tight brix targets with fewer adjustments run-to-run—ideal for SOP-driven extraction lines and instant coffee integration.</li>
            <li>Hand-cut gives process engineers levers to tune perceived strength and roast depth at the same brix by adjusting time/temperature and recirculation profiles.</li>
        </ul>

        <h4 class="mt-6 font-headline text-xl font-bold">3) Filtration, Fines, and Clarity</h4>
        <p><strong>Fines Load:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Cubes:</strong> Typically generate fewer fines during handling, improving filterability and reducing pressure spikes in plate-and-frame or cartridge systems.</li>
            <li><strong>Hand-cut:</strong> Irregular edges can shed more fines, requiring pre-filtration or stepwise screens to maintain throughput and avoid haze in RTD systems.</li>
        </ul>
        <p class="mt-4"><strong>Sedimentation Control:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Cubes are friendlier for cold filtration and shelf-stable RTD designs with clarity targets.</li>
            <li>Hand-cut benefits from tighter milling control and additional clarification steps if used in clarity-sensitive applications.</li>
        </ul>

        <h4 class="mt-6 font-headline text-xl font-bold">4) Sensory Outcomes</h4>
        <p><strong>Body and Mouthfeel:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Hand-cut</strong> tends to deliver a fuller body at equivalent brix due to slower diffusion of higher-molecular-weight Maillard products and colloids from denser sections.</li>
            <li><strong>Cubes</strong> produce clean, balanced profiles with less variability—favoring smooth, repeatable mouthfeel in large runs.</li>
        </ul>
        <p class="mt-4"><strong>Aroma and Roast Notes:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Hand-cut can accentuate roasty/nutty depth and “roaster’s signature,” attractive in espresso blends seeking bolder profiles.</li>
            <li>Cubes emphasize caramel/malty sweetness and a clean roasty line, useful for blended soluble and premix portfolios.</li>
        </ul>

        <h4 class="mt-6 font-headline text-xl font-bold">5) QA, Specs, and Predictability</h4>
         <p><strong>Color Metrics:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Cubes:</strong> Narrower roast color distributions; easier to lock down spectro/Lab* bands per SKU.</li>
            <li><strong>Hand-cut:</strong> Wider distributions; requires stricter curve control and post-roast QC.</li>
        </ul>
        <p class="mt-4"><strong>Moisture/aw:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Both require tight moisture and water activity; cubes’ uniformity eases control and forecasting of extraction performance.</li>
        </ul>
         <p class="mt-4"><strong>Particle/Cut Uniformity:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Cubes:</strong> Define cut windows (e.g., 6–12mm) and allowable variance to stabilize extraction curves.</li>
            <li><strong>Hand-cut:</strong> Specify sieve profiles and percentage out-of-spec; invest in supplier sorting to reduce tails.</li>
        </ul>

        <h4 class="mt-6 font-headline text-xl font-bold">6) Cost and Logistics</h4>
        <p><strong>Handling Efficiency:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Cubes flow and stack more predictably in bags and hoppers, reducing line losses and changeover time.</li>
            <li>Hand-cut may need adjusted conveying speeds and dust controls to manage irregular pieces and fines.</li>
        </ul>
        <p class="mt-4"><strong>Yield and Rework:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Cubes often reduce rework linked to off-spec roast color or extraction mis-hits.</li>
            <li>Hand-cut can add value where premium sensory outcomes justify slightly higher process attention.</li>
        </ul>

        <h3 class="mt-8 font-headline text-2xl font-bold">When to Prefer Each Input by Application</h3>
        <p><strong>Espresso/HoReCa Blend Inputs:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Prefer hand-cut for body and roasty depth; blend with cubes (e.g., 30–50%) to stabilize crema-supporting body while controlling fines.</li>
        </ul>
        <p class="mt-4"><strong>Soluble/Instant Coffee Integration:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Prefer cubes for predictable extraction, lower fines, and smoother spray/freeze-dry integration; consider limited hand-cut inclusion if a heavier roast note is desired.</li>
        </ul>
        <p class="mt-4"><strong>Beverage Premix (3-in-1/2-in-1) and Vending:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Prefer cubes to maintain consistency across large lots and simplify filtration in upstream extracts.</li>
        </ul>
        <p class="mt-4"><strong>RTD Coffee and Concentrates:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Prefer cubes to reduce sedimentation and ease cold filtration; if using hand-cut, add clarification steps (centrifugal polishing, depth filtration) and tighter grind controls.</li>
        </ul>

        <h3 class="mt-8 font-headline text-2xl font-bold">Spec Templates to Request from Suppliers</h3>
        <p><strong>Dried Chicory Cubes:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Cut size:</strong> define nominal range (e.g., 8–10mm) with max ± tolerance; <5% out-of-range.</li>
            <li><strong>Moisture/aw:</strong> tight limits suitable for target extraction and shelf stability.</li>
            <li><strong>Foreign matter:</strong> stringent visual and magnetic specs.</li>
            <li><strong>Post-roast color:</strong> specify spectro range per application (espresso vs. soluble vs. RTD).</li>
            <li><strong>Fines:</strong> set maximum fines percentage at receipt and after typical handling simulation.</li>
        </ul>
        <p class="mt-4"><strong>Hand-Cut Roots:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Sieve profile:</strong> define distribution bands (e.g., 6–12mm, 12–18mm) and max oversize/undersize.</li>
            <li><strong>Moisture/aw and foreign matter:</strong> same rigor as cubes.</li>
            <li><strong>Post-roast color:</strong> allow slightly wider band but set sensory anchors (caramel intensity, roasty depth).</li>
            <li><strong>Fines and dust:</strong> specify limits and receiving-screen procedure to remove loose fines prior to roasting/extraction.</li>
        </ul>

        <h3 class="mt-8 font-headline text-2xl font-bold">Trial and Scale-Up Protocol</h3>
        <p><strong>Bench Extraction:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Run side-by-side extractions at matched brix targets; record flow/pressure curves and filtration times to quantify fines impact.</li>
            <li>Capture spectro/Lab* of roasts and correlate to cup body and bitterness for both inputs.</li>
        </ul>
        <p class="mt-4"><strong>Filtration/Aging:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>For RTD, hold cold-stored samples for 7–14 days; quantify sediment layer height, turbidity (NTU), and sensory clarity.</li>
        </ul>
        <p class="mt-4"><strong>Espresso/Crema Benchmarks:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Standardize basket size and dose; evaluate crema height, persistence, and foam drainage. Cubes+hand-cut blends often outperform single-input systems on both stability and sensory depth.</li>
        </ul>
        <p class="mt-4"><strong>Cost/SOP Implications:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Model throughput, reject rates, rework, and filter media cost; cubes typically reduce filtration costs, while hand-cut may increase perceived cup value.</li>
        </ul>

        <h3 class="mt-8 font-headline text-2xl font-bold">Recommended Blending Strategies</h3>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Espresso-forward, bold profile:</strong> 60–70% hand-cut + 30–40% cubes for body and crema-friendly viscosity with manageable fines.</li>
            <li><strong>Balanced soluble/premix:</strong> 80–90% cubes + 10–20% hand-cut for a clean, sweet-roasty line and predictable extraction.</li>
            <li><strong>RTD clarity-first:</strong> 90–100% cubes; if body is insufficient, increase roast development slightly or add a small hand-cut fraction and upgrade filtration.</li>
        </ul>
        
        <h3 class="mt-8 font-headline text-2xl font-bold">How RSI Chicory Supports Both Options</h3>
        <p><strong>Contract Farming and On-Farm Drying:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Consistent raw root quality, on-farm dicing, and 48-hour sun drying standardize moisture and density before factory roasting.</li>
        </ul>
        <p class="mt-4"><strong>SKU Availability:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Dried Chicory Cubes and Hand-Cut Roots produced in parallel, allowing rapid A/B trials and mixed-input procurement.</li>
        </ul>
        <p class="mt-4"><strong>Industrial Roasting at Etah:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Controlled roast curves for tight color windows; application-specific profiles for espresso, instant, and RTD.</li>
        </ul>
        <p class="mt-4"><strong>QA and Logistics:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mt-4">
            <li>Tight moisture/aw specs, sieve/cut distribution reporting, fines control, and palletized export packaging designed for long-haul routes.</li>
        </ul>
    `,
    faq: [
        {
            question: "Excess fines causing filter blinding",
            answer: "Switch higher fraction to cubes; add pre-screening; reduce mechanical stress in conveying."
        },
        {
            question: "Inconsistent roast color with hand-cut",
            answer: "Lower batch load, extend development, improve bed agitation, or tighten cut distribution."
        },
        {
            question: "RTD sedimentation",
            answer: "Use cubes, implement two-stage filtration (depth + membrane), and optimize cold hold before fill."
        },
        {
            question: "Thin mouthfeel at target brix",
            answer: "Increase hand-cut fraction modestly; adjust roast development to boost melanoidin formation."
        }
    ]
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find((p) => p.slug === slug);
};
