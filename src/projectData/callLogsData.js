export const callLogsData = [
    {
        id: "call-001",
        phoneNumber: "+1 (555) 345-6789",
        dateTime: ["2025-12-16 ", " 09:42 AM"],
        duration: "5:23",
        callType: "AI Resolved",
        issueType: "Screen",
        outcome: "Quote Provided",
        summary: "Quote Provided",
        audioUrl: "",
        transcript: [
            {
                role: "AI Assistant",
                message: "Thank you for calling UBreakiFix! How can I help you today?",
            },
            {
                role: "Customer",
                message:
                    "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?",
            },
            {
                role: "AI Assistant",
                message:
                    "I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?",
            },
            {
                role: "Customer",
                message: "Yes, please! When are you available?",
            },
            {
                role: "AI Assistant",
                message:
                    "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?",
            },
        ],
    },
    {
        id: "call-002",
        phoneNumber: "+1 (555) 345-6789",
        dateTime: ["2025-12-16", "09:42 AM"],
        duration: "5:23",
        callType: "Warm Transfer",
        issueType: "Software",
        outcome: "Escalated to technician",
        summary: "Escalated to technician",
        audioUrl: "",
        transcript: [],
    },
    {
        id: "call-003",
        phoneNumber: "+1 (555) 345-6789",
        dateTime: ["2025-12-16", "09:42 AM"],
        duration: "5:23",
        callType: "Appointment",
        issueType: "Battery",
        outcome: "Appointment Booked",
        summary: "Appointment Booked",
        audioUrl: "",
        transcript: [],
    },
    {
        id: "call-004",
        phoneNumber: "+1 (555) 345-6789",
        dateTime: ["2025-12-16", "09:42 AM"],
        duration: "0:20",
        callType: "Dropped",
        issueType: "Unknown",
        outcome: "Call Dropped",
        summary: "Call Dropped",
        audioUrl: "",
        transcript: [],
    },

    {
        id: "call-005",
        phoneNumber: "+1 (555) 123-4567",
        dateTime: ["2025-12-16", "10:45 AM"],
        duration: "4:32",
        callType: "AI Resolved",
        issueType: "Screen",
        outcome: "Quote provided",
        summary: "Quote provided",
        audioUrl: "/audio/dummy-call-005.mp3",
        transcript: [],
    },
];

export const issueArray = ["All Issues", "Screen", "Software", "Battery", "Unknown"]


export const callType = [
    "All Type",
    "AI Resolved",
    "Warm Transfer",
    "Appointment",
    "Dropped",
];

export  const dateArray = ["Today", "Last Week", "Last Month", "This Year", "All"];