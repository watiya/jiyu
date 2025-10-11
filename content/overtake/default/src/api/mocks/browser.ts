import { setupWorker } from 'msw/browser';
import { mockHandlers } from './handlers/mockHandlers';


export const worker = setupWorker(...mockHandlers);
