## Negotiations Collection [/negotiations]

### Create a New Negotiation [POST /negotiations]

Posts a new negotiation. Includes: title, description, counterparty ('partyB'), uploaded MarkDown
document ('content').

NOTE: required to pass a 'Bearer token' in the body which includes the logged
in party's specific id.

+ Request (application/json)

            {
                "title": "Large Crack Loan",
                "description": "Liquidity Injection to Facilitate Increased Crack Production",
                "partyB": 2,
                "content": "### This agreement is binding and has the full force of Mexican law"
            }

+ Response 201 (application/json)

    + Body

            {
                "id": 21,
                "title": "Large Crack Loan",
                "description": "Liquidity Injection to Facilitate Increased Crack Production",
                "partyB": 2,
                "partyA": 4,
                "latestProposerA": true,
                "aVersion": 61
            }


### publish new proposal to negotiation [POST /negotiations/publish/{negotiationId}]

Publishes changes made in the editor to the negotiation. By publishing your
latest proposal it be recorded in the db and your counterparty will now be
required to act.

The updated details of the specific negotiation are included in the response body.

Note: 1) required to pass a 'Bearer token' in the body which includes the logged
in party's specific id. 2) each time a publication is made there is a new version created in the
database.


+ Request (application/json)

    + Body

            {
                "dealAgreed": false,
                "content": "### Butt Insurance #### Parties Gabe Riera and Franz Spiess. Butt butt butt butt butt butt butt butter butt butter but butt butter but butt butt butter butt butter butter butt butt butt butt butt butt butter butt butter but butt butter but butt butt butter butt butter butter butt butt butt butt butt butt butter butt butter but butt butter but butt butt butter butt butter butter butt butt butt butt butt butt butter butt butter but butt butter but butt butt butter butt butter butter butt butt butt butt butt butt butter butt butter but butt butter but butt butt butter butt butter butter"
            }

+ Response 201 (application/json)

    + Body

            {
                "id": 3,
                "title": "Butt insurance",
                "description": "Butt butt butter butt",
                "partyA": 2,
                "partyB": 4,
                "aVersion": 63,
                "bVersion": 62,
                "latestProposerA": true
            }
