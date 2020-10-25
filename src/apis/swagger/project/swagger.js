/**
* @swagger
* /project:
*   get:
*     tags:
*       - Project APIS
*     summary: Get Project list
*     description: Get Project Details ...
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
* /project:
*   post:
*     tags:
*       - Project APIS
*     summary: Add Project
*     description: Add Project
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
*              type: string
*              required: true
*              description: name of the Project.
*            url:
*              type: string
*              required: true
*              description: Url of the project.
*            images:
*              type: string
*              required: true
*              example:
*                - https://blahblah.com
*            desc:
*              type: string
*              required: true
*              description: description of project.
*            startDate:
*              type: string
*              required: true
*              description: started date of project.
*            state:
*              type: string
*              enum: ['OVER', 'ON_GOING', 'TO_BE_STARTED']
*              required: true
*              description: state of project.
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
* /project:
*   put:
*     tags:
*       - Project APIS
*     summary: Edit Project
*     description: Edit Project
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
*            projectId:
*              type: string
*              required: true
*              description: projectId is the ObjectId of project.
*            name:
*              type: string
*              required: true
*              description: name of the Project.
*            url:
*              type: string
*              required: true
*              description: Url of the project.
*            images:
*              type: string
*              required: true
*              example:
*                - https://blahblah.com
*            desc:
*              type: string
*              required: true
*              description: description of project.
*            startDate:
*              type: string
*              required: true
*              description: started date of project.
*            state:
*              type: string
*              enum: ['OVER', 'ON_GOING', 'TO_BE_STARTED']
*              required: true
*              description: state of project.
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
* /project:
*   patch:
*     tags:
*       - Project APIS
*     summary: Edit Project
*     description: Block or unblock project
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
*            projectId:
*              type: string
*              required: true
*              description: projectId is the ObjectId of project.
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
 * /project:
 *   delete:
 *     tags:
 *       - Project APIS
 *     summary: Delete Project
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