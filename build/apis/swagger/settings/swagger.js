"use strict";
/**
* @swagger
*
* /settings:
*   get:
*     tags:
*       - SETTINGS
*     description: get Setting details without bearer token
*     summary: get Setting details
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     parameters:
*       - name: authorization
*         description: Bearer Token
*         in: header
*         required: true
*     responses:
*       200:
*         description: Setting object get
*       400:
*         description: Invalid Parameters
*       403:
*         description: Forbidden request
*       500:
*         description: Internal Server Error
*/
/**
 * @swagger
 *
 * /settings:
 *   put:
 *     tags:
 *       - SETTINGS
 *     description: Update a Setting object
 *     summary: Update setting details
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: authorization
 *         description: Bearer Token
 *         in: header
 *         required: true
 *       - name: body
 *         description: Object for setting details
 *         in: body
 *         required: true
 *         example: # Sample object
 *           name: kites Technology
 *           address: {streetAddress: 123, locality: abc, subLocality: xyz, region: PUNJAB, country: INDIA, postalCode: "213234", formattedAddress: qwerty ,geo: [35.5, 30.0]}
 *           contact: {email: sahib@kites.com, phone: {dialCode: 91, iso2: IN, country: INDIA , number: 9876543210 } }
 *           privacyPolicy: {title: PRIVACY_POLICY, value: Lorem Ipsum is simply dummy text of the printing and typesetting industry., description: Offical Condition }
 *           termsAndCondition: {title: TERMS_AND_CONDITIONS, value: Lorem Ipsum is simply dummy text of the printing and typesetting industry., description: Offical Condition }
 *           others: [{title: website, value: https://google.com, description: website url }]
 *           founder: [Leo, David]
 *           foundingDate: 2019-02-12
 *           links: [{title: website, value: https://google.com, description: website url }]
 *     responses:
 *       200:
 *         description: setting object updated successfully
 *       400:
 *         description: Invalid Parameters
 *       404:
 *         description: Setting Id not found
 *       403:
 *         description: Forbidden request
 *       500:
 *         description: Bad Request
 */
//# sourceMappingURL=swagger.js.map