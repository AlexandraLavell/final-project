const employees = [
    {
        _id: "ee1110",
        firstName: "Aisha",
        lastName: "Cardenas",
        email: "aisha_crdenas@gmorning.ca",
        phone: "514-514-1110",
        projects: {},
    },
    {
        _id: "ee1111",
        firstName: "Marietta",
        lastName: "Burgess",
        email: "marietta_burgess@gmorning.ca",
        phone: "514-514-1111",
        projects: {},
    },
    {
        _id: "ee1112",
        firstName: "Nicole",
        lastName: "Stanton",
        email: "nicole_stanton@gmorning.ca",
        phone: "514-514-1112",
        projects: {},
    },
    {
        _id: "ee1113",
        firstName: "Esther",
        lastName: "Watson",
        email: "esther_watson@gmorning.ca",
        phone: "514-514-1113",
        projects: [ {projectId:"pr1110", days:[1,87,90]}],
    },
    {
        _id: "ee1114",
        firstName: "Rebecca",
        lastName: "Chaney",
        email: "rebecca_chaney@gmorning.ca",
        phone: "514-514-1114",
        projects: {},
    },
    {
        _id: "ee1115",
        firstName: "Ella",
        lastName: "Manning",
        email: "ella_manning@gmorning.ca",
        phone: "514-514-1115",
        projects: {},
    },
    {
        _id: "ee1116",
        firstName: "Mikela",
        lastName: "Griffith",
        email: "mikela_griffith@gmorning.ca",
        phone: "514-514-1116",
        projects: {},
    },
    {
        _id: "ee1117",
        firstName: "Jessie",
        lastName: "Dyer",
        email: "jessie_dyer@gmorning.ca",
        phone: "514-514-1117",
        projects: {},
    },
    {
        _id: "ee1118",
        firstName: "Hope",
        lastName: "Nielsen",
        email: "hope_nielsen@gmorning.ca",
        phone: "514-514-1118",
        projects: {},
    },
    {
        _id: "ee1119",
        firstName: "Kimberley",
        lastName: "Richardson",
        email: "kimberley_richardson@gmorning.ca",
        phone: "514-514-1119",
        projects: {},
    },

];

const projects = [
    {
        _id: "pr1110",
        description: "TEST PROJECT",
        budget: "20",
        employees: {},
    },
    {
        _id: "pr1111",
        description: "TEST PROJECT",
        budget: "20",
        employees: {},
    },
    {
        _id: "pr1112",
        description: "TEST PROJECT",
        budget: "20",
        employees: {},
    }
]

const users = [
    {
        _id: "u1110",
        type: "admin",
        userName: "admin",
        password: "admin",
    },
    {
        _id: "u1111",
        type: "employee",
        userName: "employee",
        password: "employee",
    },
]

module.exports = { employees, projects, users };