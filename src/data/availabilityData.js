// const availabilityData = [
//   {
//     sqFt: '3,500-7,000',
//     addresses: [
//       {
//         title: '757 S. ALAMEDA',
//         floorplans: []
//       },
//       {
//         title: '767 S. ALAMEDA',
//         floorplans: [
//           { number: 410, address: 767 },
//           { number: 418, address: 767 },
//           { number: 434, address: 767 },
//           { number: 465, address: 767 }
//         ]
//       }
//     ]
//   },
//   {
//     sqFt: '7,000-15,000',
//     addresses: [
//       {
//         title: '757 S. ALAMEDA',
//         floorplans: []
//       },
//       {
//         title: '767 S. ALAMEDA',
//         floorplans: [{ number: 400, address: 767 }]
//       }
//     ]
//   },
//   {
//     sqFt: '15,000-35,000',
//     addresses: [
//       {
//         title: '757 S. ALAMEDA',
//         floorplans: []
//       },
//       {
//         title: '767 S. ALAMEDA',
//         floorplans: []
//       }
//     ]
//   },
//   {
//     sqFt: '35,000-200,000',
//     addresses: [
//       {
//         title: '757 S. ALAMEDA',
//         floorplans: [{ number: 300, address: 757 }]
//       },
//       {
//         title: '767 S. ALAMEDA',
//         floorplans: []
//       }
//     ]
//   }
// ];

const availabilityData = [
  {
    address: '767 S. ALAMEDA',
    building: 1,
    sqFt: '3,500-7,000',
    floorplans: [
      { number: 410, address: 767 },
      { number: 418, address: 767 },
      { number: 434, address: 767 },
      { number: 465, address: 767 }
    ]
  },
  {
    address: '767 S. ALAMEDA',
    building: 2,
    sqFt: '7,000-15,000',
    floorplans: [{ number: 400, address: 767 }]
  },
  {
    address: '767 S. ALAMEDA',
    building: 2,
    sqFt: '15,000-35,000',
    floorplans: []
  },
  {
    address: '757 S. ALAMEDA',
    building: 3,
    sqFt: '35,000-200,000',
    floorplans: [{ number: 300, address: 757 }]
  }
];

export default availabilityData;
