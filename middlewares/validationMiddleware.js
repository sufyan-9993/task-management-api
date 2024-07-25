import { body, validationResult } from 'express-validator';

// Middleware to validate task creation and update

export const validateTaskCreation = [
    body('title').notEmpty().withMessage('Title is required'),
    body('status').isIn(['pending', 'in progress', 'completed']).withMessage('Status must be one of: pending, in progress, completed'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorsMessage = errors.array().map(error => error.msg)
            return res.status(400).json({ success: false, message: 'Validation Error', errors: errorsMessage });
        }
        next();
    }
];

export const validateTaskUpdate = [
    body('title').optional().notEmpty().withMessage('Title cannot be empty'),
    body('status').optional().isIn(['pending', 'in progress', 'completed']).withMessage('Status must be one of: pending, in progress, completed'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorsMessage = errors.array().map(error => error.msg)
            return res.status(400).json({ success: false, message: 'Validation Error', errors: errorsMessage });
        }
        next();
    }
];
