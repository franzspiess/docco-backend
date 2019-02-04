## Parties Collection [/parties]

### Create new party [POST /parties]

POST: Creates an new party and returns a unique id along with the party
details provided.


+ Request (application/json)

    + Body

            {
                "legalName": "Surfboard LLC",
                "displayName": "Surf",
                "email": "surf@waves.com",
                "address": "NFA, Bondi Beach, NSW, Australia, 2000",
                "authorisation": "password"
            }

+   Response 201 (application/json)

    + Body

            {    
                "id": 9,
                "legalName": "Surfboard LLC",
                "displayName": "Surf",
                "email": "surf@waves.com",
                "address": "NFA, Bondi Beach, NSW, Australia, 2000"
            }

### Get specific details of a party by ID [GET /parties/id/{partyId}]

Gets specific details of a party by ID.

NOTE: required to pass a 'Bearer token' in the body which includes the logged
in party's specific id.

+ Request (application/json)

+ Parameters

    + partyId (number) - ID of the party in the form of an integer

+   Response 200 (application/json)

    + Body

            {
                "id": 9,
                "legalName": "Surfboard LLC",
                "displayName": "Surf",
                "email": "surf@waves.com",
                "address": "NFA, Bondi Beach, NSW, Australia, 2000"
            }

### Get specific details of a party by Email [GET /parties/id/{email}]

Gets specific details of a party by email.

NOTE: required to pass a 'Bearer token' in the body which includes the logged
in party's specific id.

+ Request (application/json)

+ Parameters

    + email (string) - Email of the party in the form of a string

+   Response 200 (application/json)

    + Body

            {
                "id": 9,
                "legalName": "Surfboard LLC",
                "displayName": "Surf",
                "email": "surf@waves.com",
                "address": "NFA, Bondi Beach, NSW, Australia, 2000"
            }
