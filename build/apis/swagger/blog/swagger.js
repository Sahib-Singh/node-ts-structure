"use strict";
/**
* @swagger
* /blog:
*   get:
*     tags:
*       - Blog APIS
*     summary: Get Blog list
*     description: Get Blog Details ...
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
*         description: search on title.
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
* /blog:
*   post:
*     tags:
*       - Blog APIS
*     summary: Add Blog
*     description: Add Blog
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
*            title:
*              type: string
*              required: true
*              description: message of the query.
*            body:
*              type: string
*              required: true
*              description: message of the query.
*            images:
*              type: string
*              required: true
*              example:
*                - https://blahblah.com
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
* /blog:
*   put:
*     tags:
*       - Blog APIS
*     summary: Edit Blog
*     description: Edit Blog
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
*            blogId:
*              type: string
*              required: true
*              description: blogId is the ObjectId of blog.
*            title:
*              type: string
*              required: true
*            body:
*              type: string
*              required: true
*            images:
*              type: string
*              required: true
*              example:
*                - https://blahblah.com
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
* /blog:
*   patch:
*     tags:
*       - Blog APIS
*     summary: Edit Blog
*     description: Block or unblock blog
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
*            blogId:
*              type: string
*              required: true
*              description: blogId is the ObjectId of blog.
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
 * /blog:
 *   delete:
 *     tags:
 *       - Blog APIS
 *     summary: Delete Blog
 *     descripion: Required ids in array
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         description: token
 *         in: header
 *         required: false
 *       - name: body
 *         description: ids of the query
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