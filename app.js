// Application data
const appData = {
  "machine_specs": {
    "model": "GIGA 10",
    "grinders": 2,
    "display": "6.7 inch Panorama Coffee Panel",
    "specialties": 35,
    "water_capacity": "2.6L",
    "bean_capacity": "560g",
    "power": "1500W",
    "dimensions": "16.3 x 12.6 x 19.5 in",
    "weight": "36.8 lb"
  },
  "setup_steps": [
    {
      "step": 1,
      "title": "Machine Placement",
      "description": "Place the GIGA on a horizontal surface that is not sensitive to water. Choose a spot that protects against overheating and ensure ventilation slats are not covered.",
      "tips": ["Keep away from heat sources", "Ensure 6 inches clearance on all sides", "Use a stable, level surface"],
      "image": "https://pplx-res.cloudinary.com/image/upload/v1759860644/pplx_project_search_images/cbf83bc72bd416c4f0239b382861e4eab743dc81.png"
    },
    {
      "step": 2,
      "title": "Fill Bean Containers",
      "description": "Remove aroma preservation covers, clean containers, fill with roasted untreated coffee beans, and close covers.",
      "tips": ["Use only roasted, untreated coffee beans", "Don't use oily or flavored beans", "Fill both containers for dual grinder functionality"],
      "image": "https://pplx-res.cloudinary.com/image/upload/v1759860644/pplx_project_search_images/2fa2405ef179fd144bcbe39281e2e77d7fd8b1e0.png"
    },
    {
      "step": 3,
      "title": "Water Hardness Testing",
      "description": "Use the supplied Aquadur test strips to determine your water hardness level.",
      "tips": ["Hold strip under running water for 1 second", "Wait 1 minute for results", "Match colors to packaging chart"],
      "image": "https://pplx-res.cloudinary.com/image/upload/v1759860644/pplx_project_search_images/461b9692367a84b802297cf12bb1b8934e95de5a.png"
    },
    {
      "step": 4,
      "title": "Power Connection",
      "description": "Connect power cord, plug into outlet, switch on at power switch, then press On/Off button.",
      "tips": ["Use dedicated outlet", "Ensure power switch is in ON position", "Machine will display language selection"],
      "image": "https://pplx-res.cloudinary.com/image/upload/v1759860643/pplx_project_search_images/4c39d06887529ef2afb5ffee705755324efa23fc.png"
    },
    {
      "step": 5,
      "title": "Initial Configuration",
      "description": "Follow on-screen prompts to set language, time format, date, time, and water hardness.",
      "tips": ["Take your time with each setting", "Water hardness affects descaling schedule", "Settings can be changed later"],
      "image": "https://pplx-res.cloudinary.com/image/upload/v1759860643/pplx_project_search_images/6b9b79894c3e758ae734b35cdd6a700653db77cf.png"
    },
    {
      "step": 6,
      "title": "Filter Installation",
      "description": "Install CLEARYL Smart filter with extension into water tank, then fill with fresh cold water.",
      "tips": ["Filter extends machine life", "Use only cold water", "Filter will be automatically detected"],
      "image": "https://pplx-res.cloudinary.com/image/upload/v1759860643/pplx_project_search_images/6b9b79894c3e758ae734b35cdd6a700653db77cf.png"
    }
  ],
  "components": [
    {"name": "Bean Containers", "description": "Two separate containers for different coffee types, each with own grinder", "location": "Top of machine", "care": "Clean monthly, use only roasted beans"},
    {"name": "Water Tank", "description": "2.6L capacity removable tank with filter system", "location": "Back/side of machine", "care": "Refill daily with cold water, clean weekly"},
    {"name": "Dual Spout", "description": "Height and width adjustable coffee dispensing spout", "location": "Front center", "care": "Clean daily, especially milk system components"},
    {"name": "Touchscreen Display", "description": "6.7 inch Panorama Coffee Panel for operation", "location": "Front panel", "care": "Clean with soft damp cloth"},
    {"name": "Drip Tray", "description": "Collects overflow and drips, includes coffee grounds container", "location": "Bottom front", "care": "Empty and clean daily"},
    {"name": "Hot Water Spout", "description": "Separate spout for hot water and tea", "location": "Right side", "care": "Clean weekly, descale as needed"}
  ],
  "popular_drinks": [
    {"name": "Espresso", "description": "Strong, concentrated coffee shot", "steps": ["Place cup under spout", "Touch Espresso on screen", "Wait for brewing"], "customization": ["Strength: 8 levels", "Size: XS to XXL", "Temperature: 3 levels"]},
    {"name": "Cappuccino", "description": "Espresso with steamed milk and foam", "steps": ["Connect milk tube", "Place cup under dual spout", "Touch Cappuccino", "Enjoy layered drink"], "customization": ["Milk foam ratio", "Extra shot option", "Temperature control"]},
    {"name": "Latte Macchiato", "description": "Layered drink with milk, espresso, and foam", "steps": ["Use clear glass to see layers", "Connect milk system", "Touch Latte Macchiato", "Watch layers form"], "customization": ["Layer timing", "Milk temperature", "Coffee strength"]},
    {"name": "Cold Brew Coffee", "description": "Cold extraction for smooth, less acidic coffee", "steps": ["Fill tank with cold water", "Add ice to glass", "Touch Aroma Selection", "Select Cold Brew option"], "customization": ["Water temperature", "Brewing time", "Strength level"]}
  ],
  "common_problems": [
    {
      "problem": "Machine won't turn on",
      "causes": ["Power connection", "Outlet issue", "Power switch position"],
      "solutions": ["Check power cord connection", "Try different outlet", "Ensure power switch is ON", "Reset by unplugging for 30 seconds"]
    },
    {
      "problem": "Weak or watery coffee",
      "causes": ["Grind too coarse", "Low strength setting", "Stale beans"],
      "solutions": ["Adjust grinder to finer setting", "Increase coffee strength", "Use fresh beans", "Check bean type compatibility"]
    },
    {
      "problem": "No water flow",
      "causes": ["Empty tank", "Clogged lines", "Scale buildup"],
      "solutions": ["Fill water tank", "Clean water lines", "Run descaling cycle", "Check filter installation"]
    },
    {
      "problem": "Error messages",
      "causes": ["System fault", "Maintenance needed", "Component issue"],
      "solutions": ["Restart machine", "Check maintenance status", "Clean components", "Contact support if persistent"]
    }
  ],
  "maintenance_schedule": {
    "daily": ["Empty drip tray", "Clean milk system", "Refill water tank", "Wipe exterior"],
    "weekly": ["Deep clean drip tray", "Rinse water tank", "Clean cup platform", "Check bean levels"],
    "monthly": ["Clean bean containers", "Replace milk tube", "Deep clean dual spout", "Check filter status"],
    "as_needed": ["Descale machine", "Replace filter", "Professional service", "Replace worn parts"]
  }
};

// Global state
let currentStep = 1;
let currentScreen = 'welcome-screen';
let setupProgress = {};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load saved progress
    loadProgress();
    
    // Initialize components
    renderComponents();
    renderDrinks();
    renderTroubleshooting();
    renderMaintenance();
    renderSpecs();
    renderSetupWizard();
    
    // Show welcome screen
    showScreen('welcome-screen');
}

// Screen management
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        currentScreen = screenId;
        
        // Screen-specific initialization
        if (screenId === 'setup-wizard') {
            initializeSetupWizard();
        } else if (screenId === 'maintenance') {
            showMaintenanceTab('daily');
        }
    }
}

// Setup Wizard
function renderSetupWizard() {
    const wizardContent = document.getElementById('wizard-content');
    wizardContent.innerHTML = '';
    
    appData.setup_steps.forEach((stepData, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = `wizard-step ${index === 0 ? 'active' : ''}`;
        stepDiv.id = `step-${stepData.step}`;
        
        stepDiv.innerHTML = `
            <h3>Step ${stepData.step}: ${stepData.title}</h3>
            <img src="${stepData.image}" alt="${stepData.title}" style="max-width: 100%; border-radius: 8px;">
            <p>${stepData.description}</p>
            <div class="step-tips">
                <h4>💡 Pro Tips:</h4>
                <ul>
                    ${stepData.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        `;
        
        wizardContent.appendChild(stepDiv);
    });
}

function initializeSetupWizard() {
    currentStep = 1;
    updateWizardProgress();
    showWizardStep(1);
}

function nextStep() {
    if (currentStep < appData.setup_steps.length) {
        setupProgress[`step_${currentStep}`] = true;
        currentStep++;
        showWizardStep(currentStep);
        updateWizardProgress();
        saveProgress();
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        showWizardStep(currentStep);
        updateWizardProgress();
    }
}

function showWizardStep(stepNum) {
    // Hide all steps
    const steps = document.querySelectorAll('.wizard-step');
    steps.forEach(step => step.classList.remove('active'));
    
    // Show current step
    const currentStepElement = document.getElementById(`step-${stepNum}`);
    if (currentStepElement) {
        currentStepElement.classList.add('active');
    }
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prev-step');
    const nextBtn = document.getElementById('next-step');
    
    prevBtn.disabled = stepNum === 1;
    
    if (stepNum === appData.setup_steps.length) {
        nextBtn.textContent = 'Complete Setup';
        nextBtn.onclick = () => {
            setupProgress[`step_${currentStep}`] = true;
            saveProgress();
            showScreen('main-menu');
            showModal('Setup Complete!', 'Congratulations! Your GIGA 10 is now ready to brew amazing coffee. Explore the other sections to learn about drinks, maintenance, and troubleshooting.');
        };
    } else {
        nextBtn.textContent = 'Next';
        nextBtn.onclick = nextStep;
    }
}

function updateWizardProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    const percentage = (currentStep / appData.setup_steps.length) * 100;
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `Step ${currentStep} of ${appData.setup_steps.length}`;
}

// Components Guide
function renderComponents() {
    const componentsList = document.getElementById('components-list');
    componentsList.innerHTML = '';
    
    appData.components.forEach((component, index) => {
        const componentDiv = document.createElement('div');
        componentDiv.className = 'component-item';
        componentDiv.id = `component-${index}`;
        
        componentDiv.innerHTML = `
            <h4>${component.name}</h4>
            <div class="location">📍 ${component.location}</div>
            <p>${component.description}</p>
            <div class="care">🧽 Care: ${component.care}</div>
        `;
        
        componentsList.appendChild(componentDiv);
    });
}

function showComponent(index) {
    // Remove active class from all components
    const components = document.querySelectorAll('.component-item');
    components.forEach(comp => comp.classList.remove('active'));
    
    // Add active class to selected component
    const selectedComponent = document.getElementById(`component-${index}`);
    if (selectedComponent) {
        selectedComponent.classList.add('active');
        selectedComponent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Drinks Guide
function renderDrinks() {
    const drinksGrid = document.getElementById('drinks-grid');
    drinksGrid.innerHTML = '';
    
    appData.popular_drinks.forEach(drink => {
        const drinkDiv = document.createElement('div');
        drinkDiv.className = 'drink-card';
        
        drinkDiv.innerHTML = `
            <h3>${drink.name}</h3>
            <p>${drink.description}</p>
            <div class="drink-steps">
                <h4>Steps:</h4>
                <ol>
                    ${drink.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
            <div class="customization">
                <h4>Customization Options:</h4>
                <ul>
                    ${drink.customization.map(option => `<li>${option}</li>`).join('')}
                </ul>
            </div>
        `;
        
        drinkDiv.onclick = () => {
            showModal(drink.name, `
                <p><strong>Description:</strong> ${drink.description}</p>
                <div class="drink-steps">
                    <h4>Brewing Steps:</h4>
                    <ol>
                        ${drink.steps.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
                <div class="customization">
                    <h4>Customization Options:</h4>
                    <ul>
                        ${drink.customization.map(option => `<li>${option}</li>`).join('')}
                    </ul>
                </div>
            `);
        };
        
        drinksGrid.appendChild(drinkDiv);
    });
}

// Troubleshooting
function renderTroubleshooting() {
    const troubleshootingList = document.getElementById('troubleshooting-list');
    troubleshootingList.innerHTML = '';
    
    appData.common_problems.forEach((problem, index) => {
        const problemDiv = document.createElement('div');
        problemDiv.className = 'trouble-item';
        problemDiv.id = `trouble-${index}`;
        
        problemDiv.innerHTML = `
            <div class="trouble-header" onclick="toggleTrouble(${index})">
                <h4>${problem.problem}</h4>
                <span class="trouble-toggle">+</span>
            </div>
            <div class="trouble-content">
                <div class="trouble-causes">
                    <h5>Possible Causes:</h5>
                    <ul>
                        ${problem.causes.map(cause => `<li>${cause}</li>`).join('')}
                    </ul>
                </div>
                <div class="trouble-solutions">
                    <h5>Solutions:</h5>
                    <ul>
                        ${problem.solutions.map(solution => `<li>${solution}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        troubleshootingList.appendChild(problemDiv);
    });
}

function toggleTrouble(index) {
    const troubleItem = document.getElementById(`trouble-${index}`);
    troubleItem.classList.toggle('expanded');
}

function filterTroubleshooting() {
    const searchTerm = document.getElementById('trouble-search').value.toLowerCase();
    const troubleItems = document.querySelectorAll('.trouble-item');
    
    troubleItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Maintenance
function renderMaintenance() {
    const maintenanceContent = document.getElementById('maintenance-content');
    // This will be populated when a tab is selected
}

function showMaintenanceTab(period) {
    // Update tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    event?.target?.classList.add('active') || document.querySelector(`[onclick="showMaintenanceTab('${period}')"]`)?.classList.add('active');
    
    // Render maintenance tasks
    const maintenanceContent = document.getElementById('maintenance-content');
    const tasks = appData.maintenance_schedule[period];
    
    maintenanceContent.innerHTML = `
        <h3>${period.charAt(0).toUpperCase() + period.slice(1).replace('_', ' ')} Maintenance</h3>
        <div class="maintenance-list">
            ${tasks.map((task, index) => `
                <div class="maintenance-task">
                    <div class="task-checkbox" onclick="toggleTask(this)">
                        <span style="display: none;">✓</span>
                    </div>
                    <span class="task-text">${task}</span>
                </div>
            `).join('')}
        </div>
    `;
}

function toggleTask(checkbox) {
    checkbox.classList.toggle('checked');
    const checkmark = checkbox.querySelector('span');
    if (checkbox.classList.contains('checked')) {
        checkmark.style.display = 'block';
    } else {
        checkmark.style.display = 'none';
    }
}

// Quick Reference
function renderSpecs() {
    const specsGrid = document.getElementById('specs-grid');
    specsGrid.innerHTML = '';
    
    Object.entries(appData.machine_specs).forEach(([key, value]) => {
        const specDiv = document.createElement('div');
        specDiv.className = 'spec-item';
        
        const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        
        specDiv.innerHTML = `
            <div class="spec-label">${label}</div>
            <div class="spec-value">${value}</div>
        `;
        
        specsGrid.appendChild(specDiv);
    });
}

// Modal functionality
function showModal(title, content) {
    const modal = document.getElementById('info-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('info-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Progress management
function saveProgress() {
    try {
        localStorage.setItem('jura_giga10_progress', JSON.stringify(setupProgress));
    } catch (e) {
        // LocalStorage not available, continue without saving
        console.log('Progress saving not available');
    }
}

function loadProgress() {
    try {
        const saved = localStorage.getItem('jura_giga10_progress');
        if (saved) {
            setupProgress = JSON.parse(saved);
        }
    } catch (e) {
        // LocalStorage not available or corrupted, start fresh
        setupProgress = {};
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Touch/click outside modal to close
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

// Additional utility functions
function resetProgress() {
    setupProgress = {};
    saveProgress();
    currentStep = 1;
    updateWizardProgress();
    showWizardStep(1);
}

// Smooth scrolling for better UX
function smoothScroll(target) {
    document.querySelector(target)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Initialize maintenance tabs on load
document.addEventListener('DOMContentLoaded', function() {
    // Set default active tab
    const dailyTab = document.querySelector('[onclick="showMaintenanceTab(\'daily\')"]');
    if (dailyTab) {
        dailyTab.classList.add('active');
    }
});