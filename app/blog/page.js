import React from 'react';


async function fetchData() {
    const datafetch = process.env.NEXT_PUBLIC_API_URL + '/api/items';
    const res = await fetch(datafetch); 
    const resJson = await res.json();
  return resJson;
}

export default async function Page() {
  const users = await fetchData();
  
  return (
    <div>
      <h1>Users</h1>
      <ul>
      {users?.map((item, index) => (
                <div key={index}>
                    <p>Name: {item.name}</p>
                    <p>Manager: {item.managername}</p>
                    <p>Email: {item.email}</p>
                    <p>Mobile: {item.mobileNumber}</p>
                    <p>Accessibility: {item.accessibility}</p>
                    <p>Payment Methods: {item.paymentMethods}</p>
                    <p>Parking Fees: {item.parkingFees}</p>
                    <div>
                        <p>Address:</p>
                        <p>Street: {item.address.street}</p>
                        <p>City: {item.address.city}</p>
                        <p>State: {item.address.state}</p>
                        <p>Country: {item.address.country}</p>
                        <p>Pincode: {item.address.pincode}</p>
                    </div>
                    <div>
                        <p>EVSEs:</p>
                        {item.evses.map((evse, evseIndex) => (
                            <div key={evseIndex}>
                                <p>Status: {evse.status}</p>
                                <p>Capabilities: {evse.capabilities}</p>
                                <p>Physical Reference: {evse.physicalReference}</p>
                                <p>Floor Level: {evse.floorLevel}</p>
                                <div>
                                    <p>Connectors:</p>
                                    {evse.connectors.map((connector, connectorIndex) => (
                                        <div key={connectorIndex}>
                                            <p>Standard: {connector.standard}</p>
                                            <p>Format: {connector.format}</p>
                                            <p>Power Type: {connector.powerType}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
      </ul>
    </div>
  );
}
