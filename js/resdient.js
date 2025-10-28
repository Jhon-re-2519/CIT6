// Resident Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // No authentication check needed
    
    // Update user name in navbar
    const userDropdown = document.getElementById('userDropdown');
    if (userDropdown) {
        userDropdown.innerHTML = `<i class="fas fa-user-circle me-1"></i> Juan Dela Cruz`;
    }
    
    // Tab navigation
    setupTabNavigation();
    
    // Form handling
    setupDocumentRequestForm();
    setupAppointmentForm();
    
    // Initialize any resident-specific functionality
    initializeResidentDashboard();
});

// Remove the checkAuth function entirely
// Remove the authenticateUser function
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

function setupDocumentRequestForm() {
    const form = document.getElementById('documentRequestForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const documentType = document.getElementById('documentType').value;
            const purpose = document.getElementById('purpose').value;
            
            if (!documentType) {
                showResidentAlert('Please select a document type.', 'warning');
                return;
            }
            
            // Simulate form submission
            simulateDocumentRequest(documentType, purpose);
        });
    }
}

function setupAppointmentForm() {
    const saveButton = document.getElementById('saveAppointment');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            const date = document.getElementById('appointmentDate').value;
            const time = document.getElementById('appointmentTime').value;
            const purpose = document.getElementById('appointmentPurpose').value;
            const details = document.getElementById('appointmentDetails').value;
            
            if (!date || !time || !purpose) {
                showResidentAlert('Please fill in all required fields.', 'warning');
                return;
            }
            
            // Simulate appointment scheduling
            simulateAppointmentScheduling(date, time, purpose, details);
        });
    }
}

function simulateDocumentRequest(documentType, purpose) {
    // Show loading state
    const submitButton = document.querySelector('#documentRequestForm button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-1"></i> Submitting...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Show success message
        showResidentAlert('Document request submitted successfully!', 'success');
        
        // Reset form
        document.getElementById('documentRequestForm').reset();
        
        // Add to blockchain (simulated)
        addToBlockchain('document_request', {
            type: documentType,
            purpose: purpose,
            resident: 'Juan Dela Cruz',
            timestamp: new Date().toISOString()
        });
        
        // Update request status tab
        updateRequestStatus();
        
    }, 1500);
}

function simulateAppointmentScheduling(date, time, purpose, details) {
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('scheduleModal'));
    modal.hide();
    
    // Show success message
    showResidentAlert('Appointment scheduled successfully!', 'success');
    
    // Add to blockchain (simulated)
    addToBlockchain('appointment_scheduled', {
        date: date,
        time: time,
        purpose: purpose,
        details: details,
        resident: 'Juan Dela Cruz',
        timestamp: new Date().toISOString()
    });
}

function updateRequestStatus() {
    // In a real app, this would fetch updated data from the server
    console.log('Updating request status...');
}

function addToBlockchain(action, data) {
    // Simulate blockchain transaction
    console.log(`Adding to blockchain: ${action}`, data);
    
    // In a real implementation, this would make an API call to your blockchain service
    // For this mockup, we'll just log to console
    const hash = '0x' + Math.random().toString(16).substr(2, 16) + Math.random().toString(16).substr(2, 16);
    console.log(`Blockchain hash: ${hash}`);
}

function showResidentAlert(message, type) {
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

function initializeResidentDashboard() {
    // Any additional initialization for the resident dashboard
    console.log('Resident dashboard initialized');
    
    // Set minimum date for appointment to today
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('appointmentDate');
    if (dateInput) {
        dateInput.min = today;
    }
}