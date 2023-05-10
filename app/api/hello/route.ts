export async function GET(request: Request) {
  console.log('ON HELLO WORLD');
  return new Response('Hello, Next.js!');
}
