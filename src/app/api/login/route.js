let users = [
    {
        id: 1,
        name: "tom",
        password: "tom1212"
    },
    {
        id: 2,
        name: "alex",
        password: "alex33"
    },
    {
        id:3,
        name: "dilnura",
        password: 1212
    }
];

export async function GET() {
    return Response.json(users);
}

export async function POST(req) {
    const data = await req.json();

    const user = users.find(
        (e) =>
            e.name === data.name &&
            e.password === data.password
    );

    if (!user) {
        return Response.json(
            { message: "nimadir xato  ketdi" },
            { status: 401 }
        );
    }

    return Response.json(
        {
            message: "success",
            users: user
        },
        { status: 200 }
    );
}
