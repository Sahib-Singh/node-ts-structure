/**
* @swagger
* /members:
*   get:
*     tags:
*       - Member APIS
*     summary: Get Sub Admins details
*     description: Get Sub Admins Details ...
*     produces:
*       - application/json
*     parameters:
*       - name: authorization
*         in: header
*         required: true
*       - name: pagination
*         description: If needed pagination then put it true else false
*         in: query
*         required: true
*       - name: page
*         description: Page number must be equeal or gereater then 1
*         in: query
*         required: false
*       - name: limit
*         description: Limit the record per api.
*         in: query
*         required: false
*       - name: search
*         description: search on name.
*         in: query
*         required: false
*     responses:
*       200:
*         description: Success
*       400:
*         description: Bad Request/Parameters
*       401:
*         description: Unauthorized
*       404:
*         description: Invalid url or Resource not found
*       500:
*         description: Internal server error
*/

/**
* @swagger
* /members:
*   post:
*     tags:
*       - Member APIS
*     summary: Add Sub admins
*     description: Add Sub admins
*     produces:
*      - application/json
*     parameters:
*      - name: authorization
*        in: header
*        required: true
*      - name: body
*        description: body
*        in: body
*        required: true
*        schema:
*          type: object
*          required: true
*          properties:
*            name:
*              type: object
*              required: true
*              properties:
*                firstName:
*                  type: string
*                  required: true
*                  example: 'Sahib'
*                lastName:
*                  type: string
*                  required: true
*                  example: 'Singh'
*            contact:
*              type: object
*              required: true
*              properties:
*                email:
*                  type: string
*                  required: true
*                  example: 'Sahib'
*                phone:
*                  type: object
*                  required: true
*                  properties:
*                     dialCode:
*                         type: number
*                         required: true
*                     iso2:
*                         type: string
*                         required: true
*                     country:
*                         type: string
*                         required: true
*                     number:
*                         type: number
*                         required: true
*            address:
*              type: object
*              required: true
*              properties:
*                streetAddress:
*                  type: string
*                  required: true
*                locality:
*                  type: string
*                  required: true
*                subLocality:
*                  type: string
*                  required: true
*                region:
*                  type: string
*                  required: true
*                country:
*                  type: string
*                  required: true
*                postalCode:
*                  type: string
*                  required: true
*                formattedAddress:
*                  type: string
*                  required: true
*                geo:
*                  type: array
*                  required: true
*                  minItems: 2
*                  items:
*                    type: number
*                    example: 0,0
*            password:
*               type: string
*               required: true
*               example: 'kites@2020'
*     responses:
*       200:
*         description: Success
*       400:
*         description: Bad Request/Parameters
*       401:
*         description: Unauthorized
*       404:
*         description: Invalid url or Resource not found
*       500:
*         description: Internal server error
*/

/**
* @swagger
* /members:
*   put:
*     tags:
*       - Member APIS
*     summary: Edit Sub admins
*     description: Edit Sub admins
*     produces:
*      - application/json
*     parameters:
*      - name: authorization
*        in: header
*        required: true
*      - name: body
*        description: body
*        in: body
*        required: true
*        schema:
*          type: object
*          required: true
*          properties:
*            userId:
*              type: string
*              required: true
*              description: userId is the ObjectId of user.
*            name:
*              type: object
*              required: true
*              properties:
*                firstName:
*                  type: string
*                  required: true
*                  example: 'Sahib'
*                lastName:
*                  type: string
*                  required: true
*                  example: 'Singh'
*            contact:
*              type: object
*              required: true
*              properties:
*                email:
*                  type: string
*                  required: true
*                  example: 'Sahib'
*                phone:
*                  type: object
*                  required: true
*                  properties:
*                     dialCode:
*                         type: number
*                         required: true
*                     iso2:
*                         type: string
*                         required: true
*                     country:
*                         type: string
*                         required: true
*                     number:
*                         type: number
*                         required: true
*            address:
*              type: object
*              required: true
*              properties:
*                streetAddress:
*                  type: string
*                  required: true
*                locality:
*                  type: string
*                  required: true
*                subLocality:
*                  type: string
*                  required: true
*                region:
*                  type: string
*                  required: true
*                country:
*                  type: string
*                  required: true
*                postalCode:
*                  type: string
*                  required: true
*                formattedAddress:
*                  type: string
*                  required: true
*                geo:
*                  type: array
*                  required: true
*                  minItems: 2
*                  items:
*                    type: number
*                    example: 0,0
*     responses:
*       200:
*         description: Success
*       400:
*         description: Bad Request/Parameters
*       401:
*         description: Unauthorized
*       404:
*         description: Invalid url or Resource not found
*       500:
*         description: Internal server error
*/


/**
* @swagger
* /members:
*   patch:
*     tags:
*       - Member APIS
*     summary: Edit Sub admins
*     description: Block or unblock user
*     produces:
*      - application/json
*     parameters:
*      - name: authorization
*        in: header
*        required: true
*      - name: body
*        description: body
*        in: body
*        required: true
*        schema:
*          type: object
*          required: true
*          properties:
*            userId:
*              type: string
*              required: true
*              description: userId is the ObjectId of user.
*            isBlocked:
*              type: string
*              required: true
*              description: true for block false for unblock.
*     responses:
*       200:
*         description: Success
*       400:
*         description: Bad Request/Parameters
*       401:
*         description: Unauthorized
*       404:
*         description: Invalid url or Resource not found
*       500:
*         description: Internal server error
*/

/**
 * @swagger
 * /members:
 *   delete:
 *     tags:
 *       - Member APIS
 *     summary: Delete Sub admins
 *     descripion: Required ids in array
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         description: token
 *         in: header
 *         required: false
 *       - name: body
 *         description: ids of the user
 *         in: body
 *         required: true
 *         example:
 *          ids:
 *           - 5ca82e0b79e5821a1cb5ed11
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request/Parameters
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Invalid url or Resource not found
 *       500:
 *         description: Internal server error
 */