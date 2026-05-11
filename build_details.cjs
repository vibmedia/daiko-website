const fs = require('fs');

const projects = [
  {
    file: 'project-ghaziabad-metro.html',
    title: 'Ghaziabad Metro Extension — Phase 2',
    navBreadcrumb: 'Home > Projects > Ghaziabad Metro Extension',
    tag: 'Monitoring',
    location: 'Ghaziabad, UP',
    img: 'https://images.unsplash.com/photo-1590483863481-9b6f3b0e3535?auto=format&fit=crop&w=1920&q=80',
    desc: 'Deployed 45 IoT sensors across 3 active construction zones to monitor structural vibration, dust levels, and equipment runtime.',
    challenges: 'The key challenge was ensuring zero disruption to existing traffic while continuously monitoring vibrations that could affect nearby heritage structures. Manual monitoring was slow and prone to errors.',
    solutions: 'We deployed a wireless network of precision IoT accelerometers and dust sensors. A centralized dashboard provided real-time alerts to engineers if vibration limits were approached.',
    outcomes: 'Achieved 28% reduction in unplanned downtime. Zero safety incidents reported related to structural integrity during the 14-month construction phase.'
  },
  {
    file: 'project-noida-it-park.html',
    title: 'Noida IT Park Complex',
    navBreadcrumb: 'Home > Projects > Noida IT Park',
    tag: 'Management',
    location: 'Noida, UP',
    img: 'https://images.unsplash.com/photo-1577903206126-17bba1bb3e10?auto=format&fit=crop&w=1920&q=80',
    desc: 'Implemented cloud-based BIM collaboration platform for a 12-story commercial complex.',
    challenges: 'Coordination between 8 different contractor teams led to frequent document conflicts, outdated plans being used on-site, and subsequent rework which was inflating the budget.',
    solutions: 'Integrated our Cloud Project Management suite. All contractors were mandated to use tablets on-site linked to the live BIM model, ensuring everyone worked from the single source of truth.',
    outcomes: 'Reduced document conflicts by 60%. Saved an estimated ₹1.5Cr in rework costs and delivered the structural phase 3 weeks ahead of schedule.'
  },
  {
    file: 'project-rajasthan-highway.html',
    title: 'Rajasthan Highway Widening Project',
    navBreadcrumb: 'Home > Projects > Rajasthan Highway',
    tag: 'Consulting',
    location: 'Jaipur, Rajasthan',
    img: 'https://images.unsplash.com/photo-1542361661-eb337fde2278?auto=format&fit=crop&w=1920&q=80',
    desc: 'Provided structural analysis and quality assurance consulting for a 45km highway widening project.',
    challenges: 'The soil composition varied drastically along the 45km stretch, posing a major risk of uneven settling and future road surface degradation.',
    solutions: 'Our civil engineering consultants conducted extensive geotechnical surveys and utilized advanced simulation software to redesign the sub-base layer specifically for the problematic zones.',
    outcomes: 'Identified 12 critical design issues during pre-construction review. The reinforced design improved projected road longevity by 15 years with minimal added material costs.'
  },
  {
    file: 'project-delhi-warehouse.html',
    title: 'Delhi NCR Warehouse Facility',
    navBreadcrumb: 'Home > Projects > Delhi NCR Warehouse',
    tag: 'Monitoring',
    location: 'Greater Noida, UP',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80',
    desc: 'Installed comprehensive environmental monitoring system covering 200,000 sq ft warehouse construction.',
    challenges: 'High worker density in an enclosed warehouse space raised concerns about air quality and PPE compliance, especially during the COVID-recovery phase.',
    solutions: 'We installed computer-vision enabled cameras to automatically detect PPE (Local/Cloud hybrid approach) and ambient sensors to measure AQI inside the warehouse limits.',
    outcomes: 'Real-time PPE compliance tracking for 150+ workers led to a 95% compliance rate within week 2. Maintained zero OSHA-equivalent violations.'
  },
  {
    file: 'project-indirapuram-complex.html',
    title: 'Indirapuram Residential Complex',
    navBreadcrumb: 'Home > Projects > Indirapuram Residential',
    tag: 'Management',
    location: 'Ghaziabad, UP',
    img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1920&q=80',
    desc: 'Managed procurement and vendor coordination for a 400-unit residential project.',
    challenges: 'Supply chain disruptions were causing massive delays in material deliveries (cement, steel), idling the workforce and pushing back milestone dates.',
    solutions: 'Implemented our Supplier Portal where vendors updated dispatch statuses live. Predictive AI flagged potential delays 7 days in advance, allowing managers to source alternatives.',
    outcomes: 'Streamlined material delivery scheduling, reducing logistics delays by 40%. Kept the project strictly on its critical path timeline.'
  },
  {
    file: 'project-manufacturing-plant.html',
    title: 'Industrial Manufacturing Plant',
    navBreadcrumb: 'Home > Projects > Manufacturing Plant',
    tag: 'Consulting',
    location: 'Manesar, Haryana',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1920&q=80',
    desc: 'Conducted geotechnical survey and foundation design review for a 50,000 sq ft manufacturing facility.',
    challenges: 'The heavy machinery to be installed required incredibly tight tolerances on foundation settling, which the initial contractor designs did not adequately address.',
    solutions: 'Re-engineered the foundation using deep-pile techniques optimized through 3D load modeling. Handled all revised regulatory paperwork for the client.',
    outcomes: 'Completed regulatory approval documentation in record time. Post-installation checks revealed settling was 40% below the allowable maximum threshold.'
  }
];

const services = [
  {
    file: 'service-smart-monitoring.html',
    title: 'Smart Site Monitoring',
    navBreadcrumb: 'Home > Services > Smart Site Monitoring',
    img: 'https://images.unsplash.com/photo-1621045244510-91102e77519a?auto=format&fit=crop&w=1920&q=80',
    desc: 'Our IoT-powered monitoring platform connects sensors across your construction sites to provide real-time visibility.',
    challenges: 'Traditional site monitoring relies on manual inspections which are periodic, subjective, and slow. By the time an issue is noticed—be it excess vibration, dust, or failing equipment—the damage or delay has often already occurred.',
    solutions: 'We deploy cutting-edge IoT nodes that measure environmental and structural data 24/7. This data is streamed to a custom analytics dashboard. Machine learning algorithms analyze trends to predict equipment failures and safety risks before they happen.',
    outcomes: 'Clients experience up to 35% less unplanned downtime, significantly lower insurance premiums due to verified safety compliance, and a massive reduction in manual site-walk hours.'
  },
  {
    file: 'service-cloud-management.html',
    title: 'Cloud Project Management',
    navBreadcrumb: 'Home > Services > Cloud Project Management',
    img: 'https://images.unsplash.com/photo-1541888086925-0c13d4f47852?auto=format&fit=crop&w=1920&q=80',
    desc: 'Centralized platform for architects, engineers, and project managers to collaborate in real-time.',
    challenges: 'Siloed communication and outdated blueprints have plagued large-scale construction for decades. Email chains and fragmented spreadsheets lead to expensive miscommunications and rework on site.',
    solutions: 'Daiko offers a unified cloud application designed specifically for construction variables. It hosts the master BIM model, live Gantt charts, and integrated issue-tracking. Field workers can raise RFIs (Requests for Information) directly from their tablets.',
    outcomes: 'Dramatic reduction in document conflicts (up to 60%). Projects are typically delivered 10-15% faster due to the elimination of communication bottlenecks and alignment of all stakeholders.'
  },
  {
    file: 'service-civil-consulting.html',
    title: 'Civil Engineering Consulting',
    navBreadcrumb: 'Home > Services > Civil Engineering Consulting',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80',
    desc: 'Expert consulting for industrial infrastructure projects, from feasibility to regulatory approvals.',
    challenges: 'Navigating complex local regulations, optimizing structural designs for new materials, and predicting long-term environmental impacts are overwhelming for many developers without specialized in-house talent.',
    solutions: 'Our seasoned civil engineers act as an extension of your team. We use advanced finite element analysis (FEA) and deep knowledge of Indian infrastructure codes to vet and optimize designs. We also handle the labyrinth of regulatory permitting.',
    outcomes: 'Structurally sound, compliant, and cost-optimized buildings. Our value engineering typically saves clients 5-8% on raw material costs without compromising safety or aesthetics.'
  },
  {
    file: 'service-equipment.html',
    title: 'Equipment & Procurement',
    navBreadcrumb: 'Home > Services > Equipment & Procurement',
    img: 'https://images.unsplash.com/photo-1581093582496-e2609c2a38da?auto=format&fit=crop&w=1920&q=80',
    desc: 'Streamlined procurement of industrial equipment and materials through our vendor management platform.',
    challenges: 'Procuring heavy machinery and bulk materials is fraught with opaque pricing, unreliable delivery schedules, and inconsistent quality—all of which jeopardize the project timeline and budget.',
    solutions: 'We leverage a tightly vetted network of suppliers integrated into our digital procurement portal. We handle the RFQs, quality assurance inspections at the factory level, and logistics tracking right to your site gate.',
    outcomes: 'Transparent pricing, guaranteed quality standards, and just-in-time delivery that minimizes warehousing costs. Clients enjoy peace of mind knowing their supply chain is actively managed.'
  }
];

const baseTemplate = fs.readFileSync('about.html', 'utf-8');

function generatePage(item, isProject) {
  let content = baseTemplate.replace(/<title>.*?<\/title>/, `<title>${item.title} | Daiko Industrial Solutions</title>`);
  
  const locationHtml = item.location ? `<span class="project-tag" style="background:var(--primary); color:white; padding: 4px 12px; border-radius: 4px; font-size: 0.9rem; margin-right: 12px;">${item.tag}</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position:relative; top:3px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> ${item.location}` : '';

  // Hero section
  content = content.replace(/<section class="page-hero".*?<\/section>/s, `
  <section class="page-hero" style="background-image: url('${item.img}')">
    <div class="page-hero-overlay"></div>
    <div class="container fade-up" style="position: relative; z-index: 2;">
      <div class="breadcrumb">${item.navBreadcrumb}</div>
      <h1>${item.title}</h1>
      <p>${locationHtml}</p>
    </div>
  </section>
  `);

  const detailLayout = `
  <section class="container fade-up" style="padding: 80px 0;">
    <div class="grid-2">
      <div>
        <h2 class="section-title">Overview</h2>
        <p class="section-desc" style="max-width: 100%;">${item.desc}</p>
        
        <div style="margin-top: 40px;">
          <h3 style="color: var(--primary); margin-bottom: 16px;">Key Challenges</h3>
          <p style="margin-bottom: 32px; line-height: 1.8;">${item.challenges}</p>
          
          <h3 style="color: var(--accent); margin-bottom: 16px;">Solutions Provided</h3>
          <p style="margin-bottom: 32px; line-height: 1.8;">${item.solutions}</p>
          
          <h3 style="color: var(--primary); margin-bottom: 16px;">Outcomes</h3>
          <p style="line-height: 1.8;">${item.outcomes}</p>
        </div>
        
        <div style="margin-top: 56px;">
          <a href="${isProject ? 'projects.html' : 'services.html'}" class="btn btn-outline-dark" style="border: 2px solid var(--primary); padding: 12px 26px; border-radius: 8px;">Back to ${isProject ? 'Projects' : 'Services'}</a>
          <a href="contact.html" class="btn btn-primary" style="margin-left: 10px;">${isProject ? 'Discuss Your Project' : 'Inquire Now'}</a>
        </div>
      </div>
      <div>
        <div class="card" style="position: sticky; top: 100px; padding: 24px;">
          <img src="${item.img}" alt="${item.title}" style="width: 100%; border-radius: 8px; margin-bottom: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
          <h4 style="margin-bottom: 16px;">Have a similar requirement?</h4>
          <p style="font-size: 0.95rem; margin-bottom: 24px; color: #4A4A68;">Contact our team to understand how Daiko can implement these solutions for your precise needs.</p>
          <a href="contact.html" class="btn btn-primary" style="width: 100%; text-align: center;">Contact Us</a>
        </div>
      </div>
    </div>
  </section>
  `;

  content = content.replace(/<!-- Our Story -->.*<!-- Vision & Mission -->/s, `<!-- Detail Section -->\n${detailLayout}\n  <!-- End Detail Section -->\n`);
  
  // Remove Leadership, Facts, Certifications
  content = content.replace(/<!-- Leadership -->.*<!-- Footer -->/s, '<!-- Footer -->');
  
  // Adjust active nav link
  content = content.replace(/class="nav-link active"/g, 'class="nav-link"');
  if (isProject) {
    content = content.replace('href="projects.html" class="nav-link"', 'href="projects.html" class="nav-link active"');
  } else {
    content = content.replace('href="services.html" class="nav-link"', 'href="services.html" class="nav-link active"');
  }

  fs.writeFileSync(item.file, content);
}

projects.forEach(p => generatePage(p, true));
services.forEach(s => generatePage(s, false));

console.log("Details built successfully.");
