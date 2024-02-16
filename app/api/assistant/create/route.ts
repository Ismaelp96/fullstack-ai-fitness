import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST() {
  const openai = new OpenAI();
  try {
    const assistant = await openai.beta.assistants.create({
      model: 'gpt-3.5-turbo-0125',
      name: 'Ismael Patrick',
      instructions: `Prompt: "Create an AI assistant that responds to user queries about their progress in the workout"`,
    });
    console.log(assistant);
    return NextResponse.json({ assistant }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
