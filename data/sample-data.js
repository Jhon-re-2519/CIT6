// Sample data for the Barangay Information Management System

const sampleData = {
    users: [
        { user_id: 1, username: "admin01", password: "admin123", role: "Admin", name: "System Administrator" },
        { user_id: 2, username: "captain_maria", password: "captainpwd", role: "Barangay_Official", name: "Maria Dela Cruz" },
        { user_id: 3, username: "ramon_reyes", password: "ramonpwd", role: "Barangay_Official", name: "Ramon Reyes" },
        { user_id: 4, username: "ana_lopez", password: "anapwd", role: "Barangay_Official", name: "Ana Lopez" },
        { user_id: 5, username: "resident_john", password: "johnpwd", role: "Resident", name: "Juan Dela Cruz" },
        { user_id: 6, username: "resident_maria", password: "mariapwd", role: "Resident", name: "Maria Lopez" },
        { user_id: 7, username: "resident_pedro", password: "pedropwd", role: "Resident", name: "Pedro Ramos" }
    ],

    officials: [
        { official_id: 1, name: "Maria Dela Cruz", position: "Barangay Captain", zone: "Zone 1", contact: "0917-123-4567" },
        { official_id: 2, name: "Ramon Reyes", position: "Secretary", zone: "Zone 2", contact: "0918-234-5678" },
        { official_id: 3, name: "Ana Lopez", position: "Treasurer", zone: "Zone 3", contact: "0919-345-6789" },
        { official_id: 4, name: "Leo Santos", position: "Kagawad", zone: "Zone 4", contact: "0912-456-7890" },
        { official_id: 5, name: "Ivy Mendoza", position: "Kagawad", zone: "Zone 5", contact: "0913-567-8901" }
    ],

    residents: [
        { resident_id: 1, name: "Juan Dela Cruz", age: 35, gender: "Male", zone: "Zone 1", category: "Regular", contact: "0912-345-6789", address: "123 Main Street, Zone 1" },
        { resident_id: 2, name: "Maria Lopez", age: 68, gender: "Female", zone: "Zone 2", category: "Senior Citizen", contact: "0917-890-1234", address: "456 Oak Avenue, Zone 2" },
        { resident_id: 3, name: "Pedro Ramos", age: 42, gender: "Male", zone: "Zone 3", category: "PWD", contact: "0918-456-7890", address: "789 Pine Road, Zone 3" },
        { resident_id: 4, name: "Liza Santos", age: 58, gender: "Female", zone: "Zone 4", category: "Regular", contact: "0919-567-8901", address: "321 Elm Street, Zone 4" },
        { resident_id: 5, name: "Jose Garcia", age: 71, gender: "Male", zone: "Zone 5", category: "Senior Citizen", contact: "0912-678-9012", address: "654 Maple Avenue, Zone 5" },
        { resident_id: 6, name: "Carmen Reyes", age: 25, gender: "Female", zone: "Zone 1", category: "Regular", contact: "0917-789-0123", address: "987 Cedar Lane, Zone 1" },
        { resident_id: 7, name: "Rico Navarro", age: 30, gender: "Male", zone: "Zone 2", category: "PWD", contact: "0918-890-1234", address: "147 Birch Street, Zone 2" },
        { resident_id: 8, name: "Tina Cruz", age: 40, gender: "Female", zone: "Zone 3", category: "Regular", contact: "0919-901-2345", address: "258 Walnut Road, Zone 3" },
        { resident_id: 9, name: "Antonio Dizon", age: 63, gender: "Male", zone: "Zone 4", category: "Senior Citizen", contact: "0912-012-3456", address: "369 Spruce Avenue, Zone 4" },
        { resident_id: 10, name: "Luisa Ramos", age: 32, gender: "Female", zone: "Zone 5", category: "Regular", contact: "0917-123-4567", address: "741 Aspen Lane, Zone 5" }
    ],

    documents: [
        { document_id: 1, resident_id: 1, type: "Barangay Clearance", purpose: "Employment Requirement", status: "Pending", date_requested: "2023-10-15", blockchain_hash: "0x1a2b3c4d5e6f7890abcd" },
        { document_id: 2, resident_id: 2, type: "Certificate of Indigency", purpose: "Scholarship Application", status: "Approved", date_requested: "2023-10-10", date_processed: "2023-10-12", blockchain_hash: "0x5e4d3c2b1a9f8e7d6c5b" },
        { document_id: 3, resident_id: 3, type: "Business Clearance", purpose: "Small Business Registration", status: "Approved", date_requested: "2023-10-05", date_processed: "2023-10-08", blockchain_hash: "0x9f8e7d6c5b4a3f2e1d0c" },
        { document_id: 4, resident_id: 4, type: "Certificate of Residency", purpose: "School Requirement", status: "Pending", date_requested: "2023-10-17", blockchain_hash: "0x3f2e1d0c9b8a7f6e5d4c" }
    ],

    appointments: [
        { appointment_id: 1, resident_id: 1, official_id: 1, purpose: "Document Pickup", date: "2023-10-20", time: "14:00", status: "Confirmed", blockchain_hash: "0x7e6d5c4b3a2f1e0d9c8b" },
        { appointment_id: 2, resident_id: 2, official_id: 2, purpose: "Meeting", date: "2023-10-25", time: "10:00", status: "Pending", blockchain_hash: "0x1b2c3d4e5f6a7b8c9d0e" },
        { appointment_id: 3, resident_id: 3, official_id: 1, purpose: "Case Mediation", date: "2023-10-22", time: "15:30", status: "Confirmed", blockchain_hash: "0x5a4b3c2d1e0f9e8d7c6b" }
    ],

    cases: [
        { case_id: 1, description: "Boundary dispute between neighbors", involved_parties: "Juan Dela Cruz, Pedro Santos", date_reported: "2023-10-10", assigned_official: "Maria Dela Cruz", status: "Under Investigation", blockchain_hash: "0x2b3c4d5e6f7a8b9c0d1e" },
        { case_id: 2, description: "Noise complaint - Karaoke until late hours", involved_parties: "Maria Lopez (complainant)", date_reported: "2023-10-08", assigned_official: "Ramon Reyes", status: "Mediation Scheduled", blockchain_hash: "0x6c5d4e3f2a1b0c9d8e7f" },
        { case_id: 3, description: "Stray dogs causing disturbance", involved_parties: "Multiple residents in Zone 3", date_reported: "2023-10-05", assigned_official: "Ana Lopez", status: "Resolved", blockchain_hash: "0x9a8b7c6d5e4f3a2b1c0d" }
    ],

    blockchain_logs: [
        { log_id: 1, timestamp: "2023-10-17 14:23:45", transaction_type: "Resident Record Update", user: "Maria Dela Cruz", details: "Updated contact information for Juan Dela Cruz", blockchain_hash: "0x1a2b3c4d5e6f7890abcd", status: "Verified" },
        { log_id: 2, timestamp: "2023-10-17 13:15:22", transaction_type: "Document Request", user: "Juan Dela Cruz", details: "Barangay Clearance requested", blockchain_hash: "0x5e4d3c2b1a9f8e7d6c5b", status: "Verified" },
        { log_id: 3, timestamp: "2023-10-17 11:42:18", transaction_type: "Case Report", user: "Ramon Reyes", details: "New case reported: Boundary dispute", blockchain_hash: "0x9f8e7d6c5b4a3f2e1d0c", status: "Verified" },
        { log_id: 4, timestamp: "2023-10-17 10:05:33", transaction_type: "Appointment Scheduling", user: "Pedro Ramos", details: "Appointment scheduled for document pickup", blockchain_hash: "0x3f2e1d0c9b8a7f6e5d4c", status: "Verified" },
        { log_id: 5, timestamp: "2023-10-16 16:45:12", transaction_type: "Resident Registration", user: "Ana Lopez", details: "New resident added: Carlos Mendoza", blockchain_hash: "0x7e6d5c4b3a2f1e0d9c8b", status: "Verified" }
    ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = sampleData;
} else {
    // For browser use
    window.sampleData = sampleData;
}