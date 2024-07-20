import OpenAI from 'openai';
import { Hono } from 'hono';
import { cors } from 'hono/cors';

interface Bindings {
	OPEN_AI_KEY: string;
	AI: Ai;
};

const app = new Hono<{ Bindings: Bindings }>();
