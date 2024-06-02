// Import the necessary modules
import { Response } from 'https://deno.land/x/servest/mod.ts';

export async function GET(req) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers });
  }

  const data = [
    {
      "name": "new post",
      "address": {
          "street": "no 2892, palm shore",
          "city": "florida",
          "state": "california",
          "country": "USA",
          "pincode": 787892,
          "status": 1
      },
      "latitude": "7878.0",
      "longitude": "7878.0",
      "managername": "jonathan ",
      "email": "jonathan@yahoo.com",
      "mobileNumber": "768775760",
      "operatingHours": null,
      "maximumPowerInKwh": null,
      "accessibility": "CUSTOMERS",
      "paymentMethods": "Credit Card",
      "parkingFees": 12333,
      "additionalAmenities": "Maintenance",
      "evses": [
          {
              "status": "active",
              "capabilities": "RF_ID",
              "physicalReference": "test",
              "floorLevel": "Ground_Level",
              "connectors": [
                  {
                      "standard": "AC TYPE-1",
                      "format": "null",
                      "powerType": "AC_1_PHASE"
                  }
              ]
          }
      ],
      "openingTimesDTO": {
          "regularHours": [
             {
          "weekday": 1,
          "periodBegin": "00:00",
          "periodEnd": "23:59"
        }
          ],
          "twentyFourSeven": true,
          "exceptionalOpenings": [
              {
                  "periodBegin": null,
                  "periodEnd": null
              }
          ],
          "exceptionalClosings": [
              {
                  "periodBegin": null,
                  "periodEnd": null
              }
          ]
      }
  }
    
  ];

  // Return response with CORS headers and JSON data
  return new Response(JSON.stringify(data), { headers });
}
