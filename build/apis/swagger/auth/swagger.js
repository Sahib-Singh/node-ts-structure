"use strict";
/**
 * @swagger
 * /auth/signup:
 *   post:
 *     tags:
 *       - Auth APIS
 *     summary: Add User
 *     description: Add Users
 *     produces:
 *      - application/json
 *     parameters:
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
 *            role:
 *              type: string
 *              required: false
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
 * /auth/login:
 *   post:
 *     tags:
 *       - Auth APIS
 *     summary: Login
 *     description: Only to be used by admin for reseting the password of admin panel
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               required: true
 *               example: 'sahib@kites.com'
 *             password:
 *               type: string
 *               required: true
 *               example: 'kites-education@2020'
 *             fcmToken:
 *               type: string
 *               required: true
 *             deviceId:
 *               type: string
 *               required: true
 *
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
* /auth/forgot-password:
*    post:
*      tags:
*        - Auth APIS
*      summary: send reset password request to registerd email
*      produces:
*        - application/json
*      parameters:
*        - name: body
*          in: body
*          required: true
*          schema:
*              type: object
*              properties:
*                  email:
*                      type: string
*                      required: true
*                      example: sahib@kites.com
*      responses:
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
* /auth/reset-password:
*    put:
*      tags:
*        - Auth APIS
*      summary: reset password
*      produces:
*        - application/json
*      parameters:
*        - name: body
*          in: body
*          required: true
*          schema:
*              type: object
*              properties:
*                  token:
*                      type: string
*                      required: true
*                      example: U2FsdGVkX18Hle4z2eMNSR2l9LqLBxRs6JzntNvLvK8=
*                  password:
*                      type: string
*                      required: true
*                      example: "12345678"
*      responses:
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
* /user/change-password:
*    post:
*      tags:
*        - Auth APIS
*      summary: Change user password
*      produces:
*        - application/json
*      parameters:
*        - name: Authorization
*          description: Bearer Token
*          in: header
*          required: true
*          type: string
*        - name: body
*          description: old and new password
*          in: body
*          required: true
*          schema:
*              type: object
*              properties:
*                  oldPassword:
*                      type: string
*                      required: true
*                      example: '123456789'
*                  newPassword:
*                      type: string
*                      required: true
*                      example: '123456789'
*      responses:
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
 * /user/logout:
 *   post:
 *     tags:
 *       - Auth APIS
 *     summary: Logout users from app
 *     description: Logout users from app
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         description: Bearer Token
 *         in: header
 *         required: false
 *         type: string
 *       - name: body
 *         description: send device id from which user is being logged out
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             deviceId:
 *               type: string
 *               required: true
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
* /users:
*   get:
*     tags:
*       - User APIS
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
* /users:
*   post:
*     tags:
*       - User APIS
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
* /users:
*   put:
*     tags:
*       - User APIS
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
* /users:
*   patch:
*     tags:
*       - User APIS
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
 * /users:
 *   delete:
 *     tags:
 *       - User APIS
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
//# sourceMappingURL=swagger.js.map