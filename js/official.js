// Official Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // No authentication check needed
    
    // Update user name in navbar
    const userDropdown = document.getElementById('userDropdown');
    if (userDropdown) {
        userDropdown.innerHTML = `<i class="fas fa-user-circle me-1"></i> Maria Dela Cruz`;
    }
    
    // Tab navigation
    setupTabNavigation();
    
    // Form handling
    setupResidentForm();
    setupCaseForm();
    
    // Initialize charts
    initializeCharts();
    
    // Initialize any official-specific functionality
    initializeOfficialDashboard();
});

// Remove the authentication check functions
// Keep all other functions as they are

function setupTabNavigation() {
    // Handle sidebar navigation
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding tab
            const tabId = this.getAttribute('data-tab');
            showTab(tabId);
            
            // If analytics tab, refresh charts
            if (tabId === 'analytics') {
                setTimeout(initializeCharts, 100);
            }
        });
    });
    
    // Handle quick action buttons
    const quickActionButtons = document.querySelectorAll('.btn-tab');
    quickActionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            
            // Update sidebar active state
            navLinks.forEach(l => l.classList.remove('active'));
            const correspondingNavLink = document.querySelector(`.sidebar .nav-link[data-tab="${tabId}"]`);
            if (correspondingNavLink) {
                correspondingNavLink.classList.add('active');
            }
            
            // Show tab
            showTab(tabId);
        });
    });
}

function showTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
        
        // Scroll to top of content area
        document.querySelector('.content-area').scrollTop = 0;
    }
}

function setupResidentForm() {
    const saveButton = document.getElementById('saveResident');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            const name = document.getElementById('residentName').value;
            const age = document.getElementById('residentAge').value;
            const gender = document.getElementById('residentGender').value;
            const zone = document.getElementById('residentZone').value;
            const category = document.getElementById('residentCategory').value;
            const contact = document.getElementById('residentContact').value;
            const address = document.getElementById('residentAddress').value;
            
            if (!name || !age || !gender || !zone || !category) {
                showOfficialAlert('Please fill in all required fields.', 'warning');
                return;
            }
            
            // Simulate resident addition
            simulateAddResident(name, age, gender, zone, category, contact, address);
        });
    }
}

function setupCaseForm() {
    const saveButton = document.getElementById('saveCase');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            const description = document.getElementById('caseDescription').value;
            const parties = document.getElementById('caseParties').value;
            const date = document.getElementById('caseDate').value;
            const official = document.getElementById('caseOfficial').value;
            
            if (!description || !parties || !date || !official) {
                showOfficialAlert('Please fill in all required fields.', 'warning');
                return;
            }
            
            // Simulate case reporting
            simulateAddCase(description, parties, date, official);
        });
    }
}

function simulateAddResident(name, age, gender, zone, category, contact, address) {
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addResidentModal'));
    modal.hide();
    
    // Show success message
    showOfficialAlert('Resident added successfully!', 'success');
    
    // Add to blockchain (simulated)
    addToBlockchain('resident_added', {
        name: name,
        age: age,
        gender: gender,
        zone: zone,
        category: category,
        contact: contact,
        address: address,
        timestamp: new Date().toISOString()
    });
    
    // Reset form
    document.getElementById('addResidentForm').reset();
}

function simulateAddCase(description, parties, date, official) {
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addCaseModal'));
    modal.hide();
    
    // Show success message
    showOfficialAlert('Case reported successfully!', 'success');
    
    // Add to blockchain (simulated)
    addToBlockchain('case_reported', {
        description: description,
        parties: parties,
        date: date,
        official: official,
        timestamp: new Date().toISOString()
    });
    
    // Reset form
    document.getElementById('addCaseForm').reset();
}

function addToBlockchain(action, data) {
    // Simulate blockchain transaction
    console.log(`Adding to blockchain: ${action}`, data);
    
    // In a real implementation, this would make an API call to your blockchain service
    // For this mockup, we'll just log to console
    const hash = '0x' + Math.random().toString(16).substr(2, 16) + Math.random().toString(16).substr(2, 16);
    console.log(`Blockchain hash: ${hash}`);
    
    // Update blockchain logs table (in a real app, this would be done via API response)
    updateBlockchainLogs(action, data, hash);
}

function updateBlockchainLogs(action, data, hash) {
    // In a real app, this would update the table with data from the server
    console.log('Updating blockchain logs...');
}

function showOfficialAlert(message, type) {
    // Remove any existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert alert at the top of the content area
    const contentArea = document.querySelector('.content-area');
    const firstChild = contentArea.firstChild;
    contentArea.insertBefore(alertDiv, firstChild);
    
    // Auto dismiss after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

function initializeCharts() {
    // Population by Zone Chart
    const zoneCtx = document.getElementById('zoneChart');
    if (zoneCtx) {
        new Chart(zoneCtx, {
            type: 'bar',
            data: {
                labels: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5'],
                datasets: [{
                    label: 'Residents',
                    data: [245, 280, 265, 230, 230],
                    backgroundColor: [
                        'rgba(52, 152, 219, 0.7)',
                        'rgba(46, 204, 113, 0.7)',
                        'rgba(155, 89, 182, 0.7)',
                        'rgba(241, 196, 15, 0.7)',
                        'rgba(230, 126, 34, 0.7)'
                    ],
                    borderColor: [
                        'rgb(52, 152, 219)',
                        'rgb(46, 204, 113)',
                        'rgb(155, 89, 182)',
                        'rgb(241, 196, 15)',
                        'rgb(230, 126, 34)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Residents per Zone'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Residents'
                        }
                    }
                }
            }
        });
    }
    
    // Resident Categories Chart
    const categoryCtx = document.getElementById('categoryChart');
    if (categoryCtx) {
        new Chart(categoryCtx, {
            type: 'doughnut',
            data: {
                labels: ['Regular', 'Senior Citizen', 'PWD'],
                datasets: [{
                    data: [980, 185, 85],
                    backgroundColor: [
                        'rgba(52, 152, 219, 0.7)',
                        'rgba(46, 204, 113, 0.7)',
                        'rgba(155, 89, 182, 0.7)'
                    ],
                    borderColor: [
                        'rgb(52, 152, 219)',
                        'rgb(46, 204, 113)',
                        'rgb(155, 89, 182)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: 'Resident Categories'
                    }
                }
            }
        });
    }
    
    // Document Requests Chart
    const documentCtx = document.getElementById('documentChart');
    if (documentCtx) {
        new Chart(documentCtx, {
            type: 'pie',
            data: {
                labels: ['Barangay Clearance', 'Certificate of Indigency', 'Certificate of Residency', 'Business Clearance'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: [
                        'rgba(52, 152, 219, 0.7)',
                        'rgba(46, 204, 113, 0.7)',
                        'rgba(155, 89, 182, 0.7)',
                        'rgba(241, 196, 15, 0.7)'
                    ],
                    borderColor: [
                        'rgb(52, 152, 219)',
                        'rgb(46, 204, 113)',
                        'rgb(155, 89, 182)',
                        'rgb(241, 196, 15)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: 'Document Requests by Type'
                    }
                }
            }
        });
    }
    
    // Case Status Chart
    const caseCtx = document.getElementById('caseChart');
    if (caseCtx) {
        new Chart(caseCtx, {
            type: 'polarArea',
            data: {
                labels: ['Resolved', 'Under Investigation', 'Mediation Scheduled', 'Pending'],
                datasets: [{
                    data: [35, 15, 10, 5],
                    backgroundColor: [
                        'rgba(46, 204, 113, 0.7)',
                        'rgba(52, 152, 219, 0.7)',
                        'rgba(241, 196, 15, 0.7)',
                        'rgba(231, 76, 60, 0.7)'
                    ],
                    borderColor: [
                        'rgb(46, 204, 113)',
                        'rgb(52, 152, 219)',
                        'rgb(241, 196, 15)',
                        'rgb(231, 76, 60)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: 'Case Status Distribution'
                    }
                }
            }
        });
    }
}

function initializeOfficialDashboard() {
    // Any additional initialization for the official dashboard
    console.log('Official dashboard initialized');
    
    // Set maximum date for case reporting to today
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('caseDate');
    if (dateInput) {
        dateInput.max = today;
    }
    
    // Initialize filter functionality
    initializeFilters();
}

function initializeFilters() {
    // In a real app, this would handle filtering of resident records
    const zoneFilter = document.getElementById('zoneFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const genderFilter = document.getElementById('genderFilter');
    
    if (zoneFilter && categoryFilter && genderFilter) {
        [zoneFilter, categoryFilter, genderFilter].forEach(filter => {
            filter.addEventListener('change', function() {
                // In a real app, this would trigger an API call to filter residents
                console.log('Filter changed:', this.id, this.value);
            });
        });
    }
}