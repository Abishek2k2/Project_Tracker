const employees = 
     [
        {
            "id": 1,
            "email": "employee1@example.com",
            "password": "123",
            "tasks": [
                {
                    "task_title": "Design Homepage",
                    "task_description": "Create a responsive homepage layout.",
                    "task_date": "2025-02-24",
                    "category": "Design",
                    "active": true,
                    "new_task": false,
                    "completed": false,
                    "failed": false
                },
                {
                    "task_title": "Fix Navbar Bug",
                    "task_description": "Resolve the issue with navbar dropdown.",
                    "task_date": "2025-02-23",
                    "category": "Development",
                    "active": true,
                    "new_task": true,
                    "completed": false,
                    "failed": false
                }
            ]
        },
        {
            "id": 2,
            "email": "employee2@example.com",
            "password": "123",
            "tasks": [
                {
                    "task_title": "Write API Documentation",
                    "task_description": "Document all backend APIs in detail.",
                    "task_date": "2025-02-26",
                    "category": "Documentation",
                    "active": false,
                    "new_task": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "task_title": "Database Optimization",
                    "task_description": "Improve query performance.",
                    "task_date": "2025-02-22",
                    "category": "Database",
                    "active": true,
                    "new_task": false,
                    "completed": true,
                    "failed": false
                }
            ]
        },
        {
            "id": 3,
            "email": "employee3@example.com",
            "password": "123",
            "tasks": [
                {
                    "task_title": "Client Meeting",
                    "task_description": "Discuss new project requirements.",
                    "task_date": "2025-02-20",
                    "category": "Management",
                    "active": false,
                    "new_task": false,
                    "completed": true,
                    "failed": false
                },
                {
                    "task_title": "Bug Fixing",
                    "task_description": "Fix high-priority bugs.",
                    "task_date": "2025-02-25",
                    "category": "Development",
                    "active": true,
                    "new_task": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "task_title": "Code Review",
                    "task_description": "Review pull requests from team members.",
                    "task_date": "2025-02-21",
                    "category": "Development",
                    "active": true,
                    "new_task": false,
                    "completed": true,
                    "failed": false
                }
            ]
        },
        {
            "id": 4,
            "email": "employee4@example.com",
            "password": "123",
            "tasks": [
                {
                    "task_title": "Marketing Strategy",
                    "task_description": "Plan a new social media campaign.",
                    "task_date": "2025-02-27",
                    "category": "Marketing",
                    "active": true,
                    "new_task": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "task_title": "Product Testing",
                    "task_description": "Conduct usability testing for the new feature.",
                    "task_date": "2025-02-23",
                    "category": "Testing",
                    "active": false,
                    "new_task": false,
                    "completed": true,
                    "failed": false
                }
            ]
        },
        {
            "id": 5,
            "email": "employee5@example.com",
            "password": "123",
            "tasks": [
                {
                    "task_title": "User Feedback Analysis",
                    "task_description": "Analyze user feedback from recent surveys.",
                    "task_date": "2025-02-28",
                    "category": "Analysis",
                    "active": true,
                    "new_task": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "task_title": "Deploy App Update",
                    "task_description": "Push the latest version of the app to production.",
                    "task_date": "2025-02-22",
                    "category": "Deployment",
                    "active": false,
                    "new_task": false,
                    "completed": false,
                    "failed": true
                }
            ]
        }
    ]


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(employees, admin)
}