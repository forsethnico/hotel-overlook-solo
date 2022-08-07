    const customers = [
        {
            id: 101,
            name: 'Shepherd Book'
        },
        {
            id: 102,
            name: 'Mal Reynolds'
        },
        {
            id: 103,
            name: 'River Tam'
        }
    ];

    const rooms = [
        {
            number: 1,
            roomType: 'residential suite',
            bidet: true,
            bedSize: 'queen',
            numBeds: 1,
            costPerNight: 358.4
        },
        {
            number: 2,
            roomType: 'suite',
            bidet: false,
            bedSize: 'full',
            numBeds: 2,
            costPerNight: 477.38
        },
        {
            number: 3,
            roomType: 'single room',
            bidet: false,
            bedSize: 'king',
            numBeds: 1,
            costPerNight: 491.14
        }
    ];

    const bookings = [
        {
            id:"5fwrgu4i7k55hl6to",
            userID:101,
            date:"2022/02/22",
            roomNumber:1
        },
        {
            id:"5fwrgu4i7k55hl6tp",
            userID:102,
            date:"2023/11/23",
            roomNumber:2
        },
        {
            id:"5fwrgu4i7k55hl6tq",
            userID:103,
            date:"2022/02/03",
            roomNumber:3
        },
        {
            id:"5fwrgu4i7k55hl6tr",
            userID:101,
            date:"2022/01/24",
            roomNumber:1
        },
        {
            id:"5fwrgu4i7k55hl6ts",
            userID:102,
            date:"2022/01/24",
            roomNumber:2
        },
        {
            id:"5fwrgu4i7k55hl6tt",
            userID:103,
            date:"2022/01/24",
            roomNumber:3
        },
        // {
        //     id:"5fwrgu4i7k55hl6tu",
        //     userId:101,
        //     date:"2022/01/29",
        //     roomNumber:1
        // },
        // {
        //     id:"5fwrgu4i7k55hl724",
        //     userId:102,
        //     date:"2022/02/22",
        //     roomNumber:2
        // },
        // {
        //     id:"5fwrgu4i7k55hl725",
        //     userId:103,
        //     date:"2022/01/29",
        //     roomNumber:3
        // },
        // {
        //     id:"5fwrgu4i7k55hl726",
        //     userId:101,
        //     date:"2023/12/25",
        //     roomNumber:1
        // },
        // {
        //     id:"5fwrgu4i7k55hl727",
        //     userId:102,
        //     date:"2022/11/06",
        //     roomNumber:2
        // },
        // {
        //     id:"5fwrgu4i7k55hl728",
        //     userId:103,
        //     date:"2022/02/18",
        //     roomNumber:3
        // },
        // {
        //     id:"5fwrgu4i7k55hl72b",
        //     userId:101,
        //     date:"2022/02/02",
        //     roomNumber:1
        // },
        // {
        //     id:"5fwrgu4i7k55hl72c",
        //     userId:102,
        //     date:"2022/01/10",
        //     roomNumber:2
        // },
        // {
        //     id:"5fwrgu4i7k55hl72e",
        //     userId:103,
        //     date:"2022/02/13",
        //     roomNumber:3
        // }, 
        // {
        //     id:"5fwrgu4i7k55hl72f",
        //     userId:101,
        //     date:"2022/01/22",
        //     roomNumber:1
        // },
        // {
        //     id:"5fwrgu4i7k55hl72h",
        //     userId:102,
        //     date:"2023/12/22",
        //     roomNumber:2
        // }
    ];

export { customers, rooms, bookings }