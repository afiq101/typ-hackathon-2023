export default defineEventHandler((event) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello World",
      }),
    };
  });
  